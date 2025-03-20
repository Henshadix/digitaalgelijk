# Next.js Website Deployment naar cPanel

Deze instructies helpen je om de Digitaalgelijk Next.js website te deployen naar een cPanel hosting.

## Inhoudsopgave
1. [Voorbereiding](#voorbereiding)
2. [Optie 1: Statische Export Deployment](#optie-1-statische-export-deployment)
3. [Optie 2: Node.js App Deployment](#optie-2-nodejs-app-deployment)
4. [SSL Configuratie](#ssl-configuratie)
5. [Troubleshooting](#troubleshooting)

## Voorbereiding

### Vereisten
- Een cPanel hosting account met:
  - Node.js ondersteuning (voor Optie 2)
  - SSH toegang (voor gemakkelijkere deployment)
  - PHP 7.4+ (voor sommige .htaccess functies)

### Bouw de Website voor Deployment
Voer de volgende commando's uit op je lokale ontwikkelomgeving:

```bash
# Installeer dependencies
npm install

# Bouw de website
npm run build

# Voor statische export (Optie 1)
npm run export
# Dit maakt een 'out' directory met alle statische bestanden
```

## Optie 1: Statische Export Deployment

Deze optie is eenvoudiger en werkt op elke cPanel hosting, zelfs zonder Node.js ondersteuning.

1. **Bestanden uploaden:**
   - Ga naar je cPanel dashboard en open de File Manager
   - Navigeer naar de public_html directory (of een submap waar je de site wilt plaatsen)
   - Upload alle bestanden uit de 'out' directory naar deze locatie
   - Upload het `.htaccess` bestand uit de 'cpanel-deployment' map

2. **Controleer de configuratie:**
   - Zorg ervoor dat de bestandsrechten correct zijn:
     - HTML, CSS, JS bestanden: 644
     - Afbeeldingen: 644
     - Directories: 755
   - Optioneel: Controleer of alle URL's correct werken

3. **Test de website:**
   - Bezoek je domein in de browser
   - Controleer of de pagina's correct laden
   - Test de navigatie en functionaliteit

## Optie 2: Node.js App Deployment

Voor dynamische functionaliteit en server-side rendering kun je Next.js als Node.js applicatie deployen.

1. **Setup Node.js App in cPanel:**
   - Log in op cPanel
   - Ga naar de sectie "Software" of "Advanced"
   - Klik op "Setup Node.js App"
   - Creëer een nieuwe Node.js applicatie:
     - Kies een naam voor je applicatie (bijv. "digitaalgelijk")
     - Kies het pad waar je app zal draaien (bijv. `/home/username/nodejs-apps/digitaalgelijk`)
     - Kies Node.js versie 18.x of hoger
     - Application mode: Production
     - Application URL: Je domein of subdomein
     - Application startup file: server.js
     - Save application settings

2. **Bestanden uploaden:**
   - Gebruik FTP of SSH om je gehele project (exclusief node_modules) naar het gekozen pad te uploaden
   - Upload ook alle bestanden uit de 'cpanel-deployment' map naar deze locatie

3. **Installeer en start de app:**
   - Connect via SSH naar je server
   - Navigeer naar het app directory:
   ```bash
   cd /home/username/nodejs-apps/digitaalgelijk
   ```
   - Installeer dependencies en bouw de app:
   ```bash
   npm install
   npm run build
   ```
   - Start de app:
   ```bash
   npm start
   ```
   - Optioneel: Gebruik PM2 voor betere process management
   ```bash
   npm install -g pm2
   pm2 start server.js --name "digitaalgelijk"
   ```

4. **Proxy configuratie:**
   - Als je Node.js app niet direct toegankelijk is via je domein, moet je een proxy instellen
   - Hiervoor kun je .htaccess gebruiken (zie het bestand in de 'cpanel-deployment' map)
   - Uncomment de Node.js applicatie omleiding-regels in het .htaccess bestand

## SSL Configuratie

Het is sterk aanbevolen om SSL te gebruiken voor je website:

1. **Let's Encrypt via cPanel:**
   - Ga naar de SSL/TLS sectie in cPanel
   - Kies "Let's Encrypt SSL"
   - Selecteer je domein
   - Klik op "Issue Certificate"

2. **Force HTTPS redirects:**
   - Het .htaccess bestand bevat al regels voor HTTPS redirects
   - Controleer of deze correct werken door http:// URL's te testen

## Troubleshooting

### 404 Errors op pagina's
- Controleer of het .htaccess bestand juist is geüpload en de rewrite regels bevat
- Voor statische export: controleer of de out directory volledig is geüpload
- Voor Node.js app: controleer of de server draait met `pm2 status` of `npm run start`

### Afbeeldingen laden niet
- Controleer bestandsrechten (644 voor afbeeldingen)
- Controleer of de paths in de HTML correct zijn
- Controleer of CORS headers juist zijn ingesteld in .htaccess

### Server errors (500)
- Controleer de error logs in cPanel (onder "Logs")
- Voor Node.js app: controleer server.js logs met `pm2 logs`
- Controleer of alle Node.js dependencies zijn geïnstalleerd

### Langzame laadtijden
- Controleer of compressie is ingeschakeld
- Controleer of cache headers juist worden ingesteld
- Overweeg om een CDN te gebruiken voor statische assets 