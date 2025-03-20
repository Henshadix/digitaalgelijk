# PowerShell script om afbeeldingen te downloaden voor de diensten sectie

# Functie om een afbeelding te downloaden
function Download-Image {
    param (
        [string]$Url,
        [string]$OutputPath
    )
    
    Write-Host "Downloading image from $Url to $OutputPath..."
    
    try {
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath
        Write-Host "Successfully downloaded to $OutputPath" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download image: $_" -ForegroundColor Red
    }
}

# Maak de output directory als deze nog niet bestaat
$outputDir = "public\images\services"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    Write-Host "Created directory: $outputDir" -ForegroundColor Yellow
}

# URLs van de afbeeldingen (Unsplash afbeeldingen)
$imageUrls = @{
    "hardware-opkopen-pro.jpg" = "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
    "data-verwijdering-pro.jpg" = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
    "hardware-recycling-pro.jpg" = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop"
    "logistieke-diensten-pro.jpg" = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
}

# Download elke afbeelding
foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $outputDir $image.Key
    Download-Image -Url $image.Value -OutputPath $outputPath
}

Write-Host "All images downloaded successfully!" -ForegroundColor Green 