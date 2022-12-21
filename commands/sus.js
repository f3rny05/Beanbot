module.exports = {
    name: 'sus',
    aliases: ['sussy'],
    permissions: ["SEND_MESSAGES"],
    description: "random sus value",
    execute(client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Sus rating')
        .setURL('')
        .setDescription(`You are ${Math.floor(Math.random() * 100) + 1}% sus...`)
        .setImage('https://cdn.discordapp.com/attachments/780321269500739676/1000622237340143756/among-us-sus.gif')

        message.channel.send(newEmbed);
    
    }
    }
