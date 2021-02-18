const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("1123939734:AAFvrrTRSa1owbgsp8-tWFHI72fAoA6k5TA", {
    polling: true,
});

bot.on("polling_error", (e) => console.log(e));
bot.on("left_chat_member", (member) =>
    bot.deleteMessage(member.chat.id, member.message_id))