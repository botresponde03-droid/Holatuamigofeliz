module.exports = member => {
  let guild = member.guild;
  member.send('¿Por qué te fuiste?');
  guild.defaultChannel.send(`${member.user.username} ha abandonado el servidor.`);
};
