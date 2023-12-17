module.exports = (client, message, query, tracks) => {
    console.log(`${new Date }---Suchergebnisse:${message.member} `)
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Deine Suchergebnisse! ${query}` },
            footer: { text: 'bereit!' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};