{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import InputImg from './InputImg.js'
import InputDate from './InputDate.js'
import classNames from 'classnames'
import {addTimeLimit} from '../js/redux/actions'

export default class AddForm extends Component {
	constructor(props){
	  super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let startDate = this.props.startDate.format('YYYY-MM-DD')
        let endDate = this.props.endDate.format('YYYY-MM-DD')
        let img = this.props.img
        let dispatch = this.props.dispatch
        addTimeLimit({startDate, endDate, img, dispatch})
    }

	render(){
        let submit = classNames('btn', 'btn--success', 'simple-form__submit')
        let inputImg = classNames('simple-form__img')
        let inputDate = classNames('simple-form__date')

		return (
			<div>
                <div className={inputImg}>
                    <InputImg title={'+写真を追加'}
                        dispatch={this.props.dispatch} 
                        img={this.props.img} />
                </div>
                <div className={inputDate}>
                    <InputDate
                        title={'開始日'}
                        format={'YYYY-MM-DD'}
                        date={this.props.startDate}
                        dispatch={this.props.dispatch} />
                </div>
                <div className={inputDate}>
                    <InputDate
                        title={'終了日'}
                        format={'YYYY-MM-DD'}
                        date={this.props.endDate} 
                        dispatch={this.props.dispatch} />
                </div> 
                <input type="button" className={submit} value="登録" onClick={this.handleClick} />                
			</div>
		)
	}
}

AddForm.propTypes = {
}
