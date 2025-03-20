import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Eenvoudige in-memory rate limiter
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 uur in milliseconden
const MAX_REQUESTS_PER_IP = 5; // Max 5 verzoeken per IP per uur

const ipRequestCounts: Record<string, { count: number, resetTime: number }> = {};

// Validatiefunctie
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(req: NextRequest) {
  try {
    // IP-gebaseerde rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Controleer en reset rate limiter indien nodig
    if (!ipRequestCounts[ip] || now > ipRequestCounts[ip].resetTime) {
      ipRequestCounts[ip] = { count: 0, resetTime: now + RATE_LIMIT_WINDOW };
    }
    
    // Rate limit check
    if (ipRequestCounts[ip].count >= MAX_REQUESTS_PER_IP) {
      return NextResponse.json(
        { 
          error: 'Te veel verzoeken. Probeer het later opnieuw.' 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': `${Math.ceil((ipRequestCounts[ip].resetTime - now) / 1000)}`,
          }
        }
      );
    }
    
    // Verhoog counter
    ipRequestCounts[ip].count++;
    
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
    
    // Valideer e-mailadres
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres. Controleer het e-mailadres en probeer opnieuw.' },
        { status: 400 }
      );
    }
    
    // Valideer berichtlengte
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Bericht is te kort. Geef meer details over uw vraag of verzoek.' },
        { status: 400 }
      );
    }

    // Configureer de e-mail transporter
    let transporter;
    try {
      // Productie-veilige SMTP-configuratie
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        }
      });
    } catch (error) {
      console.error('Fout bij het configureren van de e-mail transporter:', error);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het configureren van de e-mail service' },
        { status: 500 }
      );
    }

    // Stel de e-mail samen met escaping/filtering voor beveiliging
    function escapeHtml(text: string): string {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
    
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message);

    const mailOptions = {
      from: {
        name: 'Contactformulier Website',
        address: process.env.SMTP_USER || 'info@digitaalgelijk.nl'
      },
      to: process.env.CONTACT_EMAIL || 'info@digitaalgelijk.nl',
      replyTo: email,
      subject: `Nieuw bericht van ${escapedName} via het contactformulier`,
      text: `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${escapedName}</p>
        <p><strong>E-mail:</strong> ${escapedEmail}</p>
        <p><strong>Bericht:</strong></p>
        <p>${escapedMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Verstuur de e-mail
    try {
      const info = await transporter.sendMail(mailOptions);
      
      // Stuur een succesvolle response terug zonder gevoelige informatie
      return NextResponse.json({ 
        success: true,
        message: 'Uw bericht is succesvol verzonden. We nemen zo snel mogelijk contact met u op.'
      });
    } catch (sendError: any) {
      console.error('Fout bij het versturen van e-mail:', sendError);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het versturen van het bericht. Probeer het later opnieuw.' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Algemene fout bij het verwerken van het verzoek:', error);
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
} 