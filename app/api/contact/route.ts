import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/* ── Helpers ─────────────────────────────────────────────────────── */

function row(label: string, value: string, highlight = false) {
  return `
    <tr>
      <td style="
        padding:12px 16px;
        font-size:12px;
        color:#64748b;
        font-weight:600;
        text-transform:uppercase;
        letter-spacing:0.06em;
        white-space:nowrap;
        border-bottom:1px solid #f1f5f9;
        width:150px;
        vertical-align:top;
      ">${label}</td>
      <td style="
        padding:12px 16px;
        font-size:14px;
        color:${highlight ? '#00B8C4' : '#0f172a'};
        font-weight:${highlight ? '700' : '500'};
        border-bottom:1px solid #f1f5f9;
        line-height:1.5;
      ">${value}</td>
    </tr>`
}

function badge(text: string, bg: string, color: string) {
  return `<span style="
    display:inline-block;
    background:${bg};
    color:${color};
    font-size:11px;
    font-weight:700;
    padding:3px 10px;
    border-radius:20px;
    letter-spacing:0.05em;
    text-transform:uppercase;
  ">${text}</span>`
}

/* ── Route Handler ───────────────────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const nom        = formData.get('nom')?.toString() ?? ''
    const entreprise = formData.get('entreprise')?.toString() ?? ''
    const email      = formData.get('email')?.toString() ?? ''
    const telephone  = formData.get('telephone')?.toString() ?? ''
    const sujet      = formData.get('sujet')?.toString() ?? ''
    const poste      = formData.get('poste')?.toString() ?? ''
    const message    = formData.get('message')?.toString() ?? ''

    /* ── Pièces jointes ──────────────────────────────────────── */
    const fileKeys = Array.from(formData.keys()).filter((k) => k.startsWith('file_'))
    const attachments: { filename: string; content: Buffer }[] = []

    for (const key of fileKeys) {
      const file = formData.get(key) as File | null
      if (file && typeof file !== 'string' && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({ filename: file.name, content: buffer })
      }
    }

    /* ── Routage email ───────────────────────────────────────── */
    const isRecruitment =
      sujet.toLowerCase().includes('recrutement') ||
      sujet.toLowerCase().includes('candidature')

    const toEmail = isRecruitment
      ? process.env.CONTACT_EMAIL_RECRUTEMENT
      : process.env.CONTACT_EMAIL

    const now = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Brazzaville',
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    /* ── Template HTML ───────────────────────────────────────── */
    const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${isRecruitment ? 'Nouvelle candidature' : 'Nouveau message'} — NOISIM</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <!-- ── HEADER ─────────────────────────────────────── -->
        <tr><td style="
          background:linear-gradient(135deg,#051827 0%,#083A5E 100%);
          border-radius:16px 16px 0 0;
          padding:36px 40px 32px;
          position:relative;
        ">
          <!-- Logo + brand -->
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="
                      background:linear-gradient(135deg,#00B8C4,#17D4E0);
                      border-radius:10px;
                      width:40px; height:40px;
                      text-align:center;
                      vertical-align:middle;
                      font-size:18px; font-weight:900; color:#fff;
                      line-height:40px;
                    ">N</td>
                    <td style="padding-left:12px;">
                      <span style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.02em;">NOISIM</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td align="right" style="vertical-align:middle;">
                ${badge(
                  isRecruitment ? '📋 Candidature' : '📩 Contact',
                  isRecruitment ? 'rgba(0,184,196,0.2)' : 'rgba(255,255,255,0.1)',
                  '#00B8C4'
                )}
              </td>
            </tr>
          </table>

          <!-- Title -->
          <h1 style="
            margin:28px 0 6px;
            font-size:24px;
            font-weight:900;
            color:#fff;
            letter-spacing:-0.02em;
            line-height:1.2;
          ">
            ${isRecruitment
              ? `Nouvelle candidature${poste ? ` — <span style="color:#00B8C4">${poste}</span>` : ''}`
              : `Nouveau message de contact`
            }
          </h1>
          <p style="margin:0;font-size:13px;color:#94a3b8;">
            Reçu le ${now} · via noisim.com
          </p>

          <!-- Accent line -->
          <div style="
            height:3px;
            background:linear-gradient(90deg,#00B8C4,#17D4E0,transparent);
            border-radius:2px;
            margin-top:24px;
          "></div>
        </td></tr>

        <!-- ── BODY ───────────────────────────────────────── -->
        <tr><td style="background:#fff;padding:0;">

          <!-- Informations expéditeur -->
          <div style="padding:28px 40px 0;">
            <p style="
              margin:0 0 12px;
              font-size:11px;
              font-weight:700;
              color:#94a3b8;
              text-transform:uppercase;
              letter-spacing:0.1em;
            ">Informations de contact</p>
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f1f5f9;">
            ${row('Nom', nom)}
            ${entreprise ? row('Entreprise', entreprise) : ''}
            ${row('Email', `<a href="mailto:${email}" style="color:#00B8C4;text-decoration:none;">${email}</a>`)}
            ${telephone ? row('Téléphone', `<a href="tel:${telephone}" style="color:#0f172a;text-decoration:none;">${telephone}</a>`) : ''}
            ${row('Sujet', sujet, true)}
            ${poste ? row('Poste visé', poste) : ''}
          </table>

          <!-- Message -->
          <div style="padding:24px 40px;">
            <p style="
              margin:0 0 10px;
              font-size:11px;
              font-weight:700;
              color:#94a3b8;
              text-transform:uppercase;
              letter-spacing:0.1em;
            ">Message</p>
            <div style="
              background:#f8fafc;
              border:1px solid #e2e8f0;
              border-left:3px solid #00B8C4;
              border-radius:0 10px 10px 0;
              padding:18px 20px;
            ">
              <p style="
                margin:0;
                font-size:14px;
                color:#334155;
                line-height:1.7;
                white-space:pre-line;
              ">${message}</p>
            </div>
          </div>

          <!-- Pièces jointes -->
          ${attachments.length > 0 ? `
          <div style="padding:0 40px 24px;">
            <p style="
              margin:0 0 10px;
              font-size:11px;
              font-weight:700;
              color:#94a3b8;
              text-transform:uppercase;
              letter-spacing:0.1em;
            ">Documents joints (${attachments.length})</p>
            <div style="
              background:#f0fdf4;
              border:1px solid #bbf7d0;
              border-radius:10px;
              padding:14px 18px;
            ">
              ${attachments.map((a) => `
              <div style="display:flex;align-items:center;margin-bottom:6px;last-child:margin-bottom:0">
                <span style="
                  display:inline-block;
                  width:28px; height:28px;
                  background:#dcfce7;
                  border-radius:6px;
                  text-align:center;
                  line-height:28px;
                  font-size:14px;
                  margin-right:10px;
                  flex-shrink:0;
                ">📎</span>
                <span style="font-size:13px;color:#166534;font-weight:500;">${a.filename}</span>
              </div>`).join('')}
            </div>
          </div>` : ''}

        </td></tr>

        <!-- ── ACTION BUTTON ──────────────────────────────── -->
        <tr><td style="background:#fff;padding:0 40px 28px;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(sujet)}"
            style="
              display:block;
              text-align:center;
              background:linear-gradient(135deg,#00B8C4,#17D4E0);
              color:#fff;
              font-size:14px;
              font-weight:700;
              text-decoration:none;
              padding:14px 24px;
              border-radius:10px;
              letter-spacing:0.02em;
            ">
            ↩ Répondre à ${nom}
          </a>
        </td></tr>

        <!-- ── FOOTER ─────────────────────────────────────── -->
        <tr><td style="
          background:#051827;
          border-radius:0 0 16px 16px;
          padding:20px 40px;
        ">
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
                <p style="margin:0;font-size:11px;color:#334155;">
                  Email automatique<br />Ne pas répondre directement
                </p>
              </td>
            </tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`

    /* ── Envoi ───────────────────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"NOISIM Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: isRecruitment
        ? `[Candidature] ${poste || 'Spontanée'} — ${nom}`
        : `[Contact] ${sujet} — ${nom}`,
      html,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('EMAIL ERROR:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
