// API Routes Module
var express = require('express');
var router = express.Router();
var Jobs = require('../schema/jobs');


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

// GET Request
router.get('/jobs', function(req, res){
  Jobs.find(function(err, docs) {
  	docs.forEach(function(item){
  		console.log('Received a GET request for _id ' + item._id + ' job: ' + item.title);
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
})
.put('/jobs/edit/:job_id', function(req, res) {
    Jobs.findOne({_id: req.params.job_id}, function(err, jobs) {
		jobs.title = req.body.title;
		jobs.description = req.body.description;
		jobs.company = req.body.company;

        jobs.save(function(err) {
            if (err)
                res.send(err);
            res.send({message: "Job updated"});
        });

    });
})
.delete('/jobs/delete/:job_id', function (req, res) {
    Jobs.remove({_id: req.params.job_id}, function(err) {
        if (err)
            res.send(err);
        res.json({message: "Job Deleted!"});
    });
});

module.exports = router;
