FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Kopieer de static bestanden naar de juiste locatie voor standalone mode
RUN cp -r .next/static .next/standalone/.next/static
RUN cp -r public .next/standalone/public

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000

# Start de standalone server
CMD ["node", ".next/standalone/server.js"] 