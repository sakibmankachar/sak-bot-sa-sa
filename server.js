var dbd = require("dbd.js");

var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: "s."
});

bot.onMessage();

bot.command({
  name: "ping",
  code: `Pong! \`$ping\``
});

bot.command({
  name: "rps",
  code: `$setVar[money;$$replaceText[$replaceText[$replaceText[$replac

bot.status({
  text: "s.help",
  type: "PLAYING",
  time: 300
});

bot.variables({
  prefix: "s.",
  myName: "money",
  money: 500
});
