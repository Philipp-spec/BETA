module.exports = {
    name: 'credit',
    aliases: [`credits`],
    category: 'Infos',
    utilisation: '{prefix}credit',

    execute(client, message) {
       
      
    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: "GitHub" },
            fields: [
                {name: 'Link:' , value: "https://github.com/Philipp-spec/BETA"}
            ]
        },
    })}}
