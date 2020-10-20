const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('SERA Calculator')
        .addField('PERTANYAAN :', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('JAWABAN :', `\`\`\`css\n${resp}\`\`\``)
        .addField('Perhitungan: `*`(perkalian), `/`(pembagian), `+`(penjumlahan), `-`(pengurangan)')
        .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '');

        message.channel.send(embed);

    }
}