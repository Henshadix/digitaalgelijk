Write-Host "===== Overbodige website bestanden identificeren =====" -ForegroundColor Cyan
Write-Host ""

# Lijst van bestanden die essentieel zijn voor de website
$essentieleBestandenPatronen = @(
    "server.js",
    "onder-constructie.html",
    "404.html",
    "package.json",
    "package-lock.json",
    "Dockerfile",
    "docker-compose.yml",
    ".dockerignore",
    "easypanel.json",
    ".git*",
    "README.md",
    "opschonen-website.ps1",
    "toon-overbodige-bestanden.ps1"
)

# Lijst van mappen die essentieel zijn voor de website
$essentieleMappenPatronen = @(
    ".git"
)

# Lijst van bestanden die duidelijk overbodig zijn
$overbodige_bestanden = @(
    # PowerShell scripts (tijdelijke hulpscripts)
    "*.ps1",
    "*.bat",
    "*.sh",
    
    # Instructie bestanden
    "*INSTRUCTIES*",
    "*.md",
    "*.txt",
    
    # Test bestanden
    "*test*",
    "*Test*",
    
    # Tijdelijke bestanden
    "*fix*",
    "*update*",
    "*push*",
    "*upload*",
    "*installeer*",
    "*voorbereiden*",
    
    # Next.js bestanden (als je geen Next.js gebruikt)
    "next.config.mjs",
    "next-env.d.ts",
    "tsconfig.json",
    "eslint.config.mjs",
    "postcss.config.js",
    "tailwind.config.js",
    
    # Overige bestanden
    "generate-images.*",
    "download-images.*"
)

# Lijst van mappen die overbodig zijn
$overbodige_mappen = @(
    ".next",
    "src",
    "scripts",
    "node_modules"  # Opmerking: node_modules is nodig voor ontwikkeling, maar kan opnieuw worden geïnstalleerd met npm install
)

# Functie om te controleren of een bestand essentieel is
function Is-EssentieleBestand {
    param (
        [string]$bestandsnaam
    )
    
    foreach ($patroon in $essentieleBestandenPatronen) {
        if ($bestandsnaam -like $patroon) {
            return $true
        }
    }
    
    return $false
}

# Functie om te controleren of een map essentieel is
function Is-EssentieleMap {
    param (
        [string]$mapnaam
    )
    
    foreach ($patroon in $essentieleMappenPatronen) {
        if ($mapnaam -like $patroon) {
            return $true
        }
    }
    
    return $false
}

# Functie om te controleren of een bestand overbodig is
function Is-OverbodigeBestand {
    param (
        [string]$bestandsnaam
    )
    
    # Controleer eerst of het een essentieel bestand is
    if (Is-EssentieleBestand $bestandsnaam) {
        return $false
    }
    
    foreach ($patroon in $overbodige_bestanden) {
        if ($bestandsnaam -like $patroon) {
            return $true
        }
    }
    
    return $false
}

# Functie om te controleren of een map overbodig is
function Is-OverbodigeMap {
    param (
        [string]$mapnaam
    )
    
    # Controleer eerst of het een essentiële map is
    if (Is-EssentieleMap $mapnaam) {
        return $false
    }
    
    foreach ($patroon in $overbodige_mappen) {
        if ($mapnaam -like $patroon) {
            return $true
        }
    }
    
    return $false
}

# Zoek alle bestanden in de huidige map
$alleBestandenEnMappen = Get-ChildItem -Path "." -Force

# Maak lijsten van overbodige bestanden en mappen
$overbodige_bestanden_gevonden = @()
$overbodige_mappen_gevonden = @()

foreach ($item in $alleBestandenEnMappen) {
    if ($item.PSIsContainer) {
        # Het is een map
        $relatievePad = $item.FullName.Substring((Get-Location).Path.Length + 1)
        if (Is-OverbodigeMap $relatievePad) {
            $overbodige_mappen_gevonden += $relatievePad
        }
    } else {
        # Het is een bestand
        $relatievePad = $item.FullName.Substring((Get-Location).Path.Length + 1)
        if (Is-OverbodigeBestand $relatievePad) {
            $overbodige_bestanden_gevonden += $relatievePad
        }
    }
}

# Toon de resultaten
Write-Host "Gevonden overbodige bestanden:" -ForegroundColor Yellow
foreach ($bestand in $overbodige_bestanden_gevonden) {
    Write-Host "  - $bestand" -ForegroundColor Gray
}

Write-Host "`nGevonden overbodige mappen:" -ForegroundColor Yellow
foreach ($map in $overbodige_mappen_gevonden) {
    Write-Host "  - $map" -ForegroundColor Gray
}

Write-Host "`nAanbevolen actie:" -ForegroundColor Cyan
Write-Host "Voor een schone, minimale productie-omgeving voor je 'onder constructie' website," -ForegroundColor White
Write-Host "zou je alleen deze bestanden moeten behouden:" -ForegroundColor White
Write-Host "  - server.js" -ForegroundColor Green
Write-Host "  - onder-constructie.html" -ForegroundColor Green
Write-Host "  - 404.html" -ForegroundColor Green
Write-Host "  - package.json" -ForegroundColor Green
Write-Host "  - package-lock.json" -ForegroundColor Green
Write-Host "  - Dockerfile (als je Docker gebruikt)" -ForegroundColor Green
Write-Host "  - docker-compose.yml (als je Docker Compose gebruikt)" -ForegroundColor Green
Write-Host "  - .dockerignore (als je Docker gebruikt)" -ForegroundColor Green
Write-Host "  - easypanel.json (als je Easypanel gebruikt)" -ForegroundColor Green

Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 