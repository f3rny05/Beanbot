module.exports = {
    name: 'minion',
    aliases: ['yeat'],
    permissions: ["SEND_MESSAGES"],
    description: "random valo minion",
    execute(client, message, args, Discord) {

        let options = [
            'https://cdn.discordapp.com/attachments/780321269500739676/1000190078825533480/unknown.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000197014082031696/minion1.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000197031131885718/minion2.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000197047162515496/minion3.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210363427606588/minion6.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210426165989494/minion11.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210463298171012/minion10.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210504565927946/minion9.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210555786768455/minion8.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210595431338064/minion7.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210635570815026/minions4.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000210659599978537/minions5.png',
        ]

        let randMinion = options[Math.floor(Math.random() * options.length)]

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Minion')
        .setURL('')
        .setDescription('Here is your agent/minion!')
        .setImage(randMinion)

        message.channel.send(newEmbed);
    
    }

    }