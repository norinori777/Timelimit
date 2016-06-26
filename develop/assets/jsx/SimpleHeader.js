import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class simpleHeader extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		let css_root = classNames('simple-header')
		let css_title = classNames('simple-header__title', 'simple-header--lg')
		return (
			<div className={css_root}>
				<p className={css_title}>{this.props.title}</p>
			</div>
		)
	}
}
simpleHeader.propTypes = {
	title: React.PropTypes.string.isRequired
}