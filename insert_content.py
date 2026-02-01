# -*- coding: utf-8 -*-
import codecs

# Читаем файл
with codecs.open('lib/servicesData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Новый контент для вставки
new_content = '''
            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">📦 Полный комплекс услуг для вашего бизнеса</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 3rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Мы берем на себя всю рутину, ваши сотрудники просто переезжают в готовый офис.
            </p>

            <div style="max-width: 1100px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🎯 Оценка и планирование</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Бесплатный выезд менеджера в любой район Батуми (от Махинджаури до Аэропорта) для оценки. Составляем план рассадки и график переезда, чтобы минимизировать простой.
                    </p>
                </div>

                <div style="background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(59,130,246,0.15);">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🔧 Разборка и сборка мебели</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Мастера профессионально разберут офисные столы, шкафы и стеллажи. Упакуем фурнитуру отдельно. На новом месте соберем и расставим мебель по плану.
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">💻 Упаковка техники и документов</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Учитывая влажный климат Батуми, мы тщательно упаковываем технику в стрейч и «пупырку» для защиты от сырости при транспортировке. Документацию укладываем в промаркированные коробки.
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">⚙️ Такелажные работы</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Перевозка тяжелых предметов: сейфов, серверных стоек, плоттеров. Используем специальные ремни и тележки для аккуратного перемещения по плитке и в лифтах.
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🚚 Транспортировка</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Подача чистых мебельных фургонов. Кузова оборудованы ремнями, чтобы мебель была зафиксирована и не повредилась при торможении.
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🧹 Уборка и вывоз упаковки</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        После расстановки мебели мы соберем весь картон и пленку. Также можем организовать вывоз старой офисной мебели на свалку.
                    </p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">⏱️ Перевезем офис за 24 часа без остановки работы</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 3rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Отработанный алгоритм из 5 шагов.
            </p>

            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">1</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">📞 Заявка и Оценка</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Вы оставляете заявку или присылаете видео офиса в WhatsApp. Мы оцениваем объем (рабочие места, этажность, лифты в высотках). Называем фиксированную цену.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">2</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">📄 Договор и Доставка упаковки</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Подписываем договор, выставляем инвойс (работаем с НДС и без). За 1-2 дня привозим коробки для личных вещей сотрудников.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">3</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">📦 Упаковка и Погрузка</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">В назначенный день приезжает бригада. Разбираем мебель, упаковываем технику.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">4</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">🚚 Перевозка и Выгрузка</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Быстро перевозим имущество по Батуми. Умеем работать с грузовыми лифтами в бизнес-центрах (Orbi, Alliance и др.).</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem;">
                    <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">5</div>
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.3rem;">✅ Сборка и Сдача</h3>
                        <p style="margin: 0; color: #6B7280; line-height: 1.7;">Собираем столы, расставляем всё по местам. Вывозим мусор. Подписываем Акт. Вы начинаете работать.</p>
                    </div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">❓ Вопросы и ответы об офисном переезде</h2>

            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Как формируется цена на офисный переезд в Батуми?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Стоимость зависит от количества рабочих мест, наличия грузового лифта (в батумских небоскребах это критично), этажности и объема мебели. Точная цена фиксируется после оценки и не меняется.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Работаете ли вы с пригородами (Гонио, Квариати, Чакви)?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Да, мы обслуживаем весь Батуми и прилегающие поселки. Также организуем междугородние переезды офисов (например, Батуми — Тбилиси).
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Работаете ли вы по безналичному расчету?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Да, мы работаем официально. Предоставляем полный пакет документов для бухгалтерии: договор, инвойс, акт.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Можно ли переехать в выходные или ночью?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Конечно. Мы готовы работать в пятницу вечером или в выходные, чтобы в понедельник ваш бизнес работал в штатном режиме.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Вы несете ответственность за технику?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Да, полная материальная ответственность по договору. Для мониторов используем усиленную упаковку.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Что делать со старой мебелью?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Мы можем организовать её вывоз и утилизацию на официальный полигон. Просто укажите это при оценке.
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 3rem 2rem; border-radius: 1.5rem; margin-bottom: 3rem; max-width: 1000px; margin-left: auto; margin-right: auto; border-left: 5px solid #F59E0B;">
                <h2 style="text-align: center; margin: 0 0 2rem 0; color: #000; font-size: 2rem;">📋 Как заказать</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📱</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Заявка</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Оформите заказ через Telegram-бот или свяжитесь в WhatsApp.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Оценка за 15 минут</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Пришлите видео офиса. Мы рассчитаем стоимость.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚚</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Переезд без опозданий</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Приезжаем вовремя. Бережно упакуем и довезем.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💳</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Оплата по факту</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Никаких предоплат. Платите после приемки работы (для юрлиц условия оплаты по договору).</p>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #3B82F6; max-width: 1000px; margin-left: auto; margin-right: auto;">
                <h2 style="margin: 0 0 1.5rem 0; color: #1E40AF; font-size: 1.8rem; text-align: center;">💪 Почему выбирают нас</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚡</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Быстро</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Подача машины в любой район Батуми.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💪</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Надёжно</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Опытные грузчики, умеющие работать в элитных ЖК и БЦ.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💰</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.1rem;">Честно</h3>
                        <p style="margin: 0; color: #374151; font-size: 0.95rem;">Цена фиксируется заранее.</p>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #000 0%, #1F2937 100%); color: #fff; padding: 3.5rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); max-width: 900px; margin: 0 auto;">
                <h2 style="color: #FCD34D; margin: 0 0 1.5rem 0; font-size: 2rem;">🏢 Готовы заказать офисный переезд в Батуми: быстро, по безналу, с документами?</h2>
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
'''

# Вставляем новый контент после строки 8850 (индекс 8850)
lines.insert(8851, new_content)

# Записываем обратно
with codecs.open('lib/servicesData.ts', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Контент успешно вставлен в servicesData.ts после строки 8851!")
