module.exports = {
    name: 'clear-queue',
    aliases: ['cq' ,'Wiedergabeliste-leeren','reset','löschen'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {

        
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht in einen VC !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht im selben VC !`);
        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aktuell keine Wiedergabe !`);
        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Nur ein Lied in der Liste!`);
        client.player.clearQueue(message);
        message.channel.send(`${client.emotes.success} - Die Wiedergabeliste wurde  **geleert** !`);
    },
};
