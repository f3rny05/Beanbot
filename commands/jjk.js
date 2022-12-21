module.exports = {
    name: 'jjk',
    aliases: ['jujutsu', 'jujutsu kaisen'],
    permissions: ["SEND_MESSAGES"],
    description: "random jjk character",
    execute(client, message, args, Discord) {

        let options = [
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635541139759244/Aoi_Todo_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635581136633856/Hanami_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635651219279943/Jogo_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635651697414144/Kasumi_Miwa_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635652070719548/Kento_Nanami_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635693036486756/Mahito_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635693413961768/Mai_Zen27in_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635693753704518/Maki_Zen27in_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635745356230656/Nobara_Kugisaki_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635746161541150/Panda_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635784635879424/Megumi_Fushiguro_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635818274213948/Momo_Nishimiya_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635845520404571/Satoru_Gojo_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635874716958780/Suguru_Geto_28Prequel_Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635874985386054/Sukuna_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635875253833748/Toge_Inumaki_28Anime_229.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635900235104266/Yutaprequel2.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635900579033218/yuuji-itadori-from-sorcery-fight.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1000635745779843143/Noritoshi_Kamo_28Anime29.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1025987671677472798/toji_fushiguro.png',
            'https://cdn.discordapp.com/attachments/780321269500739676/1025988738318340136/rika.png',
        ]

        let randJJK = options[Math.floor(Math.random() * options.length)]

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('JJK Characters')
        .setURL('')
        .setDescription('Honestly, you remind me of this character')
        .setImage(randJJK)

        message.channel.send(newEmbed);
    
    }
    }
