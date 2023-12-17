module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} Wurde hinzugefügt (**${playlist.tracks.length}** songs) !`);
};