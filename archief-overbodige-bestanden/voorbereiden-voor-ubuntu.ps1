Write-Host "===== Bestanden voorbereiden voor Ubuntu server =====" -ForegroundColor Cyan
Write-Host ""

# Maak een tijdelijke map aan
Write-Host "1. Tijdelijke map aanmaken..." -ForegroundColor Yellow
$tempDir = "C:\temp\website-files"
if (!(Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
}
Write-Host "Tijdelijke map aangemaakt: $tempDir" -ForegroundColor Green
Write-Host ""

# Kopieer de benodigde bestanden
Write-Host "2. Bestanden kopiëren..." -ForegroundColor Yellow
$currentDir = Get-Location
$filesToCopy = @("server.js", "onder-constructie.html", "404.html", "ubuntu-setup.sh", "UBUNTU-INSTRUCTIES.md")

foreach ($file in $filesToCopy) {
    if (Test-Path "$currentDir\$file") {
        Copy-Item "$currentDir\$file" -Destination "$tempDir\" -Force
        Write-Host "Gekopieerd: $file" -ForegroundColor Green
    } else {
        Write-Host "Waarschuwing: $file niet gevonden" -ForegroundColor Yellow
    }
}
Write-Host ""

# Maak een ZIP-bestand
Write-Host "3. ZIP-bestand maken..." -ForegroundColor Yellow
$zipFile = "C:\temp\digitaalgelijk-ubuntu.zip"
if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempDir, $zipFile)

Write-Host "ZIP-bestand aangemaakt: $zipFile" -ForegroundColor Green
Write-Host ""

Write-Host "===== Volgende stappen =====" -ForegroundColor Cyan
Write-Host "1. Kopieer het ZIP-bestand naar je Ubuntu server:" -ForegroundColor Yellow
Write-Host "   scp $zipFile gebruiker@jouw-server-ip:/tmp/" -ForegroundColor Blue
Write-Host ""
Write-Host "2. Log in op je Ubuntu server:" -ForegroundColor Yellow
Write-Host "   ssh gebruiker@jouw-server-ip" -ForegroundColor Blue
Write-Host ""
Write-Host "3. Pak het ZIP-bestand uit op de server:" -ForegroundColor Yellow
Write-Host "   sudo apt-get install unzip" -ForegroundColor Blue
Write-Host "   unzip /tmp/digitaalgelijk-ubuntu.zip -d /tmp/website-files" -ForegroundColor Blue
Write-Host ""
Write-Host "4. Maak het setup script uitvoerbaar:" -ForegroundColor Yellow
Write-Host "   chmod +x /tmp/website-files/ubuntu-setup.sh" -ForegroundColor Blue
Write-Host ""
Write-Host "5. Voer het setup script uit:" -ForegroundColor Yellow
Write-Host "   sudo /tmp/website-files/ubuntu-setup.sh" -ForegroundColor Blue
Write-Host ""
Write-Host "Voor meer gedetailleerde instructies, zie het bestand UBUNTU-INSTRUCTIES.md" -ForegroundColor Yellow
Write-Host ""

Write-Host "Druk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 