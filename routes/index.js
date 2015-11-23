
var express = require('express');
var router = express.Router();

var tweetBank = require('../tweetBank');



router.get('/', function ( req, res, next ){
	var tweets = tweetBank.list();
	res.render( 'index', { title: 'Twitter.js', tweets: tweets })
	// you wanted to put next() here sometimes...
	// never put next after a response 
})


module.exports = router;