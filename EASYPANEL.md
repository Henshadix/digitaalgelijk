# Deployen op Easypanel

Deze handleiding beschrijft hoe je de Digitaalgelijk website kunt deployen op Easypanel, waarbij alleen de "onder-constructie" pagina tijdelijk wordt getoond.

## Voorbereiding

Zorg ervoor dat je de volgende bestanden hebt in je project:
- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `src/middleware.ts` (voor het omleiden van alle routes naar de onder-constructie pagina)

## Stappen voor deployment op Easypanel

### 1. Maak een nieuw project aan in Easypanel

1. Log in op je Easypanel dashboard
2. Klik op "Create Project"
3. Kies "Docker Compose" als projecttype
4. Geef je project een naam, bijvoorbeeld "digitaalgelijk-website"

### 2. Configureer het project

1. Upload je codebase naar een Git repository (GitHub, GitLab, etc.)
2. In Easypanel, koppel je project aan de Git repository
3. Zorg ervoor dat de "Build Command" is ingesteld op `docker-compose up -d`
4. Stel de juiste omgevingsvariabelen in:
   - `NODE_ENV=production`

### 3. Deploy het project

1. Klik op "Deploy" om het project te deployen
2. Easypanel zal automatisch de Docker Compose configuratie gebruiken om de website te bouwen en te starten
3. Wacht tot de deployment is voltooid

### 4. Configureer de domein instellingen

1. Ga naar de "Domains" tab van je project
2. Voeg je domein toe (bijvoorbeeld `digitaalgelijk.nl`)
3. Configureer SSL/TLS voor je domein

## Testen

Na de deployment kun je controleren of de website correct werkt:

1. Bezoek je domein in een webbrowser
2. Je zou automatisch naar de "onder-constructie" pagina moeten worden omgeleid, ongeacht welke URL je bezoekt
3. Controleer of de "onder-constructie" pagina correct wordt weergegeven zonder header en footer

## Problemen oplossen

### De website is niet bereikbaar

1. Controleer de logs in Easypanel om te zien of er fouten zijn opgetreden tijdens de deployment
2. Controleer of de container draait met `docker ps`
3. Controleer of de container gezond is met `docker logs [container-id]`

### De onder-constructie pagina wordt niet getoond

1. Controleer of de middleware correct is geconfigureerd in `src/middleware.ts`
2. Controleer of `NODE_ENV` is ingesteld op `production`
3. Controleer of de routes correct worden omgeleid

## Terug naar normale werking

Wanneer je klaar bent om de volledige website te lanceren:

1. Verwijder of comment de middleware code in `src/middleware.ts`
2. Herstel de originele code in `src/app/page.tsx`
3. Push de wijzigingen naar je Git repository
4. Deploy het project opnieuw in Easypanel 