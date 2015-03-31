/** @jsx React.DOM */
var React = require('react/addons');

var ReactApp = React.createClass({
      componentDidMount: function () {
        //console.log(fakeData);
      },
      render: function () {
        return (
          <p>Hello From React</p>
        )
      }
  });
/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;