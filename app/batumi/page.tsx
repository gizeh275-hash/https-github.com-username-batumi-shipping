'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { generateLocalBusinessSchema } from '@/lib/seo';

export default function BatumiPage() {
    const schema = generateLocalBusinessSchema('Батуми');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />
            <main className="bg-gradient-to-br from-yellow-50 to-white">
                <Hero
                    title="Грузоперевозки в Батуми"
                    subtitle="Знаем специфику города: узкие улочки, пробки, высотки Orbi. Работаем в любую погоду!"
                    ctaText="Заказать в Telegram"
                    ctaLink="https://t.me/PereezdBatumiBot"
                    showBackground={false}
                    useGradientText={false}
                />

                {/* Local Specifics Intro */}
                <section className="container mx-auto px-4 py-20">
                    <div className="relative border-2 border-gray-100 rounded-2xl max-w-4xl mx-auto shadow-lg overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/batumi-skyline.jpg"
                                alt="Batumi Skyline"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay to dim the image for text readability */}
                            <div className="absolute inset-0 bg-white/85" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black break-words">Почему мы — местные эксперты?</h2>
                            <p className="text-black text-base md:text-lg leading-relaxed mb-3 md:mb-4 font-medium break-words">
                                Грузоперевозки по Батуми и Аджарии. Мы знаем каждый поворот.
                            </p>
                            <p className="text-black text-base md:text-lg leading-relaxed mb-3 md:mb-4 font-medium break-words">
                                Проезд по узким улицам Старого Батуми, парковка у Orbi City, доставка материалов на Бони.
                            </p>
                            <p className="text-blue-700 text-base md:text-lg font-bold leading-relaxed break-words">
                                🌧️ Работаем в любую погоду — машины герметичны.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Adapted Services - SCROLLABLE like Homepage */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                            Наши услуги
                        </h2>

                        <div className="relative">
                            {/* Scroll Container */}
                            <div
                                id="batumi-services-scroll"
                                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {/* Service 1: Квартирные переезды */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/apartment-moving.jpg"
                                            alt="Квартирный переезд"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Квартирный переезд</h3>
                                        <p className="hidden md:block text-gray-600 leading-relaxed mb-4">
                                            Учитывая высокую влажность Батуми, мы используем <strong>усиленную упаковку</strong> для техники и книг, чтобы они не отсырели.
                                        </p>
                                        <p className="hidden md:block text-sm text-gray-500 italic mb-6">
                                            Знаем правила грузовых лифтов в ЖК Alley Palace, Porta Batumi Tower.
                                        </p>
                                        <Link href="/service/batumi_moving" className="mt-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 2: Офисный переезд */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/office-moving.jpg"
                                            alt="Офисный переезд"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Офисный переезд</h3>
                                        <p className="hidden md:block text-gray-600 leading-relaxed mb-6">
                                            Перевозим технику, мебель и архивы с документами. Принимаем безнал, выдаем закрывающие документы. Организуем переезд без простоя вашего бизнеса.
                                        </p>
                                        <Link href="/service/batumi_office" className="mt-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 3: Услуги грузчиков */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-yellow-400 border-2 border-yellow-500 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group relative snap-start flex flex-col">
                                    <div className="absolute top-4 right-4 bg-black text-yellow-400 text-xs font-bold px-3 py-1 rounded-lg z-10">
                                        ПОПУЛЯРНО
                                    </div>
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/movers-service.jpg"
                                            alt="Услуги грузчиков"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Услуги грузчиков</h3>
                                        <p className="hidden md:block text-black leading-relaxed mb-6">
                                            Трезвые ребята с инструментами. Разберут шкаф, вынесут холодильник с 9 этажа (даже если нет лифта в Старом Батуми), загрузят фуру.
                                        </p>
                                        <Link href="/service/batumi_movers" className="mt-auto inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-yellow-400 font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 4: Вывоз мусора */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/trash-removal.jpg"
                                            alt="Вывоз мусора"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Вывоз мусора</h3>
                                        <p className="hidden md:block text-gray-600 leading-relaxed mb-6">
                                            Вывозим строительный мусор и старую мебель на официальный полигон Аджарии. Предоставляем документы об утилизации, чтобы у вас не было проблем с инспекцией.
                                        </p>
                                        <Link href="/service/batumi_trash" className="mt-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 5: Грузовое такси */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/cargo-taxi.jpg"
                                            alt="Грузовое такси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Грузовое такси</h3>
                                        <p className="hidden md:block text-gray-600 leading-relaxed mb-4">
                                            Быстрая доставка из <strong>Domino, Gorgia</strong> и рынка Хопа прямо до двери.
                                        </p>
                                        <p className="hidden md:block text-sm text-gray-500 italic mb-6">
                                            Идеально для 1-2 предметов, когда полная машина не нужна.
                                        </p>
                                        <Link href="/service/batumi_taxi" className="mt-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 6: Междугородние рейсы */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/intercity.png"
                                            alt="Междугородние рейсы"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-black mb-4">Междугородние рейсы</h3>
                                        <p className="hidden md:block text-gray-600 leading-relaxed mb-4">
                                            Регулярные рейсы <strong>Батуми — Тбилиси</strong>. Едем через перевал или автобан.
                                        </p>
                                        <p className="hidden md:block text-sm text-gray-500 italic mb-6">
                                            Заберем вещи из Кобулети, Чакви, Гонио по пути. Страхование груза включено.
                                        </p>
                                        <Link href="/service/intercity" className="mt-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => {
                                    const container = document.getElementById('batumi-services-scroll');
                                    if (container) container.scrollBy({ left: -500, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-yellow-400 border-2 border-gray-200 hover:border-yellow-500 rounded-full p-3 shadow-lg transition-all z-10"
                                aria-label="Предыдущая услуга"
                            >
                                <ArrowRight className="w-6 h-6 text-black rotate-180" />
                            </button>
                            <button
                                onClick={() => {
                                    const container = document.getElementById('batumi-services-scroll');
                                    if (container) container.scrollBy({ left: 500, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-yellow-400 border-2 border-gray-200 hover:border-yellow-500 rounded-full p-3 shadow-lg transition-all z-10"
                                aria-label="Следующая услуга"
                            >
                                <ArrowRight className="w-6 h-6 text-black" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Districts and Prices SEO Block - Styled like Homepage Prices */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                            Цены по районам Батуми
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Price Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-black font-bold text-lg border-r border-yellow-500">
                                                Маршрут
                                            </th>
                                            <th className="px-6 py-4 text-left text-black font-bold text-lg">
                                                Стоимость
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                            <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-black font-semibold border-r border-gray-200 break-words">
                                                Центр (Чавчавадзе)
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                ~40-50 ₾
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                Батуми — Махинджаури
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                ~60 ₾
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                Батуми — Аэропорт/Чорохи
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                ~50 ₾
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition">
                                            <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-black font-semibold border-r border-gray-200 break-words">
                                                Батуми — Гонио
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                ~70-80 ₾
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Districts List - Styled to match */}
                            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-black mb-6">Обслуживаем районы</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        'Старый Батуми',
                                        'Руставели',
                                        'Химшиашвили',
                                        'Багратиони',
                                        'Вокс',
                                        'БНЗ',
                                        'Тамарисцихе',
                                        'Аэропорт',
                                        'Махинджаури',
                                        'Гонио',
                                        'Квариати',
                                        'Чакви'
                                    ].map((district, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-yellow-400 hover:bg-yellow-50 transition-colors cursor-default">
                                            {district}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-yellow-400 font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Рассчитать стоимость в Telegram
                            </a>
                        </div>
                    </div>
                </section>

                {/* "Why Us" for Batumi */}
                <section className="container mx-auto px-4 py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-black">🚚 Особенности грузоперевозок в Батуми</h2>
                        <p className="text-gray-600 text-center mb-12 text-lg">
                            Батуми — сложный город для логистики: узкие дворы, одностороннее движение и высотные комплексы. Обычное такси здесь не справится.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">🏢</div>
                                <h3 className="text-xl font-bold text-black mb-2">Пропуска в ЖК</h3>
                                <p className="text-gray-600">Мы знаем регламенты заезда в Orbi City, Alliance Palace и Real Palace. Вам не придется бегать за охраной.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">🌊</div>
                                <h3 className="text-xl font-bold text-black mb-2">Защита от влаги</h3>
                                <p className="text-gray-600">Батуми — самый влажный город Грузии. Мы никогда не возим мебель в открытом кузове под дождем.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4">⛰️</div>
                                <h3 className="text-xl font-bold text-black mb-2">По всей Аджарии</h3>
                                <p className="text-gray-600">Нужна машина в Гонио, Квариати, Сарпи? Подача за 40 минут. Без доплаты за километраж в черте города.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local FAQ */}
                <section className="container mx-auto px-4 py-20 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-12 text-black">Вопросы про Батуми</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-black">Вы обслуживаете высотки Orbi (Twin Towers)?</h3>
                            <p className="text-gray-600">Да, мы отлично знаем этот комплекс. Знаем, где зона разгрузки (со двора), как получить пропуск и как договориться с охраной о грузовом лифте.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-black">Как работаете в сезон пробок (летом)?</h3>
                            <p className="text-gray-600">Летом мы стараемся планировать переезды на раннее утро (до 10:00) или поздний вечер, чтобы машина не стояла в пробке на ул. Руставели или Тбел-Абусеридзе.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-black">Выезжаете ли вы в горную Аджарию?</h3>
                            <p className="text-gray-600">Да, мы ездим в Кеду, Хуло, Шуахеви. У нас есть мощные дизельные машины, которые справятся с горным серпантином.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-black">Можно ли вывезти старую мебель?</h3>
                            <p className="text-gray-600">Конечно. Мы вывозим старую мебель на официальную свалку. Это важно, так как выбрасывать мебель в обычные баки в Батуми запрещено (высокие штрафы).</p>
                        </div>
                    </div>
                </section>

                {/* Internal Linking */}
                <section className="container mx-auto px-4 py-10 border-t border-gray-200">
                    <p className="text-center text-gray-500 mb-6">Популярные направления:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/tbilisi" className="text-blue-600 hover:text-blue-800 transition underline">Переезд в Тбилиси</Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/kutaisi" className="text-blue-600 hover:text-blue-800 transition underline">Переезд в Кутаиси</Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/rustavi" className="text-blue-600 hover:text-blue-800 transition underline">Переезд в Рустави</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
