const { prefix } = require("../config.json");

module.exports = {
	name: 'n',
	aliases: ["N",],
	description: 'n',
	execute(msg, client, args) {
		msg.channel.send("哈囉我叫史邁恩(小N)，每周一三五禮拜日晚上6:30在Youtube遊戲頻道不定期更新！記得訂閱開小鈴鐺bell")
	},
};