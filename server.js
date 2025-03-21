// Super eenvoudige server voor Next.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Check of we in productie zijn
const dev = process.env.NODE_ENV !== 'production';
// Luister op alle adressen
const hostname = '0.0.0.0';
// Gebruik poort 3000 of wat er in de PORT env var staat
const port = parseInt(process.env.PORT || '3000', 10);

// Initialiseer Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

// Start de server
app.prepare()
  .then(() => {
    createServer((req, res) => {
      // Parse de URL
      const parsedUrl = parse(req.url, true);
      
      // Laat Next.js de request afhandelen
      handle(req, res, parsedUrl);
    })
    .listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch(err => {
    console.error('Error bij opstarten server:', err);
    process.exit(1);
  });
