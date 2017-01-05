var express = require('express');
var app = express();
var neo4j = require('neo4j-driver').v1;
var config = require('./config');
var setupController = require('./controllers/setup.controller');
var apiController = require('./controllers/api.controller');



var port = process.env.PORT || 3000;
console.log(__dirname + '../client');
app.use('/', express.static(__dirname + '/../client'));

app.set('view engine', 'ejs');


setupController(app);
apiController(app);

app.listen(port);