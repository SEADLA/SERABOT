exports.run = async (client, message, args) => {
    client.snipes = new Map()
    
    client.on('messageDelete', function(message, channel){
     client.snipes.set(message.channel.id,{
      content: message.content, 
      author: message.author, 
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
      })
    })
     
    const {MessageEmbed} = require('discord.js')
    module.exports = {
    name: 'snipe',
    description: 'ini Snipe',
    category: 'fun',
    
     run: async(bot, message, args)=>{
     const msg = bot.snipes.get(message.channel.id);
     if(!msg) return message.channel.send(`No messages were deleted on the channel ${message.channel.name}`)
       
    const embed = new MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    .setColor('RED')
    .setImage(msg.image)
    message.channel.send(embed)
      }
    }
    }