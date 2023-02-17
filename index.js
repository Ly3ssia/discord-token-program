const { Client,MessageEmbed, Collection} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const { CustomStatus } = require('discord.js-selfbot-rpc');
const fs = require("fs") 
const ayar = require("./tokens.json")
client.commands = new Collection();
for (let index = 0; index < ayar.token.length; index++) {
    const token = ayar.token[index];
      client.login(token)}
client.on('ready', async()=>{ 
console.log("Tokene Giris Yapildi!")
})
  

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.on("ready", async() => {
   setInterval(async () => {
const db = require("croxydb")
const data = db.fetch("durum")
const data2 = db.fetch("status")
if(!data2) return;
if(!data) return;
    const custom = new CustomStatus()
        .setStatus(data2)
    .setState(data)
        client.user.setPresence(custom.toData())

   }, 15000)
  
})
client.on("ready", async() => {
   setInterval(async () => {
const db = require("croxydb")
const data = db.fetch("status")
const db2 = db.fetch("durum")
if(!data) return;
if(!db2) return;
     const custom = new CustomStatus()
        .setStatus(data)
         .setState(db2)

    client.user.setPresence(custom.toData())
   }, 15000)
})
client.on("ready", async() => {
   setInterval(async () => {
const db = require("croxydb")
const data = db.fetch("voice")
const { joinVoiceChannel } = require('@discordjs/voice');
if(!data) return;
     const channel = client.channels.cache.get(data)
    joinVoiceChannel({
            channelId: data,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator
        })
   }, 15000)
})
