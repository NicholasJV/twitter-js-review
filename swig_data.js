// module.exports = data
var swig = require('swig')

var data = {
	title: 'An Example',
	people: [{
		name: 'Gandalf'
	}, {
		name: 'Frodo'
	},{
		name: 'Hermione'
	}]
}

swig.renderFile(__dirname + '/views/index.html', data, function ( err, output ) {
	console.log(output)
})