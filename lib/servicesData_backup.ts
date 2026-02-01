export const servicesData = {
    taxi: {
        title: "Р“СЂСѓР·РѕРІРѕРµ С‚Р°РєСЃРё РІ РўР±РёР»РёСЃРё Рё Р‘Р°С‚СѓРјРё: РїРѕРґР°С‡Р° РјР°С€РёРЅС‹ Р·Р° 30 РјРёРЅСѓС‚. РџРµСЂРµРІРµР·РµРј РѕС‚ 1 РєРѕСЂРѕР±РєРё РґРѕ РґРёРІР°РЅР°",
        price: "РѕС‚ 40 в‚ѕ",
        icon: "truck",
        badge: null,
        desc_short: "Р Р°Р±РѕС‚Р°РµРј РїРѕ РІСЃРµР№ Р“СЂСѓР·РёРё: Р‘Р°С‚СѓРјРё, РўР±РёР»РёСЃРё, РљСѓС‚Р°РёСЃРё Рё РґСЂСѓРіРёРµ РіРѕСЂРѕРґР°. Р‘С‹СЃС‚СЂР°СЏ РїРѕРґР°С‡Р° РјР°С€РёРЅС‹ РґР»СЏ РїРµСЂРµРІРѕР·РєРё РїРѕРєСѓРїРѕРє РёР· РјР°РіР°Р·РёРЅРѕРІ, РґРѕСЃС‚Р°РІРєР° РјРµР±РµР»Рё Рё С‚РµС…РЅРёРєРё. Р“СЂСѓР·РѕРІРѕРµ С‚Р°РєСЃРё + РґРѕСЃС‚Р°РІРєР° РїРѕРєСѓРїРѕРє.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #F59E0B;">
                <h2 style="margin: 0 0 1rem 0; color: #000;">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p style="margin: 0; color: #374151; line-height: 1.7;">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <h3 style="color: #000; margin: 2rem 0 1rem 0;">📦 Популярные сценарии</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #FEF3C7; padding: 1.5rem; border-radius: 0.75rem; border-left: 3px solid #F59E0B;">
                    <strong style="color: #000; font-size: 1.1rem;">🛒 Покупки из магазина</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Купили в Domino/Georgia/JYSK, а доставка "через 3 дня"? Мы привезем через час.</p>
                </div>

                <div style="background: #DBEAFE; padding: 1.5rem; border-radius: 0.75rem; border-left: 3px solid #3B82F6;">
                    <strong style="color: #000; font-size: 1.1rem;">🎓 Студенческий переезд</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Пара чемоданов, кот и компьютерный стул на новую съемную квартиру.</p>
                </div>

                <div style="background: #E0E7FF; padding: 1.5rem; border-radius: 0.75rem; border-left: 3px solid #6366F1;">
                    <strong style="color: #000; font-size: 1.1rem;">📺 Одна вещь</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Отвезти холодильник в ремонт, старый диван на дачу, ПК покупателю с MyMarket.</p>
                </div>

                <div style="background: #FEE2E2; padding: 1.5rem; border-radius: 0.75rem; border-left: 3px solid #EF4444;">
                    <strong style="color: #000; font-size: 1.1rem;">💼 Для бизнеса</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Развозка товара по точкам, доставка оборудования в кафе.</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">🚐 Наш автопарк</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 2rem 0;">Подберем машину под ваш груз — не переплачивайте за большой фургон!</p>
            
            <div style="max-width: 1000px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(252,211,77,0.2);">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #FCD34D; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🚙</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">"Каблук" / Минивэн</h3>
                            <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.95rem;">VW Caddy, Vito</p>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.6;">Идеален для 10-15 коробок или стиральной машины. Проедет в любой узкий двор Старого Тбилиси, куда фура не влезет.</p>
                            <div style="background: #FFFBEB; padding: 0.8rem; border-radius: 0.5rem;">
                                <strong style="color: #D97706;">💰 Самый дешевый тариф</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #93C5FD; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🚚</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">Средний фургон</h3>
                            <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.95rem;">Ford Transit, Sprinter</p>
                            <p style="margin: 0; color: #374151; line-height: 1.6;">Для перевозки дивана, кровати, холодильника (стоя). Вмещает мебель из IKEA/JYSK.</p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; flex-wrap: wrap;">
                        <div style="background: #D1D5DB; min-width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">🚛</div>
                        <div style="flex: 1; min-width: 250px;">
                            <h3 style="margin: 0 0 0.5rem 0; color: #000;">Большой фургон</h3>
                            <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.95rem;">20м³</p>
                            <p style="margin: 0; color: #374151; line-height: 1.6;">Если вещей много, но это не полноценный переезд квартиры.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">💰 Тарифы и опции</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 900px; margin-left: auto; margin-right: auto;">
                <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚗</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0;">Только машина</h3>
                    <p style="color: #6B7280; margin: 0 0 1rem 0; font-size: 0.95rem;">Водителю помогаете вы или друзья. Водитель только подает вещи из кузова.</p>
                    <strong style="color: #059669; font-size: 1.2rem;">Самый экономный!</strong>
                </div>

                <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(252,211,77,0.3);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">💪</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0;">Машина + Грузчик</h3>
                    <p style="color: #374151; margin: 0 0 1rem 0; font-size: 0.95rem; font-weight: 500;">Приезжает водитель-грузчик (или 2 человека). Сами спустят, погрузят и поднимут на этаж.</p>
                    <strong style="color: #D97706; font-size: 1.2rem;">Популярный выбор</strong>
                </div>
            </div>

            <div style="background: #FFFBEB; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #F59E0B; margin-bottom: 3rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                <p style="margin: 0; color: #78350F; line-height: 1.7;"><strong style="color: #92400E;">⏱️ Почасовая оплата:</strong> Вы платите только за реальное время работы — никаких фиксированных минимумов!</p>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">✨ Преимущества перед обычным такси</h2>
            
            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #10B981; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">📏 Вместимость</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">В обычный Prius (самое популярное такси в Грузии) не влезет холодильник. У нас — влезет!</p>
                </div>

                <div style="background: #fff; border-left: 4px solid #10B981; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">🔗 Фиксация груза</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">В отличие от "дяди на пикапе", у нас в кузове есть стяжные ремни. Ваш новый телевизор не упадет.</p>
                </div>

                <div style="background: #fff; border-left: 4px solid #10B981; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">👥 Пассажирские места</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">Можете поехать в кабине с водителем бесплатно (1-2 места), чтобы не вызывать себе отдельное такси.</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">❓ Экспресс-ответы</h2>
            
            <div style="max-width: 850px; margin: 0 auto 3rem auto;">
                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem; margin-bottom: 0.8rem;">
                    <strong style="color: #000;">Как быстро приедет машина?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;">В центре Тбилиси/Батуми — от 30 до 60 минут.</span>
                </div>

                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem; margin-bottom: 0.8rem;">
                    <strong style="color: #000;">Работаете ли вы вечером?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;">Да, развозим покупки и вещи до поздней ночи.</span>
                </div>

                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem;">
                    <strong style="color: #000;">Можно ли заказать доставку без моего участия?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;">Да, пришлите чек/накладную — заберем товар из магазина и привезем вам домой.</span>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">🏪 Доставка покупок из магазинов</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 2rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Доставляем покупки из всех популярных магазинов Грузии — в тот же день, с подъемом на этаж
            </p>

            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #3B82F6; max-width: 900px; margin-left: auto; margin-right: auto;">
                <h3 style="margin: 0 0 1rem 0; color: #1E40AF; font-size: 1.3rem;">⏰ Почему не ждать доставку магазина?</h3>
                <div style="background: rgba(255,255,255,0.9); padding: 1rem; border-radius: 0.75rem; margin-bottom: 0.8rem;">
                    <strong style="color: #DC2626;">Магазин:</strong> "Доставка в течение 3-5 дней"<br/>
                    <strong style="color: #059669;">Мы:</strong> Привезем через час после звонка!
                </div>
                <div style="background: rgba(255,255,255,0.9); padding: 1rem; border-radius: 0.75rem;">
                    <strong style="color: #DC2626;">Магазин:</strong> Часто выгружают "у подъезда"<br/>
                    <strong style="color: #059669;">Мы:</strong> Заносим в квартиру и ставим куда скажете
                </div>
            </div>

            <div style="max-width: 1100px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🏗️ Строительные гипермаркеты</h3>
                    <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                        <strong>Domino, Gorgia, Modus, Mihouse</strong>
                    </p>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">
                        Возим: ламинат, плитку, гипсокартон, двери, сантехнику, краски, цемент
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(252,211,77,0.2);">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🛋️ Мебельные магазины</h3>
                    <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                        <strong>JYSK, Comforter, Embawood, рынок Saba (Саба), Lilo (Лило)</strong>
                    </p>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">
                        Возим: диваны, кровати, шкафы, кухонные гарнитуры, матрасы
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">📺 Магазины техники</h3>
                    <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                        <strong>Alta, Elit Electronics, MetroMart</strong>
                    </p>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">
                        Возим: холодильники, стиральные машины, большие TV, посудомойки
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🛒 Рынки и Second Hand</h3>
                    <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                        <strong>MyMarket, Сухой мост, Lilo Market</strong>
                    </p>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">
                        Вывозим крупные покупки с барахолок и б/у рынков
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 3rem; border: 2px solid #FCD34D; max-width: 900px; margin-left: auto; margin-right: auto;">
                <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">📱 Доставка без вашего участия</h3>
                <p style="margin: 0; color: #374151; line-height: 1.7;">
                    <strong>Удобный сценарий:</strong> Вы оплачиваете товар онлайн → присылаете нам чек в WhatsApp → мы забираем и привозим вам домой. Вам не нужно ехать в магазин и стоять в пробках!
                </p>
            </div>

            <div style="background: linear-gradient(135deg, #000 0%, #1F2937 100%); color: #fff; padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                <h2 style="color: #FCD34D; margin: 0 0 1rem 0; font-size: 2rem;">⚡ Нужно срочно что-то перевезти?</h2>
                <p style="font-size: 1.1rem; margin: 0 0 2rem 0; color: #E5E7EB;">Звоните или пишите в WhatsApp — машина уже рядом!</p>
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                    <div style="background: #25D366; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        📱 WhatsApp: +995 597 048 630
                    </div>
                    <div style="background: #0088cc; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        ✈️ Telegram: @PereezdBatumiBot
                    </div>
                </div>
            </div>
        `,
    },
    office: {
        title: "Офисный переезд в Грузии: быстро, аккуратно и без простоя бизнеса. Перевезем от 1 стола до call-центра",
        price: "от 60 ₾",
        icon: "briefcase",
        badge: null,
        desc_short: "Работаем с юрлицами. Перевозка оргтехники, мебели, документации. Разборка и сборка офисной мебели. Работаем в выходные и ночью, чтобы вы не теряли рабочее время.",
        content: `
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #3B82F6;">
                <h2 style="margin: 0 0 1rem 0; color: #000;">🏢 Переезд офиса без остановки работы</h2>
                <p style="margin: 0; color: #374151; line-height: 1.7;">Мы понимаем, что каждый час простоя — это потеря денег. Поэтому мы организуем переезд так, чтобы утром ваши сотрудники уже могли начать работать на новом месте.</p>
            </div>

            <h3 style="color: #000; margin: 2rem 0 1rem 0;">💼 Что мы делаем</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #FFF; border: 1px solid #E5E7EB; padding: 1.5rem; border-radius: 0.75rem;">
                    <strong style="color: #000; font-size: 1.1rem;">🖥️ Оргтехника и серверы</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Бережная упаковка мониторов, компьютеров и серверов. Антистатическая пленка и жесткие короба.</p>
                </div>

                <div style="background: #FFF; border: 1px solid #E5E7EB; padding: 1.5rem; border-radius: 0.75rem;">
                    <strong style="color: #000; font-size: 1.1rem;">🗄️ Мебель и архивы</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Разборка больших столов и шкафов. Маркировка коробок с документами (ничего не потеряется).</p>
                </div>

                <div style="background: #FFF; border: 1px solid #E5E7EB; padding: 1.5rem; border-radius: 0.75rem;">
                    <strong style="color: #000; font-size: 1.1rem;">🌙 Работа 24/7</strong>
                    <p style="margin: 0.5rem 0 0 0; color: #6B7280; font-size: 0.95rem;">Можем перевезти ваш офис в выходные или ночью, чтобы в понедельник вы открылись вовремя.</p>
                </div>
            </div>

            <div style="background: #F3F4F6; padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0; color: #000;">💰 Для юридических лиц</h3>
                <ul style="margin: 0; padding-left: 1.2rem; color: #4B5563; line-height: 1.6;">
                    <li>Предоставляем все необходимые документы (Invoice)</li>
                    <li>Возможна оплата по безналичному расчету</li>
                    <li>Заключаем договор материальной ответственности</li>
                </ul>
            </div>
        `,
    },
    moving: {
        title: "РљРІР°СЂС‚РёСЂРЅС‹Р№ РїРµСЂРµРµР·Рґ Р±РµР· С…Р°РѕСЃР°: Р±РµСЂРµР¶РЅР°СЏ СѓРїР°РєРѕРІРєР°, СЂР°Р·Р±РѕСЂРєР° РјРµР±РµР»Рё Рё СЂР°СЃСЃС‚Р°РЅРѕРІРєР° РЅР° РЅРѕРІРѕРј РјРµСЃС‚Рµ",
        price: "РѕС‚ 60 в‚ѕ",
        icon: "home",
        badge: "РџРѕРїСѓР»СЏСЂРЅРѕ",
        desc_short: "Р Р°Р±РѕС‚Р°РµРј РїРѕ РІСЃРµР№ Р“СЂСѓР·РёРё: Р‘Р°С‚СѓРјРё, РўР±РёР»РёСЃРё, РљСѓС‚Р°РёСЃРё Рё РґСЂСѓРіРёРµ РіРѕСЂРѕРґР°. РџРµСЂРµРµР·Рґ РїРѕРґ РєР»СЋС‡ СЃ СЂР°Р·Р±РѕСЂРєРѕР№, СѓРїР°РєРѕРІРєРѕР№ Рё СЃР±РѕСЂРєРѕР№. РњР°С‚РµСЂРёР°Р»СЊРЅР°СЏ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ Р·Р° СЃРѕС…СЂР°РЅРЅРѕСЃС‚СЊ.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #F59E0B; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">🏠 Почему это не просто перевозка вещей</h2>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    <strong style="color: #D97706;">Можно позвать соседа.</strong> И повредить спину при спуске дивана с 5 этажа. Или поцарапать новый ламинат углом шкафа. Или разбить экран телевизора, потому что "показалось, что так хватит".
                </p>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    <strong style="color: #000;">А можно доверить это профессионалам</strong>, которые перевозят мебель каждый день. Мы <strong>несем материальную ответственность</strong> за каждую вещь. У нас свои инструменты для разборки, упаковочные материалы и чистые фургоны с обшивкой (чтобы мебель не царапалась при транспортировке).
                </p>
                <p style="margin: 0; font-size: 1rem; font-style: italic; color: #6B7280;">
                    Вы платите не за "погрузить коробки". Вы платите за спокойствие и гарантию, что всё доедет целым.
                </p>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🔧 Детальный процесс работы</h2>
            
            <div style="max-width: 950px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                         <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">1</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Подготовка и разборка мебели</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                                Приезжаем с <strong>набором инструментов</strong>: шуруповерты, гаечные ключи, отвертки. Снимаем дверцы шкафов, разбираем большие кровати, демонтируем столешницы.
                            </p>
                            <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                                <strong style="color: #000;">Важно:</strong> Всю фурнитуру (болты, гайки, петли) складываем в <em>отдельные подписанные пакеты</em> и приклеиваем их скотчем к соответствующей мебели. Вы не будете искать "те самые болты" при сборке.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(252, 211, 77, 0.15);">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">2</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Профессиональная упаковка</h3>
                            
                            <div style="background: #FFFBEB; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #92400E;">📦 Корпусная мебель</p>
                                <p style="margin: 0; color: #78350F; font-size: 0.95rem;">Углы защищаем картоном, плоскости обматываем стрейч-пленкой (5-7 слоев для стекла).</p>
                            </div>

                            <div style="background: #FFFBEB; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #92400E;">🛋️ Мягкая мебель</p>
                                <p style="margin: 0; color: #78350F; font-size: 0.95rem;">Плотная стрейч-пленка от пыли и влаги. Особенно важно в климате Батуми — защита от влажности при перевозке.</p>
                            </div>

                            <div style="background: #FFFBEB; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #92400E;">📺 Техника (TV, мониторы)</p>
                                <p style="margin: 0; color: #78350F; font-size: 0.95rem;">Воздушн о-пузырчатая пленка ("пупырка") + лист картона для защиты экрана. Укладываем вертикально.</p>
                            </div>

                            <div style="background: #FFFBEB; padding: 1rem; border-radius: 0.5rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #92400E;">🍷 Посуда и хрупкое</p>
                                <p style="margin: 0; color: #78350F; font-size: 0.95rem;">Каждый бокал заворачиваем в бумагу/пленку. Укладываем в коробки с наполнителем (мятая бумага или пенопласт).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">3</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Бережная погрузка</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                                Используем <strong>такелажные ремни</strong> для переноски крупных предметов — так мы не бьем углы стен в подъезде и не давим пальцы.
                            </p>
                            <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                                В кузове укладываем вещи <em>"тетрисом"</em> (тяжелое вниз, легкое сверху) и фиксируем всё <strong>стяжными ремнями к борту</strong>, чтобы ничего не сместилось при торможении.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">4</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Аккуратная транспортировка</h3>
                            <p style="margin: 0; color: #374151; line-height: 1.7;">
                                Наши водители ездят плавно, без резких торможений. Знаем дороги и объездные маршруты, чтобы избежать лежачих полицейских с грузом.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #FCD34D; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #000;">5</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Финал: сборка и расстановка</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                                Поднимаем всё на нужный этаж, собираем мебель обратно (кровати, шкафы), расставляем по комнатам согласно вашему плану.
                            </p>
                            <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                                <strong>Бонус:</strong> Весь использованный скотч, пленку и картон забираем с собой — вам не придется выносить горы мусора.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">📋 Что мы перевозим: особые случаи</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 1100px; margin-left: auto; margin-right: auto;">
                <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); border-radius: 1rem; padding: 2rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎹</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0; font-size: 1.3rem;">Крупногабаритные вещи</h3>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Пианино (вертикальные и рояли)</li>
                        <li>Сейфы до 300 кг</li>
                        <li>Неразборные диваны</li>
                        <li>Холодильники Side-by-Side</li>
                    </ul>
                </div>

                <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border-radius: 1rem; padding: 2rem; border: 2px solid #FCD34D;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">💎</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0; font-size: 1.3rem;">Хрупкие и ценные вещи</h3>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Зеркала во весь рост</li>
                        <li>Аквариумы (слив воды обязателен)</li>
                        <li>Антикварная мебель</li>
                        <li>Картины в рамах</li>
                    </ul>
                </div>

                <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); border-radius: 1rem; padding: 2rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👕</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0; font-size: 1.3rem;">Личные вещи и одежда</h3>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Одежда (предоставляем коробки)</li>
                        <li>Гардеробные короба с вешалками</li>
                        <li>Обувь и аксессуары</li>
                        <li>Документы (опечатанные коробки)</li>
                    </ul>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🚛 Наш арсенал: техника и инструменты</h2>
            
            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🚐 Автопарк</h3>
                    <p style="margin: 0 0 1rem 0; color: #374151; line-height: 1.7;">
                        У нас есть машины разного объема: от минивэна (для студии) до 20-кубового фургона (для 3-комнатной квартиры). Все машины <strong>чистые, сухие, с обшивкой внутри</strong> — ваша мебель не поцарапается о металлический борт.
                    </p>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem; font-style: italic;">
                        Машины проходят ежедневную проверку технического состояния.
                    </p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">🔧 Инструменты и оборудование</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Набор ключей и отверток</p>
                        </div>
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Аккумуляторные шуруповерты</p>
                        </div>
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Такелажные ремни</p>
                        </div>
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Тележки (рохли)</p>
                        </div>
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Стрейч и пупырчатая пленка</p>
                        </div>
                        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem;">
                            <p style="margin: 0; color: #374151;"><strong>•</strong> Картонные листы и коробки</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">❓ FAQ: Нюансы сервиса</h2>
            
            <div style="max-width: 950px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #FCD34D; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Как подготовить холодильник к переезду?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> За сутки до переезда разморозьте его, вымойте и высушите. Выньте все съемные полки и ящики — их упакуем отдельно. Дверцу фиксируем стрейчем.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #FCD34D; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Нужно ли вынимать вещи из комода?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Желательно. Комод с вещами становится очень тяжелым, а направляющие ящиков могут сломаться от веса при переноске. Лучше переложить вещи в коробки.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #FCD34D; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Как вы считаете время работы?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Время начинается с момента прибытия бригады к вам. Если лифт платный или не работает — предупреждаем о доплате за спуск/подъем по этажам <em>заранее</em>, до начала работ.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #FCD34D; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Что делать с комнатными цветами?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Перевозим их последними (чтобы не стояли в душном кузове). Горшки фиксируем в коробках, чтобы земля не рассыпалась. Крупные растения можно обмотать пленкой.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #FCD34D; border-radius: 0.5rem; padding: 1.5rem 2rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Можно ли перевезти аквариум с рыбами?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Аквариум перевозим только пустым (слив воды обязателен). Рыб нужно переместить в отдельные емкости с водой и перевезти самостоятельно в машине.
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #000 0%, #1F2937 100%); color: #fff; padding: 3.5rem 2.5rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                <h2 style="color: #FCD34D; margin: 0 0 1.5rem 0; font-size: 2rem;">💬 Хотите, чтобы переезд прошел незаметно?</h2>
                <p style="font-size: 1.2rem; margin: 0 0 2rem 0; color: #E5E7EB; line-height: 1.6;">
                    Закажите <strong style="color: #FCD34D;">бесплатную оценку стоимости</strong> по фото прямо сейчас.<br/>
                    Пришлите фото квартиры в WhatsApp или Telegram — мы рассчитаем точную цену за 10 минут.
                </p>
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                    <div style="background: #25D366; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        📱 WhatsApp: +995 597 048 630
                    </div>
                    <div style="background: #0088cc; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        ✈️ Telegram: @PereezdBatumiBot
                    </div>
                </div>
                <p style="margin: 0; color: #FCD34D; font-size: 1.1rem; font-weight: bold;">
                    ⚡ Работаем 7 дней в неделю. Материальная ответственность за каждую вещь.
                </p>
            </div>
        `,
    },
    trash: {
        title: "Р’С‹РІРѕР· СЃС‚СЂРѕРёС‚РµР»СЊРЅРѕРіРѕ РјСѓСЃРѕСЂР° Рё СЃС‚Р°СЂРѕР№ РјРµР±РµР»Рё РІ РўР±РёР»РёСЃРё Рё Р‘Р°С‚СѓРјРё. РЎ РіСЂСѓР·С‡РёРєР°РјРё Рё СѓС‚РёР»РёР·Р°С†РёРµР№ РЅР° РїРѕР»РёРіРѕРЅРµ",
        price: "РѕС‚ 80 в‚ѕ",
        icon: "trash",
        badge: null,
        desc_short: "Р Р°Р±РѕС‚Р°РµРј РїРѕ РІСЃРµР№ Р“СЂСѓР·РёРё: Р‘Р°С‚СѓРјРё, РўР±РёР»РёСЃРё, РљСѓС‚Р°РёСЃРё. Р’С‹РІРѕР· СЃС‚СЂРѕРёС‚РµР»СЊРЅРѕРіРѕ РјСѓСЃРѕСЂР°, СЃС‚Р°СЂРѕР№ РјРµР±РµР»Рё Рё С‚РµС…РЅРёРєРё РЅР° РѕС„РёС†РёР°Р»СЊРЅС‹Р№ РїРѕР»РёРіРѕРЅ.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #DC2626; box-shadow: 0 4px 12px rgba(220,38,38,0.2);">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">⚠️ ВНИМАНИЕ! Не выбрасывайте мусор в обычные баки</h2>
                <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h3 style="margin: 0 0 0.8rem 0; color: #DC2626; font-size: 1.3rem;">📜 О законе</h3>
                    <p style="margin: 0; color: #7F1D1D; line-height: 1.7; font-size: 1.05rem;">
                        <strong>В Грузии запрещено</strong> выбрасывать строительные отходы (плитку, бетон, кирпичи, штукатурку) в городские мусорные баки. <strong>Штрафы высокие!</strong>
                    </p>
                </div>
                <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 0.75rem;">
                    <h3 style="margin: 0 0 0.8rem 0; color: #059669; font-size: 1.3rem;">✓ Наше решение</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Мы вывозим мусор <strong>официально</strong> на специализированные свалки (полигоны). Вы получаете чистую квартиру и никаких проблем с соседями или муниципальной инспекцией.
                    </p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🗑️ Что именно мы вывозим</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 1100px; margin-left: auto; margin-right: auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🏗️ Строительный мусор</h3>
                    <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.9rem; font-style: italic;">(в мешках)</p>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Битая плитка</li>
                        <li>Штукатурка и бетон</li>
                        <li>Кирпичи</li>
                        <li>Старые обои после ремонта</li>
                    </ul>
                </div>

                <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #FCD34D; border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 8px rgba(252,211,77,0.2);">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🪑 Старая мебель (Хлам)</h3>
                    <p style="margin: 0 0 0.5rem 0; color: #92400E; font-size: 0.9rem; font-style: italic;">(перед продажей квартиры)</p>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Советские стенки</li>
                        <li>Диваны и кресла</li>
                        <li>Шкафы</li>
                        <li>Кухонные гарнитуры</li>
                    </ul>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">📺 Бытовая техника</h3>
                    <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.9rem; font-style: italic;">(тяжелое)</p>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Старые холодильники</li>
                        <li>Стиральные машины</li>
                        <li>Чугунные ванны</li>
                        <li>Батареи отопления</li>
                    </ul>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">🚪 Рамы и двери</h3>
                    <p style="margin: 0 0 0.5rem 0; color: #6B7280; font-size: 0.9rem; font-style: italic;">(после замены)</p>
                    <ul style="margin: 0; padding-left: 1.2rem; color: #374151; line-height: 1.8;">
                        <li>Оконные рамы</li>
                        <li>Старые двери</li>
                        <li>Деревянные коробки</li>
                    </ul>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border: 2px solid #3B82F6;">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">📋 Как подготовиться к вывозу</h2>
                
                <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">💼 Сыпучий мусор</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        <strong>Важно!</strong> Мелкий мусор должен быть упакован в <strong>прочные строительные мешки</strong> (зеленые/белые полипропиленовые). Мы не можем выносить мусор лопатами из квартиры.
                    </p>
                </div>

                <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 0.75rem;">
                    <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🪚 Крупногабаритная мебель</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">
                        Если мебель не влезает в лифт или дверной проем — <strong>мы разберем ее на месте</strong>. Приедем с инструментами.
                    </p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🚛 Наш транспорт и грузчики</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 3rem; max-width: 1000px; margin-left: auto; margin-right: auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🚐</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0; font-size: 1.3rem;">Малый объем</h3>
                    <p style="margin: 0 0 1rem 0; color: #6B7280; font-style: italic; font-size: 0.9rem;">10-20 мешков</p>
                    <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 0.95rem;">
                        Микроавтобус / Ford Transit для небольшого ремонта или вывоза одной старой мебели.
                    </p>
                </div>

                <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); border: 2px solid #6B7280; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🚛</div>
                    <h3 style="color: #000; margin: 0 0 1rem 0; font-size: 1.3rem;">Ремонт "под ключ"</h3>
                    <p style="margin: 0 0 1rem 0; color: #6B7280; font-style: italic; font-size: 0.9rem;">Тонны мусора</p>
                    <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 0.95rem;">
                        Самосвал (ЗИЛ/КамАЗ) или большой грузовик для капитального ремонта.
                    </p>
                </div>
            </div>

            <div style="background: #FFFBEB; padding: 2rem; border-radius: 1rem; border-left: 4px solid #F59E0B; margin-bottom: 3rem; max-width: 900px; margin-left: auto; margin-right: auto;">
                <h3 style="margin: 0 0 1rem 0; color: #000;">💪 Грузчики</h3>
                <p style="margin: 0; color: #78350F; line-height: 1.7;">
                    Крепкие ребята, которые <strong>спустят тяжелые мешки с любого этажа</strong> (даже без лифта). Это тяжелая физическая работа — оплачивается отдельно.
                </p>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">❓ Вопросы об утилизации</h2>

            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #DC2626; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Нужно ли мне нанимать машину, если у меня всего один старый диван?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Да, мы приедем и заберем его. Это услуга "Вывоз старой мебели" — подходит для освобождения квартиры перед продажей.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #DC2626; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Вы предоставляете мешки?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Можем привезти свои прочные полипропиленовые мешки за дополнительную плату, если у вас их нет.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #DC2626; border-radius: 0.5rem; padding: 1.5rem 2rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Куда вы это везете?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> На <strong>официальный городской полигон ТБО</strong>, а не в ближайший овраг. Это легально и безопасно для окружающей среды.
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%); color: #fff; padding: 3.5rem 2.5rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(124,58,237,0.3);">
                <h2 style="color: #FEF3C7; margin: 0 0 1.5rem 0; font-size: 2rem;">🧹 Освободите квартиру от хлама сегодня</h2>
                <p style="font-size: 1.2rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Пришлите <strong style="color: #FEF3C7;">фото кучи мусора в WhatsApp</strong>,<br/>
                    и мы назовем точную цену вывоза!
                </p>
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                    <div style="background: #fff; color: #7C3AED; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        📱 WhatsApp: +995 597 048 630
                    </div>
                    <div style="background: #0088cc; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        ✈️ Telegram: @PereezdBatumiBot
                    </div>
                </div>
                <p style="margin: 0; color: #E9D5FF; font-size: 1rem;">
                    ⚡ Официальная утилизация | Грузчики в комплекте | Без штрафов
                </p>
            </div>
        `,
    },
    movers: {
        title: "РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Рµ РіСЂСѓР·С‡РёРєРё РІ РўР±РёР»РёСЃРё Рё Р‘Р°С‚СѓРјРё: С‚СЂРµР·РІС‹Рµ, РєСЂРµРїРєРёРµ Рё СЃ РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°РјРё. РџРѕС‡Р°СЃРѕРІР°СЏ РѕРїР»Р°С‚Р°",
        price: "РѕС‚ 20 в‚ѕ/С‡Р°СЃ",
        icon: "users",
        badge: null,
        desc_short: "Р Р°Р±РѕС‚Р°РµРј РїРѕ РІСЃРµР№ Р“СЂСѓР·РёРё: Р‘Р°С‚СѓРјРё, РўР±РёР»РёСЃРё, РљСѓС‚Р°РёСЃРё. РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Рµ РіСЂСѓР·С‡РёРєРё СЃ РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°РјРё РґР»СЏ РїРѕРіСЂСѓР·РєРё, СЂР°Р·РіСЂСѓР·РєРё Рё С‚Р°РєРµР»Р°Р¶РЅС‹С… СЂР°Р±РѕС‚.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #EF4444;">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">💪 Ваша спина стоит дороже</h2>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #7F1D1D;">
                    <strong>Не пытайтесь поднять диван в одиночку или с соседом.</strong> Лечение спины обойдется дороже, чем вызов профессиональных грузчиков.
                </p>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    <strong style="color: #000;">Наше решение:</strong> Предоставим физически крепкую бригаду (от 1 до 10 человек) для любых задач.
                </p>
                <div style="background: rgba(255,255,255,0.8); padding: 1.2rem; border-radius: 0.75rem; margin-top: 1rem;">
                    <p style="margin: 0; color: #000; font-weight: bold;">✓ Штатные сотрудники</p>
                    <p style="margin: 0.5rem 0 0 0; color: #374151; font-size: 0.95rem;">Опрятные, вежливые, не курят на каждом перекуре, работают быстро и профессионально.</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">📦 Когда нужны только грузчики?</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🚛</div>
                    <h3 style="color: #000; margin: 0 0 0.5rem 0;">Разгрузка фур</h3>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">Приехал товар из Турции или Китая? Быстро разгрузим контейнер на склад.</p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🪑</div>
                    <h3 style="color: #000; margin: 0 0 0.5rem 0;">Перестановка мебели</h3>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">Меняете местами шкаф и диван? Сделаем аккуратно, не поцарапав паркет.</p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🏗️</div>
                    <h3 style="color: #000; margin: 0 0 0.5rem 0;">Подъем стройматериалов</h3>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">Плитка, цемент, гипсокартон на этаж — даже если нет лифта.</p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🚗</div>
                    <h3 style="color: #000; margin: 0 0 0.5rem 0;">Погрузка в вашу машину</h3>
                    <p style="margin: 0; color: #6B7280; font-size: 0.95rem;">Есть свой транспорт? Загрузим вещи грамотно "тетрисом".</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">🛠️ Работаем не только руками, но и головой</h2>
            
            <div style="max-width: 900px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #F59E0B; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000;">🔗 Такелажные ремни</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        Используем специальные ремни для переноски холодильников и шкафов. Это бережет углы мебели и стены подъезда.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #F59E0B; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000;">🔧 Инструменты</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        У бригады с собой шуруповерты и ключи. Диван не проходит в дверь? Разберем, занесем и соберем обратно.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #F59E0B; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000;">🛞 Тележки (Рохли)</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        Для перемещения тяжелых грузов по ровной поверхности (склад, паркинг).
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #1F2937 0%, #374151 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; color: #fff;">
                <h2 style="margin: 0 0 1.5rem 0; color: #FCD34D; font-size: 1.8rem;">⚙️ Такелажные работы (Тяжелые грузы)</h2>
                <p style="margin: 0 0 1.5rem 0; line-height: 1.7;">
                    Обычный грузчик <strong>не поднимет</strong> пианино или сейф. Для таких задач нужна специальная подготовка.
                </p>
                <h3 style="color: #FCD34D; margin: 0 0 1rem 0; font-size: 1.3rem;">Что мы перевозим:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem;">
                        <strong>🎹 Пианино и рояли</strong>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem;">
                        <strong>🔒 Сейфы</strong>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem;">
                        <strong>🖥️ Серверные шкафы</strong>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem;">
                        <strong>🏧 Банкоматы</strong>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem;">
                        <strong>🏪 Торговое оборудование</strong>
                    </div>
                </div>
                <p style="margin: 1.5rem 0 0 0; font-size: 0.95rem; color: #FCD34D;">
                    💰 Для таких задач цена рассчитывается индивидуально (за вес/этаж).
                </p>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">💰 Цены и условия</h2>
            
            <div style="max-width: 800px; margin: 0 auto 3rem auto;">
                <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border-radius: 1rem; padding: 2rem; margin-bottom: 1rem; border: 2px solid #FCD34D;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">⏱️ Почасовая оплата</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.7;">Прозрачный тариф — вы платите только за реальное время работы.</p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1rem;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">⏰ Минимальный заказ</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">Обычно 2 часа работы.</p>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #000;">🏢 Поэтажная оплата</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">Если нет лифта, подъем тяжелых вещей считается за каждый этаж.</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2rem; margin: 3rem 0 2rem 0; color: #000;">❓ Вопросы о работниках</h2>
            
            <div style="max-width: 850px; margin: 0 auto 3rem auto;">
                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem; margin-bottom: 0.8rem;">
                    <strong style="color: #000;">Грузчики приедут трезвые?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;"><strong style="color: #059669;">Строго да.</strong> Это наш стандарт качества.</span>
                </div>

                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem; margin-bottom: 0.8rem;">
                    <strong style="color: #000;">Они смогут разобрать шкаф?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;">Да, это универсальные специалисты-сборщики с инструментами.</span>
                </div>

                <div style="background: #F9FAFB; padding: 1.2rem 1.5rem; border-radius: 0.5rem;">
                    <strong style="color: #000;">Как быстро вы приедете?</strong><br/>
                    <span style="color: #6B7280; font-size: 0.95rem;">Бригада может быть у вас через час-полтора.</span>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">📦 Профессиональная упаковка</h2>
            <p style="text-align: center; color: #6B7280; margin: 0 0 2rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Правильная упаковка — это 80% успеха переезда. Защитите свои вещи от царапин, сколов и поломок
            </p>

            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #F59E0B; max-width: 900px; margin-left: auto; margin-right: auto;">
                <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">⚠️ Почему газета и одеяло не подойдут</h3>
                <p style="margin: 0 0 0.8rem 0; color: #92400E; line-height: 1.7;">
                    <strong>Царапины на паркете, разбитый экран телевизора, сколы на углах шкафа</strong> — это цена экономии на пленке. Дороги в Грузии бывают неровными (особенно серпантины), а в Батуми высокая влажность.
                </p>
                <div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 0.75rem; margin-top: 1rem;">
                    <p style="margin: 0; color: #78350F; font-weight: bold;">✓ Нужны промышленные материалы: пузырчатая пленка, стрейч, картонные уголки</p>
                </div>
            </div>

            <div style="max-width: 1000px; margin: 0 auto 3rem auto;">
                <h3 style="text-align: center; margin: 0 0 1.5rem 0; color: #000; font-size: 1.4rem;">🛠️ Как мы упаковываем</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border-radius: 1rem; padding: 2rem; border: 2px solid #FCD34D;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛋️</div>
                        <h4 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.1rem;">Мягкая мебель</h4>
                        <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 0.95rem;">
                            Диваны, матрасы: полная обмотка стрейч-пленкой в 5-7 слоев. Создаем герметичный кокон от грязи и влаги.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🗄️</div>
                        <h4 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.1rem;">Корпусная мебель</h4>
                        <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 0.95rem;">
                            Шкафы, тумбы: защита углов картонными уголками, фиксация дверей скотчем, обмотка стрейчем.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📺</div>
                        <h4 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.1rem;">Бытовая техника</h4>
                        <p style="margin: 0; color: #374151; line-height: 1.7; font-size: 0.95rem;">
                            ТВ, холодильник, стиралка: защита лицевой панели картоном, затем пузырчатая пленка. Края — в уголки.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); border-radius: 1rem; padding: 2rem; border: 2px solid #EF4444;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🍷</div>
                        <h4 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.1rem;">Посуда и хрупкое</h4>
                        <p style="margin: 0; color: #7F1D1D; line-height: 1.7; font-size: 0.95rem;">
                            <strong>Каждую тарелку</strong> оборачиваем отдельно. Пустоты в коробке заполняем, чтобы ничего не билось.
                        </p>
                    </div>
                </div>

                <div style="background: #DBEAFE; padding: 2rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                    <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.3rem;">📦 Два варианта упаковки</h3>
                    <div style="display: grid; gap: 1rem;">
                        <div style="background: rgba(255,255,255,0.9); padding: 1.2rem; border-radius: 0.75rem;">
                            <strong style="color: #1E40AF;">Упаковка под ключ:</strong> 
                            <span style="color: #374151;"> Наши упаковщики приезжают с материалами и делают всё за вас</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.9); padding: 1.2rem; border-radius: 0.75rem;">
                            <strong style="color: #1E40AF;">Доставка материалов:</strong> 
                            <span style="color: #374151;"> Привозим коробки, пленку и скотч — пакуете сами в своем темпе</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%); color: #fff; padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(220,38,38,0.3);">
                <h2 style="color: #FEF3C7; margin: 0 0 1rem 0; font-size: 2rem;">💪 Берегите здоровье</h2>
                <p style="font-size: 1.1rem; margin: 0 0 2rem 0;">Доверьте тяжести профессионалам. Позвоните, чтобы заказать бригаду!</p>
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                    <div style="background: #fff; color: #DC2626; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        📱 WhatsApp: +995 597 048 630
                    </div>
                    <div style="background: #0088cc; color: #fff; padding: 1rem 2rem; border-radius: 0.75rem; font-weight: bold;">
                        ✈️ Telegram: @PereezdBatumiBot
                    </div>
                </div>
            </div>
        `,
    },

};

export type ServiceSlug = keyof typeof servicesData;
