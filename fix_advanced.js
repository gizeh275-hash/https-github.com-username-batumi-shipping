const fs = require('fs');

// Читаем оригинальный файл
const content = fs.readFileSync('lib/servicesData_broken_backup.ts', 'utf8');

// Функция для исправления двойного кодирования UTF-8
function fixDoubleEncoding(text) {
    try {
        // Кодируем строку UTF-8 как bytes latin1, потом декодируем как UTF-8
        const bytes = [];
        for (let i = 0; i < text.length; i++) {
            bytes.push(text.charCodeAt(i) & 0xFF);
        }
        const buffer = Buffer.from(bytes);
        return buffer.toString('utf8');
    } catch (e) {
        return text;
    }
}

const fixed = fixDoubleEncoding(content);

fs.writeFileSync('lib/servicesData.ts', fixed, 'utf8');

console.log('Fixed!');
// Проверяем строку 3
const lines = fixed.split('\n');
console.log('Line 3:', lines[2]);
