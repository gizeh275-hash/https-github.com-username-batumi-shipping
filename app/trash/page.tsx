import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { seoConfig } from '@/lib/seo';

export const metadata: Metadata = {
    title: seoConfig.ru.trash.title,
    description: seoConfig.ru.trash.description,
    keywords: seoConfig.ru.trash.keywords,
    openGraph: {
        title: seoConfig.ru.trash.title,
        description: seoConfig.ru.trash.description,
    },
};

export default function TrashRemovalPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Вывоз мусора в Грузии',
        description: 'Профессиональный вывоз строительного мусора, старой мебели и хлама',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Georgia Moving',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'GE',
            },
        },
        areaServed: ['Батуми', 'Тбилиси', 'Грузия'],
        priceRange: '$$',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />
            <main>
                <Hero
                    title="Вывоз мусора в Грузии"
                    subtitle="Профессиональный вывоз строительного мусора, старой мебели и хлама в Батуми, Тбилиси и по всей стране"
                    ctaText="Заказать вывоз"
                    ctaLink="https://t.me/PereezdBatumiBot"
                />

                {/* About Service */}
                <section className="container mx-auto px-4 py-20">
                    <div className="glass-strong p-10 rounded-2xl max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary-500 rounded-full p-3 text-4xl">
                                🗑️
                            </div>
                            <h2 className="text-3xl font-bold">Вывоз любого мусора</h2>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Предлагаем комплексные услуги по вывозу строительного мусора, старой мебели,
                            бытовой техники и любого другого хлама в Батуми, Тбилиси и по всей Грузии.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            <strong className="text-primary-400">В стоимость входит:</strong> спуск мешков с любого этажа,
                            погрузка в автомобиль, транспортировка и утилизация на специализированном полигоне.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Работаем быстро, чисто и аккуратно. Вам не нужно ничего делать самостоятельно -
                            наши грузчики выполнят всю работу от начала до конца.
                        </p>
                    </div>
                </section>

                {/* What We Remove */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Что мы вывозим</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon="building"
                            title="Строительный мусор"
                            description="Бой кирпича, бетон, штукатурка, обломки после ремонта и демонтажа."
                            delay={0}
                        />
                        <ServiceCard
                            icon="package"
                            title="Старая мебель"
                            description="Диваны, шкафы, столы, стулья, матрасы и другая мебель."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon="recycle"
                            title="Бытовая техника"
                            description="Холодильники, стиральные машины, телевизоры, любая техника."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon="trash"
                            title="Крупногабаритный мусор"
                            description="Двери, окна, сантехника, батареи и другие крупные предметы."
                            delay={0.3}
                        />
                        <ServiceCard
                            icon="users"
                            title="Вывоз после переезда"
                            description="Ненужные вещи, упаковочные материалы после переезда."
                            delay={0.4}
                        />
                        <ServiceCard
                            icon="truck"
                            title="Вывоз хлама"
                            description="Любой другой мусор и хлам, который нужно убрать."
                            delay={0.5}
                        />
                    </div>
                </section>

                {/* How It Works */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Как мы работаем</span>
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Заявка</h3>
                                    <p className="text-gray-300">
                                        Свяжитесь с нами через Telegram бот, опишите объем мусора и адрес.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Расчёт стоимости</h3>
                                    <p className="text-gray-300">
                                        Мы рассчитаем точную стоимость и согласуем удобное время приезда.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Погрузка и вывоз</h3>
                                    <p className="text-gray-300">
                                        Наши грузчики спустят, погрузят и вывезут весь мусор на полигон.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Оплата</h3>
                                    <p className="text-gray-300">
                                        Оплата только после выполнения работы. Наличными или переводом.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Стоимость услуг</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full glass-strong rounded-2xl overflow-hidden">
                                <thead className="bg-primary-500/20">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold text-lg border-b border-primary-500/30">
                                            Объём мусора
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold text-lg border-b border-primary-500/30">
                                            Примерная стоимость
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/10">
                                        <td className="px-6 py-4">
                                            <strong>До 1м³</strong> (несколько мешков)
                                        </td>
                                        <td className="px-6 py-4 text-primary-400">
                                            От 50 GEL
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="px-6 py-4">
                                            <strong>1-3м³</strong> (минивэн)
                                        </td>
                                        <td className="px-6 py-4 text-primary-400">
                                            От 100 GEL
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="px-6 py-4">
                                            <strong>3-5м³</strong> (спринтер)
                                        </td>
                                        <td className="px-6 py-4 text-primary-400">
                                            От 150 GEL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">
                                            <strong>5-10м³</strong> (большой грузовик)
                                        </td>
                                        <td className="px-6 py-4 text-primary-400">
                                            От 250 GEL
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-gray-300 mb-6 text-lg">
                                * Точная стоимость зависит от объема, веса, этажности и района вывоза
                            </p>
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block gradient-bg px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                            >
                                Рассчитать точную стоимость в Telegram
                            </a>
                        </div>
                    </div>
                </section>

                {/* Coverage */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">География работы</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {['Батуми', 'Тбилиси', 'Кобулети', 'Чакви', 'Гонио', 'Сарпи', 'Кутаиси', 'Рустави'].map((city, i) => (
                            <div key={i} className="glass p-4 rounded-lg text-center hover:bg-white/10 transition">
                                {city}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
