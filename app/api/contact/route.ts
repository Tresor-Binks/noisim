import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const maxDuration = 60

/* ── Limites ─────────────────────────────────────────────────────── */
const MAX_FILE_SIZE  = 5 * 1024 * 1024   // 5 Mo par fichier
const MAX_TOTAL_SIZE = 8 * 1024 * 1024   // 8 Mo au total (base64 ajoute ~33 %)
const MAX_FILES      = 10

const DOC_LABELS: Record<string, string> = {
  cv:                 'CV',
  lettre:             'Lettre de motivation',
  diplome:            'Diplome',
  piece_identite:     'Piece identite',
  convention_stage:   'Convention de stage',
  releve_notes:       'Releve de notes',
  permis_de_conduire: 'Permis de conduire',
  passport:           'Passeport',
}

/* ── Helpers ─────────────────────────────────────────────────────── */

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label: string, valueHtml: string, highlight = false) {
  return `
    <tr>
      <td style="padding:12px 16px;font-size:12px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;border-bottom:1px solid #f1f5f9;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:12px 16px;font-size:14px;color:${highlight ? '#00B8C4' : '#0f172a'};font-weight:${highlight ? '700' : '500'};border-bottom:1px solid #f1f5f9;line-height:1.5;">${valueHtml}</td>
    </tr>`
}

function badge(text: string, bg: string, color: string) {
  return `<span style="display:inline-block;background:${bg};color:${color};font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:0.05em;text-transform:uppercase;">${text}</span>`
}

function cleanKey(k: string) {
  return k.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 40)
}

function bad(error: string, status = 400) {
  return NextResponse.json({ success: false, error }, { status })
}

/* ── Route Handler ───────────────────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const nom        = (formData.get('nom')?.toString() ?? '').trim()
    const entreprise = (formData.get('entreprise')?.toString() ?? '').trim()
    const email      = (formData.get('email')?.toString() ?? '').trim()
    const telephone  = (formData.get('telephone')?.toString() ?? '').trim()
    const sujet      = (formData.get('sujet')?.toString() ?? '').trim()
    const poste      = (formData.get('poste')?.toString() ?? '').trim()
    const message    = (formData.get('message')?.toString() ?? '').trim()
    const requiredDocs = (formData.get('required_docs')?.toString() ?? '')
      .split(',')
      .map(cleanKey)
      .filter(Boolean)

    /* ── Validation serveur ──────────────────────────────────── */
    if (nom.length < 2)                               return bad('Nom invalide')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))    return bad('Email invalide')
    if (!sujet)                                       return bad('Sujet manquant')
    if (message.length < 20)                          return bad('Message trop court')

    const isRecruitment =
      sujet.toLowerCase().includes('recrutement') ||
      sujet.toLowerCase().includes('candidature')

    /* ── Pièces jointes ──────────────────────────────────────── */
    const fileKeys = Array.from(formData.keys()).filter((k) => k.startsWith('file_'))
    if (fileKeys.length > MAX_FILES) return bad('Trop de fichiers')

    const safeNom = nom.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').slice(0, 40) || 'candidat'
    const attachments: { filename: string; content: Buffer; contentType: string }[] = []
    const attachmentLabels: string[] = []
    let totalSize = 0

    for (const rawKey of fileKeys) {
      const value = formData.get(rawKey)
      if (!value || typeof value === 'string') continue
      const file = value as File
      if (file.size === 0) continue

      if (file.size > MAX_FILE_SIZE) {
        return bad(`Le fichier "${file.name}" depasse 5 Mo`, 413)
      }

      const buffer = Buffer.from(await file.arrayBuffer())

      // Vérifie que c'est bien un PDF (signature %PDF)
      if (buffer.subarray(0, 4).toString('latin1') !== '%PDF') {
        return bad(`Le fichier "${file.name}" n'est pas un PDF valide`)
      }

      totalSize += buffer.length
      if (totalSize > MAX_TOTAL_SIZE) {
        return bad('Taille totale des pieces jointes trop elevee (max 8 Mo)', 413)
      }

      const key = cleanKey(rawKey.replace(/^file_/, ''))
      attachments.push({
        filename: `${key}_${safeNom}.pdf`,
        content: buffer,
        contentType: 'application/pdf',
      })
      attachmentLabels.push(DOC_LABELS[key] ?? key)
    }

    // Vérifie que tous les documents requis sont présents (candidatures)
    if (isRecruitment && requiredDocs.length > 0) {
      const received = new Set(attachments.map((a) => a.filename.split('_')[0]))
      const receivedKeys = new Set(
        fileKeys.map((k) => cleanKey(k.replace(/^file_/, '')))
      )
      const missing = requiredDocs.filter((k) => !receivedKeys.has(k) && !received.has(k))
      if (missing.length > 0) {
        return bad(`Documents manquants : ${missing.map((k) => DOC_LABELS[k] ?? k).join(', ')}`)
      }
    }

    /* ── Routage email ───────────────────────────────────────── */
    const emailContact     = process.env.CONTACT_EMAIL
    const emailRecrutement = process.env.CONTACT_EMAIL_RECRUTEMENT

    if (!emailContact) {
      console.error('MISSING ENV: CONTACT_EMAIL is not defined')
      return bad('Configuration email manquante', 500)
    }
    if (isRecruitment && !emailRecrutement) {
      console.error('MISSING ENV: CONTACT_EMAIL_RECRUTEMENT is not defined')
      return bad('Configuration email recrutement manquante', 500)
    }
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('MISSING ENV: SMTP_* is not fully defined')
      return bad('Configuration SMTP manquante', 500)
    }

    const toEmail = isRecruitment ? emailRecrutement! : emailContact

    const now = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Brazzaville',
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    /* ── Valeurs échappées ───────────────────────────────────── */
    const eNom        = escapeHtml(nom)
    const eEntreprise = escapeHtml(entreprise)
    const eEmail      = escapeHtml(email)
    const eTel        = escapeHtml(telephone)
    const eSujet      = escapeHtml(sujet)
    const ePoste      = escapeHtml(poste)
    const eMessage    = escapeHtml(message)

    /* ── Template HTML ───────────────────────────────────────── */
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${isRecruitment ? 'Nouvelle candidature' : 'Nouveau message'} — NOISIM</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <!-- HEADER -->
        <tr><td style="background:#083A5E;background:linear-gradient(135deg,#051827 0%,#083A5E 100%);border-radius:16px 16px 0 0;padding:36px 40px 32px;">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background:#00B8C4;border-radius:10px;width:40px;height:40px;text-align:center;vertical-align:middle;font-size:18px;font-weight:900;color:#fff;line-height:40px;">N</td>
                    <td style="padding-left:12px;">
                      <span style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.02em;">NOISIM</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td align="right" style="vertical-align:middle;">
                ${badge(
                  isRecruitment ? 'Candidature' : 'Contact',
                  isRecruitment ? 'rgba(0,184,196,0.2)' : 'rgba(255,255,255,0.1)',
                  '#00B8C4'
                )}
              </td>
            </tr>
          </table>

          <h1 style="margin:28px 0 6px;font-size:24px;font-weight:900;color:#fff;letter-spacing:-0.02em;line-height:1.2;">
            ${isRecruitment
              ? `Nouvelle candidature${poste ? ` — <span style="color:#00B8C4">${ePoste}</span>` : ''}`
              : 'Nouveau message de contact'}
          </h1>
          <p style="margin:0;font-size:13px;color:#94a3b8;">Reçu le ${now} · via noisim.com</p>

          <div style="height:3px;background:linear-gradient(90deg,#00B8C4,#17D4E0,transparent);border-radius:2px;margin-top:24px;"></div>
        </td></tr>

        <!-- BODY -->
        <tr><td style="background:#fff;padding:0;">

          <div style="padding:28px 40px 0;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">Informations de contact</p>
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f1f5f9;">
            ${row('Nom', eNom)}
            ${entreprise ? row('Entreprise', eEntreprise) : ''}
            ${row('Email', `<a href="mailto:${eEmail}" style="color:#00B8C4;text-decoration:none;">${eEmail}</a>`)}
            ${telephone ? row('Téléphone', `<a href="tel:${eTel}" style="color:#0f172a;text-decoration:none;">${eTel}</a>`) : ''}
            ${row('Sujet', eSujet, true)}
            ${poste ? row('Poste visé', ePoste) : ''}
          </table>

          <div style="padding:24px 40px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #00B8C4;border-radius:0 10px 10px 0;padding:18px 20px;">
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-line;">${eMessage}</p>
            </div>
          </div>

          ${attachments.length > 0 ? `
          <div style="padding:0 40px 24px;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">Documents joints (${attachments.length})</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
              ${attachments.map((a, i) => `
              <tr>
                <td style="padding:8px 16px;font-size:13px;color:#166534;font-weight:500;">
                  &#128206; ${escapeHtml(attachmentLabels[i])} <span style="color:#16a34a;font-weight:400;">(${escapeHtml(a.filename)} · ${(a.content.length / 1024).toFixed(0)} Ko)</span>
                </td>
              </tr>`).join('')}
            </table>
          </div>` : ''}

        </td></tr>

        <!-- ACTION -->
        <tr><td style="background:#fff;padding:0 40px 28px;">
          <a href="mailto:${eEmail}?subject=${encodeURIComponent('Re: ' + sujet)}"
            style="display:block;text-align:center;background:#00B8C4;color:#fff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 24px;border-radius:10px;letter-spacing:0.02em;">
            Répondre à ${eNom}
          </a>
        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background:#051827;border-radius:0 0 16px 16px;padding:20px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
                  <strong style="color:#94a3b8;">NOISIM</strong> · Avenue Alfred Raoul, Pointe-Noire<br />
                  <a href="mailto:contact@noisim.com" style="color:#00B8C4;text-decoration:none;">contact@noisim.com</a>
                  &nbsp;·&nbsp;
                  <a href="https://noisim.com" style="color:#00B8C4;text-decoration:none;">noisim.com</a>
                </p>
              </td>
              <td align="right" style="vertical-align:top;">
                <p style="margin:0;font-size:11px;color:#334155;">Email automatique<br />Utilisez le bouton « Répondre »</p>
              </td>
            </tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`

    const text = [
      isRecruitment ? 'NOUVELLE CANDIDATURE' : 'NOUVEAU MESSAGE',
      `Reçu le ${now}`,
      '',
      `Nom : ${nom}`,
      entreprise ? `Entreprise : ${entreprise}` : '',
      `Email : ${email}`,
      telephone ? `Téléphone : ${telephone}` : '',
      `Sujet : ${sujet}`,
      poste ? `Poste visé : ${poste}` : '',
      '',
      'Message :',
      message,
      '',
      attachments.length ? `Pièces jointes : ${attachments.map((a) => a.filename).join(', ')}` : '',
    ].filter((l, i, arr) => l !== '' || arr[i - 1] !== '').join('\n')

    /* ── Envoi ───────────────────────────────────────────────── */
    const port = Number(process.env.SMTP_PORT)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 30_000,
      greetingTimeout:   30_000,
      socketTimeout:     60_000,
    })

    const info = await transporter.sendMail({
      from: `"NOISIM Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: isRecruitment
        ? `[Candidature] ${poste || 'Spontanée'} — ${nom}`
        : `[Contact] ${sujet} — ${nom}`,
      text,
      html,
      attachments,
    })

    console.log('[NOISIM Contact] Envoi', {
      to: toEmail,
      isRecruitment,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
      messageId: info.messageId,
      nbFiles: attachments.length,
      totalMo: (totalSize / 1024 / 1024).toFixed(2),
    })

    if (!info.accepted || info.accepted.length === 0 || (info.rejected && info.rejected.length > 0)) {
      console.error('[NOISIM Contact] Destinataire rejeté par le serveur SMTP', info.rejected)
      return bad('Le serveur mail a refusé le message', 502)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('EMAIL ERROR:', error)
    return bad('Erreur serveur', 500)
  }
}