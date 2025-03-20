const http = require('http');
const fs = require('fs');
const path = require('path');

// Default port is 3001, but can be changed via environment variable
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  console.log(`Verzoek ontvangen voor: ${req.url}`);
  
  // Parse the URL
  let filePath;
  
  if (req.url === '/' || req.url === '/index.html') {
    // Default route to onder-constructie.html
    filePath = './onder-constructie.html';
  } else if (req.url.startsWith('/public/')) {
    // Serve files from public directory
    filePath = '.' + req.url;
  } else {
    // For any other route, serve the under construction page
    filePath = './onder-constructie.html';
  }
  
  // Determine content type based on file extension
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.ico':
      contentType = 'image/x-icon';
      break;
    case '.woff':
      contentType = 'font/woff';
      break;
    case '.woff2':
      contentType = 'font/woff2';
      break;
  }

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile('./404.html', (err, content) => {
          if (err) {
            // If 404.html is not found, send a simple text response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
        console.error(`Server Error: ${err.code} for ${filePath}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

// Listen on localhost only for security
server.listen(PORT, 'localhost', () => {
  console.log(`Server draait op http://localhost:${PORT}`);
  console.log(`Bezoek http://localhost:${PORT} om de pagina te bekijken`);
}); 