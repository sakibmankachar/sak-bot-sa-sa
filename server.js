var dbd = require("dbd.js")

var bot = new dbd.Bot({
token: process.env.BOT_TOKEN, 
prefix: "s." 
})

bot.onMessage()

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})

bot.command({
  name: