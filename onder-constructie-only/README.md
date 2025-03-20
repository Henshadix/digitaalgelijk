# Digitaalgelijk Onder Constructie Pagina

Dit is een vereenvoudigde versie van de Digitaalgelijk website die alleen de "onder constructie" pagina bevat. Deze versie is gemaakt om eenvoudig en snel de onder constructie pagina te kunnen draaien zonder de volledige website-infrastructuur.

## Bestanden

- `server.js` - Een eenvoudige Node.js server die de onder constructie pagina serveert
- `onder-constructie.html` - De HTML-pagina voor de "onder constructie" weergave
- `404.html` - Een eenvoudige 404-pagina voor niet-gevonden routes
- `package.json` - Configuratiebestand voor Node.js met minimale afhankelijkheden

## Installatie

1. Zorg ervoor dat Node.js is geïnstalleerd op je systeem
2. Open een terminal in deze map
3. Installeer de benodigde afhankelijkheden:

```
npm install
```

## Gebruik

### Starten van de server

Om de server te starten, voer het volgende commando uit:

```
npm start
```

De server draait standaard op poort 3001. Je kunt de pagina bekijken op:
- http://localhost:3001

### Ontwikkelmodus

Om de server in ontwikkelmodus te starten (met automatisch herladen bij wijzigingen):

```
npm run dev
```

### Poort wijzigen

Als je een andere poort wilt gebruiken, kun je de PORT-omgevingsvariabele instellen:

```
# Windows (PowerShell)
$env:PORT=3002; npm start

# Windows (CMD)
set PORT=3002 && npm start

# Linux/macOS
PORT=3002 npm start
```

## Aanpassingen

Je kunt de volgende bestanden aanpassen om de pagina te wijzigen:

- `onder-constructie.html` - Wijzig de inhoud, stijl of functionaliteit van de pagina
- `404.html` - Pas de 404-pagina aan
- `server.js` - Wijzig serverinstellingen of voeg extra functionaliteit toe 