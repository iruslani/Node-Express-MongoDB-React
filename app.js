var express = require('express');
var jobs = require('./routes/jobs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var router = express.Router();

var app = express();

// Setup body parser:
app.use(bodyParser.urlencoded({
	extended: true
}));

// Connect to DB:
mongoose.connect('mongodb://localhost/jobs2');

// Build schema:
var Schema = mongoose.Schema;
var JobSchema = new Schema({
	title: String,
	description: String,
	company: String
});

var Jobs = mongoose.model('Jobs', JobSchema);

// Add initial data:
/*var jobsInit = new Jobs({
	job: 'Full-Stack Web Developer',
	description: 'Need a developer to create app using restfull API',
	company: 'MassDrop'
});
jobsInit.save();*/



// Respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api/jobs', function(req, res){
  Jobs.find(function(err, docs) {
  	docs.forEach(function(item){
  		console.log('Received a GET request for _id ' + item._id + ' job: ' + item.job);
  	});
  	res.send(docs);
  })
});

app.post('/api/jobs', function(req, res){
	console.log('Receive a POST request');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);		
	};
	var jobs = new Jobs();
	jobs.title = req.body.title;
	jobs.description = req.body.description;
	jobs.company = req.body.company;
	console.log('jobs:');
	console.log(jobs);

	jobs.save(function(err, doc){
		if (err) res.send(err);
		res.send({message: "Job created"});
	});
})


// Use routes:
app.use('/jobs', jobs);


app.listen(port);
console.log('App serving on port' + port);