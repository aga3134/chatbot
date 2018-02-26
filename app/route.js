var DB = require("./db");
var RouteLineBot = require("./route_linebot");
var version = "1.0.0";

module.exports = function(app){
	DB.Init();

	RouteLineBot(app, version);

	app.get("/", function(req, res){
		res.render("static/index.ejs", {version: version});
	});

}