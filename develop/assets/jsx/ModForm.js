{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import InputImg from './InputImg.js'
import InputDate from './InputDate.js'
import classNames from 'classnames'
import {updateTimeLimit} from '../js/redux/actions'
import {deleteTimeLimit} from '../js/redux/actions'

export default class ModForm extends Component {
	constructor(props){
	  super(props)
      this.handleModClick = this.handleModClick.bind(this)
      this.handleDelClick = this.handleDelClick.bind(this)
    }

    handleModClick(e){
        let item_id = this.props.item_id
        let startDate = this.props.startDate.format('YYYY-MM-DD')
        let endDate = this.props.endDate.format('YYYY-MM-DD')
        let img = this.props.img
        let dispatch = this.props.dispatch
        updateTimeLimit({item_id, startDate, endDate, img, dispatch})
    }
    handleDelClick(e){
        let item_id = this.props.item_id
        let dispatch = this.props.dispatch
        deleteTimeLimit({item_id, dispatch})
    }

	render(){
        let update = classNames('btn', 'btn--warning', 'simple-form__submit')
        let del = classNames('btn', 'btn--danger', 'simple-form__submit')
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
                <input type="button" className={update} value="変更" onClick={this.handleModClick} />
                <input type="button" className={del} value="削除" onClick={this.handleDelClick} />
			</div>
		)
	}
}

ModForm.propTypes = {
}
