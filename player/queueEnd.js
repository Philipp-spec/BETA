module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: "Getrennt" },
            footer: { text: 'Bereit' },
            fields: [
                { name: 'VC:', value:message.member.voice.channel.name, inline: true },
                {name : `Grund:`, value: "Wiedergabeliste hat ihr Ende erreicht!"},
                {name: "ping", value: client.ws.ping}
            ],
            timestamp: new Date(),
        },
    });

};
