import { Bot } from "grammy";
import { MyContext, MyConversation } from "./global.types";
import TonWeb from "tonweb";

export function on_member(bot: Bot<MyContext>) {
  bot.on("my_chat_member", async (ctx) => {
    let botAdminId = ctx.config.botAdminId;
    let ctx_info = JSON.stringify(ctx);
    console.info(ctx_info);

    let description;
    let from_operator = ctx.myChatMember.from.username;
    let id = ctx.myChatMember.chat.id;
    let chat = JSON.stringify(ctx.myChatMember.chat);
    let chat_type = ctx.myChatMember.chat?.type;

    // let status: "member" | "creator" | "administrator" | "restricted" | "left" | "kicked"
    let status = ctx.myChatMember.new_chat_member.status;
    if (chat_type == "channel") {
      description = `I have been add to channel by ${from_operator} as ${status} from ${chat}`;
    } else if (chat_type == "group" || chat_type == "supergroup") {
      description = `I have been add to ${chat_type} by ${from_operator} as ${status} from ${chat}`;
    } else if (chat_type == "private") {
      description = `I have a ${chat_type} chat with ${from_operator} as chat ${status} from ${chat}`;
    }

    if (status == "left") {
      description = `I have been ${status} by ${from_operator} from ${chat} `;
    } else if (status == "kicked") {
      description = `I have been ${status} by ${from_operator} from ${chat} `;
    } else if (status == "restricted") {
      description = `I have been ${status} by ${from_operator} from ${chat} `;
    }

    //${description} \n\n<code class='language-json'> ${ctx_info} </code>
    await ctx.api
      .sendMessage(botAdminId, `${description} \n\n`, {
        parse_mode: "HTML",
      })
      .catch((e) => {
        console.error(e);
      });
  });
}
