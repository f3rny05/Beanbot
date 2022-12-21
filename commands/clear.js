module.exports = {
    name: 'clear',
    aliases: ['delete', 'cl'],
    permissions:["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "Clear messages!",
    async execute(client, message, args) {

        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a number");

        if(args[0] > 100) return message.reply("You cannot delete more than messages!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);

        
        });
 
    }
}