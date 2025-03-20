Write-Host "===== Bestanden bijwerken en voorbereiden voor GitHub upload =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of de bestanden bestaan
$serverJsExists = Test-Path -Path "server.js"
$dockerComposeExists = Test-Path -Path "docker-compose.yml"

if (-not $serverJsExists) {
    Write-Host "WAARSCHUWING: server.js bestaat niet in de huidige map!" -ForegroundColor Red
}

if (-not $dockerComposeExists) {
    Write-Host "WAARSCHUWING: docker-compose.yml bestaat niet in de huidige map!" -ForegroundColor Red
}

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

# Test de server
Write-Host "3. Server testen..." -ForegroundColor Yellow
Write-Host "De server wordt gestart. Druk op Ctrl+C om te stoppen na het testen." -ForegroundColor Yellow
Write-Host "Je kunt de server testen door naar http://localhost:3000/onder-constructie te gaan in je browser." -ForegroundColor Yellow
Write-Host ""
Write-Host "Starten van de server in 5 seconden..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Maak een tijdelijk bestand met instructies
$instructionsFile = "GITHUB_UPLOAD_INSTRUCTIES.txt"
$instructionsContent = @"
===== INSTRUCTIES VOOR HANDMATIGE UPLOAD NAAR GITHUB =====

Nu de bestanden zijn bijgewerkt, volg deze stappen om ze naar GitHub te uploaden:

1. Ga naar je GitHub repository in je webbrowser
   (bijvoorbeeld: https://github.com/jouw-gebruikersnaam/jouw-repository)

2. Navigeer naar de server.js file:
   - Klik op de bestandsnaam 'server.js' in de repository
   - Klik op het potlood-icoon (Edit this file) rechtsboven
   - Verwijder alle bestaande inhoud
   - Kopieer en plak de volledige inhoud van je lokale server.js bestand
   - Scroll naar beneden en klik op 'Commit changes'
   - Voeg een beschrijving toe zoals: "Fix: Server now listens on all IP addresses and uses port 3000"
   - Klik op 'Commit changes' om op te slaan

3. Navigeer naar de docker-compose.yml file:
   - Ga terug naar de hoofdpagina van je repository
   - Klik op de bestandsnaam 'docker-compose.yml' in de repository
   - Klik op het potlood-icoon (Edit this file) rechtsboven
   - Verwijder alle bestaande inhoud
   - Kopieer en plak de volledige inhoud van je lokale docker-compose.yml bestand
   - Scroll naar beneden en klik op 'Commit changes'
   - Voeg een beschrijving toe zoals: "Update docker-compose.yml to use port 3000"
   - Klik op 'Commit changes' om op te slaan

4. Ga naar Easypanel:
   - Log in op je Easypanel dashboard
   - Ga naar je applicatie
   - Klik op 'Rebuild' of 'Redeploy' om de nieuwe wijzigingen op te halen
   - Controleer of de applicatie correct start en toegankelijk is

5. Test je website:
   - Bezoek je domein (digitaalgelijk.nl)
   - Controleer of de "onder constructie" pagina correct wordt weergegeven

Als je problemen ondervindt, controleer dan de logs in Easypanel voor eventuele foutmeldingen.
"@

Set-Content -Path $instructionsFile -Value $instructionsContent
Write-Host "Instructies voor handmatige upload zijn opgeslagen in $instructionsFile" -ForegroundColor Green
Write-Host ""

# Start de server
try {
    node server.js
} catch {
    Write-Host "Er is een fout opgetreden bij het starten van de server:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Controleer of Node.js correct is geïnstalleerd en of er geen andere processen op poort 3000 draaien." -ForegroundColor Yellow
}

Write-Host "Druk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 