Write-Host "===== 404-fout oplossen en wijzigingen naar GitHub pushen =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of Git beschikbaar is in het systeem PATH
$gitPath = ""
$possibleGitPaths = @(
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "${env:ProgramFiles}\Git\cmd\git.exe",
    "${env:ProgramFiles(x86)}\Git\cmd\git.exe",
    "${env:LOCALAPPDATA}\Programs\Git\cmd\git.exe"
)

foreach ($path in $possibleGitPaths) {
    if (Test-Path $path) {
        $gitPath = $path
        Write-Host "Git gevonden op: $gitPath" -ForegroundColor Green
        break
    }
}

if ([string]::IsNullOrEmpty($gitPath)) {
    Write-Host "Git kon niet worden gevonden op de standaard locaties." -ForegroundColor Red
    Write-Host "Probeer Git handmatig te installeren vanaf: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Druk op een toets om af te sluiten..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Functie om Git commando's uit te voeren met het volledige pad
function Invoke-Git {
    param([string]$Command)
    $arguments = $Command.Split(" ")
    & $gitPath $arguments
    return $LASTEXITCODE
}

# server.js bijwerken
Write-Host "1. server.js bijwerken..." -ForegroundColor Yellow

$serverJsContent = @'
const http = require('http');
const fs = require('fs');
const path = require('path');

// Wijzig de poort van 3001 naar 3000 om overeen te komen met de Dockerfile
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Verzoek ontvangen voor: ${req.url}`);
  
  // Standaard route naar onder-constructie.html voor alle URL's
  let filePath = './onder-constructie.html';
  
  // Bepaal het content type op basis van de bestandsextensie
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Lees het bestand
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Pagina niet gevonden
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Succes
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

// Luister op alle IP-adressen (0.0.0.0) in plaats van alleen localhost
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server draait op http://0.0.0.0:${PORT}`);
  console.log(`Bezoek http://localhost:${PORT} om de pagina lokaal te bekijken`);
  console.log(`Bezoek http://[jouw-ip-adres]:${PORT} om de pagina extern te bekijken`);
});
'@

Set-Content -Path "server.js" -Value $serverJsContent -Encoding UTF8
Write-Host "server.js is bijgewerkt!" -ForegroundColor Green
Write-Host ""

# easypanel.json bijwerken
Write-Host "2. easypanel.json bijwerken..." -ForegroundColor Yellow

$easypanelContent = @'
{
  "name": "digitaalgelijk-website",
  "type": "docker-compose",
  "compose": {
    "file": "docker-compose.yml"
  },
  "domains": [
    {
      "domain": "digitaalgelijk.nl",
      "port": 3002,
      "https": true,
      "path": "/"
    }
  ],
  "env": [
    {
      "name": "NODE_ENV",
      "value": "production"
    },
    {
      "name": "PORT",
      "value": "3000"
    },
    {
      "name": "DOMAIN",
      "value": "digitaalgelijk.nl"
    }
  ],
  "resources": {
    "memory": 1024,
    "cpu": 1
  }
}
'@

Set-Content -Path "easypanel.json" -Value $easypanelContent -Encoding UTF8
Write-Host "easypanel.json is bijgewerkt!" -ForegroundColor Green
Write-Host ""

# Test de server
Write-Host "3. Server testen..." -ForegroundColor Yellow
Write-Host "De server wordt gestart. Druk op Ctrl+C om te stoppen na het testen." -ForegroundColor Yellow
Write-Host "Je kunt de server testen door naar http://localhost:3000 te gaan in je browser." -ForegroundColor Yellow
Write-Host ""
Write-Host "Starten van de server in 3 seconden..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Start de server
try {
    # Start de server in een apart proces
    $process = Start-Process -FilePath "node" -ArgumentList "server.js" -PassThru -NoNewWindow
    
    Write-Host "Server is gestart met process ID: $($process.Id)" -ForegroundColor Green
    Write-Host "Wacht 5 seconden om te controleren of de server correct draait..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    # Controleer of het proces nog draait
    if (-not (Get-Process -Id $process.Id -ErrorAction SilentlyContinue)) {
        Write-Host "Server is gestopt! Er is mogelijk een fout opgetreden." -ForegroundColor Red
    } else {
        Write-Host "Server draait correct!" -ForegroundColor Green
        
        # Stop de server
        Write-Host "Server stoppen..." -ForegroundColor Yellow
        Stop-Process -Id $process.Id -Force
        Write-Host "Server is gestopt." -ForegroundColor Green
    }
} catch {
    Write-Host "Er is een fout opgetreden bij het starten van de server:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""

# GitHub repository URL
$repoUrl = "https://github.com/Henshadix/digitaalgelijk-website.git"

# Controleer of we in een Git repository zijn
$inGitRepo = $false
try {
    $gitStatus = Invoke-Git "status"
    if ($gitStatus -eq 0) {
        $inGitRepo = $true
        Write-Host "Git repository gevonden!" -ForegroundColor Green
    }
} catch {
    Write-Host "Dit lijkt geen Git repository te zijn. We moeten het initialiseren." -ForegroundColor Yellow
}

# Als we niet in een Git repository zijn, initialiseer er dan een
if (-not $inGitRepo) {
    Write-Host "Git repository initialiseren..." -ForegroundColor Yellow
    Invoke-Git "init"
    
    # Voeg de remote toe
    Invoke-Git "remote add origin $repoUrl"
    
    Write-Host "Git repository geïnitialiseerd en remote toegevoegd!" -ForegroundColor Green
} else {
    # Controleer of de remote correct is ingesteld
    $remoteUrl = & $gitPath remote get-url origin 2>$null
    
    if ($LASTEXITCODE -ne 0 -or $remoteUrl -ne $repoUrl) {
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Remote 'origin' toevoegen..." -ForegroundColor Yellow
            Invoke-Git "remote add origin $repoUrl"
        } else {
            Write-Host "Remote 'origin' bijwerken..." -ForegroundColor Yellow
            Invoke-Git "remote set-url origin $repoUrl"
        }
        
        Write-Host "Remote 'origin' is ingesteld op: $repoUrl" -ForegroundColor Green
    } else {
        Write-Host "Remote 'origin' is al correct ingesteld op: $repoUrl" -ForegroundColor Green
    }
}

# Configureer Git gebruikersnaam en e-mail als ze nog niet zijn ingesteld
try {
    $userName = & $gitPath config --get user.name
    $userEmail = & $gitPath config --get user.email
    
    if ([string]::IsNullOrEmpty($userName) -or [string]::IsNullOrEmpty($userEmail)) {
        Write-Host "Git gebruikersnaam en e-mail zijn nog niet geconfigureerd." -ForegroundColor Yellow
        
        if ([string]::IsNullOrEmpty($userName)) {
            $newUserName = Read-Host "Voer je naam in voor Git commits"
            Invoke-Git "config --global user.name `"$newUserName`""
        }
        
        if ([string]::IsNullOrEmpty($userEmail)) {
            $newUserEmail = Read-Host "Voer je e-mailadres in voor Git commits"
            Invoke-Git "config --global user.email `"$newUserEmail`""
        }
        
        Write-Host "Git gebruikersnaam en e-mail zijn geconfigureerd!" -ForegroundColor Green
    } else {
        Write-Host "Git gebruikersnaam en e-mail zijn al geconfigureerd:" -ForegroundColor Green
        Write-Host "Naam: $userName" -ForegroundColor Green
        Write-Host "E-mail: $userEmail" -ForegroundColor Green
    }
} catch {
    Write-Host "Er is een fout opgetreden bij het controleren van de Git configuratie:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

# Voeg de bestanden toe aan Git
Write-Host "Bestanden toevoegen aan Git..." -ForegroundColor Yellow
Invoke-Git "add server.js easypanel.json"

# Commit de wijzigingen
Write-Host "Wijzigingen committen..." -ForegroundColor Yellow
Invoke-Git "commit -m `"Fix: 404-fout opgelost door alle URL's naar de onder-constructie pagina te leiden`""

# De branch is 'master' volgens de GitHub repository
$branchName = "master"
Write-Host "We gaan pushen naar de 'master' branch..." -ForegroundColor Yellow

# Push de wijzigingen naar GitHub
Write-Host "Wijzigingen pushen naar GitHub ($branchName)..." -ForegroundColor Yellow
$pushResult = Invoke-Git "push -u origin $branchName"

if ($pushResult -ne 0) {
    Write-Host "Er is een fout opgetreden bij het pushen naar GitHub." -ForegroundColor Red
    
    # Vraag om GitHub credentials als dat het probleem zou kunnen zijn
    Write-Host "Mogelijk moet je je GitHub credentials invoeren." -ForegroundColor Yellow
    $githubUsername = Read-Host "Voer je GitHub gebruikersnaam in"
    $githubPassword = Read-Host "Voer je GitHub personal access token in (niet je wachtwoord)" -AsSecureString
    $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($githubPassword)
    $githubPasswordPlain = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    
    # Probeer opnieuw te pushen met credentials
    try {
        $repoUrlWithAuth = $repoUrl -replace "https://", "https://$githubUsername`:$githubPasswordPlain@"
        Invoke-Git "remote set-url origin `"$repoUrlWithAuth`""
        $pushResult = Invoke-Git "push -u origin $branchName"
        
        # Reset de URL om de credentials te verwijderen
        if ($pushResult -eq 0) {
            Invoke-Git "remote set-url origin `"$repoUrl`""
            Write-Host "Wijzigingen zijn succesvol gepusht naar GitHub!" -ForegroundColor Green
        } else {
            Write-Host "Er is nog steeds een fout bij het pushen naar GitHub." -ForegroundColor Red
            Write-Host "Probeer handmatig in te loggen op GitHub en de wijzigingen te pushen." -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Er is een fout opgetreden:" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
} else {
    Write-Host "Wijzigingen zijn succesvol gepusht naar GitHub!" -ForegroundColor Green
}

Write-Host ""
Write-Host "===== Volgende stappen =====" -ForegroundColor Cyan
Write-Host "1. Log in op je Easypanel dashboard" -ForegroundColor Yellow
Write-Host "2. Ga naar je applicatie" -ForegroundColor Yellow
Write-Host "3. Klik op 'Rebuild' of 'Redeploy' om de nieuwe wijzigingen op te halen" -ForegroundColor Yellow
Write-Host "4. Controleer of de applicatie correct start en toegankelijk is" -ForegroundColor Yellow
Write-Host "5. Bezoek je domein (digitaalgelijk.nl) om te controleren of alles werkt" -ForegroundColor Yellow
Write-Host ""

Write-Host "Druk op een toets om af te sluiten..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 