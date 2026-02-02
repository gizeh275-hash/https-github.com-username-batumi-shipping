export const servicesData = {
    taxi: {
        title: "Грузовое такси в Тбилиси и Батуми: подача машины за 30 минут. Перевезем от 1 коробки до дивана",
        price: "от 40 ₾",
        icon: "truck",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси и другие города. Быстрая подача машины для перевозки покупок из магазинов, доставка мебели и техники. Грузовое такси + доставка покупок.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #F59E0B;">
                <h2 style="margin: 0 0 1rem 0; color: #000;">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p style="margin: 0; color: #374151; line-height: 1.7;">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

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


        `,
    },

    batumi_taxi: {
        title: "Грузовое такси в Батуми: быстрая подача, фиксированная цена",
        price: "от 30 ₾",
        icon: "truck",
        badge: "Батуми",
        desc_short: "Грузовое такси по Батуми и Аджарии. Перевезем покупки из магазинов, мебель, технику. Подача за 20-30 минут. Можете ехать с грузом в кабине.",
        content: `
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #F59E0B;">
                <h2 style="margin: 0 0 1rem 0; color: #000;">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p style="margin: 0; color: #374151; line-height: 1.7;">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Фиксированные цены на перевозку</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Тип авто</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Стоимость</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Для чего подходит</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Мини-фургон (Caddy)</td>
                                <td style="padding: 1.2rem; color: #F59E0B; font-weight: bold; font-size: 1.1rem;">от 30 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Стиральная машина, 10 мешков смесей, личные вещи, покупки из супермаркета.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Микроавтобус (Transit)</td>
                                <td style="padding: 1.2rem; color: #F59E0B; font-weight: bold; font-size: 1.1rem;">от 45 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Диван, холодильник, кровать, мебель для одной комнаты.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Бортовая / Самосвал</td>
                                <td style="padding: 1.2rem; color: #F59E0B; font-weight: bold; font-size: 1.1rem;">от 60 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Арматура, трубы, доски, сыпучие материалы (песок/щебень).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Помощь водителя</td>
                                <td style="padding: 1.2rem; color: #10B981; font-weight: bold; font-size: 1.1rem;">+10-20 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если нужно помочь подать вещи из кузова (не полноценная работа грузчика).</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Почасовая аренда</td>
                                <td style="padding: 1.2rem; color: #3B82F6; font-weight: bold; font-size: 1.1rem;">от 40 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если у вас много точек погрузки/выгрузки.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #92400E; font-weight: 600;">⚠️ Цена указана за рейс по городу (до 5-7 км). Выезд в Махинджаури, Чакви или Гонио рассчитывается отдельно.</p>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Когда вам нужно грузовое такси?</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛒</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Доставка из строительных магазинов</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Купили плитку, ламинат или цемент в Domino, Gorgia или Modus? Очередь на доставку магазина — 2 дня. Мы приедем через 30 минут, заберем товар и довезем до подъезда.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛋️</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Покупки мебели и техники</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Заберем диван из мебельного салона или холодильник из Metro City / Carrefour. Везем аккуратно, техника фиксируется ремнями.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📦</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Малый переезд</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Нужно перевезти чемоданы и коробки на новую квартиру? Зачем заказывать большую машину? Мини-фургон идеально подойдет и сэкономит бюджет.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #F59E0B; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏍️</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Перевозка инвентаря</h3>
                        <p style="color: #78350F; line-height: 1.6; margin: 0;">
                            Перевезем мопед, велосипеды, сап-борды или туристическое снаряжение в любую точку Аджарии.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚗 Машины под любой груз</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="background: #fff; border-left: 4px solid #FCD34D; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">1. «Каблук» (VW Caddy / Ford Connect)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            Маленький, юркий. Заедет в любой подземный паркинг новостроек (где ограничение по высоте 2м) и проедет по узким улочкам Старого Батуми.
                        </p>
                        <p style="margin: 0; color: #6B7280; font-weight: 600;">Вмещает: 2 пассажира + 500 кг груза.</p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #3B82F6; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">2. Грузовой бус (Ford Transit / Sprinter)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            Классическое грузовое такси. Высокий потолок — холодильник встает стоя.
                        </p>
                        <p style="margin: 0; color: #6B7280; font-weight: 600;">Вмещает: 2 пассажира + 1.5 тонны груза.</p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #6B7280; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">3. Открытый борт</h3>
                        <p style="margin: 0; color: #374151; line-height: 1.7;">
                            Для негабаритных грузов (длинные трубы, доски) или верхней погрузки краном.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Benefits -->
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #1E40AF;">⭐ Удобнее, чем обычное такси</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🙋♂️ Едьте пассажиром</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            В кабине всегда есть 1-2 чистых места для вас. Не нужно тратить деньги на отдельное такси, чтобы сопровождать груз.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">⚡️ Срочная подача</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Машины дежурят в разных районах Батуми (Химшиашвили, Багратиони, Чавчавадзе). Среднее время подачи — 20-30 минут.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🛡 Чистые кузова</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Мы не возим мусор в тех же машинах, в которых возим мебель. Для мусора у нас отдельный транспорт.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Водитель поможет разгрузить?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Водитель — не грузчик, его задача довезти. Но за небольшую доплату он поможет подать вещи из машины. Если нужен полноценный подъем на этаж — закажите услугу с грузчиком.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Как вы работаете с магазинами (Domino/Gorgia)?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Вы можете сами быть в магазине или просто скинуть нам фото чека и накладной. Мы заберем товар сами и привезем вам (по предоплате товара).
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Везете ли вы в Сарпи/Кобулети?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Да, это считается междугородним рейсом. Цену рассчитаем заранее.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #000 0%, #1F2937 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <h2 style="color: #FCD34D; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">🚚 Машина уже рядом</h2>
                <p style="color: #E5E7EB; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Не ждите доставку магазина сутками. Перевезите свои покупки прямо сейчас.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #0088cc; color: #fff; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        🚚 Вызвать такси (Telegram)
                    </a>
                    <a href="tel:+995597048630" style="background: #FCD34D; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить диспетчеру
                    </a>
                </div>
            </div>
        `
    },

    tbilisi_taxi: {
        title: "Грузовое такси в Тбилиси: доставка по столице за 40 минут",
        price: "от 35 ₾",
        icon: "truck",
        badge: "Тбилиси",
        desc_short: "Грузовое такси по Тбилиси и пригородам. Перевезем покупки из магазинов, мебель, технику. Учитываем пробки. Можете ехать с грузом в кабине.",
        content: `
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border-left: 4px solid #3B82F6;">
                <h2 style="margin: 0 0 1rem 0; color: #1E40AF;">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Фиксированные цены на перевозку</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Тип авто</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Стоимость</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Для чего подходит</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Мини-фургон (Caddy)</td>
                                <td style="padding: 1.2rem; color: #3B82F6; font-weight: bold; font-size: 1.1rem;">от 35 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Стиральная машина, 10 мешков смесей, личные вещи, покупки из супермаркета.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Микроавтобус (Transit)</td>
                                <td style="padding: 1.2rem; color: #3B82F6; font-weight: bold; font-size: 1.1rem;">от 50 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Диван, холодильник, кровать, мебель для одной комнаты.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Бортовая / Самосвал</td>
                                <td style="padding: 1.2rem; color: #3B82F6; font-weight: bold; font-size: 1.1rem;">от 70 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Арматура, трубы, доски, сыпучие материалы (песок/щебень).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Помощь водителя</td>
                                <td style="padding: 1.2rem; color: #10B981; font-weight: bold; font-size: 1.1rem;">+15-25 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если нужно помочь подать вещи из кузова (не полноценная работа грузчика).</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Почасовая аренда</td>
                                <td style="padding: 1.2rem; color: #8B5CF6; font-weight: bold; font-size: 1.1rem;">от 45 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если у вас много точек погрузки/выгрузки.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #DBEAFE; border-left: 4px solid #3B82F6; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #1E40AF; font-weight: 600;">⚠️ Цена указана за рейс по городу (до 7-10 км). Выезд в Рустави, Мцхету или Дигоми рассчитывается отдельно. Учитываем время в пробках.</p>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Когда вам нужно грузовое такси?</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛒</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Доставка из строительных магазинов</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Купили плитку, ламинат или цемент в Domino, Gorgia или Modus? Очередь на доставку магазина — 2-3 дня. Мы приедем через 40 минут, заберем товар и довезем до подъезда.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛋️</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Покупки мебели и техники</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Заберем диван из мебельного салона или холодильник из Metro City / Carrefour / East Point. Везем аккуратно, техника фиксируется ремнями.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📦</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Малый переезд</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Нужно перевезти чемоданы и коробки на новую квартиру в другой район? Зачем заказывать большую машину? Мини-фургон идеально подойдет и сэкономит бюджет.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Доставка в офис/бизнес-центр</h3>
                        <p style="color: #1E3A8A; line-height: 1.6; margin: 0;">
                            Доставим оргтехнику, мебель или документы в Axis Tower, King David, Liberty Tower, Pixel. Знаем все правила въезда в бизнес-центры.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚗 Машины под любой груз</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="background: #fff; border-left: 4px solid #60A5FA; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">1. «Каблук» (VW Caddy / Ford Connect)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            Маленький, юркий. Идеален для узких улиц Старого Тбилиси (Сололаки, Авлабари). Заедет в любой подземный паркинг.
                        </p>
                        <p style="margin: 0; color: #6B7280; font-weight: 600;">Вмещает: 2 пассажира + 500 кг груза.</p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #3B82F6; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">2. Грузовой бус (Ford Transit / Sprinter)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            Классическое грузовое такси. Высокий потолок — холодильник встает стоя. Подходит для доставки по всем районам столицы.
                        </p>
                        <p style="margin: 0; color: #6B7280; font-weight: 600;">Вмещает: 2 пассажира + 1.5 тонны груза.</p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #6B7280; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">3. Открытый борт</h3>
                        <p style="margin: 0; color: #374151; line-height: 1.7;">
                            Для негабаритных грузов (длинные трубы, доски) или верхней погрузки краном на стройках в Дигоми,  Глдани.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Benefits -->
            <div style="background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #1E40AF;">⭐ Удобнее, чем обычное такси</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🙋♂️ Едьте пассажиром</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            В кабине всегда есть 1-2 чистых места для вас. Не нужно тратить деньги на отдельное такси, чтобы сопровождать груз.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🚦 Учитываем пробки</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Машины дежурят в разных районах Тбилиси (Сабуртало, Ваке, Глдани, Дигоми). Знаем все объездные пути. Среднее время подачи — 30-40 минут.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🛡 Чистые кузова</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Мы не возим мусор в тех же машинах, в которых возим мебель. Для мусора у нас отдельный транспорт.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Водитель поможет разгрузить?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Водитель — не грузчик, его задача довезти. Но за небольшую доплату он поможет подать вещи из машины. Если нужен полноценный подъем на этаж — закажите услугу с грузчиком.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Как вы работаете с магазинами (Domino/Gorgia)?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Вы можете сами быть в магазине или просто скинуть нам фото чека и накладной. Мы заберем товар сами и привезем вам (по предоплате товара).
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Везете ли вы в Рустави/Мцхету?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Да, это считается межгородним рейсом. Цену рассчитаем заранее с учетом расстояния.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Учитываете ли пробки в цене?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Фиксированная цена уже включает среднее время в пути с учетом пробок. Заранее планируем маршрут через объездные пути, если основная дорога перегружена.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);">
                <h2 style="color: #BFDBFE; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">🚚 Машина уже в пути</h2>
                <p style="color: #DBEAFE; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Не ждите доставку магазина днями. Перевезите свои покупки по столице прямо сейчас.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #60A5FA; color: #fff; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        🚚 Вызвать такси (Telegram)
                    </a>
                    <a href="tel:+995597048630" style="background: #BFDBFE; color: #1E40AF; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить диспетчеру
                    </a>
                </div>
            </div>
        `
    },
    moving: {
        title: "Квартирный переезд в Грузии: бережно упакуем и перевезем мебель под ключ",
        price: "от 60 ₾",
        icon: "home",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси и другие города. Переезд под ключ с разборкой, упаковкой и сборкой. Материальная ответственность за сохранность.",
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


        `,
    },
    trash: {
        title: "Вывоз строительного мусора и старой мебели в Тбилиси и Батуми. С грузчиками и утилизацией на полигоне",
        price: "от 80 ₾",
        icon: "trash",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси. Вывоз строительного мусора, старой мебели и техники на официальный полигон.",
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


        `,
    },

    batumi_trash: {
        title: "Вывоз строительного мусора в Батуми: грузчики, полигон, уборка",
        price: "от 80 ₾",
        icon: "trash",
        badge: "Батуми",
        desc_short: "Официальный вывоз мусора в Батуми на полигон Адлия. Строительный мусор, старая мебель, хлам. Без штрафов. Грузчики убирают за собой.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #DC2626; box-shadow: 0 4px 12px rgba(220,38,38,0.2);">
                <h2 style="margin: 0 0 1rem 0; color: #7F1D1D;">🏗️ Вывоз мусора в Батуми без головной боли</h2>
                <p style="margin: 0; color: #7F1D1D; line-height: 1.7; font-size: 1.1rem;">Ремонт — это радость, а гора мешков — проблема. Мы заберем строительный мусор, старый диван или хлам из гаража и отвезем на официальный полигон. Никаких штрафов от инспекции!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Стоимость вывоза мусора</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Цена</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Что входит и объем</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Средняя машина (Фургон)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">80 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Оптимально для небольшого ремонта. Вмещает старую мебель (диван, шкаф) или средний объем строительных мешков.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Большая машина (Макси)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">100 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Для масштабного ремонта. Вместительный кузов, куда войдет до 200 мешков мусора, крупногабаритный хлам или длинные доски.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Полная очистка</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">от 200 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Освободим квартиру «под ноль» перед продажей или ремонтом. Выносим всё: от старых тумбочек до мусора на балконе.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Машины для узких улиц и новостроек</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="background: #fff; border-left: 4px solid #F59E0B; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">1. Мини-фургон (до 500 кг)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Для Старого Батуми и малых объемов.</strong> Легко заезжает в тесные дворы на ул. Горгиладзе или Зубалашвили. Подходит для вывоза старой стиральной машины, 10 мешков мусора или одного дивана.
                        </p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #DC2626; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">2. Форд Транзит (до 1.5 т)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Для ремонта в "Черном каркасе".</strong> Хит заказов для новостроек (New Boulevard, Ангиса). Вмещает около 40-50 мешков строительного мусора.
                        </p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #000; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">3. Самосвал / ЗИЛ (до 4-5 т)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Для капитальной стройки.</strong> Если вы ломаете стены или вывозите грунт. Загрузка насыпью. Вывозим большие объемы за один рейс.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Features / Safety -->
            <div style="background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #991B1B;">🚫 Почему нельзя выбрасывать в обычный бак?</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.8); padding: 1.5rem; border-radius: 1rem; border-top: 4px solid #DC2626;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #991B1B; font-size: 1.2rem;">💸 Штрафы до 1000 ₾</h3>
                        <p style="margin: 0; color: #7F1D1D; line-height: 1.7;">
                            Муниципальная инспекция Батуми регулярно проверяет баки. За выброс строительного мусора штраф от 200 до 1000 лари. Мы спасаем вас от этих рисков.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.8); padding: 1.5rem; border-radius: 1rem; border-top: 4px solid #059669;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #065F46; font-size: 1.2rem;">✅ Полигон Адлия</h3>
                        <p style="margin: 0; color: #064E3B; line-height: 1.7;">
                            Весь мусор вывозится на спецполигон в районе аэропорта/Адлии. Экология города не страдает.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.8); padding: 1.5rem; border-radius: 1rem; border-top: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🧹 Чистота в лифте</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            После выноса мешков наши грузчики подметают за собой в подъезде и лифте, чтобы у вас не было конфликтов с соседями или управляющей компанией (особенно в Orbi/Alliance).
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🔄 Как мы работаем</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">1</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Оценка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Пришлите фото мусора в Telegram. Мы назовем фиксированную цену (включая оплату полигона).</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">2</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Подача</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Приезжаем в назначенное время.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">3</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Погрузка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Грузчики быстро выносят мешки. Если лифта нет — спускаем вручную (расчет поэтажно).</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">4</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Утилизация</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Отвозим груз в Адлию.</p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Вывозите ли вы мусор из высоток, если лифт платный?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, но оплата лифта (чип-карта или монеты) ложится на заказчика.
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Есть ли у грузчиков свои мешки?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, мы можем привезти прочные строительные мешки и сами упаковать мусор (услуга оплачивается дополнительно).
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Вы работаете в пригородах (Махинджаури, Гонио)?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, обслуживаем весь Батуми и окрестности. Цену за выезд за город уточняйте у оператора.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(153, 27, 27, 0.3);">
                <h2 style="color: #FECACA; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">🗑 Избавьтесь от хлама прямо сейчас</h2>
                <p style="color: #FEE2E2; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Освободите квартиру для ремонта или новой мебели. Машина будет у вас в течение часа.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #F87171; color: #fff; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        🗑 Заказать вывоз (Telegram)
                    </a>
                    <a href="tel:+995597048630" style="background: #FECACA; color: #7F1D1D; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить
                    </a>
                </div>
            </div>
        `
    },
    movers: {
        title: "Профессиональные грузчики в Тбилиси и Батуми: трезвые, крепкие и с инструментами. Почасовая оплата",
        price: "от 50 ₾/час",
        icon: "users",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси. Профессиональные грузчики с инструментами для погрузки, разгрузки и такелажных работ.",
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


        `,
    },
    office: {
        title: "Офисный переезд без отрыва от бизнеса: перевезем вашу компанию за выходные или одну ночь",
        price: "от 150 ₾",
        icon: "box",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси и другие города. Офисный переезд 24/7 с минимальным простоем.",
        content: `
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #3B82F6; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.8rem;">💼 Главная боль бизнеса — простой</h2>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #1E3A8A;">
                    <strong>Каждый час простоя офиса — это потеря денег.</strong> Срыв дедлайнов, недовольные клиенты, сотрудники, которые не могут работать.
                </p>
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    <strong style="color: #000;">Наше решение:</strong> Мы работаем 24/7. Можем начать переезд в пятницу вечером, а в понедельник утром ваши сотрудники уже сядут за свои столы на новом месте.
                </p>

            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">🏢 Технология офисного переезда</h2>
            
            <div style="max-width: 950px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">1</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Планирование и маркировка</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                                <strong>Самый важный этап.</strong> Мы маркируем (клеим стикеры) каждое рабочее место: стол, кресло, монитор и коробки сотрудника получают один номер.
                            </p>
                            <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                                В новом офисе никто не будет искать свой степлер или тумбочку — всё встанет на свои места по Planogram (плану рассадки).
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #3B82F6; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">2</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Упаковка техники и документации</h3>
                            
                            <div style="background: #EFF6FF; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #1E40AF;">💻 Оргтехника</p>
                                <p style="margin: 0; color: #1E3A8A; font-size: 0.95rem;">Мониторы и моноблоки — в пупырчатую пленку + картон. Серверное оборудование — в спец. ящики с амортизацией.</p>
                            </div>

                            <div style="background: #FEF3C7; padding: 1rem; border-radius: 0.5rem;">
                                <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #92400E;">📁 Архивы и документы</p>
                                <p style="margin: 0; color: #78350F; font-size: 0.95rem;">Упаковываем в короба, соблюдая порядок. Гарантируем конфиденциальность — каждый короб опечатан.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">3</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Разборка и упаковка мебели</h3>
                            <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                                Переговорные столы, стеллажи, шкафы-купе — всё разбираем аккуратно. Кресла перевозим в чехлах, чтобы не испачкать обивку.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">4</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Транспортировка и расстановка</h3>
                            <p style="margin: 0; color: #374151; line-height: 1.7;">
                                Перевозим, собираем мебель и расставляем строго по плану рассадки (Planogram), который вы утвердите. Каждый сотрудник придет на готовое рабочее место.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 2rem;">
                    <div style="display: flex; gap: 1.5rem; align-items: start;">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff;">5</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 1rem 0; color: #000; font-size: 1.4rem;">Клининг после переезда</h3>
                            <p style="margin: 0; color: #374151; line-height: 1.7;">
                                Вывозим за собой горы использованного скотча, пленки и картона. Офис готов к работе — сотрудники не увидят хаоса.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #6B7280;">
                <h2 style="margin: 0 0 1.5rem 0; color: #000; font-size: 1.6rem;">⚡ Особенности работы с IT-оборудованием</h2>
                <p style="margin: 0 0 1rem 0; color: #374151; line-height: 1.7;">
                    <strong>Для IT-компаний и стартапов:</strong> Умеем обращаться с серверными шкафами (Rack), плоттерами и дорогой электроникой.
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                    <div style="background: #fff; padding: 1.2rem; border-radius: 0.5rem;">
                        <strong style="color: #000;">Серверные шкафы</strong><br/>
                        <span style="color: #6B7280; font-size: 0.9rem;">Демонтаж и установка Rack</span>
                    </div>
                    <div style="background: #fff; padding: 1.2rem; border-radius: 0.5rem;">
                        <strong style="color: #000;">Антистатика</strong><br/>
                        <span style="color: #6B7280; font-size: 0.9rem;">Материалы для электроники</span>
                    </div>
                    <div style="background: #fff; padding: 1.2rem; border-radius: 0.5rem;">
                        <strong style="color: #000;">Маркировка кабелей</strong><br/>
                        <span style="color: #6B7280; font-size: 0.9rem;">Подписываем все провода</span>
                    </div>
                </div>
            </div>



            <h3 style="text-align: center; font-size: 1.8rem; margin: 3rem 0 2rem 0; color: #000;">🏢 Какие офисы мы перевозим</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; max-width: 1000px; margin-left: auto; margin-right: auto;">
                <div style="background: #F9FAFB; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👥</div>
                    <h4 style="color: #000; margin: 0 0 0.5rem 0;">Небольшие кабинеты</h4>
                    <p style="color: #6B7280; margin: 0; font-size: 0.95rem;">До 5 сотрудников</p>
                </div>

                <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border-radius: 1rem; padding: 2rem; text-align: center; border: 2px solid #3B82F6;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
                    <h4 style="color: #000; margin: 0 0 0.5rem 0;">Open Space и IT-хабы</h4>
                    <p style="color: #1E3A8A; margin: 0; font-size: 0.95rem; font-weight: 500;">50+ рабочих мест</p>
                </div>

                <div style="background: #F9FAFB; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏦</div>
                    <h4 style="color: #000; margin: 0 0 0.5rem 0;">Банковские отделения</h4>
                    <p style="color: #6B7280; margin: 0; font-size: 0.95rem;">Сейфы, тяжелое оборудование</p>
                </div>
            </div>

            <h2 style="text-align: center; font-size: 2.2rem; margin: 3rem 0 2rem 0; color: #000;">❓ FAQ для бизнеса</h2>
            
            <div style="max-width: 950px; margin: 0 auto 3rem auto;">
                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Как быстро вы можете оценить переезд?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Пришлем оценщика бесплатно в день заявки. Он осмотрит офис, посчитает объем и предоставит коммерческое предложение в течение 24 часов.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Нужно ли сотрудникам самим паковать вещи?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> По желанию. Мы можем привезти коробки заранее, чтобы сотрудники сложили личные вещи. Всё остальное (мебель, техника) делаем мы.
                    </p>
                </div>

                <div style="background: #fff; border-left: 4px solid #3B82F6; border-radius: 0.5rem; padding: 1.5rem 2rem; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                    <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">Вы работаете в ночное время?</h3>
                    <p style="margin: 0; color: #6B7280; line-height: 1.7;">
                        <strong>Ответ:</strong> Да, ночной переезд — самый удобный вариант для бизнеса. Начинаем в пятницу после 18:00, заканчиваем в воскресенье. Ночной тариф обсуждается индивидуально.
                    </p>
                </div>
            </div>
        `,
    },

    "tbilisi_trash": {
        title: "Вывоз строительного мусора в Тбилиси: грузчики, полигон Глдани",
        price: "от 80 ₾",
        icon: "trash",
        badge: "Тбилиси",
        desc_short: "Официальный вывоз мусора в Тбилиси на полигон Глдани/Лило. Строительный мусор, старая мебель. Без штрафов. Работаем во всех районах.",
        content: `
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #DC2626; box-shadow: 0 4px 12px rgba(220,38,38,0.2);">
                <h2 style="margin: 0 0 1rem 0; color: #7F1D1D;">🏗️ Вывоз мусора в Тбилиси без штрафов</h2>
                <p style="margin: 0; color: #7F1D1D; line-height: 1.7; font-size: 1.1rem;">Муниципальная инспекция Тбилиси строго следит за баками. Штраф за строительный мусор — от 500 лари. Мы вывезем всё официально на Глданский полигон.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Стоимость вывоза мусора (Тбилиси)</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Цена</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Что входит и объем</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Средняя машина (Фургон)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">80 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Оптимально для небольшого ремонта. Вмещает старую мебель (диван, шкаф) или средний объем строительных мешков.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Большая машина (Макси)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">100 ₾ / рейс</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Для масштабного ремонта. Вместительный кузов, куда войдет до 200 мешков мусора, крупногабаритный хлам или длинные доски.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Полная очистка</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">от 200 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Освободим квартиру «под ноль» перед продажей или ремонтом. Выносим всё: от старых тумбочек до мусора на балконе.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #FEE2E2; border-left: 4px solid #DC2626; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #991B1B; font-weight: 600;">⚠️ В Тбилиси большие расстояния до полигонов (Глдани/Лило). Цена может меняться в зависимости от района погрузки.</p>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Спецтехника для Тбилиси</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="background: #fff; border-left: 4px solid #F59E0B; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">1. Мини-фургон (для Старого города)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Сололаки, Мтацминда, Авлабари.</strong> Легко проедет в узкие арки итальянских двориков. Заберет старый хлам, окна, двери.
                        </p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #DC2626; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">2. Форд Транзит (стандарт)</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Сабуртало, Ваке, Дигоми.</strong> Основная машина для вывоза строительного мусора в мешках. Вмещает до 1.5 тонн.
                        </p>
                    </div>

                    <div style="background: #fff; border-left: 4px solid #000; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <h3 style="margin: 0 0 0.8rem 0; color: #000; font-size: 1.2rem;">3. Самосвал / ЗИЛ</h3>
                        <p style="margin: 0 0 0.8rem 0; color: #374151; line-height: 1.7;">
                            <strong>Глдани, Варкетили, Самгори.</strong> Если вы ломаете стены или вывозите грунт насыпью.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Features / Safety -->
            <div style="background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #991B1B;">🚫 Риски и правила</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.8); padding: 1.5rem; border-radius: 1rem; border-top: 4px solid #DC2626;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #991B1B; font-size: 1.2rem;">💸 Камеры и штрафы</h3>
                        <p style="margin: 0; color: #7F1D1D; line-height: 1.7;">
                            Тбилиси покрыт камерами. За выброс мусора из машины или оставление у баков штрафуют автоматически. Мы бережем ваши нервы.
                        </p>
                    </div>
                    <div style="background: rgba(255,255,255,0.8); padding: 1.5rem; border-radius: 1rem; border-top: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🧹 Чистый подъезд</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            После выноса строительного мусора мы подметаем лифтовую площадку, чтобы соседи не жаловались в корпус.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🔄 Процесс работы</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">1</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Фото</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Скиньте фото мусора в WhatsApp/Telegram. Оценим объем и назовем цену.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">2</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Выезд</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Машина будет у вас в оговоренное время. Работаем 24/7 (по договоренности).</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">3</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Погрузка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Грузчики выносят мешки и мебель. Спускаем аккуратно, не повреждая стены подъезда.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background: #FEE2E2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; color: #DC2626; font-weight: bold;">4</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Полигон</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Мусор уезжает на переработку или захоронение.</p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Вопросы и ответы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Вывозите ли вы мусор из Рустави или Мцхеты?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, мы обслуживаем пригороды Тбилиси (Рустави, Мцхета, Цхнети, Коджори). Стоимость рейса будет выше из-за километража.
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Сколько стоит вывоз старого дивана?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Обычно от 60 до 80 лари, если есть лифт. В цену входит подача машины, работа грузчиков и утилизация.
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Нужно ли упаковывать мусор в мешки?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Сыпучий мусор (плитка, бетон) — обязательно. Мы можем приехать со своими мешками и упаковать, это дополнительная услуга.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(153, 27, 27, 0.3);">
                <h2 style="color: #FECACA; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">🗑 Очистите квартиру сегодня</h2>
                <p style="color: #FEE2E2; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Батуми мы уже очистили — теперь очередь Тбилиси! Звоните, приедем быстро.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #F87171; color: #fff; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        🗑 Заказать в Telegram
                    </a>
                    <a href="tel:+995597048630" style="background: #FECACA; color: #7F1D1D; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 +995 597 048 630
                    </a>
                </div>
            </div>
        `,
    },

    "batumi_office": {
        title: "Офисный переезд в Батуми: бизнес без пауз",
        price: "от 150 ₾",
        icon: "building",
        badge: "Батуми",
        desc_short: "Перевезем ваш офис в Батуми быстро и аккуратно. Разборка столов, упаковка оргтехники, расстановка на новом месте.",
        content: `
            <!-- Block 1: Hero -->
            <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); padding: 2rem; border-radius: 1rem; border-left: 5px solid #4B5563; margin-bottom: 3rem;">
                <h2 style="color: #1F2937; margin: 0 0 1rem 0;">💼 Офисный переезд под ключ</h2>
                <p style="color: #374151;">Понимаем, что простой бизнеса стоит дорого. Поэтому:</p>
                <div style="display: grid; gap: 1rem; margin-top: 1.5rem;">
                    <div style="background: #fff; padding: 1rem; border-radius: 0.5rem;">🕒 Можем работать в выходные или ночью</div>
                    <div style="background: #fff; padding: 1rem; border-radius: 0.5rem;">💻 Бережно упакуем мониторы и серверы</div>
                </div>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🏢 Стоимость офисного переезда</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #4B5563 0%, #374151 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Стоимость</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Рабочее место (под ключ)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 55 ₾ / место</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Упаковка, перевозка, расстановка стола, кресла и ПК.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Кабинет руководителя</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 150 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Особо бережная упаковка кожаной мебели и техники.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Грузчики (офис)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 50 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Работа с такелажными ремнями.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Машина (Спринтер)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 50 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Высокий кузов. Вмещает до 6-8 рабочих мест.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Упаковка архива</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">по запросу</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Предоставляем коробки и маркируем документы.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Автомобили под батумские улицы</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚐</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Компактный Минивэн</h3>
                        <p style="color: #6B7280; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для Старого Батуми</p>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Легко паркуется на узких улицах (Мемеда Абашидзе, Парнаваз Мепе). Идеален для перевозки малых офисов, документации или серверного оборудования.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #F59E0B; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2); position: relative;">
                        <div style="position: absolute; top: -12px; right: 12px; background: #DC2626; color: #fff; padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 700;">ПОПУЛЯРНО</div>
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚚</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Мебельный Спринтер</h3>
                        <p style="color: #92400E; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для бизнес-центров</p>
                        <p style="color: #78350F; line-height: 1.6; margin: 0;">
                            Оптимален для большинства задач. Вмещает офисные столы, кресла и технику. Кузов герметичен — дождь не страшен.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚛</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Грузовик (20+ м³)</h3>
                        <p style="color: #6B7280; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для крупных переездов</p>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Если перевозите штаб-квартиру или филиал целиком. Подходит для маршрутов Батуми — Тбилиси.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Batumi-specific Features -->
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #1E40AF;">⭐ Почему бизнесу в Батуми удобно с нами</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">☔ Защита от влажности</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Батуми — влажный город. Мы используем усиленную упаковку (стрейч + пупырчатая пленка) для всей электроники и бумажных архивов, чтобы сырость не повредила имущество при транспортировке.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">🏢 Опыт работы в высотках</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Знаем специфику комплексов (Orbi, Alliance, Porta Tower). Умеем договариваться с администрацией о времени использования грузовых лифтов и подъезда к рампе.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Block 5: Process (4 Steps) -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">📋 Перевезем офис за 4 этапа</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F59E0B; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">1</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Оценка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Выезд менеджера или оценка по видео (WhatsApp/Telegram). Фиксируем цену.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F59E0B; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">2</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Подготовка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Привозим коробки заранее. Сотрудники пакуют личные вещи, мы разбираем мебель и пакуем технику.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F59E0B; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">3</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Переезд</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Работаем в выходные или ночью, чтобы утром в понедельник вы начали работу.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2); border: 2px solid #10B981;">
                        <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">4</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #065F46; font-size: 1.2rem;">Финал</h3>
                            <p style="margin: 0; color: #047857; line-height: 1.6;">
                                Расставляем мебель по плану, вывозим упаковку, подписываем Акт.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Можно ли переехать в выходные?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Да, мы рекомендуем переезды с пятницы вечера по воскресенье, чтобы не останавливать бизнес-процессы.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Выезжаете ли вы в Чакви / Гонио / Квариати?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Да, обслуживаем весь регион Аджарии.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Как вы перевозите мониторы и моноблоки?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #F59E0B;">
                            Экраны закрываем листами картона и оборачиваем воздушно-пузырчатой пленкой. Перевозим в коробках или зафиксированными в кузове.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #1F2937 0%, #374151 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <h2 style="color: #FCD34D; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">💼 Не останавливайте бизнес из-за переезда</h2>
                <p style="color: #E5E7EB; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Доверьте логистику профессионалам. Получите расчет стоимости и план переезда уже сегодня.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #FCD34D; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📄 Получить инвойс/расчет
                    </a>
                    <a href="tel:+995597048630" style="background: #fff; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить менеджеру
                    </a>
                </div>
            </div>
        `
    },


    "batumi_movers": {
        title: "Грузчики в Батуми: почасовая оплата, крепкие ребята",
        price: "от 50 ₾/час",
        icon: "users",
        badge: "Батуми",
        desc_short: "Услуги грузчиков в Батуми. Подъем на этаж без лифта, разгрузка фур, перестановка мебели. Трезвые и аккуратные.",
        content: `
            <!-- Block 1: Hero -->
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 style="color: #991B1B; margin: 0 0 1rem 0;">💪 Грузчики в Батуми</h2>
                <p style="color: #7F1D1D;">Нужно поднять диван на 5-й этаж старого дома на Руставели? Или разгрузить машину с товаром на рынке Хопа? Наши ребята справятся.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Прозрачные тарифы без скрытых доплат</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Цена</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Грузчик (Стандарт)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">50 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Погрузка/разгрузка вещей, коробок.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Подъем стройматериалов</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">сдельная</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Расчет за тонну или количество мешков/этажей.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Спуск/Подъем без лифта</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">2-5 ₾ / этаж</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Зависит от веса предмета (холодильник, диван).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Такелаж (Тяжести >100кг)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">от 100 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Пианино, сейфы, банкоматы (используем ремни).</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Разборка/Сборка</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">Входит в час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если заказана почасовая работа и есть инструмент.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #92400E; font-weight: 600;">⚠️ Важно: При работе в ночное время (после 22:00) тариф может быть увеличен.</p>
                </div>
            </div>

            <!-- Block 3: Services Grid -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🛠️ Решаем любые задачи с тяжестями в Батуми</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏗️</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Помощь при ремонте («Черный каркас»)</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Батуми — город строек. Поднимем мешки с цементом, песком, плитку и гипсокартон на любой этаж. Даже если лифт еще не включен или перегружен.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏠</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Квартирные задачи</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Перестановка мебели внутри квартиры, спуск старого дивана на мусорку, погрузка личных вещей в машину при переезде.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚚</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Разгрузка фур и газелей</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Приехал товар для магазина или ресторана? Оперативно разгрузим машину, отсортируем коробки и занесем на склад.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border: 2px solid #F59E0B; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Подъем в высотки (Orbi, Alliance)</h3>
                        <p style="color: #78350F; line-height: 1.6; margin: 0;">
                            Знаем специфику работы в апарт-отелях: где служебный вход, как договориться с охраной о грузовом лифте, как не испачкать коридоры.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Benefits -->
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #1E40AF;">⭐ Профессиональный подход к тяжелой работе</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">✅ Трезвость и Культура</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Никакого перегара. Наши ребята вежливые, опрятные и работают быстро, без лишних перекуров.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">✅ Инструмент и Ремни</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Приходим не с пустыми руками. Есть такелажные ремни для переноски шкафов (чтобы не царапать пол) и шуруповерты для разборки мебели.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3B82F6;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #1E40AF; font-size: 1.2rem;">✅ Работа в Старом городе</h3>
                        <p style="margin: 0; color: #1E3A8A; line-height: 1.7;">
                            Умеем заносить крупную мебель (диваны, столешницы) по узким винтовым лестницам старого Батуми, не повредив стены.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">📋 Как заказать бригаду</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">1</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Звонок/Заявка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Пишете в Telegram, что и в каком объеме нужно перенести.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">2</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Оценка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Если задача нестандартная (например, поднять 5 тонн плитки), мы называем сдельную цену заранее.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">3</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Выезд</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Бригада приезжает точно ко времени.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">4</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Работа</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Выполняем задачу.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2); border: 2px solid #10B981;">
                        <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">5</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #065F46; font-size: 1.2rem;">Оплата</h3>
                            <p style="margin: 0; color: #047857; line-height: 1.6;">
                                Оплата по факту выполненных работ (наличные или перевод).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Вы поднимаете стройматериалы, если лифт не работает?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, в новостройках это частая проблема. Мы осуществляем ручной подъем по лестнице. Стоимость рассчитывается индивидуально (зависит от этажа и веса).
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Минимальное время заказа?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Оплата почасовая за фактически отработанное время.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Можно ли заказать одного человека?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, если вам нужно просто помочь переставить шкаф или разгрузить легковую машину.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);">
                <h2 style="color: #FEF3C7; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">💪 Нужна физическая помощь?</h2>
                <p style="color: #FEE2E2; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Не срывайте спину — доверьте тяжести нам. Бригада будет у вас в течение часа.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #FEF3C7; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        👷 Вызвать грузчиков
                    </a>
                    <a href="tel:+995597048630" style="background: #fff; color: #DC2626; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить
                    </a>
                </div>
            </div>
        `
    },

    "tbilisi_moving": {
        title: "Квартирный переезд в Тбилиси и пригородам: от Глдани до Мцхеты под ключ",
        price: "от 70 ₾",
        icon: "home",
        badge: "ХИТ СТОЛИЦЫ",
        desc_short: "Организуем переезд по Тбилиси и пригородам. Знаем специфику столицы: пробки, парковку, узкие улочки Старого города. Гарантируем безопасность и сохранность вещей.",
        content: `
            <!-- Block 2: Pricing -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-8">Стоимость услуг в Тбилиси</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Грузчик-профи</h3>
                                <p class="text-sm text-gray-500">Аккуратная работа, помощь в упаковке</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-blue-600">от 50 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Оплата почасовая за фактически отработанное время.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Машина (Спринтер)</h3>
                                <p class="text-sm text-gray-500">Для 1-2 комнатной квартиры</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-blue-600">от 60 ₾</span>
                                <span class="text-xs text-gray-500">за час</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Вместительный фургон, защищенный кузов.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Упаковка</h3>
                                <p class="text-sm text-gray-500">Пленка-стрейч и пупырчатая пленка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-blue-600">от 5 ₾</span>
                                <span class="text-xs text-gray-500">м.п.</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Надежная защита от пыли и царапин.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Спуск/Подъем</h3>
                                <p class="text-sm text-gray-500">При наличии грузового лифта</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-2xl font-bold text-green-600">Бесплатно</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Без лифта — 3-7 ₾/этаж (зависит от веса).</p>
                    </div>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div class="mb-16 bg-gray-50 p-8 rounded-3xl">
                <h2 class="text-3xl font-bold text-center mb-8">Транспорт под условия столицы</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl mb-4">🚐</div>
                        <h3 class="font-bold text-lg mb-2">Компактный минивэн</h3>
                        <p class="text-gray-600 text-sm">Для Старого города и Сололаки. Легко проедет по узким улицам Авлабари и Мтацминды, заедет в подземный паркинг.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-400 relative">
                         <div class="absolute -top-3 right-4 bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded">ХИТ</div>
                        <div class="text-4xl mb-4">🚚</div>
                        <h3 class="font-bold text-lg mb-2">Мебельный фургон</h3>
                        <p class="text-gray-600 text-sm">Для районов Сабуртало, Ваке, Дигоми. Высокий кузов позволяет перевозить холодильники стоя.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl mb-4">🚛</div>
                        <h3 class="font-bold text-lg mb-2">Грузовик с гидробортом</h3>
                        <p class="text-gray-600 text-sm">Для больших переездов и тяжелых грузов (пианино, паллеты). Гидролифт поднимает тяжести с земли в кузов.</p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Features -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-center mb-10">Адаптированы к ритму столицы</h2>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🚦</div>
                        <h3 class="font-bold text-lg mb-2">Знаем пробки</h3>
                        <p class="text-gray-600">Планируем маршруты с учетом часов пик. Объездные пути помогают избежать Руставели и Чавчавадзе в час-пик.</p>
                    </div>
                    <div>
                        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🏢</div>
                        <h3 class="font-bold text-lg mb-2">Работа в новостройках</h3>
                        <p class="text-gray-600">Знаем правила ЖК и умеем договариваться с охраной об использовании грузового лифта (Axis, King David, Liberty).</p>
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
                        <div class="w-10 h-10 bg-black text-blue-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h4 class="font-bold">Заявка</h4>
                            <p class="text-sm text-gray-600">Пришлите фото вещей в Telegram или опишите объем переезда.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-blue-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h4 class="font-bold">Расчет</h4>
                            <p class="text-sm text-gray-600">Мы называем фиксированную цену с учетом района и этажности.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-blue-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h4 class="font-bold">Упаковка</h4>
                            <p class="text-sm text-gray-600">Приезжаем, упаковываем хрупкое, разбираем крупную мебель.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-black text-blue-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                            <h4 class="font-bold">Доставка</h4>
                            <p class="text-sm text-gray-600">Везем по оптимальному маршруту, избегая пробок.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                            <h4 class="font-bold">Новоселье</h4>
                            <p class="text-sm text-gray-600">Заносим, собираем мебель и расставляем по местам.</p>
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
                            <span>Работаете ли вы в новостройках с платными лифтами?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Да, но расходы на оплату лифта (чип-карты, пропуска) берет на себя заказчик.
                        </p>
                    </details>
                    
                    <details class="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold list-none">
                            <span>Выезжаете ли в пригороды (Мцхета, Рустави, Дигоми Масив)?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Да, обслуживаем все пригороды Тбилиси. Цена зависит от расстояния.
                        </p>
                    </details>

                    <details class="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
                        <summary class="flex justify-between items-center font-bold list-none">
                            <span>Как вы справляетесь с узкими улицами Старого города?</span>
                            <span class="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                            Для Сололаки и Авлабари мы используем компактные минивэны, которые легко проходят по узким улочкам.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl" style="background: linear-gradient(to right, #3b82f6, #2563eb);">
                <h2 class="text-3xl font-bold mb-4" style="color: #ffffff;">Планируете переезд в Тбилиси?</h2>
                <p class="text-lg mb-8 opacity-90" style="color: #ffffff;">Закажите машину заранее, чтобы забронировать удобное время и избежать часов пик.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 flex items-center justify-center gap-2">
                        <span>📱</span> Написать в Telegram
                    </a>
                    <a href="tel:+995597048630" class="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                        <span>📞</span> Позвонить
                    </a>
                </div>
            </div>
        `,
    },

    "tbilisi_office": {
        title: "Офисный переезд в Тбилиси: бизнес работает без пауз",
        price: "от 200 ₾",
        icon: "building",
        badge: "Тбилиси",
        desc_short: "Профессиональный переезд офиса в Тбилиси. Перевезем 100 рабочих мест за выходные. Сборка мебели, упаковка серверов.",
        content: `
            <!-- Block 1: Hero -->
            <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="color: #1E40AF; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">🏢 Переезд офиса "под ключ"</h2>
                <p style="color: #1E3A8A; font-size: 1.1rem; line-height: 1.6;">Понимаем, что каждый час простоя — это потеря денег. Поэтому мы организуем переезд так, чтобы в пятницу сотрудники выключили компьютеры в старом офисе, а в понедельник включили их в новом.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🏢 Стоимость офисного переезда</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Стоимость</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Рабочее место (под ключ)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 60 ₾ / место</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Упаковка, перевозка, расстановка стола, кресла и ПК.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Кабинет руководителя</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 200 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Особо бережная упаковка кожаной мебели и техники.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Грузчики (офис)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 50 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Работа с такелажными ремнями.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Машина (Спринтер)</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">от 60 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Высокий кузов. Вмещает до 6-8 рабочих мест.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Упаковка архива</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">по запросу</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Предоставляем коробки и маркируем документы.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🚚 Автомобили под улицы столицы</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚐</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Компактный Минивэн</h3>
                        <p style="color: #6B7280; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для Старого города</p>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Идеален для Сололаки, Мтацминды, Авлабари. Легко маневрирует по узким улицам и крутым подъемам. Подходит для перевозки документации, серверов и малых офисов.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); position: relative;">
                        <div style="position: absolute; top: -12px; right: 12px; background: #DC2626; color: #fff; padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 700;">ПОПУЛЯРНО</div>
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚚</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Мебельный Спринтер</h3>
                        <p style="color: #1E40AF; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для бизнес-центров</p>
                        <p style="color: #1E3A8A; line-height: 1.6; margin: 0;">
                            Оптимален для офисов в Сабуртало, Ваке, Дигоми. Вмещает офисные столы, кресла и технику. Высокий кузов для холодильников и шкафов.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚛</div>
                        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #000;">Грузовик (20+ м³)</h3>
                        <p style="color: #6B7280; font-size: 0.9rem; margin: 0 0 1rem 0; font-style: italic;">Для крупных переездов</p>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Если перевозите штаб-квартиру (50+ рабочих мест) или филиал целиком. Подходит для междугородних маршрутов Тбилиси — Батуми.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Tbilisi-specific Features -->
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #92400E;">⭐ Почему бизнесу в столице удобно с нами</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #D97706; font-size: 1.2rem;">🚦 Знаем маршруты и пробки</h3>
                        <p style="margin: 0; color: #78350F; line-height: 1.7;">
                            Тбилиси — город с интенсивным трафиком. Мы планируем маршрут с учетом часов пик (избегаем Руставели и Чавчавадзе в 8-10 утра и 18-20 вечера). Используем альтернативные пути для быстрой доставки.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #D97706; font-size: 1.2rem;">🏢 Опыт работы в бизнес-центрах</h3>
                        <p style="margin: 0; color: #78350F; line-height: 1.7;">
                            Знаем специфику работы в современных комплексах (Business Center Axis, King David Business Center, Liberty Tower). Умеем договариваться с администрацией о времени использования грузовых лифтов.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Block 5: Process (4 Steps) -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">📋 Перевезем офис за 4 этапа</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">1</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Оценка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Выезд менеджера в любой район Тбилиси или оценка по видео (WhatsApp/Telegram). Фиксируем цену и составляем план.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">2</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Подготовка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Привозим коробки заранее. Сотрудники пакуют личные вещи, мы разбираем мебель, маркируем и профессионально пакуем технику.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #3B82F6; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">3</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Переезд</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Работаем в выходные или ночью (с 22:00 до 06:00), чтобы утром в понедельник вы начали работу в новом офисе.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2); border: 2px solid #10B981;">
                        <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">4</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #065F46; font-size: 1.2rem;">Финал</h3>
                            <p style="margin: 0; color: #047857; line-height: 1.6;">
                                Расставляем мебель по утвержденному плану, подключаем технику, вывозим упаковочные материалы, подписываем Акт.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Можно ли переехать в выходные?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Да, мы работаем 24/7. Рекомендуем переезды с пятницы вечера по воскресенье, чтобы в понедельник бизнес работал в обычном режиме.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Работаете ли вы в отдаленных районах (Дигоми, Глдани, Варкетили)?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Да, обслуживаем все районы Тбилиси, включая периферийные зоны. Возможен выезд в пригороды (Рустави, Мцхета).
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Как вы перевозите серверное оборудование?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Используем антистатическую пленку и специальные ящики с амортизацией. Серверные шкафы (Rack) демонтируем и устанавливаем профессионально.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);">
                <h2 style="color: #FEF3C7; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">💼 Не останавливайте бизнес из-за переезда</h2>
                <p style="color: #DBEAFE; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Доверьте логистику профессионалам. Получите расчет стоимости и план переезда уже сегодня.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #FEF3C7; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📄 Получить инвойс/расчет
                    </a>
                    <a href="tel:+995597048630" style="background: #fff; color: #1E40AF; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить менеджеру
                    </a>
                </div>
            </div>
        `
    },

    "tbilisi_movers": {
        title: "Грузчики в Тбилиси: трезвые, крепкие, пунктуальные",
        price: "от 50 ₾/час",
        icon: "users",
        badge: "Тбилиси",
        desc_short: "Услуги грузчиков в Тбилиси. Разгрузка фур, подъем мебели на этаж, перестановка в квартире. Оплата почасовая.",
        content: `
            <!-- Block 1: Hero -->
            <div style="background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="color: #991B1B; margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 800;">💪 Зачем срывать спину?</h2>
                <p style="color: #7F1D1D; font-size: 1.1rem; line-height: 1.6;">Нужно поднять новое пианино на 9 этаж пешком, потому что оно не влезает в лифт? Или разгрузить фуру с товаром на рынке Лило? Наши ребята сделают это быстро и без лишних перекуров.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Прозрачные тарифы без скрытых доплат</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Услуга</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Цена</th>
                                <th style="padding: 1rem; text-align: left; font-size: 1.1rem;">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Грузчик (Стандарт)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">50 ₾ / час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Погрузка/разгрузка вещей, коробок.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Подъем стройматериалов</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">сдельная</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Расчет за тонну или количество мешков/этажей.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Спуск/Подъем без лифта</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">3-7 ₾ / этаж</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Зависит от веса предмета (холодильник, диван).</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Такелаж (Тяжести >100кг)</td>
                                <td style="padding: 1.2rem; color: #DC2626; font-weight: bold; font-size: 1.1rem;">от 120 ₾</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Пианино, сейфы, банкоматы (используем ремни).</td>
                            </tr>
                            <tr>
                                <td style="padding: 1.2rem; font-weight: 600;">Разборка/Сборка</td>
                                <td style="padding: 1.2rem; color: #059669; font-weight: bold; font-size: 1.1rem;">Входит в час</td>
                                <td style="padding: 1.2rem; color: #6B7280; font-size: 0.95rem;">Если заказана почасовая работа и есть инструмент.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #92400E; font-weight: 600;">⚠️ Важно: При работе в ночное время (после 22:00) тариф может быть увеличен.</p>
                </div>
            </div>

            <!-- Block 3: Services Grid -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🛠️ Решаем любые задачи с тяжестями в столице</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏗️</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Помощь на стройках («Черновой этап»)</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Тбилиси активно застраивается. Поднимем мешки с цементом, песком, блоки, плитку на любой этаж в районах Сабуртало, Дигоми, Глдани. Даже если лифт не работает.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏠</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Квартирные задачи</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Перестановка мебели, спуск старого дивана, погрузка личных вещей в машину. Работаем во всех районах: от Сололаки до Варкетили.
                        </p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚚</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Разгрузка фур на рынке Лило</h3>
                        <p style="color: #374151; line-height: 1.6; margin: 0;">
                            Приехал груз на Лило? Быстро разгрузим, отсортируем коробки и занесем на склад. Работаем с магазинами, ресторанами, оптовиками.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%); border: 2px solid #3B82F6; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 0.8rem 0; color: #000;">Подъем в бизнес-центры</h3>
                        <p style="color: #1E3A8A; line-height: 1.6; margin: 0;">
                            Знаем специфику Axis Tower, King David, Liberty Tower. Где служебный вход, как договориться о грузовом лифте, как работать без повреждений.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Benefits -->
            <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #92400E;">⭐ Профессиональный подход к тяжелой работе</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #D97706; font-size: 1.2rem;">✅ Трезвость и Культура</h3>
                        <p style="margin: 0; color: #78350F; line-height: 1.7;">
                            Никакого перегара. Наши ребята вежливые, опрятные и работают быстро, без лишних перекуров. Это норма для столицы.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #D97706; font-size: 1.2rem;">✅ Инструмент и Ремни</h3>
                        <p style="margin: 0; color: #78350F; line-height: 1.7;">
                            Приходим с такелажными ремнями для переноски тяжелой мебели (чтобы не царапать пол) и шуруповертами для разборки кроватей/шкафов.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #F59E0B;">
                        <h3 style="margin: 0 0 0.8rem 0; color: #D97706; font-size: 1.2rem;">✅ Работа в Старом городе</h3>
                        <p style="margin: 0; color: #78350F; line-height: 1.7;">
                            Умеем заносить крупную мебель по узким лестницам старых зданий Сололаки, Авлабари, Мтацминды, не повредив ни стены, ни вещи.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">📋 Как заказать бригаду</h2>
                <div style="display: grid; gap: 1.5rem; max-width: 900px; margin: 0 auto;">
                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">1</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Звонок/Заявка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Пишете в Telegram или звоните, что и куда нужно перенести/поднять.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">2</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Оценка</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Для нестандартных задач (например, поднять 10 тонн стройматериалов) называем точную сдельную цену.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">3</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Выезд</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Бригада приезжает вовремя (учитываем тбилисские пробки).
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #DC2626; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">4</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #000; font-size: 1.2rem;">Работа</h3>
                            <p style="margin: 0; color: #6B7280; line-height: 1.6;">
                                Быстро и аккуратно выполняем задачу.
                            </p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; align-items: start; background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2); border: 2px solid #10B981;">
                        <div style="background: #10B981; min-width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; color: #fff; flex-shrink: 0;">5</div>
                        <div>
                            <h3 style="margin: 0 0 0.5rem 0; color: #065F46; font-size: 1.2rem;">Оплата</h3>
                            <p style="margin: 0; color: #047857; line-height: 1.6;">
                                Оплата по факту (наличные, Bank of Georgia, TBC).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Поднимаете ли материалы в старых домах без лифта?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, это частая ситуация в Тбилиси (Сололаки, Мтацминда). Поднимаем вручную. Цена зависит от этажа и веса груза.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Работаете ли в отдаленных районах (Дигоми, Глдани, Варкетили)?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Да, обслуживаем все районы Тбилиси и пригороды (Рустави, Мцхета). Возможен выезд в тот же день.
                        </p>
                    </details>

                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Минимальное время заказа?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #DC2626;">
                            Оплата почасовая за фактически отработанное время.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div style="background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);">
                <h2 style="color: #FEF3C7; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">💪 Нужна физическая помощь?</h2>
                <p style="color: #FEE2E2; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Не срывайте спину — доверьте тяжести профессионалам. Бригада будет у вас в течение часа.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #FEF3C7; color: #000; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        👷 Вызвать грузчиков
                    </a>
                    <a href="tel:+995597048630" style="background: #fff; color: #DC2626; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить
                    </a>
                </div>
            </div>
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
                                <span class="block text-2xl font-bold text-yellow-600">от 50 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Оплата почасовая за фактически отработанное время.</p>
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
    intercity: {
        title: "Междугородние переезды по Грузии: Тбилиси ↔ Батуми, Кутаиси. Попутные грузы и отдельные машины",
        price: "от 80 ₾",
        icon: "truck",
        badge: null,
        desc_short: "Регулярные рейсы между городами. Сборные грузы от 1 коробки или переезд целой квартиры. Доставка от двери до двери.",
        content: `
            <!-- Block 2: Service Types -->
            <div style="background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%); padding: 2rem; border-radius: 1rem; margin-bottom: 3rem; border-left: 5px solid #3B82F6;">
                <h2 style="margin: 0 0 1.5rem 0; color: #1E3A8A; font-size: 1.8rem; text-align: center;">🚚 Два способа перевозки</h2>
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <h3 style="margin: 0 0 0.5rem 0; color: #1D4ED8; font-size: 1.4rem;">1. 📦 Сборный груз (Попутно)</h3>
                        <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #059669;">Выгодно для небольших вещей</p>
                        <p style="margin: 0 0 1rem 0; color: #374151; line-height: 1.6;">Идеально, если вам нужно передать холодильник, диван, стиральную машину или 5-10 коробок с личными вещами. Мы кладем ваш груз в машину, которая уже едет в нужный город.</p>
                        <ul style="margin: 0; padding-left: 1.2rem; color: #4B5563;">
                            <li style="margin-bottom: 0.3rem;"><strong>Цена:</strong> Дешевле на 50%.</li>
                            <li><strong>Срок:</strong> Доставка в течение 1-2 дней.</li>
                        </ul>
                    </div>

                    <div style="background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <h3 style="margin: 0 0 0.5rem 0; color: #B91C1C; font-size: 1.4rem;">2. 🚀 Отдельная машина (Квартирный переезд)</h3>
                        <p style="margin: 0 0 0.5rem 0; font-weight: bold; color: #059669;">Для полного переезда семьи</p>
                        <p style="margin: 0 0 1rem 0; color: #374151; line-height: 1.6;">Вы заказываете машину целиком. В кузове едут только ваши вещи. Машина подается в удобное вам время, грузится и сразу выезжает в пункт назначения.</p>
                        <ul style="margin: 0; padding-left: 1.2rem; color: #4B5563;">
                            <li style="margin-bottom: 0.3rem;"><strong>Цена:</strong> Оплата за рейс.</li>
                            <li><strong>Бонус:</strong> Вы можете ехать в кабине с водителем бесплатно.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">🇬🇪 Популярные направления перевозок</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏠</div>
                        <h3 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.2rem;">Сезонный переезд</h3>
                        <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6;">Перевозка вещей на дачу или на море (Тбилиси ↔ Батуми) в начале и конце сезона.</p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛍️</div>
                        <h3 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.2rem;">Доставка из магазинов Тбилиси</h3>
                        <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6;">Купили мебель в Domino, Gorgia, IKEA (доставка) или технику в Тбилиси? Мы заберем её со склада магазина и привезем к вам в Батуми, Кутаиси или Зугдиди.</p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📦</div>
                        <h3 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.2rem;">Личные вещи и Посылки</h3>
                        <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6;">Отправка коробок, чемоданов, велосипедов и колясок родственникам в другой город.</p>
                    </div>

                    <div style="background: #fff; border: 2px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛋️</div>
                        <h3 style="color: #000; margin: 0 0 0.8rem 0; font-size: 1.2rem;">Мебель и Техника</h3>
                        <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6;">Перевозка крупногабаритных предметов: шкафы, кровати, пианино, холодильники (только стоя!).</p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Pricing -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">💰 Ориентировочные цены (Отдельная машина)</h2>
                <div style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; min-width: 600px;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); color: #fff;">
                                <th style="padding: 1rem; text-align: left;">Направление</th>
                                <th style="padding: 1rem; text-align: left;">Спринтер (1.5 т)</th>
                                <th style="padding: 1rem; text-align: left;">Грузовик (3-5 т)</th>
                                <th style="padding: 1rem; text-align: left;">Попутный груз (от)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Тбилиси ↔ Батуми</td>
                                <td style="padding: 1.2rem;">от 450 ₾</td>
                                <td style="padding: 1.2rem;">от 700 ₾</td>
                                <td style="padding: 1.2rem; font-weight: bold; color: #059669;">от 80 ₾</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Тбилиси ↔ Кутаиси</td>
                                <td style="padding: 1.2rem;">от 300 ₾</td>
                                <td style="padding: 1.2rem;">от 500 ₾</td>
                                <td style="padding: 1.2rem; font-weight: bold; color: #059669;">от 50 ₾</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB;">
                                <td style="padding: 1.2rem; font-weight: 600;">Тбилиси ↔ Поти</td>
                                <td style="padding: 1.2rem;">от 400 ₾</td>
                                <td style="padding: 1.2rem;">от 650 ₾</td>
                                <td style="padding: 1.2rem; font-weight: bold; color: #059669;">от 70 ₾</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #E5E7EB; background: #FAFAFA;">
                                <td style="padding: 1.2rem; font-weight: 600;">Батуми ↔ Кутаиси</td>
                                <td style="padding: 1.2rem;">от 200 ₾</td>
                                <td style="padding: 1.2rem;">от 350 ₾</td>
                                <td style="padding: 1.2rem; font-weight: bold; color: #059669;">от 50 ₾</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; color: #92400E; font-weight: 600;">⚠️ Для попутного груза цена зависит от места, которое занимают ваши вещи.</p>
                </div>
            </div>

            <!-- Block 5: Safety -->
            <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 3rem; color: #fff;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #fff;">🛡️ Ваши вещи доедут целыми</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.2);">
                        <h3 style="margin: 0 0 0.8rem 0; font-size: 1.2rem;">🔗 Крепление ремнями</h3>
                        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">На трассе и серпантинах (Рикоти, Гомбори) груз испытывает тряску. Мы обязательно фиксируем высокую мебель и технику стяжными ремнями к борту.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.2);">
                        <h3 style="margin: 0 0 0.8rem 0; font-size: 1.2rem;">📦 Упаковка</h3>
                        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">Для межгорода упаковка обязательна! Мы используем картон и плотный стрейч, чтобы вещи не терлись друг о друга в пути.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.2);">
                        <h3 style="margin: 0 0 0.8rem 0; font-size: 1.2rem;">🚚 Опытные водители</h3>
                        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">Водители знают сложные участки трассы и выбирают безопасный скоростной режим.</p>
                    </div>
                </div>
            </div>

            <!-- Block 6: Steps -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">📋 Как заказать машину</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center;">
                    <div style="flex: 1; min-width: 200px; text-align: center; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F3F4F6; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-weight: bold; color: #374151;">1</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Оценка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Пришлите фото вещей или список в Telegram. Укажите маршрут (откуда — куда).</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; text-align: center; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F3F4F6; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-weight: bold; color: #374151;">2</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Выбор тарифа</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Мы предложим цену за отдельную машину или за "попутку".</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; text-align: center; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F3F4F6; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-weight: bold; color: #374151;">3</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Погрузка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Приезжаем, упаковываем, грузим.</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; text-align: center; background: #fff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <div style="background: #F3F4F6; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-weight: bold; color: #374151;">4</div>
                        <h3 style="margin-bottom: 0.5rem; font-weight: bold;">Доставка</h3>
                        <p style="color: #6B7280; font-size: 0.95rem;">Встречаем вас в другом городе и заносим вещи в дом.</p>
                    </div>
                </div>
            </div>

            <!-- Block 7: FAQ -->
            <div style="margin-bottom: 3rem;">
                <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #000;">❓ Частые вопросы</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Сколько ждать "попутную" машину?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Обычно рейсы Тбилиси-Батуми ходят каждые 1-2 дня.
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Вы возите домашних животных?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            В кабине (с хозяином) — да, по договоренности. В кузове животных не возим.
                        </p>
                    </details>
                    <details style="background: #fff; margin-bottom: 1rem; border-radius: 0.75rem; border: 1px solid #E5E7EB; padding: 1.2rem; cursor: pointer;">
                        <summary style="font-weight: 600; font-size: 1.1rem; color: #000; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                            <span>Можно ли передать документы или ключи?</span>
                            <span style="color: #6B7280;">▼</span>
                        </summary>
                        <p style="margin: 1rem 0 0 0; color: #6B7280; line-height: 1.7; padding-left: 0.5rem; border-left: 3px solid #3B82F6;">
                            Да, мы работаем как курьерская служба для мелких посылок между городами.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 8: CTA -->
            <div style="background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%); padding: 3rem 2rem; border-radius: 1.5rem; text-align: center; box-shadow: 0 10px 30px rgba(30, 58, 138, 0.3);">
                <h2 style="color: #BFDBFE; margin: 0 0 1rem 0; font-size: 2rem; font-weight: 700;">🌍 Едете в другой город?</h2>
                <p style="color: #DBEAFE; font-size: 1.1rem; margin: 0 0 2rem 0; line-height: 1.6;">
                    Узнайте стоимость перевозки ваших вещей прямо сейчас.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" style="background: #60A5FA; color: #fff; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        🚚 Узнать цену (Telegram)
                    </a>
                    <a href="tel:+995597048630" style="background: #fff; color: #1E3A8A; padding: 1rem 2rem; border-radius: 2rem; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s;">
                        📞 Позвонить
                    </a>
                </div>
            </div>
        `
    }
};

export type ServiceSlug = keyof typeof servicesData;
