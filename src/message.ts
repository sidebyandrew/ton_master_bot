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
        await ctx
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
       await ctx.reply("Make sure to input a valid TON address.").then((r) => {});
      }
    }
  });
}
