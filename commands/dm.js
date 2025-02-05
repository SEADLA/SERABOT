const Discord = require('discord.js')

module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.reply("You do not have enough permissions!")
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `Command Usage: sr!dm <tag> <Text>`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("Command Usage: sr!dm <tag> <Text>")
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send(`Success sent a message to ${user.user.tag}`));
  },
};