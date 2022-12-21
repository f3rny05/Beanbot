module.exports = {
    name: 'lana',
    aliases: ['bean'],
    permissions: ["SEND_MESSAGES"],
    description: "random annoying",
    execute(client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('How quirky is Lana')
        .setURL('')
        .setDescription(`On a scale of 1-10, Lana is ${Math.floor(Math.random() * 10) + 1}/10 quirky today!`)
        .setImage('https://cdn.discordapp.com/attachments/780321269500739676/1005701589870321664/gojo.gif')

        message.channel.send(newEmbed);
    
    }
    }
