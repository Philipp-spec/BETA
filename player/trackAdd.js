module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: "Hinzugefügt" },
            footer: { text: 'Bereit!' },
            fields: [
               {name: `**SONG**`, value: track.title }
            ],
            timestamp: new Date(),
        },
    });
    console.log(`${new Date }---Hinzugefügt:---${track.title}---${track.requestedBy.username}`);
};
