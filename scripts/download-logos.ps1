# Download certificeringslogo's
$downloadPath = "public/images/certifications"

# ISO 27001 logo
Invoke-WebRequest -Uri "https://www.iclcert.com/download/27001-1.jpg" -OutFile "$downloadPath/iso-27001.jpg"

# ISO 14001 logo
Invoke-WebRequest -Uri "https://www.iclcert.com/download/14001.jpg" -OutFile "$downloadPath/iso-14001.jpg"

# ISO 9001 logo
Invoke-WebRequest -Uri "https://www.iclcert.com/download/9001.jpg" -OutFile "$downloadPath/iso-9001.jpg"

# WEEELABEX logo
Invoke-WebRequest -Uri "https://www.weeelabex.org/wp-content/uploads/2024/01/weeelabex-logo.png" -OutFile "$downloadPath/weeelabex.png"

# NIST logo
Invoke-WebRequest -Uri "https://www.nist.gov/sites/default/files/images/2017/06/16/nist_logo_centered_648x305.png" -OutFile "$downloadPath/nist.png" 