import { NextRequest, NextResponse } from 'next/server';
import translate from '@iamtraction/google-translate';

export async function POST(request: NextRequest) {
    try {
        const { text, targetLang } = await request.json();

        if (!text || !targetLang) {
            return NextResponse.json(
                { error: 'Missing text or targetLang' },
                { status: 400 }
            );
        }

        // Если русский - возвращаем как есть
        if (targetLang === 'ru') {
            return NextResponse.json({ translatedText: text });
        }

        // Переводим через Google Translate
        const result = await translate(text, { from: 'ru', to: targetLang });

        return NextResponse.json({ translatedText: result.text });
    } catch (error) {
        console.error('Translation API error:', error);
        return NextResponse.json(
            { error: 'Translation failed', details: error },
            { status: 500 }
        );
    }
}
