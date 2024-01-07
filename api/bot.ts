import {Bot, session, webhookCallback} from "grammy";
import {SocksProxyAgent} from "socks-proxy-agent";
import {bind_command} from "./command";
import {on_message} from "./message";
import {use_middleware} from "./ctx.config";
import {conversations, createConversation} from "@grammyjs/conversations";
import {use_conv} from "./conv";
import {MyContext} from "./global.types";

// ===========================================================================
//                        Bot Init Section Start
// ===========================================================================
let config = {};
if (process.env.NODE_ENV === 'dev') {
    config = {
        client: {
            baseFetchConfig: {
                agent: new SocksProxyAgent("socks://127.0.0.1:7890"),
                compress: true,
            },
        },
    }
}
const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");
export const bot = new Bot<MyContext>(token, config);
// ===========================================================================
//                        Bot Init Section End
// ===========================================================================

use_middleware(bot)
bind_command(bot);
// use_conv(bot);
on_message(bot);


// ===========================================================================
//                        Startup Section Start
// ===========================================================================
let CallbackExport = {};
if (process.env.NODE_ENV === 'dev') {
    // Stopping the bot when the Node.js process
    // is about to be terminated
    process.once("SIGINT", () => bot.stop());
    process.once("SIGTERM", () => bot.stop());
    bot.start().then((e) => {
        console.info(e)
    }).catch((e) => {
        console.error(e)
    });
} else {
    CallbackExport = webhookCallback(bot, "http");
}

export default CallbackExport
// ===========================================================================
//                        Startup Section End
// ===========================================================================



