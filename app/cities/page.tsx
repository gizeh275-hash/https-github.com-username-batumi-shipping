import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight, Truck } from 'lucide-react';
import { citiesData, cityGroups } from '@/lib/citiesData';

export const metadata: Metadata = {
    title: 'Грузоперевозки по всей Грузии | Все города и направления',
    description: 'Переезды и грузоперевозки во все города и курорты Грузии. Батуми, Тбилиси, Кутаиси, Кобулети, Гудаури и другие направления.',
    keywords: 'грузоперевозки Грузия, переезды все города, доставка по Грузии, междугородние перевозки',
};

export default function CitiesPage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Грузоперевозки по всей Грузии
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Работаем во всех крупных городах, курортах и регионах Грузии.
                                Выберите ваш город или маршрут для получения подробной информации.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Major Cities */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <MapPin className="inline w-10 h-10 text-yellow-500 mr-3" />
                        Крупные города
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Основные города Грузии с развитой инфраструктурой и большим опытом работы
                    </p>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cityGroups.major.map((citySlug) => {
                            const city = citiesData[citySlug];
                            return (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold group-hover:text-yellow-600 transition">
                                                {city.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm">{city.region}</p>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-1 transition" />
                                    </div>
                                    <p className="text-gray-700 mb-4 line-clamp-2">{city.description}</p>
                                    {city.population && (
                                        <p className="text-sm text-gray-600">👥 {city.population}</p>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Intercity Routes */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <Truck className="inline w-10 h-10 text-yellow-500 mr-3" />
                        Междугородние маршруты
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Популярные маршруты между крупными городами Грузии
                    </p>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cityGroups.intercity.map((citySlug) => {
                            const city = citiesData[citySlug];
                            return (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-yellow-600 transition">
                                                {city.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm">{city.region}</p>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-1 transition" />
                                    </div>
                                    <p className="text-gray-700 mb-3 line-clamp-2">{city.description}</p>
                                    {city.distance && (
                                        <p className="text-sm font-semibold text-yellow-600">📍 {city.distance}</p>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Batumi Region & Resorts */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        🏖️ Батуми и Аджария
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Курортные города и поселки Черноморского побережья
                    </p>

                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cityGroups.batumi_region.map((citySlug) => {
                            const city = citiesData[citySlug];
                            return (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="group bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-lg transition-all text-center"
                                >
                                    <h3 className="text-lg font-bold group-hover:text-yellow-600 transition mb-2">
                                        {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-xs mb-2">{city.region}</p>
                                    <ArrowRight className="w-5 h-5 text-yellow-500 mx-auto group-hover:translate-x-1 transition" />
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Regional Cities */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        🏘️ Региональные города
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Другие города и курорты Грузии
                    </p>

                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cityGroups.regional.map((citySlug) => {
                            const city = citiesData[citySlug];
                            return (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="group bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-lg transition-all text-center"
                                >
                                    <h3 className="text-lg font-bold group-hover:text-yellow-600 transition mb-2">
                                        {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-xs mb-2">{city.region}</p>
                                    <ArrowRight className="w-5 h-5 text-yellow-500 mx-auto group-hover:translate-x-1 transition" />
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Не нашли свой город?
                        </h2>
                        <p className="text-xl text-black mb-6">
                            Мы работаем по всей Грузии! Напишите нам, и мы организуем переезд в любой населенный пункт.
                        </p>
                        <a
                            href="https://t.me/PereezdBatumiBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105"
                        >
                            Написать в Telegram
                            <ArrowRight className="w-6 h-6" />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
