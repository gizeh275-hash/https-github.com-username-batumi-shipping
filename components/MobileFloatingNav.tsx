'use client';

import { Phone, Send, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileFloatingNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            {/* Glassmorphism Background */}
            <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 px-6 py-4 shadow-2xl pb-safe">
                <div className="grid grid-cols-2 gap-4">
                    {/* Telegram Button */}
                    <a
                        href="https://t.me/PereezdBatumiBot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95"
                    >
                        <Send className="w-5 h-5" />
                        <span>Telegram</span>
                    </a>

                    {/* Call Button */}
                    <a
                        href="tel:+995597048630"
                        className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Позвонить</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
