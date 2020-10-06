const { prefix } = require("../config.json");

module.exports = {
	name: 'hello',
	aliases: ["安安",],
	description: 'n',
	execute(msg, client, args) {
		msg.channel.send("安安")
		msg.channel.send("~~~")
	},
};