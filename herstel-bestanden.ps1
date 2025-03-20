Write-Host "===== Bestanden terughalen uit archiefmappen =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of de archiefmappen bestaan
$archiefMappen = @(
    ".\archief-overbodige-bestanden",
    ".\archief-hulpscripts"
)

$bestaandeArchiefMappen = @()
foreach ($map in $archiefMappen) {
    if (Test-Path $map) {
        $bestaandeArchiefMappen += $map
        Write-Host "Archiefmap gevonden: $map" -ForegroundColor Green
    }
}

if ($bestaandeArchiefMappen.Count -eq 0) {
    Write-Host "Geen archiefmappen gevonden. Er zijn mogelijk geen bestanden gearchiveerd." -ForegroundColor Yellow
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Functie om bestanden recursief terug te halen uit een map
function Herstel-Bestanden {
    param (
        [string]$bronMap,
        [string]$doelMap
    )
    
    # Haal alle bestanden en mappen op
    $items = Get-ChildItem -Path $bronMap -Force
    
    foreach ($item in $items) {
        $doelPad = Join-Path -Path $doelMap -ChildPath $item.Name
        
        if ($item.PSIsContainer) {
            # Het is een map, maak de map aan in de doelmap als deze nog niet bestaat
            if (!(Test-Path $doelPad)) {
                New-Item -ItemType Directory -Path $doelPad -Force | Out-Null
            }
            
            # Recursief bestanden terughalen uit de submap
            Herstel-Bestanden -bronMap $item.FullName -doelMap $doelPad
        } else {
            # Het is een bestand, kopieer het naar de doelmap
            try {
                Copy-Item -Path $item.FullName -Destination $doelPad -Force
                Write-Host "Teruggehaald: $($item.Name)" -ForegroundColor Green
            } catch {
                Write-Host "Fout bij terughalen van $($item.Name): $($_.Exception.Message)" -ForegroundColor Red
            }
        }
    }
}

# Vraag of de gebruiker alle bestanden wil terughalen
Write-Host "Wil je alle bestanden terughalen uit de archiefmappen? (j/n)" -ForegroundColor Cyan
$antwoord = Read-Host

if ($antwoord -eq "j" -or $antwoord -eq "J") {
    # Haal alle bestanden terug uit de archiefmappen
    foreach ($map in $bestaandeArchiefMappen) {
        Write-Host "Bestanden terughalen uit: $map" -ForegroundColor Yellow
        Herstel-Bestanden -bronMap $map -doelMap "."
    }
    
    Write-Host "`nAlle bestanden zijn teruggehaald uit de archiefmappen" -ForegroundColor Green
    
    # Vraag of de gebruiker de archiefmappen wil verwijderen
    Write-Host "Wil je de archiefmappen verwijderen? (j/n)" -ForegroundColor Cyan
    $verwijderAntwoord = Read-Host
    
    if ($verwijderAntwoord -eq "j" -or $verwijderAntwoord -eq "J") {
        foreach ($map in $bestaandeArchiefMappen) {
            try {
                Remove-Item -Path $map -Recurse -Force
                Write-Host "Verwijderd: $map" -ForegroundColor Green
            } catch {
                Write-Host "Fout bij verwijderen van $map: $($_.Exception.Message)" -ForegroundColor Red
            }
        }
        
        Write-Host "`nAlle archiefmappen zijn verwijderd" -ForegroundColor Green
    } else {
        Write-Host "`nArchiefmappen zijn behouden" -ForegroundColor Yellow
    }
} else {
    Write-Host "`nGeen bestanden teruggehaald" -ForegroundColor Yellow
}

Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 