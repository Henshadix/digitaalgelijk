# Digitaal Gelijk Website - Lokale Ontwikkeling

Dit document bevat instructies voor het lokaal ontwikkelen en testen van de Digitaal Gelijk website.

## Vereisten

- [Node.js](https://nodejs.org/) (versie 14 of hoger)
- npm (wordt meegeleverd met Node.js)

## Opties voor lokale ontwikkeling

Er zijn twee manieren om de website lokaal te draaien:

1. **Eenvoudige Node.js server** - Dit is een lichtgewicht optie die alleen de "onder constructie" pagina serveert.
2. **Next.js ontwikkelomgeving** - Dit is een volledige ontwikkelomgeving voor de Next.js applicatie.

## Optie 1: Eenvoudige Node.js server

Deze optie gebruikt een eenvoudige HTTP server om de "onder constructie" pagina te serveren.

### Starten van de server

1. Open PowerShell of Command Prompt
2. Navigeer naar de projectmap
3. Voer het volgende commando uit:

```
powershell -ExecutionPolicy Bypass -File .\start-lokale-server.ps1
```

Of dubbelklik op het bestand `start-lokale-server.ps1` in Windows Verkenner.

### Wat dit script doet

- Controleert of Node.js en npm zijn geïnstalleerd
- Controleert of alle benodigde bestanden aanwezig zijn
- Installeert de dependencies als dat nog niet is gebeurd
- Controleert of poort 3000 al in gebruik is en biedt aan om het proces te beëindigen
- Start de server in ontwikkelingsmodus (met nodemon voor automatisch herladen)
- Toont informatie over hoe de website te bekijken is

### Bekijken van de website

- Lokaal: [http://localhost:3000](http://localhost:3000)
- Netwerk: http://[jouw-ip-adres]:3000 (voor toegang vanaf andere apparaten in je netwerk)

## Optie 2: Next.js ontwikkelomgeving

Deze optie start de volledige Next.js ontwikkelomgeving, die geschikt is voor het ontwikkelen van de volledige website.

### Starten van de Next.js ontwikkelserver

1. Open PowerShell of Command Prompt
2. Navigeer naar de projectmap
3. Voer het volgende commando uit:

```
powershell -ExecutionPolicy Bypass -File .\start-nextjs-dev.ps1
```

Of dubbelklik op het bestand `start-nextjs-dev.ps1` in Windows Verkenner.

### Wat dit script doet

- Controleert of Node.js en npm zijn geïnstalleerd
- Controleert of alle benodigde bestanden aanwezig zijn
- Controleert of de src map bestaat
- Installeert de dependencies als dat nog niet is gebeurd
- Controleert of poort 3000 al in gebruik is en biedt aan om het proces te beëindigen
- Controleert of het next dev script bestaat in package.json en voegt het toe indien nodig
- Start de Next.js ontwikkelserver
- Toont informatie over hoe de website te bekijken is

### Bekijken van de website

- Lokaal: [http://localhost:3000](http://localhost:3000)
- Netwerk: http://[jouw-ip-adres]:3000 (voor toegang vanaf andere apparaten in je netwerk)

## Stoppen van de server

Druk op `Ctrl+C` in het terminal venster om de server te stoppen.

## Problemen oplossen

### Poort 3000 is al in gebruik

Als poort 3000 al in gebruik is, zal het script aanbieden om het proces te beëindigen. Als je dit accepteert, zal het script proberen het proces te beëindigen en de server opnieuw te starten.

### Node.js of npm is niet geïnstalleerd

Als Node.js of npm niet is geïnstalleerd, zal het script een foutmelding geven en instructies tonen voor het installeren van Node.js.

### Benodigde bestanden ontbreken

Als er benodigde bestanden ontbreken, zal het script een foutmelding geven en aangeven welke bestanden ontbreken.

### Dependencies kunnen niet worden geïnstalleerd

Als er een fout optreedt bij het installeren van de dependencies, zal het script een foutmelding geven. Controleer of je internetverbinding werkt en of je toegang hebt tot de npm registry. 