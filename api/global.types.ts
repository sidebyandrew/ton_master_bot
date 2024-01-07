import {Context} from "grammy";
import {Conversation, ConversationFlavor} from "@grammyjs/conversations";

export type MyConversation = Conversation<MyContext>;

interface BotConfig {
    botAdminId: number;
    isDeveloper: boolean;
}


export type MyContext = Context  & ConversationFlavor & {
    config: BotConfig;
};
