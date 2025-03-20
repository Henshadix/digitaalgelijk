# Instructies voor het opzetten van Digitaal Gelijk website via een browser-terminal

Dit document bevat instructies voor het opzetten van de Digitaal Gelijk website op een Ubuntu server via een browser-terminal (zoals die van DigitalOcean, Linode, AWS, etc.).

## Stap 1: Maak een Ubuntu server aan

1. Log in bij je cloud provider (DigitalOcean, Linode, AWS, etc.)
2. Maak een nieuwe server (Droplet, Instance, etc.) aan met Ubuntu 20.04 LTS of nieuwer
3. Kies een plan dat past bij je behoeften (1GB RAM is voldoende voor deze website)
4. Kies een datacenter regio (Amsterdam is een goede keuze voor Nederlandse websites)
5. Voeg je SSH-sleutel toe of kies voor een wachtwoord
6. Geef je server een naam (bijv. "digitaalgelijk-website")
7. Klik op "Create" of "Launch" om de server aan te maken

## Stap 2: Toegang tot de browser-terminal

1. Wacht tot je server is aangemaakt
2. Ga naar het dashboard van je server
3. Open de browser-terminal of console (meestal een knop genaamd "Console" of "Launch Console")

## Stap 3: Kopieer en plak het script

1. Kopieer de volledige inhoud van het bestand `browser-terminal-setup.sh`
2. Maak een nieuw bestand aan op je server:
   ```
   nano browser-terminal-setup.sh
   ```
3. Plak de inhoud in de editor (meestal met rechtermuisknop -> Plakken of Ctrl+Shift+V)
4. Sla het bestand op (Ctrl+O, Enter) en sluit de editor (Ctrl+X)
5. Maak het script uitvoerbaar:
   ```
   chmod +x browser-terminal-setup.sh
   ```

## Stap 4: Voer het script uit

1. Voer het script uit als root:
   ```
   sudo bash browser-terminal-setup.sh
   ```
2. Volg de instructies op het scherm:
   - Het script zal je vragen naar je domeinnaam (standaard: digitaalgelijk.nl)
   - Het script zal je vragen of je een SSL-certificaat wilt instellen
   - Het script zal je vragen of je de firewall wilt activeren

## Stap 5: DNS configureren

1. Noteer het IP-adres dat aan het einde van het script wordt getoond
2. Ga naar je domeinregistrar of DNS-provider
3. Voeg A-records toe voor je domein:
   - `digitaalgelijk.nl` -> [IP-adres van je server]
   - `www.digitaalgelijk.nl` -> [IP-adres van je server]

## Stap 6: Testen

1. Wacht tot de DNS-wijzigingen zijn doorgevoerd (dit kan tot 24 uur duren)
2. Bezoek je website op `http://digitaalgelijk.nl` (of `https://` als je SSL hebt ingesteld)
3. Controleer of de "onder constructie" pagina correct wordt weergegeven

## Problemen oplossen

Als je problemen ondervindt, kun je de volgende commando's gebruiken om te debuggen:

1. Controleer de status van de Node.js applicatie:
   ```
   pm2 status
   pm2 logs digitaalgelijk
   ```

2. Controleer de Nginx configuratie:
   ```
   sudo nginx -t
   sudo systemctl status nginx
   ```

3. Controleer de firewall instellingen:
   ```
   sudo ufw status
   ```

4. Controleer of je domein correct naar je server wijst:
   ```
   nslookup digitaalgelijk.nl
   ```

## Onderhoud

- Om de website te herstarten: `pm2 restart digitaalgelijk`
- Om Nginx te herstarten: `sudo systemctl restart nginx`
- Om logs te bekijken: `pm2 logs digitaalgelijk`
- Om het systeem bij te werken: `sudo apt update && sudo apt upgrade -y`

## Voordelen van deze setup

1. **Eenvoudig**: Alles wordt automatisch geconfigureerd met één script
2. **Betrouwbaar**: PM2 zorgt ervoor dat je applicatie altijd draait
3. **Veilig**: Nginx en firewall zijn correct geconfigureerd
4. **Schaalbaar**: Eenvoudig uit te breiden met meer functionaliteit 