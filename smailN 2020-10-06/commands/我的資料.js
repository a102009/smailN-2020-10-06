const { prefix } = require("../config.json");

module.exports = {
	name: '我的資料',
	description: '我的資料',
	execute(msg, client, args) {
		const send = {
			color: 0xFF0000,
			title: `我的原作者是`,
			description: 'X̷͑̔i҈͊̿̆ń̶̅g̸͋̄Y҉̈͑̏a҉̐́̌n̶͑̂#7237',
			thumbnail: {
				url: '',
			},
			title: `指令修改`,
			description: '猴子#3807',
			thumbnail: {
				url: '',
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