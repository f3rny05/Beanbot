module.exports = {
    name: 'twitch',
    aliases: ['tch'],
    permissions: ["SEND_MESSAGES"],
    description: "sends the twitch link command!",
    execute(client, message, args){
        message.channel.send('https://www.twitch.tv/lanabean_');
    }

}