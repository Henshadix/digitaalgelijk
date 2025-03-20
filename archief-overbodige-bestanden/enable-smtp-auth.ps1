# Script om SMTP-authenticatie in te schakelen voor Microsoft 365 tenant

# Installeer de benodigde module als deze nog niet is geïnstalleerd
if (-not (Get-Module -ListAvailable -Name ExchangeOnlineManagement)) {
    Write-Host "ExchangeOnlineManagement module is niet geïnstalleerd. Installeren..."
    Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber
}

# Importeer de module
Import-Module ExchangeOnlineManagement

# Verbind met Exchange Online
Write-Host "Verbinden met Exchange Online. Log in met je beheerdersaccount..."
Connect-ExchangeOnline

# Controleer de huidige instellingen
Write-Host "Huidige authenticatie-instellingen controleren..."
Get-AuthenticationPolicy | Format-List Name, AllowBasicAuthSmtp

# Maak een nieuwe authenticatiebeleid of update een bestaande
$policyName = "AllowSMTPAuth"
$existingPolicy = Get-AuthenticationPolicy | Where-Object {$_.Name -eq $policyName}

if ($existingPolicy) {
    Write-Host "Bestaand beleid bijwerken: $policyName"
    Set-AuthenticationPolicy -Identity $policyName -AllowBasicAuthSmtp $true
} else {
    Write-Host "Nieuw beleid aanmaken: $policyName"
    New-AuthenticationPolicy -Name $policyName -AllowBasicAuthSmtp $true
}

# Wijs het beleid toe aan de gebruiker
Write-Host "Beleid toewijzen aan gebruiker j.hendriks@digitaalgelijk.nl"
Set-User -Identity "j.hendriks@digitaalgelijk.nl" -AuthenticationPolicy $policyName

# Controleer of het beleid correct is toegepast
Write-Host "Controleren of het beleid correct is toegepast..."
Get-User -Identity "j.hendriks@digitaalgelijk.nl" | Format-List Name, AuthenticationPolicy

# Schakel SMTP-authenticatie in voor de hele organisatie
Write-Host "SMTP-authenticatie inschakelen voor de hele organisatie..."
Set-TransportConfig -SmtpClientAuthenticationDisabled $false

# Controleer de transportconfiguratie
Write-Host "Transportconfiguratie controleren..."
Get-TransportConfig | Format-List SmtpClientAuthenticationDisabled

Write-Host "Script voltooid. SMTP-authenticatie zou nu ingeschakeld moeten zijn." 