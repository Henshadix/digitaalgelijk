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

    console.log('SMTP-instellingen:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER ? '***' : 'niet ingesteld',
      password: process.env.SMTP_PASSWORD ? '***' : 'niet ingesteld',
    });

    // Configureer de e-mail transporter
    let transporter;
    
    // Probeer eerst Office 365
    try {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.office365.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Boolean(process.env.SMTP_SECURE) || false,
        auth: {
          user: process.env.SMTP_USER || 'your-email@gmail.com',
          pass: process.env.SMTP_PASSWORD || 'your-password',
        },
        debug: true,
        logger: true,
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false
        }
      });
      
      // Controleer de verbinding met de SMTP-server
      await transporter.verify();
      console.log('SMTP-verbinding geverifieerd met Office 365');
    } catch (office365Error) {
      console.error('Office 365 SMTP-verbinding mislukt:', office365Error);
      
      // Als Office 365 faalt, probeer SendGrid als fallback (indien geconfigureerd)
      if (process.env.SENDGRID_API_KEY) {
        console.log('Proberen met SendGrid als fallback...');
        transporter = nodemailer.createTransport({
          host: 'smtp.sendgrid.net',
          port: 587,
          secure: false,
          auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY,
          },
          debug: true,
          logger: true
        });
        
        try {
          await transporter.verify();
          console.log('SMTP-verbinding geverifieerd met SendGrid');
        } catch (sendgridError) {
          console.error('SendGrid SMTP-verbinding mislukt:', sendgridError);
          return NextResponse.json(
            { error: `Alle SMTP-verbindingen mislukt. Laatste fout: ${sendgridError.message}` },
            { status: 500 }
          );
        }
      } else {
        // Als er geen SendGrid API key is geconfigureerd, geef de originele fout terug
        return NextResponse.json(
          { error: `SMTP-verbinding verificatie mislukt: ${office365Error.message}` },
          { status: 500 }
        );
      }
    }

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

    console.log('Versturen van e-mail met opties:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });

    // Verstuur de e-mail
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('E-mail succesvol verstuurd:', info.messageId);
      
      // Stuur een succesvolle response terug
      return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (sendError) {
      console.error('Fout bij het versturen van e-mail:', sendError);
      return NextResponse.json(
        { error: `Fout bij het versturen van e-mail: ${sendError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Algemene fout bij het verwerken van het verzoek:', error);
    return NextResponse.json(
      { error: `Er is een fout opgetreden bij het versturen van het bericht: ${error.message}` },
      { status: 500 }
    );
  }
} 