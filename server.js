var dbd = require("dbd.js");

var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: "s."
});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      code: command.code
    });
  }
}

bot.status({
  text: "s.help",
  type: "PLAYING"
});

bot.variables({
  prefix: "s.",
  myName: "money",
  money: 500
});
