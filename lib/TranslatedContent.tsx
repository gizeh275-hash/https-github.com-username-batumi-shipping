'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

interface TranslatedContentProps {
    htmlContent: string;
    cacheKey: string;
}

// Простая функция для перевода через бесплатный Google Translate API
async function translateText(text: string, targetLang: string): Promise<string> {
    try {
        const encodedText = encodeURIComponent(text);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=${targetLang}&dt=t&q=${encodedText}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }

        return text;
    } catch (error) {
        console.error('Translation error:', error);
        return text;
    }
}

// Извлечение текстаиз HTML
function extractTexts(html: string): string[] {
    if (typeof window === 'undefined') return [];

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const texts: string[] = [];
    const walk = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent?.trim();
            if (text && text.length > 2) {
                texts.push(text);
            }
        } else {
            node.childNodes.forEach(walk);
        }
    };
    walk(tempDiv);

    return texts;
}

export default function TranslatedContent({ htmlContent, cacheKey }: TranslatedContentProps) {
    const { language } = useLanguage();
    const [translatedHtml, setTranslatedHtml] = useState(htmlContent);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        async function translate() {
            console.log('[Translation] Language:', language);

            if (language === 'ru') {
                setTranslatedHtml(htmlContent);
                return;
            }

            const cacheKeyFull = `translation_${cacheKey}_${language}`; // Renamed to avoid conflict with prop
            const cached = localStorage.getItem(cacheKeyFull);

            if (cached) {
                console.log('[Translation] Loaded from cache');
                setTranslatedHtml(cached);
                return;
            }

            console.log('[Translation] Starting translation...');
            setIsTranslating(true);

            try {
                const texts = extractTexts(htmlContent);
                console.log(`[Translation] Found ${texts.length} texts to translate`);

                let result = htmlContent;

                // Переводим небольшими порциями
                for (let i = 0; i < Math.min(texts.length, 50); i++) {
                    const original = texts[i];
                    const translated = await translateText(original, language);

                    if (translated !== original) {
                        const escaped = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        result = result.replace(new RegExp(escaped, 'g'), translated);
                    }

                    // Задержка чтобы не заблокировали
                    await new Promise(resolve => setTimeout(resolve, 200));
                }

                console.log('[Translation] Complete!');
                localStorage.setItem(cacheKeyFull, result);
                setTranslatedHtml(result);
            } catch (error) {
                console.error('[Translation] Failed:', error);
                setTranslatedHtml(htmlContent);
            } finally {
                setIsTranslating(false);
            }
        }

        translate();
    }, [language, htmlContent, cacheKey]);

    if (isTranslating) {
        return (
            <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                <p className="mt-4 text-gray-600">
                    {language === 'en' ? 'Translating page, please wait...' : language === 'ka' ? 'გვერდის თარგმნა...' : 'Перевод страницы...'}
                </p>
            </div>
        );
    }

    return <div dangerouslySetInnerHTML={{ __html: translatedHtml }} />;
}
