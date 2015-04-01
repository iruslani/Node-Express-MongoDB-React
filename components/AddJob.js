/** @jsx React.DOM */
var express = require('express');
var React = require('react/addons');
var Jobs = require('../schema/jobs');


var AddJob = React.createClass({
      render: function () {
        return (
          <div>
            <p>Add a new Job:</p>
            <form>
            <div>
              <label>Job Name:</label>
              <input />   
              <br />  
              <label>Company Name:</label>
              <input />   
              <br />                       
              <label>Job Description</label>
              <textarea />
            </div>
            <button type="submit" >Submit </button>
            </form>
          </div>
          )
      }
  });
/* Module.exports instead of normal dom mounting */
module.exports.AddJob = AddJob;