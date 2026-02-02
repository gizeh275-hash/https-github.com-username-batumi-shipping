import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import ScrollToTop from '@/components/ScrollToTop';
import MobileFloatingNav from '@/components/MobileFloatingNav';
import { i18n, type Locale } from '@/i18n-config';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Грузоперевозки по Грузии | Батуми, Тбилиси',
    description: 'Профессиональные грузоперевозки и переезды в Батуми, Тбилиси и по всей Грузии.',
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html lang={params.lang} className={inter.variable}>
            <body>
                {children}
                <FloatingContactWidget />
                <ScrollToTop />
                <MobileFloatingNav />
            </body>
        </html>
    );
}
