# cPanel Deployment voor Digitaalgelijk

Deze map bevat alle benodigde bestanden en instructies om de Digitaalgelijk website te hosten op een cPanel server.

## Inhoud van deze map

- **`.htaccess`**: Apache webserver configuratie voor routing, caching en beveiliging
- **`server.js`**: Node.js server voor het hosten van de website als Node.js applicatie
- **`package.json`**: Dependency configuratie voor de Node.js applicatie
- **`prepare-for-cpanel.js`**: Script om de website voor te bereiden voor cPanel deployment
- **`DEPLOYMENT.md`**: Gedetailleerde instructies voor deployment naar een cPanel omgeving

## Snelle start

Er zijn twee manieren om de website te deployen naar cPanel:

### Optie 1: Statische Hosting (Aanbevolen voor de meeste gevallen)

Bij deze optie exporteer je de Next.js website als statische bestanden en upload je deze naar de `public_html` map van je cPanel hosting.

1. Build en exporteer de website:
   ```bash
   npm run build
   npm run export
   ```

2. Voer het prepare script uit om een ZIP te maken:
   ```bash
   node cpanel-deployment/prepare-for-cpanel.js
   ```

3. Upload alle bestanden uit de gegenereerde ZIP (`static-export.zip`) naar je cPanel hosting.

### Optie 2: Node.js Applicatie Hosting

Bij deze optie host je de website als een volledige Node.js applicatie, wat meer functionaliteit biedt zoals server-side rendering.

1. Voer het prepare script uit om een ZIP te maken:
   ```bash
   node cpanel-deployment/prepare-for-cpanel.js
   ```

2. Volg de instructies in `DEPLOYMENT.md` voor het configureren van een Node.js applicatie in cPanel.

3. Upload het gegenereerde ZIP bestand (`node-app.zip`) naar je cPanel en volg de instructies.

## Systeemvereisten

- cPanel hosting account
- Voor statische hosting: Standaard cPanel met Apache
- Voor Node.js hosting: Node.js ondersteuning in cPanel (18.x of hoger)

## Meer informatie

Raadpleeg `DEPLOYMENT.md` voor gedetailleerde instructies over beide deployment methodes. 