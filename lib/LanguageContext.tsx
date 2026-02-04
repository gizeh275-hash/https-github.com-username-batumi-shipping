'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'ka';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переводы для UI элементов (не контента)
const uiTranslations = {
    ru: {
        'nav.home': 'Главная',
        'nav.services': 'Услуги',
        'nav.cities': 'Города',
        'nav.pricing': 'Цены',
        'nav.about': 'О нас',
        'nav.contacts': 'Контакты',
        'nav.tips': 'Советы',
        'hero.cta': 'Рассчитать стоимость в Telegram',
        'footer.rights': 'Все права защищены',
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.cities': 'Cities',
        'nav.pricing': 'Pricing',
        'nav.about': 'About',
        'nav.contacts': 'Contacts',
        'nav.tips': 'Tips',
        'hero.cta': 'Calculate Cost in Telegram',
        'footer.rights': 'All rights reserved',
    },
    ka: {
        'nav.home': 'მთავარი',
        'nav.services': 'სერვისები',
        'nav.cities': 'ქალაქები',
        'nav.pricing': 'ფასები',
        'nav.about': 'ჩვენს შესახებ',
        'nav.contacts': 'კონტაქტი',
        'nav.tips': 'რჩევები',
        'hero.cta': 'გამოთვალეთ ღირებულება Telegram-ში',
        'footer.rights': 'ყველა უფლება დაცულია',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('ru');

    // Загружаем язык из localStorage при монтировании
    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && ['ru', 'en', 'ka'].includes(saved)) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        const translations = uiTranslations[language] as Record<string, string>;
        return translations[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
