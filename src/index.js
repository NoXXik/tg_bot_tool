const TelegramBot = require('node-telegram-bot-api');
const {shutDownComputer} = require('shutdown-computer')
// Получаем токен бота из .env файла
const token = '6076042058:AAH9avvLjjG106VANCueo1Fd7r8drmYs6dA';

// Создаем экземпляр бота
const bot = new TelegramBot(token, {polling: true});

// Объект для хранения информации о первом сообщении пользователя
const firstMessage = {};

// Обработчик события при получении нового сообщения
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg)
    // Проверяем, является ли это первым сообщением пользователя
    // Отправляем ответ "привет"
    if(msg.text === '/shutdown'){
        bot.sendMessage(chatId, 'Компьютер выключен!');
        shutDownComputer()
    }
    bot.sendMessage(chatId, 'Привет!');

    // Устанавливаем флаг, что первое сообщение получено
})

