const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const ayarlar = require('../ayarlar.json');
  var room = ayarlar.commandroom;

  if (message.channel.id != room) {
    return;
  }

  // Gather all commands from the collection
  const allCommands = client.commands.array();

  // Split into pages of 10 commands each
  const pageSize = 10;
  const pages = [];

  for (let i = 0; i < allCommands.length; i += pageSize) {
    const slice = allCommands.slice(i, i + pageSize);
    const description = slice
      .map(cmd => `\`!${cmd.help.name}\` — ${cmd.help.description}`)
      .join('\n');
    pages.push(description);
  }

  const totalPages = pages.length;

  const buildEmbed = (pageIndex) => {
    return new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('📋 Lista de Comandos')
      .setDescription(pages[pageIndex])
      .setFooter(`Página ${pageIndex + 1} de ${totalPages} • Total: ${allCommands.length} comandos`, client.user.avatarURL())
      .setTimestamp();
  };

  // If everything fits on one page, just send it without reactions
  if (totalPages === 1) {
    message.channel.send(buildEmbed(0));
    return;
  }

  // Send first page and add navigation reactions
  let currentPage = 0;
  const embedMessage = await message.channel.send(buildEmbed(currentPage));

  await embedMessage.react('⬅️');
  await embedMessage.react('➡️');

  const filter = (reaction, user) =>
    ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;

  const collector = embedMessage.createReactionCollector(filter, { time: 60000 });

  collector.on('collect', async (reaction, user) => {
    // Remove the user's reaction so they can click again
    reaction.users.remove(user.id).catch(() => {});

    if (reaction.emoji.name === '➡️') {
      currentPage = (currentPage + 1) % totalPages;
    } else if (reaction.emoji.name === '⬅️') {
      currentPage = (currentPage - 1 + totalPages) % totalPages;
    }

    embedMessage.edit(buildEmbed(currentPage));
  });

  collector.on('end', () => {
    // Remove navigation reactions when the collector expires
    embedMessage.reactions.removeAll().catch(() => {});
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmd'],
  permLevel: 0
};

exports.help = {
  name: 'cmd',
  description: 'Muestra todos los comandos disponibles y su descripción',
  usage: 'cmd'
};
