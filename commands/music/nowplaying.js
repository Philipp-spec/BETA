module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'wiedergabe', 'aktuell'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        
        
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aktuell keine Wiedergabe !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.delete();
        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'bereit!' },
                fields: [
                    { name: 'YT-channel', value: track.author, inline: true },
                    { name: 'Hinzugefügt von', value: track.requestedBy.username, inline: true },
                    { name: 'Lautstärke (%)', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Wiederholung', value: client.player.getQueue(message).repeatMode ? 'Ja' : 'Nein', inline: true },
                    { name: 'Pausiert', value: client.player.getQueue(message).paused ? 'Ja' : 'nein', inline: true },
                    { name: 'Wiedergabestand', value: client.player.createProgressBar(message, { timecodes: true }), inline: false }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
