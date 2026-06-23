import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const nom       = formData.get('nom')?.toString()
    const entreprise = formData.get('entreprise')?.toString()
    const email     = formData.get('email')?.toString()
    const telephone = formData.get('telephone')?.toString()
    const sujet     = formData.get('sujet')?.toString()
    const poste     = formData.get('poste')?.toString()
    const message   = formData.get('message')?.toString()

    /* ── Fichiers uploadés ─────────────────────────────────── */
    const fileKeys = Array.from(formData.keys()).filter((k) => k.startsWith('file_'))
    const attachments: { filename: string; content: Buffer }[] = []

    for (const key of fileKeys) {
      const file = formData.get(key) as File | null
      if (file && typeof file !== 'string' && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({ filename: file.name, content: buffer })
      }
    }

    /* ── Transporter SMTP ──────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    /* ── Routage email selon le sujet ─────────────────────── */
    const isRecruitment =
      sujet?.toLowerCase().includes('recrutement') ||
      sujet?.toLowerCase().includes('candidature')

    const toEmail = isRecruitment
      ? process.env.CONTACT_EMAIL_RECRUTEMENT
      : process.env.CONTACT_EMAIL

    /* ── Contenu HTML ──────────────────────────────────────── */
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#051827;padding:24px 32px;border-radius:12px 12px 0 0">
          <h2 style="color:#00B8C4;margin:0;font-size:20px">
            ${isRecruitment ? '📋 Nouvelle candidature' : '📩 Nouveau message de contact'}
          </h2>
          <p style="color:#94a3b8;margin:6px 0 0;font-size:13px">via noisim.com</p>
        </div>

        <div style="background:#f8fafc;padding:24px 32px;border:1px solid #e2e8f0;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-size:13px;color:#64748b;width:140px">Nom</td>
                <td style="padding:8px 0;font-size:13px;color:#0f172a;font-weight:600">${nom}</td></tr>
            ${entreprise ? `<tr><td style="padding:8px 0;font-size:13px;color:#64748b">Entreprise</td>
                <td style="padding:8px 0;font-size:13px;color:#0f172a">${entreprise}</td></tr>` : ''}
            <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Email</td>
                <td style="padding:8px 0;font-size:13px;color:#0f172a">${email}</td></tr>
            ${telephone ? `<tr><td style="padding:8px 0;font-size:13px;color:#64748b">Téléphone</td>
                <td style="padding:8px 0;font-size:13px;color:#0f172a">${telephone}</td></tr>` : ''}
            <tr><td style="padding:8px 0;font-size:13px;color:#64748b">Sujet</td>
                <td style="padding:8px 0;font-size:13px;color:#00B8C4;font-weight:600">${sujet}</td></tr>
            ${poste ? `<tr><td style="padding:8px 0;font-size:13px;color:#64748b">Poste</td>
                <td style="padding:8px 0;font-size:13px;color:#0f172a;font-weight:600">${poste}</td></tr>` : ''}
          </table>

          <div style="margin-top:20px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
            <p style="font-size:12px;color:#64748b;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">
              Message
            </p>
            <p style="font-size:14px;color:#334155;margin:0;line-height:1.6;white-space:pre-line">${message}</p>
          </div>

          ${attachments.length > 0 ? `
          <div style="margin-top:16px;padding:12px 16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px">
            <p style="font-size:12px;color:#166534;margin:0;font-weight:600">
              📎 ${attachments.length} document(s) joint(s) : ${attachments.map((a) => a.filename).join(', ')}
            </p>
          </div>` : ''}
        </div>

        <div style="background:#051827;padding:12px 32px;border-radius:0 0 12px 12px;text-align:center">
          <p style="color:#475569;font-size:11px;margin:0">NOISIM — noisim.com</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"NOISIM Contact" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `[NOISIM] ${isRecruitment ? `Candidature — ${poste || 'Spontanée'}` : sujet}`,
      html,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('EMAIL ERROR:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}