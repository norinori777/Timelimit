import React from 'react'
import {render} from 'react-dom'
import Main from '../jsx/main.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import main from './redux/reducers/main.js'
import getDate from './util/GetDate.js'

const initialState = {
    title: 'Timelimit',
	isOpen: false,
	img: '',
	startDate: '',
	endDate: '',
	timeLimit: []
}
initialState.startDate = getDate();
initialState.endDate = getDate();

const store = createStore(main, initialState)


render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)
