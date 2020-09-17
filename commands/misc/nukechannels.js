module.exports.run = (client, message, args) => {
    message.delete();
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.reply('\nYou dont have permissions to do this command.\n')
    message.guild.channels.forEach(channel => channel.delete())  
}
module.exports.help = {
    name:"nukechannels",
    group: "misc",
}