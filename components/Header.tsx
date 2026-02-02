'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Truck, Globe, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [lang, setLang] = useState<Language>('ru');

    const t = translations[lang];

    const BOT_URL = 'https://t.me/pereezdBatumiGE';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold cursor-pointer"
                    >
                        <span className="gradient-text text-2xl">PereezdGe.com</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-primary-400 transition">
                                {t.nav.services}
                                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-0 pt-2 z-50">
                                    <div className="glass-strong border border-white/20 rounded-2xl shadow-2xl p-6 min-w-[600px]">
                                        <div className="flex items-center justify-center gap-2 mb-6">
                                            <span className="font-extrabold text-black text-lg">Работаем по всей Грузии</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                <Link href="/service/moving" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Квартирный переезд</h4>
                                                    <p className="text-xs text-gray-400">Профессиональный переезд под ключ с упаковкой и расстановкой мебели</p>
                                                </Link>

                                                <Link href="/service/office" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Офисный переезд</h4>
                                                    <p className="text-xs text-gray-400">Переезд офиса с минимальным простоем в работе</p>
                                                </Link>

                                                <Link href="/service/movers" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Услуги грузчиков</h4>
                                                    <p className="text-xs text-gray-400">Профессиональные грузчики для погрузки и разгрузки</p>
                                                </Link>
                                            </div>

                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                <Link href="/trash" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Вывоз мусора</h4>
                                                    <p className="text-xs text-gray-400">Вывоз строительного мусора и ненужных вещей</p>
                                                </Link>

                                                <Link href="/service/taxi" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Грузовое такси</h4>
                                                    <p className="text-xs text-gray-400">Быстрая подача машины, перевозка и доставка из магазинов</p>
                                                </Link>

                                                <Link href="/service/intercity" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
                                                    <h4 className="font-bold text-sm mb-1 group-hover/item:text-primary-400">Междугородние рейсы</h4>
                                                    <p className="text-xs text-gray-400">Переезды по всей Грузии: Тбилиси, Батуми, Кутаиси</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                                            <Link href="/services" className="text-black hover:text-gray-700 font-semibold text-sm">
                                                Все услуги →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Cities Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsCitiesOpen(true)}
                            onMouseLeave={() => setIsCitiesOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-primary-400 transition">
                                Города
                                <ChevronDown className={`w-4 h-4 transition-transform ${isCitiesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCitiesOpen && (
                                <div className="absolute top-full left-0 pt-2 z-50">
                                    <div className="glass-strong border border-white/20 rounded-2xl shadow-2xl p-6 min-w-[500px]">
                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Major Cities */}
                                            <div>
                                                <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wider text-opacity-70">Крупные города</h3>
                                                <div className="space-y-3">
                                                    <Link href="/batumi" className="block hover:text-primary-400 transition font-medium">Батуми</Link>
                                                    <Link href="/tbilisi" className="block hover:text-primary-400 transition font-medium">Тбилиси</Link>
                                                    <Link href="/kutaisi" className="block hover:text-primary-400 transition font-medium">Кутаиси</Link>
                                                    <Link href="/rustavi" className="block hover:text-primary-400 transition font-medium">Рустави</Link>
                                                    <Link href="/poti" className="block hover:text-primary-400 transition font-medium">Поти</Link>
                                                </div>
                                            </div>

                                            {/* Popular Routes */}
                                            <div>
                                                <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wider text-opacity-70">Популярные маршруты</h3>
                                                <div className="space-y-3">
                                                    <Link href="/cities/tbilisi-batumi" className="block hover:text-primary-400 transition font-medium">Тбилиси ↔ Батуми</Link>
                                                    <Link href="/cities/batumi-tbilisi" className="block hover:text-primary-400 transition font-medium">Батуми ↔ Тбилиси</Link>
                                                    <Link href="/cities/tbilisi-kutaisi" className="block hover:text-primary-400 transition font-medium">Тбилиси ↔ Кутаиси</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                                            <Link href="/cities" className="text-black hover:text-primary-400 font-bold text-sm flex items-center gap-1">
                                                Все города и направления <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/pricing" className="hover:text-primary-400 transition">Цены</Link>
                        <Link href="/about" className="hover:text-primary-400 transition">О нас</Link>
                        <Link href="/tips" className="hover:text-primary-400 transition">Советы</Link>
                        <Link href="/contacts" className="hover:text-primary-400 transition">Контакты</Link>

                        {/* Phone Number Desktop */}
                        <a href="tel:+995597048630" className="flex items-center gap-2 hover:text-primary-400 transition font-bold mr-2">
                            <Phone className="w-5 h-5 text-green-400 fill-green-400" />
                            <span>+995 597 048 630</span>
                        </a>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 glass px-3 py-1 rounded-full">
                            <Globe className="w-4 h-4" />
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value as Language)}
                                className="bg-transparent border-none outline-none cursor-pointer text-sm"
                            >
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                                <option value="ka">KA</option>
                            </select>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={BOT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-bg px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            {t.hero.cta}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-24 flex flex-col gap-4 animate-slide-down h-[calc(100vh-80px)] overflow-y-auto">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition font-medium border-b border-white/5 pb-2">{t.nav.home}</Link>

                        {/* Mobile Services */}
                        <div className="border-b border-white/5 pb-2">
                            <div
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center justify-between cursor-pointer py-1"
                            >
                                <span className="font-medium">{t.nav.services}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isServicesOpen && (
                                <div className="pl-4 mt-2 space-y-3 border-l-2 border-white/10 ml-1">
                                    <Link href="/service/moving" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Квартирный переезд</Link>
                                    <Link href="/service/office" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Офисный переезд</Link>
                                    <Link href="/service/movers" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Услуги грузчиков</Link>
                                    <Link href="/trash" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Вывоз мусора</Link>
                                    <Link href="/service/taxi" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Грузовое такси</Link>
                                    <Link href="/service/intercity" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Междугородние рейсы</Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Cities */}
                        <div className="border-b border-white/5 pb-2">
                            <div
                                onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                                className="flex items-center justify-between cursor-pointer py-1"
                            >
                                <span className="font-medium">Города</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isCitiesOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isCitiesOpen && (
                                <div className="pl-4 mt-2 space-y-3 border-l-2 border-white/10 ml-1">
                                    <Link href="/batumi" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Батуми</Link>
                                    <Link href="/tbilisi" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Тбилиси</Link>
                                    <Link href="/kutaisi" onClick={() => setIsOpen(false)} className="block text-sm text-gray-400 hover:text-white">Кутаиси</Link>
                                    <Link href="/cities" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-yellow-400 mt-2">Все города →</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition font-medium border-b border-white/5 pb-2">Цены</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition font-medium border-b border-white/5 pb-2">О нас</Link>
                        <Link href="/contacts" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition font-medium border-b border-white/5 pb-2">Контакты</Link>

                        <div className="flex items-center gap-2 mt-2">
                            <Globe className="w-4 h-4" />
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value as Language)}
                                className="bg-transparent border border-white/20 rounded px-2 py-1 outline-none text-white bg-black/50"
                            >
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                                <option value="ka">ქართული</option>
                            </select>
                        </div>

                        <a href="tel:+995597048630" className="flex items-center gap-2 hover:text-primary-400 transition font-bold mt-2 border-t border-white/5 pt-2">
                            <Phone className="w-5 h-5 text-green-400" />
                            <span>+995 597 048 630</span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
