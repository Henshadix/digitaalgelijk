# Digitaalgelijk Website - cPanel Upload

Deze map bevat de bestanden die nodig zijn om de Digitaalgelijk website te hosten op een cPanel server.

## Inhoud van deze upload

- **`public_html/`** - Deze map bevat de bestanden die direct zichtbaar zijn voor bezoekers:
  - `index.html` - Een tijdelijke homepagina die gebruikt kan worden tijdens het installeren
  - `404.html` - Een aangepaste 404 foutpagina
  - `.htaccess` - Apache configuratie voor routing, caching en beveiliging

- **Bestanden voor Node.js hosting** (indien uw cPanel Node.js ondersteunt):
  - `server.js` - De Node.js server voor het draaien van de website
  - `package.json` - Dependency configuratie voor Node.js
  - `DEPLOYMENT.md` - Gedetailleerde instructies voor het instellen van Node.js

## Installatie-instructies

### Methode 1: Statische hosting (Eenvoudig)

1. Upload de inhoud van de `public_html` map naar de `public_html` map van uw cPanel hosting.
2. Controleer of het `.htaccess` bestand correct is geüpload.
3. Uw website zou nu beschikbaar moeten zijn via uw domein.

### Methode 2: Node.js hosting (Geavanceerd)

Als uw cPanel Node.js applicaties ondersteunt, kunt u de website als een Node.js applicatie draaien voor meer functionaliteit.

1. Volg de instructies in het `DEPLOYMENT.md` bestand voor het instellen van een Node.js applicatie in cPanel.
2. Upload alle bestanden uit deze map naar de map die u hebt geconfigureerd voor uw Node.js applicatie.
3. Installeer de dependencies en start de server zoals beschreven in `DEPLOYMENT.md`.

## Belangrijke opmerkingen

- Het `.htaccess` bestand bevat belangrijke configuraties voor veiligheid en performance.
- De tijdelijke `index.html` pagina kan worden vervangen door de volledige website na volledige installatie.
- Voor vragen of ondersteuning, neem contact op met de ontwikkelaar. 