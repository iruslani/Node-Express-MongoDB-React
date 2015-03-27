var express = require('express');
var jobs = require('./routes/jobs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobs');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
	job: String,
	Description: String,
	Company: String
});

mongoose.model('Jobs', JobSchema);

var Jobs = mongoose.model('Jobs');

// Add initial data to the 
/*var jobsInit = new Jobs({
	job: 'Full-Stack Web Developer',
	Description: 'Need a developer to create app using restfull API',
	Company: 'MassDrop'
});
jobsInit.save();*/

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world')
})

app.get('/api/jobs', function(req, res){
  Jobs.find(function(err, docs) {
  	docs.forEach(function(item){
  		console.log('Received a GET request for _id ' + item._id + ' job: ' + item.job);
  	});
  	res.send(docs);
  })
})

app.post('api/jobs', function(req, res){
	console.log('Receive a POST request');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);		
	};
	var jobs = new Jobs(req.body);
	jobs.save(function(err, doc){
		res.send(doc);
	});
})

// Use routes
app.use('/jobs', jobs);
// Setup body parser
app.use(bodyParser.json());


var port = 3000;
app.listen(port);
console.log('App serving on port' + port);