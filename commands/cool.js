module.exports = {
    name: 'fernycool',
    aliases: [''],
    permissions: ["SEND_MESSAGES"],
    description: "random weirdge",
    execute(client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('How cool is Ferny')
        .setURL('')
        .setDescription(`On a scale of 1-10, Ferny is ${Math.floor(Math.random() * 10) + 1}/10 cool today!`)
        .setImage('https://cdn.discordapp.com/attachments/780321269500739676/1008168984312565760/valorant-cypher-valorant.gif')

        message.channel.send(newEmbed);
    
    }
    }
