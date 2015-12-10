// app.js

// BASE SETUP
// =======================================================================
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
// configure the app to use body-parser
// this will let us to get data from the POST request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', function(req,res){
// 	res.send('test')
// });
app.use(express.static('build/tmp'));
app.use('/build/tmp', express.static('build/tmp'));

app.listen(port);
console.log('Server listens the port ' + port);