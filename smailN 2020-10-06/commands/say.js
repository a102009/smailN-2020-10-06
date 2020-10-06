const { prefix } = require("../config.json");

module.exports = {
	name: 'say',
	description: 'say with bot',
	execute(msg, args) {
		let saymessage = args[0];

		if (msg.member.hasPermission('ADMINISTRATOR')) {
			msg.delete();
			msg.channel.send(saymessage);
		};
	},
};