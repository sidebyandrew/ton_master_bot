"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
const socks_proxy_agent_1 = require("socks-proxy-agent");
const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error("BOT_TOKEN is unset");
const socksAgent = new socks_proxy_agent_1.SocksProxyAgent("socks://127.0.0.1:7890");
let config = {};
if (process.env.NODE_ENV === 'dev') {
    config = {
        client: {
            baseFetchConfig: {
                agent: socksAgent,
                compress: true,
            },
        },
    };
}
exports.bot = new grammy_1.Bot(token, config);
exports.bot.command("start", (ctx) => ctx.reply("I'm running on Heroku using long polling!"));
exports.default = (0, grammy_1.webhookCallback)(exports.bot, "http");
//
//
// let webhookCallbackE = {};
// if (process.env.NODE_ENV === 'dev') {
//     bot.start().then((e) => {
//         console.info(e)
//     }).catch((e) => {
//         console.error(e)
//     });
// } else {
//     webhookCallbackE = webhookCallback(bot, "http");
// }
//
// export default webhookCallbackE
