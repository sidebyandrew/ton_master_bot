import { Context, SessionFlavor } from "grammy";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";

export type MyConversation = Conversation<MyContext>;

export interface BotConfig {
  botAdminId: number;
  isDeveloper: boolean;
}
export interface Dish {
  id: string;
  name: string;
}

export interface SessionData {
  favoriteIds: string[];
}

export type MyContext = Context &
  ConversationFlavor & {
    config: BotConfig;
  } & SessionFlavor<SessionData>;
