
import os

file_path = "lib/servicesData.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line that starts with "    moving: {" and replace the next few lines
fixed_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if line.strip().startswith("moving: {"):
        fixed_lines.append(line)
        # Skip the broken lines
        i += 1 # title
        i += 1 # price
        i += 1 # icon
        i += 1 # badge
        
        # Add fixed lines
        fixed_lines.append('        title: "Квартирный переезд в Грузии: бережно упакуем и перевезем мебель под ключ",\n')
        fixed_lines.append('        price: "от 60 ₾",\n')
        fixed_lines.append('        icon: "home",\n')
        fixed_lines.append('        badge: "Популярное",\n')
    else:
        fixed_lines.append(line)
        i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(fixed_lines)

print("Fixed moving service successfully.")
