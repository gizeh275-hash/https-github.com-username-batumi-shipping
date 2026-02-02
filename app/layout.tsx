import type { Metadata } from 'next';
// Forced build trigger: Fix deployment not found
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import ScrollToTop from '@/components/ScrollToTop';
import MobileFloatingNav from '@/components/MobileFloatingNav';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Грузоперевозки по Грузии | Батуми, Тбилиси',
    description: 'Профессиональные грузоперевозки и переезды в Батуми, Тбилиси и по всей Грузии.',
    keywords: 'грузоперевозки, переезды, батуми, тбилиси, грузия',
    openGraph: {
        title: 'Грузоперевозки по Грузии',
        description: 'Профессиональные услуги переезда в Батуми, Тбилиси и по всей стране',
        type: 'website',
        locale: 'ru_RU',
    },
    metadataBase: new URL('https://pereezdge.com'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={inter.variable}>
            <body className="overflow-x-hidden">
                {children}
                <FloatingContactWidget />
                <ScrollToTop />
                <MobileFloatingNav />
            </body>
        </html>
    );
}
