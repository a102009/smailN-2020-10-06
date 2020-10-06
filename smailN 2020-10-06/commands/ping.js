const { prefix } = require("../config.json");

module.exports = {
	name: 'ping',
	description: 'ping',
	execute(msg, client, args) {
		msg.channel.send('Pong!').then(m => {
        	var ping = m.createdTimestamp - msg.createdTimestamp;
        m.edit('Pong!, ' + ping + 'ms');
    });
	},
};