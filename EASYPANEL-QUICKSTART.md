# Snelstartgids: Digitaalgelijk Website op Easypanel

Deze gids helpt je om snel de Digitaalgelijk website te deployen op Easypanel, waarbij alleen de "onder-constructie" pagina wordt getoond.

## Stap 1: Voorbereiden van je project

Zorg ervoor dat je de volgende bestanden hebt in je project:
- `Dockerfile` (al aanwezig)
- `docker-compose.yml` (al aanwezig)
- `.dockerignore` (al aanwezig)
- `src/middleware.ts` (al aanwezig, zorgt voor redirects naar de onder-constructie pagina)

## Stap 2: Uploaden naar Git repository

1. Maak een nieuwe repository aan op GitHub of GitLab
2. Push je project naar deze repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [repository-url]
   git push -u origin main
   ```

## Stap 3: Aanmaken van een nieuw project in Easypanel

1. Log in op je Easypanel dashboard
2. Klik op "Create Project"
3. Kies "Docker Compose" als projecttype
4. Geef je project een naam: "digitaalgelijk-website"
5. Koppel het aan je Git repository
6. Stel de volgende omgevingsvariabelen in:
   - `NODE_ENV=production`
   - `PORT=3000`

## Stap 4: Deployen

1. Klik op "Deploy" om het project te deployen
2. Wacht tot de deployment is voltooid
3. Ga naar de "Domains" tab en configureer je domein

## Stap 5: Testen

Bezoek je domein in een webbrowser. Je zou automatisch naar de "onder-constructie" pagina moeten worden omgeleid, ongeacht welke URL je bezoekt.

## Problemen oplossen

### De website is niet bereikbaar

1. Controleer de logs in Easypanel
2. Zorg ervoor dat poort 3000 is geconfigureerd in de domein instellingen

### De onder-constructie pagina wordt niet getoond

1. Controleer of `NODE_ENV` is ingesteld op `production`
2. Controleer de logs voor eventuele fouten

## Terug naar normale werking

Wanneer je klaar bent om de volledige website te lanceren:

1. Verwijder of comment de middleware code in `src/middleware.ts`
2. Herstel de originele code in `src/app/page.tsx`
3. Push de wijzigingen naar je Git repository
4. Deploy het project opnieuw in Easypanel 