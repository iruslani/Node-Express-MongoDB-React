/** @jsx React.DOM */
var React = require('react/addons');
var JobsList =  React.createFactory(require('./JobsList').JobsList);
var fakeData = require('../data/fakeData.js').fakeData;

var ReactJobs = React.createClass({
	  getInitialState: function() {
	    data = {
	    	"job": "Engineer",
	    	"description" : "Testing"
	    }
	    return data;
	  },
      componentDidMount: function () {
      	console.log(fakeData);
      },
      render: function () {
        return (
        	<div>
          <p data={fakeData}>Job listing in React</p>
          <JobsList  test={fakeData}/>
          	</div>
          )
      }
  });
/* Module.exports instead of normal dom mounting */
module.exports.ReactJobs = ReactJobs;