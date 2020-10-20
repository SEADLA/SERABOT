const {MessageEmbed} = require('discord.js')
module.exports= {
    name:"avatar",
    description:"Your avatar",
    usage:"[user mention]",
    category:"commands",
    run:async(bot,message,args) =>{
        let Embed = new MessageEmbed()
        if(!message.mentions.users.first()){
            Embed.setTitle(`This Your avatar!`)
            Embed.setImage(message.author.displayAvatarURL())
            Embed.setColor(`RANDOM`)
            Embed.setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
            return message.channel.send(Embed)
        }else{
            let User = message.mentions.users.first()
            Embed.setTitle(`${User.tag}'s avatar!`)
            Embed.setImage(User.displayAvatarURL())
            Embed.setColor(`RANDOM`)
            Embed.setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
            return message.channel.send(Embed)    
        }             
    }
}