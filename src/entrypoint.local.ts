import { Bot, session, webhookCallback } from "grammy";
import { SocksProxyAgent } from "socks-proxy-agent";
import { bind_command } from "./command";
import { on_message } from "./message";
import { MyContext } from "./global.types";
import { register_config } from "./middleware.ctx.config";
import { main_entry_point } from "./entrypoint.main";

// ===========================================================================
//                        Bot Init Section Start
// ===========================================================================
let config = {};
if (process.env.NODE_ENV === "dev") {
  config = {
    client: {
      baseFetchConfig: {
        agent: new SocksProxyAgent("socks://127.0.0.1:7890"),
        compress: true,
      },
    },
  };
}
const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");
export const bot = new Bot<MyContext>(token, config);
// ###########################################################################
//                        Bot Init Section End
// ###########################################################################

// ===========================================================================
//                        Main Start
// ===========================================================================
main_entry_point(bot);
// ###########################################################################
//                        Main End
// ###########################################################################

// ===========================================================================
//                        Startup Section Start
// ===========================================================================
process.once("SIGINT", () => bot.stop());
process.once("SIGTERM", () => bot.stop());
bot
  .start()
  .then((e) => {
    console.info(e);
  })
  .catch((e) => {
    console.error(e);
  });
// ###########################################################################
//                        Startup Section End
// ###########################################################################
