const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js')

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = Math.floor(Math.random() * 150) + 1;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
        const daily1 = new Discord.MessageEmbed()
        .setTitle('Daily Reward')
        .setColor('GOLD')
        .setDescription(`You have already collected your daily reward. You can collect again in **${time.days}**d, **${time.hours}**h, **${time.minutes}**m, and **${time.seconds}**s`)
        .setThumbnail('https://media0.giphy.com/media/LPfsx5f9o0E557pdrF/giphy.gif?cid=6c09b95283a8fa001e3c57ff26af4089bf2a929edff08e67&rid=giphy.gif')
            return message.channel.send(daily1)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const daily = new Discord.MessageEmbed()
            .setTitle('Daily Reward')
            .setColor('GOLD')
            .setDescription(`\nCongrats you get ${amount} coins from Daily Reward`)
            .setThumbnail('https://media0.giphy.com/media/LPfsx5f9o0E557pdrF/giphy.gif?cid=6c09b95283a8fa001e3c57ff26af4089bf2a929edff08e67&rid=giphy.gif')
            message.channel.send(daily)
        }
    }
}