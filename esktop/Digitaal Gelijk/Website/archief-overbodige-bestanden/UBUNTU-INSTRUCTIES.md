# Instructies voor het opzetten van Digitaal Gelijk website op Ubuntu

Dit document bevat instructies voor het opzetten van de Digitaal Gelijk website op een Ubuntu server.

## Vereisten

- Een Ubuntu server (Ubuntu 20.04 LTS of nieuwer aanbevolen)
- Root toegang tot de server
- Een domein (digitaalgelijk.nl) dat naar het IP-adres van de server wijst

## Stap 1: Bestanden voorbereiden

1. Download de volgende bestanden van je huidige project:
   - `server.js`
   - `onder-constructie.html`
   - `404.html`
   - `ubuntu-setup.sh`

2. Maak een map aan op je lokale computer:
   ```
   mkdir -p /tmp/website-files
   ```

3. Kopieer de bestanden naar deze map:
   ```
   cp server.js onder-constructie.html 404.html /tmp/website-files/
   ```

## Stap 2: Bestanden naar de Ubuntu server kopiëren

1. Kopieer de bestanden naar je Ubuntu server met SCP:
   ```
   scp -r /tmp/website-files ubuntu-setup.sh gebruiker@jouw-server-ip:/tmp/
   ```
   Vervang `gebruiker` en `jouw-server-ip` met je eigen gegevens.

## Stap 3: Inloggen op de Ubuntu server

1. Log in op je Ubuntu server via SSH:
   ```
   ssh gebruiker@jouw-server-ip
   ```

## Stap 4: Het setup script uitvoeren

1. Maak het script uitvoerbaar:
   ```
   chmod +x /tmp/ubuntu-setup.sh
   ```

2. Voer het script uit als root:
   ```
   sudo /tmp/ubuntu-setup.sh
   ```

3. Volg de instructies op het scherm. Het script zal:
   - Het systeem updaten
   - Benodigde software installeren (Node.js, Nginx, etc.)
   - De website bestanden configureren
   - PM2 instellen voor procesmanagement
   - Nginx configureren als reverse proxy
   - Optioneel een SSL-certificaat instellen

## Stap 5: DNS configureren

Zorg ervoor dat je domein (digitaalgelijk.nl) naar het IP-adres van je Ubuntu server wijst. Dit doe je bij je domeinregistrar of DNS-provider.

1. Voeg een A-record toe voor `digitaalgelijk.nl` dat naar het IP-adres van je server wijst
2. Voeg een A-record toe voor `www.digitaalgelijk.nl` dat naar hetzelfde IP-adres wijst

## Stap 6: Testen

1. Bezoek je website op `http://digitaalgelijk.nl` (of `https://` als je SSL hebt ingesteld)
2. Controleer of de "onder constructie" pagina correct wordt weergegeven

## Problemen oplossen

Als je problemen ondervindt, controleer dan:

1. De status van de Node.js applicatie:
   ```
   pm2 status
   pm2 logs digitaalgelijk
   ```

2. De Nginx configuratie:
   ```
   sudo nginx -t
   sudo systemctl status nginx
   ```

3. De firewall instellingen:
   ```
   sudo ufw status
   ```
   Zorg ervoor dat poorten 80 (HTTP) en 443 (HTTPS) open staan.

## Onderhoud

- Om de website te herstarten: `pm2 restart digitaalgelijk`
- Om Nginx te herstarten: `sudo systemctl restart nginx`
- Om logs te bekijken: `pm2 logs digitaalgelijk`

## Voordelen van deze setup

1. **Betrouwbaarheid**: PM2 zorgt ervoor dat je applicatie altijd draait, zelfs na een server herstart
2. **Prestaties**: Nginx werkt als een efficiënte reverse proxy
3. **Veiligheid**: Mogelijkheid om SSL/HTTPS te gebruiken
4. **Schaalbaarheid**: Eenvoudig uit te breiden met meer functionaliteit 