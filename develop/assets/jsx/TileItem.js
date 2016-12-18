{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class TileItem extends Component {
	constructor(props){
	  super(props)
    }
    toDoubleDigits(num) {
        num += ""
        if (num.length === 1) {
            num = "0" + num
        }
        return num
    }
    getTermTime(startDate, endDate){
        // let calc = new Date((+new Date(endDate + " 00:00:00")) - (+new Date(startDate + " 00:00:00")))
        // return calc.getUTCDate() - 1
        let calc = (Date.parse(endDate)-Date.parse(startDate))/86400000
        return calc
    }
    getRestTime(endDate){
        // let calc = new Date((+new Date(endDate + " 00:00:00")) - (+new Date()))
        // return calc.getUTCDate() -1

        let date = new Date()
        let year = date.getFullYear()
        let month = this.toDoubleDigits(date.getMonth()+1)
        let day = this.toDoubleDigits(date.getDate())
        let now = year + "-" + month + "-" + day
        let calc = (Date.parse(endDate)-Date.parse(now))/86400000
        return calc
    }
    /* 自動更新処理を入れる
    updateDate(){

    }
    */
    render(){
        let tileItem__img = classNames('tilelayout__item-img')
        let tileItem__msg = classNames('tilelayout__item-msg')
        let tileItem__overflow = classNames('tilelayout__item-overflow')
        let tileItem__msg2

        if(this.getRestTime(this.props.endDate) < 0){
           tileItem__msg2 = classNames('tilelayout__item-msg', 'tilelayout__item-msg-alert')         
        } else {
           tileItem__msg2 = classNames('tilelayout__item-msg')         
            
        }
        return(
            <div>
                <div className={tileItem__overflow}>
                    <img className={tileItem__img}
                        src={this.props.img} />
                </div>
                <p className={tileItem__msg}>開始：{this.props.startDate}</p>
                <p className={tileItem__msg}>終了：{this.props.endDate}</p>
                <p className={tileItem__msg}>期間:{this.getTermTime(this.props.startDate, this.props.endDate)}日</p>
                <p className={tileItem__msg2}>残り:{this.getRestTime(this.props.endDate)}日</p>
            </div>
        )
    }
}
