// Jobs Module
var express = require('express');
var router = express.Router();
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
var jobsInit = new Jobs({
	job: 'Full-Stack Web Developer',
	Description: 'Need a developer to create app using restfull API',
	Company: 'MassDrop'
});
jobsInit.save();


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// define the home page route
router.get('/', function(req, res) {
  res.send('job Listings');
})
// define the about route
router.get('/add', function(req, res) {
  res.send('Add a new job');
})

module.exports = router;
