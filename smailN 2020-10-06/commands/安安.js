const { prefix } = require("../config.json");

module.exports = {
	name: '安安',
	description: '安安',
	execute(msg, client, args) {
		msg.channel.send("安安");
	},
};