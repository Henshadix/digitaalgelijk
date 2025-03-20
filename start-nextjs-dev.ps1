Write-Host "===== Digitaal Gelijk Website - Next.js Ontwikkelomgeving =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of Node.js is geïnstalleerd
try {
    $nodeVersion = node --version
    Write-Host "Node.js versie $nodeVersion gevonden" -ForegroundColor Green
} catch {
    Write-Host "Node.js is niet geïnstalleerd of niet beschikbaar in het PATH" -ForegroundColor Red
    Write-Host "Download en installeer Node.js van https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Controleer of npm is geïnstalleerd
try {
    $npmVersion = npm --version
    Write-Host "npm versie $npmVersion gevonden" -ForegroundColor Green
} catch {
    Write-Host "npm is niet geïnstalleerd of niet beschikbaar in het PATH" -ForegroundColor Red
    Write-Host "npm zou samen met Node.js moeten zijn geïnstalleerd" -ForegroundColor Yellow
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Controleer of de benodigde bestanden aanwezig zijn
$requiredFiles = @("next.config.mjs", "package.json", "tsconfig.json")
$missingFiles = @()

foreach ($file in $requiredFiles) {
    if (!(Test-Path $file)) {
        $missingFiles += $file
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host "De volgende benodigde bestanden ontbreken:" -ForegroundColor Red
    foreach ($file in $missingFiles) {
        Write-Host "  - $file" -ForegroundColor Red
    }
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Controleer of de src map bestaat
if (!(Test-Path "src")) {
    Write-Host "De src map ontbreekt, dit is nodig voor de Next.js applicatie" -ForegroundColor Red
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Installeer de dependencies als node_modules niet bestaat
if (!(Test-Path "node_modules")) {
    Write-Host "node_modules map niet gevonden, dependencies worden geïnstalleerd..." -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Er is een fout opgetreden bij het installeren van de dependencies" -ForegroundColor Red
        Write-Host "Druk op een toets om af te sluiten..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit
    }
    
    Write-Host "Dependencies zijn succesvol geïnstalleerd" -ForegroundColor Green
} else {
    Write-Host "node_modules map gevonden, dependencies zijn al geïnstalleerd" -ForegroundColor Green
}

# Controleer of er een proces draait op poort 3000
$portInUse = $false
try {
    $connections = netstat -ano | findstr :3000
    if ($connections) {
        $portInUse = $true
        Write-Host "Waarschuwing: Poort 3000 is al in gebruik" -ForegroundColor Yellow
        Write-Host "Dit kan een conflict veroorzaken met de Next.js ontwikkelserver" -ForegroundColor Yellow
        Write-Host "Wil je proberen het proces te beëindigen? (j/n)" -ForegroundColor Cyan
        $answer = Read-Host
        
        if ($answer -eq "j" -or $answer -eq "J") {
            # Haal het PID van het proces dat poort 3000 gebruikt
            $pid = ($connections -split '\s+')[-1]
            Write-Host "Proces met PID $pid wordt beëindigd..." -ForegroundColor Yellow
            taskkill /PID $pid /F
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Proces is succesvol beëindigd" -ForegroundColor Green
                $portInUse = $false
            } else {
                Write-Host "Er is een fout opgetreden bij het beëindigen van het proces" -ForegroundColor Red
                Write-Host "Je kunt de Next.js ontwikkelserver nog steeds starten, maar er kan een conflict optreden" -ForegroundColor Yellow
            }
        }
    }
} catch {
    # Negeer fouten bij het controleren van de poort
}

# Controleer of het next script bestaat in package.json
$packageJson = Get-Content -Path "package.json" -Raw | ConvertFrom-Json
$hasNextDev = $false

if ($packageJson.scripts -and $packageJson.scripts.dev) {
    $hasNextDev = $true
} else {
    Write-Host "Het 'dev' script ontbreekt in package.json" -ForegroundColor Yellow
    Write-Host "Het script wordt toegevoegd..." -ForegroundColor Yellow
    
    # Voeg het dev script toe aan package.json
    $packageJson.scripts = $packageJson.scripts | Select-Object -Property * -ExcludeProperty dev
    $packageJson.scripts | Add-Member -MemberType NoteProperty -Name "dev" -Value "next dev"
    
    # Sla de gewijzigde package.json op
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path "package.json"
    
    Write-Host "Het 'dev' script is toegevoegd aan package.json" -ForegroundColor Green
    $hasNextDev = $true
}

# Start de Next.js ontwikkelserver
Write-Host ""
Write-Host "===== Next.js ontwikkelserver starten =====" -ForegroundColor Cyan
Write-Host "De Next.js ontwikkelserver wordt gestart" -ForegroundColor Yellow
Write-Host "Wijzigingen in de bestanden worden automatisch herladen" -ForegroundColor Yellow
Write-Host "Druk op Ctrl+C om de server te stoppen" -ForegroundColor Yellow
Write-Host ""

# Toon informatie over hoe de website te bekijken
Write-Host "===== Website bekijken =====" -ForegroundColor Cyan
Write-Host "Lokaal: http://localhost:3000" -ForegroundColor Green

# Haal het lokale IP-adres op voor toegang vanaf andere apparaten in het netwerk
try {
    $localIP = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi" -ErrorAction SilentlyContinue).IPAddress
    if (!$localIP) {
        $localIP = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Ethernet" -ErrorAction SilentlyContinue).IPAddress
    }
    if ($localIP) {
        Write-Host "Netwerk: http://$localIP`:3000" -ForegroundColor Green
        Write-Host "Je kunt de website bekijken op andere apparaten in je netwerk via bovenstaande URL" -ForegroundColor Yellow
    }
} catch {
    # Negeer fouten bij het ophalen van het IP-adres
}

Write-Host ""
Write-Host "===== Server output =====" -ForegroundColor Cyan

# Start de Next.js ontwikkelserver
npm run dev 