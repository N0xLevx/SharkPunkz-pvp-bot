/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "fight",
	description: "Starts a Battle",
	async run(message, args, client) {
        /*
        let p1, p2ID, p2
        if (msg.mentions.members.size == 1) {
            p1 = msg.author.username;
            p2ID = [...msg.mentions.users][0][0].toString();
            p2 = client.users.cache.get(p2ID).username;

            message.channel.threads.create({
                name : `${p1} -vs- ${p2}`,
                autoArchiveDuration: 60
            })
        }
        */

		client.on('messageCreate', async msg => {
            let p1, p2ID, p2
            if (msg.mentions.members.size == 1) {
                p1 = msg.author.username;
                p2ID = [...msg.mentions.users][0][0].toString();
                p2 = client.users.cache.get(p2ID).username;
                
                await msg.channel.threads.create({
                    name : `${p1} -vs- ${p2}`,
                    autoArchiveDuration: 60
                })
            }   
        })
	}
});
