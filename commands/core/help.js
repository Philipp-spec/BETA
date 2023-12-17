module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <Kommando>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Kommandos' },
                    footer: { text: 'Bereit!' },
                    fields: [
                        { name: 'Infos', value: infos },
                        { name: 'Musik', value: music },
                        { name: 'Musik Filter', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Command-Panel`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Nicht gefunden!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Kommando-Panel' },
                    footer: { text: 'Bereit!' },
                    fields: [
                        { name: 'Bezeichnung', value: command.name, inline: true },
                        { name: '', value: command.category, inline: true },
                        { name: 'Alias(es)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Verwendung', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Informationen zu den einzelnen Befehlen',
                }
            });
        };
    },
};
