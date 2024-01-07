import {Bot, NextFunction} from "grammy";
import {MyContext} from "./global.types";

export function use_middleware(bot: Bot<MyContext>) {
    const BOT_DEVELOPER: number = 5499157826;

    let middleware = async (ctx:MyContext, next:NextFunction) => {
        const before = Date.now();
        // 只有当用到 ctx.config 时，这段代码才执行？？？？
        ctx.config = {
            botAdminId: BOT_DEVELOPER,
            isDeveloper: ctx.from?.id === BOT_DEVELOPER,
        };

        // invoke downstream middleware
        await next(); // make sure to `await`!
        const after = Date.now(); // milliseconds
        console.log(`Response time: ${after - before} ms`);
    };

    bot.use(middleware);

}