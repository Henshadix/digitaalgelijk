Write-Host "===== Git installeren en wijzigingen pushen naar GitHub =====" -ForegroundColor Cyan
Write-Host ""

# Controleer of Git al is geïnstalleerd
$gitInstalled = $false
try {
    $gitVersion = git --version
    Write-Host "Git is al geïnstalleerd: $gitVersion" -ForegroundColor Green
    $gitInstalled = $true
} catch {
    Write-Host "Git is niet geïnstalleerd. We gaan het nu installeren..." -ForegroundColor Yellow
}

# Als Git niet is geïnstalleerd, installeer het dan
if (-not $gitInstalled) {
    # Maak een tijdelijke map voor de Git installer
    $tempDir = [System.IO.Path]::GetTempPath() + [System.Guid]::NewGuid().ToString()
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    $installerPath = Join-Path $tempDir "git-installer.exe"

    # Download Git installer
    Write-Host "Git installer downloaden..." -ForegroundColor Yellow
    $url = "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe"
    
    try {
        # Gebruik .NET WebClient om het bestand te downloaden
        $webClient = New-Object System.Net.WebClient
        $webClient.DownloadFile($url, $installerPath)
        
        Write-Host "Git installer gedownload naar $installerPath" -ForegroundColor Green
        
        # Installeer Git (silent mode)
        Write-Host "Git installeren... Dit kan enkele minuten duren." -ForegroundColor Yellow
        Start-Process -FilePath $installerPath -ArgumentList "/VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS /COMPONENTS=`"icons,ext\reg\shellhere,assoc,assoc_sh`"" -Wait
        
        # Verwijder de tijdelijke map
        Remove-Item -Path $tempDir -Recurse -Force
        
        Write-Host "Git is succesvol geïnstalleerd!" -ForegroundColor Green
        
        # Ververs de PATH omgevingsvariabele in de huidige PowerShell sessie
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
        
        # Controleer of Git nu beschikbaar is
        try {
            $gitVersion = git --version
            Write-Host "Git is nu beschikbaar: $gitVersion" -ForegroundColor Green
            $gitInstalled = $true
        } catch {
            Write-Host "Git is geïnstalleerd maar nog niet beschikbaar in deze PowerShell sessie." -ForegroundColor Red
            Write-Host "Sluit deze PowerShell sessie en start een nieuwe om Git te kunnen gebruiken." -ForegroundColor Red
            Write-Host "Druk op een toets om af te sluiten..."
            $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            exit
        }
    } catch {
        Write-Host "Er is een fout opgetreden bij het downloaden of installeren van Git:" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        Write-Host "Probeer Git handmatig te installeren vanaf: https://git-scm.com/download/win" -ForegroundColor Yellow
        Write-Host "Druk op een toets om af te sluiten..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit
    }
}

# Nu Git is geïnstalleerd, werk de bestanden bij en push ze naar GitHub
Write-Host ""
Write-Host "Bestanden bijwerken en naar GitHub pushen..." -ForegroundColor Yellow
Write-Host ""

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
    $gitStatus = git status
    $inGitRepo = $true
} catch {
    Write-Host "Dit lijkt geen Git repository te zijn. We moeten het initialiseren." -ForegroundColor Yellow
}

# Als we niet in een Git repository zijn, initialiseer er dan een
if (-not $inGitRepo) {
    Write-Host "Git repository initialiseren..." -ForegroundColor Yellow
    git init
    
    # Vraag de gebruiker om de GitHub repository URL
    $repoUrl = Read-Host "Voer de URL van je GitHub repository in (bijv. https://github.com/gebruikersnaam/repo.git)"
    
    # Voeg de remote toe
    git remote add origin $repoUrl
    
    Write-Host "Git repository geïnitialiseerd en remote toegevoegd!" -ForegroundColor Green
}

# Configureer Git gebruikersnaam en e-mail als ze nog niet zijn ingesteld
try {
    $userName = git config --get user.name
    $userEmail = git config --get user.email
    
    if ([string]::IsNullOrEmpty($userName) -or [string]::IsNullOrEmpty($userEmail)) {
        Write-Host "Git gebruikersnaam en e-mail zijn nog niet geconfigureerd." -ForegroundColor Yellow
        
        if ([string]::IsNullOrEmpty($userName)) {
            $newUserName = Read-Host "Voer je naam in voor Git commits"
            git config --global user.name $newUserName
        }
        
        if ([string]::IsNullOrEmpty($userEmail)) {
            $newUserEmail = Read-Host "Voer je e-mailadres in voor Git commits"
            git config --global user.email $newUserEmail
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
git add server.js docker-compose.yml

# Commit de wijzigingen
Write-Host "Wijzigingen committen..." -ForegroundColor Yellow
git commit -m "Fix: Server now listens on all IP addresses and uses port 3000"

# Vraag de gebruiker welke branch te gebruiken
$defaultBranch = "master"
try {
    $currentBranch = git branch --show-current
    if (-not [string]::IsNullOrEmpty($currentBranch)) {
        $defaultBranch = $currentBranch
    }
} catch {
    # Negeer fouten bij het ophalen van de huidige branch
}

$branchName = Read-Host "Voer de naam van de branch in om naar te pushen (standaard: $defaultBranch)"
if ([string]::IsNullOrEmpty($branchName)) {
    $branchName = $defaultBranch
}

# Push de wijzigingen naar GitHub
Write-Host "Wijzigingen pushen naar GitHub ($branchName)..." -ForegroundColor Yellow
try {
    git push -u origin $branchName
    Write-Host "Wijzigingen zijn succesvol gepusht naar GitHub!" -ForegroundColor Green
} catch {
    Write-Host "Er is een fout opgetreden bij het pushen naar GitHub:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    # Vraag om GitHub credentials als dat het probleem zou kunnen zijn
    Write-Host "Mogelijk moet je je GitHub credentials invoeren." -ForegroundColor Yellow
    $githubUsername = Read-Host "Voer je GitHub gebruikersnaam in"
    $githubPassword = Read-Host "Voer je GitHub personal access token in (niet je wachtwoord)" -AsSecureString
    $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($githubPassword)
    $githubPasswordPlain = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    
    # Probeer opnieuw te pushen met credentials
    try {
        $repoUrlWithAuth = git remote get-url origin
        $repoUrlWithAuth = $repoUrlWithAuth -replace "https://", "https://$githubUsername`:$githubPasswordPlain@"
        git remote set-url origin $repoUrlWithAuth
        git push -u origin $branchName
        # Reset de URL om de credentials te verwijderen
        git remote set-url origin (git remote get-url origin).Replace("https://$githubUsername`:$githubPasswordPlain@", "https://")
        Write-Host "Wijzigingen zijn succesvol gepusht naar GitHub!" -ForegroundColor Green
    } catch {
        Write-Host "Er is nog steeds een fout bij het pushen naar GitHub:" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        Write-Host "Probeer handmatig in te loggen op GitHub en de wijzigingen te pushen." -ForegroundColor Yellow
    }
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