module.exports = {
    name: 'volume',
    aliases: ['Lautstärke'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
      
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht in einen VC !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im selben VC !`);
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aktuell keine Wiederhane !`);
        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Bitte eine Nummer angeben !`);
        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - bitte eine gültige Nummer angeben ( 1%-100%) !`);

        console.log(`${new Date }---volume changed:---${message.member}`);
        client.player.setVolume(message, parseInt(args[0]));
        message.delete();

        message.channel.send({
            embed: {
                color: 'GREEN',
                author: { name: "Lautstärke" },
                footer: { text: 'Bereit!' },
                fields: [
                    { name: 'VC:', value:message.member.voice.channel.name, inline: true },
                    {name: "Geändert von",value: message.member  },
                    {name: "Geändert zu (%):", value:args.join(" ") },
                    {name: "ping", value: client.ws.ping},
                ],
                timestamp: new Date(),
            },
        });
    }};
