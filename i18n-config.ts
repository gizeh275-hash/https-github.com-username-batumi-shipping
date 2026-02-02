export const i18n = {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'ka'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
