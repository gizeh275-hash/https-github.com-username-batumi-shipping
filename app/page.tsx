'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, Home as HomeIcon, Trash2, Users, Car, ArrowRight, Shield, MessageCircle, Package, DollarSign, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* 1. HERO SECTION - Split Layout with Image */}
                {/* 1. HERO SECTION - Premium Mobile / Split Desktop */}
                <section className="relative min-h-[90vh] lg:min-h-screen flex items-end lg:items-center bg-white overflow-hidden">
                    {/* Mobile Background Image (Absolute) */}
                    <div
                        className="absolute inset-0 lg:hidden z-0"
                        style={{
                            backgroundImage: "url('/hero-movers.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                    </div>

                    <div className="container mx-auto px-0 lg:px-4 h-full relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[90vh] lg:min-h-[700px]">

                            {/* Desktop Image (Hidden on Mobile) */}
                            <div className="hidden lg:block relative overflow-hidden rounded-l-3xl order-1">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('/hero-movers.jpg')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-yellow-400/10" />
                            </div>

                            {/* Content Block */}
                            <div className="w-full h-full flex items-end lg:items-center order-2">
                                {/* Desktop Yellow Background Layer */}
                                <div className="hidden lg:block absolute inset-0 left-[50%] bg-yellow-400 rounded-r-3xl -z-10" />

                                <div className="p-6 pb-24 md:p-12 lg:p-16 w-full lg:bg-transparent text-white lg:text-black">
                                    {/* Decoration (Desktop Only) */}
                                    <div className="hidden lg:flex absolute top-8 right-8 gap-2">
                                        <div className="w-8 h-8 bg-black transform rotate-45" />
                                        <div className="w-8 h-8 bg-black transform rotate-45" />
                                    </div>

                                    <p className="text-xs font-bold mb-3 uppercase tracking-widest text-yellow-400 lg:text-black/60">
                                        Georgia Moving
                                    </p>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight shadow-black/50 lg:shadow-none">
                                        Грузоперевозки <br className="hidden lg:block" />
                                        <span className="text-yellow-400 lg:text-black">по всей Грузии.</span>
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-200 lg:text-black/80 mb-8 leading-relaxed max-w-xl font-medium">
                                        Подача машины за 30 минут в Тбилиси и Батуми.
                                        Гарантируем полную сохранность груза.
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="https://t.me/PereezdBatumiBot"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-lg px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95"
                                        >
                                            Рассчитать стоимость
                                            <ArrowRight className="w-6 h-6" />
                                        </a>
                                        <a
                                            href="#services"
                                            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white/20 lg:bg-white backdrop-blur-md hover:bg-white/30 text-white lg:text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all border border-white/30 lg:border-none active:scale-95"
                                        >
                                            Наши услуги
                                        </a>
                                    </div>

                                </section>

                                {/* 2. SERVICES GRID - 6 Cards */}
                                <section id="services" className="py-20 bg-white">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                                            Наши услуги
                                        </h2>

                                        {/* Horizontal Scrollable Services */}
                                        <div className="relative">
                                            {/* Scroll Container */}
                                            <div
                                                id="services-scroll"
                                                className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 md:px-0 -mx-4 md:mx-0"
                                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                            >
                                                {/* Service 1: Квартирный переезд */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-center md:snap-start">
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/apartment-moving.jpg"
                                                            alt="Грузчики упаковывают диван пузырчатой пленкой при квартирном переезде"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Квартирный переезд</h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            Упакуем вещи в пузырчатую пленку и картон, перевезем, расставим мебель на новом месте. Вам не придется паковать хрупкое самостоятельно.
                                                        </p>
                                                        <Link href="/service/moving" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Service 2: Офисный переезд */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-center md:snap-start">
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/office-moving.jpg"
                                                            alt="Команда грузчиков переезжает офис с видом на море"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Офисный переезд</h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            Перевозим технику, мебель и архивы с документами. Принимаем безнал, выдаем закрывающие документы. Работаем по графику — ваш бизнес не встанет.
                                                        </p>
                                                        <Link href="/service/office" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Service 3: Услуги грузчиков (ПОПУЛЯРНО) */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-yellow-400 border-2 border-yellow-500 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group relative snap-center md:snap-start">
                                                    <div className="absolute top-4 right-4 bg-black text-yellow-400 text-xs font-bold px-3 py-1 rounded-lg z-10">
                                                        ПОПУЛЯРНО
                                                    </div>
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/movers-service.jpg"
                                                            alt="Грузчики несут тяжелую мебель по лестнице"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Услуги грузчиков</h3>
                                                        <p className="text-black leading-relaxed mb-6">
                                                            Трезвые ребята с инструментами. Разберут шкаф, вынесут холодильник с 9 этажа, загрузят фуру. Есть тележки, стяжки и защитные перчатки.
                                                        </p>
                                                        <Link href="/service/movers" className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-yellow-400 font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Service 4: Вывоз мусора */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-center md:snap-start">
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/trash-removal.jpg"
                                                            alt="Грузчики вывозят строительный мусор и мебель"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Вывоз мусора</h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            Вывозим строительный мусор и старую мебель на официальный полигон. Никаких свалок в лесу и штрафов от мэрии.
                                                        </p>
                                                        <Link href="/trash" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Service 5: Грузовое такси */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-center md:snap-start">
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/cargo-taxi.jpg"
                                                            alt="Грузчики загружают коробки в грузовой фургон"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Грузовое такси</h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            Купили диван, холодильник или стройматериалы? Довезем от магазина до двери за час. Подходим для 1-2 предметов, когда полная машина не нужна.
                                                        </p>
                                                        <Link href="/service/taxi" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Service 6: Междугородние рейсы */}
                                                <div className="flex-none w-[85vw] md:w-[450px] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all group snap-center md:snap-start">
                                                    {/* Image */}
                                                    <div className="w-full h-48 md:h-64 relative overflow-hidden">
                                                        <Image
                                                            src="/intercity.png"
                                                            alt="Грузовой фургон едет по горной дороге Грузии"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-5 md:p-8">
                                                        <h3 className="text-2xl font-bold text-black mb-4">Междугородние рейсы</h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            Регулярно ездим по маршруту Тбилиси — Батуми и обратно. Вещи в крытом кузове, страхуем груз на время поездки. Доставка за 1 день.
                                                        </p>
                                                        <Link href="/service/intercity" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all group-hover:gap-3">
                                                            Подробнее <ArrowRight className="w-5 h-5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Navigation Arrows */}
                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById('services-scroll');
                                                    if (container) container.scrollBy({ left: -500, behavior: 'smooth' });
                                                }}
                                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-yellow-400 border-2 border-gray-200 hover:border-yellow-500 rounded-full p-3 shadow-lg transition-all z-10"
                                                aria-label="Предыдущая услуга"
                                            >
                                                <ArrowRight className="w-6 h-6 text-black rotate-180" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById('services-scroll');
                                                    if (container) container.scrollBy({ left: 500, behavior: 'smooth' });
                                                }}
                                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-yellow-400 border-2 border-gray-200 hover:border-yellow-500 rounded-full p-3 shadow-lg transition-all z-10"
                                                aria-label="Следующая услуга"
                                            >
                                                <ArrowRight className="w-6 h-6 text-black" />
                                            </button>
                                        </div>

                                        {/* Hint for mobile users */}
                                        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
                                            👉 Листайте вправо, чтобы увидеть все услуги
                                        </p>
                                    </div>
                                </section>


                                {/* 5. PRICES - Simple Table */}
                                <section id="prices" className="py-20 bg-white">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                                            Цены на услуги
                                        </h2>

                                        <div className="max-w-4xl mx-auto">
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                                    <thead className="bg-yellow-400">
                                                        <tr>
                                                            <th className="px-6 py-4 text-left text-black font-bold text-lg border-r border-yellow-500">
                                                                Услуга
                                                            </th>
                                                            <th className="px-6 py-4 text-left text-black font-bold text-lg">
                                                                Стоимость
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white">
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Минивэн (по городу)
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 50 GEL
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Спринтер (по городу)
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 80 GEL
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Большой грузовик
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 150 GEL
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Услуги грузчиков (1 час)
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 50 GEL/чел
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Вывоз мусора (за машину)
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 100 GEL
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50 transition">
                                                            <td className="px-6 py-4 text-black font-semibold border-r border-gray-200">
                                                                Квартирный переезд (1-комн.)
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-700">
                                                                От 200 GEL
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="mt-8 text-center">
                                                <p className="text-gray-600 mb-6">
                                                    * Точная стоимость рассчитывается индивидуально в зависимости от объёма работ и расстояния
                                                </p>
                                                <a
                                                    href="https://t.me/PereezdBatumiBot"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                                >
                                                    Рассчитать точную стоимость
                                                    <ArrowRight className="w-6 h-6" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* 6. CARS SECTION - Transport */}
                                <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                                            Наш Автопарк
                                        </h2>

                                        <div className="relative">
                                            <div
                                                id="fleet-scroll"
                                                className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 md:px-0 -mx-4 md:mx-0"
                                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                            >
                                                {/* Минивэн */}
                                                <div className="flex-none w-[85vw] md:w-[400px] snap-center md:snap-start text-center">
                                                    <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 hover:bg-yellow-50 transition-all border border-gray-100">
                                                        <div className="relative h-48 md:h-64 w-full">
                                                            <Image
                                                                src="/minivan.jpg"
                                                                alt="Белый минивэн с открытыми дверями и коробками внутри"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-black mb-2">Минивэн</h3>
                                                    <p className="text-gray-600 font-semibold mb-1">Грузоподъёмность: до 800 кг</p>
                                                    <p className="text-gray-500 text-sm">Идеален для небольших грузов</p>
                                                </div>

                                                {/* Спринтер */}
                                                <div className="flex-none w-[85vw] md:w-[400px] snap-center md:snap-start text-center">
                                                    <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 hover:bg-yellow-50 transition-all border border-gray-100">
                                                        <div className="relative h-48 md:h-64 w-full">
                                                            <Image
                                                                src="/sprinter.jpg"
                                                                alt="Белый спринтер с открытыми дверями и мебелью внутри"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-black mb-2">Спринтер</h3>
                                                    <p className="text-gray-600 font-semibold mb-1">Грузоподъёмность: до 1,5 тонн</p>
                                                    <p className="text-gray-500 text-sm">Оптимален для квартирных переездов</p>
                                                </div>

                                                {/* Большой грузовик */}
                                                <div className="flex-none w-[85vw] md:w-[400px] snap-center md:snap-start text-center">
                                                    <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 hover:bg-yellow-50 transition-all border border-gray-100">
                                                        <div className="relative h-48 md:h-64 w-full">
                                                            <Image
                                                                src="/big-truck.jpg"
                                                                alt="Большой грузовик с открытым кузовом и офисной мебелью"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-black mb-2">Большой грузовик</h3>
                                                    <p className="text-gray-600 font-semibold mb-1">Грузоподъёмность: до 5 тонн</p>
                                                    <p className="text-gray-500 text-sm">Для крупных грузов и офисных переездов</p>
                                                </div>

                                                {/* Грузовик для мусора */}
                                                <div className="flex-none w-[85vw] md:w-[400px] snap-center md:snap-start text-center">
                                                    <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 hover:bg-yellow-50 transition-all border border-gray-100">
                                                        <div className="relative h-48 md:h-64 w-full">
                                                            <Image
                                                                src="/trash-truck.jpg"
                                                                alt="Грузовик с мешками строительного мусора"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-black mb-2">Грузовик для мусора</h3>
                                                    <p className="text-gray-600 font-semibold mb-1">Грузоподъёмность: до 3 тонн</p>
                                                    <p className="text-gray-500 text-sm">Вывоз строительного мусора на легальную свалку</p>
                                                </div>
                                            </div>

                                            {/* Navigation Arrows */}
                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById('fleet-scroll');
                                                    if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                                                }}
                                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-400 border-2 border-gray-200 hover:border-blue-500 rounded-full p-3 shadow-lg transition-all z-10"
                                                aria-label="Предыдущее авто"
                                            >
                                                <ArrowRight className="w-6 h-6 text-black rotate-180" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById('fleet-scroll');
                                                    if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                                                }}
                                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-400 border-2 border-gray-200 hover:border-blue-500 rounded-full p-3 shadow-lg transition-all z-10"
                                                aria-label="Следующее авто"
                                            >
                                                <ArrowRight className="w-6 h-6 text-black" />
                                            </button>
                                        </div>

                                        {/* Hint for mobile users */}
                                        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
                                            👉 Листайте вправо, чтобы увидеть весь автопарк
                                        </p>

                                        {/* Important Note */}
                                        <div className="mt-12 max-w-3xl mx-auto text-center">
                                            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                                                <p className="text-gray-700 font-semibold leading-relaxed">
                                                    ⚠️ Мы используем <strong className="text-black">отдельные машины для переезда и вывоза мусора</strong>.
                                                    Грузовики для строительного мусора никогда не возят домашние вещи — это гарантирует чистоту и сохранность ваших вещей.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* 5. WORKFLOW SECTION */}
                                <section className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-50">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                                            Как заказать переезд
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                            {/* Step 1 */}
                                            <div className="relative">
                                                <div className="bg-yellow-400 text-black text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                                    1
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3 text-center">Заявка</h3>
                                                <p className="text-gray-600 text-center leading-relaxed">
                                                    Отправьте фото вещей в Telegram или опишите объем. Если не знаете точно — пришлите видео комнаты.
                                                </p>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="relative">
                                                <div className="bg-yellow-400 text-black text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                                    2
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3 text-center">Оценка</h3>
                                                <p className="text-gray-600 text-center leading-relaxed">
                                                    Называем точную стоимость в течение 10 минут. Фиксируем цену, количество грузчиков и время подачи.
                                                </p>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="relative">
                                                <div className="bg-yellow-400 text-black text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                                    3
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3 text-center">Переезд</h3>
                                                <p className="text-gray-600 text-center leading-relaxed">
                                                    Приезжаем вовремя, упаковываем хрупкие вещи, грузим и везем. Заносим мебель и собираем то, что разбирали.
                                                </p>
                                            </div>

                                            {/* Step 4 */}
                                            <div className="relative">
                                                <div className="bg-yellow-400 text-black text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                                    4
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3 text-center">Оплата</h3>
                                                <p className="text-gray-600 text-center leading-relaxed">
                                                    Платите после того, как проверите сохранность вещей. Принимаем наличные, карты и переводы.
                                                </p>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
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

                                {/* 4. BENEFITS SECTION */}
                                <section className="py-20 bg-gray-50">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                                            Почему мы?
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                            {/* Benefit 1 */}
                                            <div className="text-center">
                                                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                                    <DollarSign className="w-10 h-10 text-black" />
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3">Фиксированная цена</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Называем стоимость до начала работы — она не изменится. Без доплат за этажи, повороты и "сложную мебель".
                                                </p>
                                            </div>

                                            {/* Benefit 2 */}
                                            <div className="text-center">
                                                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                                    <Shield className="w-10 h-10 text-black" />
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3">Безопасность вещей</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Главное для нас — доставить груз целым. Мы отвечаем за каждую коробку и предмет мебели.
                                                </p>
                                            </div>

                                            {/* Benefit 3 */}
                                            <div className="text-center">
                                                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                                    <MessageCircle className="w-10 h-10 text-black" />
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3">Говорим на вашем языке</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    В команде русскоязычные, англоговорящие и грузиноязычные сотрудники. Общаемся на удобном вам языке.
                                                </p>
                                            </div>

                                            {/* Benefit 4 */}
                                            <div className="text-center">
                                                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                                    <Package className="w-10 h-10 text-black" />
                                                </div>
                                                <h3 className="text-xl font-bold text-black mb-3">Правильная упаковка</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Используем пузырчатую пленку для техники, стрейч для дверей шкафов, картонные коробки для посуды.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* 3. GEOGRAPHY SECTION */}
                                <section className="relative py-32 bg-white overflow-hidden">
                                    {/* Background Map */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src="/georgia-map.jpg"
                                            alt="Карта Грузии"
                                            fill
                                            className="object-cover opacity-100"
                                        />
                                        {/* Gradient overlay for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white/75"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="container mx-auto px-4 relative z-10 p-5 md:p-8">
                                        <div className="max-w-4xl mx-auto text-center">
                                            <div className="inline-block bg-yellow-400 rounded-full p-4 mb-6 shadow-lg">
                                                <MapPin className="w-12 h-12 text-black" />
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                                                Работаем по всей Грузии
                                            </h2>
                                            <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                                                Наши машины базируются в <span className="font-bold text-black bg-yellow-400/30 px-2 py-1 rounded">Тбилиси, Батуми, Кутаиси, Рустави и Кобулети</span>.
                                                Это значит, что вам не придется ждать грузовик из столицы — мы подаем технику из ближайшего города за 30-40 минут.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                Везем грузы между регионами, в горные районы (Гудаури, Степанцминда, Местиа), на побережье (Уреки, Гонио, Квариати)
                                                и по Кахетии. Если вы релоцируетесь из Тбилиси в Батуми или переезжаете на дачу в Боржоми — маршрут отработан.
                                            </p>
                                        </div>
                                    </div>
                                </section>









                                {/* SEO TEXT BLOCK */}
                                <section className="py-20 bg-gray-50">
                                    <div className="container mx-auto px-4">
                                        <div className="max-w-5xl mx-auto">
                                            {/* Header with icon */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="bg-yellow-400 rounded-full p-4">
                                                    <Shield className="w-8 h-8 text-black" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-black">
                                                    Грузоперевозки в Грузии с материальной ответственностью
                                                </h2>
                                            </div>

                                            {/* Content blocks */}
                                            <div className="space-y-6">
                                                {/* Block 1 - Experience */}
                                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-yellow-400 rounded-lg px-3 py-1 font-bold text-black text-sm whitespace-nowrap mt-1">
                                                            С 2022 года
                                                        </div>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            Мы занимаемся <strong className="text-black">грузоперевозками в Тбилиси, Батуми и других городах Грузии</strong>.
                                                            В нашем автопарке — Газели, Hyundai Porter и 5-тонники для крупных заказов. Если вам нужен <strong className="text-black">квартирный переезд в Батуми</strong> или
                                                            <strong className="text-black"> перевозка мебели с грузчиками</strong> в Тбилиси — мы подаем машину за <span className="bg-yellow-100 px-2 py-1 rounded font-semibold text-black">30 минут</span>.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Block 2 - Pricing */}
                                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-yellow-400 rounded-lg px-3 py-1 font-bold text-black text-sm whitespace-nowrap mt-1">
                                                            150-200₾
                                                        </div>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            <strong className="text-black">Грузоперевозки Тбилиси: цены</strong> зависят от объема и расстояния. Средний переезд однушки стоит 150-200 лари с упаковкой и грузчиками.
                                                            Можно <strong className="text-black">заказать Газель в Грузии</strong> на несколько часов или на целый день — тариф обсуждается заранее.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Block 3 - Services */}
                                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <Package className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                                        <p className="text-gray-700 leading-relaxed">
                                                            Среди наших услуг: <strong className="text-black">доставка стройматериалов</strong> на объект (песок, цемент, плитка, гипсокартон),
                                                            вывоз строительного мусора на лицензированный полигон, междугородние перевозки (Тбилиси — Батуми, Кутаиси — Тбилиси),
                                                            офисные переезды с безналичным расчетом для компаний, перевозка техники и мебели из магазинов.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Block 4 - Full Cycle */}
                                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                                        <p className="text-gray-700 leading-relaxed">
                                                            Мы работаем как <strong className="text-black">профессиональная команда</strong> полного цикла: не просто везем коробки, а упаковываем хрупкое, разбираем мебель,
                                                            берем на себя ответственность за груз и собираем все на новом месте. Все наши ребята — крепкие, трезвые, с инструментами и опытом.
                                                            Материальная ответственность — наш приоритет.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Block 5 - CTA */}
                                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 shadow-lg">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-black rounded-lg px-3 py-1 font-bold text-yellow-400 text-sm whitespace-nowrap mt-1">
                                                            10 минут
                                                        </div>
                                                        <p className="text-black font-semibold leading-relaxed">
                                                            Если ищете <strong>грузоперевозки в Грузии</strong> с фиксированной ценой, без доплат и нервов — пришлите фото вещей.
                                                            Ответим в течение 10 минут.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* FINAL CTA */}
                                <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
                                    <div className="container mx-auto px-4 text-center">
                                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                                            Не таскайте тяжести сами
                                        </h2>
                                        <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
                                            Пришлите фото вещей — мы назовем точную цену за 10 минут. Машину подадим в течение часа.
                                            Первые 100 клиентов получают бесплатную упаковку хрупких предметов.
                                        </p>
                                        <a
                                            href="https://t.me/PereezdBatumiBot"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-xl px-12 py-6 rounded-lg transition-all transform hover:scale-105 shadow-2xl"
                                        >
                                            Рассчитать стоимость в Telegram
                                            <ArrowRight className="w-6 h-6" />
                                        </a>
                                    </div>
                                </section>
                            </main >
                            <Footer />
                        </>
                        );
}
