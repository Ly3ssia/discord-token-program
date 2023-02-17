const { Client,MessageEmbed, Collection} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const ayar = require("../tokens.json")
const { CustomStatus } = require('discord.js-selfbot-rpc');
const db = require("croxydb")
for (let index = 0; index < ayar.token.length; index++) {
    const token = ayar.token[index];
module.exports = {
	name: 'reset',
	description: 'Custom Status Değiştirir',
	execute(message, args) {
	if(message.author.id !== ayar.owner) return;
  db.delete("durum")
  db.delete("status")
  db.delete("voice")
    return message.reply("Bot fabrika ayarlarına getirildi.")
	},
}
};