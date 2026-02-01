const fs = require('fs');

// Читаем испорченный файл
const broken = fs.readFileSync('lib/servicesData.ts', 'latin1');

// Пробуем декодировать из latin1 в utf8
const decoded = Buffer.from(broken, 'latin1').toString('utf8');

// Сохраняем результат
fs.writeFileSync('lib/servicesData_decoded.ts', decoded, 'utf8');

console.log('Decoded successfully!');
console.log('Preview of first 500 chars:');
console.log(decoded.substring(0, 500));
