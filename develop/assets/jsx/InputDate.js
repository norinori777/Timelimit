{/*
    ・カレンダー入力を設ける
    ・初期表示は、defaultDateで受け渡す
    ・INPUTに表示する日付形式は、formatで受け渡す
    ・カレンダ入力のラベルには、titleで受け渡す
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'
import {updateDate} from '../js/redux/actions'

export default class InputDate extends Component {
	constructor(props) {
	  super(props)
      this.handleChange = this.handleChange.bind(this)
	}

    handleChange(date){
        updateDate({dispatch:this.props.dispatch, title: this.props.title, date:date})
    }

	render(){
        let InputDate = classNames('input-date')
        let InputDate__label = classNames('input-date__label')
        let InputDate__calendar = classNames('input-date__calendar')

		return (
            <div className={InputDate}>
                <label className={InputDate__label} labelFor={this.props.id}>{this.props.title}</label>
                <div className={InputDate__calendar}>
                    <DatePicker
                        dateFormat={this.props.format}
                        selected={this.props.date}
                        onChange={this.handleChange} />
                </div>
            </div>
		)
	}
}

InputDate.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    //date: PropTypes.string.isRequired
}

