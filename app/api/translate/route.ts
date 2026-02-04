import { NextRequest, NextResponse } from 'next/server';
import translate from '@iamtraction/google-translate';

export async function POST(request: NextRequest) {
    try {
        console.log('[API] Translate request received');
        const body = await request.json();
        console.log('[API] Request body:', body);

        const { text, targetLang } = body;

        if (!text || !targetLang) {
            console.error('[API] Missing parameters - text:', !!text, 'targetLang:', !!targetLang);
            return NextResponse.json(
                { error: 'Missing text or targetLang' },
                { status: 400 }
            );
        }

        console.log('[API] Translating from RU to', targetLang);

        // Если русский - возвращаем как есть
        if (targetLang === 'ru') {
            return NextResponse.json({ translatedText: text });
        }

        // Переводим через Google Translate
        console.log('[API] Calling Google Translate...');
        const result = await translate(text, { from: 'ru', to: targetLang });
        console.log('[API] Translation result:', result.text);

        return NextResponse.json({ translatedText: result.text });
    } catch (error) {
        console.error('[API] Translation error:', error);
        return NextResponse.json(
            { error: 'Translation failed', details: String(error) },
            { status: 500 }
        );
    }
}
