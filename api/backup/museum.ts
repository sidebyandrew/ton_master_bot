import { Bot } from "grammy";
import { Menu, MenuRange } from "@grammyjs/menu";
import { MyContext } from "../global.types";

export function never_call_me(bot: Bot<MyContext>) {
  const menu_home = new Menu("menu_home");
  menu_home
    .url("群组", "https://t.me/tonx_fans")
    .url("About", "https://grammy.dev/plugins/menu")
    .row()
    .text(
      (ctx) => `Greet ${ctx.from?.first_name ?? "me"}!`, // dynamic label
      (ctx) => ctx.reply(`Hello ${ctx.from.first_name}!`), // handler
    )
    .dynamic(() => {
      const range = new MenuRange();
      for (let i = 0; i < 3; i++) {
        range.text(i.toString(), (ctx) => ctx.reply(`You chose ${i}`)).row();
      }
      return range;
    })
    .text("Cancel", (ctx) => ctx.deleteMessage())
    .text(
      (ctx) => (ctx.from && notifications.has(ctx.from.id) ? "🔔" : "🔕"),
      (ctx) => {
        toggleNotifications(ctx.from.id);
        ctx.menu.update(); // update the menu_home!
      },
    );

  // ============================================
  // Set of user identifiers that have notifications enabled.
  const notifications = new Set<number>();
  function toggleNotifications(id: number) {
    if (!notifications.delete(id)) notifications.add(id);
  }
  // ============================================

  bot.command("start", async (ctx) => {
    ctx.react("😍").then();
    if (ctx.config.isDeveloper) await ctx.reply("Hi Admin!");

    await ctx.reply(
      "Hi! I can only read messages that explicitly reply to me!2222s",
      {
        // Make Telegram clients automatically show a reply interface to the user.
        reply_markup: { force_reply: true },
      },
    );

    ctx
      .reply(
        '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY</a>.',
        { parse_mode: "HTML" },
      )
      .then((r) => {});
  });

  bot.command("start", async (ctx) => {
    await ctx.reply(
      "I'm running on Vercel with TypeScript using pooling" +
        " [inline URL](http://www.example.com/) " +
        " [inline mention of a user](tg://user?id=5499157826) " +
        " `inline fixed-width code` " +
        "👍" +
        "![👍](tg://emoji?id=5368324170671202286)" +
        " *abc* _italic text_ __underline__" +
        "```python" +
        "pre-formatted fixe-dwidth code block written in the Python programming language" +
        "```" +
        "~strikethrough~   ||spoiler||",
      { parse_mode: "MarkdownV2" },
    );

    ctx
      .reply("> Block quotation started", { parse_mode: "MarkdownV2" })
      .then((r) => {});

    ctx
      .reply(
        '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY</a>.',
        { parse_mode: "HTML" },
      )
      .then((r) => {});
  });
}
