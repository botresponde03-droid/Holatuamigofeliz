const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
if (message.channel.id != room) {
	return;
  }
var exec = require('child_process').exec
exec(`pkill 'go'`, (error, stdout, stderr) => {
});
console.log('Deteniendo todos los ataques:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**► ¡Todos los ataques han sido detenidos! 💥**")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stopgo'],
  permLevel: 0
}

exports.help = {
  name: 'stopgo',
  description: 'Mac',
  usage: 'stopgo'
}