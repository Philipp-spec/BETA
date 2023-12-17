const { VoiceBroadcast } = require("discord.js");

module.exports = (client, message, ) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: "Getrennt" },
            footer: { text: 'Bereit!' },
            fields: [
                {name: "ping", value: client.ws.ping},
                {name: `Grund` , value: "VC ist leer!"}
            ],
            timestamp: new Date(),
        },
    });

};

