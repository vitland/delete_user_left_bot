const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("TOKEN_HERE", {
    polling: true,
});

bot.on("polling_error", (e) => console.log(e));
bot.on("left_chat_member", (member) =>
    bot.deleteMessage(member.chat.id, member.message_id))