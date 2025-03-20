Write-Host "===== Website bestanden opschonen =====" -ForegroundColor Cyan
Write-Host ""

# Maak een map voor het archiveren van overbodige bestanden
$archiveDir = ".\archief-overbodige-bestanden"
if (!(Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Path $archiveDir -Force | Out-Null
    Write-Host "Archief map aangemaakt: $archiveDir" -ForegroundColor Green
}

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
    "README.md"
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
$alleBestandenEnMappen = Get-ChildItem -Path "." -Recurse -Force

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

# Vraag of de gebruiker de bestanden wil verplaatsen naar de archief map
Write-Host "`nWil je deze overbodige bestanden verplaatsen naar de archief map? (j/n)" -ForegroundColor Cyan
$antwoord = Read-Host

if ($antwoord -eq "j" -or $antwoord -eq "J") {
    # Verplaats overbodige bestanden naar de archief map
    foreach ($bestand in $overbodige_bestanden_gevonden) {
        $doelPad = Join-Path -Path $archiveDir -ChildPath $bestand
        $doelMap = Split-Path -Path $doelPad -Parent
        
        if (!(Test-Path $doelMap)) {
            New-Item -ItemType Directory -Path $doelMap -Force | Out-Null
        }
        
        try {
            Move-Item -Path $bestand -Destination $doelPad -Force
            Write-Host "Verplaatst: $bestand" -ForegroundColor Green
        } catch {
            Write-Host "Fout bij verplaatsen van $bestand : $_" -ForegroundColor Red
        }
    }
    
    # Verplaats overbodige mappen naar de archief map
    foreach ($map in $overbodige_mappen_gevonden) {
        $doelPad = Join-Path -Path $archiveDir -ChildPath $map
        $doelMap = Split-Path -Path $doelPad -Parent
        
        if (!(Test-Path $doelMap)) {
            New-Item -ItemType Directory -Path $doelMap -Force | Out-Null
        }
        
        try {
            # Kopieer de map eerst (om problemen met geneste mappen te voorkomen)
            Copy-Item -Path $map -Destination $doelPad -Recurse -Force
            # Verwijder de originele map
            Remove-Item -Path $map -Recurse -Force
            Write-Host "Verplaatst: $map" -ForegroundColor Green
        } catch {
            Write-Host "Fout bij verplaatsen van $map : $_" -ForegroundColor Red
        }
    }
    
    Write-Host "`nAlle overbodige bestanden en mappen zijn verplaatst naar: $archiveDir" -ForegroundColor Green
    Write-Host "Je kunt deze map verwijderen als je zeker weet dat je de bestanden niet meer nodig hebt." -ForegroundColor Yellow
} else {
    Write-Host "`nGeen bestanden verplaatst. Je kunt dit script opnieuw uitvoeren als je de bestanden later wilt opschonen." -ForegroundColor Yellow
}

Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 