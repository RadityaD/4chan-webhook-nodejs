var express = require('express');
var cors = require('cors');
var fetch = require('node-fetch');
var request = require('request');
var app = express();

app.use(cors());

app.get('/boards', function(req, res){
	var url = 'https://a.4cdn.org/boards.json';
	req.pipe(request(url)).pipe(res);
});

app.get('/threads/:board', function(req, res){
	var url = 'https://a.4cdn.org/'+ req.params.board +'/threads.json';
	req.pipe(request(url)).pipe(res);
});

app.get('/thread/:id', function(req, res){
	var url = ''
});

app.listen(3001, () => console.log('Its Running'));