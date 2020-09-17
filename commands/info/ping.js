module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send("Ping?").then(m => m.edit(`:ping_pong:! \`The ping is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.\``) );
  };
  module.exports.help = {
    name:"ping",
    group: "info",
}