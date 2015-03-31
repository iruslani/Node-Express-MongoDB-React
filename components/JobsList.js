/** @jsx React.DOM */
var React    = require('react/addons');
var Job =  React.createFactory(require('./Job').Job);

var JobsList = React.createClass({
  render: function() {
      var jobNodes = this.props.test.map(function (job) {
      return (
        <Job
          name={job.title}
          id={job.id}
          description={job.description} 
          company={job.company}/>
      );
    });	
    return (
      <div>
        {jobNodes}
        Raw Data: {this.props.test}
      </div>
    );
  }
});

module.exports.JobsList = JobsList;