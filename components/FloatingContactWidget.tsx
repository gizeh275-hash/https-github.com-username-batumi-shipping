'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingContactWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const contactLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/995597048630',
            icon: '💬',
            bgColor: 'bg-green-500 hover:bg-green-600',
            delay: 0,
        },
        {
            name: 'Telegram',
            url: 'https://t.me/PereezdBatumiBot',
            icon: '✈️',
            bgColor: 'bg-blue-500 hover:bg-blue-600',
            delay: 0.05,
        },
        {
            name: 'Позвонить',
            url: 'tel:+995597048630',
            icon: '📞',
            bgColor: 'bg-white hover:bg-gray-100 text-black shadow-medium',
            delay: 0.1,
        },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[1000]">
            {/* Submenu Buttons */}
            <div
                className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-500 ${isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
            >
                {contactLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-14 h-14 rounded-full ${link.bgColor} flex items-center justify-center text-2xl transform transition-all duration-300 hover:scale-125 hover:-translate-y-1 active:scale-95`}
                        style={{
                            transitionDelay: isOpen ? `${link.delay}s` : '0s',
                        }}
                        title={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                className={`w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center shadow-yellow transition-all duration-300 ${isOpen ? 'rotate-90 scale-110' : 'scale-100'
                    } animate-pulse-ring hover:animate-bounce-gentle`}
                aria-label="Связаться с нами"
            >
                <MessageCircle className="w-8 h-8 text-black" />
            </button>

            {/* Close overlay on mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 -z-10 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
