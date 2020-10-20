const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {


const Lucky = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setDescription(``)
    .setThumbnail('')
    .addField('**Your Lucky percentage**', `*${Math.floor(Math.random() * 100)+1}%*`)
    .setImage('https://cdn.dribbble.com/users/4640/screenshots/4355265/clover.gif')
    .setTimestamp()
    .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '');

message.channel.send(Lucky);
}