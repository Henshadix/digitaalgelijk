const http = require('http');
const fs = require('fs');
const path = require('path');

// Wijzig de poort van 3001 naar 3000 om overeen te komen met de Dockerfile
const PORT = process.env.PORT || 3000;

// Functie om MIME type te bepalen
const getMimeType = (extname) => {
  switch (extname) {
    case '.html': return 'text/html';
    case '.js': return 'text/javascript';
    case '.css': return 'text/css';
    case '.json': return 'application/json';
    case '.png': return 'image/png';
    case '.jpg': case '.jpeg': return 'image/jpeg';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    case '.ico': return 'image/x-icon';
    case '.webp': return 'image/webp';
    case '.woff': return 'font/woff';
    case '.woff2': return 'font/woff2';
    case '.ttf': return 'font/ttf';
    case '.otf': return 'font/otf';
    case '.pdf': return 'application/pdf';
    default: return 'text/plain';
  }
};

// Cache duration bepalen op basis van bestandstype
const getCacheControl = (extname) => {
  // Statische assets langer cachen
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.woff', '.woff2', '.ttf', '.otf', '.css'].includes(extname)) {
    return 'public, max-age=31536000'; // 1 jaar
  }
  // JavaScript bestanden middellang cachen
  if (extname === '.js') {
    return 'public, max-age=86400'; // 1 dag
  }
  // HTML en andere bestanden kort cachen
  return 'public, max-age=3600'; // 1 uur
};

const server = http.createServer((req, res) => {
  console.log(`Verzoek ontvangen voor: ${req.url}`);
  
  // Verwerk de URL en het pad
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  
  // Controleer of het pad naar een directory wijst
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // Bepaal het content type op basis van de bestandsextensie
  const extname = path.extname(filePath);
  const contentType = getMimeType(extname);
  
  // Lees het bestand
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Pagina niet gevonden
        fs.readFile('./404.html', (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('Server Error: 404 page not found');
            return;
          }
          res.writeHead(404, { 
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store' // Geen caching voor 404 pagina's
          });
          res.end(content, 'utf8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Succes - voeg caching headers toe
      const cacheControl = getCacheControl(extname);
      
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        'X-Content-Type-Options': 'nosniff', // Beveiligingsheader
        'X-Frame-Options': 'SAMEORIGIN', // Beveiligingsheader
        'Content-Security-Policy': "default-src 'self'; img-src 'self' https://images.unsplash.com https://upload.wikimedia.org; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'", // CSP voor betere beveiliging
      });
      res.end(content, 'utf8');
    }
  });
});

// Luister op alle IP-adressen (0.0.0.0) in plaats van alleen localhost
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server draait op http://0.0.0.0:${PORT}`);
  console.log(`Bezoek http://localhost:${PORT} om de pagina lokaal te bekijken`);
  console.log(`Bezoek http://[jouw-ip-adres]:${PORT} om de pagina extern te bekijken`);
});
