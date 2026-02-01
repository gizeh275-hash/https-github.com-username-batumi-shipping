# -*- coding: utf-8 -*-

with open('lib/servicesData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Новый контент для tbilisi_trash
new_content = '''        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FEF2F2 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #DC2626;">
                <h2 style="margin: 0 0 1.5rem 0; color: #7F1D1D; font-size: 1.8rem;">🚫 Не рискуйте получить штраф</h2>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    В Тбилиси муниципальная инспекция строго следит за чистотой. Штраф за выброс строительного мусора в обычный бак — от 200 до 1000 лари. Мы вывозим мусор строго на официальный полигон в Глдани. Предоставляем фотоотчет с выгрузки.
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.8); padding: 0.5rem 1rem; border-radius: 0.5rem; color: #991B1B; font-weight: bold;">🧾 Талон полигона</div>
                    <div style="background: rgba(255,255,255,0.8); padding: 0.5rem 1rem; border-radius: 0.5rem; color: #991B1B; font-weight: bold;">💪 Крепкие грузчики</div>
                    <div style="background: rgba(255,255,255,0.8); padding: 0.5rem 1rem; border-radius: 0.5rem; color: #991B1B; font-weight: bold;">🧹 Уборка после</div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">💰 Стоимость вывоза</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 1100px; margin-left: auto; margin-right: auto;">
                <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #F59E0B; border-radius: 1rem; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(245,158,11,0.3);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🛋️</div>
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Старая мебель</h3>
                    <p style="margin: 0 0 1rem 0; color: #92400E; font-size: 1.8rem; font-weight: bold;">от 50 ₾</p>
                    <ul style="list-style: none; padding: 0; margin: 0; text-align: left; color: #374151;">
                        <li style="padding: 0.3rem 0;">✓ Диваны, шкафы, кровати</li>
                        <li style="padding: 0.3rem 0;">✓ Спуск на лифте включен</li>
                        <li style="padding: 0.3rem 0;">✓ Разборка мебели</li>
                        <li style="padding: 0.3rem 0;">✓ Утилизация</li>
                    </ul>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🧱</div>
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Строительный мусор</h3>
                    <p style="margin: 0 0 1rem 0; color: #4B5563; font-size: 1.8rem; font-weight: bold;">от 4 ₾ / мешок</p>
                    <ul style="list-style: none; padding: 0; margin: 0; text-align: left; color: #374151;">
                        <li style="padding: 0.3rem 0;">✓ Плитка, бетон, штукатурка</li>
                        <li style="padding: 0.3rem 0;">✓ Вынос тяжелых мешков</li>
                        <li style="padding: 0.3rem 0;">✓ Спуск без лифта</li>
                        <li style="padding: 0.3rem 0;">✓ Погрузка в машину</li>
                    </ul>
                </div>

                <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(59,130,246,0.3);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🧹</div>
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Полная очистка</h3>
                    <p style="margin: 0 0 1rem 0; color: #1E40AF; font-size: 1.8rem; font-weight: bold;">от 120 ₾ / рейс</p>
                    <ul style="list-style: none; padding: 0; margin: 0; text-align: left; color: #374151;">
                        <li style="padding: 0.3rem 0;">✓ Квартира «под ноль»</li>
                        <li style="padding: 0.3rem 0;">✓ Перед продажей/ремонтом</li>
                        <li style="padding: 0.3rem 0;">✓ Вывоз хлама машинами</li>
                        <li style="padding: 0.3rem 0;">✓ Любой этаж</li>
                    </ul>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🚛 Подходящий транспорт</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 2rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Выбираем машину под ваш объем мусора.
            </p>

            <div style="max-width: 1100px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #FEF3C7; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🚙</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">Мини-фургон (до 500 кг)</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.6;">Для малого объема. Идеален для центра Тбилиси (Сололаки, Мтацминда). Заберет старую стиральную машину, 5-10 мешков мусора или один диван. Легко проедет в узкий «итальянский дворик».</p>
                        </div>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #fff; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🚚</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">Стандартная Газель / Форд (до 1.5 тонн)</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.6;">Хит заказов. Оптимален для вывоза мусора после ремонта в новостройках (Сабуртало, Диди Дигоми). Вмещает до 40-50 мешков или всю старую мебель из однокомнатной квартиры.</p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #FEE2E2; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🏗️</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">Самосвал / Контейнер (до 5 тонн)</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.6;">Масштабная стройка. Для капитальных ремонтов, сноса стен и вывоза грунта. Загрузка насыпью или паллетами. Вывозим сразу 5-7 тонн за рейс.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🛡️ Почему с нами безопасно?</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 1100px; margin-left: auto; margin-right: auto;">
                <div style="background: #F9FAFB; padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #10B981;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">✅ Только официальный полигон</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                        В Тбилиси штраф за нелегальный выброс — до 1000 ₾. Мы везем мусор на официальную свалку в Глдани. Вы можете спать спокойно, не боясь камер и инспекторов.
                    </p>
                </div>

                <div style="background: #F9FAFB; padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">💪 Крепкие грузчики</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                        Вынести чугунную ванну с 5 этажа «хрущевки» без лифта? Легко. Наши ребята работают с тяжестями каждый день. Ваша спина скажет спасибо.
                    </p>
                </div>

                <div style="background: #F9FAFB; padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">✨ Чистота после работы</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                        Мы не оставляем цементную пыль в подъезде и лифте. После выноса мешков подметем площадку, чтобы у вас не было проблем с соседями.
                    </p>
                </div>

                <div style="background: #F9FAFB; padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #8B5CF6;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">📏 Любой объем</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                        От одной старой тумбочки до полного демонтажа офиса. Нам не важно, сколько мусора — важно, чтобы его не стало.
                    </p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🚀 Как мы работаем</h2>

            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">1</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">Оценка по фото</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Пришлите фото кучи мусора в Telegram. Мы сразу скажем точную цену «под ключ» (машина + грузчики + талон на полигон).</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">2</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">Подача машины</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Приезжаем в оговоренное время (учитываем тбилисские пробки). Грузчики приходят со своими мешками (если нужно допаковать) и лопатами.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">3</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">Быстрая погрузка</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Быстро выносим мусор, не повреждая стены в подъезде. Грузим в машину максимально плотно, чтобы вы не платили за «воздух».</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem;">
                    <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">4</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">Официальная утилизация</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Увозим мусор на специальный полигон. Предоставляем фотоотчет с выгрузки, если вам это нужно.</p>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: #fff; padding: 3.5rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(220,38,38,0.3); margin-bottom: 3rem;">
                <h2 style="color: #FEF3C7; margin: 0 0 1.5rem 0; font-size: 2rem;">🚫 Не рискуйте получить штраф</h2>
                <p style="font-size: 1.2rem; margin: 0 0 2.5rem 0; color: #FEE2E2; line-height: 1.6;">
                    Закажите официальный вывоз мусора прямо сейчас. Избавим вас от хлама и проблем с законом.
                </p>
                <a
                    href="https://t.me/PereezdBatumiBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="background: linear-gradient(to right, #FCD34D, #F59E0B); color: #000; padding: 1rem 2.5rem; border-radius: 9999px; font-weight: bold; font-size: 1.2rem; text-decoration: none; box-shadow: 0 4px 12px rgba(252,211,77,0.4); transition: transform 0.2s; display: inline-block;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                >
                    Заказать вывоз в Telegram
                </a>
            </div>

            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 3rem 2rem; border-radius: 1.5rem; margin-bottom: 3rem; max-width: 1000px; margin-left: auto; margin-right: auto; border-left: 5px solid #F59E0B;">
                <h2 style="text-align: center; margin: 0 0 2rem 0; color: #000; font-size: 2rem;">📋 Как заказать</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📱</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Заявка</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Оформите заказ через наш Telegram-бот (выберите услугу и опишите детали) или свяжитесь напрямую: мы на связи по звонку и переписке в WhatsApp и Telegram.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Оценка за 15 минут</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Пришлите фото или видео вещей. Мы быстро рассчитаем фиксированную стоимость. Цена закрепляется сразу и не меняется в процессе.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚚</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Вывоз без опозданий</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Приезжаем вовремя. Бережно упакуем (если это старая мебель), аккуратно погрузим и увезем. Работаем вежливо.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💳</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Оплата по факту</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Никаких предоплат. Вы проверяете чистоту помещения после нас. Платите только тогда, когда убедитесь, что всё в порядке.</p>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #3B82F6; max-width: 1000px; margin-left: auto; margin-right: auto;">
                <h2 style="margin: 0 0 1.5rem 0; color: #1E40AF; font-size: 1.8rem; text-align: center;">💪 Почему выбирают нас</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚡</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Быстро</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Подача машины в любой район Тбилиси.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💪</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Надёжно</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Опытные грузчики с лопатами и мешками.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💰</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Честно</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Цена фиксируется заранее, без доплат.</p>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #000 0%, #1F2937 100%); color: #fff; padding: 3.5rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); max-width: 900px; margin: 0 auto;">
                <h2 style="color: #FCD34D; margin: 0 0 1.5rem 0; font-size: 2rem;">Готовы заказать вывоз строительного мусора и старой мебели в Тбилиси: официальная утилизация?</h2>
                <p style="font-size: 1.2rem; margin: 0 0 2.5rem 0; color: #E5E7EB; line-height: 1.6;">
                    Свяжитесь с нами через Telegram для быстрого расчёта стоимости.
                </p>
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                    <a
                        href="https://t.me/PereezdBatumiBot"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="background: linear-gradient(to right, #FCD34D, #F59E0B); color: #000; padding: 1rem 2.5rem; border-radius: 9999px; font-weight: bold; font-size: 1.1rem; text-decoration: none; box-shadow: 0 4px 12px rgba(252, 211, 77, 0.4); transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.05)'"
                        onmouseout="this.style.transform='scale(1)'"
                    >
                        📱 Telegram Bot
                    </a>
                    <a
                        href="tel:+995597048630"
                        style="background: linear-gradient(to right, #10B981, #059669); color: #fff; padding: 1rem 2.5rem; border-radius: 9999px; font-weight: bold; font-size: 1.1rem; text-decoration: none; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4); transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.05)'"
                        onmouseout="this.style.transform='scale(1)'"
                    >
                        📞 Позвонить
                    </a>
                </div>
            </div>
        `,'''

# Находим начало второго tbilisi_trash (строка 8224)
# И заменяем content до закрывающей },
start_marker = '    "tbilisi_trash": {'
end_marker = '    },'

# Ищем второе вхождение tbilisi_trash
first_occurrence = content.find('tbilisi_trash')
second_occurrence = content.find('"tbilisi_trash"', first_occurrence + 1)

if second_occurrence != -1:
    # Находим начало блока
    block_start = content.rfind(start_marker, 0, second_occurrence + 50)
    # Находим content:
    content_start = content.find('content: `', block_start)
    # Находим закрывающую `, для этого content
    content_end = content.find('\n        `,', content_start + 500)
    
    if content_start != -1 and content_end != -1:
        # Заменяем content
        new_file_content = content[:content_start] + new_content + content[content_end:]
        
        # Записываем
        with open('lib/servicesData.ts', 'w', encoding='utf-8') as f:
            f.write(new_file_content)
        
        print("✅ Контент tbilisi_trash успешно обновлен!")
    else:
        print("❌ Не найдены маркеры content")
else:
    print("❌ Второй tbilisi_trash не найден")
