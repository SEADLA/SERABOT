const Discord = require ('discord.js');
const client = new Discord.Client();
const { token } = require("./config.json");
const prefix = "sr!";
const fs = require('fs');
const { badwords } = require("./bw.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.on('ready', () => {
  try {
    let serverIn = client.guilds.size
    console.log(client.user.tag + ' Araaa~ Araaa~ Onichan');

    function pickStatus() {
      let status = [`${client.guilds.cache.size} Servers`, `${client.users.cache.size} Users`, `Invite me to your server`];
      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "PLAYING"
      });
    };
    setInterval(pickStatus, 8000);
  } catch (err) {
        console.log(err);
  };
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '𝙶𝙾𝙾𝙳𝙱𝚈𝙴');
    if (!channel) return;
  
        const goodbye = new Discord.MessageEmbed() 
            .setTitle('Goodbye bruh!!! :frowning2:')
            .setDescription(`\n\n**Name:** ${member.user.tag} \n\n**UserId:** ${member.id} \n\n**membercount:** *#${member.guild.memberCount}*`)
            .setColor('#0099ff')
            .setThumbnail('https://www.animatedimages.org/data/media/1226/animated-goodbye-image-0014.gif')
            .setFooter('Bot versi 0.1 beta. Create since 15/9/2020');
  
        channel.send(goodbye)
    });
    client.on('guildMemberAdd', member => {
        
      const channel = member.guild.channels.cache.find(ch => ch.name === '𝚆𝙴𝙻𝙲𝙾𝙼𝙴');
      if (!channel) return;
  
          const welcome = new Discord.MessageEmbed() 
              .setTitle('Welcome to the Server')
              .setDescription(`\n\n**Name:** @${member.user.tag} \n\n**UserId:** ${member.id} \n\n**Member Count:** *#${member.guild.memberCount}*`)
              .setColor('#0099ff')
              .setThumbnail('https://lh3.googleusercontent.com/proxy/oMcBHwRk3DKwri4CllptUMqinTvbKA-6pVu_gRnSk30phcE62a08Hjji4wDe3Eo_A-yPMNOsQvU_xrXLRonZeT1oV9K_nma0H5L3nwIRGUapkqFQqQ')
              .setFooter('Bot versi 0.1 beta. Create since 15/9/2020');
  
          channel.send(welcome)

      });
      
      client.on("message", async (message) => {
  
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
      
        
        if(!message.member.hasPermission("ADMINISTRATOR")) {
          let confirm = false;
    
          var i;
          for(i = 0;i < badwords.length; i++) {
            
            if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
              confirm = true;
            
          };
          if(confirm) {
            message.delete()
            return message.channel.send("Saya mencium aroma BadWords , Nakal!!")
          };
        };   
        
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();
        if (!message.content.startsWith(prefix)) return;
        
    
        try {
                  let commandFile = require(`./commands/${cmd}.js`);
                  commandFile.run(client, message, args);
      
              } catch (e) {
      
                message.reply(`Command **${cmd}** not found, sr!help to see commands.`);
      
              }
      });
      fs.readdir("./commands/", (err, files) => {
      
        if(err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if(jsfile.length <= 0){
          message.reply("Tidak dapat menemukan command.");
          return;
        }
        
      
        jsfile.forEach((f, i) =>{
          let props = require(`./commands/${f}`);
          console.log(`${f} berhasil!`);
       
      });
      });

client.login(token);
