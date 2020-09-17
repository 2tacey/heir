const fs = require('fs')
const { RichEmbed } = require('discord.js')
module.exports.run = (client, message, args) => {
    message.delete();

    let array = ["misc", "info"]
    let query = args[0]

    if(!client.commands.get(query) && !array.includes(query)) {
        let groupEmbed = new RichEmbed()

        for(let i = 0; i < array.length; i++) {
           groupEmbed.addField(`\n${array[i]}`,"————————————")
        }
        groupEmbed.setColor("RANDOM")
        groupEmbed.setTitle("heir selfbot commands:")
        groupEmbed.setFooter("Developer: heir")
        groupEmbed.setThumbnail("https://thumbs.gfycat.com/JaggedAlarmedBantamrooster-size_restricted.gif")

        message.channel.send(groupEmbed)
        return;
    }

    if(array.includes(query)) {

        const commands = client.commands.filter(obj => obj.help.group === query)
        
        let commandsEmbed = new RichEmbed()
        .setDescription(commands.map(i => "― " + i.help.name + "\n").join(" "))
        .setColor("RANDOM")
        .setThumbnail("https://thumbs.gfycat.com/JaggedAlarmedBantamrooster-size_restricted.gif")
        .setFooter("Developer: heir")

        message.channel.send(commandsEmbed)
        }
}
exports.help = {
    name:"help",
    group: "info",
}