# -*- coding: utf-8 -*-
import codecs

def fix_double_utf8_encoding(corrupted_text):
    """
    Исправляет двойное кодирование UTF-8.
    Текст был закодирован в UTF-8, потом прочитан как Latin-1 и снова записан как UTF-8.
    """
    try:
        # Декодируем как UTF-8 (получаем "кракозябры" как unicode)
        # Затем кодируем эти символы как Latin-1 bytes
        # И декодируем полученные bytes как UTF-8
        latin1_bytes = corrupted_text.encode('latin-1')
        fixed_text = latin1_bytes.decode('utf-8')
        return fixed_text
    except (UnicodeDecodeError, UnicodeEncodeError):
        # Если не получается, возвращаем оригинал
        return corrupted_text

# Читаем файл
with codecs.open('lib/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Исправляем кодировку
fixed_content = fix_double_utf8_encoding(content)

# Сохраняем
with codecs.open('lib/servicesData.ts', 'w', encoding='utf-8-sig') as f:
    f.write(fixed_content)

print("✅ Файл успешно исправлен!")
print("Пример первых 500 символов:")
print(fixed_content[:500])
