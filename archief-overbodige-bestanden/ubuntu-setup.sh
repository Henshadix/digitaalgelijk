#!/bin/bash

# Kleuren voor output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}===== Digitaal Gelijk Website Setup op Ubuntu =====${NC}"
echo ""

# Controleer of script als root draait
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Dit script moet als root worden uitgevoerd. Gebruik 'sudo'.${NC}"
  exit 1
fi

# Update systeem
echo -e "${YELLOW}1. Systeem updaten...${NC}"
apt update && apt upgrade -y
echo -e "${GREEN}Systeem is bijgewerkt!${NC}"
echo ""

# Installeer benodigde software
echo -e "${YELLOW}2. Benodigde software installeren...${NC}"
apt install -y nodejs npm git nginx certbot python3-certbot-nginx
echo -e "${GREEN}Software is geïnstalleerd!${NC}"
echo ""

# Installeer PM2 globaal
echo -e "${YELLOW}3. PM2 process manager installeren...${NC}"
npm install -g pm2
echo -e "${GREEN}PM2 is geïnstalleerd!${NC}"
echo ""

# Maak projectmap aan
echo -e "${YELLOW}4. Projectmap aanmaken...${NC}"
mkdir -p /var/www/digitaalgelijk
cd /var/www/digitaalgelijk
echo -e "${GREEN}Projectmap is aangemaakt!${NC}"
echo ""

# Clone repository of kopieer bestanden
echo -e "${YELLOW}5. Website bestanden ophalen...${NC}"
if [ -d "/tmp/website-files" ]; then
  echo "Bestanden kopiëren van lokale map..."
  cp -r /tmp/website-files/* /var/www/digitaalgelijk/
else
  echo "Repository klonen van GitHub..."
  git clone https://github.com/Henshadix/digitaalgelijk-website.git .
fi
echo -e "${GREEN}Website bestanden zijn opgehaald!${NC}"
echo ""

# Maak server.js aan als deze niet bestaat
echo -e "${YELLOW}6. Server.js controleren/aanmaken...${NC}"
if [ ! -f "server.js" ]; then
  echo "server.js bestaat niet, wordt aangemaakt..."
  cat > server.js << 'EOL'
const http = require('http');
const fs = require('fs');
const path = require('path');

// Poort instellen
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Verzoek ontvangen voor: ${req.url}`);
  
  // Standaard route naar onder-constructie.html voor alle URL's
  let filePath = './onder-constructie.html';
  
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
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Niet Gevonden</h1>');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
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

// Luister op alle IP-adressen (0.0.0.0)
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server draait op http://0.0.0.0:${PORT}`);
  console.log(`Bezoek http://localhost:${PORT} om de pagina lokaal te bekijken`);
});
EOL
fi
echo -e "${GREEN}Server.js is gecontroleerd/aangemaakt!${NC}"
echo ""

# Maak onder-constructie.html aan als deze niet bestaat
echo -e "${YELLOW}7. Onder-constructie.html controleren/aanmaken...${NC}"
if [ ! -f "onder-constructie.html" ]; then
  echo "onder-constructie.html bestaat niet, wordt aangemaakt..."
  cat > onder-constructie.html << 'EOL'
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digitaalgelijk - Binnenkort online</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        .container {
            max-width: 800px;
            padding: 40px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .logo {
            max-width: 200px;
            margin-bottom: 30px;
        }
        .contact {
            margin-top: 40px;
            font-size: 16px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Digitaal Gelijk</h1>
        <p>Onze website is momenteel in ontwikkeling.</p>
        <p>Binnenkort zijn we online met onze diensten voor digitale toegankelijkheid.</p>
        <div class="contact">
            <p>Voor vragen kunt u contact opnemen via: <br>
            <a href="mailto:info@digitaalgelijk.nl">info@digitaalgelijk.nl</a></p>
        </div>
    </div>
</body>
</html>
EOL
fi
echo -e "${GREEN}Onder-constructie.html is gecontroleerd/aangemaakt!${NC}"
echo ""

# Maak 404.html aan als deze niet bestaat
echo -e "${YELLOW}8. 404.html controleren/aanmaken...${NC}"
if [ ! -f "404.html" ]; then
  echo "404.html bestaat niet, wordt aangemaakt..."
  cat > 404.html << 'EOL'
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Pagina niet gevonden | Digitaalgelijk</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        .container {
            max-width: 800px;
            padding: 40px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #e74c3c;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404 - Pagina niet gevonden</h1>
        <p>De pagina die u zoekt bestaat niet of is verplaatst.</p>
        <p><a href="/">Terug naar de homepage</a></p>
    </div>
</body>
</html>
EOL
fi
echo -e "${GREEN}404.html is gecontroleerd/aangemaakt!${NC}"
echo ""

# Installeer Node.js dependencies
echo -e "${YELLOW}9. Node.js dependencies installeren...${NC}"
npm install
echo -e "${GREEN}Dependencies zijn geïnstalleerd!${NC}"
echo ""

# Configureer PM2 voor de applicatie
echo -e "${YELLOW}10. PM2 configureren voor de applicatie...${NC}"
pm2 start server.js --name "digitaalgelijk"
pm2 save
pm2 startup
echo -e "${GREEN}PM2 is geconfigureerd!${NC}"
echo ""

# Configureer Nginx
echo -e "${YELLOW}11. Nginx configureren...${NC}"
cat > /etc/nginx/sites-available/digitaalgelijk << 'EOL'
server {
    listen 80;
    server_name digitaalgelijk.nl www.digitaalgelijk.nl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOL

# Activeer de Nginx configuratie
ln -sf /etc/nginx/sites-available/digitaalgelijk /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx
echo -e "${GREEN}Nginx is geconfigureerd!${NC}"
echo ""

# Configureer SSL met Let's Encrypt
echo -e "${YELLOW}12. SSL-certificaat instellen met Let's Encrypt...${NC}"
echo -e "${YELLOW}Wil je nu een SSL-certificaat instellen? (j/n)${NC}"
read -r ssl_answer

if [ "$ssl_answer" = "j" ] || [ "$ssl_answer" = "J" ]; then
  certbot --nginx -d digitaalgelijk.nl -d www.digitaalgelijk.nl
  echo -e "${GREEN}SSL-certificaat is ingesteld!${NC}"
else
  echo -e "${YELLOW}SSL-certificaat instellen overgeslagen. Je kunt dit later doen met:${NC}"
  echo -e "${BLUE}sudo certbot --nginx -d digitaalgelijk.nl -d www.digitaalgelijk.nl${NC}"
fi
echo ""

# Stel juiste rechten in
echo -e "${YELLOW}13. Rechten instellen...${NC}"
chown -R www-data:www-data /var/www/digitaalgelijk
chmod -R 755 /var/www/digitaalgelijk
echo -e "${GREEN}Rechten zijn ingesteld!${NC}"
echo ""

echo -e "${GREEN}===== Installatie voltooid! =====${NC}"
echo -e "${YELLOW}Je website is nu geconfigureerd op:${NC}"
echo -e "${BLUE}http://digitaalgelijk.nl${NC}"
if [ "$ssl_answer" = "j" ] || [ "$ssl_answer" = "J" ]; then
  echo -e "${BLUE}https://digitaalgelijk.nl${NC}"
fi
echo ""
echo -e "${YELLOW}Handige commando's:${NC}"
echo -e "${BLUE}- Website status bekijken: pm2 status${NC}"
echo -e "${BLUE}- Website herstarten: pm2 restart digitaalgelijk${NC}"
echo -e "${BLUE}- Logs bekijken: pm2 logs digitaalgelijk${NC}"
echo -e "${BLUE}- Nginx herstarten: sudo systemctl restart nginx${NC}"
echo ""
echo -e "${YELLOW}Vergeet niet om je domein (digitaalgelijk.nl) te configureren om naar het IP-adres van deze server te wijzen!${NC}" 