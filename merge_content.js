const fs = require('fs');

// Читаем оба файла
const cleanFile = fs.readFileSync('lib/servicesData_CLEAN.ts', 'utf8');
const backupFile = fs.readFileSync('lib/servicesData_backup.ts', 'utf8');

// Функция для извлечения content блока сервиса
function extractContent(fileContent, serviceName) {
    const serviceStart = fileContent.indexOf(`${serviceName}: {`);
    if (serviceStart === -1) return null;

    const contentStart = fileContent.indexOf('content: `', serviceStart);
    if (contentStart === -1) return null;

    // Ищем конец content блока (`,` после закрывающего бектика)
    let backtickCount = 0;
    let i = contentStart + 10; // 'content: `'.length

    while (i < fileContent.length) {
        if (fileContent[i] === '`') {
            backtickCount++;
            // Проверяем, есть ли после ` запятая и закрывающая скобка
            const afterBacktick = fileContent.substring(i + 1, i + 10);
            if (afterBacktick.trim().startsWith(',')) {
                // Нашли конец
                return fileContent.substring(contentStart, i + 1);
            }
        }
        i++;
    }

    return null;
}

// Извелекаем content для каждого сервиса
const taxiContent = extractContent(backupFile, 'taxi');
const movingContent = extractContent(backupFile, 'moving');
const trashContent = extractContent(backupFile, 'trash');
const moversContent = extractContent(backupFile, 'movers');

// Заменяем плейсхолдеры
let result = cleanFile;
result = result.replace('content: `PLACEHOLDER_TAXI_CONTENT`', taxiContent || 'content: `Такси сервис`');
result = result.replace('content: `PLACEHOLDER_MOVING_CONTENT`', movingContent || 'content: `Переезд сервис`');
result = result.replace('content: `PLACEHOLDER_TRASH_CONTENT`', trashContent || 'content: `Мусор сервис`');
result = result.replace('content: `PLACEHOLDER_MOVERS_CONTENT`', moversContent || 'content: `Грузчики сервис`');

// Сохраняем
fs.writeFileSync('lib/servicesData.ts', result, 'utf8');

console.log('✅ Файл успешно создан!');
console.log('Проверка первых 300 символов:');
console.log(result.substring(0, 300));
