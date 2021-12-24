/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "fight",
	description: "Starts a Battle",
	async run(message, args, client) {
        let p1, p2, p2ID

        p1 = message.author.username;
        p2 = client.user.username;

        let thread = await message.channel.threads.create({
            name : `${p1} -vs- ${p2}`,
            autoArchiveDuration: 60
        })
        
        //put initial embedding here
        thread.send("Shark battle thread");
        }
});