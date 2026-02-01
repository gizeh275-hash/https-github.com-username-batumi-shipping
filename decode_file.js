const fs = require('fs');
const path = require('path');

// Читаем испорченный файл как бинарные данные
const filePath = path.join(__dirname, 'lib', 'servicesData.ts');
const brokenContent = fs.readFileSync(filePath, 'latin1'); // Читаем как latin1

// Пере кодируем в правильную UTF-8
const fixedContent = Buffer.from(brokenContent, 'latin1').toString('utf8');

// Сохраняем в новый файл
const newFilePath = path.join(__dirname, 'lib', 'servicesData_fixed.ts');
fs.writeFileSync(newFilePath, fixedContent, 'utf8');

console.log('File decoded successfully!');
console.log('Created:', newFilePath);
