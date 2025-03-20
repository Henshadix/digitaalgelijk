Write-Host "===== Bestanden bijwerken en server starten =====" -ForegroundColor Cyan
Write-Host ""

# server.js bijwerken
Write-Host "1. server.js bijwerken..." -ForegroundColor Yellow

$serverJsContent = @"
const http = require('http');
const fs = require('fs');
const path = require('path');

// Wijzig de poort van 3001 naar 3000 om overeen te komen met de Dockerfile
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Standaard route naar onder-constructie.html
  let filePath = './onder-constructie.html';
  
  // Als de URL /onder-constructie is, gebruik ook onder-constructie.html
  if (req.url === '/onder-constructie') {
    filePath = './onder-constructie.html';
  }

  // Bepaal het content type op basis van de bestandsextensie
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
      contentType = 'image/jpg';
      break;
  }

  // Lees het bestand
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Pagina niet gevonden
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Succes
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

// Luister op alle IP-adressen (0.0.0.0) in plaats van alleen localhost
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server draait op http://0.0.0.0:${PORT}`);
  console.log(`Bezoek http://localhost:${PORT}/onder-constructie om de pagina lokaal te bekijken`);
  console.log(`Bezoek http://[jouw-ip-adres]:${PORT}/onder-constructie om de pagina extern te bekijken`);
});
"@

Set-Content -Path "server.js" -Value $serverJsContent
Write-Host "server.js is bijgewerkt!" -ForegroundColor Green
Write-Host ""

# docker-compose.yml bijwerken
Write-Host "2. docker-compose.yml bijwerken..." -ForegroundColor Yellow

$dockerComposeContent = @"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3000/onder-constructie"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 5s
"@

Set-Content -Path "docker-compose.yml" -Value $dockerComposeContent
Write-Host "docker-compose.yml is bijgewerkt!" -ForegroundColor Green
Write-Host ""

# Server starten
Write-Host "3. Server starten..." -ForegroundColor Yellow
Write-Host "De server wordt gestart. Druk op Ctrl+C om te stoppen." -ForegroundColor Yellow
Write-Host "Je kunt de server testen door naar http://localhost:3000/onder-constructie te gaan in je browser." -ForegroundColor Yellow
Write-Host ""

# Start de server
node server.js 