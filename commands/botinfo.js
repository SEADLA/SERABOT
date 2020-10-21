const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
        const info = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor('╚»★«╝ BOT INFO ╚»★«╝')
        .setDescription("SERA bot is developed and created by SEADLA, on 15 sept 2020.\n\n**Discord Server:** [Join](https://discord.gg/5kpQR5Y)\n**Saweria:** [Donate](https://saweria.co/SEADLA12)\n**Youtube:** [SUBSCRIBE](https://www.youtube.com/channel/UCZKB41uud9hSGhCOvXBAWyQ/videos)\n**Official Website:** [SERA Website](https://serabot.glitch.me/)")
        .setThumbnail('https://i.imgur.com/enKWPMY.png')
        .addField('Official server :', 'SERA Bot', true)
        .setImage('')
        .setTimestamp()
        .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '');
    
    message.channel.send(info);
}
