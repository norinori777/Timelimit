import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import SimpleHeader from '../develop/assets/jsx/SimpleHeader.js'

describe("SimpleHeader",function(){
	it('should render',function(){
		let  myComponent;

		myComponent = TestUtils.renderIntoDocument(<SimpleHeader title='test'></SimpleHeader>);
		expect(ReactDOM.findDOMNode(myComponent).textContent).toContain("test");
	});
});
