module.exports.run = (client, message, args) => {
let role = message.guild.roles.find(role => role.name.startsWith(args[0])) || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args.join(" ")) || message.mentions.roles.first()
if (!role) return message.reply("Cant find that role")
let user = message.mentions.users.first() 
if (!user) return message.channel.send('Cant find that user.')
message.guild.member(user).addRole(role)
    message.channel.send('Added ' + role.toString() + ' to ' + user.tag)
}
module.exports.help = {
    name:"role",
    group: "misc",
}
