module.exports = {
    name: 'tiktok',
    aliases: ['tk'],
    permissions: ["SEND_MESSAGES"],
    description: "sends the tiktok link command!",
    execute(client, message, args){
        message.channel.send('https://www.tiktok.com/@lanabean_');
    }

}