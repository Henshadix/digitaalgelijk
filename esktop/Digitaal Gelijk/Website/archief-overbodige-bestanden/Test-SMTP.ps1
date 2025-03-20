# Simple SMTP Test Script
Write-Host "SMTP Connection Test for Office 365" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# Get credentials
$EmailAddress = Read-Host "Enter your email address"
$Password = Read-Host "Enter your password" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Password)
$PlainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# SMTP Server settings
$SMTPServer = "smtp.office365.com"
$SMTPPort = 587

Write-Host "`nTesting connection to $SMTPServer on port $SMTPPort..." -ForegroundColor Yellow

# Test TCP connection first
$TCPConnection = New-Object System.Net.Sockets.TcpClient
try {
    $TCPConnection.Connect($SMTPServer, $SMTPPort)
    Write-Host "TCP connection successful!" -ForegroundColor Green
    $TCPConnection.Close()
} catch {
    Write-Host "TCP connection failed: $_" -ForegroundColor Red
    exit
}

# Now test SMTP authentication
Write-Host "`nTesting SMTP authentication..." -ForegroundColor Yellow

try {
    $SMTPClient = New-Object Net.Mail.SmtpClient($SMTPServer, $SMTPPort)
    $SMTPClient.EnableSsl = $true
    $SMTPClient.Credentials = New-Object System.Net.NetworkCredential($EmailAddress, $PlainPassword)
    $SMTPClient.Timeout = 10000
    
    $MailMessage = New-Object System.Net.Mail.MailMessage
    $MailMessage.From = $EmailAddress
    $MailMessage.To.Add($EmailAddress)
    $MailMessage.Subject = "SMTP Test"
    $MailMessage.Body = "This is a test email to verify SMTP authentication."
    
    $SMTPClient.Send($MailMessage)
    Write-Host "SMTP authentication successful! Test email sent." -ForegroundColor Green
} catch {
    Write-Host "SMTP authentication failed: $_" -ForegroundColor Red
    
    if ($_.Exception.Message -like "*5.7.57*") {
        Write-Host "`nThis error indicates that SMTP Authentication is disabled for your tenant or account." -ForegroundColor Yellow
        Write-Host "Please verify that you've enabled SMTP Authentication in the Microsoft 365 Admin Center." -ForegroundColor Yellow
    }
    elseif ($_.Exception.Message -like "*5.7.3*") {
        Write-Host "`nThis error indicates that authentication failed. Please check your credentials." -ForegroundColor Yellow
    }
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 