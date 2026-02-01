import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Shield, Clock, Star, Truck, Wrench, CheckCircle, Users, Award, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'О компании Georgia Moving | Переезды в Тбилиси и Батуми с заботой',
    description: 'Мувинг с человеческим лицом. Профессиональные переезды в Грузии без стресса. Знаем все об узких улочках Тбилиси и тесных дворах Батуми.',
    keywords: 'о компании, переезды Грузия, мувинг Тбилиси, грузоперевозки Батуми, профессиональные грузчики',
    openGraph: {
        title: 'О компании Georgia Moving - Переезды с человеческим лицом',
        description: 'Реальная команда профессионалов. Превращаем переезд в праздник новоселья.',
    },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                                Мувинг с человеческим лицом.<br />
                                Делаем переезды в Грузии комфортными и безопасными
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Мы не просто перевозим вещи — мы избавляем вас от стресса и превращаем переезд в праздник новоселья
                            </p>
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <Heart className="inline w-10 h-10 text-yellow-500 mr-3" />
                            Кто мы
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                Мы — <strong>не агрегатор и не диспетчерская</strong>, где вам подбирают случайного водителя.
                                Мы — <strong>реальная команда</strong>, которая работает в Грузии и знает эту страну изнутри.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Мы знаем, <strong>как проехать по узким улочкам Старого Тбилиси</strong>, где даже навигатор теряется.
                                Мы умеем парковаться в <strong>тесных дворах Батуми</strong>, где между домами буквально метр.
                                И мы точно знаем, как упаковать вещи, чтобы они пережили <strong>любые серпантины</strong> —
                                даже дорогу в Казбеги или Местию.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl my-8">
                                <h3 className="text-2xl font-bold text-black mb-3">Наша миссия</h3>
                                <p className="text-lg text-gray-800">
                                    Избавить вас от стресса. <strong>Переезд — это праздник новоселья</strong>,
                                    а не головная боль с разбросанными коробками и поцарапанной мебелью.
                                </p>
                            </div>

                            <p className="text-lg leading-relaxed">
                                У нас нет задачи «быстрее закончить и уехать». Наша задача — сделать так,
                                чтобы вы <strong>остались довольны</strong> и порекомендовали нас друзьям.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Principles */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <Star className="inline w-10 h-10 text-yellow-500 mr-3" />
                        Наши принципы
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Простые правила, которые делают работу с нами комфортной
                    </p>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                        {/* Honest Pricing */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Shield className="w-7 h-7 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Честная цена</h3>
                                    <p className="text-gray-700">
                                        Мы <strong>не меняем стоимость в процессе работы</strong>.
                                        Нет скрытых доплат за «сложность», «настроение» или «забыли учесть пятый этаж».
                                        Назвали цену — выполнили работу за эту цену.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Responsibility */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Award className="w-7 h-7 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">🛡 Гарантия сохранности</h3>
                                    <p className="text-gray-700">
                                        Мы — частная команда, и нас кормят рекомендации довольных клиентов.
                                        Поэтому нам невыгодно портить ваши вещи. Мы отвечаем за сохранность головой,
                                        а любые спорные вопросы решаем в пользу клиента.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Punctuality */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Clock className="w-7 h-7 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Пунктуальность</h3>
                                    <p className="text-gray-700">
                                        Мы <strong>ценим ваше время</strong>. Если сказали «в 10:00» —
                                        значит, машина будет в 10:00. Не в 11:30 с фразой «пробки были».
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professionalism */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Users className="w-7 h-7 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Аккуратность</h3>
                                    <p className="text-gray-700">
                                        Наши грузчики — это <strong>профессионалы</strong>, которые умеют разбирать мебель
                                        и упаковывать технику. Не случайные люди с улицы, которые тащат шкаф «как-нибудь».
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fleet & Equipment */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <Truck className="inline w-10 h-10 text-yellow-500 mr-3" />
                        Наш автопарк и оборудование
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Не просто машины — специализированный транспорт для безопасной перевозки
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left column */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        🚛 Надежный автопарк
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>✨ Всегда чистые кузова</strong><br />
                                                Строго следим за чистотой. Машины, которые возят мебель, никогда не используются для вывоза строительного мусора. Ваш диван приедет чистым.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>📦 Плотная укладка («Тетрис»)</strong><br />
                                                У нас нет гидробортов, зато есть опытные грузчики. Мы укладываем вещи в кузове максимально плотно, чтобы они не болтались и не падали на поворотах.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>📏 Высокие потолки</strong><br />
                                                Используем машины с высоким кузовом (Спринтеры/Транзиты), что позволяет перевозить высокие холодильники строго вертикально — как требует инструкция.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right column */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Wrench className="w-7 h-7 text-yellow-500" />
                                        Инструменты и материалы
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>Шуруповёрты, ключи, отвёртки</strong> —
                                                для разборки/сборки мебели
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>Стрейч-плёнка, картон, скотч</strong> —
                                                упаковываем прямо на месте
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                <strong>Тележки и ремни</strong> —
                                                для тяжёлых вещей (сейфы, пианино)
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Trust Us */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Почему нам доверяют
                    </h2>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-5xl font-bold text-yellow-500 mb-2">500+</div>
                            <p className="text-gray-700">Успешных переездов</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-5xl font-bold text-yellow-500 mb-2">24/7</div>
                            <p className="text-gray-700">Работаем без выходных</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                            <div className="text-5xl font-bold text-yellow-500 mb-2">100%</div>
                            <p className="text-gray-700">Довольных клиентов</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-center">Работаем с разными клиентами</h3>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>🏠 Частные лица:</strong> Квартирные переезды, перевозка мебели,
                                упаковка вещей. От студии до частного дома.
                            </p>
                            <p>
                                <strong>🏢 Бизнес:</strong> Офисные переезды, перевозка серверного оборудования
                                для IT-компаний, переезд магазинов и салонов.
                            </p>

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-yellow-400 to-orange-400">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Хотите познакомиться поближе?
                        </h2>
                        <p className="text-xl text-black mb-8">
                            Позвоните нам или напишите в Telegram — мы <strong>бесплатно проконсультируем</strong>
                            и рассчитаем стоимость вашего переезда за 2 минуты
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
                            >
                                Написать в Telegram
                                <Phone className="w-6 h-6" />
                            </a>
                            <a
                                href="tel:+995555123456"
                                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
                            >
                                Позвонить сейчас
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>
                        <p className="text-black mt-6 text-sm">
                            Бесплатная консультация • Ответ за 2 минуты • Честные цены
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
