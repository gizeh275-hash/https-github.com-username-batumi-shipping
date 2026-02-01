
import re

file_path = "lib/servicesData.ts"

def fix_text(text):
    try:
        # Try to encode as Windows-1251 then decode as UTF-8
        # This fixes: Р“СЂСѓР·РѕРІРѕРµ -> Грузовое
        return text.encode('cp1252').decode('utf-8')
    except:
        return text

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define keys to fix (the base ones that came from backup)
keys_to_fix = ['taxi', 'moving', 'movers', 'piano', 'trash'] # trash might be partly fixed but check

# We can search for the "mojibake" pattern: alternating Cyrillic letters that look random
# Or just apply the fix function to likely corrupted strings
# Strategy: RegExp to find values in quotes that look suspicious

def replace_callback(match):
    full_str = match.group(0) # e.g. "Р“СЂСѓ..."
    inner_str = match.group(1) # content inside quotes
    
    # Heuristic: if string contains "Р“" or "СЂ" or "Р°" it is likely broken
    if "Р" in inner_str or "С" in inner_str:
        fixed = fix_text(inner_str)
        if fixed != inner_str:
            print(f"Fixed: {inner_str[:20]}... -> {fixed[:20]}...")
            return f'"{fixed}"'
            
    return full_str

# Fix "double quoted" strings
new_content = re.sub(r'"([^"]+)"', replace_callback, content)

# Also fix template literals (backticks) content
def replace_callback_backticks(match):
    full_str = match.group(0)
    inner_str = match.group(1)
    
    if "Р" in inner_str or "С" in inner_str:
        fixed = fix_text(inner_str)
        if fixed != inner_str:
             print(f"Fixed backticks content...")
             return f'`{fixed}`'
    return full_str

new_content = re.sub(r'`([^`]+)`', replace_callback_backticks, new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done fixing servicesData.ts")
