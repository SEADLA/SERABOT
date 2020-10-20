const { MessageEmbed } = require('discord.js')
const util = require('minecraft-server-util');

exports.run = async (client, message, args) => {
  let server = args.join(" ")
  if(!server) return message.reply("Please use valid minecraft server address")
  util.status(server)
  .then((response) => {
    let servers = new MessageEmbed()
    .setTitle(`𝙸𝚗𝚏𝚘 𝚘𝚏 ${server}`)
    .setColor("RANDOM")
    .addField("Host", response.host)
    .addField("Version", response.version)
    .addField("Port", response.port)
    .addField("Online Players", response.onlinePlayers)
    .addField("Max Players", response.maxPlayers)
  .setImage(`http://status.mclive.eu/${server}/${server}/25565/banner.png`)
  .setFooter(`Request ${message.author.tag}`)
  .setTimestamp()
  message.channel.send(servers)
  });
}