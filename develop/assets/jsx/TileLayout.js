{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import TileItem from './TileItem.js'
import {updateModMenuFlg} from '../js/redux/actions'

export default class TileLayout extends Component {
	constructor(props){
	  super(props)
      this.handleClicked = this.handleClicked.bind(this)
    }
    getParentAttr(atrName, dom){
        let data, tmp
        tmp = dom
        while(1){
            tmp = tmp.parentNode
            if(tmp.parentNode === null){
                break
            }
            data = tmp.getAttribute(atrName)
            if(data === null){
                continue
            } 
            break
        }
        return data
    }
    handleClicked(e){
        let id
        id = this.getParentAttr("data", e.target)
        updateModMenuFlg(this.props.dispatch, id)
    }
    renderItems(items){
        let i, tilelayout_item, values = []
        tilelayout_item = classNames('tilelayout__item')

        if(!Array.isArray(items)){
            return
        }
        for(i = 0; i < items.length; i++){
            values.push(
                <li className={tilelayout_item}
                    data={items[i]._id}
                    onClick={this.handleClicked}>
                    <TileItem img={items[i].img}
                        startDate={items[i].startDate} 
                        endDate={items[i].endDate} />
                </li>)
        }
        return values
    }
    render(){
        let tilelayout = classNames('tilelayout')
        let tilelayout_items = classNames('tilelayout__items')
        return (
            <div className={tilelayout}>
                <ul className={tilelayout_items}>
                    {this.renderItems(this.props.timeLimit)}
                </ul>
            </div>
        )
    }
}