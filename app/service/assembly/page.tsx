import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Wrench, Clock, CheckCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Сборка и разборка мебели в Грузии | Профессиональная сборка',
    description: 'Профессиональная сборка и разборка мебели любой сложности. Опытные мастера, все инструменты. Батуми, Тбилиси, вся Грузия.',
    keywords: 'сборка мебели, разборка мебели, сборка шкафов, сборка кухни, мастер по сборке',
    openGraph: {
        title: 'Сборка и разборка мебели - Профессиональные мастера',
        description: 'Быстрая и качественная сборка и разборка мебели любой сложности',
    },
};

export default function AssemblyServicePage() {
    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Сборка и разборка мебели
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Профессиональная разборка и сборка мебели любой сложности с гарантией качества
                            </p>
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105"
                            >
                                Заказать мастера
                                <ArrowRight className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* What We Assemble */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Что мы собираем и разбираем</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🛏️</div>
                                <h3 className="font-bold text-lg mb-3">Спальни</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Кровати и диваны</li>
                                    <li>• Шкафы-купе</li>
                                    <li>• Комоды</li>
                                    <li>• Прикроватные тумбы</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🍳</div>
                                <h3 className="font-bold text-lg mb-3">Кухни</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Кухонные гарнитуры</li>
                                    <li>• Столешницы</li>
                                    <li>• Встроенная техника</li>
                                    <li>• Барные стойки</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🪑</div>
                                <h3 className="font-bold text-lg mb-3">Гостиные</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Стенки и горки</li>
                                    <li>• ТВ-тумбы</li>
                                    <li>• Стеллажи</li>
                                    <li>• Журнальные столики</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">💼</div>
                                <h3 className="font-bold text-lg mb-3">Офисная мебель</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Офисные столы</li>
                                    <li>• Кресла</li>
                                    <li>• Шкафы для документов</li>
                                    <li>• Стеллажи</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🚪</div>
                                <h3 className="font-bold text-lg mb-3">Прихожие</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Шкафы для одежды</li>
                                    <li>• Обувницы</li>
                                    <li>• Вешалки</li>
                                    <li>• Зеркала</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🛠️</div>
                                <h3 className="font-bold text-lg mb-3">Другое</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• Детская мебель</li>
                                    <li>• Полки</li>
                                    <li>• Встроенные шкафы</li>
                                    <li>• Любая корпусная мебель</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Work */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Как мы работаем</h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                                <h3 className="font-bold mb-2">Оценка</h3>
                                <p className="text-sm text-gray-600">Оцениваем объем работы и называем точную стоимость</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                                <h3 className="font-bold mb-2">Разборка</h3>
                                <p className="text-sm text-gray-600">Аккуратно разбираем, маркируем все детали</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                                <h3 className="font-bold mb-2">Транспортировка</h3>
                                <p className="text-sm text-gray-600">Бережно перевозим на новое место</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                                <h3 className="font-bold mb-2">Сборка</h3>
                                <p className="text-sm text-gray-600">Собираем и устанавливаем мебель на новом месте</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Wrench className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Все инструменты с собой</h3>
                                    <p className="text-gray-700">
                                        Профессиональный инструмент для любых типов мебели
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Clock className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Быстрая работа</h3>
                                    <p className="text-gray-700">
                                        Опыт позволяет нам работать быстро и качественно
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <Shield className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
                                    <p className="text-gray-700">
                                        Несем ответственность за сохранность мебели
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Опытные мастера</h3>
                                    <p className="text-gray-700">
                                        Знаем особенности сборки всех популярных брендов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Стоимость услуг</h2>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <p className="text-lg mb-6">
                                Стоимость зависит от сложности и объема мебели:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                    <span><strong>Простая мебель</strong> (полки, тумбы): от 20 ₾ за единицу</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                    <span><strong>Средняя сложность</strong> (шкафы, комоды): 30-50 ₾ за единицу</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                    <span><strong>Сложная мебель</strong> (кухни, шкафы-купе): от 80 ₾ за единицу</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm text-gray-600">
                                Точную стоимость рассчитаем после получения фото или списка мебели
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-yellow-400 to-orange-400">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Нужна сборка или разборка мебели?
                        </h2>
                        <p className="text-xl text-black mb-8">
                            Напишите в Telegram - рассчитаем стоимость и назначим удобное время
                        </p>
                        <a
                            href="https://t.me/PereezdBatumiBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105"
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
