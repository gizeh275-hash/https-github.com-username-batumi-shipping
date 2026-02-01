# -*- coding: utf-8 -*-
import codecs

# Читаем файл с неправильной кодировкой и исправляем
with open('lib/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Сохраняем с правильной кодировкой
with codecs.open('lib/servicesData.ts', 'w', encoding='utf-8-sig') as f:
    f.write(content)

print("Encoding fixed!")
