/** @jsx React.DOM */
var React = require('react/addons');

var ReactJobs = React.createClass({
      componentDidMount: function () {
        //console.log(fakeData);
      },
      render: function () {
        return (
          <p>Job listing in React</p>
        )
      }
  });
/* Module.exports instead of normal dom mounting */
module.exports.ReactJobs = ReactJobs;