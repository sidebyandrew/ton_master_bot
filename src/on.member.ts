import { Bot } from "grammy";
import { MyContext, MyConversation } from "./global.types";
import TonWeb from "tonweb";

export function on_member(bot: Bot<MyContext>) {
  bot.on("my_chat_member", async (ctx) => {
    let botAdminId = ctx.config.botAdminId;
    let ctx_info = JSON.stringify(ctx);
    console.info(ctx_info);

    let description;
    let addBy = ctx.myChatMember.from.username;
    let status = ctx.myChatMember.new_chat_member.status;
    if (status == "administrator" || status == "member") {
      description = `I have been add to group by ${addBy} as ${status}`;
    } else if (status == "left") {
      description = `I have been kick off by ${addBy} `;
    }

    await ctx.api
      .sendMessage(
        botAdminId,
        `${description} \n\n<code class='language-json'> ${ctx_info} </code>`,
        {
          parse_mode: "HTML",
        },
      )
      .catch((e) => {
        console.error(e);
      });
  });
}
