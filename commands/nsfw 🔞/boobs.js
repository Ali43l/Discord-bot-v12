const config = require('../../config.json');
const Discord = require('discord.js');
const superagent = require('superagent')



module.exports = {
    name: "boobs",
	description: 'nsfw command',
	aliases: ['bb'],
	guildOnly: true,
	ownerOnly: false,
	args: false,
	usage: "",
	cooldown: 3,
    execute(client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'boobs'})
			.end((err, response) => {
				const boobs = new Discord.MessageEmbed()
				.setTimestamp()
				.setImage(response.body.message)
				.setColor(config.color.main)
			  message.channel.send(boobs)
			});
		  } else {
			message.channel.send(`${config.emojis.no} **This isn't NSFW channel**`)
		}
	}
}