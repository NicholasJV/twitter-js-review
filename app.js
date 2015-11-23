
var fs = require('fs')
var express = require('express');
var app = express();
var path = require('path');

var morgan = require('morgan');
var chalk = require('chalk');

var swig = require('swig')
var routes = require('./routes');
var mime = require('mime')

// swig setup:
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({ cache: false});

app.use('/', morgan('tiny'));

// just a lesson on what express.static basically does:
app.use(function (req, res, next){
	console.log('req.path:', req.path);
	var mimeType = mime.lookup(req.path);
	fs.readFile(__dirname + '/public' + req.path, function(err, fileBuffer){
		if (err) return next();
		res.header('Content-Type', mimeType)
		res.send(fileBuffer);
	})
})
// so, the above is same as:
// app.use(express.static(path.join(__dirname + '/public')))

app.use('/', routes);





app.listen(8080, function(){
	console.log(chalk.magenta('Express server listening on port 8080'))
});





// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// app.get('/stylesheets/style.css', function (req, res, next){
// 	res.sendFile(__dirname + "/public/stylesheets/style.css")
// })

// var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.get('/news', function(req, res){
// 	console.log(chalk.red("Paris is Burning"))
// 	res.send("Paris is Burning");
// })


// // LOGGER 
// app.use('/:route', function(req, res, next){
// 	// this works like Morgan, and will log "GET / [route]"
// 	// when you go to localhost:8080/route
// 	// note req.method is the type of CRUD request
// 	console.log(req.method, "/", req.params.route);
// 	// res.status(200).send("Hello " + req.params.route + "!")
// })


// app.get('/', function(req, res){
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })


