'use client';

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Phone, Send, MessageCircle } from 'lucide-react';

export default function ContactsPage() {
    return (
        <>
            <Header />
            <main>
                <Hero
                    title="Связаться с нами"
                    subtitle="Работаем 24/7 для вашего удобства"
                    ctaText="Написать в Telegram"
                    ctaLink="https://t.me/PereezdBatumiBot"
                />

                {/* Contact Methods */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Способы связи</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Telegram */}
                        <a
                            href="https://t.me/PereezdBatumiBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-strong p-8 rounded-2xl hover:scale-105 transition-transform text-center group"
                        >
                            <div className="bg-primary-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                                <Send className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Telegram</h3>
                            <p className="text-primary-400 text-xl font-semibold">@PereezdBatumiBot</p>
                            <p className="text-gray-400 mt-2">Быстрый расчёт стоимости</p>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+995597048630"
                            className="glass-strong p-8 rounded-2xl hover:scale-105 transition-transform text-center group"
                        >
                            <div className="bg-accent-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                                <Phone className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Телефон</h3>
                            <p className="text-accent-400 text-xl font-semibold">+995 597 048 630</p>
                            <p className="text-gray-400 mt-2">Звоните 24/7</p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/995597048630"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-strong p-8 rounded-2xl hover:scale-105 transition-transform text-center group"
                        >
                            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                                <MessageCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                            <p className="text-green-400 text-xl font-semibold">+995 597 048 630</p>
                            <p className="text-gray-400 mt-2">Напишите нам</p>
                        </a>
                    </div>
                </section>


                {/* Working Hours */}
                <section className="container mx-auto px-4 py-20">
                    <div className="glass-strong p-10 rounded-2xl max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">График работы</h2>
                        <p className="text-2xl text-primary-400 font-bold mb-4">24 / 7</p>
                        <p className="text-gray-300 text-lg">
                            Мы работаем круглосуточно без выходных для вашего удобства.<br />
                            Заказывайте грузоперевозку в любое время!
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
