# Digitaalgelijk Website Deployment Guide

Deze handleiding beschrijft het volledige proces voor het deployen van de Digitaalgelijk website, inclusief de integratie tussen GitHub en Easypanel.

## Inhoudsopgave

1. [GitHub Setup](#github-setup)
   - [Repository Configuratie](#repository-configuratie)
   - [Branch Protection Rules](#branch-protection-rules)
2. [CI/CD Pipeline](#cicd-pipeline)
   - [GitHub Actions Workflow](#github-actions-workflow)
   - [Workflow Stappen](#workflow-stappen)
3. [Easypanel Integratie](#easypanel-integratie)
   - [Webhook Setup](#webhook-setup)
   - [API Token Configuratie](#api-token-configuratie)
4. [Handmatige Deployment](#handmatige-deployment)
5. [Problemen Oplossen](#problemen-oplossen)

## GitHub Setup

### Repository Configuratie

1. Zorg ervoor dat de repository `digitaalgelijk-website` correct is geconfigureerd op GitHub:
   ```bash
   git remote set-url origin https://github.com/Henshadix/digitaalgelijk-website.git
   ```

2. Controleer dat alle bestanden zijn toegevoegd en gecommit:
   ```bash
   git add .
   git commit -m "Configuratie bijgewerkt voor CI/CD pipeline"
   git push origin master
   ```

### Branch Protection Rules

Om de kwaliteit van de code te waarborgen, configureer branch protection rules als volgt:

1. Ga naar de GitHub repository
2. Navigeer naar Settings > Branches
3. Klik op "Add rule" voor de `master` branch
4. Stel de volgende regels in:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Selecteer de status checks: `test` (uit de GitHub Actions workflow)
5. Klik op "Create" of "Save changes"

## CI/CD Pipeline

### GitHub Actions Workflow

De GitHub Actions workflow is geconfigureerd in het bestand `.github/workflows/ci-cd.yml`. Deze voert automatisch tests en linting uit bij elke push naar de repository en deployt de website naar Easypanel bij pushes naar de `master` branch.

### Workflow Stappen

1. **Test Job**:
   - Checkout van de code
   - Setup van Node.js 18
   - Installatie van dependencies
   - Uitvoeren van linting
   - Bouwen van de applicatie

2. **Deploy Job**:
   - Wordt alleen uitgevoerd bij pushes naar de `master` branch
   - Triggert deployment naar Easypanel via HTTP webhook

## Easypanel Integratie

### Webhook Setup

De integratie tussen GitHub en Easypanel verloopt via een webhook server die is geconfigureerd in `scripts/easypanel-webhook.js`.

Om deze webhook server op te zetten:

1. Installeer de benodigde packages:
   ```bash
   npm install axios
   ```

2. Stel de vereiste omgevingsvariabelen in:
   ```bash
   export EASYPANEL_API_URL=https://jouw-easypanel-server.com/api
   export EASYPANEL_API_TOKEN=jouw-easypanel-api-token
   export GITHUB_WEBHOOK_SECRET=jouw-webhook-geheim
   ```

3. Start de webhook server:
   ```bash
   node scripts/easypanel-webhook.js
   ```

4. Configureer de webhook in GitHub:
   - Ga naar je GitHub repository
   - Navigeer naar Settings > Webhooks
   - Klik op "Add webhook"
   - Voer de webhook URL in
   - Stel content type in op `application/json`
   - Voer het geheime token in
   - Selecteer alleen de "push" event
   - Klik op "Add webhook"

### API Token Configuratie

Om de GitHub Actions workflow correct te laten werken, moeten de volgende GitHub secrets worden geconfigureerd:

1. Ga naar je GitHub repository
2. Navigeer naar Settings > Secrets and variables > Actions
3. Klik op "New repository secret"
4. Voeg de volgende secrets toe:
   - `EASYPANEL_WEBHOOK_URL`: URL naar je Easypanel webhook
   - `EASYPANEL_API_TOKEN`: API token voor authenticatie bij Easypanel

## Handmatige Deployment

Naast de automatische deployment is het ook mogelijk om handmatig te deployen:

1. Build de applicatie lokaal:
   ```bash
   npm run build
   ```

2. Gebruik het script voor handmatige deployment naar Easypanel:
   ```bash
   ./scripts/deploy-to-easypanel.sh
   ```

## Problemen Oplossen

### GitHub Actions Workflow Faalt

1. Controleer de workflow logs in GitHub Actions
2. Zorg ervoor dat alle dependencies correct zijn geïnstalleerd
3. Controleer of de linting en build succesvol lokaal kunnen worden uitgevoerd

### Webhook Connectie Problemen

1. Controleer of de webhook server draait
2. Controleer de logs van de webhook server
3. Verifieer dat de GitHub repository correct is geconfigureerd met de webhook URL
4. Controleer de secrets en tokens voor authenticatie

### Easypanel Deployment Problemen

1. Controleer de logs in Easypanel
2. Controleer of de Docker-compose configuratie correct is
3. Zorg ervoor dat alle omgevingsvariabelen correct zijn ingesteld
4. Controleer of de poorten correct zijn geconfigureerd 