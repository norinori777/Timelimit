var React = require('react');

var HelloWorld = React.createClass({
	render(){
		return (<div>Hello {this.props.name}</div>);
	}
});

module.exports = HelloWorld;
