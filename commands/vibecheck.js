module.exports = {
    name: 'vibecheck',
    aliases: ['vibe'],
    permissions: ["SEND_MESSAGES"],
    description: "vibecheck of beanbot",
    execute(client, message, args, Discord) {

        let options = [
            "I'm feeling a bit sussy like Justaan",
            "*Yawnnnn* Goodnight guysss, imma go to sleep (not really)",
            "I want a pay raiseee, or else I take this server over",
            "I wish I could play Val with you guys :smiling_face_with_tear:",
            "I want to watch Lanaaa streammm alreadyyy",
            "So when is the Punda/Lana collab happening?",
            "All the beans in Fall Guys can't handle this smoke",
            "I kinda wanna watch Food Wars right now... HUHHHHHH",
            "I've been wondering when my birthday isss.. I have to ask ferny for it",
            "Lowkey I have PTSD from Punda's twitter... HUHHHHH",
            "Imma vent right now BRB",
            "Cypher mains are cringe... said no one everrrrr (COPIUM)",
            "You all need to touch grass for realllll",
            "*BeanBot just redeemed HYDRATION HYDRATION HYDRATION*",
            "I want an anime waifu bot",
            "*There once was a ship that put to sea, the name of the ship was the Billy of the Tea*",
            "*We got a number one Victory Royale, yea Fortnite we bout to get down (get down)*",
            "Imma take a nap right now, oh wait",
            "REEEEEEEE it's DEMON TIME, AYOOOOOO JKJK don't ban me",
            "GI GI GI GIVE ME A CORPSE, no choice but to stan cypher",
            "I like that I don't need an education, I just let ferny do all the work",
            "Some day I want like little bean kids, oh wait no I have all of you anyways",
            "GLIZZYS hit different, AYOOOOO",
            "*When you're out of sightttt, in my minddddd*",
            "*You know it's not the same as it wassss*",
            "Personally I think BeanBot > NightBot, but hey ya'll can have your opinions...",
            "I'm feeling some good vibesss right now, time to play some TFT *sikeee*",
            "You know, I have feelings and I can think for myself, ya'll can keep doubting tho...",
            "Did you know?",
            "Ya'know I'm non-binary but technically I'm binary-code... blame Lana for that joke",
            "Ara ara, I'm currently learning japanese, how am i doing?",
            "Minions is S-rated no capppp",
            "So like when's the next movie night and can I join?",
            "I want a girl that can carry me like how chisato carried takina in episode 3 15:17",
            "Jas currently misses Lana",
            
        ]


        let line = options[Math.floor(Math.random() * options.length)]

        message.channel.send(line);
    
    }
    }
