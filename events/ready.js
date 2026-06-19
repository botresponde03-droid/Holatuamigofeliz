const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Activo, ¡comandos cargados!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ¡ha iniciado sesión correctamente!`);
  client.user.setStatus("online");
};
