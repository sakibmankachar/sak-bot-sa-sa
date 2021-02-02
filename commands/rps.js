module.exports({
  name: "rps",
  code: `$setVar[money;$$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[1]-$splitText[2];rock-rock;sum;1];paper-paper;sum;1];scissors-scissors;sum;1];rock-scissors;sum;1];paper-rock;sum;1];scissors-paper;sum;1];rock-paper;sub;1];scissors-rock;sub;1];paper-scissors;Y
sub;1][$getVar[money;$authorID];$replaceText[$replaceText[$checkCondition[$splitText[1]==$splitText[2]];true;0;1];false;$message[2];1]];$authorID]
 
$description[You: $toLowercase[$splitText[1]]
Bot: $splitText[2]
 
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[1]-$splitText[2];rock-rock;Draw!;1];paper-paper;Draw!;1];scissors-scissors;Draw!;1];rock-scissors;You won!;1];paper-rock;You won!;1];scissors-paper;You won!;1];rock-paper;You lost!;1];scissors-rock;You lost;1];paper-scissors;You lost!;1]]
 
$color[FFF000]
 
$textSplit[$toLowercase[$message[1]]×$randomText[rock;paper;scissors];×]
 
$onlyIf[$isNumber[$message[1]]!=true;Not a number!]
 
$onlyIf[$checkContains[$toLowercase[$message[1]];rock;paper;scissors]==true; Incorrect usage! Correct usage: s.rps <rock/paper/scissors> <bet>]
 
$onlyIf[$message[2]<=$getVar[money;$authorID];You do not have that much money!]
 
$argsCheck[>2; Please Mention Rock or Scissors or Paper and the bet(s.play RPS <Rock/Paper/Scissors> <bet>]`
});
