
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Helper to render formatting in table if needed
// Actually we can just keep structure simple.

export default function PricingPage() {
    const [city, setCity] = useState<'tbilisi' | 'batumi'>('tbilisi');

    return (
        <>
            <Header />
            <main className="bg-white min-h-screen">
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        {/* Заголовок */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                Прозрачные тарифы на перевозки
                            </h1>
                            <p className="text-xl text-gray-600">
                                Выберите ваш город, чтобы увидеть актуальные цены
                            </p>
                        </div>

                        {/* Вкладки (Tabs) */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-white p-1 rounded-full shadow-md border border-gray-200 inline-flex">
                                <button
                                    onClick={() => setCity('tbilisi')}
                                    className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${city === 'tbilisi'
                                        ? 'bg-yellow-400 text-black shadow-sm'
                                        : 'text-gray-500 hover:text-black hover:bg-gray-100'
                                        }`}
                                >
                                    Тбилиси
                                </button>
                                <button
                                    onClick={() => setCity('batumi')}
                                    className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${city === 'batumi'
                                        ? 'bg-yellow-400 text-black shadow-sm'
                                        : 'text-gray-500 hover:text-black hover:bg-gray-100'
                                        }`}
                                >
                                    Батуми
                                </button>
                            </div>
                        </div>

                        {/* Таблица цен */}
                        {/* Чтобы избежать контентного сдвига (Layout Shift), можно задать мин. высоту,
                            но пока просто рендерим условно */}
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100 border-b border-gray-200">
                                            <th className="p-4 md:p-6 text-black font-bold text-lg w-1/3">Услуга</th>
                                            <th className="p-4 md:p-6 text-black font-bold text-lg w-1/3">Ед. измерения</th>
                                            <th className="p-4 md:p-6 text-black font-bold text-lg w-1/3">Цена</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {city === 'tbilisi' ? (
                                            <>
                                                {/* ТБИЛИСИ DATA */}
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Квартирный переезд</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Машина + Грузчики</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 50 ₾/час</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Офисный переезд</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Рабочее место</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 60 ₾/шт</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Услуги грузчиков</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Почасовая работа</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">50 ₾/час</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Вывоз мусора</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Строительный мусор</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">4 ₾/мешок</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Грузовое такси</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Рейс по городу</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">50 ₾</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Междугородний</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Тбилиси → Батуми</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 450 ₾</td>
                                                </tr>
                                            </>
                                        ) : (
                                            <>
                                                {/* БАТУМИ DATA */}
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Квартирный переезд</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Минивэн/Спринтер</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 45 ₾/час</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Офисный переезд</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Рабочее место</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 55 ₾/шт</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Услуги грузчиков</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Работа в высотках</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">50 ₾/час</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Вывоз мусора</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Вывоз на полигон</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 100 ₾/рейс</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Грузовое такси</td>
                                                    <td className="p-4 md:p-6 text-gray-600">По городу (до 5 км)</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">40 ₾</td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50 transition-colors">
                                                    <td className="p-4 md:p-6 text-black font-medium">Междугородний</td>
                                                    <td className="p-4 md:p-6 text-gray-600">Батуми → Тбилиси</td>
                                                    <td className="p-4 md:p-6 text-black font-bold">от 450 ₾</td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="max-w-4xl mx-auto mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                            <p className="text-black leading-relaxed">
                                <span className="font-bold">⚠️ Важно знать:</span> Указанные цены являются базовыми.
                                Итоговая стоимость может меняться в зависимости от этажности (наличие лифта),
                                веса предметов более 100 кг (пианино, сейфы) и выезда в пригороды.
                                Для точного расчета пришлите фото груза — мы назовем фиксированную цену.
                            </p>
                        </div>

                        {/* Кнопка внизу */}
                        <div className="text-center mt-12">
                            <Link
                                href="/contacts"
                                className="inline-block bg-black text-yellow-400 hover:bg-gray-800 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                Рассчитать точную стоимость
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
