/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", async (client, message) => {
	if (message.author.bot) return;

	if (message.content.startsWith(client.prefix)) {

        const args = message.content.substring(client.prefix.length).split(/ +/);
        const command = client.commands.find(cmd => cmd.name == args[0]);

        if (!command) return message.reply(`${args[0]} is not a valid command!`);

        command.run(message, args, client);

    } else if (message.channel.isThread()) { //For a fight

        let player = message.author.username
        let players = message.channel.name.split(' -vs- ')

        //checks if they are a player. If the game uses emoji reactions you could have a similar
        //thing for that event
        if(player != players[0] || player != players[1]) await message.delete()
    
        //Fight actions

    }


	/*
	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name === args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
	*/
});
