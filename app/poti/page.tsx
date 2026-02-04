import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: 'Грузоперевозки Поти | Переезды, Грузчики, Транспорт',
    description: 'Профессиональные грузоперевозки и переезды в Поти. Портовый город на Черном море. Квартирные и офисные переезды, логистика.',
    keywords: 'грузоперевозки Поти, переезд Поти, грузчики Поти, транспорт Поти, порт Поти',
    openGraph: {
        title: 'Грузоперевозки Поти - Переезды под ключ',
        description: 'Надежные грузоперевозки и переезды в Поти',
    },
};

export default function PotiPage() {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-br from-yellow-50 to-white">
                <Hero
                    title="Грузоперевозки в Поти"
                    subtitle="Профессиональные переезды, грузчики и транспортные услуги в Поти и Самегрело"
                    ctaText="Заказать в Telegram"
                    ctaLink="https://t.me/PereezdBatumiBot"
                    showBackground={false}
                    useGradientText={false}
                />

                {/* About Poti Services */}
                <section className="container mx-auto px-4 py-10 md:py-20">
                    <div className="glass-strong p-6 md:p-10 rounded-2xl max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Грузоперевозки в Поти и Самегрело</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                            Предоставляем полный спектр услуг по грузоперевозкам в Поти.
                            Портовый город на Черноморском побережье - важный логистический центр западной Грузии.
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            Наши автомобили оснащены всем необходимым для безопасной транспортировки мебели и грузов любого размера.
                            Опытные грузчики аккуратно упакуют и перевезут ваши вещи.
                        </p>
                    </div>
                </section>

                {/* Services */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Услуги в Поти</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/service/moving">
                            <ServiceCard
                                icon="home"
                                title="Квартирные переезды"
                                description="Переезд квартиры под ключ с упаковкой, погрузкой и установкой мебели на новом месте."
                                delay={0}
                            />
                        </Link>
                        <Link href="/service/office">
                            <ServiceCard
                                icon="box"
                                title="Офисные переезды"
                                description="Быстрый переезд офиса с минимальным простоем вашего бизнеса."
                                delay={0.1}
                            />
                        </Link>
                        <Link href="/service/movers">
                            <ServiceCard
                                icon="users"
                                title="Услуги грузчиков"
                                description="Профессиональные грузчики для погрузки/разгрузки. Почасовая оплата."
                                delay={0.2}
                            />
                        </Link>
                        <Link href="/service/taxi">
                            <ServiceCard
                                icon="truck"
                                title="Междугородние перевозки"
                                description="Доставка грузов из Поти в Батуми, Тбилиси и другие города Грузии."
                                delay={0.3}
                            />
                        </Link>
                        <Link href="/service/delivery">
                            <ServiceCard
                                icon="package"
                                title="Доставка покупок"
                                description="Доставка крупногабаритных покупок из магазинов домой."
                                delay={0.4}
                            />
                        </Link>
                        <Link href="/service/trash">
                            <ServiceCard
                                icon="trash"
                                title="Вывоз мусора"
                                description="Вывоз строительного мусора, старой мебели и ненужных вещей."
                                delay={0.5}
                            />
                        </Link>
                    </div>
                </section>

                {/* Coverage Area */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Районы обслуживания</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {['Поти центр', 'Зугдиди', 'Сенаки', 'Хоби', 'Абаша', 'Мартвили', 'Цаленджиха', 'Чхороцку'].map((area, i) => (
                            <div key={i} className="glass p-4 rounded-lg text-center hover:bg-white/10 transition">
                                {area}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
