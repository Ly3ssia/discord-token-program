const { Client,MessageEmbed, Collection, MessageButton, MessageActionRow} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const ayar = require("../tokens.json")
const { CustomStatus } = require('discord.js-selfbot-rpc');
const db = require("croxydb")
module.exports = {
	name: 'settings',
	description: 'Token Ayarlarına Bakarsın!',
	execute(message, args) {
	if(message.author.id !== ayar.owner) return;
    const voice = db.fetch("voice")
    const status = db.fetch("status")
    const activity = db.fetch("durum")
return message.reply(`Ses Durumu: ${voice ? "✅" : "❌"}\nStatus Durumu: ${status ? "✅" : "❌"}\nAktivite Durumu: ${activity? "✅" : "❌"}`)
}
};