import { Bot } from "grammy";
import { MyContext } from "./global.types";
import { Menu } from "@grammyjs/menu";

export function bind_command_address(bot: Bot<MyContext>) {
  bot.command("address", async (ctx) => {
    await ctx.reply("Please input a TON address for converting", {
      reply_markup: { force_reply: true },
    });
  });
}
