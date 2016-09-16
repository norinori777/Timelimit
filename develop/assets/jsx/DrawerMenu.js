{/*

*/}

import React, {Component, PropTypes} from 'react'
import AddForm from './AddForm.js'
import {updateMenuFlg} from '../js/redux/actions' 
import classNames from 'classnames'

export default class DrawerMenu extends Component {
    constructor(props){
        super(props)
        this.handleClicked = this.handleClicked.bind(this)
    }
    handleClicked(){
		updateMenuFlg(this.props.dispatch)
	}
    render(){
        let root = classNames('drawer-menu')
        let drawermenu = classNames('drawer-menu__menu', {'drawer-menu__opened': this.props.isOpen})
        let overlay = classNames({'drawer-menu__overlay': this.props.isOpen})
        return (
            <div className={root}>
                <div className={drawermenu}>
                    <AddForm dispatch={this.props.dispatch}
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

DrawerMenu.propTypes = {

}
