const fs = require('fs');
const path = require('path');

// Читаем файл
const filePath = path.join(__dirname, 'lib', 'servicesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Словарь замен (испорченный текст -> правильный)
const fixes = {
    // Квартирные переезды (moving)
    'РљРІР°СЂС‚РёСЂРЅС‹Р№ РїРµСЂРµРµР·Рґ Р±РµР· С…Р°РѕСЃР°: Р±РµСЂРµР¶РЅР°СЏ СѓРїР°РєРѕРІРєР°, СЂР°Р·Р±РѕСЂРєР° РјРµР±РµР»Рё Рё СЂР°СЃСЃС‚Р°РЅРѕРІРєР° РЅР° РЅРѕРІРѕРј РјРµСЃС‚Рµ': 'Квартирный переезд без хаоса: бережная упаковка, разборка мебели и расстановка на новом месте',
    'РѕС‚ 60 в‚ѕ': 'от 60 ₾',
    'РџРѕРїСѓР»СЏСЂРЅРѕ': 'Популярно'
};

// Применяем замены
Object.keys(fixes).forEach(key => {
    const value = fixes[key];
    content = content.split(key).join(value);
});

// Сохраняем
fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed encoding for moving service!');
