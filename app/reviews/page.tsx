'use client';

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useState } from 'react';
import { X } from 'lucide-react';

// Note: metadata export не работает в client components, поэтому SEO будет через layout или удалим 'use client'

export default function ReviewsPage() {
    const [selectedReview, setSelectedReview] = useState<number | null>(null);

    const reviews = [
        {
            name: 'Анна М.',
            date: '15.12.2023',
            rating: 5,
            text: 'Отличная компания! Переехали из Батуми в Тбилиси быстро и аккуратно. Грузчики профессионалы, все вещи в целости.',
        },
        {
            name: 'Георгий К.',
            date: '10.12.2023',
            rating: 5,
            text: 'Заказывал вывоз строительного мусора. Приехали вовремя, все вынесли и убрали. Рекомендую!',
        },
        {
            name: 'Екатерина Л.',
            date: '05.12.2023',
            rating: 5,
            text: 'Спасибо за помощь с переездом! Упаковали мебель отлично, ничего не повредили. Цены адекватные.',
        },
        {
            name: 'Давид Т.',
            date: '01.12.2023',
            rating: 5,
            text: 'Офис переехал за один день. Ребята работали слаженно и быстро. Молодцы!',
        },
        {
            name: 'Марина С.',
            date: '28.11.2023',
            rating: 5,
            text: 'Очень довольна сервисом. Заказывала через Telegram бот - удобно и быстро получила расчёт.',
        },
        {
            name: 'Александр П.',
            date: '20.11.2023',
            rating: 5,
            text: 'Перевозили холодильник и диван. Всё сделали аккуратно, упаковали в плёнку. Спасибо!',
        },
    ];

    return (
        <>
            <Header />
            <main>
                <Hero
                    title="Отзывы наших клиентов"
                    subtitle="Реальные отзывы от довольных клиентов"
                    ctaText="Оставить отзыв"
                    ctaLink="https://t.me/PereezdBatumiBot"
                />

                {/* Reviews Grid */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Что говорят клиенты</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="glass-strong p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                                onClick={() => setSelectedReview(index)}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 mb-4 line-clamp-3">{review.text}</p>

                                {/* Author */}
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-primary-400">{review.name}</p>
                                    <p className="text-gray-500 text-sm">{review.date}</p>
                                </div>

                                {/* Screenshot Placeholder */}
                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-primary-500/30"></div>
                                        <div className="text-xs text-gray-400">WhatsApp</div>
                                    </div>
                                    <div className="text-sm text-gray-400 italic">
                                        💬 Скриншот переписки
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Placeholder Note */}
                    <div className="mt-16 text-center">
                        <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
                            <p className="text-gray-300 text-lg mb-4">
                                📱 Скриншоты реальных переписок с клиентами скоро будут добавлены
                            </p>
                            <p className="text-gray-400">
                                Мы бережно относимся к конфиденциальности наших клиентов и публикуем отзывы только с их разрешения
                            </p>
                        </div>
                    </div>
                </section>

                {/* Modal */}
                {selectedReview !== null && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedReview(null)}
                    >
                        <div
                            className="glass-strong p-8 rounded-2xl max-w-2xl w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedReview(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex gap-1 mb-4">
                                {[...Array(reviews[selectedReview].rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg mb-6">{reviews[selectedReview].text}</p>

                            <div className="flex justify-between items-center mb-6">
                                <p className="font-semibold text-primary-400 text-xl">{reviews[selectedReview].name}</p>
                                <p className="text-gray-400">{reviews[selectedReview].date}</p>
                            </div>

                            {/* Full Screenshot Placeholder */}
                            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-center text-gray-400">
                                    <p className="text-4xl mb-4">💬</p>
                                    <p>Полный скриншот переписки</p>
                                    <p className="text-sm mt-2">(будет добавлено реальное изображение)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats */}
                <section className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="glass-strong p-8 rounded-2xl text-center">
                            <div className="text-5xl font-bold text-primary-400 mb-2">98%</div>
                            <p className="text-gray-300">Довольных клиентов</p>
                        </div>
                        <div className="glass-strong p-8 rounded-2xl text-center">
                            <div className="text-5xl font-bold text-accent-400 mb-2">500+</div>
                            <p className="text-gray-300">Положительных отзывов</p>
                        </div>
                        <div className="glass-strong p-8 rounded-2xl text-center">
                            <div className="text-5xl font-bold text-primary-400 mb-2">4.9</div>
                            <p className="text-gray-300">Средний рейтинг</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
