module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Keine Ergebnisse zu ${query} gefunden!`);
};