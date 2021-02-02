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

bot.command({
  name: "roulette",
  code:`$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;Please pick a side, either **red** or **black**]

$onlyIf[$message[1]<=$getUserVar[money];You don't have enough money! **$message[1]**]

$argsCheck[>1; Please Put a price and a side, red or black! and If you don't understand it type `s.helproulette`]

$authorIcon[$authorAvatar]
$author[$username#$discriminator[$authorID]]
$description[$username bet on $**$message[1]** and picked **`$message[2]`**]
$footer[Hold on for 25s!]
$color[ff354]`
  })
  
bot.command({
  name: "roulettle",
  code: `$replyIn[25s]
$suppressErrors

$setUserVar[money;$$randomText[sum;sub][$getUserVar[money];$message[1]]]

$title[$replaceText[$replaceText[$randomText[sum;sub];sum; WINNER;1];sub; Unfortunately $username lost.;1]]

$description[ball $replaceText[$replaceText[$randomText[sum;sub];sum; draw;1];sub; draw;1] $replaceText[$replaceText[$randomText[sum;sub];sum;on: **`$message[2]`**;1];sub;on: **`$randomText[red;black]`**;1]

$replaceText[$replaceText[$randomText[sum;sub];sum; <@$authorID> $username won: $$message[1];1];sub;<@$authorID> you lost: $$message[1];1]]
$footer[$username#$discriminator[$authorID]]
$footerIcon[$userAvatar[$authorID]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;1bbe00;1];sub;eb0000;1]]

$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;]

$onlyIf[$message[1]<=$getUserVar[money];]

$argsCheck[>1;]`

$replyIn[25s]
$suppressErrors

$setUserVar[money;$$randomText[sum;sub][$getUserVar[money];$message[1]]]

$title[$replaceText[$replaceText[$randomText[sum;sub];sum; WINNER;1];sub; Unfortunately $username lost.;1]]

$description[ball $replaceText[$replaceText[$randomText[sum;sub];sum; draw;1];sub; draw;1] $replaceText[$replaceText[$randomText[sum;sub];sum;on: **`$message[2]`**;1];sub;on: **`$randomText[red;black]`**;1]

$replaceText[$replaceText[$randomText[sum;sub];sum; <@$authorID> $username won: $$message[1];1];sub;<@$authorID> you lost: $$message[1];1]]
$footer[$username#$discriminator[$authorID]]
$footerIcon[$userAvatar[$authorID]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;1bbe00;1];sub;eb0000;1]]

$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;]

$onlyIf[$message[1]<=$getUserVar[money];]

$argsCheck[>1;]`
})
 
