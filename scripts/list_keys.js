
const fs = require('fs');
const path = require('path');

// Read the file manually since we can't import TS easily in raw node without config
const content = fs.readFileSync(path.join(__dirname, '../lib/servicesData.ts'), 'utf8');

// Regex to find top-level keys
const keys = [];
const regex = /^\s+([a-z0-9_]+): \{/gm;
let match;

while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
}

console.log('Found keys:', keys.join(', '));
if (keys.includes('batumi_movers')) {
    console.log('batumi_movers EXISTS');
} else {
    console.log('batumi_movers MISSING');
}
