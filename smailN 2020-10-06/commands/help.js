const { prefix } = require("../config.json");

module.exports = {
	name: 'help',
	aliases: ["h"],
	aliases: ["sos"],
	description: 'help for all commands',
	execute(msg, args) {
		const send = {
			color: 0xFF0000,
			title: `指令查詢`,
			fields: [
				{
					name: `目前prefix: ${prefix}`,
					value: `\u200b`,
				},
				{
					name: '!help',
					value: '指令查詢',
					inline: true,
				},
				{
					name: '!ping',
					value: '延遲查詢',
					inline: true,
				},
				{
					name: '!youtube(!yt)',
					value: 'YT頻道連結',
					inline: true,
				},
				{
					name: '!粉絲專頁(!fb, !facebook)',
					value: '粉絲專頁連結',
					inline: true,
				},
				{
					name: '!贊助(!donate)',
					value: '贊助小N',
					inline: true,
				},
				{
					name: '!n',
					value: '小N的資料',
					inline: true,
				},
				{
					name: '!我的資料',
					value: '顯示我的作者等等',
					inline: true,
				},
			],
			timestamp: new Date(),
			footer: {
				text: 'Bot Made By X̷͑̔i҈͊̿̆ń̶̅g̸͋̄Y҉̈͑̏a҉̐́̌n̶͑̂#7237',
				icon_url: 'https://cdn.discordapp.com/avatars/254856124820488192/c461be67ce2b664e7039fa3c4fc0c854.png?size=128',
			},
		};

		msg.channel.send({ embed: send });
	},
};