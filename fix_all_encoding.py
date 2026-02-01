# -*- coding: utf-8 -*-
import re

# Читаем файл
with open('lib/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Функция для декодирования двойного UTF-8
def fix_double_encoding(text):
    try:
        # Пытаемся декодировать как latin-1 и закодировать обратно в UTF-8
        return text.encode('latin-1').decode('utf-8')
    except:
        return text

# Находим все строки с кириллицей в неправильной кодировке
pattern = r'(title|price|badge|desc_short|content):\s*["]([^"]+)["]'

def replacer(match):
    key = match.group(1)
    value = match.group(2)
    fixed_value = fix_double_encoding(value)
    delimiter = '' if '' in match.group(0) else '\"'
    return f'{key}: {delimiter}{fixed_value}{delimiter}'

# Применяем исправление
fixed_content = re.sub(pattern, replacer, content)

# Сохраняем
with open('lib/servicesData.ts', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print('All encoding issues fixed!')
