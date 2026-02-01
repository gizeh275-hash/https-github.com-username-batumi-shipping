const fs = require('fs');

// Читаем файл как бинарные данные
const buffer = fs.readFileSync('lib/servicesData_broken_backup.ts');

// КЛЮЧ: Пытаемся декодировать двойное кодирование UTF-8
// Сначала интерпретируем байты как latin1, потом как UTF-8
const latin1String = buffer.toString('latin1');
const utf8String = Buffer.from(latin1String, 'latin1').toString('utf8');

// Сохраняем
fs.writeFileSync('lib/servicesData.ts', utf8String, 'utf8');

console.log('✅ Successfully decoded!');
console.log('Preview:');
console.log(utf8String.substring(0, 600));
