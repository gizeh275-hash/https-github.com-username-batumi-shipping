const fs = require('fs');

// Читаем файл
let content = fs.readFileSync('lib/servicesData.ts', 'utf8');

// Правильные значения для замены - ТОЛЬКО мета-поля
const replacements = {
    // TAXI
    'title: "Р"СЂСѓР·РѕРІРѕРµ С‚Р°РєСЃРё РІ РўР±РёР»РёСЃРё Рё Р'Р°С‚СѓРјРё: РїРѕРґР°С‡Р° РјР°С€РёРЅС‹ Р·Р° 30 РјРёРЅСѓС‚.РџРµСЂРµРІРµР·РµРј РѕС‚ 1 РєРѕСЂРѕР±РєРё РґРѕ РґРёРІР°РЅР°"':
    'title: "Грузовое такси в Тбилиси и Батуми: подача машины за 30 минут. Перевезем от 1 коробки до дивана"',

    'price: "РѕС‚ 40 в‚ѕ"': 'price: "от 40 ₾"',

    'price: "РѕС‚ 80 в‚ѕ"': 'price: "от 80 ₾"',

    'price: "РѕС‚ 20 в‚ѕ/С‡Р°СЃ"': 'price: "от 20 ₾/час"',
};

// Применяем замены
for (const [oldText, newText] of Object.entries(replacements)) {
    content = content.split(oldText).join(newText);
}

// Сохраняем
fs.writeFileSync('lib/servicesData.ts', content, 'utf8');

console.log('Completed basic fixes');
console.log('Тeсt line from file:');
const lines = content.split('\n');
console.log(lines[3]); // Should show price line
