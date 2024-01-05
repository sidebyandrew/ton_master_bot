import {Bot, webhookCallback} from "grammy";
import {SocksProxyAgent} from "socks-proxy-agent";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");


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
export const bot = new Bot(token, config);
// ===========================================================================
//                        Bot Init Section End
// ===========================================================================




bot.command(
    "start",
    (ctx) => ctx.reply("I'm running on Vercel with TypeScript using webhook!"),
);




// ===========================================================================
//                        Startup Section Start
// ===========================================================================
let CallbackExport = {};
if (process.env.NODE_ENV === 'dev') {
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



