
var Sequelize = require('sequelize');
var Config = require('../config');

var db = {};

db.Init = function(){
	db.sequelize = new Sequelize(Config.mysqlAuth.dbName, Config.mysqlAuth.username, Config.mysqlAuth.password,
		{host: Config.mysqlAuth.host, port: Config.mysqlAuth.port, logging: false});

	//db.LineOneToOneChat = db.sequelize.import(__dirname + "./../db/lineOneToOneChat.js");
	//db.LineGroupChat = db.sequelize.import(__dirname + "./../db/lineGroupChat.js");

	var syncOp = {};
	syncOp.force = false;
    db.sequelize.sync(syncOp);
}

module.exports = db;
