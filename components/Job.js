/** @jsx React.DOM */
var React    = require('react/addons');

var Job = React.createClass({
  render: function(){
    return (
      <div className="product">
        <hr />
        <div >
          <div >
            <div >
              <div >
                <h4>Title: {this.props.name}</h4>    
              </div>
              <div >
              <p>Company: {this.props.company}</p>
                Description: {this.props.description}
              </div> 
              <p>Link: <a href={'api/jobs/delete/'+ this.props.id} target="_blank">Delete</a></p>  
            </div>
          </div>
        </div>
      </div>      
      )
  }
});
module.exports.Job = Job;