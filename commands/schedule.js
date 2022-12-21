module.exports = {
    name: 'schedule',
    aliases: ['sch'],
    permissions: ["SEND_MESSAGES"],
    description: "schedule messages",
    execute(client, message, args, Discord) {

        const commands = [
            new SlashCommandBuilder()
            .setName('schedule')
            .setDescription('Schedules a message')
            .addStringOption((option) =>
            option
            .setName('message')
            .setDescription('The message to be scheduled')
            .setMinLength(10)
            .setMaxLength(2000)
            .setRequired(true)
            )
            .toJSON(),
            ];
    }
    }
