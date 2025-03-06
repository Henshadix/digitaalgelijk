// Script to download placeholder images for testimonials and company logos
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const testimonialsDir = path.join(__dirname, '../public/images/testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// Avatar placeholder URLs (using randomuser.me API)
const avatarUrls = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/55.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
];

// Company logo placeholder URLs (using placehold.co)
const companyLogoUrls = [
  'https://placehold.co/200x100/0066cc/ffffff.png?text=TechSolutions',
  'https://placehold.co/200x100/00cc66/ffffff.png?text=EcoTech',
  'https://placehold.co/200x100/9900cc/ffffff.png?text=Gemeente',
  'https://placehold.co/200x100/cc6600/ffffff.png?text=VanDijk',
];

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

// Download avatars and company logos
async function downloadImages() {
  try {
    const downloads = [];
    
    // Download avatars
    for (let i = 0; i < avatarUrls.length; i++) {
      const url = avatarUrls[i];
      const filepath = path.join(testimonialsDir, `avatar-${i + 1}.jpg`);
      try {
        await downloadImage(url, filepath);
      } catch (error) {
        console.error(`Failed to download avatar ${i + 1}:`, error.message);
      }
    }
    
    // Download company logos
    for (let i = 0; i < companyLogoUrls.length; i++) {
      const url = companyLogoUrls[i];
      const filepath = path.join(testimonialsDir, `company-${i + 1}.png`);
      try {
        await downloadImage(url, filepath);
      } catch (error) {
        console.error(`Failed to download company logo ${i + 1}:`, error.message);
      }
    }
    
    console.log('Image download process completed!');
  } catch (error) {
    console.error('Error in download process:', error);
  }
}

// Run the download function
downloadImages(); 