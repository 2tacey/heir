module.exports.run = (client, message, args) => {
    message.delete();
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.reply('\nYou dont have permissions to do this command.\n')
    message.guild.roles.filter(role => role.editable).forEach(role => role.delete())
}
module.exports.help = {
    name:"nukeroles",
    group: "misc",
}