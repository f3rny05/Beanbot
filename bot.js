const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILD_MESSAGES_REACTIONS FOR REACTION ROLES"] });
const mongoose = require('mongoose');
const { AutoPoster } = require('topgg-autoposter');
const poster = AutoPoster('topggtoken', client);
const fs = require('fs');

var http = require('http'); http.createServer(function (req, res) { res.write("I'm alive"); res.end(); }).listen(8080);

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Plebeans');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('971665848739713064').send(`Welcome to beancord <@${guildMember.user.id}>, newly fellow bean!`);


});


const DiscordButtons = require('discord-buttons', 'discord-button-pages');

DiscordButtons(client);

client.interaction = {};


client.login(process.env.TOKEN);