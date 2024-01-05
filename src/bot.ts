import {Bot} from "grammy";
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
    (ctx) => ctx.reply("I'm running on Heroku using long polling!"),
);

bot.start().then((e) => {console.info(e)}).catch((e) => {console.error(e)});