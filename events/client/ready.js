module.exports = (client, Discord, message) => {
    console.log('BEANBOT IS ONLINE')
    
        client.user.setActivity('beans :)', {type: 'WATCHING'}).catch(console.error);
    
        client.on('messageDelete', message => {
        if(!message.partial) {
            const channel = client.channels.cache.get('1001026834009440306');
            if(channel) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Deleted Message')
                .addField('Author', `${message.author.tag} (${message.author.id})`)
                .addField('Channel', `${message.channel.name} (${message.channel.id})`)
                .setDescription(message.content)
                .setTimestamp();
                channel.send(embed);
                if(message.attachments.array().length > 0) {
                    const result = message.attachments.array()
                    embed.setImage(result[0].proxyURL)
                    channel.send(embed);
                }
            }
        }

    });
}