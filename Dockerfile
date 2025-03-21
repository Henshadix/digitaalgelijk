FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Verbeterd kopiëren van statische bestanden naar de juiste locatie voor standalone mode
RUN mkdir -p .next/standalone/.next/static
RUN cp -r .next/static .next/standalone/.next/

# Zorg dat de public map met afbeeldingen correct wordt gekopieerd
RUN mkdir -p .next/standalone/public
RUN cp -r public/* .next/standalone/public/

# Verplaats naar de standalone directory voor betere context
WORKDIR /app/.next/standalone

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000

# Start de standalone server
CMD ["node", "server.js"] 