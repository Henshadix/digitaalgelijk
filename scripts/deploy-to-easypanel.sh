#!/bin/bash

# Script voor handmatige deployment naar Easypanel
# Gebruik: ./deploy-to-easypanel.sh

set -e

# Kleuren voor terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print header
echo -e "${BLUE}===== Handmatige Deployment naar Easypanel =====${NC}"
echo

# Configuratie
EASYPANEL_HOST=${EASYPANEL_HOST:-"https://jouw-easypanel-server.com"}
API_TOKEN=${EASYPANEL_API_TOKEN:-""}
PROJECT_NAME=${PROJECT_NAME:-"digitaalgelijk-website"}

# Controleer of API token is ingesteld
if [ -z "$API_TOKEN" ]; then
  echo -e "${YELLOW}Easypanel API token niet gevonden in omgevingsvariabelen.${NC}"
  echo -e "Voer je Easypanel API token in: "
  read -s API_TOKEN
  
  if [ -z "$API_TOKEN" ]; then
    echo -e "${RED}Geen API token opgegeven. Kan niet doorgaan.${NC}"
    exit 1
  fi
fi

# Controleer of git is geïnstalleerd
if ! command -v git &> /dev/null; then
  echo -e "${RED}Git is niet geïnstalleerd. Installeer git en probeer opnieuw.${NC}"
  exit 1
fi

# Controleer of curl is geïnstalleerd
if ! command -v curl &> /dev/null; then
  echo -e "${RED}Curl is niet geïnstalleerd. Installeer curl en probeer opnieuw.${NC}"
  exit 1
fi

# Controleer of we in een git repository zijn
if [ ! -d ".git" ]; then
  echo -e "${RED}Huidige map is geen git repository.${NC}"
  exit 1
fi

# Haal huidige branch op
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
echo -e "${BLUE}Huidige git branch: ${CURRENT_BRANCH}${NC}"

# Controleer op niet-gecommitte wijzigingen
if ! git diff-index --quiet HEAD --; then
  echo -e "${YELLOW}Er zijn niet-gecommitte wijzigingen:${NC}"
  git status -s
  
  echo
  echo -e "${YELLOW}Wil je doorgaan en deze wijzigingen committen? (j/n)${NC}"
  read commit_changes
  
  if [[ "$commit_changes" == "j" || "$commit_changes" == "J" ]]; then
    echo -e "Voer een commit bericht in: "
    read commit_message
    
    if [ -z "$commit_message" ]; then
      commit_message="Automatische commit voor deployment"
    fi
    
    git add .
    git commit -m "$commit_message"
    echo -e "${GREEN}Wijzigingen gecommit.${NC}"
  else
    echo -e "${YELLOW}Deployment geannuleerd.${NC}"
    exit 0
  fi
fi

# Haal laatste commit hash op
COMMIT_HASH=$(git rev-parse HEAD)
echo -e "${BLUE}Commit hash: ${COMMIT_HASH}${NC}"

# Voer build uit
echo
echo -e "${BLUE}Bouwen van de applicatie...${NC}"
npm run build

# Controleer of build succesvol was
if [ $? -ne 0 ]; then
  echo -e "${RED}Build gefaald. Deployment gestopt.${NC}"
  exit 1
fi

echo -e "${GREEN}Build succesvol.${NC}"

# Vraag om bevestiging voor deployment
echo
echo -e "${YELLOW}Wil je de applicatie deployen naar Easypanel? (j/n)${NC}"
read deploy_confirm

if [[ "$deploy_confirm" != "j" && "$deploy_confirm" != "J" ]]; then
  echo -e "${YELLOW}Deployment geannuleerd.${NC}"
  exit 0
fi

# Push wijzigingen naar GitHub
echo
echo -e "${BLUE}Pushen van wijzigingen naar GitHub...${NC}"
git push origin $CURRENT_BRANCH

# Voer deployment uit naar Easypanel
echo
echo -e "${BLUE}Starten van deployment naar Easypanel...${NC}"

# API call naar Easypanel
response=$(curl -s -w "\n%{http_code}" -X POST \
  "${EASYPANEL_HOST}/api/projects/${PROJECT_NAME}/deploy" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"branch\":\"${CURRENT_BRANCH}\",\"commit\":\"${COMMIT_HASH}\"}")

http_code=$(echo "$response" | tail -n1)
response_body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo -e "${GREEN}Deployment succesvol gestart!${NC}"
  echo -e "${BLUE}Je kunt de voortgang bekijken in het Easypanel dashboard.${NC}"
else
  echo -e "${RED}Deployment gefaald met HTTP code ${http_code}${NC}"
  echo -e "${RED}Response: ${response_body}${NC}"
  exit 1
fi

echo
echo -e "${GREEN}Deployment proces voltooid.${NC}" 