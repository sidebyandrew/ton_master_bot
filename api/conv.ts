import {Bot, session} from "grammy";
import {MyContext, MyConversation} from "./global.types";
import {conversations, createConversation} from "@grammyjs/conversations";
import {bot} from "./bot";

export function use_conv(bot: Bot<MyContext>) {

// Install the session plugin.
    bot.use(session({
        initial() {
            // return empty object for now
            return {};
        },
    }));

// Install the conversations plugin.
    bot.use(conversations());
    bot.use(createConversation(greeting));

    bot.command("start", async (ctx) => {
        // enter the function "greeting" you declared
        await ctx.conversation.enter("greeting");
    });

}



async function greeting(conversation:MyConversation, ctx:MyContext) {
    // await ctx.reply("Hi there! What is your name?");
    // const { message } = await conversation.wait();
    // await ctx.reply(`Welcome to the chat, ${message?.text}!`);

    await ctx.reply("How many favorite movies do you have?");
    const count = await conversation.form.number();
    const movies: string[] = [];
    for (let i = 0; i < count; i++) {
        await ctx.reply(`Tell me number ${i + 1}!`);
        const titleCtx = await conversation.waitFor(":text");
        movies.push(titleCtx.msg.text);
    }
    await ctx.reply("Here is a better ranking!");
    movies.sort();
    await ctx.reply(movies.map((m, i) => `${i + 1}. ${m}`).join("\n"));
}