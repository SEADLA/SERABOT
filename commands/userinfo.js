const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb :dnd:';
    if (member.presence.status === 'online') member.presence.status = 'Online :online:';
    if (member.presence.status === 'idle') member.presence.status = 'Idle :idle:';
    if (member.presence.status === 'offline') member.presence.status = 'Offline :invisible:';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(`𝐈𝐧𝐟𝐨 𝐨𝐟 ${member.user.tag}`, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter('Bot versi 0.1 beta. Create since 15/9/2020', '')
    .setImage(member.user.displayAvatarURL({size: 4096, dynamic: true}))
    .addField("Member ID", member.id)
    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
    .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
    .addField("Status", status)

    message.channel.send(userEmbed);
}