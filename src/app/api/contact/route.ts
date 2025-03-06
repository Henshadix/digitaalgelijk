import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Haal de formuliergegevens op uit de request
    const formData = await req.json();
    const { name, email, message } = formData;

    // Valideer de invoer
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Configureer de e-mail transporter
    // In productie zou je hier je eigen SMTP-server configureren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE) || false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-password',
      },
    });

    // Stel de e-mail samen
    const mailOptions = {
      from: {
        name: 'Contactformulier Website',
        address: 'info@digitaalgelijk.nl'  // Gedeelde mailbox
      },
      sender: process.env.SMTP_USER || 'your-email@gmail.com',  // Persoonlijk account dat de e-mail verstuurt
      to: 'info@digitaalgelijk.nl',
      replyTo: email,
      subject: `Nieuw bericht van ${name} via het contactformulier`,
      text: `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Verstuur de e-mail
    // In development mode slaan we het versturen over om geen echte e-mails te versturen
    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('E-mail zou worden verstuurd in productie:', mailOptions);
    }

    // Stuur een succesvolle response terug
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fout bij het versturen van e-mail:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het versturen van het bericht' },
      { status: 500 }
    );
  }
} 