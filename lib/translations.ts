export const translations = {
    ru: {
        nav: {
            home: 'Главная',
            batumi: 'Батуми',
            tbilisi: 'Тбилиси',
            services: 'Услуги',
        },
        hero: {
            title: 'Грузоперевозки по Грузии',
            subtitle: 'Профессиональные услуги переезда в Батуми, Тбилиси и по всей стране',
            cta: 'Рассчитать стоимость в Telegram',
        },
        services: {
            title: 'Наши услуги',
            moving: 'Переезды',
            movingDesc: 'Квартирные и офисные переезды',
            movers: 'Грузчики',
            moversDesc: 'Профессиональные грузчики',
            trash: 'Вывоз мусора',
            trashDesc: 'Быстрый вывоз мусора и хлама',
        },
        contact: {
            title: 'Свяжитесь с нами',
            name: 'Ваше имя',
            phone: 'Телефон',
            message: 'Сообщение',
            send: 'Отправить',
        },
        footer: {
            rights: 'Все права защищены',
            contact: 'Контакты',
        },
    },
    en: {
        nav: {
            home: 'Home',
            batumi: 'Batumi',
            tbilisi: 'Tbilisi',
            services: 'Services',
        },
        hero: {
            title: 'Freight Transportation in Georgia',
            subtitle: 'Professional moving services in Batumi, Tbilisi and throughout the country',
            cta: 'Calculate Cost in Telegram',
        },
        services: {
            title: 'Our Services',
            moving: 'Moving',
            movingDesc: 'Residential and office relocations',
            movers: 'Movers',
            moversDesc: 'Professional movers',
            trash: 'Waste Removal',
            trashDesc: 'Fast removal of waste and junk',
        },
        contact: {
            title: 'Contact Us',
            name: 'Your Name',
            phone: 'Phone',
            message: 'Message',
            send: 'Send',
        },
        footer: {
            rights: 'All rights reserved',
            contact: 'Contact',
        },
    },
    ka: {
        nav: {
            home: 'მთავარი',
            batumi: 'ბათუმი',
            tbilisi: 'თბილისი',
            services: 'სერვისები',
        },
        hero: {
            title: 'სატვირთო გადაზიდვები საქართველოში',
            subtitle: 'პროფესიონალური გადასვლის სერვისები ბათუმში, თბილისში და მთელ ქვეყანაში',
            cta: 'გამოთვალეთ ღირებულება Telegram-ში',
        },
        services: {
            title: 'ჩვენი სერვისები',
            moving: 'გადასვლა',
            movingDesc: 'საცხოვრებელი და ოფისის გადასვლა',
            movers: 'მზიდავები',
            moversDesc: 'პროფესიონალი მზიდავები',
            trash: 'ნაგვის გატანა',
            trashDesc: 'სწრაფი ნაგვის და ჯართის გატანა',
        },
        contact: {
            title: 'დაგვიკავშირდით',
            name: 'თქვენი სახელი',
            phone: 'ტელეფონი',
            message: 'შეტყობინება',
            send: 'გაგზავნა',
        },
        footer: {
            rights: 'ყველა უფლება დაცულია',
            contact: 'კონტაქტი',
        },
    },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.ru;
