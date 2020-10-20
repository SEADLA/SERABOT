const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        const balance = new Discord.MessageEmbed()
        .setTitle(`Balance`)
        .setColor('GOLD')
        .setDescription(`Your Money = ${bal} $`)
        .setThumbnail('https://media0.giphy.com/media/LPfsx5f9o0E557pdrF/giphy.gif?cid=6c09b95283a8fa001e3c57ff26af4089bf2a929edff08e67&rid=giphy.gif')
        message.channel.send(balance)
    }
}
