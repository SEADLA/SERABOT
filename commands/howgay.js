const { MessageEmbed } = require('discord.js')
const prefix = "sr!"

exports.run = async (client, message, args) => {
if(message.content.startsWith(`${prefix}howgay`)) { 
 
            
  if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){  
            let avatar = member.displayAvatarURL({size: 4096, dynamic: true});
            let embed = new MessageEmbed()
            .setImage("https://media3.giphy.com/media/Thp5RTBCgPVhP9Z7ku/source.gif")
            .setAuthor(`${member.username} Gay percentage` , member.displayAvatarURL({format: "png"}))
            .setDescription(`${Math.floor(Math.random() * 100)+1}%`)
            .setColor("YELLOW")
            .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
            .setTimestamp();
            message.channel.send(embed)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{  
            let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true})
            let embed = new MessageEmbed()
            .setImage("https://media3.giphy.com/media/Thp5RTBCgPVhP9Z7ku/source.gif")
            .setAuthor("Your gay percentage" , message.author.displayAvatarURL({format: "png"}))
            .setDescription(`${Math.floor(Math.random() * 100)+1}%`)
            .setColor("YELLOW")
            .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
            .setTimestamp();
            message.channel.send(embed)
        } 
} 
}