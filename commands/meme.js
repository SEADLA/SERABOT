const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "meme",
  description: "Get a meme!",
  category: "fun",
  run: async (client, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const memes = new MessageEmbed()
      .setTitle(`Laugh if it's funny :v`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(memes);
  },
};