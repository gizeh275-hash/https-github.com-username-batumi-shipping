const fs = require('fs');
const iconv = require('iconv-lite');

// Читаем файл как буфер
const buffer = fs.readFileSync('lib/servicesData_broken_backup.ts');

// Декодируем как UTF-8 (первый слой)
const firstDecode = buffer.toString('utf8');

// Кодируем обратно в latin1, затем декодируем как UTF-8 (исправление двойного кодирования)
const latin1Buffer = Buffer.from(firstDecode, 'latin1');
const correctText = latin1Buffer.toString('utf8');

// Сохраняем исправленный файл
fs.writeFileSync('lib/servicesData.ts', correctText, 'utf8');

console.log('✅ File fixed and saved!');
console.log('Preview of first 500 chars:');
console.log(correctText.substring(0, 500));
