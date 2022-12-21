module.exports = {
    name: 'punda',
    aliases: ['annoying'],
    permissions: ["SEND_MESSAGES"],
    description: "random annoying",
    execute(client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('How annoying is Punda')
        .setURL('')
        .setDescription(`On a scale of 1-10, Punda is ${Math.floor(Math.random() * 10) + 1}/10 annoying today!`)
        .setImage('https://cdn.discordapp.com/attachments/780321269500739676/1005380632119103540/anya-anya-forger.gif')

        message.channel.send(newEmbed);
    
    }
    }
