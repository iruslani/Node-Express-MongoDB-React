/** @jsx React.DOM */
var React = require('react/addons');
var ReactButton =  React.createFactory(require('./ReactButton').ReactButton);
/* create factory with griddle component */
//var Griddle = React.createFactory(require('griddle-react'));
//var fakeData = require('../data/fakeData.js').fakeData;
//var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 100;

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