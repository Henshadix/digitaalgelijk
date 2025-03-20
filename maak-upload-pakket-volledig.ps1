# Script om een uploadpakket te maken voor Easypanel - volledig geoptimaliseerde versie
Write-Host "Digitaalgelijk Website - Uploadpakket maken (volledig geoptimaliseerd)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

# Bepaal de locatie van het script en het project
$projectDir = Get-Location
$tempDir = Join-Path $projectDir "digitaalgelijk-upload"
$zipFile = Join-Path $projectDir "digitaalgelijk-website-optimized.zip"

# Maak een schone tijdelijke map
Write-Host "`nStap 1: Tijdelijke map voorbereiden..." -ForegroundColor Green
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Lijst van te kopiëren bestanden en mappen
$includePaths = @(
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.mjs",
    "tailwind.config.js",
    "postcss.config.js",
    "tsconfig.json",
    ".env.local.example",
    "server.js",
    "eslint.config.mjs",
    ".gitignore",
    "Dockerfile"
)

# Lijst van mappen om te skippen (die problemen kunnen veroorzaken)
$skipFolders = @(
    "node_modules",
    ".next",
    ".git",
    "Website tekst",
    "esktop",
    "Digitaa",
    "archief-hulpscripts",
    "archief-overbodige-bestanden"
)

# Kopieer de bestanden naar de tijdelijke map
Write-Host "`nStap 2: Bestanden kopiëren..." -ForegroundColor Green
foreach ($path in $includePaths) {
    $sourcePath = Join-Path $projectDir $path
    $destPath = Join-Path $tempDir $path
    
    if (Test-Path $sourcePath) {
        if ((Get-Item $sourcePath) -is [System.IO.DirectoryInfo]) {
            # Als het een map is, kopieer de hele map (behalve de te skippen mappen)
            Write-Host "  Kopiëren map: $path" -ForegroundColor Gray
            
            # Maak de basis map
            New-Item -ItemType Directory -Path $destPath -Force | Out-Null
            
            # Gebruik robocopy om de map te kopiëren, behalve de skipfolders
            $skipArgs = $skipFolders | ForEach-Object { "/XD ""$_""" }
            $robocopyArgs = @($sourcePath, $destPath, "/E", "/NFL", "/NDL", "/NJH", "/NJS") + $skipArgs
            
            # Voer robocopy uit
            & robocopy $robocopyArgs | Out-Null
        } else {
            # Als het een bestand is, kopieer het bestand
            Write-Host "  Kopiëren bestand: $path" -ForegroundColor Gray
            Copy-Item -Path $sourcePath -Destination $destPath
        }
    } else {
        Write-Host "  Overgeslagen (niet gevonden): $path" -ForegroundColor Yellow
    }
}

# Functie om een placeholder bestand toe te voegen aan een map
function Add-Placeholder {
    param (
        [string]$directory,
        [string]$content = "Dit is een placeholder bestand om te voorkomen dat deze map leeg is."
    )
    
    # Controleer of het een directory is en geen bestand
    if (-not (Test-Path -Path $directory -PathType Container)) {
        Write-Host "    Kan geen placeholder toevoegen aan ${directory}: Is geen map." -ForegroundColor Red
        return
    }
    
    $placeholderFile = Join-Path $directory ".placeholder"
    Set-Content -Path $placeholderFile -Value $content
}

# Maak een .env.local.example bestand
$envFile = Join-Path $tempDir ".env.local.example"
if (-not (Test-Path $envFile)) {
    Write-Host "  Maken voorbeeld .env.local.example" -ForegroundColor Gray
    @"
# SMTP instellingen voor contactformulier
SMTP_HOST=smtp.provider.nl
SMTP_PORT=587
SMTP_USER=email@example.com
SMTP_PASSWORD=your_password
SMTP_SECURE=false
CONTACT_EMAIL=info@digitaalgelijk.nl
NODE_ENV=production
"@ | Out-File -FilePath $envFile -Encoding utf8
}

# Maak een README.md
$readmeFile = Join-Path $tempDir "README.md"
if (-not (Test-Path $readmeFile)) {
    Write-Host "  Maken README.md" -ForegroundColor Gray
    @"
# Digitaalgelijk Website

## Installatie

1. Upload deze bestanden naar je server
2. Voer `npm install` uit om dependencies te installeren
3. Maak een `.env.local` bestand met de juiste instellingen (zie .env.local.example)
4. Bouw de applicatie met `npm run build`
5. Start de server met `npm start`

## Omgevingsvariabelen

Maak een `.env.local` bestand met de volgende variabelen:

- SMTP_HOST - SMTP server voor e-mails
- SMTP_PORT - SMTP poort (meestal 587)
- SMTP_USER - SMTP gebruikersnaam/e-mailadres
- SMTP_PASSWORD - SMTP wachtwoord
- SMTP_SECURE - Gebruik SMTP TLS (false voor poort 587)
- CONTACT_EMAIL - E-mailadres waar contactformulieren naartoe gaan
- NODE_ENV - Zet op 'production' voor productieomgeving
"@ | Out-File -FilePath $readmeFile -Encoding utf8
}

# Stap 3: Zoek alle lege mappen en voeg placeholder bestanden toe
Write-Host "`nStap 3: Lege mappen vullen met placeholder bestanden..." -ForegroundColor Green
$emptyDirs = 0

# Recursief zoeken naar lege mappen
function Process-EmptyDirectories {
    param (
        [string]$basePath
    )
    
    $script:emptyDirs = 0
    Find-EmptyDirectories $basePath
    
    Write-Host "  Gevonden en gevulde lege mappen: $($script:emptyDirs)" -ForegroundColor Gray
}

function Find-EmptyDirectories {
    param (
        [string]$dirPath
    )
    
    # Controleer of het een geldige directory is
    if (-not (Test-Path -Path $dirPath -PathType Container)) {
        return
    }
    
    # Krijg alle subdirectories
    $subdirs = Get-ChildItem -Path $dirPath -Directory
    
    foreach ($dir in $subdirs) {
        # Controleer eerst recursief subdirectories
        Find-EmptyDirectories $dir.FullName
        
        # Controleer of de map leeg is
        $isEmpty = (Get-ChildItem -Path $dir.FullName -File).Count -eq 0 -and (Get-ChildItem -Path $dir.FullName -Directory).Count -eq 0
        
        if ($isEmpty) {
            $script:emptyDirs++
            Add-Placeholder $dir.FullName "Placeholder bestand voor map: $($dir.Name)"
            Write-Host "    Placeholder toegevoegd aan: $($dir.FullName)" -ForegroundColor DarkGray
        }
    }
}

# Voer de functie uit om lege mappen te vullen
Process-EmptyDirectories $tempDir

# Expliciet aanpakken van bekende probleem mappen
$knownProblemDirs = @(
    (Join-Path $tempDir "src\app"),
    (Join-Path $tempDir "src\app\api"),
    (Join-Path $tempDir "public\avatars")
)

foreach ($dir in $knownProblemDirs) {
    if (Test-Path $dir -PathType Container) {
        # Als de map al bestaat maar mogelijk leeg is, zorg voor een placeholder
        if ((Get-ChildItem -Path $dir -File).Count -eq 0 -and (Get-ChildItem -Path $dir -Directory).Count -eq 0) {
            $dirName = Split-Path $dir -Leaf
            Add-Placeholder $dir "Speciale placeholder voor probleem map: $dirName"
            Write-Host "  Speciale placeholder toegevoegd aan: $dir" -ForegroundColor Yellow
        } else {
            # Als de map /src/app is, voeg expliciet een .placeholder bestand toe, zelfs als deze niet leeg is
            if ($dir -like "*\src\app") {
                $placeholderFile = Join-Path $dir ".placeholder"
                Set-Content -Path $placeholderFile -Value "Speciale placeholder voor src\app map om EasyPanel problemen te voorkomen."
                Write-Host "  Extra placeholder toegevoegd aan: $dir (ook al heeft deze al content)" -ForegroundColor Magenta
                
                # Voeg ook een index.js toe in src/app als deze nog niet bestaat
                $indexFile = Join-Path $dir "index.js"
                if (-not (Test-Path $indexFile)) {
                    @"
// Placeholder file to prevent "EISDIR: illegal operation on a directory" error
// This file helps EasyPanel handle the app directory correctly
// Do not remove

export default function AppPlaceholder() {
  return null;
}
"@ | Out-File -FilePath $indexFile -Encoding utf8
                    Write-Host "  Index.js placeholder toegevoegd aan: $dir" -ForegroundColor Magenta
                }
            } else {
                Write-Host "  Map $dir heeft al inhoud, geen placeholder nodig" -ForegroundColor Gray
            }
        }
    } else {
        # Als de map niet bestaat, maak deze aan met een placeholder
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        $dirName = Split-Path $dir -Leaf
        Add-Placeholder $dir "Speciale placeholder voor ontbrekende map: $dirName"
        Write-Host "  Map aangemaakt met placeholder: $dir" -ForegroundColor Yellow
    }
}

# Maak het ZIP-bestand
Write-Host "`nStap 4: ZIP-bestand maken..." -ForegroundColor Green
if (Test-Path $zipFile) {
    Remove-Item -Path $zipFile -Force
}

# Gebruik Compress-Archive om het ZIP-bestand te maken
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipFile

# Schoon de tijdelijke map op
Write-Host "`nStap 5: Opruimen..." -ForegroundColor Green
Remove-Item -Path $tempDir -Recurse -Force

# Toon resultaat
if (Test-Path $zipFile) {
    $zipSize = (Get-Item $zipFile).Length / 1MB
    Write-Host "`nUploadpakket succesvol gemaakt!" -ForegroundColor Green
    Write-Host "Bestandslocatie: $zipFile" -ForegroundColor Cyan
    Write-Host "Grootte: $([Math]::Round($zipSize, 2)) MB" -ForegroundColor Cyan
    Write-Host "`nJe kunt dit bestand nu uploaden naar Easypanel." -ForegroundColor Green
} else {
    Write-Host "`nFout bij maken van het ZIP-bestand." -ForegroundColor Red
}

Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 