import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, TrendingUp, Droplets, Wrench, Users, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'База знаний: Всё о переезде в Тбилиси и Батуми | Советы по переезду в Грузии',
    description: 'Полный гид по переезду в Грузии: где найти коробки, как упаковать вещи с учетом климата, особенности переезда в Тбилиси и Батуми. Лайфхаки от профессионалов.',
    keywords: 'переезд в Грузии, переезд Тбилиси, переезд Батуми, упаковка вещей, коробки для переезда, советы по переезду',
    openGraph: {
        title: 'База знаний: Всё о переезде в Тбилиси и Батуми',
        description: 'Полный гид по переезду в Грузии с лайфхаками и советами от профессионалов',
    },
};

export default function TipsPage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                База знаний: Всё о переезде в Тбилиси и Батуми
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Переезд в Грузии имеет свои особенности: узкие улочки старого Тбилиси,
                                высокая влажность в Батуми, платные лифты на монетах в хрущевках.
                                <strong> Мы собрали весь наш опыт</strong>, чтобы ваш переезд прошел легко и без сюрпризов.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="container mx-auto px-4 py-16 max-w-4xl">

                    {/* Section 1: Где найти коробки */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Package className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-black">
                                Где найти коробки и упаковку в Грузии
                            </h2>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                            <h3 className="text-2xl font-bold text-black mb-4">📦 Где купить материалы</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                В Тбилиси и Батуми упаковочные материалы можно купить в крупных строительных магазинах:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span><strong>Domino</strong> — сеть строительных магазинов, есть картонные коробки разных размеров, стрейч-пленка, скотч.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span><strong>Gorgia</strong> — аналог Леруа Мерлен, широкий выбор упаковочных материалов и инструментов.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span><strong>Modus</strong> — магазины хозтоваров, есть пупырчатая пленка и картонные коробки.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-black mb-4">💡 Где найти дешевле или бесплатно</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">MyMarket.ge — доска объявлений</h4>
                                    <p className="leading-relaxed">
                                        Зайдите на сайт <a href="https://www.mymarket.ge" target="_blank" rel="noopener noreferrer" className="text-yellow-600 underline">MyMarket.ge</a> и
                                        введите в поиске «<strong>yutebi</strong>» (коробки по-грузински) или просто «коробки».
                                        Многие отдают даром после своего переезда.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">🍌 Лайфхак: Коробки из-под бананов</h4>
                                    <p className="leading-relaxed">
                                        Идите в супермаркеты <strong>Carrefour</strong> и <strong>Agrohub</strong>.
                                        Попросите коробки из-под бананов или овощей — они очень прочные и бесплатные.
                                        Обычно их отдают без проблем, если вежливо попросить.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Facebook-группы</h4>
                                    <p className="leading-relaxed">
                                        В группах <strong>«Expats in Tbilisi»</strong> и <strong>«Expats in Batumi»</strong> регулярно
                                        появляются объявления о бесплатных коробках. Просто напишите пост с просьбой — вам обязательно откликнутся.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Грузинский чек-лист */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-black">
                                Грузинский чек-лист: О чем часто забывают
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 transition">
                                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                                    🪙 Лифты на монетах
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Важно!</strong> Во многих старых домах в Тбилиси и Батуми лифты работают на монетах —
                                    <strong> 10 или 20 тетри за поездку</strong>. Если вы забудете разменять деньги,
                                    придется носить вещи по лестнице.
                                </p>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-gray-700">
                                        💡 <strong>Совет:</strong> Заранее разменяйте в магазине мелочь (<strong>khurda</strong> по-грузински).
                                        Для переезда из 3-комнатной квартиры с 5 этажа понадобится примерно 5-7 лари мелочью.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 transition">
                                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                                    🚚 Проезд грузовика и парковка
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Узкие дворы в старом Тбилиси (Сололаки, Вера, Чугурети) и в центре Батуми — настоящий челлендж
                                    для грузовика. Во многих местах действует платная парковка <strong>City Parking</strong>,
                                    и эвакуатор работает быстро.
                                </p>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-gray-700 mb-2">
                                        💡 <strong>Совет:</strong> Заранее «забронируйте» место для грузовика:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                        <li>Поставьте стулья или оградите место лентой</li>
                                        <li>Договоритесь с соседями</li>
                                        <li>Если зона платная — купите талон City Parking на целый день</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 transition">
                                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                                    📡 Интернет и роутер
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Переносите интернет от <strong>Magti, Silknet или Caucasus Online</strong>?
                                    Не забудьте <strong>за 3-5 дней до переезда</strong> подать заявку на перенос роутера по новому адресу.
                                    Иначе придется сидеть без интернета минимум неделю или платить за новое подключение.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Особенности упаковки */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Droplets className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-black">
                                Особенности упаковки с учетом климата Грузии
                            </h2>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-6">
                            <h3 className="text-2xl font-bold text-black mb-4">💧 Высокая влажность в Батуми</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                В Батуми и прибрежных районах Аджарии <strong>очень высокая влажность</strong> (70-90% круглый год).
                                Это значит, что картонные коробки могут отсыреть, а одежда и техника — покрыться плесенью,
                                если упаковать неправильно.
                            </p>
                            <div className="bg-white p-6 rounded-lg">
                                <h4 className="font-bold text-lg mb-3">✅ Как упаковывать в Батуми:</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500 font-bold">→</span>
                                        <span><strong>Одежду и текстиль</strong> — герметично заворачивайте в стрейч-пленку</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500 font-bold">→</span>
                                        <span><strong>Электронику и технику</strong> — сначала пакет с силикагелем, потом пупырка и пленка</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500 font-bold">→</span>
                                        <span><strong>Книги и документы</strong> — в пластиковые контейнеры или double пакеты</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-black mb-4">🍷 Посуда и грузинское вино</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Если у вас коллекция грузинского вина или хрупкая посуда из Кахетии —
                                их нужно упаковывать <strong>особенно тщательно</strong>.
                            </p>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start gap-2">
                                    <span className="text-2xl">🍾</span>
                                    <div>
                                        <strong>Бутылки с вином:</strong> Каждую бутылку заворачиваем в пупырчатую пленку,
                                        ставим вертикально в коробку, заполняем пустоты газетами или пенопластом.
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-2xl">🍽️</span>
                                    <div>
                                        <strong>Тарелки и стекло:</strong> Прокладываем каждый предмет бумагой или пленкой,
                                        ставим на ребро (не стопкой!), фиксируем.
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-2xl">📦</span>
                                    <div>
                                        <strong>Маркировка:</strong> Пишите «ХРУПКОЕ / FRAGILE» на всех сторонах коробки
                                        жирным маркером на русском и грузинском (<strong>ფრთხილად</strong>).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Частники vs Компания */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-black">
                                Что выгоднее: Частники или Компания?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-100 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-black mb-4">🚗 «Дядя на Форде» с MyMarket</h3>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div>
                                        <span className="text-green-600 font-bold">+ Плюсы:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1">
                                            <li>Дешевле на 30-40%</li>
                                            <li>Быстро договориться</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="text-red-600 font-bold">− Минусы:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1">
                                            <li>Цена может вырасти в процессе</li>
                                            <li>Нет ответственности за бой</li>
                                            <li>Могут опоздать или не приехать</li>
                                            <li>Нет инструментов для разборки мебели</li>
                                            <li>Не всегда трезвые грузчики</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-black mb-4">🏢 Профессиональная компания</h3>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div>
                                        <span className="text-green-600 font-bold">+ Плюсы:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1">
                                            <li><strong>Фиксированная цена</strong> — без сюрпризов</li>
                                            <li>Ответственность за сохранность вещей</li>
                                            <li>Профессиональные трезвые грузчики</li>
                                            <li>Свой инструмент для разборки/сборки</li>
                                            <li>Упаковочные материалы в комплекте</li>
                                            <li>Работаем по договору</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="text-red-600 font-bold">− Минусы:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1">
                                            <li>Дороже частников</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border-2 border-yellow-300">
                            <h3 className="text-2xl font-bold text-black mb-4">💡 Наш совет</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Если у вас переезд <strong>небольшой студии без мебели</strong> — можно рискнуть с частником.
                                Но если везете <strong>квартиру с мебелью, техникой и хрупкими вещами</strong> —
                                профессиональная компания окупится спокойствием и сохранностью имущества.
                                Разбитый телевизор или испорченный диван обойдутся дороже экономии на грузчиках.
                            </p>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold text-black">
                                ❓ Частые вопросы (FAQ)
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white border-l-4 border-yellow-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Сколько времени занимает квартирный переезд?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>1-комнатная:</strong> 3-4 часа<br />
                                    <strong>2-комнатная:</strong> 4-6 часов<br />
                                    <strong>3-комнатная:</strong> 6-8 часов<br />
                                    Время зависит от этажа, наличия лифта и количества вещей. Это с разборкой, упаковкой, транспортировкой и сборкой.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-blue-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Можете ли вы перевезти вещи из Тбилиси в Батуми?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Да, работаем по всей Грузии. <strong>Тбилиси → Батуми</strong> (380 км) — популярный маршрут.
                                    Междугородние переезды выгоднее планировать на <strong>будние дни</strong>.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-green-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Что входит в стоимость переезда?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Базовая цена:</strong> машина, водитель и 2 грузчика. <br />
                                    <strong>Доп. оплата:</strong> упаковочные материалы, подъем без лифта, разборка/сборка сложной мебели.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-purple-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Нужно ли мне самому упаковывать вещи?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Нет, можете заказать <strong>упаковку под ключ</strong>. Хотите сэкономить? Пакуйте личные вещи сами, а мебель и хрупкое доверьте профессионалам.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-orange-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Работаете ли вы в выходные?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Да, <strong>7 дней в неделю</strong>, включая праздники. Офисные переезды часто делаем ночью (пятница-суббота).
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-red-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Что делать, если вещь повредилась?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Несем <strong>материальную ответственность</strong> за груз. Важно: сообщите о повреждении <strong>сразу при разгрузке</strong> для фиксации в акте.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-yellow-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">Как оплачивать — наличными или картой?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Наличные (₾/$)</strong> или <strong>банковский перевод</strong>. Для юридических лиц — безнал с НДС. Оплата после завершения переезда.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-blue-400 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg mb-2">За сколько дней нужно заказывать?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Можем приехать <strong>в день заказа</strong>, но лучше за <strong>2-3 дня</strong>. В пиковый сезон (лето, конец месяца) — за неделю.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-10 text-center">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Не хотите тратить время на поиск коробок и упаковку?
                        </h2>
                        <p className="text-xl text-black mb-8 leading-relaxed">
                            <strong>Мы привезем все материалы и сделаем переезд под ключ.</strong><br />
                            Упакуем, разберем мебель, перевезем и расставим на новом месте.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
                            >
                                Рассчитать стоимость переезда
                                <ArrowRight className="w-6 h-6" />
                            </a>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold text-lg px-8 py-5 rounded-full transition-all"
                            >
                                Посмотреть все услуги
                            </Link>
                        </div>
                    </section>

                </article>
            </main>
            <Footer />
        </>
    );
}
