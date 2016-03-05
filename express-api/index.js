var initializeFW = require("./init")
//import the config
var config = require("./config")
var fs = require("fs")

//read the collections
fs.readdir("./collections",(err,files) => {
	var collections = []
	files.map((file) => {
		collections.push(require("./collections/" + file))
	})

	//innit the framework
	initializeFW(collections,config,function(app){
		console.log("innitialized app");
		console.log("detecting routes");
		//snoop through all the files inside routes folder and get the [app.gets] to complete the routing
		fs.readdir("./routes",(err,files) => {
			files.map((file) => require("./routes/" + file)(app,app.locals.collections))
		})
		console.log("starting listener");
		app.listen(config.port(),function(){
			console.log("server started successfully")
		})

	})
})