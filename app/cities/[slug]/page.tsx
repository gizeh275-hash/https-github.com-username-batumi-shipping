import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, Truck, Phone, CheckCircle, ArrowRight, Package, Users, Clock } from 'lucide-react';
import { citiesData } from '@/lib/citiesData';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.keys(citiesData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = citiesData[slug];

    if (!city) {
        return {
            title: 'Город не найден',
        };
    }

    return {
        title: `${city.type === 'intercity' ? 'Переезд' : 'Грузоперевозки'} ${city.name} | Georgia Moving`,
        description: city.description,
        keywords: `грузоперевозки ${city.nameEn}, переезд ${city.name}, грузчики ${city.name}, доставка ${city.name}`,
        openGraph: {
            title: `${city.type === 'intercity' ? 'Переезд' : 'Грузоперевозки'} ${city.name}`,
            description: city.description,
        },
    };
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = citiesData[slug];

    if (!city) {
        notFound();
    }

    const isIntercity = city.type === 'intercity';

    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumbs */}
                            <div className="mb-6">
                                <Link href="/cities" className="text-yellow-600 hover:text-yellow-700">
                                    ← Все города
                                </Link>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-yellow-400 p-4 rounded-full">
                                    {isIntercity ? (
                                        <Truck className="w-8 h-8 text-black" />
                                    ) : (
                                        <MapPin className="w-8 h-8 text-black" />
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
                                        {isIntercity ? 'Переезд' : 'Грузоперевозки'} {city.name}
                                    </h1>
                                    <p className="text-xl text-gray-700">{city.region}</p>
                                    {city.distance && (
                                        <p className="text-lg text-yellow-600 font-semibold mt-2">
                                            📍 Расстояние: {city.distance}
                                        </p>
                                    )}
                                    {city.population && (
                                        <p className="text-lg text-gray-600 mt-2">
                                            👥 Население: {city.population}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed">
                                {city.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Особенности работы {isIntercity ? 'на маршруте' : 'в городе'}
                    </h2>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {city.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
                            >
                                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="container mx-auto px-4 py-16 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        Наши услуги {isIntercity ? 'на маршруте' : 'в городе'} {city.name}
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Полный спектр услуг грузоперевозок и переездов
                    </p>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                                <Truck className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Квартирные переезды</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• От студии до 5-комнатной квартиры</li>
                                <li>• Упаковка вещей</li>
                                <li>• Разборка/сборка мебели</li>
                                <li>• Бережная перевозка</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                                <Package className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Офисные переезды</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Перевозка оборудования</li>
                                <li>• Серверное оборудование</li>
                                <li>• Мебель и техника</li>
                                <li>• Документы для юрлиц</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                                <Users className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Услуги грузчиков</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Погрузка/разгрузка</li>
                                <li>• Подъем на этаж</li>
                                <li>• Профессиональная бригада</li>
                                <li>• Все необходимые инструменты</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Почему выбирают нас для переездов {isIntercity ? 'по маршруту' : 'в'} {city.name}
                    </h2>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Знаем местность</h3>
                                <p className="text-gray-700">
                                    Опыт работы {isIntercity ? 'на этом маршруте' : 'в этом городе'}.
                                    Знаем все дороги, проблемные участки и особенности.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                <Clock className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Пунктуальность</h3>
                                <p className="text-gray-700">
                                    Приезжаем точно в назначенное время. Ценим ваше время и планируем маршрут заранее.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                <Truck className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Специализированный транспорт</h3>
                                <p className="text-gray-700">
                                    Машины оборудованы специально для мебели. {isIntercity ? 'Готовы к дальним маршрутам.' : 'Проедем в любой двор.'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Честные цены</h3>
                                <p className="text-gray-700">
                                    Фиксированная цена без доплат. Рассчитаем стоимость перед началом работы.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-yellow-400 to-orange-400">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Готовы организовать переезд {isIntercity ? 'по маршруту' : 'в'} {city.name}?
                        </h2>
                        <p className="text-xl text-black mb-8">
                            Напишите нам в Telegram или позвоните — рассчитаем стоимость за 2 минуты!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://t.me/PereezdBatumiBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-yellow-400 font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
                            >
                                Написать в Telegram
                                <ArrowRight className="w-6 h-6" />
                            </a>
                            <a
                                href="tel:+995555123456"
                                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl"
                            >
                                Позвонить
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>
                        <p className="text-black mt-6">
                            Бесплатная консультация • Точный расчет • Выезд в любое время
                        </p>
                    </div>
                </section>

                {/* Related Cities */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Другие направления
                    </h2>

                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.values(citiesData)
                            .filter((c) => c.slug !== city.slug)
                            .slice(0, 8)
                            .map((relatedCity) => (
                                <Link
                                    key={relatedCity.slug}
                                    href={`/cities/${relatedCity.slug}`}
                                    className="bg-gray-50 hover:bg-yellow-50 border-2 border-gray-200 hover:border-yellow-400 rounded-xl p-4 text-center transition"
                                >
                                    <p className="font-bold text-sm">{relatedCity.name}</p>
                                    <p className="text-xs text-gray-600">{relatedCity.region}</p>
                                </Link>
                            ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/cities"
                            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold"
                        >
                            Посмотреть все города
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
