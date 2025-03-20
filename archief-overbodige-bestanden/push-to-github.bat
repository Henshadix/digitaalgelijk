@echo off
echo ===== Wijzigingen pushen naar GitHub =====
echo.

echo 1. Git status controleren...
git status
echo.

echo 2. Wijzigingen toevoegen aan Git...
git add server.js docker-compose.yml
echo.

echo 3. Wijzigingen committen...
git commit -m "Fix: Server now listens on all IP addresses and uses port 3000"
echo.

echo 4. Wijzigingen pushen naar GitHub...
git push origin master
echo.

echo 5. Klaar! De wijzigingen zijn gepusht naar GitHub.
echo Nu moet je je applicatie in Easypanel herstarten.
echo.

pause 