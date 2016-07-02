import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import InputFile from '../develop/assets/jsx/InputFile.js'

describe("InputFile",() => {
	it('should render',() =>{
		let myComponent, myNode
		myComponent = TestUtils.renderIntoDocument(<InputFile></InputFile>)
	})
})
