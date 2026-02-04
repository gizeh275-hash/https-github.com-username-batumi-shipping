'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

interface TranslatedContentProps {
    htmlContent: string;
    cacheKey: string;
}

// Функция для извлечения текстового контента из HTML
function extractTextFromHTML(html: string): string[] {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const texts: string[] = [];
    const walk = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent?.trim();
            if (text && text.length > 2) texts.push(text);
        } else {
            node.childNodes.forEach(walk);
        }
    };
    walk(tempDiv);

    return texts;
}

// Функция для замены текста в HTML
function replaceTextInHTML(html: string, translations: Map<string, string>): string {
    let result = html;
    translations.forEach((translated, original) => {
        const escaped = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        result = result.replace(new RegExp(escaped, 'g'), translated);
    });
    return result;
}

export default function TranslatedContent({ htmlContent, cacheKey }: TranslatedContentProps) {
    const { language } = useLanguage();
    const [translatedHtml, setTranslatedHtml] = useState(htmlContent);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        async function translate() {
            if (language === 'ru') {
                setTranslatedHtml(htmlContent);
                return;
            }

            const cacheKeyFull = `translation_${cacheKey}_${language}`;
            const cached = localStorage.getItem(cacheKeyFull);

            if (cached) {
                setTranslatedHtml(cached);
                return;
            }

            setIsTranslating(true);

            try {
                const texts = extractTextFromHTML(htmlContent);
                const translations = new Map<string, string>();

                for (const text of texts) {
                    const response = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ text, targetLang: language }),
                    });

                    const data = await response.json();
                    if (data.translatedText) {
                        translations.set(text, data.translatedText);
                    }

                    await new Promise(resolve => setTimeout(resolve, 100));
                }

                const translatedHtml = replaceTextInHTML(htmlContent, translations);

                localStorage.setItem(cacheKeyFull, translatedHtml);
                setTranslatedHtml(translatedHtml);
            } catch (error) {
                console.error('Translation failed:', error);
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
                    {language === 'en' ? 'Translating...' : language === 'ka' ? 'თარგმნა...' : 'Перевод...'}
                </p>
            </div>
        );
    }

    return <div dangerouslySetInnerHTML={{ __html: translatedHtml }} />;
}
