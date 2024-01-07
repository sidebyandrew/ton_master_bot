import { Bot } from "grammy";
import { MyContext, MyConversation } from "./global.types";

export function on_message(bot: Bot<MyContext>) {
  bot.on("message", async (ctx) => {
    // if (ctx.message.text === "name") {
    //   // await ctx.reply(" 导航？？ " + ctx.msg.text + ctx.senderChat?.id + "from: " + ctx.from, {  reply_markup: inlineKeyboard,})
    // }
    // if (ctx.config.isDeveloper) await ctx.reply("Hi Admin! from msg")
    // ctx.reply("get a message = " + ctx.message.text).then(() => {})
  });
}
