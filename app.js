var express = require('express');

var app = express();
// Make sure to include the JSX transpiler for React.js
require("node-jsx").install();

// Setup body parser:
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
	extended: true
}));

// Setup public directory and ejs templating.
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./routes/coreRoutes.js')(app);

// Serve page on this port:
var port = process.env.PORT || 3000;
app.listen(port);
console.log('App serving on port ' + port);