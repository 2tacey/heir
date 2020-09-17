const { RichEmbed } = require('discord.js')
module.exports.run = (client, message, args) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const embed = new RichEmbed()
            .setTitle("The selfbot has been online for:")
            .setColor("GREEN")
            .setDescription(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
        message.channel.send(embed);
    }

exports.help = {
    name:"uptime",
    group: "info",
}