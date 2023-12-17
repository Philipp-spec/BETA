module.exports = {
    name: 'uptime',
    aliases: [`up`],
    category: 'Infos',
    utilisation: '{prefix}uptime',

    execute (client,message)  {
    const moment = require("moment"); require("moment-duration-format"); const duration = moment.duration(client.uptime).format(" D [Tage], H [Stunden], m [Minuten], s [Sekunden]");
    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: "Uptime" },
            fields: [
                {name: `Im Betrieb seit:`,  value: duration}
            ],
    }})}}
