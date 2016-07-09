{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import InputDate from './InputDate.js'
import InputImg from './InputImg.js'

export default class AddForm extends Component {
	constructor(props) {
	  super(props)

	}

	render(){
		return (
			<form method="post"
                    encType="multipart/form-data"
                    action="/test/upload">
                <InputImg title={'+写真を追加'}/> 
                <InputDate id={'startDate'}
                    title={'開始日'}
                    format={'YYYY-MM-DD'}
                    defaultDate={'2016-07-07'} />
                <InputDate id={'endDate'}
                    title={'終了日'}
                    format={'YYYY-MM-DD'}
                    defaultDate={'2016-07-08'} />
                <input type="submit" />                
			</form>
		)
	}
}

AddForm.propTypes = {
}
