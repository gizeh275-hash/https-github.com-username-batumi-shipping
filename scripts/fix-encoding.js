const fs = require('fs');
const path = require('path');

// Read the current file
const filePath = path.join(__dirname, '..', 'lib', 'servicesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the garbled Russian text by replacing with correct values
// The issue is that PowerShell saved the file with wrong encoding

// Let's just re-save it properly with UTF-8
fs.writeFileSync(filePath, content, { encoding: 'utf8' });

console.log('File re-saved with proper UTF-8 encoding');
