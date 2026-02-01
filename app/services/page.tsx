import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { seoConfig } from '@/lib/seo';

export const metadata: Metadata = {
    title: seoConfig.ru.services.title,
    description: seoConfig.ru.services.description,
    keywords: seoConfig.ru.services.keywords,
    openGraph: {
        title: seoConfig.ru.services.title,
        description: seoConfig.ru.services.description,
    },
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <Hero
                    title="Наши услуги"
                    subtitle="Полный спектр услуг по грузоперевозкам и переездам"
                    ctaText="Заказать услугу"
                    ctaLink="https://t.me/PereezdBatumiBot"
                />

                {/* Main Services */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Основные услуги</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/service/moving">
                            <ServiceCard
                                icon="home"
                                title="Квартирные переезды"
                                description="Профессиональный переезд квартиры под ключ. Упаковка, погрузка, транспортировка и расстановка мебели на новом месте."
                                delay={0}
                            />
                        </Link>
                        <Link href="/service/batumi_moving">
                            <ServiceCard
                                icon="map-pin"
                                title="Переезд в Батуми"
                                description="Специализированный переезд по Батуми: Orbi, Alliance, Старый город. Учитываем узкие улочки и влажность."
                                delay={0.05}
                            />
                        </Link>
                        <Link href="/service/tbilisi_moving">
                            <ServiceCard
                                icon="home"
                                title="Квартирный переезд в Тбилиси"
                                description="От Глдани до Ваке. Бережная перевозка по столице. Знаем специфику старых двориков и пробок."
                                delay={0.07}
                            />
                        </Link>
                        <Link href="/service/office">
                            <ServiceCard
                                icon="box"
                                title="Офисные переезды"
                                description="Организуем переезд офиса любого масштаба. Минимальный простой бизнеса, сохранность оборудования и документов."
                                delay={0.1}
                            />
                        </Link>
                        <Link href="/service/batumi_office">
                            <ServiceCard
                                icon="building"
                                title="Офисный переезд в Батуми"
                                description="Перевезем офис без простоя работы. Сборка мебели, упаковка техники, документы."
                                delay={0.4}
                            />
                        </Link>
                        <Link href="/service/tbilisi_office">
                            <ServiceCard
                                icon="building"
                                title="Офисный переезд в Тбилиси"
                                description="Бизнес-переезды под ключ. Ночные работы, белая бухгалтерия, маркировка мест."
                                delay={0.42}
                            />
                        </Link>
                        <Link href="/service/taxi">
                            <ServiceCard
                                icon="truck"
                                title="Грузовое такси"
                                description="Быстрая подача машины для перевозки вещей и покупок. Доставка из магазинов."
                                delay={0.2}
                            />
                        </Link>
                        <Link href="/service/batumi_taxi">
                            <ServiceCard
                                icon="truck"
                                title="Грузовое такси в Батуми"
                                description="Подача от 30 мин. Для покупок из магазинов и личных вещей. Есть места для пассажиров."
                                delay={0.25}
                            />
                        </Link>
                        <Link href="/service/movers">
                            <ServiceCard
                                icon="users"
                                title="Услуги грузчиков"
                                description="Профессиональные грузчики для погрузки и разгрузки. Работаем аккуратно и быстро. Почасовая оплата."
                                delay={0.3}
                            />
                        </Link>
                        <Link href="/service/batumi_movers">
                            <ServiceCard
                                icon="users"
                                title="Услуги грузчиков в Батуми"
                                description="Трезвые, аккуратные грузчики с инструментами. Подъем на этаж, сборка мебели, такелаж."
                                delay={0.35}
                            />
                        </Link>
                        <Link href="/service/tbilisi_movers">
                            <ServiceCard
                                icon="users"
                                title="Услуги грузчиков в Тбилиси"
                                description="Профессиональные бригады для переездов и подъема стройматериалов. От Глдани до Ваке за 60 минут."
                                delay={0.37}
                            />
                        </Link>
                        <Link href="/service/delivery">
                            <ServiceCard
                                icon="package"
                                title="Доставка покупок"
                                description="Доставка крупногабаритных покупок из магазинов. Мебель, бытовая техника, строительные материалы."
                                delay={0.4}
                            />
                        </Link>
                        <Link href="/service/trash">
                            <ServiceCard
                                icon="trash"
                                title="Вывоз мусора"
                                description="Быстрый вывоз строительного мусора, старой мебели и ненужных вещей. Грузим и вывозим все сами."
                                delay={0.5}
                            />
                        </Link>
                        <Link href="/service/batumi_trash">
                            <ServiceCard
                                icon="trash"
                                title="Вывоз мусора в Батуми"
                                description="Официальный вывоз строительного мусора и мебели на полигон. Никаких штрафов."
                                delay={0.55}
                            />
                        </Link>
                        <Link href="/service/tbilisi_trash">
                            <ServiceCard
                                icon="trash"
                                title="Вывоз мусора в Тбилиси"
                                description="Официальная утилизация старой мебели и строительного мусора. Глданский полигон."
                                delay={0.57}
                            />
                        </Link>
                    </div>
                </section>

                {/* Additional Services */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Дополнительно</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="text-4xl text-primary-400 mb-4">🛋️</div>
                            <h3 className="text-2xl font-bold mb-3">Упаковка мебели</h3>
                            <p className="text-gray-300">
                                Профессиональная упаковка мебели и хрупких предметов. Используем качественные материалы.
                            </p>
                        </div>

                        <div className="glass-strong p-8 rounded-2xl">
                            <div className="text-4xl text-accent-400 mb-4">🔧</div>
                            <h3 className="text-2xl font-bold mb-3">Сборка/разборка</h3>
                            <p className="text-gray-300">
                                Разборка и сборка мебели на старом и новом месте. Бережно обращаемся с крепежом.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Info */}
                <section className="container mx-auto px-4 py-20">
                    <div className="glass-strong p-10 rounded-2xl max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Стоимость услуг</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Стоимость рассчитывается индивидуально в зависимости от объема груза, расстояния и дополнительных услуг.
                            Для точного расчета свяжитесь с нами через Telegram бот.
                        </p>
                        <a
                            href="https://t.me/PereezdBatumiBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block gradient-bg px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                        >
                            Рассчитать стоимость
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
