var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var HelloWorld = require('../develop/assets/jsx/helloworld.js');

describe("helloworld",function(){
	it('should render',function(){
		myComponent = TestUtils.renderIntoDocument(<HelloWorld name='test'></HelloWorld>);
		expect(ReactDOM.findDOMNode(myComponent).textContent).toContain("Hello");
	});
});
