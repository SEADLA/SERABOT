const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "skin",
    alias: ["skin"],
    timeout: "2000",
    usage:"sr!skin <name>",
    run: async (client, message, args) => {
   if(!args.length) return message.channel.send(`No argument submitted. Try ${module.exports.usage}`)
const skin = args.join(" ");
        const embed = new MessageEmbed()
        .setTitle(`${skin}'s Skin`)
        .setDescription(``)
        .setImage(`https://mc-heads.net/body/${skin}/120`)
        .setThumbnail(`https://cravatar.eu/helmhead/${skin}/190.png`)
        .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
        .setColor("RANDOM");
        embed.setTimestamp();

   message.channel.send(embed);
    }
}