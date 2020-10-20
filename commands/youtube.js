const ytsr = require('ytsr')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if (!query) return message.channel.send("Please provide a search query")
  
  const res = await ytsr(query).catch(e => {
    return message.channel.send("No results were found")});
    
    const video = res.items.filter(i => i.type == "video")[0];
    if(!video) return message.channel.send("No results were found");
    
    const embed = new MessageEmbed()
    .setColor('RED')
    .setImage(video.thumbnail)
    .setDescription(`[Link Youtube Click Here](${video.link})`)
    .setAuthor(video.author.name)
    .setThumbnail(message.guild.iconURL({size: 4096, dynamic: true}))
    .addField("Views", video.views.toLocaleString(), true)
    .addField("Duration", video.duration)
    .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
    message.channel.send(embed);
};

module.exports.help = {
  name: "yt",
};