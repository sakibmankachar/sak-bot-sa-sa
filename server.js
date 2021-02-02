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
  name:"rps",
  code: `$argsCheck[1;❌ You must select either Rock, either Paper or either Scissors.]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==rock]-$checkCondition[$toLowercase[$message[1]]==paper]-$checkCondition[$toLowercase[$message[1]]==scissors]!=false-false-false;❌ You must select either Rock, either Paper or either Scissors.]
$title[RPS‏]
$description[You chose $replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];rock;Rock;1];paper;Paper;1];scissors;Scissors;1], the bot has chosen $randomText[Rock;Paper;Scissors].
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]]-$randomText[Rock;Paper;Scissors];rock-Scissors;You Won
;1];paper-Rock;You Won.;1];scissors-Paper;You Won.;1];rock-Paper;You Lost.;1];paper-Scissors;You Lost.;1];scissors-Rock;You Lost.;1];rock-Rock;It's a Tie!;1];scissors-Scissors;It's a Tie!;1];paper-Paper;It's a Tie!;1]]
$color[#ff2053]`
});

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
