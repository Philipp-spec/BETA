module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Aktuell ist keine Wiedergabe aktiv! !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Du bist mit keinen VC verbunden !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ich habe keine Berechtigung beizutreten!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Etwas ist schiefgelaufen:(  ${error}`);
    };
};
