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
    getTermTime(startDate, endDate){
        let calc = new Date((+new Date(endDate + " 00:00:00")) - (+new Date(startDate + " 00:00:00")))
        return calc.getUTCDate() - 1
    }
    getRestTime(endDate){
        let calc = new Date((+new Date(endDate + " 00:00:00")) - (+new Date()))
        return calc.getUTCDate() -1
    }
    /* 自動更新処理を入れる
    updateDate(){

    }
    */
    render(){
        let tileItem__img = classNames('tilelayout__item-img')
        let tileItem__msg = classNames('tilelayout__item-msg')

        return(
            <div>
                <img className={tileItem__img}
                    src={this.props.img} />
                <p className={tileItem__msg}>開始：{this.props.startDate}</p>
                <p className={tileItem__msg}>終了：{this.props.endDate}</p>
                <p className={tileItem__msg}>期間:{this.getTermTime(this.props.startDate, this.props.endDate)}日</p>
                <p className={tileItem__msg}>残り:{this.getRestTime(this.props.endDate)}日</p>
            </div>
        )
    }
}
