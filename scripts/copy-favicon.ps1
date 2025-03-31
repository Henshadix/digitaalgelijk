# Controleer of de public directory bestaat
if (-not (Test-Path "public")) {
    New-Item -ItemType Directory -Path "public"
}

# Controleer of de icons directory bestaat
if (-not (Test-Path "public/icons")) {
    New-Item -ItemType Directory -Path "public/icons"
}

# Kopieer het SVG bestand naar verschillende formaten
Copy-Item "public/images/logo.svg" -Destination "public/favicon.svg"
Copy-Item "public/images/logo.svg" -Destination "public/favicon-16x16.png"
Copy-Item "public/images/logo.svg" -Destination "public/favicon-32x32.png"
Copy-Item "public/images/logo.svg" -Destination "public/apple-touch-icon.png"
Copy-Item "public/images/logo.svg" -Destination "public/icons/icon-192x192.png"
Copy-Item "public/images/logo.svg" -Destination "public/icons/icon-512x512.png"
Copy-Item "public/images/logo.svg" -Destination "public/favicon.ico"

Write-Host "Favicon bestanden zijn gegenereerd!" 