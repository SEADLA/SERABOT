const { MessageEmbed } = require("discord.js") 

exports.run = async (client, message, args) => { 
  let now = Date.now(); 
  let wait = await message.channel.send('Gathering ping info 💤')
  let embed = new MessageEmbed()
  .setColor("GREEN")
  .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
  .setTimestamp()
  .addField(`⏲️**Roundtrip took**`, `**${wait.createdTimestamp - message.createdTimestamp}ms**`)
  .addField(`⌛**Latency**`, `**${Math.round(Date.now()-now)}ms**`)
  .addField(`💓**API**`, `**${Math.round(client.ws.ping)}ms**`)
  return setTimeout(function() {
    wait.edit("Success getting ping info ✅", embed)
  }, 2000);
}