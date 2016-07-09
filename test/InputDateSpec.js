import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import InputDate from '../develop/assets/jsx/InputDate.js'

describe("InputDate",() => {
	describe("Simulate.Change",()=>{
		let myComponent

		beforeEach(()=>{
			myComponent = TestUtils.renderIntoDocument(<InputDate
				title={'テストタイトル'}
				id={'testid'}
				format={'YYYY-MM-DD'}
				defaultDate={'2016-07-07'}
				></InputDate>)
		})
		it('should render',() =>{
			let label, input
			label = TestUtils.findRenderedDOMComponentWithTag(myComponent, "label")
			expect(ReactDOM.findDOMNode(label).innerHTML).toBe("テストタイトル")

			input = TestUtils.findRenderedDOMComponentWithTag(myComponent, "input")
			expect(ReactDOM.findDOMNode(input).getAttribute('value').trim()).toBe('2016-07-07')
			expect(ReactDOM.findDOMNode(input).getAttribute('id').trim()).toBe('testid')
		})
	})
})
