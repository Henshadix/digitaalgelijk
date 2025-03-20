@echo off
echo ===== Server.js updaten en naar GitHub pushen =====
echo.

echo 1. Server.js bijwerken om op alle IP-adressen te luisteren en poort 3000 te gebruiken...
echo.

echo const http = require('http'); > server.js.new
echo const fs = require('fs'); >> server.js.new
echo const path = require('path'); >> server.js.new
echo. >> server.js.new
echo // Wijzig de poort van 3001 naar 3000 om overeen te komen met de Dockerfile >> server.js.new
echo const PORT = process.env.PORT ^|^| 3000; >> server.js.new
echo. >> server.js.new
echo const server = http.createServer((req, res) =^> { >> server.js.new
echo   // Standaard route naar onder-constructie.html >> server.js.new
echo   let filePath = './onder-constructie.html'; >> server.js.new
echo. >> server.js.new
echo   // Als de URL /onder-constructie is, gebruik ook onder-constructie.html >> server.js.new
echo   if (req.url === '/onder-constructie') { >> server.js.new
echo     filePath = './onder-constructie.html'; >> server.js.new
echo   } >> server.js.new
echo. >> server.js.new
echo   // Bepaal het content type op basis van de bestandsextensie >> server.js.new
echo   const extname = path.extname(filePath); >> server.js.new
echo   let contentType = 'text/html'; >> server.js.new
echo. >> server.js.new
echo   switch (extname) { >> server.js.new
echo     case '.js': >> server.js.new
echo       contentType = 'text/javascript'; >> server.js.new
echo       break; >> server.js.new
echo     case '.css': >> server.js.new
echo       contentType = 'text/css'; >> server.js.new
echo       break; >> server.js.new
echo     case '.json': >> server.js.new
echo       contentType = 'application/json'; >> server.js.new
echo       break; >> server.js.new
echo     case '.png': >> server.js.new
echo       contentType = 'image/png'; >> server.js.new
echo       break; >> server.js.new
echo     case '.jpg': >> server.js.new
echo       contentType = 'image/jpg'; >> server.js.new
echo       break; >> server.js.new
echo   } >> server.js.new
echo. >> server.js.new
echo   // Lees het bestand >> server.js.new
echo   fs.readFile(filePath, (err, content) =^> { >> server.js.new
echo     if (err) { >> server.js.new
echo       if (err.code === 'ENOENT') { >> server.js.new
echo         // Pagina niet gevonden >> server.js.new
echo         fs.readFile('./404.html', (err, content) =^> { >> server.js.new
echo           res.writeHead(404, { 'Content-Type': 'text/html' }); >> server.js.new
echo           res.end(content, 'utf8'); >> server.js.new
echo         }); >> server.js.new
echo       } else { >> server.js.new
echo         // Server error >> server.js.new
echo         res.writeHead(500); >> server.js.new
echo         res.end(`Server Error: ${err.code}`); >> server.js.new
echo       } >> server.js.new
echo     } else { >> server.js.new
echo       // Succes >> server.js.new
echo       res.writeHead(200, { 'Content-Type': contentType }); >> server.js.new
echo       res.end(content, 'utf8'); >> server.js.new
echo     } >> server.js.new
echo   }); >> server.js.new
echo }); >> server.js.new
echo. >> server.js.new
echo // Luister op alle IP-adressen (0.0.0.0) in plaats van alleen localhost >> server.js.new
echo server.listen(PORT, '0.0.0.0', () =^> { >> server.js.new
echo   console.log(`Server draait op http://0.0.0.0:${PORT}`); >> server.js.new
echo   console.log(`Bezoek http://localhost:${PORT}/onder-constructie om de pagina lokaal te bekijken`); >> server.js.new
echo   console.log(`Bezoek http://[jouw-ip-adres]:${PORT}/onder-constructie om de pagina extern te bekijken`); >> server.js.new
echo }); >> server.js.new

move /y server.js.new server.js
echo Server.js is bijgewerkt!
echo.

echo 2. Wijzigingen toevoegen aan Git...
git add server.js
echo.

echo 3. Wijzigingen committen...
git commit -m "Fix: Server now listens on all IP addresses and uses port 3000"
echo.

echo 4. Wijzigingen pushen naar GitHub...
git push
echo.

echo 5. Klaar! De wijzigingen zijn gepusht naar GitHub.
echo Nu moet je je applicatie in Easypanel herstarten.
echo.

pause 