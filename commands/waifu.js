const { MessageEmbed } = require('discord.js')
const KagApi = require("@kagchi/kag-api")
exports.run = async (client, message, args) => {
  const loli = await KagApi.waifu.random()
  let lol = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("This You Waifu bruhh :)", loli)
  .setImage(loli)
  message.channel.send(lol)
}