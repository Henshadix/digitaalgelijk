Write-Host "===== Wijzigingen pushen naar GitHub =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of Git beschikbaar is
try {
    $gitVersion = git --version
    Write-Host "Git is beschikbaar: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Git is niet beschikbaar. Installeer Git of zorg ervoor dat het in je PATH staat." -ForegroundColor Red
    Write-Host "Download Git van: https://git-scm.com/downloads" -ForegroundColor Yellow
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

Write-Host "1. Git status controleren..." -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "2. Wijzigingen toevoegen aan Git..." -ForegroundColor Yellow
git add server.js docker-compose.yml
Write-Host ""

Write-Host "3. Wijzigingen committen..." -ForegroundColor Yellow
git commit -m "Fix: Server now listens on all IP addresses and uses port 3000"
Write-Host ""

Write-Host "4. Wijzigingen pushen naar GitHub..." -ForegroundColor Yellow
git push origin master
# Als de branch 'main' heet in plaats van 'master', gebruik dan:
# git push origin main
Write-Host ""

Write-Host "5. Klaar! De wijzigingen zijn gepusht naar GitHub." -ForegroundColor Green
Write-Host "Nu moet je je applicatie in Easypanel herstarten." -ForegroundColor Yellow
Write-Host ""

Write-Host "Druk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 