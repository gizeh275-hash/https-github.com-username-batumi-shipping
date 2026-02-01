
import os

source_file = "lib/servicesData_broken_backup.ts"
output_file = "lib/servicesData_RECOVERED_FINAL.ts"

def try_recover(text):
    try:
        # Common pattern: UTF-8 bytes interpreted as Windows-1251
        # Example: 'Г' (D0 93) -> 'Р“' in Win-1251
        return text.encode('cp1251').decode('utf-8')
    except:
        return None

try:
    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"Read {len(content)} characters.")
    
    # Try 1 level recovery
    recovered = try_recover(content)
    
    if recovered:
        print("Recovery successful!")
        # Check for keywords
        if "batumi_office" in recovered:
            print("✅ FOUND 'batumi_office' in recovered text!")
        else:
            print("⚠️ 'batumi_office' NOT found in recovered text (might be partial recovery)")
            
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(recovered)
        print(f"Saved to {output_file}")
    else:
        print("Recovery failed (encoding error during process)")

except Exception as e:
    print(f"Error: {e}")
