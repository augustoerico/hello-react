var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {name} from component!</h1>
        <p>{message}</p>
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
