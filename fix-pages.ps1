# Fix-pages.ps1
# Script om alle pagina's te converteren naar client components en dubbele imports te verwijderen

$pageFilePaths = Get-ChildItem -Path "./src/app" -Recurse -Filter "page.tsx" | ForEach-Object { $_.FullName }

foreach ($filePath in $pageFilePaths) {
    $content = Get-Content -Path $filePath -Raw
    
    # Als de pagina nog geen 'use client' directive heeft
    if (-not ($content -match "'use client';")) {
        Write-Host "Converting $filePath to client component..."
        
        # Voeg 'use client' directive toe aan het begin
        $newContent = "'use client';" + "`n`n" + $content
        
        # Importeer PageWrapper component en wrap de content
        $pageWrapperImport = "import PageWrapper from '@/components/client/PageWrapper';"
        $newContent = $newContent -replace "import (.*?) from '(.*?)';", "import `$1 from '`$2';`n$pageWrapperImport"
        
        # Wrap de return statement met PageWrapper
        if ($newContent -match "return \(([^\)]*?)(<.*>)([^\)]*?)\);") {
            $newContent = $newContent -replace "return \(([^\)]*?)(<.*>)([^\)]*?)\);", "return (`$1<PageWrapper>`$2`$3</PageWrapper>`$1);"
        }
        elseif ($newContent -match "return \(([^\)]*)<") {
            $newContent = $newContent -replace "return \(([^\)]*)<", "return (`$1<PageWrapper><"
            $newContent = $newContent -replace ">([^\)]*)\);", ">`$1</PageWrapper>);"
        }
        
        # Sla het bestand op
        Set-Content -Path $filePath -Value $newContent
    }
    else {
        Write-Host "Fixing $filePath, removing duplicate PageWrapper imports..."
        
        # Verwijder dubbele imports van PageWrapper
        $lines = $content -split "`n"
        $newLines = @()
        $hasPageWrapperImport = $false
        
        foreach ($line in $lines) {
            if ($line -match "import PageWrapper from '@/components/client/PageWrapper';") {
                if (-not $hasPageWrapperImport) {
                    $newLines += $line
                    $hasPageWrapperImport = $true
                }
                # Skip this line if we already have a PageWrapper import
            }
            else {
                $newLines += $line
            }
        }
        
        $newContent = $newLines -join "`n"
        
        # Corrigeer pagina's zonder PageWrapper rond de return
        if (-not ($newContent -match "<PageWrapper>")) {
            if ($newContent -match "return \(([^\)]*?)(<.*>)([^\)]*?)\);") {
                $newContent = $newContent -replace "return \(([^\)]*?)(<.*>)([^\)]*?)\);", "return (`$1<PageWrapper>`$2`$3</PageWrapper>`$1);"
            }
            elseif ($newContent -match "return \(([^\)]*)<") {
                $newContent = $newContent -replace "return \(([^\)]*)<", "return (`$1<PageWrapper><"
                $newContent = $newContent -replace ">([^\)]*)\);", ">`$1</PageWrapper>);"
            }
        }
        
        # Sla het bestand op
        Set-Content -Path $filePath -Value $newContent
    }
}

Write-Host "Done fixing all pages." 