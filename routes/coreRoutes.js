var React = require('react/addons');
var jobs = require('../routes/jobs');
var api = require('../routes/api');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
	    // Output html rendered by react
	    res.render('index.ejs' 
	    	//,{reactOutput: "Hello World"}
	    	,{reactOutput: reactHtml}
	    	);
	});
	app.use('/jobs', jobs);
	app.use('/api', api);
};