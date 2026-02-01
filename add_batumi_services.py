
import json
import re

file_path = "lib/servicesData.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to look up content of a base service
# We'll use simple regex to extract the block between key: { and the matching closing bracket
# But given the complexity of nested braces in content string templates, regex is risky.
# Better approach: Just construct them manually since I know the content is mostly shared or I can copy-paste from what I see in previous steps.

# Actually, I'll just append them before "intercity" to be safe.

missing_services = """
    "batumi_movers": {
        title: "Грузчики в Батуми: почасовая оплата, крепкие ребята",
        price: "от 20 ₾/час",
        icon: "users",
        badge: "Батуми",
        desc_short: "Услуги грузчиков в Батуми. Подъем на этаж без лифта, разгрузка фур, перестановка мебели. Трезвые и аккуратные.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 style="color: #991B1B; margin: 0 0 1rem 0;">💪 Грузчики в Батуми</h2>
                <p style="color: #7F1D1D;">Нужно поднять диван на 5-й этаж старого дома на Руставели? Или разгрузить машину с товаром на рынке Хопа? Наши ребята справятся.</p>
            </div>
            <h3 style="color: #000;">Цены</h3>
            <p>От 20 лари в час за человека. Минимальный заказ — 2 часа.</p>
        `
    },

    "batumi_trash": {
        title: "Вывоз мусора в Батуми: старая мебель, строительный мусор",
        price: "от 80 ₾",
        icon: "trash",
        badge: "Батуми",
        desc_short: "Вывоз строительного мусора и хлама в Батуми. Увозим на официальную свалку. Газель или самосвал.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 style="color: #92400E; margin: 0 0 1rem 0;">🗑️ Вывоз мусора в Батуми</h2>
                <p style="color: #78350F;">После ремонта осталось много мешков? Купили квартиру и нужно выбросить старую мебель прежних жильцов? Мы все вывезем.</p>
            </div>
            <p>Работаем во всех районах: Химшиашвили, Багратиони, Старый город, Махинджаури.</p>
        `
    },

    "batumi_taxi": {
        title: "Грузовое такси Батуми: перевезти вещи недорого",
        price: "от 40 ₾",
        icon: "truck",
        badge: "Батуми",
        desc_short: "Заказ грузового такси в Батуми. Ford Transit и Sprinter. Подача за 30 минут. Перевозка вещей, техники, стройматериалов.",
        content: `
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 style="color: #1E40AF; margin: 0 0 1rem 0;">🚛 Грузовое такси по Батуми</h2>
                <p style="color: #1E3A8A;">Быстрая подача машины для перевозки стиральной машины, холодильника или пары коробок. Дешевле, чем нанимать большую фуру.</p>
            </div>
             <p>Стоим в разных районах города, поэтому приезжаем быстро.</p>
        `
    },
"""

if '"batumi_movers":' not in content:
    # Insert before intercity
    new_content = content.replace('"intercity": {', missing_services + '\n    "intercity": {')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Added missing Batumi services.")
else:
    print("Services already exist.")
