const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');

// Creëer een Express app
const app = express();

// Bepaal de poort - cPanel zal de PORT env var instellen
const PORT = process.env.PORT || 3000;

// Compressie toepassen
app.use(compression());

// Bepaal of we de geëxporteerde statische site of een Next.js server gebruiken
const STATIC_EXPORT = true; // Zet dit op false als je Next.js SSR wilt gebruiken

if (STATIC_EXPORT) {
  // Voor statische export, serveer de geëxporteerde bestanden
  const staticDir = path.join(__dirname, 'dist');
  
  // MIME type helpers
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
  
  // Cache duration helpers
  const getCacheControl = (extname) => {
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.woff', '.woff2', '.ttf', '.otf', '.css'].includes(extname)) {
      return 'public, max-age=31536000'; // 1 jaar
    }
    if (extname === '.js') {
      return 'public, max-age=86400'; // 1 dag
    }
    return 'public, max-age=3600'; // 1 uur
  };
  
  // Serveer statische bestanden met caching
  app.use((req, res, next) => {
    let filePath = path.join(staticDir, req.url === '/' ? 'index.html' : req.url);
    
    // Check voor directory en toevoegen index.html indien nodig
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    
    // Probeer het bestand te lezen
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // 404 - pagina niet gevonden
          fs.readFile(path.join(staticDir, '404.html'), (err, content) => {
            if (err) {
              res.status(500).send('Server Error');
              return;
            }
            res.status(404).set({
              'Content-Type': 'text/html',
              'Cache-Control': 'no-store'
            }).send(content);
          });
        } else {
          // Server error
          res.status(500).send(`Server Error: ${err.code}`);
        }
      } else {
        // Bestand gevonden, serveer met de juiste headers
        const extname = path.extname(filePath);
        const contentType = getMimeType(extname);
        const cacheControl = getCacheControl(extname);
        
        res.set({
          'Content-Type': contentType,
          'Cache-Control': cacheControl,
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN'
        }).send(content);
      }
    });
  });
} else {
  // Indien je Next.js SSR wilt gebruiken - dit vereist speciale server setup in cPanel
  const next = require('next');
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();
  
  nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
      return handle(req, res);
    });
  });
}

// Start de server
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
  console.log(`Mode: ${STATIC_EXPORT ? 'Statische export' : 'Next.js SSR'}`);
}); 