const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

   module.exports.run = async (client, message, args) => {
        const subReddits = ["cow"]; // Put in any Reddit names here to your discetion. 
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`This Cow Image`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')

        message.channel.send(embed)
    }


    module.exports.config = {
        permission: "CHANGE_NICKNAME",
        cmdPerms: ["EMBED_LINKS", "ATTACH_FILES"],
        command: "cow",
        category: "fun",
        cooldown: 5,
        args: false
    }