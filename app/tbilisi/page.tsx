
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight } from 'lucide-react';
import { generateLocalBusinessSchema } from '@/lib/seo';

export default function TbilisiPage() {
    const schema = generateLocalBusinessSchema('Тбилиси');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />
            <main className="bg-gradient-to-br from-yellow-50 to-white">
                <Hero
                    title="Грузоперевозки в Тбилиси"
                    subtitle="Быстрая подача во все районы столицы. Пропуск в центр, работаем 24/7."
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
                                src="/georgia-map.jpg"
                                alt="Tbilisi Map"
                                fill
                                className="object-cover opacity-20"
                            />
                            {/* Overlay to dim the image for text readability */}
                            <div className="absolute inset-0 bg-white/85" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black break-words">Эксперты по Тбилиси</h2>
                            <p className="text-black text-base md:text-lg leading-relaxed mb-3 md:mb-4 font-medium break-words">
                                Мы знаем специфику трафика и рельефа столицы.
                                Как объехать пробки, где парковка в Сололаки,
                                и какая машина поднимется на подъемы Мтацминды.
                            </p>
                            <p className="text-black text-base md:text-lg leading-relaxed mb-3 md:mb-4 font-medium break-words">
                                Работаем во всех районах: <strong>Сабуртало, Ваке, Дидубе, Исани</strong> и других.
                            </p>
                            <p className="text-blue-700 text-base md:text-lg font-bold leading-relaxed break-words">
                                🏙️ Есть пропуск для въезда в центр.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Adapted Services - SCROLLABLE like Homepage and Batumi */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                            Наши услуги в Тбилиси
                        </h2>

                        <div className="relative">
                            {/* Scroll Container */}
                            <div
                                id="tbilisi-services-scroll"
                                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {/* Service 1: Квартирный переезд */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/apartment-moving.jpg"
                                            alt="Квартирный переезд Тбилиси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 break-words">Квартирный переезд</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4 break-words">
                                            Переезд под ключ в любой район. Упаковка, разборка мебели, грузчики.
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-500 italic mb-4 md:mb-6 break-words">
                                            Перевезем даже по серпантинам в Цхнети или Коджори.
                                        </p>
                                        <Link href="/service/tbilisi_moving" className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 2: Офисный переезд */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/office-moving.jpg"
                                            alt="Офисный переезд Тбилиси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 break-words">Офисный переезд</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 break-words">
                                            Переезд офисов в бизнес-центры. Работаем по безналу, документы на руки. Возможен ночной переезд.
                                        </p>
                                        <Link href="/service/tbilisi_office" className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 3: Услуги грузчиков */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-blue-500 border-2 border-blue-600 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group relative snap-start flex flex-col">
                                    <div className="absolute top-4 right-4 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-lg z-10">
                                        ПОПУЛЯРНО
                                    </div>
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/movers-service.jpg"
                                            alt="Услуги грузчиков Тбилиси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-words">Услуги грузчиков</h3>
                                        <p className="text-sm md:text-base text-blue-50 leading-relaxed mb-4 md:mb-6 break-words">
                                            Крепкие ребята: подъем без лифта, разгрузка фур, перестановка мебели.
                                        </p>
                                        <Link href="/service/tbilisi_movers" className="mt-auto inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 4: Вывоз мусора */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/trash-removal.jpg"
                                            alt="Вывоз мусора Тбилиси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 break-words">Вывоз мусора</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 break-words">
                                            Вывоз мусора и мебели на полигон. Соблюдаем законы об утилизации.
                                        </p>
                                        <Link href="/service/tbilisi_trash" className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 5: Грузовое такси */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/cargo-taxi.jpg"
                                            alt="Грузовое такси Тбилиси"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 break-words">Грузовое такси</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4 break-words">
                                            Подача машины за 30-60 мин.
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-500 italic mb-4 md:mb-6 break-words">
                                            Доставка из магазинов (Domino, Gorgia, Modus).
                                        </p>
                                        <Link href="/service/tbilisi_taxi" className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Service 6: Междугородние рейсы */}
                                <div className="flex-none w-[85%] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group snap-start flex flex-col">
                                    <div className="w-full h-64 relative overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/intercity.png"
                                            alt="Междугородние рейсы"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 break-words">Междугородние рейсы</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4 break-words">
                                            Рейсы <strong>Тбилиси — Батуми</strong>. Попутные грузы и отдельные машины.
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-500 italic mb-4 md:mb-6 break-words">
                                            Заберем груз из любой точки и доставим по Грузии.
                                        </p>
                                        <Link href="/service/intercity" className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3 w-fit">
                                            Подробнее <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => {
                                    const container = document.getElementById('tbilisi-services-scroll');
                                    if (container) container.scrollBy({ left: -500, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-400 border-2 border-gray-200 hover:border-blue-500 rounded-full p-3 shadow-lg transition-all z-10"
                                aria-label="Предыдущая услуга"
                            >
                                <ArrowRight className="w-6 h-6 text-black rotate-180" />
                            </button>
                            <button
                                onClick={() => {
                                    const container = document.getElementById('tbilisi-services-scroll');
                                    if (container) container.scrollBy({ left: 500, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-400 border-2 border-gray-200 hover:border-blue-500 rounded-full p-3 shadow-lg transition-all z-10"
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
                            Районы обслуживания в Тбилиси
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-center">
                            {['Сабуртало', 'Ваке', 'Мтацминда', 'Крцаниси', 'Исани', 'Самгори', 'Чугурети', 'Дидубе', 'Надзаладеви', 'Глдани'].map((district) => (
                                <div key={district} className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors cursor-default">
                                    <span className="font-medium text-gray-800">{district}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
