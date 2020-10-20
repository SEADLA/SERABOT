const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js')

module.exports = {
    name: "work",
    description: "Work your a** off",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
        
            const rest = new Discord.MessageEmbed()
            .setTitle('Rest Time')
            .setColor('GOLD')
            .setDescription(`\nwait for a moment, you need time to rest!!\n\nYou can work again in ${time.minutes}m,and ${time.seconds}s`)
            .setThumbnail('https://media.tenor.com/images/5becaa68bf06de5335138b0bf6e574a5/tenor.gif')
            return message.channel.send(rest)
        } else {
            let amount = Math.floor(Math.random() * 100) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, you worked and earned ${amount} coins`)
        }
    }
}