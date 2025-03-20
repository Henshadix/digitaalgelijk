Write-Host "===== Branch vinden en wijzigingen pushen naar GitHub =====" -ForegroundColor Cyan
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

$serverJsContent = @"
const http = require('http');
const fs = require('fs');
const path = require('path');

// Wijzig de poort van 3001 naar 3000 om overeen te komen met de Dockerfile
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Standaard route naar onder-constructie.html
  let filePath = './onder-constructie.html';
  
  // Als de URL /onder-constructie is, gebruik ook onder-constructie.html
  if (req.url === '/onder-constructie') {
    filePath = './onder-constructie.html';
  }

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
  console.log(`Bezoek http://localhost:${PORT}/onder-constructie om de pagina lokaal te bekijken`);
  console.log(`Bezoek http://[jouw-ip-adres]:${PORT}/onder-constructie om de pagina extern te bekijken`);
});
"@

Set-Content -Path "server.js" -Value $serverJsContent
Write-Host "server.js is bijgewerkt!" -ForegroundColor Green
Write-Host ""

# docker-compose.yml bijwerken
Write-Host "2. docker-compose.yml bijwerken..." -ForegroundColor Yellow

$dockerComposeContent = @"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3000/onder-constructie"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 5s
"@

Set-Content -Path "docker-compose.yml" -Value $dockerComposeContent
Write-Host "docker-compose.yml is bijgewerkt!" -ForegroundColor Green
Write-Host ""

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
    
    # Vraag de gebruiker om de GitHub repository URL
    $repoUrl = Read-Host "Voer de URL van je GitHub repository in (bijv. https://github.com/gebruikersnaam/repo.git)"
    
    # Voeg de remote toe
    Invoke-Git "remote add origin $repoUrl"
    
    Write-Host "Git repository geïnitialiseerd en remote toegevoegd!" -ForegroundColor Green
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
Invoke-Git "add server.js docker-compose.yml"

# Commit de wijzigingen
Write-Host "Wijzigingen committen..." -ForegroundColor Yellow
Invoke-Git "commit -m `"Fix: Server now listens on all IP addresses and uses port 3000`""

# Vind de huidige branch
$currentBranch = ""
$branchOutput = & $gitPath branch
if ($LASTEXITCODE -eq 0) {
    foreach ($line in $branchOutput) {
        if ($line -match "^\*\s+(.+)$") {
            $currentBranch = $matches[1].Trim()
            Write-Host "Huidige branch: $currentBranch" -ForegroundColor Green
            break
        }
    }
}

if ([string]::IsNullOrEmpty($currentBranch)) {
    $currentBranch = "master"
    Write-Host "Kon de huidige branch niet bepalen, we gebruiken 'master' als standaard." -ForegroundColor Yellow
}

# Vraag de gebruiker welke branch te gebruiken
$branchName = Read-Host "Voer de naam van de branch in om naar te pushen (standaard: $currentBranch)"
if ([string]::IsNullOrEmpty($branchName)) {
    $branchName = $currentBranch
}

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
        $repoUrlWithAuth = & $gitPath remote get-url origin
        $repoUrlWithAuth = $repoUrlWithAuth -replace "https://", "https://$githubUsername`:$githubPasswordPlain@"
        Invoke-Git "remote set-url origin `"$repoUrlWithAuth`""
        $pushResult = Invoke-Git "push -u origin $branchName"
        
        # Reset de URL om de credentials te verwijderen
        if ($pushResult -eq 0) {
            $repoUrlWithoutAuth = $repoUrlWithAuth -replace "https://$githubUsername`:$githubPasswordPlain@", "https://"
            Invoke-Git "remote set-url origin `"$repoUrlWithoutAuth`""
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