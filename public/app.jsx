var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;

    if (typeof name === 'string' && name.length > 0) {
      nameRef.value = '';
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {name} from component!</h1>
        <p>{message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Erico';
var message = 'Hey, this is from a component!'
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
