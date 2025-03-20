#!/bin/bash

# Zet de omgeving op productie
export NODE_ENV=production

# Bouw de website
echo "Building the website..."
npm run build

# Start de website
echo "Starting the website..."
npm start 