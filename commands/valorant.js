module.exports = {
    name: 'valorant',
    aliases: ['valo'],
    permissions: ["SEND_MESSAGES"],
    description: "random valo char",
    execute(client, message, args, Discord) {

        let options = [
            'https://cdn.discordapp.com/attachments/780321269500739676/1008877767485562910/Fade_Key_Art_587x900_for_Website.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008877807725723708/KAYO_KeyArt_587x900.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008877885207085138/Neon_KeyArt-Web.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878026852933682/V_AGENTS_587x900_ALL_Raze_2.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878027263983696/V_AGENTS_587x900_ALL_Skye.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878027666636912/V_AGENTS_587x900_ALL_Sova_2.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878028136403004/V_AGENTS_587x900_Astra.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878028698427422/V_AGENTS_587x900_Breach.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878029134643320/V_AGENTS_587x900_Jett.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878029507928198/V_AGENTS_587x900_KillJoy_.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878029851852971/V_AGENTS_587x900_Omen.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878030321631353/V_AGENTS_587x900_Phx.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878030841716806/V_AGENTS_587x900_Reyna.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878076534468608/V_AGENTS_587x900_Brimstone.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878076916154438/V_AGENTS_587x900_Cypher.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878077310423190/V_AGENTS_587x900_sage.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878077734031472/V_AGENTS_587x900_Viper.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878106494369792/WebUpdate_Chamber_KeyArt.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1008878127646253116/V_AGENTS_587x900_yoru.png',
        ]

        let randValo = options[Math.floor(Math.random() * options.length)]

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Valorant Agent')
        .setURL('')
        .setDescription('Here is your agent!')
        .setImage(randValo)

        message.channel.send(newEmbed);
    
    }

    }