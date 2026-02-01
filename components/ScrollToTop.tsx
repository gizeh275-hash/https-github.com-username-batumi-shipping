'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-48 md:bottom-24 right-4 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-fade-in"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            )}
        </>
    );
}
