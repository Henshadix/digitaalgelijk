const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log('SMTP Test Script - Start');
  
  try {
    // Configureer de transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'j.hendriks@digitaalgelijk.nl',
        pass: 'dtfnsngvkxrmgsjc', // Vervang dit met je app-wachtwoord
      },
      debug: true,
      logger: true
    });
    
    console.log('Transporter geconfigureerd, proberen te verifiëren...');
    
    // Verifieer de verbinding
    await transporter.verify();
    console.log('SMTP-verbinding succesvol geverifieerd!');
    
    // Probeer een test e-mail te versturen
    console.log('Proberen een test e-mail te versturen...');
    const info = await transporter.sendMail({
      from: '"SMTP Test" <j.hendriks@digitaalgelijk.nl>',
      to: 'j.hendriks@digitaalgelijk.nl',
      subject: 'SMTP Test',
      text: 'Als je deze e-mail ontvangt, werkt de SMTP-verbinding correct.',
      html: '<b>Als je deze e-mail ontvangt, werkt de SMTP-verbinding correct.</b>',
    });
    
    console.log('E-mail verstuurd! Message ID:', info.messageId);
  } catch (error) {
    console.error('SMTP Test mislukt met fout:', error);
    if (error.response) {
      console.error('Server antwoord:', error.response);
    }
  }
  
  console.log('SMTP Test Script - Einde');
}

testSMTP(); 