// Jobs Routes Module
var express = require('express');
var router = express.Router();
var React = require('react/addons');

var ReactApp = React.createFactory(require('../components/ReactJobs').ReactJobs);

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

// Define jobs route:
router.get('/', function(req, res) {
  var reactHtml = React.renderToString(ReactApp({}));
  // Output html rendered by react
  res.render('index.ejs' ,{reactOutput: reactHtml});
})
router.get('/add', function(req, res) {
  res.send('Add a new job');
})
module.exports = router;
