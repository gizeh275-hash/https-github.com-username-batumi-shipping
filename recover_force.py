
import os

source_file = "lib/servicesData_broken_backup.ts"
output_file = "lib/servicesData_RECOVERED_FINAL.ts"

def try_recover_chunk(text):
    try:
        return text.encode('cp1252').decode('utf-8')
    except:
        try:
             return text.encode('cp1251').decode('utf-8')
        except:
            return text # Return as is if fail

with open(source_file, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

print(f"Total length: {len(content)}")

if "batumi_office" in content:
    print("✅ FOUND 'batumi_office' as plain text!")
else:
    print("❌ 'batumi_office' NOT found as plain text.")

# Try to recover anyway to see what we get
recovered = ""
try:
    recovered = content.encode('cp1251').decode('utf-8')
    print("✅ Full recovery successful with cp1251!")
except:
    print("⚠️ Full recovery failed, trying per-line...")
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        try:
            new_line = line.encode('cp1251').decode('utf-8')
            new_lines.append(new_line)
        except:
             new_lines.append(line) # Keep corrupted line
    recovered = "\n".join(new_lines)

if "batumi_office" in recovered:
    print("✅ FOUND 'batumi_office' AFTER recovery!")

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(recovered)
