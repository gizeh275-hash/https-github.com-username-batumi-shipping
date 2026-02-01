'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Truck, Globe, ChevronDown } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [lang, setLang] = useState<Language>('ru');

    const t = translations[lang];

    const BOT_URL = 'https://t.me/PereezdBatumiBot';

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold cursor-pointer"
                    >
                        <Truck className="w-8 h-8 text-primary-400" />
                        <span className="gradient-text">Georgia Moving</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Services Dropdown - MOST IMPORTANT */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 hover:text-primary-400 transition">
                                Услуги
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
                                                <Link href="/service/trash" className="block hover:bg-white/10 p-3 rounded-lg transition group/item">
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

                        {/* Cities Dropdown - SECOND PRIORITY */}
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
                                    <div className="glass-strong border border-white/20 rounded-2xl shadow-2xl p-6 min-w-[700px]">
                                        <div className="grid grid-cols-3 gap-6">
                                            {/* Major Cities */}
                                            <div>
                                                <h3 className="font-bold text-black mb-3 text-sm">Крупные города</h3>
                                                <div className="space-y-2">
                                                    <Link href="/batumi" className="block hover:text-primary-400 transition text-sm">Батуми</Link>
                                                    <Link href="/tbilisi" className="block hover:text-primary-400 transition text-sm">Тбилиси</Link>
                                                    <Link href="/kutaisi" className="block hover:text-primary-400 transition text-sm">Кутаиси</Link>
                                                    <Link href="/rustavi" className="block hover:text-primary-400 transition text-sm">Рустави</Link>
                                                    <Link href="/poti" className="block hover:text-primary-400 transition text-sm">Поти</Link>
                                                </div>
                                            </div>

                                            {/* Intercity Routes */}
                                            <div>
                                                <h3 className="font-bold text-black mb-3 text-sm">Междугородние</h3>
                                                <div className="space-y-2">
                                                    <Link href="/cities/tbilisi-batumi" className="block hover:text-primary-400 transition text-sm">Тбилиси — Батуми</Link>
                                                    <Link href="/cities/batumi-tbilisi" className="block hover:text-primary-400 transition text-sm">Батуми — Тбилиси</Link>
                                                    <Link href="/cities/tbilisi-kutaisi" className="block hover:text-primary-400 transition text-sm">Тбилиси — Кутаиси</Link>
                                                    <Link href="/cities/batumi-kutaisi" className="block hover:text-primary-400 transition text-sm">Батуми — Кутаиси</Link>
                                                    <Link href="/cities/kutaisi-tbilisi" className="block hover:text-primary-400 transition text-sm">Кутаиси — Тбилиси</Link>
                                                    <Link href="/cities/kutaisi-batumi" className="block hover:text-primary-400 transition text-sm">Кутаиси — Батуми</Link>
                                                </div>
                                            </div>

                                            {/* Regional Cities */}
                                            <div>
                                                <h3 className="font-bold text-black mb-3 text-sm">Другие города</h3>
                                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                                    <Link href="/cities/kobuleti" className="block hover:text-primary-400 transition text-sm">Кобулети</Link>
                                                    <Link href="/cities/chakvi" className="block hover:text-primary-400 transition text-sm">Чакви</Link>
                                                    <Link href="/cities/gonio" className="block hover:text-primary-400 transition text-sm">Гонио</Link>
                                                    <Link href="/cities/kvariati" className="block hover:text-primary-400 transition text-sm">Квариати</Link>
                                                    <Link href="/cities/sarpi" className="block hover:text-primary-400 transition text-sm">Сарпи</Link>
                                                    <Link href="/cities/ureki" className="block hover:text-primary-400 transition text-sm">Уреки</Link>
                                                    <Link href="/cities/gori" className="block hover:text-primary-400 transition text-sm">Гори</Link>
                                                    <Link href="/cities/zugdidi" className="block hover:text-primary-400 transition text-sm">Зугдиди</Link>
                                                    <Link href="/cities/telavi" className="block hover:text-primary-400 transition text-sm">Телави</Link>
                                                    <Link href="/cities/borjomi" className="block hover:text-primary-400 transition text-sm">Боржоми</Link>
                                                    <Link href="/cities/gudauri" className="block hover:text-primary-400 transition text-sm">Гудаури</Link>
                                                    <Link href="/cities/stepantsminda" className="block hover:text-primary-400 transition text-sm">Степанцминда</Link>
                                                </div>
                                                <Link href="/cities" className="block mt-3 text-black hover:text-gray-700 font-semibold text-sm">
                                                    Все города →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/pricing" className="hover:text-primary-400 transition">Цены</Link>
                        <Link href="/about" className="hover:text-primary-400 transition">О нас</Link>
                        <Link href="/tips" className="hover:text-primary-400 transition">Советы</Link>
                        <Link href="/contacts" className="hover:text-primary-400 transition">Контакты</Link>

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
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-down">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">{t.nav.home}</Link>
                        <Link href="/batumi" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">{t.nav.batumi}</Link>
                        <Link href="/tbilisi" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">{t.nav.tbilisi}</Link>
                        <Link href="/cities" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">Города</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">{t.nav.services}</Link>
                        <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">Цены</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">О нас</Link>
                        <Link href="/tips" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">Советы</Link>
                        <Link href="/faq" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">FAQ</Link>
                        <Link href="/contacts" onClick={() => setIsOpen(false)} className="hover:text-primary-400 transition">Контакты</Link>

                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value as Language)}
                                className="bg-transparent border border-white/20 rounded px-2 py-1 outline-none"
                            >
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                                <option value="ka">ქართული</option>
                            </select>
                        </div>

                        <a
                            href={BOT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-bg px-6 py-3 rounded-full font-semibold text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.hero.cta}
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
