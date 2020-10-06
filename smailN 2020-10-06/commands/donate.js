const { prefix } = require("../config.json");

module.exports = {
	name: 'donate',
	aliases: ["贊助",],
	description: 'donate',
	execute(msg, client, args) {
		const send = {
			color: 0xFF0000,
			title: `贊助小N`,
			description: 'https://payment.ecpay.com.tw/Broadcaster/Donate/9B054FBC4A03403D5489B8F13F46F887',
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