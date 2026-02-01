
import os

file_path = r'c:\Users\user\Desktop\проекты\batumi-shipping\lib\servicesData.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Verify the lines before deleting to be extra safe
line_start = lines[2577]
line_end = lines[2813]

print(f"Line 2578 (index 2577): {line_start.strip()}")
print(f"Line 2814 (index 2813): {line_end.strip()}")

if '"intercity": {' in line_start and '"batumi_moving": {' in line_end:
    new_lines = lines[:2577] + lines[2813:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Successfully deleted lines.")
else:
    print("Verification failed! Lines do not match expected content.")
