const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
        const serverinfo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('SERVER INFO')
	    .setURL('')
        .setAuthor('')
        .setDescription("")
        .setThumbnail('')
        .addField('**SERVER NAME:**', `${message.guild.name}`, true)
        .addField('**OWNER:**', `${message.guild.owner.user.tag}`, true)
        .addField('**OWNER ID:**', `${message.guild.owner.id}`, true)
        .addField('**TOTAL MEMBERS:**', `${message.guild.memberCount}`, true)
        .addField('**TOTAL ROLES:**', `${message.guild.roles.cache.size}`, true)
        .addField('**TOTAL CHANNELS:**', `${message.guild.channels.cache.size}`, true)
        .setImage(`${message.guild.iconURL({dynamic: true})}`)
        .setTimestamp()
        .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '');
    
    message.channel.send(serverinfo);
}