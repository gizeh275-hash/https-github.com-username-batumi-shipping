'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CITIES } from '@/lib/cities';

interface CitiesScrollProps {
    cityOverrides?: Record<string, string>;
}

export default function CitiesScroll({ cityOverrides = {} }: CitiesScrollProps) {
    return (
        <section className="bg-gray-50 border-b border-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3 text-center">
                        <MapPin className="w-8 h-8 text-yellow-500" />
                        Выберите ваш город, чтобы узнать точные цены
                    </h3>
                    <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {CITIES.map((city) => (
                                <Link
                                    key={city.slug}
                                    href={cityOverrides[city.slug] || `/${city.slug}`}
                                    className="block bg-white hover:bg-yellow-50 border border-gray-200 hover:border-yellow-200 rounded-lg p-3 transition-all text-sm font-medium text-gray-700 hover:text-black text-center hover:scale-105"
                                >
                                    {city.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
