Write-Host "===== Bestanden terughalen uit archiefmappen =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of de archiefmappen bestaan
$archiefMappen = @(
    ".\archief-overbodige-bestanden",
    ".\archief-hulpscripts"
)

foreach ($map in $archiefMappen) {
    if (Test-Path $map) {
        Write-Host "Archiefmap gevonden: $map" -ForegroundColor Green
        
        # Kopieer alle bestanden uit de archiefmap naar de huidige map
        $bestanden = Get-ChildItem -Path $map -File -Recurse
        
        foreach ($bestand in $bestanden) {
            $relatievePad = $bestand.FullName.Substring($map.Length + 1)
            $doelPad = Join-Path -Path "." -ChildPath $relatievePad
            
            # Maak de doelmap aan als deze nog niet bestaat
            $doelMap = Split-Path -Path $doelPad -Parent
            if (!(Test-Path $doelMap)) {
                New-Item -ItemType Directory -Path $doelMap -Force | Out-Null
            }
            
            # Kopieer het bestand
            Copy-Item -Path $bestand.FullName -Destination $doelPad -Force
            Write-Host "Teruggehaald: $relatievePad" -ForegroundColor Green
        }
    }
}

Write-Host "`nAlle bestanden zijn teruggehaald uit de archiefmappen" -ForegroundColor Green
Write-Host "`nDruk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 