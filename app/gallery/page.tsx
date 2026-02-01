import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { seoConfig } from '@/lib/seo';

export const metadata: Metadata = {
    title: seoConfig.ru.gallery.title,
    description: seoConfig.ru.gallery.description,
    keywords: seoConfig.ru.gallery.keywords,
    openGraph: {
        title: seoConfig.ru.gallery.title,
        description: seoConfig.ru.gallery.description,
    },
};

export default function GalleryPage() {
    const galleryItems = [
        { title: 'Упаковка дивана', description: 'Профессиональная упаковка мягкой мебели' },
        { title: 'Крепление в кузове', description: 'Надёжная фиксация груза' },
        { title: 'Перевозка мебели', description: 'Транспортировка крупногабаритных вещей' },
        { title: 'Грузчики за работой', description: 'Бережная погрузка' },
        { title: 'Упаковка хрупких вещей', description: 'Защита ценных предметов' },
        { title: 'Загрузка грузовика', description: 'Оптимальное использование пространства' },
        { title: 'Перевозка техники', description: 'Холодильники, стиральные машины' },
        { title: 'Офисный переезд', description: 'Перевозка оборудования и мебели' },
        { title: 'Вывоз строймусора', description: 'Погрузка и вывоз мусора' },
    ];

    return (
        <>
            <Header />
            <main>
                <Hero
                    title="Фото наших работ"
                    subtitle="Примеры упаковки, погрузки и транспортировки"
                    ctaText="Заказать переезд"
                    ctaLink="https://t.me/PereezdBatumiBot"
                />

                {/* Gallery Grid */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Наша галерея</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className="glass-strong rounded-2xl overflow-hidden hover:scale-105 transition-transform group cursor-pointer"
                            >
                                {/* Placeholder Image */}
                                <div className="relative h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                                    <div className="text-6xl opacity-30">📦</div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white text-lg font-semibold">Увеличить</p>
                                    </div>
                                </div>

                                {/* Caption */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note about placeholder images */}
                    <div className="mt-16 text-center">
                        <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
                            <p className="text-gray-300 text-lg">
                                📸 Фотографии наших реальных работ скоро будут добавлены.<br />
                                Свяжитесь с нами для получения примеров выполненных проектов!
                            </p>
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 gradient-bg px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                            >
                                Связаться в Telegram
                            </a>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="gradient-text">Наши достижения</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary-400 mb-2">1000+</div>
                            <p className="text-gray-300">Успешных переездов</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent-400 mb-2">24/7</div>
                            <p className="text-gray-300">Поддержка клиентов</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary-400 mb-2">100%</div>
                            <p className="text-gray-300">Гарантия сохранности</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent-400 mb-2">5+</div>
                            <p className="text-gray-300">Лет на рынке</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
