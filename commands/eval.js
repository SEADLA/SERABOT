const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const prefix = "sr!"
exports.run = async (client, message, args) => {
  if(message.author.id !== "704564485893128253") return message.channel.send("You not have permission to use this command bruhh!") 
  if(message.content.startsWith(`${prefix}eval`)) {
    const args = message.content.substring(prefix.length).split(" ")
    const command = args.slice(1).join(" ")
    
    if(!command) return message.channel.send("Need to specify to eval")
    
    try {
      const evaled = eval(command)
      
      var embed = new MessageEmbed()
      .setColor('#f03824')
      .setTitle('Evaluated')
      .addField(`To eval`, `\`\`\`${command}\`\`\``)
      .addField(`Evaled`, `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\`\``)
      .addField(`Type of`, `\`\`\`${typeof(evaled)}\`\`\``)
      message.channel.send(embed)
    } catch (error) {
      var embed = new MessageEmbed()
      .setColor('#f03824')
      .setTitle('Error')
      .addField(`Error`, `${error}`)
      message.channel.send(embed)
    }
  }
}

//UCOKE SEADLAKE GANTENGKE