
var express = require('express');
var app = express();
var morgan = require('morgan');
var chalk = require('chalk');

// This app entity will unveil the true power of Express. app has
// many methods available to configure your application and 
// define its behavior — that is, how it responds to requests.

// LOGGER 
app.use('/:route', function(req, res, next){
	// this works like Morgan, and will log "GET / [route]"
	// when you go to localhost:8080/route
	// note req.method is the type of CRUD request
	console.log(req.method, "/", req.params.route);
})

app.get('/', function(req, res){
	res.send("Hello World!");
})

app.get('/news', function(req, res){
	console.log(chalk.red("Paris is Burning"))
	res.send("Paris is Burning");
})


// app.use('/', morgan);















app.listen(8080, function(){
	console.log(chalk.blue('Express server listening on port 8080'))
});