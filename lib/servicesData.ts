export const servicesData = {
    taxi: {
        title: "Грузовое такси в Тбилиси и Батуми: подача машины за 30 минут. Перевезем от 1 коробки до дивана",
        price: "от 40 ₾",
        icon: "truck",
        badge: null,
        desc_short: "Работаем по всей Грузии: Батуми, Тбилиси, Кутаиси и другие города. Быстрая подача машины для перевозки покупок из магазинов, доставка мебели и техники. Грузовое такси + доставка покупок.",
        content: `
            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl mb-8 border-l-4 border-amber-500">
                <h2 class="mb-4 text-black font-bold text-2xl">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p class="m-0 text-gray-700 leading-relaxed">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6">
                    <h3 class="mb-3 text-black font-bold text-xl">🛋️ Мебель</h3>
                    <p class="mb-2 text-gray-700 leading-relaxed font-bold">
                        Ashley, JYSK, Comforter
                    </p>
                    <p class="m-0 text-gray-500 text-sm">
                        Возим: диваны, кровати, шкафы, кухонные гарнитуры, матрасы
                    </p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6">
                    <h3 class="mb-3 text-black font-bold text-xl">📺 Магазины техники</h3>
                    <p class="mb-2 text-gray-700 leading-relaxed font-bold">
                        Alta, Elit Electronics, MetroMart
                    </p>
                    <p class="m-0 text-gray-500 text-sm">
                        Возим: холодильники, стиральные машины, большие TV, посудомойки
                    </p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6">
                    <h3 class="mb-3 text-black font-bold text-xl">🛒 Рынки и Second Hand</h3>
                    <p class="mb-2 text-gray-700 leading-relaxed font-bold">
                        MyMarket, Сухой мост, Lilo Market
                    </p>
                    <p class="m-0 text-gray-500 text-sm">
                        Вывозим крупные покупки с барахолок и б/у рынков
                    </p>
                </div>
            </div>

            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl mb-12 border-2 border-amber-300 max-w-4xl mx-auto">
                <h3 class="mb-4 text-black font-bold text-xl">📱 Доставка без вашего участия</h3>
                <p class="m-0 text-gray-700 leading-relaxed">
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
            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl mb-8 border-l-4 border-amber-500">
                <h2 class="mb-4 text-black font-bold text-2xl">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p class="m-0 text-gray-700 leading-relaxed">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">💰 Фиксированные цены на перевозку</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                                <th class="p-4 text-left text-lg">Тип авто</th>
                                <th class="p-4 text-left text-lg">Стоимость</th>
                                <th class="p-4 text-left text-lg">Для чего подходит</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Мини-фургон (Caddy)</td>
                                <td class="p-5 text-amber-500 font-bold text-lg">от 30 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Стиральная машина, 10 мешков смесей, личные вещи, покупки из супермаркета.</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Микроавтобус (Transit)</td>
                                <td class="p-5 text-amber-500 font-bold text-lg">от 45 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Диван, холодильник, кровать, мебель для одной комнаты.</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Бортовая / Самосвал</td>
                                <td class="p-5 text-amber-500 font-bold text-lg">от 60 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Арматура, трубы, доски, сыпучие материалы (песок/щебень).</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Помощь водителя</td>
                                <td class="p-5 text-green-500 font-bold text-lg">+10-20 ₾</td>
                                <td class="p-5 text-gray-500 text-sm">Если нужно помочь подать вещи из кузова (не полноценная работа грузчика).</td>
                            </tr>
                            <tr>
                                <td class="p-5 font-semibold">Почасовая аренда</td>
                                <td class="p-5 text-blue-500 font-bold text-lg">от 40 ₾ / час</td>
                                <td class="p-5 text-gray-500 text-sm">Если у вас много точек погрузки/выгрузки.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-amber-100 border-l-4 border-amber-500 p-4 mt-4 rounded-lg">
                    <p class="m-0 text-amber-800 font-semibold">⚠️ Цена указана за рейс по городу (до 5-7 км). Выезд в Махинджаури, Чакви или Гонио рассчитывается отдельно.</p>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🚚 Когда вам нужно грузовое такси?</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">🛒</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Доставка из строительных магазинов</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Купили плитку, ламинат или цемент в Domino, Gorgia или Modus? Очередь на доставку магазина — 2 дня. Мы приедем через 30 минут, заберем товар и довезем до подъезда.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">🛋️</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Покупки мебели и техники</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Заберем диван из мебельного салона или холодильник из Metro City / Carrefour. Везем аккуратно, техника фиксируется ремнями.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">📦</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Малый переезд</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Нужно перевезти чемоданы и коробки на новую квартиру? Зачем заказывать большую машину? Мини-фургон идеально подойдет и сэкономит бюджет.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-500 rounded-2xl p-6 shadow-md">
                        <div class="text-4xl mb-4">🏍️</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Перевозка инвентаря</h3>
                        <p class="text-amber-900 leading-relaxed m-0">
                            Перевезем мопед, велосипеды, сап-борды или туристическое снаряжение в любую точку Аджарии.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Fleet -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🚗 Машины под любой груз</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="bg-white border-l-4 border-amber-300 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">1. «Каблук» (VW Caddy / Ford Connect)</h3>
                        <p class="m-0 mb-3 text-gray-700 leading-relaxed">
                            Маленький, юркий. Заедет в любой подземный паркинг новостроек (где ограничение по высоте 2м) и проедет по узким улочкам Старого Батуми.
                        </p>
                        <p class="m-0 text-gray-500 font-semibold">Вмещает: 2 пассажира + 500 кг груза.</p>
                    </div>

                    <div class="bg-white border-l-4 border-blue-500 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">2. Грузовой бус (Ford Transit / Sprinter)</h3>
                        <p class="m-0 mb-3 text-gray-700 leading-relaxed">
                            Классическое грузовое такси. Высокий потолок — холодильник встает стоя.
                        </p>
                        <p class="m-0 text-gray-500 font-semibold">Вмещает: 2 пассажира + 1.5 тонны груза.</p>
                    </div>

                    <div class="bg-white border-l-4 border-gray-500 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">3. Открытый борт</h3>
                        <p class="m-0 text-gray-700 leading-relaxed">
                            Для негабаритных грузов (длинные трубы, доски) или верхней погрузки краном.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Benefits -->
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-blue-800 font-bold">⭐ Удобнее, чем обычное такси</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">🙋♂️ Едьте пассажиром</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            В кабине всегда есть 1-2 чистых места для вас. Не нужно тратить деньги на отдельное такси, чтобы сопровождать груз.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">⚡️ Срочная подача</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Машины дежурят в разных районах Батуми (Химшиашвили, Багратиони, Чавчавадзе). Среднее время подачи — 20-30 минут.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">🛡 Чистые кузова</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Мы не возим мусор в тех же машинах, в которых возим мебель. Для мусора у нас отдельный транспорт.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Водитель поможет разгрузить?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Водитель — не грузчик, его задача довезти. Но за небольшую доплату он поможет подать вещи из машины. Если нужен полноценный подъем на этаж — закажите услугу с грузчиком.
                        </div>
                    </details>

                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Как вы работаете с магазинами (Domino/Gorgia)?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Вы можете сами быть в магазине или просто скинуть нам фото чека и накладной. Мы заберем товар сами и привезем вам (по предоплате товара).
                        </div>
                    </details>

                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Везете ли вы в Сарпи/Кобулети?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Да, это считается междугородним рейсом. Цену рассчитаем заранее.
                        </div>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-black to-gray-800 p-12 rounded-3xl text-center shadow-2xl">
                <h2 class="text-amber-300 mb-4 text-3xl font-bold">🚚 Машина уже рядом</h2>
                <p class="text-gray-200 text-lg mb-8 leading-relaxed">
                    Не ждите доставку магазина сутками. Перевезите свои покупки прямо сейчас.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        🚚 Вызвать такси (Telegram)
                    </a>
                    <a href="tel:+995597048630" class="bg-amber-300 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
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
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl mb-8 border-l-4 border-blue-500">
                <h2 class="mb-4 text-blue-800 font-bold text-xl">⚡ Когда вам нужно грузовое такси, а не переезд?</h2>
                <p class="m-0 text-blue-900 leading-relaxed">Не хотите заказывать полноценный переезд из-за пары коробок? Грузовое такси — это дешевле, быстрее и проще!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">💰 Фиксированные цены на перевозку</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                                <th class="p-4 text-left text-lg">Тип авто</th>
                                <th class="p-4 text-left text-lg">Стоимость</th>
                                <th class="p-4 text-left text-lg">Для чего подходит</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Мини-фургон (Caddy)</td>
                                <td class="p-5 text-blue-500 font-bold text-lg">от 35 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Стиральная машина, 10 мешков смесей, личные вещи, покупки из супермаркета.</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Микроавтобус (Transit)</td>
                                <td class="p-5 text-blue-500 font-bold text-lg">от 50 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Диван, холодильник, кровать, мебель для одной комнаты.</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Бортовая / Самосвал</td>
                                <td class="p-5 text-blue-500 font-bold text-lg">от 70 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Арматура, трубы, доски, сыпучие материалы (песок/щебень).</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Помощь водителя</td>
                                <td class="p-5 text-green-500 font-bold text-lg">+15-25 ₾</td>
                                <td class="p-5 text-gray-500 text-sm">Если нужно помочь подать вещи из кузова (не полноценная работа грузчика).</td>
                            </tr>
                            <tr>
                                <td class="p-5 font-semibold">Почасовая аренда</td>
                                <td class="p-5 text-purple-500 font-bold text-lg">от 45 ₾ / час</td>
                                <td class="p-5 text-gray-500 text-sm">Если у вас много точек погрузки/выгрузки.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4 rounded-lg">
                    <p class="m-0 text-blue-800 font-semibold">⚠️ Цена указана за рейс по городу (до 7-10 км). Выезд в Рустави, Мцхету или Дигоми рассчитывается отдельно. Учитываем время в пробках.</p>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🚚 Когда вам нужно грузовое такси?</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">🛒</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Доставка из строительных магазинов</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Купили плитку, ламинат или цемент в Domino, Gorgia или Modus? Очередь на доставку магазина — 2-3 дня. Мы приедем через 40 минут, заберем товар и довезем до подъезда.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">🛋️</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Покупки мебели и техники</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Заберем диван из мебельного салона или холодильник из Metro City / Carrefour / East Point. Везем аккуратно, техника фиксируется ремнями.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-4xl mb-4">📦</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Малый переезд</h3>
                        <p class="text-gray-700 leading-relaxed m-0">
                            Нужно перевезти чемоданы и коробки на новую квартиру в другой район? Зачем заказывать большую машину? Мини-фургон идеально подойдет и сэкономит бюджет.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-500 rounded-2xl p-6 shadow-md">
                        <div class="text-4xl mb-4">🏢</div>
                        <h3 class="text-xl font-bold mb-3 text-black">Доставка в офис/бизнес-центр</h3>
                        <p class="text-blue-900 leading-relaxed m-0">
                            Доставим оргтехнику, мебель или документы в Axis Tower, King David, Liberty Tower, Pixel. Знаем все правила въезда в бизнес-центры.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Fleet -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🚗 Машины под любой груз</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="bg-white border-l-4 border-blue-400 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">1. «Каблук» (VW Caddy / Ford Connect)</h3>
                        <p class="m-0 mb-3 text-gray-700 leading-relaxed">
                            Маленький, юркий. Идеален для узких улиц Старого Тбилиси (Сололаки, Авлабари). Заедет в любой подземный паркинг.
                        </p>
                        <p class="m-0 text-gray-500 font-semibold">Вмещает: 2 пассажира + 500 кг груза.</p>
                    </div>

                    <div class="bg-white border-l-4 border-blue-600 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">2. Грузовой бус (Ford Transit / Sprinter)</h3>
                        <p class="m-0 mb-3 text-gray-700 leading-relaxed">
                            Классическое грузовое такси. Высокий потолок — холодильник встает стоя. Подходит для доставки по всем районам столицы.
                        </p>
                        <p class="m-0 text-gray-500 font-semibold">Вмещает: 2 пассажира + 1.5 тонны груза.</p>
                    </div>

                    <div class="bg-white border-l-4 border-gray-500 p-6 rounded-2xl shadow-sm">
                        <h3 class="m-0 mb-3 text-black font-bold text-xl">3. Открытый борт</h3>
                        <p class="m-0 text-gray-700 leading-relaxed">
                            Для негабаритных грузов (длинные трубы, доски) или верхней погрузки краном на стройках в Дигоми,  Глдани.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Benefits -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-blue-800 font-bold">⭐ Удобнее, чем обычное такси</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">🙋♂️ Едьте пассажиром</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            В кабине всегда есть 1-2 чистых места для вас. Не нужно тратить деньги на отдельное такси, чтобы сопровождать груз.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">🚦 Учитываем пробки</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Машины дежурят в разных районах Тбилиси (Сабуртало, Ваке, Глдани, Дигоми). Знаем все объездные пути. Среднее время подачи — 30-40 минут.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500">
                        <h3 class="m-0 mb-3 text-blue-800 font-bold text-xl">🛡 Чистые кузова</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Мы не возим мусор в тех же машинах, в которых возим мебель. Для мусора у нас отдельный транспорт.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Водитель поможет разгрузить?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Водитель — не грузчик, его задача довезти. Но за небольшую доплату он поможет подать вещи из машины. Если нужен полноценный подъем на этаж — закажите услугу с грузчиком.
                        </div>
                    </details>

                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Как вы работаете с магазинами (Domino/Gorgia)?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Вы можете сами быть в магазине или просто скинуть нам фото чека и накладной. Мы заберем товар сами и привезем вам (по предоплате товара).
                        </div>
                    </details>

                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Везете ли вы в Рустави/Мцхету?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Да, это считается межгородним рейсом. Цену рассчитаем заранее с учетом расстояния.
                        </div>
                    </details>

                    <details class="bg-white mb-4 rounded-xl border border-gray-200 p-5 cursor-pointer group">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Учитываете ли пробки в цене?</span>
                            <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Фиксированная цена уже включает среднее время в пути с учетом пробок. Заранее планируем маршрут через объездные пути, если основная дорога перегружена.
                        </div>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-blue-900 to-blue-800 p-12 rounded-3xl text-center shadow-2xl">
                <h2 class="text-blue-200 mb-4 text-3xl font-bold">🚚 Машина уже в пути</h2>
                <p class="text-blue-100 text-lg mb-8 leading-relaxed">
                    Не ждите доставку магазина днями. Перевезите свои покупки по столице прямо сейчас.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-blue-400 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        🚚 Вызвать такси (Telegram)
                    </a>
                    <a href="tel:+995597048630" class="bg-blue-200 text-blue-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
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
            <!-- DESKTOP CONTENT (HIDDEN ON MOBILE) -->
            <div class="hidden md:block">
                <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-10 rounded-2xl mb-12 border-l-4 border-amber-500 shadow-sm">
                    <h2 class="mb-6 text-black font-bold text-3xl">🏠 Почему это не просто перевозка вещей</h2>
                    <p class="mb-4 text-lg leading-relaxed text-gray-700">
                        <strong class="text-amber-700">Можно позвать соседа.</strong> И повредить спину при спуске дивана с 5 этажа. Или поцарапать новый ламинат углом шкафа. Или разбить экран телевизора, потому что "показалось, что так хватит".
                    </p>
                    <p class="mb-4 text-lg leading-relaxed text-gray-700">
                        <strong class="text-black">А можно доверить это профессионалам</strong>, которые перевозят мебель каждый день. Мы <strong>несем материальную ответственность</strong> за каждую вещь. У нас свои инструменты для разборки, упаковочные материалы и чистые фургоны с обшивкой (чтобы мебель не царапалась при транспортировке).
                    </p>
                    <p class="m-0 text-base italic text-gray-500">
                        Вы платите не за "погрузить коробки". Вы платите за спокойствие и гарантию, что всё доедет целым.
                    </p>
                </div>

                <h2 class="text-center text-4xl mb-8 text-black font-bold">🔧 Детальный процесс работы</h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6 shadow-sm">
                        <div class="flex gap-6 items-start">
                             <div class="bg-amber-300 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-black">1</div>
                            <div class="flex-1">
                                <h3 class="mb-4 text-black font-bold text-2xl">Подготовка и разборка мебели</h3>
                                <p class="mb-3 text-gray-700 leading-relaxed">
                                    Приезжаем с <strong>набором инструментов</strong>: шуруповерты, гаечные ключи, отвертки. Снимаем дверцы шкафов, разбираем большие кровати, демонтируем столешницы.
                                </p>
                                <p class="m-0 text-gray-500 leading-relaxed">
                                    <strong class="text-black">Важно:</strong> Всю фурнитуру (болты, гайки, петли) складываем в <em>отдельные подписанные пакеты</em> и приклеиваем их скотчем к соответствующей мебели. Вы не будете искать "те самые болты" при сборке.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border-2 border-amber-300 rounded-2xl p-8 mb-6 shadow-md">
                        <div class="flex gap-6 items-start">
                            <div class="bg-amber-300 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-black">2</div>
                            <div class="flex-1">
                                <h3 class="mb-4 text-black font-bold text-2xl">Профессиональная упаковка</h3>
                                
                                <div class="bg-amber-50 p-4 rounded-lg mb-4">
                                    <p class="mb-2 font-bold text-amber-800">📦 Корпусная мебель</p>
                                    <p class="m-0 text-amber-900 text-sm">Углы защищаем картоном, плоскости обматываем стрейч-пленкой (5-7 слоев для стекла).</p>
                                </div>

                                <div class="bg-amber-50 p-4 rounded-lg mb-4">
                                    <p class="mb-2 font-bold text-amber-800">🛋️ Мягкая мебель</p>
                                    <p class="m-0 text-amber-900 text-sm">Плотная стрейч-пленка от пыли и влаги. Особенно важно в климате Батуми — защита от влажности при перевозке.</p>
                                </div>

                                <div class="bg-amber-50 p-4 rounded-lg mb-4">
                                    <p class="mb-2 font-bold text-amber-800">📺 Техника (TV, мониторы)</p>
                                    <p class="m-0 text-amber-900 text-sm">Воздушн о-пузырчатая пленка ("пупырка") + лист картона для защиты экрана. Укладываем вертикально.</p>
                                </div>

                                <div class="bg-amber-50 p-4 rounded-lg">
                                    <p class="mb-2 font-bold text-amber-800">🍷 Посуда и хрупкое</p>
                                    <p class="m-0 text-amber-900 text-sm">Каждый бокал заворачиваем в бумагу/пленку. Укладываем в коробки с наполнителем (мятая бумага или пенопласт).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
                        <div class="flex gap-6 items-start">
                            <div class="bg-amber-300 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-black">3</div>
                            <div class="flex-1">
                                <h3 class="mb-4 text-black font-bold text-2xl">Бережная погрузка</h3>
                                <p class="mb-3 text-gray-700 leading-relaxed">
                                    Используем <strong>такелажные ремни</strong> для переноски крупных предметов — так мы не бьем углы стен в подъезде и не давим пальцы.
                                </p>
                                <p class="m-0 text-gray-500 leading-relaxed">
                                    В кузове укладываем вещи <em>"тетрисом"</em> (тяжелое вниз, легкое сверху) и фиксируем всё <strong>стяжными ремнями к борту</strong>, чтобы ничего не сместилось при торможении.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
                        <div class="flex gap-6 items-start">
                            <div class="bg-amber-300 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-black">4</div>
                            <div class="flex-1">
                                <h3 class="mb-4 text-black font-bold text-2xl">Аккуратная транспортировка</h3>
                                <p class="m-0 text-gray-700 leading-relaxed">
                                    Наши водители ездят плавно, без резких торможений. Знаем дороги и объездные маршруты, чтобы избежать лежачих полицейских с грузом.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                        <div class="flex gap-6 items-start">
                            <div class="bg-amber-300 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-black">5</div>
                            <div class="flex-1">
                                <h3 class="mb-4 text-black font-bold text-2xl">Финал: сборка и расстановка</h3>
                                <p class="mb-3 text-gray-700 leading-relaxed">
                                    Поднимаем всё на нужный этаж, собираем мебель обратно (кровати, шкафы), расставляем по комнатам согласно вашему плану.
                                </p>
                                <p class="m-0 text-gray-500 leading-relaxed">
                                    <strong>Бонус:</strong> Весь использованный скотч, пленку и картона забираем с собой — вам не придется выносить горы мусора.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="text-center text-4xl mb-8 text-black font-bold">📋 Что мы перевозим: особые случаи</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
                    <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                        <div class="text-5xl mb-4">🎹</div>
                        <h3 class="text-black mb-4 font-bold text-xl">Крупногабаритные вещи</h3>
                        <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                            <li class="mb-2">• Пианино (вертикальные и рояли)</li>
                            <li class="mb-2">• Сейфы до 300 кг</li>
                            <li class="mb-2">• Неразборные диваны</li>
                            <li>• Холодильники Side-by-Side</li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 border-2 border-amber-300">
                        <div class="text-5xl mb-4">💎</div>
                        <h3 class="text-black mb-4 font-bold text-xl">Хрупкие и ценные вещи</h3>
                        <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                            <li class="mb-2">• Зеркала во весь рост</li>
                            <li class="mb-2">• Аквариумы (слив воды обязателен)</li>
                            <li class="mb-2">• Антикварная мебель</li>
                            <li>• Картины в рамах</li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                        <div class="text-5xl mb-4">👕</div>
                        <h3 class="text-black mb-4 font-bold text-xl">Личные вещи и одежда</h3>
                        <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                            <li class="mb-2">• Одежда (предоставляем коробки)</li>
                            <li class="mb-2">• Гардеробные короба с вешалками</li>
                            <li class="mb-2">• Обувь и аксессуары</li>
                            <li>• Документы (опечатанные коробки)</li>
                        </ul>
                    </div>
                </div>

                <h2 class="text-center text-4xl mb-8 text-black font-bold">🚛 Наш арсенал: техника и инструменты</h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
                        <h3 class="mb-4 text-black font-bold text-2xl">🚐 Автопарк</h3>
                        <p class="mb-4 text-gray-700 leading-relaxed">
                            У нас есть машины разного объема: от минивэна (для студии) до 20-кубового фургона (для 3-комнатной квартиры). Все машины <strong>чистые, сухие, с обшивкой внутри</strong> — ваша мебель не поцарапается о металлический борт.
                        </p>
                        <p class="m-0 text-gray-500 text-sm italic">
                            Машины проходят ежедневную проверку технического состояния.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                        <h3 class="mb-4 text-black font-bold text-2xl">🔧 Инструменты и оборудование</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Набор ключей и отверток</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Аккумуляторные шуруповерты</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Такелажные ремни</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Тележки (рохли)</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Стрейч и пупырчатая пленка</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <p class="m-0 text-gray-700"><strong>•</strong> Картонные листы и коробки</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ FAQ: Нюансы сервиса</h2>
                
                <div class="max-w-4xl mx-auto mb-12 space-y-4">
                    <div class="bg-white border-l-4 border-amber-300 rounded-lg p-6 shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">Как подготовить холодильник к переезду?</h3>
                        <p class="m-0 text-gray-600 leading-relaxed">
                            <strong>Ответ:</strong> За сутки до переезда разморозьте его, вымойте и высушите. Выньте все съемные полки и ящики — их упакуем отдельно. Дверцу фиксируем стрейчем.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-amber-300 rounded-lg p-6 shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">Нужно ли вынимать вещи из комода?</h3>
                        <p class="m-0 text-gray-600 leading-relaxed">
                            <strong>Ответ:</strong> Желательно. Комод с вещами становится очень тяжелым, а направляющие ящиков могут сломаться от веса при переноске. Лучше переложить вещи в коробки.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-amber-300 rounded-lg p-6 shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">Как вы считаете время работы?</h3>
                        <p class="m-0 text-gray-600 leading-relaxed">
                            <strong>Ответ:</strong> Время начинается с момента прибытия бригады к вам. Если лифт платный или не работает — предупреждаем о доплате за спуск/подъем по этажам <em>заранее</em>, до начала работ.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-amber-300 rounded-lg p-6 shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">Что делать с комнатными цветами?</h3>
                        <p class="m-0 text-gray-600 leading-relaxed">
                            <strong>Ответ:</strong> Перевозим их последними (чтобы не стояли в душном кузове). Горшки фиксируем в коробках, чтобы земля не рассыпалась. Крупные растения можно обмотать пленкой.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-amber-300 rounded-lg p-6 shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">Можно ли перевезти аквариум с рыбами?</h3>
                        <p class="m-0 text-gray-600 leading-relaxed">
                            <strong>Ответ:</strong> Аквариум перевозим только пустым (слив воды обязателен). Рыб нужно переместить в отдельные емкости с водой и перевезти самостоятельно в машине.
                        </p>
                    </div>
                </div>
            </div>

            <!-- MOBILE CONTENT (VISIBLE ON MOBILE) -->
            <div class="md:hidden space-y-8">
                
                <!-- 0. HERO MOBILE REMOVED (Replaced by Standard Hero) -->

                <!-- 2. CITIES BLOCK REMOVED (Replaced by CitiesScroll component) -->

                <!-- 3. COMPARISON BLOCK -->
                <div>
                     <h2 class="text-2xl font-bold mb-4 text-center">🏠 Берегите спину и мебель</h2>
                     <div class="space-y-3">
                        <!-- Neighbors -->
                        <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                            <h3 class="font-bold text-red-600 mb-2">❌ С соседом</h3>
                            <ul class="space-y-1 text-sm text-gray-700">
                                <li>• Риск сорвать спину на лестнице</li>
                                <li>• Царапины на мебели и ламинате</li>
                                <li>• Нервы и "битая" посуда</li>
                            </ul>
                        </div>
                         <!-- Us -->
                        <div class="bg-green-50 p-4 rounded-xl border-l-4 border-green-500 shadow-md">
                            <h3 class="font-bold text-green-700 mb-2">✅ С нашей командой</h3>
                            <ul class="space-y-1 text-sm text-gray-700">
                                <li>• Свои инструменты (шуруповерты)</li>
                                <li>• Профессиональная упаковка</li>
                                <li>• <strong>Материальная ответственность</strong></li>
                            </ul>
                        </div>
                     </div>
                </div>

                <!-- 4. PROCESS STEPS -->
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-center">Как мы работаем</h2>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <div class="flex-none w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">1</div>
                            <div>
                                <h3 class="font-bold text-lg">Разборка</h3>
                                <p class="text-sm text-gray-600">Снимаем дверцы, разбираем кровати. Все болты раскладываем по подписанным пакетам.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-none w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">2</div>
                            <div>
                                <h3 class="font-bold text-lg">Упаковка</h3>
                                <p class="text-sm text-gray-600">Стрейч-пленка от влажности + картон на углы. Технику упаковываем в "пупырку".</p>
                            </div>
                        </div>
                         <div class="flex gap-4">
                            <div class="flex-none w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">3</div>
                            <div>
                                <h3 class="font-bold text-lg">Погрузка</h3>
                                <p class="text-sm text-gray-600">Используем такелажные ремни. Укладываем вещи "тетрисом" и фиксируем стяжками.</p>
                            </div>
                        </div>
                         <div class="flex gap-4">
                            <div class="flex-none w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">4</div>
                            <div>
                                <h3 class="font-bold text-lg">Доставка</h3>
                                <p class="text-sm text-gray-600">Плавная езда, объезжаем ямы. Знаем специфику горных дорог.</p>
                            </div>
                        </div>
                         <div class="flex gap-4">
                            <div class="flex-none w-8 h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">5</div>
                            <div>
                                <h3 class="font-bold text-lg">Сборка</h3>
                                <p class="text-sm text-gray-600">Заносим, собираем мебель, расставляем. Забираем мусор (скотч, пленку) с собой.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. WHAT WE MOVE -->
                <div class="bg-gray-50 p-5 rounded-xl">
                    <h2 class="text-2xl font-bold mb-4 text-center">Берем любые вещи</h2>
                    <ul class="space-y-3 text-gray-700">
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">🎹</span>
                            <span><strong>Крупное:</strong> Пианино, сейфы, холодильники Side-by-Side.</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">🖼️</span>
                            <span><strong>Хрупкое:</strong> Зеркала, аквариумы (пустые), картины.</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">👕</span>
                            <span><strong>Личное:</strong> Одежда, обувь, документы.</span>
                        </li>
                    </ul>
                </div>

                <!-- 6. FLEET -->
                <div>
                     <h2 class="text-2xl font-bold mb-4 text-center">Чистые машины</h2>
                     <p class="text-center text-gray-600 mb-4">От минивэна для студии до 5-тонника для "трешки".</p>
                     <div class="grid grid-cols-1 gap-3">
                        <div class="bg-white p-3 rounded-lg border border-gray-200 flex items-center gap-3 shadow-sm">
                            <span class="text-green-500 text-xl">✅</span>
                            <span class="font-medium">Чистые: Не возим мусор в мебельных машинах.</span>
                        </div>
                        <div class="bg-white p-3 rounded-lg border border-gray-200 flex items-center gap-3 shadow-sm">
                            <span class="text-green-500 text-xl">✅</span>
                            <span class="font-medium">Сухие: Крыша не течет, груз не намокнет.</span>
                        </div>
                        <div class="bg-white p-3 rounded-lg border border-gray-200 flex items-center gap-3 shadow-sm">
                            <span class="text-green-500 text-xl">✅</span>
                            <span class="font-medium">Надежные: Оснащены ремнями для фиксации.</span>
                        </div>
                     </div>
                </div>

                 <!-- 7. FAQ -->
                <div>
                    <h2 class="text-2xl font-bold mb-4 text-center">Частые вопросы</h2>
                    <div class="space-y-3">
                        <details class="bg-white border rounded-lg p-3 group">
                            <summary class="font-bold flex justify-between items-center cursor-pointer list-none">
                                Как подготовить холодильник?
                                <span class="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-yellow-400">Разморозьте и высушите за сутки. Полки выньте.</p>
                        </details>
                        <details class="bg-white border rounded-lg p-3 group">
                            <summary class="font-bold flex justify-between items-center cursor-pointer list-none">
                                Нужно вынимать вещи из комода?
                                <span class="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-yellow-400">Обязательно. Иначе комод может развалиться, а направляющие погнуться.</p>
                        </details>
                         <details class="bg-white border rounded-lg p-3 group">
                            <summary class="font-bold flex justify-between items-center cursor-pointer list-none">
                                Как считается время?
                                <span class="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-yellow-400">С момента прибытия бригады. Если лифт платный — предупреждаем заранее.</p>
                        </details>
                         <details class="bg-white border rounded-lg p-3 group">
                            <summary class="font-bold flex justify-between items-center cursor-pointer list-none">
                                Что с цветами?
                                <span class="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-yellow-400">Везем последними. Горшки фиксируем в коробках.</p>
                        </details>
                         <details class="bg-white border rounded-lg p-3 group">
                            <summary class="font-bold flex justify-between items-center cursor-pointer list-none">
                                Перевозите аквариум?
                                <span class="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-yellow-400">Только пустой. Рыб нужно перевезти отдельно самостоятельно.</p>
                        </details>
                    </div>
                </div>

                <!-- 8. CTA FINAL -->
                <div class="bg-gray-900 text-white rounded-2xl p-6 text-center shadow-xl">
                    <h2 class="text-2xl font-bold text-yellow-400 mb-2">Не таскайте тяжести сами</h2>
                    <p class="mb-6 text-gray-300">Пришлите фото вещей — скажем точную цену за 10 минут.</p>
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="inline-block w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition shadow-lg animate-pulse-gentle">
                        Рассчитать в Telegram
                    </a>
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-10 rounded-2xl mb-12 border-l-4 border-red-600 shadow-sm">
                <h2 class="mb-6 text-black font-bold text-3xl">⚠️ ВНИМАНИЕ! Не выбрасывайте мусор в обычные баки</h2>
                <div class="bg-white/90 p-6 rounded-xl mb-4">
                    <h3 class="mb-3 text-red-600 font-bold text-xl">📜 О законе</h3>
                    <p class="m-0 text-red-900 leading-relaxed text-lg">
                        <strong>В Грузии запрещено</strong> выбрасывать строительные отходы (плитку, бетон, кирпичи, штукатурку) в городские мусорные баки. <strong>Штрафы высокие!</strong>
                    </p>
                </div>
                <div class="bg-white/90 p-6 rounded-xl">
                    <h3 class="mb-3 text-emerald-600 font-bold text-xl">✓ Наше решение</h3>
                    <p class="m-0 text-gray-700 leading-relaxed">
                        Мы вывозим мусор <strong>официально</strong> на специализированные свалки (полигоны). Вы получаете чистую квартиру и никаких проблем с соседями или муниципальной инспекцией.
                    </p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">🗑️ Что именно мы вывозим</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                    <h3 class="mb-4 text-black font-bold text-xl">🏗️ Строительный мусор</h3>
                    <p class="mb-2 text-gray-500 text-sm italic">(в мешках)</p>
                    <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                        <li>• Битая плитка</li>
                        <li>• Штукатурка и бетон</li>
                        <li>• Кирпичи</li>
                        <li>• Старые обои после ремонта</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-300 rounded-2xl p-8 shadow-md">
                    <h3 class="mb-4 text-black font-bold text-xl">🪑 Старая мебель (Хлам)</h3>
                    <p class="mb-2 text-amber-800 text-sm italic">(перед продажей квартиры)</p>
                    <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                        <li>• Советские стенки</li>
                        <li>• Диваны и кресла</li>
                        <li>• Шкафы</li>
                        <li>• Кухонные гарнитуры</li>
                    </ul>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                    <h3 class="mb-4 text-black font-bold text-xl">📺 Бытовая техника</h3>
                    <p class="mb-2 text-gray-500 text-sm italic">(тяжелое)</p>
                    <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                        <li>• Старые холодильники</li>
                        <li>• Стиральные машины</li>
                        <li>• Чугунные ванны</li>
                        <li>• Батареи отопления</li>
                    </ul>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                    <h3 class="mb-4 text-black font-bold text-xl">🚪 Рамы и двери</h3>
                    <p class="mb-2 text-gray-500 text-sm italic">(после замены)</p>
                    <ul class="m-0 pl-5 text-gray-700 leading-relaxed list-none">
                        <li>• Оконные рамы</li>
                        <li>• Старые двери</li>
                        <li>• Деревянные коробки</li>
                    </ul>
                </div>
            </div>

            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-10 rounded-2xl mb-12 border-2 border-blue-500">
                <h2 class="mb-6 text-black font-bold text-3xl">📋 Как подготовиться к вывозу</h2>
                
                <div class="bg-white/90 p-6 rounded-xl mb-4">
                    <h3 class="mb-3 text-blue-800 font-bold text-xl">💼 Сыпучий мусор</h3>
                    <p class="m-0 text-gray-700 leading-relaxed">
                        <strong>Важно!</strong> Мелкий мусор должен быть упакован в <strong>прочные строительные мешки</strong> (зеленые/белые полипропиленовые). Мы не можем выносить мусор лопатами из квартиры.
                    </p>
                </div>

                <div class="bg-white/90 p-6 rounded-xl">
                    <h3 class="mb-3 text-blue-800 font-bold text-xl">🪚 Крупногабаритная мебель</h3>
                    <p class="m-0 text-gray-700 leading-relaxed">
                        Если мебель не влезает в лифт или дверной проем — <strong>мы разберем ее на месте</strong>. Приедем с инструментами.
                    </p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">🚛 Наш транспорт и грузчики</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                    <div class="text-6xl mb-4">🚐</div>
                    <h3 class="text-black mb-4 font-bold text-xl">Малый объем</h3>
                    <p class="mb-4 text-gray-500 italic text-sm">10-20 мешков</p>
                    <p class="m-0 text-gray-700 leading-relaxed">
                        Микроавтобус / Ford Transit для небольшого ремонта или вывоза одной старой мебели.
                    </p>
                </div>

                <div class="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-500 rounded-2xl p-8 text-center">
                    <div class="text-6xl mb-4">🚛</div>
                    <h3 class="text-black mb-4 font-bold text-xl">Ремонт "под ключ"</h3>
                    <p class="mb-4 text-gray-500 italic text-sm">Тонны мусора</p>
                    <p class="m-0 text-gray-700 leading-relaxed">
                        Самосвал (ЗИЛ/КамАЗ) или большой грузовик для капитального ремонта.
                    </p>
                </div>
            </div>

            <div class="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-500 mb-12 max-w-4xl mx-auto">
                <h3 class="mb-4 text-black font-bold text-xl">💪 Грузчики</h3>
                <p class="m-0 text-amber-900 leading-relaxed">
                    Крепкие ребята, которые <strong>спустят тяжелые мешки с любого этажа</strong> (даже без лифта). Это тяжелая физическая работа — оплачивается отдельно.
                </p>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ Вопросы об утилизации</h2>

            <div class="max-w-4xl mx-auto mb-12 space-y-4">
                <div class="bg-white border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Нужно ли мне нанимать машину, если у меня всего один старый диван?</h3>
                    <p class="m-0 text-gray-600 leading-relaxed">
                        <strong>Ответ:</strong> Да, мы приедем и заберем его. Это услуга "Вывоз старой мебели" — подходит для освобождения квартиры перед продажей.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Вы предоставляете мешки?</h3>
                    <p class="m-0 text-gray-600 leading-relaxed">
                        <strong>Ответ:</strong> Можем привезти свои прочные полипропиленовые мешки за дополнительную плату, если у вас их нет.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Куда вы это везете?</h3>
                    <p class="m-0 text-gray-600 leading-relaxed">
                        <strong>Ответ:</strong> На <strong>официальный городской полигон ТБО</strong>, а не в ближайший овраг. Это легально и безопасно для окружающей среды.
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-6 md:p-10 rounded-2xl mb-12 border-l-4 border-red-600 shadow-sm">
                <h2 class="mb-4 text-red-900 font-bold text-xl">🏗️ Вывоз мусора в Батуми без головной боли</h2>
                <p class="m-0 text-red-900 leading-relaxed text-lg">Ремонт — это радость, а гора мешков — проблема. Мы заберем строительный мусор, старый диван или хлам из гаража и отвезем на официальный полигон. Никаких штрафов от инспекции!</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">💰 Стоимость вывоза мусора</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-r from-red-600 to-red-700 text-white">
                                <th class="p-4 text-left text-lg">Услуга</th>
                                <th class="p-4 text-left text-lg">Цена</th>
                                <th class="p-4 text-left text-lg">Что входит и объем</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold text-black">Средняя машина (Фургон)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">80 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Оптимально для небольшого ремонта. Вмещает старую мебель (диван, шкаф) или средний объем строительных мешков.</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold text-black">Большая машина (Макси)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">100 ₾ / рейс</td>
                                <td class="p-5 text-gray-500 text-sm">Для масштабного ремонта. Вместительный кузов, куда войдет до 200 мешков мусора, крупногабаритный хлам или длинные доски.</td>
                            </tr>
                            <tr>
                                <td class="p-5 font-semibold text-black">Полная очистка</td>
                                <td class="p-5 text-red-600 font-bold text-lg">от 200 ₾</td>
                                <td class="p-5 text-gray-500 text-sm">Освободим квартиру «под ноль» перед продажей или ремонтом. Выносим всё: от старых тумбочек до мусора на балконе.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">🚚 Машины для узких улиц и новостроек</h2>
                <div class="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    <div class="bg-white border-l-4 border-amber-500 p-6 rounded-2xl shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">1. Мини-фургон (до 500 кг)</h3>
                        <p class="m-0 text-gray-700 leading-relaxed">
                            <strong>Для Старого Батуми и малых объемов.</strong> Легко заезжает в тесные дворы на ул. Горгиладзе или Зубалашвили. Подходит для вывоза старой стиральной машины, 10 мешков мусора или одного дивана.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-red-600 p-6 rounded-2xl shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">2. Форд Транзит (до 1.5 т)</h3>
                        <p class="m-0 text-gray-700 leading-relaxed">
                            <strong>Для ремонта в "Черном каркасе".</strong> Хит заказов для новостроек (New Boulevard, Ангиса). Вмещает около 40-50 мешков строительного мусора.
                        </p>
                    </div>

                    <div class="bg-white border-l-4 border-black p-6 rounded-2xl shadow-sm">
                        <h3 class="mb-3 text-black font-bold text-xl">3. Самосвал / ЗИЛ (до 4-5 т)</h3>
                        <p class="m-0 text-gray-700 leading-relaxed">
                            <strong>Для капитальной стройки.</strong> Если вы ломаете стены или вывозите грунт. Загрузка насыпью. Вывозим большие объемы за один рейс.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Features / Safety -->
            <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 md:p-10 rounded-3xl mb-12">
                <h2 class="text-center text-4xl mb-8 text-red-800 font-bold">🚫 Почему нельзя выбрасывать в обычный бак?</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white/80 p-6 rounded-2xl border-t-4 border-red-600">
                        <h3 class="mb-3 text-red-800 font-bold text-xl">💸 Штрафы до 1000 ₾</h3>
                        <p class="m-0 text-red-900 leading-relaxed">
                            Муниципальная инспекция Батуми регулярно проверяет баки. За выброс строительного мусора штраф от 200 до 1000 лари. Мы спасаем вас от этих рисков.
                        </p>
                    </div>

                    <div class="bg-white/80 p-6 rounded-2xl border-t-4 border-emerald-600">
                        <h3 class="mb-3 text-emerald-800 font-bold text-xl">✅ Полигон Адлия</h3>
                        <p class="m-0 text-emerald-900 leading-relaxed">
                            Весь мусор вывозится на спецполигон в районе аэропорта/Адлии. Экология города не страдает.
                        </p>
                    </div>

                    <div class="bg-white/80 p-6 rounded-2xl border-t-4 border-blue-500">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">🧹 Чистота в лифте</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            После выноса мешков наши грузчики подметают за собой в подъезде и лифте, чтобы у вас не было конфликтов с соседями или управляющей компанией (особенно в Orbi/Alliance).
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">🔄 Как мы работаем</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-red-600 font-bold">1</div>
                        <h3 class="mb-2 font-bold text-black">Оценка</h3>
                        <p class="text-gray-500 text-sm">Пришлите фото мусора в Telegram. Мы назовем фиксированную цену (включая оплату полигона).</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-red-600 font-bold">2</div>
                        <h3 class="mb-2 font-bold text-black">Подача</h3>
                        <p class="text-gray-500 text-sm">Приезжаем в назначенное время.</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-red-600 font-bold">3</div>
                        <h3 class="mb-2 font-bold text-black">Погрузка</h3>
                        <p class="text-gray-500 text-sm">Грузчики быстро выносят мешки. Если лифта нет — спускаем вручную (расчет поэтажно).</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-red-600 font-bold">4</div>
                        <h3 class="mb-2 font-bold text-black">Утилизация</h3>
                        <p class="text-gray-500 text-sm">Отвозим груз в Адлию.</p>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="bg-white rounded-xl border border-gray-200 p-5 group cursor-pointer">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Вывозите ли вы мусор из высоток, если лифт платный?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-600">
                            Да, но оплата лифта (чип-карта или монеты) ложится на заказчика.
                        </p>
                    </details>
                    <details class="bg-white rounded-xl border border-gray-200 p-5 group cursor-pointer">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Есть ли у грузчиков свои мешки?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-600">
                            Да, мы можем привезти прочные строительные мешки и сами упаковать мусор (услуга оплачивается дополнительно).
                        </p>
                    </details>
                    <details class="bg-white rounded-xl border border-gray-200 p-5 group cursor-pointer">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Вы работаете в пригородах (Махинджаури, Гонио)?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-600">
                            Да, обслуживаем весь Батуми и окрестности. Цену за выезд за город уточняйте у оператора.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-red-700 to-red-800 p-12 rounded-3xl text-center shadow-xl">
                <h2 class="text-red-100 mb-4 text-3xl font-bold">🗑 Избавьтесь от хлама прямо сейчас</h2>
                <p class="text-red-50 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                    Освободите квартиру для ремонта или новой мебели. Машина будет у вас в течение часа.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-red-400 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-105 transition shadow-lg">
                        🗑 Заказать вывоз (Telegram)
                    </a>
                    <a href="tel:+995597048630" class="bg-red-100 text-red-900 px-8 py-4 rounded-full font-bold inline-block hover:scale-105 transition shadow-lg">
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-6 md:p-10 rounded-2xl mb-12 border-l-4 border-red-500">
                <h2 class="mb-6 text-black font-bold text-3xl">💪 Ваша спина стоит дороже</h2>
                <p class="mb-4 text-lg leading-relaxed text-red-900">
                    <strong>Не пытайтесь поднять диван в одиночку или с соседом.</strong> Лечение спины обойдется дороже, чем вызов профессиональных грузчиков.
                </p>
                <p class="mb-4 text-lg leading-relaxed text-gray-700">
                    <strong class="text-black">Наше решение:</strong> Предоставим физически крепкую бригаду (от 1 до 10 человек) для любых задач.
                </p>
                <div class="bg-white/80 p-5 rounded-xl mt-4">
                    <p class="m-0 text-black font-bold">✓ Штатные сотрудники</p>
                    <p class="mt-2 text-gray-700 text-base">Опрятные, вежливые, не курят на каждом перекуре, работают быстро и профессионально.</p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">📦 Когда нужны только грузчики?</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div class="text-4xl mb-4">🚛</div>
                    <h3 class="text-black mb-2 font-bold text-lg">Разгрузка фур</h3>
                    <p class="m-0 text-gray-500 text-sm leading-relaxed">Приехал товар из Турции или Китая? Быстро разгрузим контейнер на склад.</p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div class="text-4xl mb-4">🪑</div>
                    <h3 class="text-black mb-2 font-bold text-lg">Перестановка мебели</h3>
                    <p class="m-0 text-gray-500 text-sm leading-relaxed">Меняете местами шкаф и диван? Сделаем аккуратно, не поцарапав паркет.</p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div class="text-4xl mb-4">🏗️</div>
                    <h3 class="text-black mb-2 font-bold text-lg">Подъем стройматериалов</h3>
                    <p class="m-0 text-gray-500 text-sm leading-relaxed">Плитка, цемент, гипсокартон на этаж — даже если нет лифта.</p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div class="text-4xl mb-4">🚗</div>
                    <h3 class="text-black mb-2 font-bold text-lg">Погрузка в вашу машину</h3>
                    <p class="m-0 text-gray-500 text-sm leading-relaxed">Есть свой транспорт? Загрузим вещи грамотно "тетрисом".</p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">🛠️ Работаем не только руками, но и головой</h2>
            
            <div class="max-w-4xl mx-auto mb-12 space-y-4">
                <div class="bg-white border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-lg">🔗 Такелажные ремни</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
                        Используем специальные ремни для переноски холодильников и шкафов. Это бережет углы мебели и стены подъезда.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-lg">🔧 Инструменты</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
                        У бригады с собой шуруповерты и ключи. Диван не проходит в дверь? Разберем, занесем и соберем обратно.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-lg">🛞 Тележки (Рохли)</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
                        Для перемещения тяжелых грузов по ровной поверхности (склад, паркинг).
                    </p>
                </div>
            </div>

            <div class="bg-gradient-to-br from-gray-800 to-gray-700 p-6 md:p-10 rounded-2xl mb-12 text-white">
                <h2 class="mb-6 text-amber-300 font-bold text-3xl">⚙️ Такелажные работы (Тяжелые грузы)</h2>
                <p class="mb-6 leading-relaxed text-lg">
                    Обычный грузчик <strong>не поднимет</strong> пианино или сейф. Для таких задач нужна специальная подготовка.
                </p>
                <h3 class="text-amber-300 mb-4 font-bold text-xl">Что мы перевозим:</h3>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
                        <strong>🎹 Пианино и рояли</strong>
                    </div>
                    <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
                        <strong>🔒 Сейфы</strong>
                    </div>
                    <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm flex flex-col items-center justify-center">
                        <strong>🖥️ Серверные шкафы</strong>
                    </div>
                    <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm flex flex-col items-center justify-center">
                        <strong>🏧 Банкоматы</strong>
                    </div>

                </div>
                <p class="mt-6 text-sm text-amber-300">
                    💰 Для таких задач цена рассчитывается индивидуально (за вес/этаж).
                </p>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">💰 Цены и условия</h2>
            
            <div class="max-w-4xl mx-auto mb-12 space-y-4">
                <div class="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 border-2 border-amber-300">
                    <h3 class="mb-2 text-black font-bold text-xl">⏱️ Почасовая оплата</h3>
                    <p class="m-0 text-gray-700 leading-relaxed">Прозрачный тариф — вы платите только за реальное время работы.</p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                    <h3 class="mb-2 text-black font-bold text-xl">⏰ Минимальный заказ</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">Обычно 2 часа работы.</p>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                    <h3 class="mb-2 text-black font-bold text-xl">🏢 Поэтажная оплата</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">Если нет лифта, подъем тяжелых вещей считается за каждый этаж.</p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ Вопросы о работниках</h2>
            
            <div class="max-w-4xl mx-auto mb-12 space-y-3">
                <div class="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <strong class="text-black text-lg block mb-1">Грузчики приедут трезвые?</strong>
                    <span class="text-gray-500 text-sm"><strong class="text-emerald-600">Строго да.</strong> Это наш стандарт качества.</span>
                </div>

                <div class="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <strong class="text-black text-lg block mb-1">Они смогут разобрать шкаф?</strong>
                    <span class="text-gray-500 text-sm">Да, это универсальные специалисты-сборщики с инструментами.</span>
                </div>

                <div class="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <strong class="text-black text-lg block mb-1">Как быстро вы приедете?</strong>
                    <span class="text-gray-500 text-sm">Бригада может быть у вас через час-полтора.</span>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">📦 Профессиональная упаковка</h2>
            <p class="text-center text-gray-500 mb-8 max-w-3xl mx-auto text-lg">
                Правильная упаковка — это 80% успеха переезда. Защитите свои вещи от царапин, сколов и поломок
            </p>

            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl mb-8 border-l-4 border-amber-500 max-w-4xl mx-auto">
                <h3 class="mb-4 text-black font-bold text-xl">⚠️ Почему газета и одеяло не подойдут</h3>
                <p class="mb-3 text-amber-900 leading-relaxed">
                    <strong>Царапины на паркете, разбитый экран телевизора, сколы на углах шкафа</strong> — это цена экономии на пленке. Дороги в Грузии бывают неровными (особенно серпантины), а в Батуми высокая влажность.
                </p>
                <div class="bg-white/80 p-4 rounded-xl mt-4">
                    <p class="m-0 text-amber-900 font-bold">✓ Нужны промышленные материалы: пузырчатая пленка, стрейч, картонные уголки</p>
                </div>
            </div>

            <div class="max-w-5xl mx-auto mb-12">
                <h3 class="text-center mb-6 text-black font-bold text-2xl">🛠️ Как мы упаковываем</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 border-2 border-amber-300">
                        <div class="text-5xl mb-4">🛋️</div>
                        <h4 class="text-black mb-3 font-bold text-lg">Мягкая мебель</h4>
                        <p class="m-0 text-gray-700 leading-relaxed text-sm">
                            Диваны, матрасы: полная обмотка стрейч-пленкой в 5-7 слоев. Создаем герметичный кокон от грязи и влаги.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                        <div class="text-5xl mb-4">🗄️</div>
                        <h4 class="text-black mb-3 font-bold text-lg">Корпусная мебель</h4>
                        <p class="m-0 text-gray-700 leading-relaxed text-sm">
                            Шкафы, тумбы: защита углов картонными уголками, фиксация дверей скотчем, обмотка стрейчем.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8">
                        <div class="text-5xl mb-4">📺</div>
                        <h4 class="text-black mb-3 font-bold text-lg">Бытовая техника</h4>
                        <p class="m-0 text-gray-700 leading-relaxed text-sm">
                            ТВ, холодильник, стиралка: защита лицевой панели картоном, затем пузырчатая пленка. Края — в уголки.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-500">
                        <div class="text-5xl mb-4">🍷</div>
                        <h4 class="text-black mb-3 font-bold text-lg">Посуда и хрупкое</h4>
                        <p class="m-0 text-red-900 leading-relaxed text-sm">
                            <strong>Каждую тарелку</strong> оборачиваем отдельно. Пустоты в коробке заполняем, чтобы ничего не билось.
                        </p>
                    </div>
                </div>

                <div class="bg-blue-100 p-8 rounded-2xl border-l-4 border-blue-500">
                    <h3 class="mb-4 text-black font-bold text-xl">📦 Два варианта упаковки</h3>
                    <div class="grid grid-cols-1 gap-4">
                        <div class="bg-white/90 p-5 rounded-xl">
                            <strong class="text-blue-800 text-lg">Упаковка под ключ:</strong> 
                            <span class="text-gray-700 ml-2"> Наши упаковщики приезжают с материалами и делают всё за вас</span>
                        </div>
                        <div class="bg-white/90 p-5 rounded-xl">
                            <strong class="text-blue-800 text-lg">Доставка материалов:</strong> 
                            <span class="text-gray-700 ml-2"> Привозим коробки, пленку и скотч — пакуете сами в своем темпе</span>
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
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-10 rounded-2xl mb-12 border-l-4 border-blue-500 shadow-sm">
                <h2 class="mb-6 text-black font-bold text-3xl">💼 Главная боль бизнеса — простой</h2>
                <p class="mb-4 text-lg leading-relaxed text-blue-900">
                    <strong>Каждый час простоя офиса — это потеря денег.</strong> Срыв дедлайнов, недовольные клиенты, сотрудники, которые не могут работать.
                </p>
                <p class="mb-4 text-lg leading-relaxed text-gray-700">
                    <strong class="text-black">Наше решение:</strong> Мы работаем 24/7. Можем начать переезд в пятницу вечером, а в понедельник утром ваши сотрудники уже сядут за свои столы на новом месте.
                </p>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">🏢 Технология офисного переезда</h2>
            
            <div class="max-w-5xl mx-auto mb-12 space-y-6">
                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div class="flex gap-6 items-start">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-white">1</div>
                        <div class="flex-1">
                            <h3 class="mb-4 text-black font-bold text-2xl">Планирование и маркировка</h3>
                            <p class="mb-3 text-gray-700 leading-relaxed text-lg">
                                <strong>Самый важный этап.</strong> Мы маркируем (клеим стикеры) каждое рабочее место: стол, кресло, монитор и коробки сотрудника получают один номер.
                            </p>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                В новом офисе никто не будет искать свой степлер или тумбочку — всё встанет на свои места по Planogram (плану рассадки).
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bg-white border-2 border-blue-500 rounded-2xl p-6 md:p-8 shadow-md">
                    <div class="flex gap-6 items-start">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-white">2</div>
                        <div class="flex-1">
                            <h3 class="mb-4 text-black font-bold text-xl md:text-2xl">Упаковка техники</h3>
                            
                            <div class="bg-blue-50 p-4 rounded-lg mb-4">
                                <p class="mb-2 font-bold text-blue-800">💻 Оргтехника</p>
                                <p class="m-0 text-blue-900 text-sm">Мониторы и моноблоки — в пупырчатую пленку + картон. Серверное оборудование — в спец. ящики с амортизацией.</p>
                            </div>

                            <div class="bg-amber-50 p-4 rounded-lg">
                                <p class="mb-2 font-bold text-amber-900">📁 Архивы и документы</p>
                                <p class="m-0 text-amber-900 text-sm">Упаковываем в короба, соблюдая порядок. Гарантируем конфиденциальность — каждый короб опечатан.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
                    <div class="flex gap-6 items-start">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-white">3</div>
                        <div class="flex-1">
                            <h3 class="mb-4 text-black font-bold text-xl md:text-2xl">Разборка мебели</h3>
                            <p class="m-0 text-gray-700 leading-relaxed text-lg">
                                Переговорные столы, стеллажи, шкафы-купе — всё разбираем аккуратно. Кресла перевозим в чехлах, чтобы не испачкать обивку.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
                    <div class="flex gap-6 items-start">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-white">4</div>
                        <div class="flex-1">
                            <h3 class="mb-4 text-black font-bold text-xl md:text-2xl">Перевозка и сборка</h3>
                            <p class="m-0 text-gray-700 leading-relaxed text-lg">
                                Перевозим, собираем мебель и расставляем строго по плану рассадки (Planogram), который вы утвердите. Каждый сотрудник придет на готовое рабочее место.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
                    <div class="flex gap-6 items-start">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-xl flex items-center justify-center font-bold text-2xl text-white">5</div>
                        <div class="flex-1">
                            <h3 class="mb-4 text-black font-bold text-xl md:text-2xl">Уборка мусора</h3>
                            <p class="m-0 text-gray-700 leading-relaxed text-lg">
                                Вывозим за собой горы использованного скотча, пленки и картона. Офис готов к работе — сотрудники не увидят хаоса.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 rounded-2xl p-6 md:p-10 mb-12 border-l-4 border-gray-600">
                <h2 class="mb-6 text-black font-bold text-3xl">⚡ Особенности работы с IT-оборудованием</h2>
                <p class="mb-6 text-gray-700 leading-relaxed text-lg">
                    <strong>Для IT-компаний и стартапов:</strong> Умеем обращаться с серверными шкафами (Rack), плоттерами и дорогой электроникой.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-5 rounded-xl shadow-sm">
                        <strong class="text-black block mb-1">Серверные шкафы</strong>
                        <span class="text-gray-500 text-sm">Демонтаж и установка Rack</span>
                    </div>
                    <div class="bg-white p-5 rounded-xl shadow-sm">
                        <strong class="text-black block mb-1">Антистатика</strong>
                        <span class="text-gray-500 text-sm">Материалы для электроники</span>
                    </div>
                    <div class="bg-white p-5 rounded-xl shadow-sm">
                        <strong class="text-black block mb-1">Маркировка кабелей</strong>
                        <span class="text-gray-500 text-sm">Подписываем все провода</span>
                    </div>
                </div>
            </div>

            <h3 class="text-center text-3xl mb-8 text-black font-bold">🏢 Какие офисы мы перевозим</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
                <div class="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                    <div class="text-5xl mb-4">👥</div>
                    <h4 class="text-black mb-2 font-bold text-lg">Небольшие кабинеты</h4>
                    <p class="text-gray-500 m-0 text-sm">До 5 сотрудников</p>
                </div>

                <div class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center border-2 border-blue-500 shadow-md">
                    <div class="text-5xl mb-4">🏢</div>
                    <h4 class="text-black mb-2 font-bold text-lg">Open Space и IT-хабы</h4>
                    <p class="text-blue-900 m-0 text-sm font-medium">50+ рабочих мест</p>
                </div>

                <div class="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                    <div class="text-5xl mb-4">🏦</div>
                    <h4 class="text-black mb-2 font-bold text-lg">Банковские отделения</h4>
                    <p class="text-gray-500 m-0 text-sm">Сейфы, тяжелое оборудование</p>
                </div>
            </div>

            <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ FAQ для бизнеса</h2>
            
            <div class="max-w-5xl mx-auto mb-12 space-y-4">
                <div class="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Как быстро вы можете оценить переезд?</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
                        <strong>Ответ:</strong> Пришлем оценщика бесплатно в день заявки. Он осмотрит офис, посчитает объем и предоставит коммерческое предложение в течение 24 часов.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Нужно ли сотрудникам самим паковать вещи?</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
                        <strong>Ответ:</strong> По желанию. Мы можем привезти коробки заранее, чтобы сотрудники сложили личные вещи. Всё остальное (мебель, техника) делаем мы.
                    </p>
                </div>

                <div class="bg-white border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                    <h3 class="mb-3 text-black font-bold text-xl">Вы работаете в ночное время?</h3>
                    <p class="m-0 text-gray-500 leading-relaxed">
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-6 md:p-10 rounded-2xl mb-12 border-l-8 border-red-600 shadow-sm">
                <h2 class="mb-4 text-red-900 text-3xl font-bold">🏗️ Вывоз мусора в Тбилиси без штрафов</h2>
                <p class="m-0 text-red-900 leading-relaxed text-lg">Муниципальная инспекция Тбилиси строго следит за баками. Штраф за строительный мусор — от 500 лари. Мы вывезем всё официально на Глданский полигон.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl md:text-4xl mb-8 text-black font-bold">💰 Стоимость вывоза мусора (Тбилиси)</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Средняя машина</h3>
                                <p class="text-sm text-gray-500">Фургон (Ford Transit)</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-red-600">80 ₾</span>
                                <span class="text-xs text-gray-500">за рейс</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Оптимально для небольшого ремонта. Вмещает старую мебель (диван, шкаф) или до 50 мешков.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Большая машина</h3>
                                <p class="text-sm text-gray-500">Макси (Mercedes Sprinter)</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-red-600">100 ₾</span>
                                <span class="text-xs text-gray-500">за рейс</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Для масштабного ремонта. Вместительный кузов, куда войдет до 200 мешков мусора или длинные доски.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-400 transition-all md:col-span-2">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Грузчики</h3>
                                <p class="text-sm text-gray-500">Спуск + погрузка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-red-600">от 50 ₾</span>
                                <span class="text-xs text-gray-500">за грузчика</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Спуск мешков даже без лифта. Цена зависит от этажа и объема мусора. Мы сами соберем всё в мешки, если нужно.</p>
                    </div>
                </div>
            </div>

            <!-- Block 3: Features -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">✨ Почему выбирают нас</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="text-4xl mb-4">📜</div>
                        <h3 class="font-bold text-lg mb-2">Официально</h3>
                        <p class="text-gray-600 text-sm">У нас есть разрешение на вывоз мусора на полигон.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="text-4xl mb-4">💪</div>
                        <h3 class="font-bold text-lg mb-2">Крепкие грузчики</h3>
                        <p class="text-gray-600 text-sm">Сами соберем мусор в мешки, спустим и погрузим.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="text-4xl mb-4">🧹</div>
                        <h3 class="font-bold text-lg mb-2">Чистота</h3>
                        <p class="text-gray-600 text-sm">После погрузки уберем за собой в подъезде.</p>
                    </div>
                </div>
            </div>

            <!-- Block 4: CTA -->
            <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl text-center shadow-xl">
                <h2 class="text-white mb-4 text-3xl font-bold">🚜 Нужно вывезти мусор?</h2>
                <p class="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Пришлите фото кучи мусора в Telegram, и мы скажем точную цену вывоза.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                        🗑️ Заказать вывоз
                    </a>
                    <a href="tel:+995597048630" class="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-bold transition-all">
                        📞 Позвонить
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
            <div class="bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-8 rounded-2xl border-l-4 border-gray-600 mb-12">
                <h2 class="text-gray-900 mb-4 font-bold text-3xl">💼 Офисный переезд под ключ</h2>
                <p class="text-gray-700 mb-6 text-lg">Понимаем, что простой бизнеса стоит дорого. Поэтому:</p>
                <div class="grid gap-4 mt-6">
                    <div class="bg-white p-4 rounded-lg shadow-sm font-medium">🕒 Можем работать в выходные или ночью</div>
                    <div class="bg-white p-4 rounded-lg shadow-sm font-medium">💻 Бережно упакуем мониторы и серверы</div>
                </div>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl md:text-4xl mb-8 text-black font-bold">🏢 Стоимость офисного переезда</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Рабочее место</h3>
                                <p class="text-sm text-gray-500">Под ключ</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 55 ₾</span>
                                <span class="text-xs text-gray-500">за место</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Упаковка, перевозка, расстановка стола, кресла и ПК.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Кабинет руководителя</h3>
                                <p class="text-sm text-gray-500">VIP упаковка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 150 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Особо бережная упаковка кожаной мебели и техники.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Грузчики (офис)</h3>
                                <p class="text-sm text-gray-500">Такелаж, ремни</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600">от 50 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Профессиональная работа с офисной мебелью.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Машина (Спринтер)</h3>
                                <p class="text-sm text-gray-500">Высокий кузов</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 50 ₾</span>
                                <span class="text-xs text-gray-500">в час</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Вмещает до 6-8 рабочих мест за один рейс.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-400 transition-all md:col-span-2">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Упаковка архива</h3>
                                <p class="text-sm text-gray-500">Коробки + маркировка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600">по запросу</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Предоставляем коробки, упаковываем и маркируем документы для быстрого поиска.</p>
                    </div>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">🚚 Автомобили под батумские улицы</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚐</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Компактный Минивэн</h3>
                        <p class="text-gray-500 text-sm mb-4 italic">Для Старого Батуми</p>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Легко паркуется на узких улицах (Мемеда Абашидзе, Парнаваз Мепе). Идеален для перевозки малых офисов, документации или серверного оборудования.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-500 rounded-2xl p-6 shadow-md relative">
                        <div class="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">ПОПУЛЯРНО</div>
                        <div class="text-5xl mb-4">🚚</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Мебельный Спринтер</h3>
                        <p class="text-amber-800 text-sm mb-4 italic">Для бизнес-центров</p>
                        <p class="text-amber-900 leading-relaxed m-0 text-sm">
                            Оптимален для большинства задач. Вмещает офисные столы, кресла и технику. Кузов герметичен — дождь не страшен.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚛</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Грузовик (20+ м³)</h3>
                        <p class="text-gray-500 text-sm mb-4 italic">Для крупных переездов</p>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Если перевозите штаб-квартиру или филиал целиком. Подходит для маршрутов Батуми — Тбилиси.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Batumi-specific Features -->
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-blue-800 font-bold">⭐ Почему бизнесу в Батуми удобно с нами</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">☔ Защита от влажности</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Батуми — влажный город. Мы используем усиленную упаковку (стрейч + пупырчатая пленка) для всей электроники и бумажных архивов, чтобы сырость не повредила имущество при транспортировке.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">🏢 Опыт работы в высотках</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Знаем специфику комплексов (Orbi, Alliance, Porta Tower). Умеем договариваться с администрацией о времени использования грузовых лифтов и подъезда к рампе.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process (4 Steps) -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">📋 Перевезем офис за 4 этапа</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-amber-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">1</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Оценка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Выезд менеджера или оценка по видео (WhatsApp/Telegram). Фиксируем цену.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-amber-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">2</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Подготовка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Привозим коробки заранее. Сотрудники пакуют личные вещи, мы разбираем мебель и пакуем технику.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-amber-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">3</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Переезд</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Работаем в выходные или ночью, чтобы утром в понедельник вы начали работу.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-2xl shadow-sm border-2 border-emerald-500">
                        <div class="bg-emerald-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">4</div>
                        <div>
                            <h3 class="mb-2 text-emerald-800 font-bold text-xl">Финал</h3>
                            <p class="m-0 text-emerald-900 leading-relaxed">
                                Расставляем мебель по плану, вывозим упаковку, подписываем Акт.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-amber-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Можно ли переехать в выходные?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Да, мы рекомендуем переезды с пятницы вечера по воскресенье, чтобы не останавливать бизнес-процессы.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-amber-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Выезжаете ли вы в Чакви / Гонио / Квариати?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Да, обслуживаем весь регион Аджарии.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-amber-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Как вы перевозите мониторы и моноблоки?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-amber-500">
                            Экраны закрываем листами картона и оборачиваем воздушно-пузырчатой пленкой. Перевозим в коробках или зафиксированными в кузове.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-gray-800 to-gray-700 p-12 rounded-3xl text-center shadow-xl">
                <div class="text-5xl mb-4">💼</div>
                <h2 class="text-amber-300 mb-4 text-2xl md:text-3xl font-bold px-2 leading-tight">Не останавливайте бизнес из-за переезда</h2>
                <p class="text-gray-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Доверьте логистику профессионалам. Получите расчет стоимости и план переезда уже сегодня.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-amber-500/30">
                        📄 Получить инвойс/расчет
                    </a>
                    <a href="tel:+995597048630" class="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-bold transition-all">
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl mb-8">
                <h2 class="text-red-800 mb-4 font-bold text-3xl">💪 Грузчики в Батуми</h2>
                <p class="text-red-900 text-lg">Нужно поднять диван на 5-й этаж старого дома на Руставели? Или разгрузить машину с товаром на рынке Хопа? Наши ребята справятся.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">💰 Прозрачные тарифы без скрытых доплат</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-br from-red-600 to-red-700 text-white">
                                <th class="p-4 text-left text-lg font-semibold">Услуга</th>
                                <th class="p-4 text-left text-lg font-semibold">Цена</th>
                                <th class="p-4 text-left text-lg font-semibold">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Грузчик (Стандарт)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">50 ₾ / час</td>
                                <td class="p-5 text-gray-500 text-sm">Погрузка/разгрузка вещей, коробок.</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Подъем стройматериалов</td>
                                <td class="p-5 text-red-600 font-bold text-lg">сдельная</td>
                                <td class="p-5 text-gray-500 text-sm">Расчет за тонну или количество мешков/этажей.</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Спуск/Подъем без лифта</td>
                                <td class="p-5 text-red-600 font-bold text-lg">2-5 ₾ / этаж</td>
                                <td class="p-5 text-gray-500 text-sm">Зависит от веса предмета (холодильник, диван).</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Такелаж (Тяжести >100кг)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">от 100 ₾</td>
                                <td class="p-5 text-gray-500 text-sm">Пианино, сейфы, банкоматы (используем ремни).</td>
                            </tr>
                            <tr>
                                <td class="p-5 font-semibold">Разборка/Сборка</td>
                                <td class="p-5 text-emerald-600 font-bold text-lg">Входит в час</td>
                                <td class="p-5 text-gray-500 text-sm">Если заказана почасовая работа и есть инструмент.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-amber-100 border-l-4 border-amber-500 p-4 mt-4 rounded-lg">
                    <p class="m-0 text-amber-900 font-semibold">⚠️ Важно: При работе в ночное время (после 22:00) тариф может быть увеличен.</p>
                </div>
            </div>

            <!-- Block 3: Services Grid -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">🛠️ Решаем любые задачи с тяжестями в Батуми</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🏗️</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Помощь при ремонте</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Батуми — город строек. Поднимем мешки с цементом, песком, плитку и гипсокартон на любой этаж.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🏠</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Квартирные задачи</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Перестановка мебели внутри квартиры, спуск старого дивана на мусорку, погрузка личных вещей в машину.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚚</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Разгрузка фур</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Приехал товар для магазина или ресторана? Оперативно разгрузим машину, отсортируем коробки.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-500 rounded-2xl p-6 shadow-md">
                        <div class="text-5xl mb-4">🏢</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Подъем в высотки</h3>
                        <p class="text-amber-900 leading-relaxed m-0 text-sm">
                            Знаем специфику работы в апарт-отелях (Orbi, Alliance): где служебный вход и как договориться с охраной.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Benefits -->
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-blue-800 font-bold">⭐ Профессиональный подход к тяжелой работе</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">✅ Трезвость и Культура</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Никакого перегара. Наши ребята вежливые, опрятные и работают быстро, без лишних перекуров.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">✅ Инструмент и Ремни</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Приходим не с пустыми руками. Есть такелажные ремни для переноски шкафов (чтобы не царапать пол) и шуруповерты.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-blue-800 font-bold text-xl">✅ Работа в Старом городе</h3>
                        <p class="m-0 text-blue-900 leading-relaxed">
                            Умеем заносить крупную мебель (диваны, столешницы) по узким винтовым лестницам старого Батуми, не повредив стены.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">📋 Как заказать бригаду</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">1</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Звонок/Заявка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Пишете в Telegram, что и в каком объеме нужно перенести.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">2</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Оценка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Если задача нестандартная (например, поднять 5 тонн плитки), мы называем сдельную цену заранее.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">3</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Выезд</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Бригада приезжает точно ко времени.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">4</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Работа</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Выполняем задачу.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-2xl shadow-sm border-2 border-emerald-500">
                        <div class="bg-emerald-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">5</div>
                        <div>
                            <h3 class="mb-2 text-emerald-800 font-bold text-xl">Оплата</h3>
                            <p class="m-0 text-emerald-900 leading-relaxed">
                                Оплата по факту выполненных работ (наличные или перевод).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-4xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Вы поднимаете стройматериалы, если лифт не работает?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Да, в новостройках это частая проблема. Мы осуществляем ручной подъем по лестнице. Стоимость рассчитывается индивидуально (зависит от этажа и веса).
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Минимальное время заказа?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Оплата почасовая за фактически отработанное время.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Можно ли заказать одного человека?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Да, если вам нужно просто помочь переставить шкаф или разгрузить легковую машину.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-red-600 to-red-700 p-12 rounded-3xl text-center shadow-xl">
                <h2 class="text-amber-100 mb-4 text-3xl font-bold">💪 Нужна физическая помощь?</h2>
                <p class="text-red-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Не срывайте спину — доверьте тяжести нам. Бригада будет у вас в течение часа.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-amber-100 hover:bg-white text-red-800 px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                        👷 Вызвать грузчиков
                    </a>
                    <a href="tel:+995597048630" class="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full font-bold transition-all ring-2 ring-amber-100/50">
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
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
                <h2 class="text-3xl font-bold mb-4">Планируете переезд в Тбилиси?</h2>
                <p class="text-lg mb-8 opacity-90">Закажите машину заранее, чтобы забронировать удобное время и избежать часов пик.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition transform hover:scale-105 flex items-center justify-center gap-2">
                        <span>📱</span> Написать в Telegram
                    </a>
                    <a href="tel:+995597048630" class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
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
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-10 rounded-3xl mb-12">
                <h2 class="text-blue-800 mb-6 font-extrabold text-3xl">🏢 Переезд офиса "под ключ"</h2>
                <p class="text-blue-900 text-lg leading-relaxed">Понимаем, что каждый час простоя — это потеря денег. Поэтому мы организуем переезд так, чтобы в пятницу сотрудники выключили компьютеры в старом офисе, а в понедельник включили их в новом.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl md:text-4xl mb-8 text-black font-bold">🏢 Стоимость офисного переезда</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Рабочее место</h3>
                                <p class="text-sm text-gray-500">Под ключ</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 60 ₾</span>
                                <span class="text-xs text-gray-500">за место</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Упаковка, перевозка, расстановка стола, кресла и ПК.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Кабинет руководителя</h3>
                                <p class="text-sm text-gray-500">VIP упаковка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 200 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Особо бережная упаковка кожаной мебели и техники.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Грузчики (офис)</h3>
                                <p class="text-sm text-gray-500">Такелаж, ремни</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 50 ₾</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Профессиональная работа с офисной мебелью.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Машина (Спринтер)</h3>
                                <p class="text-sm text-gray-500">Высокий кузов</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600 whitespace-nowrap">от 60 ₾</span>
                                <span class="text-xs text-gray-500">в час</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Вмещает до 6-8 рабочих мест за один рейс.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all md:col-span-2">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">Упаковка архива</h3>
                                <p class="text-sm text-gray-500">Коробки + маркировка</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-xl md:text-2xl font-bold text-emerald-600">по запросу</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">Предоставляем коробки, упаковываем и маркируем документы для быстрого поиска.</p>
                    </div>
                </div>
            </div>

            <!-- Block 3: Fleet -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🚚 Автомобили под улицы столицы</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚐</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Компактный Минивэн</h3>
                        <p class="text-gray-500 text-sm italic mb-4">Для Старого города</p>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Идеален для Сололаки, Мтацминды, Авлабари. Легко маневрирует по узким улицам и крутым подъемам. Подходит для перевозки документации, серверов и малых офисов.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-500 rounded-2xl p-6 shadow-md relative">
                        <div class="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">ПОПУЛЯРНО</div>
                        <div class="text-5xl mb-4">🚚</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Мебельный Спринтер</h3>
                        <p class="text-blue-800 text-sm italic mb-4">Для бизнес-центров</p>
                        <p class="text-blue-900 leading-relaxed m-0 text-sm">
                            Оптимален для офисов в Сабуртало, Ваке, Дигоми. Вмещает офисные столы, кресла и технику. Высокий кузов для холодильников и шкафов.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚛</div>
                        <h3 class="text-xl font-bold mb-2 text-black">Грузовик (20+ м³)</h3>
                        <p class="text-gray-500 text-sm italic mb-4">Для крупных переездов</p>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Если перевозите штаб-квартиру (50+ рабочих мест) или филиал целиком. Подходит для междугородних маршрутов Тбилиси — Батуми.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Tbilisi-specific Features -->
            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-6 md:p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-amber-900 font-bold">⭐ Почему бизнесу в столице удобно с нами</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-amber-600 font-bold text-xl">🚦 Знаем маршруты и пробки</h3>
                        <p class="m-0 text-amber-900 leading-relaxed">
                            Тбилиси — город с интенсивным трафиком. Мы планируем маршрут с учетом часов пик (избегаем Руставели и Чавчавадзе в 8-10 утра и 18-20 вечера). Используем альтернативные пути для быстрой доставки.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-amber-600 font-bold text-xl">🏢 Опыт работы в бизнес-центрах</h3>
                        <p class="m-0 text-amber-900 leading-relaxed">
                            Знаем специфику работы в современных комплексах (Business Center Axis, King David Business Center, Liberty Tower). Умеем договариваться с администрацией о времени использования грузовых лифтов.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Block 5: Process (4 Steps) -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">📋 Перевезем офис за 4 этапа</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">1</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Оценка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Выезд менеджера в любой район Тбилиси или оценка по видео (WhatsApp/Telegram). Фиксируем цену и составляем план.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">2</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Подготовка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Привозим коробки заранее. Сотрудники пакуют личные вещи, мы разбираем мебель, маркируем и профессионально пакуем технику.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-blue-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">3</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Переезд</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Работаем в выходные или ночью (с 22:00 до 06:00), чтобы утром в понедельник вы начали работу в новом офисе.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-2xl shadow-sm border-2 border-emerald-500">
                        <div class="bg-emerald-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">4</div>
                        <div>
                            <h3 class="mb-2 text-emerald-800 font-bold text-xl">Финал</h3>
                            <p class="m-0 text-emerald-900 leading-relaxed">
                                Расставляем мебель по утвержденному плану, подключаем технику, вывозим упаковочные материалы, подписываем Акт.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Можно ли переехать в выходные?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Да, мы работаем 24/7. Рекомендуем переезды с пятницы вечера по воскресенье, чтобы в понедельник бизнес работал в обычном режиме.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Работаете ли вы в отдаленных районах (Дигоми, Глдани, Варкетили)?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Да, обслуживаем все районы Тбилиси, включая периферийные зоны. Возможен выезд в пригороды (Рустави, Мцхета).
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Как вы перевозите серверное оборудование?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Используем антистатическую пленку и специальные ящики с амортизацией. Серверные шкафы (Rack) демонтируем и устанавливаем профессионально.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-blue-800 to-blue-900 p-12 rounded-3xl text-center shadow-xl">
                <div class="text-5xl mb-4">💼</div>
                <h2 class="text-amber-100 mb-4 text-2xl md:text-3xl font-bold px-2 leading-tight">Не останавливайте бизнес из-за переезда</h2>
                <p class="text-blue-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Доверьте логистику профессионалам. Получите расчет стоимости и план переезда уже сегодня.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-amber-100 hover:bg-white text-blue-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                        📄 Получить инвойс/расчет
                    </a>
                    <a href="tel:+995597048630" class="bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-full font-bold transition-all ring-2 ring-blue-700">
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
            <div class="bg-gradient-to-br from-red-100 to-red-200 p-10 rounded-3xl mb-12">
                <h2 class="text-red-800 mb-6 font-extrabold text-3xl">💪 Зачем срывать спину?</h2>
                <p class="text-red-900 text-lg leading-relaxed">Нужно поднять новое пианино на 9 этаж пешком, потому что оно не влезает в лифт? Или разгрузить фуру с товаром на рынке Лило? Наши ребята сделают это быстро и без лишних перекуров.</p>
            </div>

            <!-- Block 2: Pricing Table -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">💰 Прозрачные тарифы без скрытых доплат</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gradient-to-br from-red-600 to-red-700 text-white">
                                <th class="p-4 text-left text-lg font-semibold">Услуга</th>
                                <th class="p-4 text-left text-lg font-semibold">Цена</th>
                                <th class="p-4 text-left text-lg font-semibold">Примечание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Грузчик (Стандарт)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">50 ₾ / час</td>
                                <td class="p-5 text-gray-500 text-sm">Погрузка/разгрузка вещей, коробок.</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Подъем стройматериалов</td>
                                <td class="p-5 text-red-600 font-bold text-lg">сдельная</td>
                                <td class="p-5 text-gray-500 text-sm">Расчет за тонну или количество мешков/этажей.</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Спуск/Подъем без лифта</td>
                                <td class="p-5 text-red-600 font-bold text-lg">3-7 ₾ / этаж</td>
                                <td class="p-5 text-gray-500 text-sm">Зависит от веса предмета (холодильник, диван).</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Такелаж (Тяжести >100кг)</td>
                                <td class="p-5 text-red-600 font-bold text-lg">от 120 ₾</td>
                                <td class="p-5 text-gray-500 text-sm">Пианино, сейфы, банкоматы (используем ремни).</td>
                            </tr>
                            <tr>
                                <td class="p-5 font-semibold">Разборка/Сборка</td>
                                <td class="p-5 text-emerald-600 font-bold text-lg">Входит в час</td>
                                <td class="p-5 text-gray-500 text-sm">Если заказана почасовая работа и есть инструмент.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-amber-100 border-l-4 border-amber-500 p-4 mt-6 rounded-lg">
                    <p class="m-0 text-amber-900 font-semibold">⚠️ Важно: При работе в ночное время (после 22:00) тариф может быть увеличен.</p>
                </div>
            </div>

            <!-- Block 3: Services Grid -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🛠️ Решаем любые задачи с тяжестями в столице</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🏗️</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Помощь на стройках</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Тбилиси активно застраивается. Поднимем мешки с цементом, песком, блоки, плитку на любой этаж в районах Сабуртало, Дигоми, Глдани. Даже если лифт не работает.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🏠</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Квартирные задачи</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Перестановка мебели, спуск старого дивана, погрузка личных вещей в машину. Работаем во всех районах: от Сололаки до Варкетили.
                        </p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
                        <div class="text-5xl mb-4">🚚</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Разгрузка фур</h3>
                        <p class="text-gray-700 leading-relaxed m-0 text-sm">
                            Приехал груз на Лило? Быстро разгрузим, отсортируем коробки и занесем на склад. Работаем с магазинами, ресторанами, оптовиками.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-500 rounded-2xl p-6 shadow-md">
                        <div class="text-5xl mb-4">🏢</div>
                        <h3 class="text-lg font-bold mb-3 text-black">Подъем в бизнес-центры</h3>
                        <p class="text-blue-900 leading-relaxed m-0 text-sm">
                            Знаем специфику Axis Tower, King David, Liberty Tower. Где служебный вход, как договориться о грузовом лифте, как работать без повреждений.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Benefits -->
            <div class="bg-gradient-to-br from-amber-100 to-amber-200 p-10 rounded-3xl mb-12">
                <h2 class="text-center text-3xl mb-8 text-amber-900 font-bold">⭐ Профессиональный подход к тяжелой работе</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-amber-600 font-bold text-xl">✅ Трезвость и Культура</h3>
                        <p class="m-0 text-amber-900 leading-relaxed">
                            Никакого перегара. Наши ребята вежливые, опрятные и работают быстро, без лишних перекуров. Это норма для столицы.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-amber-600 font-bold text-xl">✅ Инструмент и Ремни</h3>
                        <p class="m-0 text-amber-900 leading-relaxed">
                            Приходим с такелажными ремнями для переноски тяжелой мебели (чтобы не царапать пол) и шуруповертами для разборки кроватей/шкафов.
                        </p>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                        <h3 class="mb-3 text-amber-600 font-bold text-xl">✅ Работа в Старом городе</h3>
                        <p class="m-0 text-amber-900 leading-relaxed">
                            Умеем заносить крупную мебель по узким лестницам старых зданий Сололаки, Авлабари, Мтацминды, не повредив ни стены, ни вещи.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Block 5: Process -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">📋 Как заказать бригаду</h2>
                <div class="grid gap-6 max-w-4xl mx-auto">
                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">1</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Звонок/Заявка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Пишете в Telegram или звоните, что и куда нужно перенести/поднять.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">2</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Оценка</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Для нестандартных задач (например, поднять 10 тонн стройматериалов) называем точную сдельную цену.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">3</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Выезд</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Бригада приезжает вовремя (учитываем тбилисские пробки).
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-red-600 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">4</div>
                        <div>
                            <h3 class="mb-2 text-black font-bold text-xl">Работа</h3>
                            <p class="m-0 text-gray-500 leading-relaxed">
                                Быстро и аккуратно выполняем задачу.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-2xl shadow-sm border-2 border-emerald-500">
                        <div class="bg-emerald-500 min-w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">5</div>
                        <div>
                            <h3 class="mb-2 text-emerald-800 font-bold text-xl">Оплата</h3>
                            <p class="m-0 text-emerald-900 leading-relaxed">
                                Оплата по факту (наличные, Bank of Georgia, TBC).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Block 6: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Поднимаете ли материалы в старых домах без лифта?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Да, это частая ситуация в Тбилиси (Сололаки, Мтацминда). Поднимаем вручную. Цена зависит от этажа и веса груза.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Работаете ли в отдаленных районах (Дигоми, Глдани, Варкетили)?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Да, обслуживаем все районы Тбилиси и пригороды (Рустави, Мцхета). Возможен выезд в тот же день.
                        </p>
                    </details>

                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-red-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Минимальное время заказа?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-red-500">
                            Оплата почасовая за фактически отработанное время.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 7: CTA -->
            <div class="bg-gradient-to-br from-red-600 to-red-700 p-12 rounded-3xl text-center shadow-xl">
                <h2 class="text-amber-100 mb-4 text-3xl font-bold">💪 Нужна физическая помощь?</h2>
                <p class="text-red-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Не срывайте спину — доверьте тяжести профессионалам. Бригада будет у вас в течение часа.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-amber-100 hover:bg-white text-red-800 px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                        👷 Вызвать грузчиков
                    </a>
                    <a href="tel:+995597048630" class="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full font-bold transition-all ring-2 ring-amber-100/50">
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
            <div class="bg-gradient-to-br from-indigo-100 to-indigo-200 p-10 rounded-3xl mb-12">
                <h2 class="text-indigo-800 mb-6 font-extrabold text-3xl">🛍️ Купили диван — привезем сегодня!</h2>
                <p class="text-indigo-900 text-lg leading-relaxed">Магазины часто предлагают доставку "в течение 3-5 дней". Зачем ждать? Мы заберем ваш товар (мебель, плитку, гипсокартон) прямо сейчас и привезем к вам домой.</p>
            </div>

            <div class="bg-white p-8 rounded-3xl shadow-sm">
                <h3 class="text-2xl font-bold mb-6">Как это работает?</h3>
                <ol class="pl-6 text-gray-600 leading-relaxed list-decimal space-y-2">
                    <li>Вы покупаете товар в магазине (Domino, Gorgia, JYSK, Bricorama и др.).</li>
                    <li>Звоните нам или присылаете фото чека/накладной.</li>
                    <li>Мы приезжаем, забираем товар (даже без вашего присутствия, если нужно).</li>
                    <li>Привозим вам и поднимаем на этаж.</li>
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
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl mb-12 border-l-4 border-blue-500">
                <h2 class="mb-6 text-blue-900 text-3xl text-center font-bold">🚚 Два способа перевозки</h2>
                <div class="grid gap-6">
                    <div class="bg-white/90 p-6 rounded-2xl shadow-sm">
                        <h3 class="mb-2 text-blue-700 text-2xl font-bold">1. 📦 Сборный груз (Попутно)</h3>
                        <p class="mb-2 font-bold text-emerald-600">Выгодно для небольших вещей</p>
                        <p class="mb-4 text-gray-700 leading-relaxed">Идеально, если вам нужно передать холодильник, диван, стиральную машину или 5-10 коробок с личными вещами. Мы кладем ваш груз в машину, которая уже едет в нужный город.</p>
                        <ul class="m-0 pl-5 text-gray-600 list-disc">
                            <li class="mb-1"><strong>Цена:</strong> Дешевле на 50%.</li>
                            <li><strong>Срок:</strong> Доставка в течение 1-2 дней.</li>
                        </ul>
                    </div>

                    <div class="bg-white/90 p-6 rounded-2xl shadow-sm">
                        <h3 class="mb-2 text-red-700 text-2xl font-bold">2. 🚀 Отдельная машина (Квартирный переезд)</h3>
                        <p class="mb-2 font-bold text-emerald-600">Для полного переезда семьи</p>
                        <p class="mb-4 text-gray-700 leading-relaxed">Вы заказываете машину целиком. В кузове едут только ваши вещи. Машина подается в удобное вам время, грузится и сразу выезжает в пункт назначения.</p>
                        <ul class="m-0 pl-5 text-gray-600 list-disc">
                            <li class="mb-1"><strong>Цена:</strong> Оплата за рейс.</li>
                            <li><strong>Бонус:</strong> Вы можете ехать в кабине с водителем бесплатно.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Block 3: Use Cases -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">🇬🇪 Популярные направления перевозок</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center">
                        <div class="text-4xl mb-4">🏠</div>
                        <h3 class="text-black mb-3 text-lg font-bold">Сезонный переезд</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Перевозка вещей на дачу или на море (Тбилиси ↔ Батуми) в начале и конце сезона.</p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center">
                        <div class="text-4xl mb-4">🛍️</div>
                        <h3 class="text-black mb-3 text-lg font-bold">Доставка из магазинов Тбилиси</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Купили мебель в Domino, Gorgia, IKEA (доставка) или технику в Тбилиси? Мы заберем её со склада магазина и привезем к вам в Батуми, Кутаиси или Зугдиди.</p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center">
                        <div class="text-4xl mb-4">📦</div>
                        <h3 class="text-black mb-3 text-lg font-bold">Личные вещи и Посылки</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Отправка коробок, чемоданов, велосипедов и колясок родственникам в другой город.</p>
                    </div>

                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center">
                        <div class="text-4xl mb-4">🛋️</div>
                        <h3 class="text-black mb-3 text-lg font-bold">Мебель и Техника</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Перевозка крупногабаритных предметов: шкафы, кровати, пианино, холодильники (только стоя!).</p>
                    </div>
                </div>
            </div>

            <!-- Block 4: Pricing -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">💰 Ориентировочные цены (Отдельная машина)</h2>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 overflow-x-auto">
                    <table class="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr class="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                                <th class="p-4 text-left">Направление</th>
                                <th class="p-4 text-left">Спринтер (1.5 т)</th>
                                <th class="p-4 text-left">Грузовик (3-5 т)</th>
                                <th class="p-4 text-left">Попутный груз (от)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Тбилиси ↔ Батуми</td>
                                <td class="p-5">от 450 ₾</td>
                                <td class="p-5">от 700 ₾</td>
                                <td class="p-5 font-bold text-emerald-600">от 80 ₾</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Тбилиси ↔ Кутаиси</td>
                                <td class="p-5">от 300 ₾</td>
                                <td class="p-5">от 500 ₾</td>
                                <td class="p-5 font-bold text-emerald-600">от 50 ₾</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="p-5 font-semibold">Тбилиси ↔ Поти</td>
                                <td class="p-5">от 400 ₾</td>
                                <td class="p-5">от 650 ₾</td>
                                <td class="p-5 font-bold text-emerald-600">от 70 ₾</td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50">
                                <td class="p-5 font-semibold">Батуми ↔ Кутаиси</td>
                                <td class="p-5">от 200 ₾</td>
                                <td class="p-5">от 350 ₾</td>
                                <td class="p-5 font-bold text-emerald-600">от 50 ₾</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-amber-100 border-l-4 border-amber-500 p-4 mt-6 rounded-lg">
                    <p class="m-0 text-amber-900 font-semibold">⚠️ Для попутного груза цена зависит от места, которое занимают ваши вещи.</p>
                </div>
            </div>

            <!-- Block 5: Safety -->
            <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 p-10 rounded-3xl mb-12 text-white">
                <h2 class="text-center text-3xl mb-8 text-white font-bold">🛡️ Ваши вещи доедут целыми</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <h3 class="mb-3 text-xl font-bold">🔗 Крепление ремнями</h3>
                        <p class="m-0 leading-relaxed opacity-90">На трассе и серпантинах (Рикоти, Гомбори) груз испытывает тряску. Мы обязательно фиксируем высокую мебель и технику стяжными ремнями к борту.</p>
                    </div>

                    <div class="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <h3 class="mb-3 text-xl font-bold">📦 Упаковка</h3>
                        <p class="m-0 leading-relaxed opacity-90">Для межгорода упаковка обязательна! Мы используем картон и плотный стрейч, чтобы вещи не терлись друг о друга в пути.</p>
                    </div>

                    <div class="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <h3 class="mb-3 text-xl font-bold">🚚 Опытные водители</h3>
                        <p class="m-0 leading-relaxed opacity-90">Водители знают сложные участки трассы и выбирают безопасный скоростной режим.</p>
                    </div>
                </div>
            </div>

            <!-- Block 6: Steps -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">📋 Как заказать машину</h2>
                <div class="flex flex-wrap gap-6 justify-center">
                    <div class="flex-1 min-w-[200px] text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-gray-100 w-[50px] h-[50px] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-gray-700 text-xl">1</div>
                        <h3 class="mb-2 font-bold font-bold">Оценка</h3>
                        <p class="text-gray-500 text-sm">Пришлите фото вещей или список в Telegram. Укажите маршрут (откуда — куда).</p>
                    </div>
                    <div class="flex-1 min-w-[200px] text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-gray-100 w-[50px] h-[50px] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-gray-700 text-xl">2</div>
                        <h3 class="mb-2 font-bold font-bold">Выбор тарифа</h3>
                        <p class="text-gray-500 text-sm">Мы предложим цену за отдельную машину или за "попутку".</p>
                    </div>
                    <div class="flex-1 min-w-[200px] text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-gray-100 w-[50px] h-[50px] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-gray-700 text-xl">3</div>
                        <h3 class="mb-2 font-bold font-bold">Погрузка</h3>
                        <p class="text-gray-500 text-sm">Приезжаем, упаковываем, грузим.</p>
                    </div>
                    <div class="flex-1 min-w-[200px] text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div class="bg-gray-100 w-[50px] h-[50px] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-gray-700 text-xl">4</div>
                        <h3 class="mb-2 font-bold font-bold">Доставка</h3>
                        <p class="text-gray-500 text-sm">Встречаем вас в другом городе и заносим вещи в дом.</p>
                    </div>
                </div>
            </div>

            <!-- Block 7: FAQ -->
            <div class="mb-12">
                <h2 class="text-center text-3xl mb-8 text-black font-bold">❓ Частые вопросы</h2>
                <div class="max-w-4xl mx-auto space-y-4">
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Сколько ждать "попутную" машину?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Обычно рейсы Тбилиси-Батуми ходят каждые 1-2 дня.
                        </p>
                    </details>
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Вы возите домашних животных?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            В кабине (с хозяином) — да, по договоренности. В кузове животных не возим.
                        </p>
                    </details>
                    <details class="group bg-white rounded-xl border border-gray-200 p-5 cursor-pointer open:ring-2 open:ring-blue-500/20">
                        <summary class="font-bold text-lg text-black list-none flex justify-between items-center">
                            <span>Можно ли передать документы или ключи?</span>
                            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p class="mt-4 text-gray-500 leading-relaxed pl-2 border-l-4 border-blue-500">
                            Да, мы работаем как курьерская служба для мелких посылок между городами.
                        </p>
                    </details>
                </div>
            </div>

            <!-- Block 8: CTA -->
            <div class="bg-gradient-to-br from-blue-700 to-blue-800 p-12 rounded-3xl text-center shadow-xl">
                <h2 class="text-blue-100 mb-4 text-3xl font-bold">🌍 Едете в другой город?</h2>
                <p class="text-blue-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Узнайте стоимость перевозки ваших вещей прямо сейчас.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <a href="https://t.me/PereezdBatumiBot" target="_blank" class="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                        🚚 Узнать цену (Telegram)
                    </a>
                    <a href="tel:+995597048630" class="bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-full font-bold transition-all ring-2 ring-blue-400">
                        📞 Позвонить
                    </a>
                </div>
            </div>
        `
    }
};

export type ServiceSlug = keyof typeof servicesData;
