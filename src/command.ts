import { Bot } from "grammy";
import { MyContext } from "./global.types";
import { bind_command_help } from "./command.help";
import { bind_command_address } from "./command.address";
import { bind_command_start } from "./command.start";

export function bind_command(bot: Bot<MyContext>) {
  bind_command_start(bot);
  bind_command_help(bot);
  bind_command_address(bot);
}
