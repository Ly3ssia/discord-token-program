const { Client,MessageEmbed, Collection} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const ayar = require("../tokens.json")
const { CustomStatus } = require('discord.js-selfbot-rpc');
const db = require("croxydb")
for (let index = 0; index < ayar.token.length; index++) {
    const token = ayar.token[index];
module.exports = {
	name: 'setstatus',
	description: 'Custom Status Değiştirir',
	execute(message, args) {
	if(message.author.id !== ayar.owner) return;
    const mesaj = args.join(" ");
    if(!mesaj) return message.reply("Lütfen statusumun ne olacağını belirt!\nidle,dnd,online")
    const custom = new CustomStatus()
        .setState(mesaj)
    db.set(`status`, mesaj)
    return message.reply("Status 15 saniye sonra değiştirilecek!")
	},
}
};