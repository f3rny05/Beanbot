module.exports = {
    name: 'leave',
    aliases: ['stop', 'quit'],
    permissions: ["SEND_MESSAGES"],
    description: 'Bot leaves voice channel',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in voice channel to stop beanbot!");
        await voiceChannel.leave();
        await message.channel.send('Leaving channel, goodbye beans :smiling_face_with_tear:')

    }
}