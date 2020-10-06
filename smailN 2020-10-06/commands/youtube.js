const { prefix } = require("../config.json");

module.exports = {
	name: 'youtube',
	aliases: ["yt"],
	description: 'youtube',
	execute(msg, client, args) {
		const send = {
			color: 0xFF0000,
			title: `小N YT頻道`,
			description: 'https://www.youtube.com/channel/UC-HfdvueCHBZ2yUhodirqmA',
			thumbnail: {
				url: 'https://yt3.ggpht.com/a/AATXAJyM9NR0VFW04aF7f8TAiv-YbGvEOfyzc2cpXcKqiw=s100-c-k-c0xffffffff-no-rj-mo',
			},
			timestamp: new Date(),
			footer: {
				text: 'Bot Made By X̷͑̔i҈͊̿̆ń̶̅g̸͋̄Y҉̈͑̏a҉̐́̌n̶͑̂#7237',
				icon_url: 'https://cdn.discordapp.com/avatars/254856124820488192/c461be67ce2b664e7039fa3c4fc0c854.png?size=128',
			},
		};

		msg.channel.send({ embed: send });
	},
};