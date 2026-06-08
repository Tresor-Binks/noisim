import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const nom = formData.get('nom')?.toString()
    const entreprise = formData.get('entreprise')?.toString()
    const email = formData.get('email')?.toString()
    const telephone = formData.get('telephone')?.toString()
    const sujet = formData.get('sujet')?.toString()
    const poste = formData.get('poste')?.toString()
    const message = formData.get('message')?.toString()

    const cv = formData.get('cv') as File | null

    // 📧 Transporter email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 📎 Gestion CV (si existe)
    let attachments = []

    if (cv && typeof cv !== 'string') {
      const buffer = Buffer.from(await cv.arrayBuffer())

      attachments.push({
        filename: cv.name,
        content: buffer,
      })
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[NOISIM] ${sujet}`,
      html: `
        <h2>Nouvelle demande de contact</h2>

        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Entreprise :</strong> ${entreprise || '-'}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || '-'}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>

        ${poste ? `<p><strong>Poste :</strong> ${poste}</p>` : ''}

        <hr />

        <p>${message}</p>
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('EMAIL ERROR:', error)

    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}