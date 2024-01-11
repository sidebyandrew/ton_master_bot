import { Bot } from "grammy";
import { MyContext } from "./global.types";
import { Menu } from "@grammyjs/menu";

export function bind_command_help(bot: Bot<MyContext>) {
  bot.command("help", async (ctx) => {
    ctx
      .reply("Contact Master [Andrew Tonx](https://t.me/andrew_tonx) ", {
        parse_mode: "MarkdownV2",
      })
      .catch((reason) => {
        console.error(reason);
      });
  });
}
