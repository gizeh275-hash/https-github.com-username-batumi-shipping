import Link from 'next/link';
import { Truck, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-yellow-50 p-8 rounded-full mb-6 animate-pulse">
                <Truck className="w-20 h-20 text-yellow-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 mb-4">
                404
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-bold mb-2">
                Страница уехала... 🚛
            </p>
            <p className="text-gray-500 mb-8 max-w-md">
                Кажется, вы пытаетесь найти страницу, которая уже переехала или никогда не существовала.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <Home className="w-5 h-5" />
                Вернуться на главную
            </Link>
        </div>
    );
}
