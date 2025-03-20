Write-Host "===== Alleen hulpscripts en tijdelijke bestanden verwijderen =====" -ForegroundColor Cyan
Write-Host ""

# Maak een map voor het archiveren van overbodige bestanden
$archiveDir = ".\archief-hulpscripts"
if (!(Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Path $archiveDir -Force | Out-Null
    Write-Host "Archief map aangemaakt: $archiveDir" -ForegroundColor Green
}

# Lijst van bestanden die duidelijk overbodig zijn (alleen hulpscripts en tijdelijke bestanden)
$overbodige_bestanden = @(
    # Opschoon scripts
    "opschonen-website.ps1",
    "toon-overbodige-bestanden.ps1",
    "behoud-alle-paginas.ps1",
    
    # Overgebleven hulpscripts
    "vind-branch-en-push.ps1",
    "start-server.ps1",
    "download-images.ps1",
    
    # Test bestanden
    "test-smtp.js",
    "smtp-test.html"
)

# Zoek alle bestanden in de huidige map
$alleBestandenEnMappen = Get-ChildItem -Path "." -Force | Where-Object { -not $_.PSIsContainer }

# Maak lijsten van overbodige bestanden
$overbodige_bestanden_gevonden = @()

foreach ($item in $alleBestandenEnMappen) {
    $bestandsnaam = $item.Name
    if ($overbodige_bestanden -contains $bestandsnaam) {
        $overbodige_bestanden_gevonden += $bestandsnaam
    }
}

# Toon de resultaten
Write-Host "Gevonden hulpscripts en tijdelijke bestanden:" -ForegroundColor Yellow
foreach ($bestand in $overbodige_bestanden_gevonden) {
    Write-Host "  - $bestand" -ForegroundColor Gray
}

# Vraag of de gebruiker de bestanden wil verplaatsen naar de archief map
Write-Host "`nWil je deze bestanden verplaatsen naar de archief map? (j/n)" -ForegroundColor Cyan
$antwoord = Read-Host

if ($antwoord -eq "j" -or $antwoord -eq "J") {
    # Verplaats overbodige bestanden naar de archief map
    foreach ($bestand in $overbodige_bestanden_gevonden) {
        try {
            Move-Item -Path $bestand -Destination $archiveDir -Force
            Write-Host "Verplaatst: $bestand" -ForegroundColor Green
        } catch {
            Write-Host "Fout bij verplaatsen van $bestand : $_" -ForegroundColor Red
        }
    }
    
    Write-Host "`nAlle hulpscripts en tijdelijke bestanden zijn verplaatst naar: $archiveDir" -ForegroundColor Green
    Write-Host "Je kunt deze map verwijderen als je zeker weet dat je de bestanden niet meer nodig hebt." -ForegroundColor Yellow
} else {
    Write-Host "`nGeen bestanden verplaatst. Je kunt dit script opnieuw uitvoeren als je de bestanden later wilt opschonen." -ForegroundColor Yellow
}

Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 