'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    showBackground?: boolean;
    useGradientText?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, showBackground = true, useGradientText = true }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            {showBackground && (
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/freight-hero.png')",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/95"></div>
                </motion.div>
            )}

            <div className="container mx-auto px-4 py-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className={useGradientText ? "gradient-text" : "text-black"}>{title}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-gray-700 mb-12"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.a
                        href={ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 gradient-bg text-black px-10 py-5 rounded-full text-lg font-bold shadow-yellow-glow hover:shadow-yellow transition-all duration-300"
                    >
                        {ctaText}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { number: '1000+', label: 'Успешных переездов' },
                            { number: '24/7', label: 'Поддержка клиентов' },
                            { number: '100%', label: 'Гарантия сохранности' },
                            { number: '5+', label: 'Лет на рынке' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.9 + index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-strong p-6 rounded-xl hover:shadow-medium transition-all duration-300 cursor-default"
                            >
                                <div className="text-3xl font-bold gradient-text">{item.number}</div>
                                <div className="text-gray-600 mt-2 text-sm">{item.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
