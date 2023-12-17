module.exports = {
    name: 'queue',
    aliases: ['Wiedergabeliste', 'Liste'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
       
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -Du befindest dich nicht in einen VC !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im selben VC !`);

        const queue = client.player.getQueue(message);
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aktuell keine Wiedergabe !`);

        message.channel.send(`**Wiedergabeliste - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(wiederholt)' : ''}**\nAktuell : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Und **${queue.tracks.length - 5}** Andere Song(s)...` : ` **${queue.tracks.length}** Song(s) in der Liste`}`));
    },
};
