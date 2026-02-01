
import os

recovered_file = "lib/servicesData_RECOVERED.ts"
target_file = "lib/servicesData.ts"

# 1. Read the recovered file (which has good Russian text for base services)
with open(recovered_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 2. Find the end of the servicesData object to truncate
# We look for the last "};" or just the end of the object structure
# It ends with:
#     },
# };
# export type ...

last_brace_index = content.rfind("};")
if last_brace_index != -1:
    content = content[:last_brace_index] # Keep everything up to just before the closing };

# 3. Fix the broken footer in 'office' service if present
# The broken part is likely near the end of the current content
broken_pattern = '?  24 / 7'
replacement_footer = """
                    ⚡ Работаем 24/7 | Безналичный расчет | Полный пакет документов с НДС
"""

if broken_pattern in content:
    # Use a simpler replace since we know the context might vary slightly
    # We'll just replace the whole paragraph if we can find a unique identifiers
    pass
    # Actually, let's just replace the specific broken line if possible, or append the repair
    # It seems to be inside a <p> tag. I'll do a regex sub or string replace.
    # The corrupted text is: ?  24 / 7 |   |     
    # I'll rely on the specific string I saw in previous turn.
    content = content.replace("?  24 / 7 |   |     ", 
                              "⚡ Работаем 24/7 | Безналичный расчет | Полный пакет документов с НДС")


# 4. Define the NEW services strings (city specific)
new_services = """
    "tbilisi_trash": {
        title: "Вывоз строительного мусора в Тбилиси: с грузчиками и утилизацией",
        price: "от 90 ₾",
        icon: "trash",
        badge: "Тбилиси",
        desc_short: "Официальный вывоз мусора в Тбилиси на полигон. Выносим с этажа, грузим и увозим. Строительный мусор, старая мебель, хлам.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #DC2626; box-shadow: 0 4px 12px rgba(220,38,38,0.2);">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">⚠️ ВНИМАНИЕ! Штрафы в Тбилиси</h2>
                <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h3 style="margin: 0 0 0.8rem 0; color: #DC2626; font-size: 1.3rem;">📜 Муниципальная инспекция</h3>
                    <p style="margin: 0; color: #7F1D1D; line-height: 1.7; font-size: 1.05rem;">
                        В Тбилиси строго следят за выбросом строительного мусора в обычные баки. Штраф для физлиц — **от 500 лари**. Камеры стоят почти везде.
                    </p>
                </div>
                <div style="background: #fff; padding: 1.5rem; border-radius: 0.75rem;">
                    <strong style="color: #059669; font-size: 1.2rem;">✓ Мы работаем официально</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #374151;">Вывозим на Глданский полигон или Лило. Никаких проблем с законом.</p>
                </div>
            </div>

            <h2 style="text-align: center; color: #000; margin: 3rem 0 2rem 0; font-size: 2rem;">🚜 Спецтехника для Тбилиси</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="color: #000; margin: 0 0 1rem 0;">🚙 Для Старого города</h3>
                    <p style="color: #6B7280; font-style: italic;">Узкие улицы (Сололаки, Мтацминда)</p>
                    <p style="color: #374151; margin-top: 1rem;">Маневренные Ford Transit. Проедут в арку, не заблокируют движение.</p>
                </div>
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="color: #000; margin: 0 0 1rem 0;">🚚 Для новостроек</h3>
                    <p style="color: #6B7280; font-style: italic;">Сабуртало, Ваке, Глдани</p>
                    <p style="color: #374151; margin-top: 1rem;">Самосвалы и большие фургоны. Вывоз тонн мусора после капитального ремонта.</p>
                </div>
            </div>
        `,
    },

    "batumi_moving": {
        title: "Квартирный переезд в Батуми: от студии до пентхауса",
        price: "от 60 ₾",
        icon: "home",
        badge: "Батуми",
        desc_short: "Бережный квартирный переезд в Батуми. Упаковка мебели, разборка/сборка, грузчики. Переезд без стресса в Орби, старый город или новостройки.",
        content: `
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 3rem;">
                <h2 style="color: #1E40AF; margin: 0 0 1rem 0;">🌊 Переезд у моря без головной боли</h2>
                <p style="color: #1E3A8A; font-size: 1.1rem;">Живете в Orbi City? Или переезжаете в старый фонд на Горгиладзе? Мы знаем специфику Батуми:</p>
                <ul style="margin: 1rem 0 0 1.5rem; color: #1E3A8A;">
                    <li>Как проехать через пробки на Чавчавадзе</li>
                    <li>Как занести диван в узкий лифт новостройки</li>
                    <li>Учитываем влажность при упаковке техники</li>
                </ul>
            </div>
            
            <h3 style="text-align: center; color: #000; margin: 2rem 0;">📦 Почему выбирают нас в Батуми</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                <div style="padding: 1.5rem; border: 1px solid #E5E7EB; border-radius: 0.8rem; background: #fff;">
                    <strong>🌧️ Защита от дождя</strong>
                    <p style="color: #666; margin-top: 0.5rem;">Батумские ливни не страшны. Используем герметичные фургоны и пленку.</p>
                </div>
                <div style="padding: 1.5rem; border: 1px solid #E5E7EB; border-radius: 0.8rem; background: #fff;">
                    <strong>🕒 Пунктуальность</strong>
                    <p style="color: #666; margin-top: 0.5rem;">Приезжаем вовремя, даже в сезон, когда город стоит.</p>
                </div>
            </div>
        `
    },

    "batumi_office": {
        title: "Офисный переезд в Батуми: бизнес без пауз",
        price: "от 150 ₾",
        icon: "building",
        badge: "Батуми",
        desc_short: "Перевезем ваш офис в Батуми быстро и аккуратно. Разборка столов, упаковка оргтехники, расстановка на новом месте. Работаем с юрлицами.",
        content: `
            <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); padding: 2rem; border-radius: 1rem; border-left: 5px solid #4B5563; margin-bottom: 3rem;">
                <h2 style="color: #1F2937; margin: 0 0 1rem 0;">💼 Офисный переезд под ключ</h2>
                <p style="color: #374151;">Понимаем, что простой бизнеса стоит дорого. Поэтому:</p>
                <div style="display: grid; gap: 1rem; margin-top: 1.5rem;">
                    <div style="background: #fff; padding: 1rem; border-radius: 0.5rem;">🕒 Можем работать в выходные или ночью</div>
                    <div style="background: #fff; padding: 1rem; border-radius: 0.5rem;">📄 Предоставляем инвойс для бухгалтерии</div>
                    <div style="background: #fff; padding: 1rem; border-radius: 0.5rem;">💻 Бережно упакуем мониторы и серверы</div>
                </div>
            </div>
        `
    },

    "intercity": {
        title: "Междугородние переезды по Грузии: Батуми ↔ Тбилиси и др.",
        price: "от 350 ₾",
        icon: "map",
        badge: "Вся Грузия",
        desc_short: "Переезды между городами Грузии. Рейсы Батуми-Тбилиси, Кутаиси, Рустави. Фиксированная цена, без доплат в пути. Попутные грузы.",
        content: `
            <div style="background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 3rem; border: 1px solid #10B981;">
                <h2 style="color: #047857; margin: 0 0 1rem 0;">🇬🇪 По всей Грузии с комфортом</h2>
                <p style="color: #065F46;">Самый популярный маршрут: <strong>Тбилиси — Батуми</strong>. Машина идет 5-6 часов.</p>
                <p style="color: #065F46; margin-top: 1rem;">Также ездим в: Кутаиси, Зугдиди, Поти, Рустави, Телави.</p>
            </div>
            
            <h3 style="color: #000;">💰 Как экономим ваши деньги?</h3>
            <p>Если вещей немного, отправим <strong>попутным грузом</strong> (сборная машина). Это на 30-50% дешевле, чем заказывать отдельную фуру.</p>
        `
    },
"""

# 5. Assemble final content
final_content = content.rstrip() + ",\n" + new_services + "\n};\n\nexport type ServiceSlug = keyof typeof servicesData;\n"

# 6. Write to servicesData.ts
with open(target_file, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Successfully merged recovered base services with new services!")
