// API Routes Module
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

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

// GET Request
router.get('/jobs', function(req, res){
  Jobs.find(function(err, docs) {
  	docs.forEach(function(item){
  		console.log('Received a GET request for _id ' + item._id + ' job: ' + item.job);
  	});
  	res.send(docs);
  })
})

// POST Request
.post('/jobs', function(req, res){
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
});

module.exports = router;
