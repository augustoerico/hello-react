var React = require('react')

var GreeterForm = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var nameRef = this.refs.name;
    var messageRef = this.refs.message;
    var update = {
      name: nameRef.value,
      message: messageRef.value
    };
    nameRef.value = '';
    messageRef.value = '';
    this.props.handleSubmit(update)
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Name"/>
        </div>
        <div>
          <input type="textarea" ref="message" placeholder="Text" />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    )
  }

});

module.exports = GreeterForm;
