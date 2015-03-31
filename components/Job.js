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
                <h4>{this.props.title}</h4>    
              </div>
              <div >
              <p>Link: <a href="" target="_blank">Click to see more</a></p>
              <p>Company: {this.props.company}</p>
                {this.props.description}
              </div>   
            </div>
          </div>
        </div>
      </div>      
      )
  }
});
module.exports.Job = Job;