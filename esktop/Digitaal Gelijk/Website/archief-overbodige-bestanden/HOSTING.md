# Hosting Instructies voor Digitaalgelijk Website

Dit document bevat instructies voor het hosten van de Digitaalgelijk website met alleen de "onder-constructie" pagina, terwijl je verder kunt werken aan de rest van de website.

## Overzicht van de implementatie

De website is zo geconfigureerd dat:

1. Alle routes worden omgeleid naar de "onder-constructie" pagina in productie.
2. In development mode zijn alle routes toegankelijk, zodat je verder kunt werken aan de website.
3. De "onder-constructie" pagina verbergt automatisch de header en footer.

## Hosting op een server

### Optie 1: Hosting met Node.js

1. Zorg ervoor dat Node.js is geïnstalleerd op je server.
2. Upload de website bestanden naar je server.
3. Installeer de dependencies:
   ```
   npm install
   ```
4. Bouw de website:
   ```
   npm run build
   ```
5. Start de website:
   ```
   npm start
   ```

### Optie 2: Hosting met Docker

1. Zorg ervoor dat Docker is geïnstalleerd op je server.
2. Maak een Dockerfile in de root van je project:
   ```
   FROM node:18-alpine
   WORKDIR /app
   COPY . .
   RUN npm install
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```
3. Bouw de Docker image:
   ```
   docker build -t digitaalgelijk-website .
   ```
4. Start de container:
   ```
   docker run -p 3000:3000 digitaalgelijk-website
   ```

### Optie 3: Hosting met Vercel of Netlify

1. Verbind je GitHub repository met Vercel of Netlify.
2. De website zal automatisch worden gebouwd en gedeployed.
3. De middleware zorgt ervoor dat alle routes worden omgeleid naar de "onder-constructie" pagina.

## Lokale ontwikkeling

Om lokaal te ontwikkelen terwijl de middleware actief is:

1. Start de development server:
   ```
   npm run dev
   ```

2. De middleware is zo geconfigureerd dat deze in development mode alle routes toestaat, zodat je verder kunt werken aan de website.

3. Als je de redirects wilt testen in development mode, uncomment de volgende regels in `src/middleware.ts`:
   ```typescript
   // Als we in development mode zijn, sta dan alle routes toe
   if (process.env.NODE_ENV === 'development') {
     if (shouldRedirect(pathname)) {
       return NextResponse.redirect(new URL('/onder-constructie', request.url));
     }
     return NextResponse.next();
   }
   ```

## Terug naar normale werking

Wanneer je klaar bent om de volledige website te lanceren:

1. Verwijder of comment de middleware code in `src/middleware.ts`.
2. Herstel de originele code in `src/app/page.tsx`.
3. Bouw en deploy de website opnieuw.

## Problemen oplossen

### Poort 3000 is al in gebruik

Als poort 3000 al in gebruik is, kun je een andere poort gebruiken:

```
npm start -- -p 3001
```

Of pas het start script aan in package.json:

```json
"start": "next start -p 3001"
``` 