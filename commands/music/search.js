module.exports = {
    name: 'search',
    aliases: ['sr','suchen', 'suche'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
       
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -Du befindest dich nicht in einen VC !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - du befindest dich nicht im selben VC`);
        if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte einen Titel definieren !`);

        client.player.play(message, args.join(" "));
        message.delete();
    },
};
