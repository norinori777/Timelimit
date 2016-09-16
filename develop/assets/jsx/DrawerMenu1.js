{/*

*/}

import React, {Component, PropTypes} from 'react'
import ModForm from './ModForm.js'
import {updateModMenuFlg} from '../js/redux/actions' 
import classNames from 'classnames'

export default class DrawerMenu1 extends Component {
    constructor(props){
        super(props)
        this.handleClicked = this.handleClicked.bind(this)
    }
    handleClicked(){
		updateModMenuFlg(this.props.dispatch)
	}
    render(){
        let root = classNames('drawer-menu')
        let drawermenu = classNames('drawer-menu__menu', {'drawer-menu__opened': this.props.isModOpen})
        let overlay = classNames({'drawer-menu__overlay': this.props.isModOpen})
        return (
            <div className={root}>
                <div className={drawermenu}>
                    <ModForm dispatch={this.props.dispatch}
                        img={this.props.img}
                        startDate={this.props.startDate}
                        endDate={this.props.endDate} />
                </div>
                <div className={overlay} onClick={this.handleClicked}>
                </div>
            </div>
        )
    }
}

DrawerMenu1.propTypes = {

}
