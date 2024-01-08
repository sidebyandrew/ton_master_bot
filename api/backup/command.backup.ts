import { Bot } from "grammy";
import { Menu } from "@grammyjs/menu";
import { MyContext } from "../global.types";

export function bind_command(bot: Bot<MyContext>) {
  bot.command("start", async (ctx) => {
    // ctx.react("🎉").then();
    let withPleasure = ctx.t("withPleasure");
    let menu_home = menu_builder(ctx);
    bot.use(menu_home);
    ctx
      .reply(withPleasure, {
        parse_mode: "MarkdownV2",
        reply_markup: menu_home,
      })
      .catch((reason) => {
        console.error(reason);
      });
  });

  bot.command("help", async (ctx) => {
    ctx
      .reply("Contact Master [Andrew Tonx](https://t.me/andrew_tonx) ", {
        parse_mode: "MarkdownV2",
      })
      .catch((e) => {
        console.error(e);
      });
  });
}

function menu_builder(ctx: MyContext) {
  const menu_home = new Menu<MyContext>("menu_home")
    .submenu(ctx.t("m_wallet"), "menu_wallets", (ctx) => {
      console.info(ctx.from.language_code);
      ctx
        .editMessageText("Tonkeeper is the TOP 1 wallet for TON. ")
        .then((r) => {});
    })
    // .submenu("💎 Wallets", "menu_wallets")
    .submenu(ctx.t("m_explorers"), "menu_explorers")
    .submenu(ctx.t("m_nft"), "menu_NFT")
    .row()
    .submenu(ctx.t("m_cex"), "menu_cex")
    .submenu(ctx.t("d_cex"), "menu_dex")
    .submenu(ctx.t("m_bridges"), "menu_bridges")
    .row()
    .submenu(ctx.t("m_groups"), "menu_groups")
    .submenu(ctx.t("m_channels"), "menu_channels")
    .submenu(ctx.t("m_social"), "menu_social")
    .row()
    .submenu(ctx.t("m_games"), "menu_games")
    .submenu(ctx.t("m_gambling"), "menu_gambling")
    .submenu(ctx.t("m_lottery"), "menu_lottery")
    .row()
    .submenu(ctx.t("m_launchpad"), "menu_launchpad")
    .submenu(ctx.t("m_staking"), "menu_staking")
    .submenu(ctx.t("m_inscription"), "menu_inscription")
    .row()
    .submenu(ctx.t("m_utils"), "menu_utils")
    .submenu(ctx.t("m_devtools"), "menu_devtools")
    .submenu(ctx.t("m_settings"), "menu_settings")
    .row();

  const menu_wallets = new Menu<MyContext>("menu_wallets")
    .url("Wallet Bot 🤖", "https://t.me/wallet")
    .row()
    .url("Tonkeeper", "https://www.tonkeeper.com/")
    .row()
    .url("MyTonWallet", "https://mytonwallet.io/")
    .row()
    .url("Tonhub", "https://mytonwallet.io/")
    .row()
    .back(ctx.t("m_back"), async (ctx) => {
      let withPleasure = ctx.t("withPleasure");
      ctx
        .editMessageText(withPleasure, {
          parse_mode: "MarkdownV2",
        })
        .catch((e) => {
          console.error("update error when back to home menu" + e.msg);
        });
    });

  const menu_explorers = new Menu<MyContext>("menu_explorers")
    .url("Tonviewer", "https://tonviewer.com/")
    .row()
    .url("TON Scan", "https://tonscan.org/")
    .row()
    .url("DTON", "https://tonscan.org/")
    .row()
    .url("ton.cx", "https://ton.cx/")
    .row()
    .url("TON Whales", "https://tonwhales.com/explorer")
    .row()
    .back(ctx.t("m_back"));

  const menu_NFT = new Menu<MyContext>("menu_NFT")
    .url("Telegram Numbers", "https://fragment.com/numbers")
    .url("Telegram Usernames", "https://fragment.com/")
    .row()
    .url("Telegram Premium", "https://fragment.com/premium")
    .row()
    .url("TON Domains", "https://dns.ton.org/")
    .row()
    .url("Getgems Marketplace", "https://getgems.io/")
    .url("Getgems Bot 🤖", "https://t.me/GetgemsNftBot")
    .row()
    .back(ctx.t("m_back"));

  const menu_cex = new Menu<MyContext>("menu_cex")
    .url(
      "🎁 OKX - register to get Mystery Boxes",
      "https://okx.com/join/67761134",
    )
    .row()
    .url(
      "🎁 ByBit - register to get 10 USDT",
      "https://www.bybit.com/invite?ref=E0NKP0",
    )
    .row()
    .url("Mercuryo", "https://exchange.mercuryo.io/?currency=TONCOIN")
    .row()
    .url("Matrixport", "https://www.matrixport.com/")
    .row()
    .url("Bit2Me - Spanish crypto exchange", "https://www.bit2me.com/")
    .row()
    .url("❤️ Submit your favorite", "https://t.me/andrew_tonx")
    .row()
    .back(ctx.t("m_back"));

  const menu_dex = new Menu<MyContext>("menu_dex")

    .url("STON.fi Bot 🤖", "https://t.me/STONfi_bot")
    .url("STON.fi Web", "https://app.ston.fi/swap")
    .row()
    .url("Storm Trade Bot 🤖", "https://t.me/StormTradeBot")
    .url("Storm Trade Web", "https://storm.tg/")
    .row()
    .url("DeDust.io", "https://dedust.io/swap")
    .row()
    .url("Mercuryo", "https://exchange.mercuryo.io/?currency=TONCOIN")
    .row()
    .url("🦄 Uniswap", "https://app.uniswap.org/swap")
    .row()
    .back(ctx.t("m_back"));

  const menu_bridges = new Menu<MyContext>("menu_bridges")
    .url("🎖 Official TON Bridge ", "https://bridge.ton.org/")
    .row()
    .url("Orbit Bridge", "https://bridge.orbitchain.io/")
    .row()
    .url("xRocket Bot 🤖", "https://t.me/xrocket")
    .row()
    .url("CryptoBot 🤖", "https://t.me/CryptoBot")
    .row()
    .url("XP.NETWORK", "https://bridge.xp.network/")
    .row()
    .url("Layerswap", "https://www.layerswap.io/app")
    .row()
    .back(ctx.t("m_back"));

  const menu_groups = new Menu<MyContext>("menu_groups")
    .url("百元幣雷針💎Chat", "https://t.me/alphatonchat")
    .row()
    .url("TON心粉群聊 | TON x Group", "https://t.me/tonx_fans")
    .row()
    .url("TON Dev Chat (EN)", "https://t.me/tondev_eng")
    .row()
    .url("TON Dev Chat (中文)", "https://t.me/tondev_zh")
    .row()
    .back(ctx.t("m_back"));

  const menu_channels = new Menu<MyContext>("menu_channels")
    .url("AlphaTon", "https://t.me/alphaton")
    .row()
    .url("TON x Fans (CH)", "https://t.me/tonx_news")
    .row()
    .url("TON Jobs", "https://t.me/tonhunt")
    .back(ctx.t("m_back"));

  const menu_social = new Menu<MyContext>("menu_social")
    .url("💰 Notcoin", "https://t.me/notcoin_bot?start=r_573921_1716399")
    .row()
    .url("Tonex", "https://tonex.app/")
    .row()
    .url("TON Place", "https://ton.place/")
    .row()
    .back(ctx.t("m_back"));

  const menu_games = new Menu<MyContext>("menu_games")
    .url("TON Play", "https://tonplay.io/")
    .url("TON Play - PlayDeck 🤖", "https://t.me/playdeckbot")
    .row()
    .url("Games Platform 🤖", "https://t.me/InstantGames_bot")
    .row()
    .url("🍿 Popcoin Games 🤖", "https://t.me/ThePopcoinBot")
    .row()
    .back(ctx.t("m_back"));

  const menu_gambling = new Menu<MyContext>("menu_gambling")
    .url("🥇🐳 @Whale", "https://whale.io/?start=56a08af2359db7dd")
    .row()
    .url(
      "TON Poker 🤖",
      "https://myTonPokerBot.t.me/?start=afpZWQxNjQ3NzdkNTNkZjZmNzQ1YmMwNmI5Y2JiNjY5MDM",
    )
    .row()
    .url("JetTon Games", "https://jetton.games/")
    .row()
    .back(ctx.t("m_back"));

  const menu_lottery = new Menu<MyContext>("menu_lottery")
    .url("Jackpot TON Mini-App 🤖", "https://t.me/jackpot_ton_bot/Jackpot_ton")
    .row()
    .url("Jackpot TON Group", "https://t.me/jackpot_dot_ton")
    .row()
    .back(ctx.t("m_back"));

  const menu_launchpad = new Menu<MyContext>("menu_launchpad")
    .url("🎖 TONUP", "https://tonup.io/")
    .row()
    .url("Tonstarter", "https://tonstarter.com/")
    .row()
    .url("Gagarin World", "https://ton.gagarin.world/ru")
    .row()
    .back(ctx.t("m_back"));

  const menu_staking = new Menu<MyContext>("menu_staking")
    .url("Ton Stakers", "https://app.tonstakers.com/")
    .row()
    .url("Whales Pool", "https://tonwhales.com/mining")
    .row()
    .url("TonStake.com", "https://tonstake.com/")
    .row()
    .url("Hipo Finance", "https://app.hipo.finance/#/")
    .row()
    .url("Ton Stake Lottery", "https://tonstakelottery.com/")
    .row()
    .back(ctx.t("m_back"));

  const menu_inscription = new Menu<MyContext>("menu_inscription")
    .url("🎖 Tonano #TON20", "https://tonano.io/")
    .row()
    .url("Tonano Group", "https://t.me/tonanoOfficial")
    .url("Tonano Bot 🤖", "https://t.me/TonanoBot")
    .row()
    .url("Gram20", "https://gram20.com/")
    .row()
    .url("Gram20 Group", "https://t.me/Gram_Announcement")
    .url("Gram20 Bot 🤖", "https://t.me/gram20bot/app")
    .row()
    .url("TONOT", "https://tonot.io/")
    .row()
    .url("TONOT Group", "https://t.me/Tonot_ann")
    .url("TONOT Bot 🤖", "https://t.me/tonottg_bot?start=KJKY5JU2")
    .row()
    .back(ctx.t("m_back"));

  const menu_utils = new Menu<MyContext>("menu_utils")
    .url("🎖 TON App - Explore in TON Ecosystem", "https://ton.app/")
    .row()
    .url("Crypto Ads Platform Bot 🤖", "https://t.me/mycap_bot")
    .row()
    .url("Crypto Ads Platform Group", "https://t.me/cap_live")
    .row()
    .url("Fragment Checker Bot 🤖", "https://t.me/fragmentcheckerbot")
    .row()
    .url("TON Notify Bot 🤖", "https://t.me/tonnotifybot")
    .row()
    .url("Connecton VPN", "https://link.connecton.surf/9efa4f3dfa")
    .row()
    .back(ctx.t("m_back"));

  const menu_devtools = new Menu<MyContext>("menu_devtools")

    .url("TON API", "https://tonapi.io/")
    .row()
    .url("TonFura", "https://tonfura.com/")
    .row()
    .url("TON Address Converter", "https://ton.org/address/")
    .row()
    .url("TON Smart Contract Verifier", "https://verifier.ton.org/")
    .row()
    .url(
      "TON Blockchain Testnet Faucet Bot 🤖",
      "https://t.me/testgiver_ton_bot",
    )
    .row()
    .back(ctx.t("m_back"));

  const menu_settings = new Menu<MyContext>("menu_settings")
    .url("👥 Join User Group", "https://t.me/ton_master_chat")
    .row()
    .url("📲 Contact Master (Andrew Tonx)", "https://t.me/andrew_tonx")
    .row()
    .back(ctx.t("m_back"));

  // menu_home.register(menu_wallets);
  // menu_home.register(menu_explorers);
  // menu_home.register(menu_NFT);
  // menu_home.register(menu_cex);
  // menu_home.register(menu_dex);
  // menu_home.register(menu_bridges);
  // menu_home.register(menu_groups);
  // menu_home.register(menu_channels);
  // menu_home.register(menu_social);
  // menu_home.register(menu_games);
  // menu_home.register(menu_gambling);
  // menu_home.register(menu_lottery);
  // menu_home.register(menu_launchpad);
  // menu_home.register(menu_staking);
  // menu_home.register(menu_inscription);
  // menu_home.register(menu_utils);
  // menu_home.register(menu_devtools);
  // menu_home.register(menu_settings);

  return menu_home;
}
