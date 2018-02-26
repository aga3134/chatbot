var DB = require("./db");
var linebot = require('linebot');
var Config = require('../config');

module.exports = function(app,version){

	var bot = linebot({
		channelId: Config.lineAuth.channelId,
		channelSecret: Config.lineAuth.channelSecret,
		channelAccessToken: Config.lineAuth.channelAccessToken
	});

	app.post('/linebot', bot.parser());

	bot.on('message', function (event) {
		event.reply(event.message.text).then(function (data) {
			
		}).catch(function (error) {
			console.log(error);
		});
	});
}