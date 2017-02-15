var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
});

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

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
