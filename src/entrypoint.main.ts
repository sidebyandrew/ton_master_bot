import { Bot } from "grammy";
import { MyContext } from "./global.types";
import { register_config } from "./middleware.ctx.config";
import { bind_command } from "./command";
import { on_message } from "./message";
import { on_member } from "./on.member";

export function main_entry_point(bot: Bot<MyContext>) {
  register_config(bot);
  bind_command(bot);
  on_message(bot);
  on_member(bot);
}
