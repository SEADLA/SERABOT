const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "advice",
  usage: "advice <message>",
  description: "Send your Advice",
  category: "main",
  run: (client, message, args) => {
    message.delete();
    if(!args.length) {
      return message.channel.send("Please Give the Advice")
    }
    
    
    let suggest = new MessageEmbed()
    .setAuthor(`Advice from ${message.author.tag}`)
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(`**${args.join(" ")}**`)
    .setTimestamp()
    
    
    message.channel.send(suggest);
    

    

    
  }
}