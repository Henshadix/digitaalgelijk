# Installeer ImageMagick als het nog niet is geïnstalleerd
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host "ImageMagick is niet geïnstalleerd. Installeer het eerst via: https://imagemagick.org/script/download.php"
    exit 1
}

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