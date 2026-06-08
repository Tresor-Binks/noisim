import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()

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
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `[NOISIM] ${data.sujet}`,
      html: `
        <h2>Nouvelle demande de contact</h2>

        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Entreprise :</strong> ${data.entreprise || '-'}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.telephone || '-'}</p>
        <p><strong>Sujet :</strong> ${data.sujet}</p>

        <hr />

        <p>${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}