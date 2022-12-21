const ButtonPages = require('discord-button-pages');

module.exports = {
    name: 'commands',
    aliases: ['help', 'com', 'cmd'],
    permissions: ["SEND_MESSAGES"],
    description: "Embeds",
    async execute(client, message, args, Discord) {
    
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Some commands')
        .setURL('')
        .setDescription('Here are like some commands')
        .addFields(
            {name: 'twitch link', value: '-twitch'},
            {name: 'tiktok link', value: '-tiktok'},
            {name: 'play music', value: '-play'},
            {name: 'leave channel', value: '-leave'}
        )
        .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/9b7b8a92-6cb4-469d-94d9-48fd3cf6e7c1-profile_image-70x70.png')
        .setFooter("Hi I'm mister beanbot look at me!");
    
    const embed = new Discord.MessageEmbed()
    .setColor('#384281')
    .setTitle('Some commands')
    .setURL('')
    .setDescription('Here are like some more commands')
    .addFields(
        {name: 'random minion', value: '-minion'},
        {name: 'random jjk character', value: '-jjk'},
        {name: 'sus levels', value: '-sus'},
        {name: 'clear messages', value: '-clear'}
    )
    .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/9b7b8a92-6cb4-469d-94d9-48fd3cf6e7c1-profile_image-70x70.png')
    .setFooter("Hi I'm mister beanbot look at me!");
    
    const embedPages = [newEmbed, embed]
    ButtonPages.createPages(Discord, message, embedPages, 20 * 1000, "blurple", "👉", "👈", "❌");
    }
};