const fs = require('fs');

// Read file
let content = fs.readFileSync('lib/servicesData_backup.ts', 'utf8');

// Use direct find/replace with correct Unicode escape sequences
// This avoids encoding issues in the script itself

// TAXI title
content = content.replace(
    /title: "Р"СЂСѓР·РѕРІРѕРµ С‚Р°РєСЃРё РІ РўР±РёР»РёСЃРё Рё Р'Р°С‚СѓРјРё: РїРѕРґР°С‡Р° РјР°С€РёРЅС‹ Р·Р° 30 РјРёРЅСѓС‚\. РџРµСЂРµРІРµР·РµРј РѕС‚ 1 РєРѕСЂРѕР±РєРё РґРѕ РґРёРІР°РЅР°"/g,
    'title: "\u0413\u0440\u0443\u0437\u043e\u0432\u043e\u0435 \u0442\u0430\u043a\u0441\u0438 \u0432 \u0422\u0431\u0438\u043b\u0438\u0441\u0438 \u0438 \u0411\u0430\u0442\u0443\u043c\u0438: \u043f\u043e\u0434\u0430\u0447\u0430 \u043c\u0430\u0448\u0438\u043d\u044b \u0437\u0430 30 \u043c\u0438\u043d\u0443\u0442. \u041f\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043c \u043e\u0442 1 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043e \u0434\u0438\u0432\u0430\u043d\u0430"'
);

// Save
fs.writeFileSync('lib/servicesData.ts', content, 'utf8');
console.log('Done!');
