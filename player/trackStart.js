module.exports = (client, message, track) => {
    const queue = client.player.getQueue(message);

    console.log(`${new Date }---playing:--- ${track.title}---${track.requestedBy.username}`);
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'Bereit!' },
            fields: [
                { name: 'YT-Channel', value: track.author, inline: true },
                { name: 'Hinzugefügt von', value: track.requestedBy.username, inline: true },
                { name: "Ping",value:client.ws.ping},
                {name: "Wiedergabeliste-Anzahl:" , value:queue.tracks.length },
                {name: "VC:", value:message.member.voice.channel.name},
                { name: 'Länge', value: client.player.createProgressBar(message, { timecodes: true }), }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};
