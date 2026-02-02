import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Цены на грузоперевозки в Грузии | Тарифы Батуми и Тбилиси',
    description: 'Актуальные цены на переезды, услуги грузчиков и вывоз мусора. Прозрачные тарифы без скрытых доплат.',
    openGraph: {
        title: 'Цены на грузоперевозки | Georgia Moving',
        description: 'Прайс-лист на услуги переезда и грузчиков в Батуми и Тбилиси',
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
