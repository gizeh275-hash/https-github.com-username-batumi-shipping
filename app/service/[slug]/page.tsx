import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CitiesScroll from '@/components/CitiesScroll';
import { servicesData, ServiceSlug } from '@/lib/servicesData';
import { CITIES } from '@/lib/cities';
import TranslatedContent from '@/lib/TranslatedContent';


type Props = {
    params: Promise<{ slug: string }>;
};
// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        return {
            title: 'Услуга не найдена',
        };
    }

    return {
        title: `${service.title} | Georgia Moving Батуми Тбилиси`,
        description: service.desc_short,
        keywords: `${service.title.toLowerCase()}, грузоперевозки, батуми, тбилиси, ${service.price}`,
        openGraph: {
            title: `${service.title} - ${service.price}`,
            description: service.desc_short,
        },
    };
}

// Generate static params for all services
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        notFound();
    }



    // Determine base service (e.g., "trash" from "batumi_trash")
    let baseServiceSlug = slug;
    for (const city of CITIES) {
        if (slug.startsWith(`${city.slug}_`)) {
            baseServiceSlug = slug.replace(`${city.slug}_`, '');
            break;
        }
    }

    // Calculate overrides
    const cityOverrides: Record<string, string> = {};
    for (const city of CITIES) {
        // Check if there is a specific service page for this city
        // Note: city.slug might contain slashes like "cities/kobuleti", 
        // but service keys usually don't. specific keys are "batumi_trash".
        // simple concatenation works for "batumi" -> "batumi_trash".
        const potentialSlug = `${city.slug}_${baseServiceSlug}`;
        if (servicesData[potentialSlug as ServiceSlug]) {
            cityOverrides[city.slug] = `/service/${potentialSlug}`;
        }
    }

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={`relative pt-32 pb-12 md:py-32 bg-gradient-to-br from-yellow-50 to-white`}>
                    {/* ... content ... */}
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            {service.badge && (
                                <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                                    {service.badge}
                                </span>
                            )}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-600 mb-8">
                                {service.desc_short}
                            </p>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-600">
                                    {service.price}
                                </div>
                            </div>
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block gradient-bg px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                            >
                                Рассчитать стоимость в Telegram
                            </a>
                        </div>
                    </div>
                </section>




                {/* City Selection Section - Show for all services except ... */}
                {slug !== 'batumi_moving' && slug !== 'tbilisi_moving' && slug !== 'batumi_movers' && slug !== 'tbilisi_movers' && slug !== 'batumi_taxi' && slug !== 'tbilisi_taxi' && slug !== 'batumi_trash' && slug !== 'tbilisi_trash' && slug !== 'tbilisi_office' && slug !== 'batumi_office' && slug !== 'intercity' && (
                    <div className="">
                        <CitiesScroll cityOverrides={cityOverrides} />
                    </div>
                )}

                {/* Content Section */}
                <section className="container mx-auto px-4 pt-8 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="glass-strong p-5 md:p-10 rounded-2xl prose prose-lg max-w-none w-full overflow-x-hidden"
                            style={{
                                color: '#374151',
                            }}
                        >
                            <TranslatedContent
                                htmlContent={service.content}
                                cacheKey={slug}
                            />
                        </div>
                    </div>
                </section>

                {/* Custom Content Pages don't need the default hardcoded sections */}
                {!['batumi_moving', 'tbilisi_moving', 'batumi_movers', 'tbilisi_movers', 'batumi_taxi', 'tbilisi_taxi', 'batumi_trash', 'tbilisi_trash', 'intercity', 'moving', 'office', 'batumi_office', 'tbilisi_office', 'movers', 'taxi', 'trash'].includes(slug) && (
                    <>
                        {/* How to Order Section */}
                        <section className="container mx-auto px-4 py-20">
                            <h2 className="text-4xl font-bold text-center mb-16">
                                <span className="gradient-text">Как заказать</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                                {/* Step 1 */}
                                <div className="glass-strong p-8 rounded-2xl relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                                        1
                                    </div>
                                    <div className="text-5xl mb-4 text-center">📱</div>
                                    <h3 className="text-xl font-bold mb-3 text-center">Заявка</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Оформите заказ через наш Telegram-бот (выберите услугу и опишите детали) или свяжитесь напрямую: мы на связи по звонку и переписке в WhatsApp и Telegram.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="glass-strong p-8 rounded-2xl relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                                        2
                                    </div>
                                    <div className="text-5xl mb-4 text-center">⏱️</div>
                                    <h3 className="text-xl font-bold mb-3 text-center">Оценка за 15 минут</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Пришлите фото или видео вещей. Мы быстро рассчитаем фиксированную стоимость. Цена закрепляется сразу и не меняется в процессе.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="glass-strong p-8 rounded-2xl relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                                        3
                                    </div>
                                    <div className="text-5xl mb-4 text-center">🚚</div>
                                    <h3 className="text-xl font-bold mb-3 text-center">Переезд без опозданий</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Приезжаем вовремя. Бережно упакуем, аккуратно погрузим и безопасно довезем. Работаем вежливо и с улыбкой.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="glass-strong p-8 rounded-2xl relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                                        4
                                    </div>
                                    <div className="text-5xl mb-4 text-center">💳</div>
                                    <h3 className="text-xl font-bold mb-3 text-center">Оплата по факту</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Никаких предоплат. Вы проверяете сохранность вещей на новом месте. Платите только тогда, когда убедитесь, что всё в порядке.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Features Grid */}
                        <section className="container mx-auto px-4 py-20 bg-gray-50">
                            <h2 className="text-4xl font-bold text-center mb-16">
                                <span className="gradient-text">Почему выбирают нас</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                <div className="glass-strong p-8 rounded-2xl text-center">
                                    <div className="text-5xl mb-4">⚡</div>
                                    <h3 className="text-xl font-bold mb-3">Быстро</h3>
                                    <p className="text-gray-600">
                                        Приедем в течение часа после звонка
                                    </p>
                                </div>
                                <div className="glass-strong p-8 rounded-2xl text-center">
                                    <div className="text-5xl mb-4">💪</div>
                                    <h3 className="text-xl font-bold mb-3">Надёжно</h3>
                                    <p className="text-gray-600">
                                        Опытные грузчики с профессиональным инструментом
                                    </p>
                                </div>
                                <div className="glass-strong p-8 rounded-2xl text-center">
                                    <div className="text-5xl mb-4">💰</div>
                                    <h3 className="text-xl font-bold mb-3">Честно</h3>
                                    <p className="text-gray-600">
                                        Цена фиксируется заранее, без доплат
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="container mx-auto px-4 py-20">
                            <div className="glass-strong p-12 rounded-2xl max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-6">Готовы заказать {service.title.toLowerCase()}?</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Свяжитесь с нами через Telegram для быстрого расчёта стоимости
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://t.me/PereezdBatumiBot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gradient-bg px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
                                    >
                                        📱 Telegram Bot
                                    </a>
                                    <a
                                        href="tel:+995597048630"
                                        className="bg-white border-2 border-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition inline-block"
                                    >
                                        📞 Позвонить
                                    </a>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}
