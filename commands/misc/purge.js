module.exports.run = (client, message, args) => {
  message.channel.fetchMessages({ limit: 100 }).then(messages=>messages.filter(m => m.author.id === client.user.id).map(r => r.delete()))
};
  module.exports.help = {
    name:"purge",
    group: "misc",
}