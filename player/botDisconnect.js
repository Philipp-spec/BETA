module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: "Getrennt" },
            footer: { text: 'Bereit!' },
            fields: [
                { name: 'VC:', value:message.member.voice.channel.name, inline: true },
                {name: "ping", value: client.ws.ping},
                {name: `Grund:` , value: "Bot wurde vom VC gekickt"}
            ],
            timestamp: new Date(),
        },
    });

};
