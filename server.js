// Eenvoudige server voor Next.js applicatie
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialiseer Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Check of .next bestaat
const nextDir = path.join(__dirname, '.next');
if (!dev && !fs.existsSync(nextDir)) {
  console.error('.next directory niet gevonden. Draai eerst "npm run build".');
  process.exit(1);
}

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parseer inkomende URL
      const parsedUrl = parse(req.url, true);
      
      // Zorg ervoor dat de hostname bekend is in de headers
      req.headers.host = req.headers.host || `${hostname}:${port}`;
      
      // Laat Next.js de request afhandelen
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error bij request verwerking:', err);
      res.statusCode = 500;
      res.end('Interne server fout');
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Server draait op http://${hostname}:${port}`);
  });
}).catch(err => {
  console.error('Error bij opstarten van Next.js app:', err);
  process.exit(1);
});
