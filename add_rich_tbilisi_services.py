
import json

file_path = "lib/servicesData.ts"

# Rich content for new services
new_services_data = """
    "tbilisi_moving": {
        title: "Квартирный переезд в Тбилиси: бережно, быстро и без нервов",
        price: "от 70 ₾",
        icon: "home",
        badge: "Тбилиси",
        desc_short: "Организуем переезд квартиры в Тбилиси под ключ. Сабуртало, Ваке, Глдани, Варкетили. Грузчики, мебельный фургон, упаковка.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem; box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.2);">
                <h2 style="color: #92400E; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">🏡 Переезд в Тбилиси — это просто</h2>
                <p style="color: #78350F; font-size: 1.1rem; line-height: 1.6;">Мы знаем каждый уголок Тбилиси: от узких, извилистых улочек Сололаки до запаркованных дворов Ваке. Подберем машину, которая точно проедет к вашему подъезду, и грузчиков, которые знают, как пронести диван через узкий дверной проем.</p>
                <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <span style="background: rgba(255,255,255,0.6); padding: 0.5rem 1rem; border-radius: 2rem; color: #92400E; font-weight: 600;">📦 Упаковка</span>
                    <span style="background: rgba(255,255,255,0.6); padding: 0.5rem 1rem; border-radius: 2rem; color: #92400E; font-weight: 600;">🚛 Транспорт</span>
                    <span style="background: rgba(255,255,255,0.6); padding: 0.5rem 1rem; border-radius: 2rem; color: #92400E; font-weight: 600;">💪 Грузчики</span>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                <div style="background: #fff; padding: 2rem; border-radius: 1.5rem; border: 2px solid #f3f4f6;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #111;">🧩 Разборка и сборка</h3>
                    <p style="color: #666; line-height: 1.6;">Не нужно искать мастера. Наши грузчики приедут с инструментами (шуруповерты, ключи) и аккуратно разберут шкафы, кровати и столы, а на новом месте соберут и расставят.</p>
                </div>
                <div style="background: #fff; padding: 2rem; border-radius: 1.5rem; border: 2px solid #f3f4f6;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #111;">🛡️ Материальная ответственность</h3>
                    <p style="color: #666; line-height: 1.6;">Мы отвечаем за сохранность ваших вещей. Используем пузырчатую пленку, стрейч и картон, чтобы техника и мебель доехали без царапин.</p>
                </div>
            </div>

            <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 2rem; text-align: center;">🔥 Работаем во всех районах</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 3rem;">
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Сабуртало</div>
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Ваке</div>
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Глдани</div>
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Варкетили</div>
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Диди Дигоми</div>
                <div style="text-align: center; padding: 1.5rem; background: #f9fafb; border-radius: 1rem; font-weight: 600;">Старый город</div>
            </div>
        `
    },

    "tbilisi_office": {
        title: "Офисный переезд в Тбилиси: бизнес работает без пауз",
        price: "от 200 ₾",
        icon: "building",
        badge: "Тбилиси",
        desc_short: "Профессиональный переезд офиса в Тбилиси. Перевезем 100 рабочих мест за выходные. Сборка мебели, упаковка серверов, безналичный расчет с НДС.",
        content: `
             <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="color: #1E40AF; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">🏢 Переезд офиса "под ключ"</h2>
                <p style="color: #1E3A8A; font-size: 1.1rem; line-height: 1.6;">Понимаем, что каждый час простоя — это потеря денег. Поэтому мы организуем переезд так, чтобы в пятницу сотрудники выключили компьютеры в старом офисе, а в понедельник включили их в новом.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div style="padding: 1.5rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌙</div>
                    <h3 style="font-weight: 700; margin-bottom: 0.5rem;">Ночные работы</h3>
                    <p style="color: #666; font-size: 0.95rem;">Можем работать ночью или в выходные, чтобы не мешать вашему бизнесу.</p>
                </div>
                <div style="padding: 1.5rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📄</div>
                    <h3 style="font-weight: 700; margin-bottom: 0.5rem;">Документы (НДС)</h3>
                    <p style="color: #666; font-size: 0.95rem;">Работаем официально. Предоставляем инвойс и акт выполненных работ.</p>
                </div>
                <div style="padding: 1.5rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💻</div>
                    <h3 style="font-weight: 700; margin-bottom: 0.5rem;">Оргтехника</h3>
                    <p style="color: #666; font-size: 0.95rem;">Бережно упакуем мониторы, системные блоки и серверное оборудование.</p>
                </div>
            </div>
        `
    },

    "tbilisi_movers": {
        title: "Грузчики в Тбилиси: трезвые, крепкие, пунктуальные",
        price: "от 25 ₾/час",
        icon: "users",
        badge: "Тбилиси",
        desc_short: "Услуги грузчиков в Тбилиси. Разгрузка фур, подъем мебели на этаж, перестановка в квартире. Работаем от 2 часов. Оплата почасовая.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="color: #991B1B; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">💪 Зачем срывать спину?</h2>
                <p style="color: #7F1D1D; font-size: 1.1rem; line-height: 1.6;">Нужно поднять новое пианино на 9 этаж пешком, потому что оно не влезает в лифт? Или разгрузить фуру с товаром на рынке Лило? Наши ребята сделают это быстро и без лишних перекуров.</p>
            </div>

            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">Наши расценки</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                <li style="padding: 1rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>1 грузчик (стандарт)</span>
                    <strong>20-25 ₾/час</strong>
                </li>
                <li style="padding: 1rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>Такелажные работы (пианино, сейфы)</span>
                    <strong>по договоренности</strong>
                </li>
                <li style="padding: 1rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>Минимальный заказ</span>
                    <strong>2 часа</strong>
                </li>
            </ul>
        `
    },
    
    "delivery": {
        title: "Доставка покупок из магазинов: Domino, Gorgia, JYSK",
        price: "от 40 ₾",
        icon: "package",
        badge: "Вся Грузия",
        desc_short: "Экспресс-доставка строительных материалов и мебели из гипермаркетов. Заберем по чеку, привезем сегодня, поднимем на этаж.",
        content: `
            <div style="background: linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="color: #3730A3; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">🛍️ Купили диван — привезем сегодня!</h2>
                <p style="color: #312E81; font-size: 1.1rem; line-height: 1.6;">Магазины часто предлагают доставку "в течение 3-5 дней". Зачем ждать? Мы заберем ваш товар (мебель, плитку, гипсокартон) прямо сейчас и привезем к вам домой.</p>
            </div>

            <div style="background: #fff; padding: 2rem; border-radius: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Как это работает?</h3>
                <ol style="padding-left: 1.5rem; color: #555; line-height: 1.8;">
                    <li style="margin-bottom: 0.5rem;">Вы покупаете товар в магазине (Domino, Gorgia, JYSK, Bricorama и др.).</li>
                    <li style="margin-bottom: 0.5rem;">Звоните нам или присылаете фото чека/накладной.</li>
                    <li style="margin-bottom: 0.5rem;">Мы приезжаем, забираем товар (даже без вашего присутствия, если нужно).</li>
                    <li style="margin-bottom: 0.5rem;">Привозим вам и поднимаем на этаж.</li>
                </ol>
            </div>
        `
    },
"""

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before intercity
if '"tbilisi_moving":' not in content:
    new_content = content.replace('"intercity": {', new_services_data + '\n    "intercity": {')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Added rich content for Tbilisi services and Delivery.")
else:
    print("Services seem to exist already. Please verify content.")
