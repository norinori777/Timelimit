import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import InputDate from '../develop/assets/jsx/InputDate.js'
import moment from 'moment'

describe("InputDate",() => {
	describe("Simulate.Change",()=>{
		let myComponent
		let date

		date = moment()

		beforeEach(()=>{
			myComponent = TestUtils.renderIntoDocument(
			    <InputDate
				  title={'テストタイトル'}
				  id={'testid'}
				  format={'YYYY-MM-DD'}
				  date={date}
				></InputDate>)
		})
		it('should render',() =>{
			let label, input
			label = TestUtils.findRenderedDOMComponentWithTag(myComponent, "label")
			expect(ReactDOM.findDOMNode(label).innerHTML).toBe("テストタイトル")

			// input = TestUtils.findRenderedDOMComponentWithTag(myComponent, "input")
			// expect(ReactDOM.findDOMNode(input).getAttribute('value').trim()).toBe('2016-07-07')
		})
	})
})
