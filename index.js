const Discord = require('discord.js')
const fs = require('fs')
const { RichEmbed } = require('discord.js')
const config = require('./config.json')
for(let i = 0; i < config.tokens.length; i++) {
  const axios = require('axios').default;
  const { red, green, blue, yellow, cyan } = require('chalk');
  const figlet = require("figlet")

    console.log(yellow(figlet.textSync("HEIR SELFBOT")));

 console.log(red(`▂▃▅▇█▓▒░ heir selfbot has been started ░▒▓█▇▅▃▂`))

 console.log(red(`dm heir#0022 if u have any problem or need help with the selfbot.`))

 console.log(green(`My prefix is: ${config.prefix}`));

let client = new Discord.Client()
client.commands = new Discord.Collection()
// Command Handler
fs.readdirSync("./commands").forEach(folders => {
    fs.readdirSync(`./commands/${folders}`).forEach(i => { 
     if (!i.endsWith(".js")) return;
     let commandFile = i.split(".")[0].trim()
     client.commands.set(commandFile, require(`./commands/${folders}/${commandFile}.js`))
    })
})
const evtFiles = fs.readdirSync("./readcommands/")
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  const event = require(`./readcommands/${file}`);
  client.on(eventName, event.bind(null, client));
});

client.login(config.tokens[i])

}
