const Discord = require('discord.js')

module.exports.run = async (args, message, client) => {

    const help = new Discord.MessageEmbed() 
	.setColor('RANDOM')
	.setTitle('╚»★«╝ HELP COMMAND ╚»★«╝')
	.setDescription("Prefix: ``sr!``\nCommand List:\n\n:man_police_officer_tone2: **Moderator Command**\n```say, clear, kick, ban, mute, unmute, warn```\n:joy: **Fun Command**\n```meme, howgay, lucky, joke, advice, loli, 8ball```\n<a:Blob_megaparty:739515201015119972> **Utility Command**\n```ping, avatar, botinfo, math, youtube, serverinfo, userinfo, covid, weather, translate, report```\n:bird: **Animals**\n```bird, cat, cow, dog, panda, sheep```\n<:minecraft:764643150538080298> **Minecraft Command**\n```skin, mcserver, hypixelstats```\n:moneybag: **Economy Command**\n```bal, daily, work```\n\n\n**Note:** ```Change Goodbye Channel : '𝙶𝙾𝙾𝙳𝙱𝚈𝙴' , Change Welcome Channel : '𝚆𝙴𝙻𝙲𝙾𝙼𝙴' & Report Channel : 'reports'```")
	.setThumbnail('https://i.imgur.com/enKWPMY.png')
    .setImage('')
	.setTimestamp()
	.setFooter('Bot versi 0.1 beta. Create since 15/9/2020', `${message.author.avatarURL()}`);

message.channel.send(help)



}