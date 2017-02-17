var React = require('react')
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  updateState: function (update) {
    this.setState({
      name: update.name ? update.name : this.state.name,
      message: update.message ? update.message : this.state.message
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm handleSubmit={this.updateState}/>
      </div>
    );
  }
});

module.exports = Greeter;
