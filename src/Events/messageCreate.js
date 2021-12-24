/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", async (client, message) => {
	if (message.author.bot) return;

	if (message.content.startsWith(client.prefix)) {

        const args = message.content.substring(client.prefix.length).split(/ +/);
        const command = client.commands.find(cmd => cmd.name == args[0]);

        if (!command) return message.reply(`${args[0]} is not a valid command!`);

        command.run(message, args, client);

    } else if (message.channel.isThread()) { //Fight

        let player = message.author.username
        let players = message.channel.name.split(' -vs- ')

    
        if(player != players[0] || player != players[1]) await message.delete()
    
        //Fight actions

    }
});
