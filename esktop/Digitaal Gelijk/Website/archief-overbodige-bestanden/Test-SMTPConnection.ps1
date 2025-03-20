# Test SMTP Connection to Office 365
# This script tests if SMTP authentication is working correctly with Office 365

# Prompt for email address and password
$EmailAddress = Read-Host -Prompt "Enter your email address"
$Password = Read-Host -Prompt "Enter your password" -AsSecureString
$PlainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Password))

# SMTP Server settings
$SMTPServer = "smtp.office365.com"
$SMTPPort = 587

# Create a .NET mail message object
$MailMessage = New-Object System.Net.Mail.MailMessage
$MailMessage.From = $EmailAddress
$MailMessage.Subject = "SMTP Test Email"
$MailMessage.Body = "This is a test email to verify SMTP authentication is working."
$MailMessage.To.Add($EmailAddress)  # Sending to self for testing

# Create SMTP client
$SMTPClient = New-Object System.Net.Mail.SmtpClient($SMTPServer, $SMTPPort)
$SMTPClient.EnableSsl = $true
$SMTPClient.Credentials = New-Object System.Net.NetworkCredential($EmailAddress, $PlainPassword)
$SMTPClient.DeliveryMethod = [System.Net.Mail.SmtpDeliveryMethod]::Network

Write-Host "Attempting to send test email via SMTP..." -ForegroundColor Yellow

try {
    # Try to send the email
    $SMTPClient.Send($MailMessage)
    Write-Host "SUCCESS: Email sent successfully! SMTP authentication is working." -ForegroundColor Green
} catch {
    # If there's an error, display it
    Write-Host "ERROR: Failed to send email." -ForegroundColor Red
    Write-Host "Error details: $_" -ForegroundColor Red
    
    # Additional troubleshooting information
    if ($_.Exception.Message -like "*5.7.57*") {
        Write-Host "This error indicates that SMTP Authentication is disabled for your tenant or account." -ForegroundColor Yellow
        Write-Host "Please verify that you've enabled SMTP Authentication in the Microsoft 365 Admin Center." -ForegroundColor Yellow
    }
    elseif ($_.Exception.Message -like "*5.7.3*") {
        Write-Host "This error indicates that authentication failed. Please check your credentials." -ForegroundColor Yellow
    }
}

Write-Host "Test completed. Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 