module.exports = {
    name: 'stop',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        
       
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -Aktuell keine Wiedergabe !`);

        console.log(`${new Date }---stop playing requested by :---${message.member}---clear cache......`);
        client.player.setRepeatMode(message, false);
        client.player.stop(message);
        message.delete();

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: "Stop" },
                footer: { text: 'Bereit!' },
                fields: [
                    { name: 'Verbindung getrennt:', value:message.member.voice.channel.name, inline: true },
                    {name: "Getrennt von:",value: message.member  },
                ],
                timestamp: new Date(),
            },
        });
    }};
