var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.use(express.static(__dirname+'/../public/client'));

app.use('/api', router);
require('./router.js')(router);

app.set('port', (process.env.PORT || 8000) );

module.exports = app;