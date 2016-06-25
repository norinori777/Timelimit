import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import SimpleHeader from './SimpleHeader.js'

class Main extends Component {
    render(){
        return (
            <SimpleHeader title={this.props.title} />
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect (mapStateToProps)(Main)
