const { Message } = require('discord.js');
const config = require('../config.json')

module.exports = (client, message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (message.content.indexOf(config.prefix) !== 0) return;
    if (!client.commands.get(cmd)) return;
    client.commands.get(cmd).run(client, message, args,);

}
