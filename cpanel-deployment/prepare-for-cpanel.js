#!/usr/bin/env node

/**
 * Dit script bereidt de Next.js website voor voor cPanel deployment
 * Het maakt een ZIP bestand met alle benodigde bestanden
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuratie
const config = {
  // Optie 1: Statische export
  staticExport: true,
  
  // Output directory voor geëxporteerde bestanden
  exportDir: path.join(process.cwd(), 'out'),
  
  // Bestanden die moeten worden gekopieerd naar de statische export
  staticFilesToCopy: [
    { source: '.htaccess', target: '.htaccess' },
    { source: '404.html', target: '404.html' },
    { source: 'robots.txt', target: 'robots.txt' },
    { source: 'sitemap.xml', target: 'sitemap.xml' }
  ],
  
  // Optie 2: Node.js applicatie
  nodeApp: true,
  
  // Directory voor Node.js applicatie
  nodeDir: path.join(process.cwd(), 'node-app'),
  
  // Bestanden/mappen die uitgesloten moeten worden bij Node.js app
  nodeExclude: [
    'node_modules',
    '.next/cache',
    '.git',
    '.github',
    'Dockerfile',
    'docker-compose.yml',
    'onder-constructie-only',
    'archief-hulpscripts',
    'archief-overbodige-bestanden'
  ],
  
  // cPanel specifieke bestanden die moeten worden gekopieerd
  cpanelFiles: [
    'cpanel-deployment/.htaccess',
    'cpanel-deployment/server.js',
    'cpanel-deployment/package.json',
    'cpanel-deployment/DEPLOYMENT.md'
  ]
};

// Helpers
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(source, target) {
  console.log(`Kopiëren: ${source} -> ${target}`);
  try {
    fs.copyFileSync(source, target);
  } catch (error) {
    console.error(`Fout bij kopiëren van ${source}: ${error.message}`);
  }
}

function copyDirectory(source, target, exclude = []) {
  console.log(`Kopiëren directory: ${source} -> ${target}`);
  ensureDirectoryExists(target);
  
  const entries = fs.readdirSync(source, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    
    // Controleer of het item moet worden uitgesloten
    if (exclude.includes(entry.name)) {
      console.log(`Overgeslagen (uitgesloten): ${sourcePath}`);
      continue;
    }
    
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath, exclude);
    } else {
      copyFile(sourcePath, targetPath);
    }
  }
}

// Script starten
console.log('Start bereiding voor cPanel deployment...');

// Optie 1: Statische export
if (config.staticExport) {
  console.log('\n=== Voorbereiding Statische Export ===');
  
  // Controleer of de export directory bestaat
  if (!fs.existsSync(config.exportDir)) {
    console.log('Export directory bestaat niet, voer eerst "next build" en "next export" uit.');
  } else {
    console.log(`Export directory gevonden: ${config.exportDir}`);
    
    // Kopieer extra bestanden naar de export directory
    for (const file of config.staticFilesToCopy) {
      const sourceFile = path.resolve(file.source);
      const targetFile = path.join(config.exportDir, file.target);
      
      if (fs.existsSync(sourceFile)) {
        copyFile(sourceFile, targetFile);
      } else {
        console.log(`Waarschuwing: Bestand niet gevonden: ${sourceFile}`);
      }
    }
    
    // Kopieer cPanel specifieke .htaccess
    const htaccessSource = path.resolve('cpanel-deployment/.htaccess');
    const htaccessTarget = path.join(config.exportDir, '.htaccess');
    
    if (fs.existsSync(htaccessSource)) {
      copyFile(htaccessSource, htaccessTarget);
    } else {
      console.log(`Waarschuwing: .htaccess niet gevonden: ${htaccessSource}`);
    }
    
    // Maak een ZIP bestand van de statische export
    const staticZipFile = path.join(process.cwd(), 'cpanel-deployment/static-export.zip');
    try {
      console.log(`Maken ZIP bestand: ${staticZipFile}`);
      if (process.platform === 'win32') {
        // Windows
        execSync(`powershell Compress-Archive -Path "${config.exportDir}/*" -DestinationPath "${staticZipFile}" -Force`);
      } else {
        // Linux/Mac
        execSync(`zip -r "${staticZipFile}" "${config.exportDir}/"*`);
      }
      console.log('Statische export ZIP succesvol gemaakt!');
    } catch (error) {
      console.error(`Fout bij maken ZIP bestand: ${error.message}`);
    }
  }
}

// Optie 2: Node.js applicatie
if (config.nodeApp) {
  console.log('\n=== Voorbereiding Node.js Applicatie ===');
  
  // Maak Node.js applicatie directory
  ensureDirectoryExists(config.nodeDir);
  
  // Kopieer project bestanden
  console.log('Kopiëren project bestanden...');
  copyDirectory(process.cwd(), config.nodeDir, config.nodeExclude);
  
  // Kopieer cPanel specifieke bestanden
  console.log('Kopiëren cPanel specifieke bestanden...');
  for (const file of config.cpanelFiles) {
    const sourceFile = path.resolve(file);
    const fileName = path.basename(sourceFile);
    const targetFile = path.join(config.nodeDir, fileName);
    
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, targetFile);
    } else {
      console.log(`Waarschuwing: Bestand niet gevonden: ${sourceFile}`);
    }
  }
  
  // Maak een ZIP bestand van de Node.js applicatie
  const nodeZipFile = path.join(process.cwd(), 'cpanel-deployment/node-app.zip');
  try {
    console.log(`Maken ZIP bestand: ${nodeZipFile}`);
    if (process.platform === 'win32') {
      // Windows
      execSync(`powershell Compress-Archive -Path "${config.nodeDir}/*" -DestinationPath "${nodeZipFile}" -Force`);
    } else {
      // Linux/Mac
      execSync(`zip -r "${nodeZipFile}" "${config.nodeDir}/"*`);
    }
    console.log('Node.js applicatie ZIP succesvol gemaakt!');
  } catch (error) {
    console.error(`Fout bij maken ZIP bestand: ${error.message}`);
  }
}

console.log('\nVoorbereiding voor cPanel deployment voltooid!');
console.log('De bestanden zijn te vinden in de "cpanel-deployment" map.');
console.log('Volg de instructies in DEPLOYMENT.md voor het uploaden naar cPanel.'); 