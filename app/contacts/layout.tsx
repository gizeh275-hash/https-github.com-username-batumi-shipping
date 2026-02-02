import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты грузоперевозок | Связаться с Georgia Moving',
    description: 'Заказать переезд в Грузии: Telegram, WhatsApp, телефон. Работаем 24/7 без выходных.',
    openGraph: {
        title: 'Контакты Georgia Moving',
        description: 'Свяжитесь с нами для заказа переезда. Работаем 24/7.',
    },
};

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
