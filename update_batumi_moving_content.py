
import re

file_path = "lib/servicesData.ts"

# New content for batumi_moving
new_batumi_moving = """
    "batumi_moving": {
        title: "Квартирный переезд в Батуми: Бережно, Быстро, В любую погоду",
        price: "от 45 ₾",
        icon: "home",
        badge: "ХИТ СЕЗОНА",
        desc_short: "Организуем переезд по Батуми и Аджарии. Знаем специфику города: от узких улиц Старого города до высоток на Новом Бульваре. Гарантируем сухость и сохранность вещей.",
        content: `
            <!-- Block 2: Pricing -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-8">Стоимость услуг в Батуми</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Грузчик-профи</h3>
                                <p class="text-sm text-gray-500">Аккуратная работа, помощь в упаковке</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-yellow-600">от 20 ₾</span>
                                <span class="text-xs text-gray-500">за час</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Минимальный заказ — 2 часа.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Машина (Спринтер)</h3>
                                <p class="text-sm text-gray-500">Для 1-2 комнатной квартиры</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-yellow-600">от 45 ₾</span>
                                <span class="text-xs text-gray-500">за час</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Вместительный фургон, защита от дождя.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Упаковка</h3>
                                <p class="text-sm text-gray-500">Пленка-стрейч и пупырчатая пленка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-yellow-600">от 5 ₾</span>
                                <span class="text-xs text-gray-500">м.п.</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Надежная защита от влаги и царапин.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Спуск/Подъем</h3>
                                <p class="text-sm text-gray-500">При наличии грузового лифта</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-green-600">Бесплатно</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Без лифта — 2-5 ₾/этаж (зависит от веса).</p>
                    </div>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div class="mb-16 bg-gray-50 p-8 rounded-3xl">
                <h2 class="text-3xl font-bold text-center mb-8">Транспорт под условия Батуми</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl mb-4">🚐</div>
                        <h3 class="font-bold text-lg mb-2">Компактный минивэн</h3>
                        <p class="text-gray-600 text-sm">Для Старого города. Легко проедет по узким улицам Абашидзе или Зубалашвили и под низкими арками.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-yellow-400 relative">
                         <div class="absolute -top-3 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">ХИТ</div>
                        <div class="text-4xl mb-4">🚚</div>
                        <h3 class="font-bold text-lg mb-2">Мебельный фургон</h3>
                        <p class="text-gray-600 text-sm">Для новостроек (Orbi, Alley Palace). Высокий кузов позволяет перевозить холодильники стоя.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl mb-4">🚛</div>
                        <h3 class="font-bold text-lg mb-2">Грузовик с гидробортом</h3>
                        <p class="text-gray-600 text-sm">Для тяжелых грузов (пианино, паллеты). Гидролифт поднимает тяжести с земли в кузов.</p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Features -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-10">Адаптированы к климату и архитектуре</h2>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">☔</div>
                        <h3 class="font-bold text-lg mb-2">Защита от дождя</h3>
                        <p class="text-gray-600">Используем герметичные фургоны и дополнительную пленку, чтобы батумские ливни не испортили мебель.</p>
                    </div>
                    <div>
                        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🏢</div>
                        <h3 class="font-bold text-lg mb-2">Работа в высотках</h3>
                        <p class="text-gray-600">Знаем правила комплексов Orbi и Courtyard. Умеем договариваться об использовании грузового лифта.</p>
                    </div>
                    <div>
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📦</div>
                        <h3 class="font-bold text-lg mb-2">Бережная разборка</h3>
                        <p class="text-gray-600">Разбираем мебель, маркируем детали и собираем всё обратно на новом месте.</p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Steps -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-10">Переезд за 5 простых шагов</h2>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h4 class="font-bold">Заявка</h4>
                            <p class="text-sm text-gray-600">Пришлите фото вещей в Telegram.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h4 class="font-bold">Расчет</h4>
                            <p class="text-sm text-gray-600">Мы называем фиксированную цену.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h4 class="font-bold">Упаковка</h4>
                            <p class="text-sm text-gray-600">Приезжаем, упаковываем хрупкое.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                            <h4 class="font-bold">Доставка</h4>
                            <p class="text-sm text-gray-600">Везем по маршруту без пробок.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                            <h4 class="font-bold">Новоселье</h4>
                            <p class="text-sm text-gray-600">Заносим, собираем и расставляем.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-8">Частые вопросы</h2>
                <div class="space-y-4">
                    <details class="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold list-none">
                            <span>Работаете ли вы в высотках, если лифт платный?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Да, но расходы на оплату лифта (чип-карты) берет на себя заказчик.
                        </p>
                    </details>
                    
                    <details class="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold list-none">
                            <span>Выезжаете ли в пригороды (Гонио, Сарпи, Чакви)?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Да, обслуживаем все поселки от Сарпи до Кобулети.
                        </p>
                    </details>

                    <details class="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold list-none">
                            <span>Что делать, если пойдет дождь?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Мы стараемся парковаться максимально близко к подъезду. Машины герметичны, вещи не намокнут.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-black shadow-xl">
                <h2 class="text-3xl font-bold mb-4">Планируете переезд в Батуми?</h2>
                <p class="text-lg mb-8 opacity-90">Закажите машину заранее, чтобы забронировать удобное время.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition transform hover:scale-105 flex items-center justify-center gap-2">
                        <span>📱</span> Написать в Telegram
                    </a>
                    <a href="tel:+995597048630" class="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                        <span>📞</span> Позвонить
                    </a>
                </div>
            </div>
        `,
    },
"""

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace existing batumi_moving block
# I'll use a regex to find the block "batumi_moving": { ... },
# It's safer to just split by "batumi_moving": { and then find the closing brace, 
# but simply replacing strict strings might fail if there are minor differences.
# Since I generated the previous content, I can try to replace it.

# However, to be 100% sure, I will read the file, find the line where "batumi_moving": { starts,
# find where it ends (next service or end of object), and replace.

import re

# Regex to find the whole batumi_moving block
# It starts with "batumi_moving": {
# It ends when the next key starts (e.g. "batumi_office": { or "tbilisi_moving": {) or end of file.
# But keys order is not guaranteed. 
# Best way is to count braces? No, regex with non-greedy match until next key.
# Keys are indented by 4 spaces and quoted.

# Let's try to remove old batumi_moving first, then append new one.
# But the file is huge.

# Alternative: Replace the known unique header and content start.
# I know what I wrote before. But I might have changed it or it might have been restored by older script.

# Let's just APPEND the new version at the end of the object (before };) and comment out the old one?
# No, JSON object keys must be unique (or last one wins). JavaScript object keys - last one wins.
# So if I append it at the end, it will overwrite the previous one!
# This is a safe strategy for JS/TS objects.

# Find the last closing brace of the export object.
# The file ends with:
#     },
# };
# export type ...

# I will find "};" followed by "export type" or end of file.
pos = content.rfind("};")
if pos != -1:
    # Insert before the last closing brace
    # But wait, I need to make sure I add a comma to the previous element.
    # The previous element is likely "delivery" or whatever I added last.
    # To be safe, I'll add a comma before my new key.
    
    prefix = content[:pos]
    suffix = content[pos:]
    
    # Check if there is already a batumi_moving key and remove it?
    # If I just append, TS compiler might complain about duplicate keys?
    # Yes, "An object literal cannot have multiple properties with the same name."
    # So I MUST remove the old one.
    
    # I'll use regex to remove any existing "batumi_moving": { ... },
    # Pattern: \s*"batumi_moving":\s*\{[\s\S]*?\},
    # Using specific markers to be safer.
    
    content_no_batumi = re.sub(r'\s*"batumi_moving":\s*\{[\s\S]*?`\s*\},', '', content)
    
    # If regex failed (maybe no comma at end?), try without comma
    if content_no_batumi == content:
         content_no_batumi = re.sub(r'\s*"batumi_moving":\s*\{[\s\S]*?`\s*\}', '', content)
         
    # Now append new one before the end
    pos2 = content_no_batumi.rfind("};")
    if pos2 != -1:
         final_content = content_no_batumi[:pos2] + ",\n" + new_batumi_moving + content_no_batumi[pos2:]
         
         with open(file_path, 'w', encoding='utf-8') as f:
             f.write(final_content)
         print("Updated batumi_moving with NEW rich content.")
    else:
        print("Could not find end of object")

else:
    print("Could not find end of object")
