import {Bot, webhookCallback} from "grammy";
import {SocksProxyAgent} from "socks-proxy-agent";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const socksAgent = new SocksProxyAgent("socks://127.0.0.1:7890");

let config = {};
if (process.env.NODE_ENV === 'dev') {
    config = {
        client: {
            baseFetchConfig: {
                agent: socksAgent,
                compress: true,
            },
        },
    }
}
export const bot = new Bot(token, config);

bot.command(
    "start",
    (ctx) => ctx.reply("I'm running on Vercel with TypeScript using webhook!"),
);


// export default webhookCallback(bot, "http");

let webhookCallbackE = {};
if (process.env.NODE_ENV === 'dev') {
    bot.start().then((e) => {
        console.info(e)
    }).catch((e) => {
        console.error(e)
    });
} else {
    webhookCallbackE = webhookCallback(bot, "http");
}

export default webhookCallbackE



