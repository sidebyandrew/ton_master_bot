import { Bot } from "grammy";
import { MyContext, MyConversation } from "./global.types";
import TonWeb from "tonweb";

export function on_message(bot: Bot<MyContext>) {
  bot.on("message", async (ctx) => {
    let msg_text = ctx.message.text;
    if (
      msg_text?.startsWith("EQ") ||
      msg_text?.startsWith("UQ") ||
      msg_text?.startsWith("kQ") ||
      msg_text?.startsWith("0Q")
    ) {
      if (TonWeb.utils.Address.isValid(msg_text)) {
        let net = "Mainnet";
        if (msg_text?.startsWith("kQ") || msg_text?.startsWith("0Q")) {
          net = "Testnet";
        }

        let address = new TonWeb.utils.Address(msg_text);
        let hex = address.toString(false, true, true);
        let bounceable = address.toString(true, true, true);
        let non_bounceable = address.toString(true, true, false);
        ctx
          .reply(
            "Find a <i>" +
              net +
              "</i> TON address, let me convert it for you.\n\n" +
              "<b>Bounceable Address:</b>\n" +
              bounceable +
              "\n\n<b>Non-Bounceable Address:</b>\n" +
              non_bounceable +
              "\n\n<b>HEX Format:</b>\n" +
              hex,
            {
              parse_mode: "HTML",
              reply_parameters: { message_id: ctx.msg.message_id },
            },
          )
          .catch((e) => {
            console.error(e);
          });
      } else {
        ctx.reply("Make sure to input a valid TON address.").then((r) => {});
      }
    }
  });

  // // any message or channel post
  // bot.on("msg", async (ctx) => {
  //   console.info("============  收到一个消息 =================== ");
  //   console.info("消息 = " + ctx.msg.text);
  //   console.info(" 来自于 ctx.from " + JSON.stringify(ctx.from));
  //   console.info("============  消息上下文 =================== ");
  //   console.info(JSON.stringify(ctx));
  //   if (ctx.config.isDeveloper) await ctx.reply("Hi Admin! from msg");
  //   ctx.reply("get a message = " + ctx.msg.text).then(() => {});
  // });
}

// bot.on("my_chat_member", async (ctx) => {
//   console.info(
//     "============  收到一个 my_chat_member 消息 =================== ",
//   );
//   console.info("============  消息上下文 =================== ");
//   console.info(JSON.stringify(ctx));
// });
// bot.on("chat_member", async (ctx) => {
//   console.info(
//     "============  收到一个 chat_member 消息 =================== ",
//   );
//   console.info("============  消息上下文 =================== ");
//   console.info(JSON.stringify(ctx));
// });

// bot.on(":text", async (ctx) => {
//   console.info("============  收到一个 :text 消息  =================== ");
//   console.info(":text 消息 = " + ctx.msg.text);
//   console.info(" 来自于 ctx.from " + JSON.stringify(ctx.from));
//   console.info("============  消息上下文 =================== ");
//   console.info(JSON.stringify(ctx));
//   if (ctx.config.isDeveloper) await ctx.reply("Hi Admin! from msg");
//   ctx.reply("get a message = " + ctx.msg.text).then(() => {});
// });
