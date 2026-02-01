import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff5f0',
                    100: '#ffe4d6',
                    200: '#ffc9ad',
                    300: '#ffad84',
                    400: '#ff925b',
                    500: '#FF6B35',
                    600: '#e6552a',
                    700: '#cc3f1f',
                    800: '#b32a14',
                    900: '#991409',
                },
                accent: {
                    50: '#e6f2f9',
                    100: '#b3d9ed',
                    200: '#80c0e1',
                    300: '#4da7d5',
                    400: '#1a8ec9',
                    500: '#004E89',
                    600: '#003e6e',
                    700: '#002e53',
                    800: '#001f38',
                    900: '#000f1d',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'float': 'float 6s ease-in-out infinite',
                'wiggle': 'wiggle 0.5s ease-in-out',
                'shake': 'shake 0.5s ease-in-out',
                'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(-40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(40px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(-3deg)' },
                    '75%': { transform: 'rotate(3deg)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
                },
                pulseRing: {
                    '0%': { boxShadow: '0 0 0 0 rgba(252, 211, 77, 0.7)' },
                    '70%': { boxShadow: '0 0 0 20px rgba(252, 211, 77, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(252, 211, 77, 0)' },
                },
                glow: {
                    '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(252, 211, 77, 0.5))' },
                    '50%': { filter: 'drop-shadow(0 0 20px rgba(252, 211, 77, 0.8))' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
