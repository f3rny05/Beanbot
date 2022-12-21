module.exports = {
    name: 'crispydunks',
    aliases: ['crispy'],
    permissions: ["SEND_MESSAGES"],
    description: "random dunky",
    execute(client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('How pogalicious is Cripsydunks')
        .setURL('')
        .setDescription(`On a scale of 1-10, Crispydunks is ${Math.floor(Math.random() * 10) + 1}/10 pogalicious today!`)
        .setImage('https://cdn.discordapp.com/attachments/780321269500739676/1017333844610908170/skill-issue-multiversus.gif')

        message.channel.send(newEmbed);
    
    }
    }
