// Cities data for Georgia Moving service

export interface City {
    slug: string;
    name: string;
    nameEn: string;
    region: string;
    type: 'major' | 'resort' | 'regional' | 'intercity';
    description: string;
    features: string[];
    population?: string;
    distance?: string; // for intercity routes
}

export const citiesData: Record<string, City> = {
    // Major Cities
    'batumi': {
        slug: 'batumi',
        name: 'Батуми',
        nameEn: 'Batumi',
        region: 'Аджария',
        type: 'major',
        description: 'Крупнейший курортный город на Черноморском побережье Грузии. Узкие дворы старого города требуют особого подхода к грузоперевозкам.',
        features: [
            'Высокая влажность - требуется специальная упаковка',
            'Узкие дворы в центре города',
            'Много новостроек на берегу моря',
            'Популярен среди экспатов'
        ],
        population: '~150 000 чел.'
    },
    'tbilisi': {
        slug: 'tbilisi',
        name: 'Тбилиси',
        nameEn: 'Tbilisi',
        region: 'Столица',
        type: 'major',
        description: 'Столица Грузии с узкими улочками старого города и современными районами. Опыт работы в Тбилиси обязателен для качественных грузоперевозок.',
        features: [
            'Старый город с узкими улицами',
            'Крутые подъемы в районах Сололаки, Мтацминда',
            'Платные лифты на монетах в старых домах',
            'Крупнейший рынок грузоперевозок в Грузии'
        ],
        population: '~1 200 000 чел.'
    },
    'kutaisi': {
        slug: 'kutaisi',
        name: 'Кутаиси',
        nameEn: 'Kutaisi',
        region: 'Имерети',
        type: 'major',
        description: 'Второй по величине город Грузии, важный транспортный узел между Тбилиси и Батуми.',
        features: [
            'Транспортный узел западной Грузии',
            'Близость к аэропорту',
            'Развитая инфраструктура',
            'Доступные цены на переезды'
        ],
        population: '~150 000 чел.'
    },
    'rustavi': {
        slug: 'rustavi',
        name: 'Рустави',
        nameEn: 'Rustavi',
        region: 'Квемо Картли',
        type: 'regional',
        description: 'Промышленный город недалеко от Тбилиси, популярен для офисных переездов.',
        features: [
            'Близость к Тбилиси (25 км)',
            'Промышленные предприятия',
            'Офисные переезды',
            'Доступные цены'
        ],
        population: '~125 000 чел.'
    },
    'poti': {
        slug: 'poti',
        name: 'Поти',
        nameEn: 'Poti',
        region: 'Самегрело',
        type: 'regional',
        description: 'Портовый город на Черноморском побережье, важный логистический центр.',
        features: [
            'Морской порт',
            'Логистический центр',
            'Близость к Батуми',
            'Грузоперевозки для бизнеса'
        ],
        population: '~42 000 чел.'
    },

    // Intercity Routes
    'tbilisi-batumi': {
        slug: 'tbilisi-batumi',
        name: 'Тбилиси — Батуми',
        nameEn: 'Tbilisi — Batumi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Популярный маршрут для переездов между столицей и морским побережьем. Расстояние 370 км.',
        features: [
            'Самый популярный междугородний маршрут',
            'Современная трасса через Кутаиси',
            'Время в пути: 5-6 часов',
            'Фиксированные цены на переезд'
        ],
        distance: '370 км'
    },
    'batumi-tbilisi': {
        slug: 'batumi-tbilisi',
        name: 'Батуми — Тбилиси',
        nameEn: 'Batumi — Tbilisi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Переезд с морского побережья в столицу. Расстояние 370 км.',
        features: [
            'Обратный маршрут Батуми-Тбилиси',
            'Удобная логистика',
            'Время в пути: 5-6 часов',
            'Помощь с упаковкой вещей'
        ],
        distance: '370 км'
    },
    'tbilisi-kutaisi': {
        slug: 'tbilisi-kutaisi',
        name: 'Тбилиси — Кутаиси',
        nameEn: 'Tbilisi — Kutaisi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Маршрут между столицей и вторым по величине городом. Расстояние 220 км.',
        features: [
            'Популярный маршрут',
            'Время в пути: 3-4 часа',
            'Хорошая дорога',
            'Доступные цены'
        ],
        distance: '220 км'
    },
    'batumi-kutaisi': {
        slug: 'batumi-kutaisi',
        name: 'Батуми — Кутаиси',
        nameEn: 'Batumi — Kutaisi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Маршрут от моря до центра западной Грузии. Расстояние 150 км.',
        features: [
            'Короткий маршрут',
            'Время в пути: 2-3 часа',
            'Удобная логистика',
            'Выгодные цены'
        ],
        distance: '150 км'
    },
    'kutaisi-tbilisi': {
        slug: 'kutaisi-tbilisi',
        name: 'Кутаиси — Тбилиси',
        nameEn: 'Kutaisi — Tbilisi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Обратный маршрут из Кутаиси в столицу. Расстояние 220 км.',
        features: [
            'Обратный маршрут',
            'Время в пути: 3-4 часа',
            'Регулярные рейсы',
            'Профессиональные грузчики'
        ],
        distance: '220 км'
    },
    'kutaisi-batumi': {
        slug: 'kutaisi-batumi',
        name: 'Кутаиси — Батуми',
        nameEn: 'Kutaisi — Batumi',
        region: 'Междугородний маршрут',
        type: 'intercity',
        description: 'Маршрут из центра западной Грузии к морю. Расстояние 150 км.',
        features: [
            'Обратный маршрут',
            'Время в пути: 2-3 часа',
            'Быстрая доставка',
            'Аккуратная перевозка'
        ],
        distance: '150 км'
    },

    // Batumi Region & Resorts
    'kobuleti': {
        slug: 'kobuleti',
        name: 'Кобулети',
        nameEn: 'Kobuleti',
        region: 'Аджария',
        type: 'resort',
        description: 'Курортный город между Батуми и Поти. Популярен среди туристов и экспатов.',
        features: [
            '25 км от Батуми',
            'Курортная зона',
            'Новые жилые комплексы',
            'Быстрая доставка из Батуми'
        ]
    },
    'chakvi': {
        slug: 'chakvi',
        name: 'Чакви',
        nameEn: 'Chakvi',
        region: 'Аджария',
        type: 'resort',
        description: 'Небольшой курортный поселок к северу от Батуми, известный чайными плантациями.',
        features: [
            '15 км от Батуми',
            'Чайные плантации',
            'Тихая курортная зона',
            'Малоэтажная застройка'
        ]
    },
    'makhinjauri': {
        slug: 'makhinjauri',
        name: 'Махинджаури',
        nameEn: 'Makhinjauri',
        region: 'Аджария',
        type: 'resort',
        description: 'Курортный поселок, фактически пригород Батуми.',
        features: [
            '5 км от Батуми',
            'Часть агломерации Батуми',
            'Новостройки',
            'Удобная логистика'
        ]
    },
    'gonio': {
        slug: 'gonio',
        name: 'Гонио',
        nameEn: 'Gonio',
        region: 'Аджария',
        type: 'resort',
        description: 'Приморский поселок к югу от Батуми с древней крепостью.',
        features: [
            '10 км от Батуми',
            'Историческая крепость',
            'Пляжная зона',
            'Частный сектор'
        ]
    },
    'kvariati': {
        slug: 'kvariati',
        name: 'Квариати',
        nameEn: 'Kvariati',
        region: 'Аджария',
        type: 'resort',
        description: 'Тихий курортный поселок у моря, популярен среди дайверов.',
        features: [
            '15 км от Батуми',
            'Дайвинг-центр',
            'Галечный пляж',
            'Малоэтажная застройка'
        ]
    },
    'sarpi': {
        slug: 'sarpi',
        name: 'Сарпи',
        nameEn: 'Sarpi',
        region: 'Аджария',
        type: 'resort',
        description: 'Приграничный поселок на границе с Турцией.',
        features: [
            '20 км от Батуми',
            'Граница с Турцией',
            'Пляжная зона',
            'Развивающаяся инфраструктура'
        ]
    },
    'ureki': {
        slug: 'ureki',
        name: 'Уреки',
        nameEn: 'Ureki',
        region: 'Гурия',
        type: 'resort',
        description: 'Бальнеологический курорт с магнитными песками.',
        features: [
            '50 км от Батуми',
            'Магнитные пески',
            'Лечебный курорт',
            'Семейный отдых'
        ]
    },
    'shekvetili': {
        slug: 'shekvetili',
        name: 'Шекветили',
        nameEn: 'Shekvetili',
        region: 'Гурия',
        type: 'resort',
        description: 'Современный курортный поселок с аквапарком.',
        features: [
            '60 км от Батуми',
            'Современный аквапарк',
            'Новая инфраструктура',
            'Семейный курорт'
        ]
    },
    'khelvachauri': {
        slug: 'khelvachauri',
        name: 'Хелвачаури',
        nameEn: 'Khelvachauri',
        region: 'Аджария',
        type: 'resort',
        description: 'Пригородный район Батуми.',
        features: [
            '8 км от Батуми',
            'Пригород Батуми',
            'Жилая застройка',
            'Удобный доступ'
        ]
    },
    'keda': {
        slug: 'keda',
        name: 'Кеда',
        nameEn: 'Keda',
        region: 'Аджария',
        type: 'regional',
        description: 'Горный район Аджарии, известный природой.',
        features: [
            'Горная Аджария',
            'Природа и туризм',
            'Сложная логистика',
            'Узкие горные дороги'
        ]
    },
    'shuakhevi': {
        slug: 'shuakhevi',
        name: 'Шуахеви',
        nameEn: 'Shuakhevi',
        region: 'Аджария',
        type: 'regional',
        description: 'Горный район Аджарии.',
        features: [
            'Горная местность',
            'Малонаселенный район',
            'Природные красоты',
            'Специализированная доставка'
        ]
    },
    'khulo': {
        slug: 'khulo',
        name: 'Хуло',
        nameEn: 'Khulo',
        region: 'Аджария',
        type: 'regional',
        description: 'Самый высокогорный район Аджарии.',
        features: [
            'Высокогорье',
            'Серпантины',
            'Зимой сложный доступ',
            'Специальный транспорт'
        ]
    },

    // Other Regional Cities
    'gori': {
        slug: 'gori',
        name: 'Гори',
        nameEn: 'Gori',
        region: 'Шида Картли',
        type: 'regional',
        description: 'Город в центральной Грузии, родина Сталина.',
        features: [
            '80 км от Тбилиси',
            'Транспортный узел',
            'Историческое значение',
            'Развитая инфраструктура'
        ]
    },
    'zugdidi': {
        slug: 'zugdidi',
        name: 'Зугдиди',
        nameEn: 'Zugdidi',
        region: 'Самегрело',
        type: 'regional',
        description: 'Крупный город в западной Грузии.',
        features: [
            'Западная Грузия',
            'Близость к Абхазии',
            'Развитая торговля',
            'Региональный центр'
        ]
    },
    'zestafoni': {
        slug: 'zestafoni',
        name: 'Зестафони',
        nameEn: 'Zestafoni',
        region: 'Имерети',
        type: 'regional',
        description: 'Промышленный город в Имерети.',
        features: [
            'Промышленный центр',
            'На трассе Тбилиси-Батуми',
            'Удобная логистика',
            'Офисные переезды'
        ]
    },
    'samtredia': {
        slug: 'samtredia',
        name: 'Самтредиа',
        nameEn: 'Samtredia',
        region: 'Имерети',
        type: 'regional',
        description: 'Железнодорожный узел в Имерети.',
        features: [
            'Ж/д узел',
            'Транспортная логистика',
            'Близость к Кутаиси',
            'Доступные цены'
        ]
    },
    'khashuri': {
        slug: 'khashuri',
        name: 'Хашури',
        nameEn: 'Khashuri',
        region: 'Шида Картли',
        type: 'regional',
        description: 'Город на трассе между Тбилиси и Батуми.',
        features: [
            'На главной трассе',
            'Транспортный узел',
            'Удобная логистика',
            'Промежуточный пункт'
        ]
    },
    'telavi': {
        slug: 'telavi',
        name: 'Телави',
        nameEn: 'Telavi',
        region: 'Кахетия',
        type: 'regional',
        description: 'Столица винного региона Кахетия.',
        features: [
            'Винный регион',
            '100 км от Тбилиси',
            'Туристический центр',
            'Живописная местность'
        ]
    },
    'akhaltsikhe': {
        slug: 'akhaltsikhe',
        name: 'Ахалцихе',
        nameEn: 'Akhaltsikhe',
        region: 'Самцхе-Джавахети',
        type: 'regional',
        description: 'Город на юге Грузии с крепостью Рабат.',
        features: [
            'Юг Грузии',
            'Историческая крепость',
            'Туристический центр',
            'Близость к Армении'
        ]
    },
    'borjomi': {
        slug: 'borjomi',
        name: 'Боржоми',
        nameEn: 'Borjomi',
        region: 'Самцхе-Джавахети',
        type: 'resort',
        description: 'Знаменитый бальнеологический курорт.',
        features: [
            'Минеральная вода Боржоми',
            'Курортная зона',
            'Национальный парк',
            'Популярен круглый год'
        ]
    },
    'gudauri': {
        slug: 'gudauri',
        name: 'Гудаури',
        nameEn: 'Gudauri',
        region: 'Мцхета-Мтианети',
        type: 'resort',
        description: 'Горнолыжный курорт на Военно-Грузинской дороге.',
        features: [
            'Горнолыжный курорт',
            'Высота 2200 м',
            'Зимний сезон',
            'Специальный транспорт для горных дорог'
        ]
    },
    'stepantsminda': {
        slug: 'stepantsminda',
        name: 'Степанцминда',
        nameEn: 'Stepantsminda',
        region: 'Мцхета-Мтианети',
        type: 'resort',
        description: 'Горный курорт у подножия Казбека.',
        features: [
            'У подножия Казбека',
            'Церковь Гергети',
            'Туристический центр',
            'Горные серпантины'
        ]
    }
};

// Group cities by region for better organization
export const cityGroups = {
    major: ['batumi', 'tbilisi', 'kutaisi', 'rustavi', 'poti'],
    intercity: ['tbilisi-batumi', 'batumi-tbilisi', 'tbilisi-kutaisi', 'batumi-kutaisi', 'kutaisi-tbilisi', 'kutaisi-batumi'],
    batumi_region: ['kobuleti', 'chakvi', 'makhinjauri', 'gonio', 'kvariati', 'sarpi', 'ureki', 'shekvetili', 'khelvachauri', 'keda', 'shuakhevi', 'khulo'],
    regional: ['gori', 'zugdidi', 'zestafoni', 'samtredia', 'khashuri', 'telavi', 'akhaltsikhe', 'borjomi', 'gudauri', 'stepantsminda']
};
