FROM node:18-alpine

WORKDIR /app

# Kopieer package.json en package-lock.json
COPY package.json package-lock.json ./

# Installeer dependencies
RUN npm install --production=false

# Kopieer de rest van de applicatie
COPY . .

# Build de applicatie
RUN npm run build

# Zorg ervoor dat alle statische bestanden correct beschikbaar zijn
RUN mkdir -p /app/.next/static
RUN cp -R /app/public /app/.next/
RUN ln -s /app/public /app/.next/public

# Maak omgevingsvariabelen aan
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Expose de poort
EXPOSE 3000

# Start de server
CMD ["npm", "start"]
