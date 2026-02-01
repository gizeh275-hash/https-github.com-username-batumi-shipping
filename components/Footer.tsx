'use client';

import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="glass-strong mt-20 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
                    {/* Contact Info */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 gradient-text text-center">Контакты</h3>
                        <div className="space-y-3 flex flex-col items-center">
                            <a href="https://t.me/PereezdBatumiBot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-400 transition">
                                <Send className="w-5 h-5" />
                                <span>@PereezdBatumiBot</span>
                            </a>
                            <a href="tel:+995597048630" className="flex items-center gap-2 hover:text-primary-400 transition">
                                <Phone className="w-5 h-5" />
                                <span>+995 597 048 630</span>
                            </a>
                            <a href="https://wa.me/995597048630" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-400 transition">
                                <MessageCircle className="w-5 h-5" />
                                <span>+995 597 048 630</span>
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 gradient-text text-center">Быстрые ссылки</h3>
                        <div className="space-y-2 flex flex-col items-center">
                            <Link href="/service/moving" className="block hover:text-primary-400 transition">Квартирный переезд</Link>
                            <Link href="/service/movers" className="block hover:text-primary-400 transition">Услуги грузчиков</Link>
                            <Link href="/trash" className="block hover:text-primary-400 transition">Вывоз мусора</Link>
                            <Link href="/tbilisi" className="block hover:text-primary-400 transition">Тбилиси</Link>
                            <Link href="/batumi" className="block hover:text-primary-400 transition">Батуми</Link>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 gradient-text text-center">Информация</h3>
                        <div className="space-y-2 flex flex-col items-center">
                            <Link href="/contacts" className="block hover:text-primary-400 transition">Контакты</Link>
                            <Link href="/tips" className="block hover:text-primary-400 transition">Советы</Link>
                            <Link href="/about" className="block hover:text-primary-400 transition">О нас</Link>
                            <Link href="/tips#faq" className="block hover:text-primary-400 transition">FAQ</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
                    <p>Грузоперевозки по Грузии. Работаем с 2022 года.</p>
                </div>
            </div>
        </footer>
    );
}
