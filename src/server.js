var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');
var request = require('request');
var app = express();

app.use(cors());

app.get('/boards', function(req, res){
	var url = 'http://a.4cdn.org/boards.json';
	req.pipe(request(url)).pipe(res);
});

app.listen(80, () => console.log('Its Running'));