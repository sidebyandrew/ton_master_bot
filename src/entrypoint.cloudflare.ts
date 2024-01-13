import { Bot, webhookCallback } from "grammy";
import { MyContext } from "./global.types";
import { register_config } from "./middleware.ctx.config";
import { bind_command } from "./command";
import { on_message } from "./message";
import { main_entry_point } from "./entrypoint.main";

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot = new Bot<MyContext>(
  "6974828212:AAFZzNoM6Wsv8jI75JsZ8ukbzVuy-CtFvB8",
);

// ===========================================================================
//                        Main Start
// ===========================================================================
main_entry_point(bot);
// ###########################################################################
//                        Main End
// ###########################################################################

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
