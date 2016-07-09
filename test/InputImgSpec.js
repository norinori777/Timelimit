import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import InputImg from '../develop/assets/jsx/InputImg.js'

describe("InputImg",() => {
	describe("Simulate.Change",()=>{
		let myComponent

		beforeEach(()=>{
			myComponent = TestUtils.renderIntoDocument(<InputImg></InputImg>)
		})
		it('should render',() =>{
			let input, img
			input = TestUtils.findRenderedDOMComponentWithTag(myComponent, "input")
			expect(ReactDOM.findDOMNode(input).getAttribute('type').trim()).toBe('file')

			img = TestUtils.findRenderedDOMComponentWithTag(myComponent, "img")
		})
	})
})
