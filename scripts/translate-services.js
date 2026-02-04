const translate = require('@vitalets/google-translate-api');
const fs = require('fs');

// Простая функция для перевода HTML с сохранением тегов
async function translateHTML(html, targetLang) {
    try {
        // Разбиваем на части, чтобы не превысить лимиты API
        const chunks = html.match(/[\s\S]{1,4000}/g) || [html];
        const translated = [];

        for (const chunk of chunks) {
            const result = await translate(chunk, { from: 'ru', to: targetLang });
            translated.push(result.text);
            // Небольшая задержка чтобы не забанили
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        return translated.join('');
    } catch (error) {
        console.error(`Ошибка перевода на ${targetLang}:`, error.message);
        return html; // Возвращаем оригинал в случае ошибки
    }
}

async function translateServiceData(serviceName, serviceData) {
    console.log(`\n🔄 Переводим ${serviceName}...`);

    const result = {
        ru: serviceData,
        en: {
            title: '',
            price: serviceData.price, // Цена одинакова
            icon: serviceData.icon,
            badge: serviceData.badge,
            desc_short: '',
            content: ''
        },
        ka: {
            title: '',
            price: serviceData.price,
            icon: serviceData.icon,
            badge: serviceData.badge,
            desc_short: '',
            content: ''
        }
    };

    // Переводим EN
    console.log('  → English...');
    result.en.title = (await translate(serviceData.title, { from: 'ru', to: 'en' })).text;
    result.en.desc_short = (await translate(serviceData.desc_short, { from: 'ru', to: 'en' })).text;
    result.en.content = await translateHTML(serviceData.content, 'en');

    // Переводим KA
    console.log('  → ქართული...');
    result.ka.title = (await translate(serviceData.title, { from: 'ru', to: 'ka' })).text;
    result.ka.desc_short = (await translate(serviceData.desc_short, { from: 'ru', to: 'ka' })).text;
    result.ka.content = await translateHTML(serviceData.content, 'ka');

    console.log(`  ✅ ${serviceName} готов`);
    return result;
}

async function main() {
    console.log('🌍 Запуск генерации переводов для servicesData...\n');
    console.log('⚠️ Это займет ~30-40 минут из-за ограничений API\n');

    // Импортируем текущий servicesData
    const { servicesData } = require('./lib/servicesData.ts');

    const translatedData = {};

    for (const [key, value] of Object.entries(servicesData)) {
        translatedData[key] = await translateServiceData(key, value);
    }

    // Сохраняем результат
    const output = `// Auto-generated translations
export const servicesDataMultilang = ${JSON.stringify(translatedData, null, 2)};
`;

    fs.writeFileSync('./lib/servicesData.multilang.ts', output, 'utf8');
    console.log('\n✅ Переводы сохранены в lib/servicesData.multilang.ts');
    console.log('📝 Теперь нужно вручную проверить и улучшить переводы');
}

main().catch(console.error);
