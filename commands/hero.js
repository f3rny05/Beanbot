module.exports = {
    name: 'hero',
    aliases: ['god'],
    permissions: ["SEND_MESSAGES"],
    description: "I AM GOD!",
    execute(client, message, args){

        let options = [
            'YOU PEOPLE, should be thanking Christ that I am who and what I am, because you need me. You need me to save you. You do. I am the only one who possibly can. You’re not the real heroes. I’m the real hero.',
            'I don’t make mistakes. I’m not “just like the rest of you.” I’m stronger. I’m smarter. I’m better.',
            'I’m done. I am done apologizing. I am done being persecuted for my strength.',
        ]
        let rand = options[Math.floor(Math.random() * options.length)]
        message.channel.send(rand);
    }

}