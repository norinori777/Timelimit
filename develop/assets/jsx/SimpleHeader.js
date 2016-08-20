import React, {Component, PropTypes} from 'react'
import {updateMenuFlg} from '../js/redux/actions' 
import classNames from 'classnames'

export default class simpleHeader extends Component {
	constructor(props) {
	  super(props)
	  this.handleClicked = this.handleClicked.bind(this)
	}
	handleClicked(){
		updateMenuFlg(this.props.dispatch)
	}
	render(){
		let css_root = classNames('simple-header')
		let css_img = classNames('simple-header__img')
		let css_title = classNames('simple-header__title', 'simple-header--lg')
		return (
			<div className={css_root}>
				<img className={css_img} 
					src={this.props.path}
					onClick={this.handleClicked} />
				<p className={css_title}>{this.props.title}</p>
			</div>
		)
	}
}
simpleHeader.propTypes = {
	title: React.PropTypes.string.isRequired
}