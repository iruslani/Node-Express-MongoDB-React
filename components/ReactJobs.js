/** @jsx React.DOM */
var express = require('express');
var React = require('react/addons');
var JobsList =  React.createFactory(require('./JobsList').JobsList);
var fakeData = require('../data/fakeData.js').fakeData;
var Jobs = require('../schema/jobs');
var alldocs = [];


//console.log("Jobs schema in react component:");
//console.log(Jobs);

function getData() {
    Jobs.find(function(err, docs) {
    docs.forEach(function(item){
      console.log('Received a GET request for _id ' + item._id + ' job: ' + item.title);
    });
    console.log('items getData:');
    console.log(docs);
    alldocs = docs;
    return alldocs;

  })
}

Jobs.find(function(err, docs) {
  docs.forEach(function(item){
    console.log('Received a GET request for _id ' + item._id + ' job: ' + item.title);
  });
  console.log('items:');
  console.log(docs);
  alldocs = docs;
})


var ReactJobs = React.createClass({
    loadJobs: function() {
      Jobs.find(function(err, docs) {
        docs.forEach(function(item){
          console.log('Received a GET request for _id ' + item._id + ' job: ' + item.title);
        });
        console.log('items loadJobs:');
        console.log(docs);
        alldocs = docs;
        //this.setState({test: alldocs});
        //return alldocs;

      })
    },
	  getInitialState: function() {
      data = {
        "job": "Engineer",
        "description" : "Testing"
      }
      return data;

/*	    return (
        Jobs.find(function(err, docs) {
          docs.forEach(function(item){
            console.log('Received a GET request for _id ' + item._id + ' job: ' + item.title);
          });
        console.log('item');
        console.log(docs);
        return alldocs;
      })
    )*/
	    
	  },
    componentDidMount: function() {
      $.get('http://localhost:3000/api/jobs', function(result) {
        //var lastGist = result[0];
        console.log('result from ajax:');
        console.log(result);
        if (this.isMounted()) {
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }
      }.bind(this));
    },    
    componentWillMount: function () {
      //console.log('componentWillMount');
      //console.log(alldocs);
      //getData();
      this.loadJobs();

    },
    componentDidMount: function () {
      console.log('docs');
    	console.log(docs);
    },
    render: function () {
      return (
      	<div>
        <p>Job listing in React  {data}</p>
        <JobsList  test={alldocs}/>
        	</div>
        )
    }
  });
/* Module.exports instead of normal dom mounting */
module.exports.ReactJobs = ReactJobs;