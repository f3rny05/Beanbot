module.exports = {
    name: 'rat',
    aliases: ['cheese'],
    permissions: ["SEND_MESSAGES"],
    description: "random rat",
    execute(client, message, args, Discord) {

        let options = [
            'https://cdn.discordapp.com/attachments/965818284987535383/1012600029128704060/unknown.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015810199308734546/remy.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015810699932483655/rat-rattata.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015810700733591602/rat-vrchat.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015811504441937940/awkard-awful.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015811834479124510/roddy.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015812155444043816/tutter-bear-in-the-big-blue-house.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015812625315151942/mr_ratburn.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015813522766172170/cscVYjD.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015813597022146592/just-takin-it-easy.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015814256408674345/mstersplinter.gif',
            'https://cdn.discordapp.com/attachments/780321269500739676/1015814555701629028/disney-angry.gif',
            'https://cdn.discordapp.com/attachments/965818284987535383/1027123344958574673/ratwithfez.png',
        ]

        let randRat = options[Math.floor(Math.random() * options.length)]

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('RAT')
        .setURL('')
        .setDescription('This is your ratsona!')
        .setImage(randRat)

        message.channel.send(newEmbed);
    
    }

    }