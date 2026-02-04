import { Bot, Context, session, SessionFlavor, webhookCallback } from 'grammy';

interface SessionData {
    step: 'idle' | 'moving_address' | 'moving_cargo' | 'moving_contact' | 'loader_task' | 'loader_contact' | 'waste_info' | 'waste_contact' | 'taxi_info' | 'taxi_contact';
    data: any;
}

export type MyContext = Context & SessionFlavor<SessionData>;

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8367829067:AAFCZZji7PUZPCUmNcFRi-1E958bnjxVNpk';
const adminChatId = process.env.ADMIN_CHAT_ID;

export const bot = new Bot<MyContext>(botToken);

function initial(): SessionData {
    return { step: 'idle', data: {} };
}

bot.use(session({ initial }));

// Keyboards
const mainKeyboard = {
    keyboard: [
        [{ text: '🏠 Переезды' }, { text: '💪 Услуги грузчиков' }],
        [{ text: '🗑 Вывоз мусора' }, { text: '🚛 Доставка / Такси' }],
        [{ text: '📞 Контакты / Связь' }]
    ],
    resize_keyboard: true
};

// Start
bot.command('start', async (ctx) => {
    ctx.session.step = 'idle';
    ctx.session.data = {};
    await ctx.reply('Добро пожаловать в сервис грузоперевозок! 👋\n\nВыберите услугу:', {
        reply_markup: mainKeyboard
    });
});

// --- MOVING FLOW ---
bot.hears('🏠 Переезды', async (ctx) => {
    ctx.session.step = 'moving_address';
    await ctx.reply('📍 Напишите адреса: Откуда ➡️ Куда.\n🏢 Напишите этажи и наличие лифтов по двум адресам.');
});

// --- LOADERS FLOW ---
bot.hears('💪 Услуги грузчиков', async (ctx) => {
    ctx.session.step = 'loader_task';
    await ctx.reply('💪 Заказ грузчиков\n\nНапишите одним сообщением:\n1️⃣ Что делать? \n2️⃣ Этаж и Лифт? \n3️⃣ Адрес? \n4️⃣ Нужна ли машина?');
});

// --- WASTE FLOW ---
bot.hears('🗑 Вывоз мусора', async (ctx) => {
    ctx.session.step = 'waste_info';
    await ctx.reply('🗑 Напишите одним сообщением:\n1️⃣ Что вывозим? (Мебель, мешки)\n2️⃣ Откуда? (Адрес)\n3️⃣ Этаж?');
});

// --- TAXI FLOW ---
bot.hears('🚛 Доставка / Такси', async (ctx) => {
    ctx.session.step = 'taxi_info';
    await ctx.reply('🚛 Напишите одним сообщением:\n1️⃣ Откуда забрать?\n2️⃣ Куда везти?\n3️⃣ Что везем?\n4️⃣ Нужны ли грузчики?');
});

// --- CONTACTS ---
bot.hears('📞 Контакты / Связь', async (ctx) => {
    await ctx.reply('📞 КОНТАКТЫ\n\n📲 Telegram: @PereezdBatumiGE\n📱 Телефон: +995597048630\n\nРаботаем 24/7 по Аджарии.');
});

// --- MESSAGE HANDLER (STATE MACHINE) ---
bot.on('message:text', async (ctx) => {
    const step = ctx.session.step;
    const text = ctx.message.text;

    // Moving
    if (step === 'moving_address') {
        ctx.session.data.address = text;
        ctx.session.step = 'moving_cargo';
        await ctx.reply('📦 Что перевозим? Опишите груз (холодильник, диван, коробки...).');
    } else if (step === 'moving_cargo') {
        ctx.session.data.cargo = text;
        ctx.session.step = 'moving_contact';
        await ctx.reply('📱 Укажите ваш контакт (телефон или телеграм) для связи.');
    } else if (step === 'moving_contact') {
        ctx.session.data.contact = text;
        await sendToAdmin(ctx, '🏠 ЗАЯВКА НА ПЕРЕЕЗД', ctx.session.data);
        ctx.session.step = 'idle';
        await ctx.reply('✅ Заявка принята! Менеджер свяжется с вами.', { reply_markup: mainKeyboard });
    }

    // Loaders
    else if (step === 'loader_task') {
        ctx.session.data.info = text;
        ctx.session.step = 'loader_contact';
        await ctx.reply('📱 Укажите ваш контакт для связи.');
    } else if (step === 'loader_contact') {
        ctx.session.data.contact = text;
        await sendToAdmin(ctx, '💪 ЗАЯВКА НА ГРУЗЧИКОВ', ctx.session.data);
        ctx.session.step = 'idle';
        await ctx.reply('✅ Заявка принята!', { reply_markup: mainKeyboard });
    }

    // Waste
    else if (step === 'waste_info') {
        ctx.session.data.info = text;
        ctx.session.step = 'waste_contact';
        await ctx.reply('📱 Укажите ваш контакт для связи.');
    } else if (step === 'waste_contact') {
        ctx.session.data.contact = text;
        await sendToAdmin(ctx, '🗑 ЗАЯВКА НА ВЫВОЗ МУСОРА', ctx.session.data);
        ctx.session.step = 'idle';
        await ctx.reply('✅ Заявка принята!', { reply_markup: mainKeyboard });
    }

    // Taxi
    else if (step === 'taxi_info') {
        ctx.session.data.info = text;
        ctx.session.step = 'taxi_contact';
        await ctx.reply('📱 Укажите ваш контакт для связи.');
    } else if (step === 'taxi_contact') {
        ctx.session.data.contact = text;
        await sendToAdmin(ctx, '🚛 ЗАЯВКА НА ТАКСИ', ctx.session.data);
        ctx.session.step = 'idle';
        await ctx.reply('✅ Заявка принята!', { reply_markup: mainKeyboard });
    }
});

async function sendToAdmin(ctx: MyContext, title: string, data: any) {
    if (!adminChatId) {
        console.error('ADMIN_CHAT_ID not set');
        return;
    }

    let message = `<b>${title}</b>\n\n`;
    message += `👤 Клиент: ${ctx.from?.first_name} (@${ctx.from?.username})\n`;

    if (data.address) message += `📍 Адрес: ${data.address}\n`;
    if (data.cargo) message += `📦 Груз: ${data.cargo}\n`;
    if (data.info) message += `📋 Инфо: ${data.info}\n`;
    if (data.contact) message += `📞 Контакт: ${data.contact}\n`;

    try {
        await ctx.api.sendMessage(adminChatId, message, { parse_mode: 'HTML' });
    } catch (e) {
        console.error('Failed to send to admin', e);
    }
}
