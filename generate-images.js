const fs = require('fs');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
const serviceDir = './public/images/services';
const certDir = './public/images/certifications';
const rootImagesDir = './public/images';
const aboutDir = './public/images/about';

if (!fs.existsSync(serviceDir)) {
  fs.mkdirSync(serviceDir, { recursive: true });
}

if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true });
}

if (!fs.existsSync(aboutDir)) {
  fs.mkdirSync(aboutDir, { recursive: true });
}

// Service images configuration
const serviceImages = {
  'hardware-opkopen': {
    bgColor: '#3b82f6',
    text: 'Hardware Opkopen',
    icon: '💻'
  },
  'data-verwijdering': {
    bgColor: '#8b5cf6',
    text: 'Data Verwijdering',
    icon: '🔒'
  },
  'hardware-recycling': {
    bgColor: '#10b981',
    text: 'Hardware Recycling',
    icon: '♻️'
  },
  'logistieke-diensten': {
    bgColor: '#2563eb',
    text: 'Logistieke Diensten',
    icon: '🚚'
  },
  'it-asset-management': {
    bgColor: '#f97316',
    text: 'IT Asset Management',
    icon: '📊'
  },
  'waardebepaling': {
    bgColor: '#16a34a',
    text: 'Waardebepaling',
    icon: '💰'
  }
};

// Certification images configuration
const certImages = {
  'iso-9001': {
    bgColor: '#e0f2fe',
    text: 'ISO 9001',
    textColor: '#0369a1'
  },
  'iso-14001': {
    bgColor: '#dcfce7',
    text: 'ISO 14001',
    textColor: '#166534'
  },
  'iso-27001': {
    bgColor: '#ede9fe',
    text: 'ISO 27001',
    textColor: '#5b21b6'
  },
  'weee': {
    bgColor: '#fef3c7',
    text: 'WEEE',
    textColor: '#92400e'
  }
};

// Generate hero image (1200x800)
const heroCanvas = createCanvas(1200, 800);
const heroCtx = heroCanvas.getContext('2d');

// Background gradient - meer professionele kleuren
const gradient = heroCtx.createLinearGradient(0, 0, 1200, 800);
gradient.addColorStop(0, '#0f172a'); // Donkerblauw
gradient.addColorStop(0.5, '#1e3a8a'); // Middenblauw
gradient.addColorStop(1, '#1d4ed8'); // Lichtblauw
heroCtx.fillStyle = gradient;
heroCtx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

// Voeg een subtiel patroon toe
heroCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
for (let i = 0; i < heroCanvas.width; i += 20) {
  for (let j = 0; j < heroCanvas.height; j += 20) {
    heroCtx.fillRect(i, j, 10, 10);
  }
}

// Voeg enkele cirkels toe voor een moderne look
for (let i = 0; i < 15; i++) {
  const x = Math.random() * heroCanvas.width;
  const y = Math.random() * heroCanvas.height;
  const radius = Math.random() * 100 + 50;
  
  heroCtx.beginPath();
  heroCtx.arc(x, y, radius, 0, Math.PI * 2);
  heroCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03 + 0.01})`;
  heroCtx.fill();
}

// Voeg enkele lijnen toe voor een tech-look
heroCtx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
heroCtx.lineWidth = 1;
for (let i = 0; i < 10; i++) {
  const x1 = Math.random() * heroCanvas.width;
  const y1 = Math.random() * heroCanvas.height;
  const x2 = x1 + (Math.random() - 0.5) * 400;
  const y2 = y1 + (Math.random() - 0.5) * 400;
  
  heroCtx.beginPath();
  heroCtx.moveTo(x1, y1);
  heroCtx.lineTo(x2, y2);
  heroCtx.stroke();
}

// Voeg een subtiele overlay toe
heroCtx.fillStyle = 'rgba(0, 0, 0, 0.2)';
heroCtx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

// Voeg een lichteffect toe in de hoek
const radialGradient = heroCtx.createRadialGradient(
  heroCanvas.width * 0.8, heroCanvas.height * 0.2, 0,
  heroCanvas.width * 0.8, heroCanvas.height * 0.2, 400
);
radialGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
radialGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
heroCtx.fillStyle = radialGradient;
heroCtx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

// Text met schaduw voor betere leesbaarheid
heroCtx.shadowColor = 'rgba(0, 0, 0, 0.5)';
heroCtx.shadowBlur = 15;
heroCtx.shadowOffsetX = 5;
heroCtx.shadowOffsetY = 5;

// Hoofdtitel
heroCtx.font = 'bold 80px Arial';
heroCtx.fillStyle = 'white';
heroCtx.textAlign = 'center';
heroCtx.textBaseline = 'middle';
heroCtx.fillText('Digitaalgelijk', heroCanvas.width / 2, heroCanvas.height / 2 - 50);

// Ondertitel
heroCtx.font = '40px Arial';
heroCtx.shadowBlur = 10;
heroCtx.fillText('IT Hardware Recycling & Data Verwijdering', heroCanvas.width / 2, heroCanvas.height / 2 + 50);

// Reset schaduw
heroCtx.shadowColor = 'transparent';
heroCtx.shadowBlur = 0;
heroCtx.shadowOffsetX = 0;
heroCtx.shadowOffsetY = 0;

// Voeg een subtiele rand toe aan de onderkant
const bottomGradient = heroCtx.createLinearGradient(0, heroCanvas.height - 200, 0, heroCanvas.height);
bottomGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
bottomGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
heroCtx.fillStyle = bottomGradient;
heroCtx.fillRect(0, heroCanvas.height - 200, heroCanvas.width, 200);

// Save the hero image
const heroBuffer = heroCanvas.toBuffer('image/jpeg');
fs.writeFileSync(`${rootImagesDir}/hero-image.jpg`, heroBuffer);
console.log(`Generated hero-image.jpg`);

// Generate office image for about page
const officeCanvas = createCanvas(800, 600);
const officeCtx = officeCanvas.getContext('2d');

// Background
officeCtx.fillStyle = '#475569';
officeCtx.fillRect(0, 0, officeCanvas.width, officeCanvas.height);

// Add pattern
officeCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
for (let i = 0; i < officeCanvas.width; i += 20) {
  for (let j = 0; j < officeCanvas.height; j += 20) {
    officeCtx.fillRect(i, j, 10, 10);
  }
}

// Text
officeCtx.font = 'bold 48px Arial';
officeCtx.fillStyle = 'white';
officeCtx.textAlign = 'center';
officeCtx.textBaseline = 'middle';
officeCtx.fillText('Ons Kantoor', officeCanvas.width / 2, officeCanvas.height / 2);

// Add "Placeholder" text
officeCtx.font = '24px Arial';
officeCtx.fillText('Placeholder Image', officeCanvas.width / 2, officeCanvas.height / 2 + 100);

// Save the office image
const officeBuffer = officeCanvas.toBuffer('image/jpeg');
fs.writeFileSync(`${aboutDir}/office.jpg`, officeBuffer);
console.log(`Generated office.jpg`);

// Generate service images (800x600)
Object.keys(serviceImages).forEach(id => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');
  const img = serviceImages[id];

  // Background
  ctx.fillStyle = img.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < canvas.width; i += 20) {
    for (let j = 0; j < canvas.height; j += 20) {
      ctx.fillRect(i, j, 10, 10);
    }
  }

  // Text
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(img.text, canvas.width / 2, canvas.height / 2);

  // Icon
  ctx.font = '72px Arial';
  ctx.fillText(img.icon, canvas.width / 2, canvas.height / 2 - 100);

  // Add "Placeholder" text
  ctx.font = '24px Arial';
  ctx.fillText('Placeholder Image', canvas.width / 2, canvas.height / 2 + 100);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`${serviceDir}/${id}.jpg`, buffer);
  console.log(`Generated ${id}.jpg`);
});

// Generate certification images (200x200)
Object.keys(certImages).forEach(id => {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');
  const img = certImages[id];

  // Background
  ctx.fillStyle = img.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = img.textColor;
  ctx.lineWidth = 5;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Text
  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = img.textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(img.text, canvas.width / 2, canvas.height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`${certDir}/${id}.png`, buffer);
  console.log(`Generated ${id}.png`);
});

console.log('All images generated successfully!'); 