import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import SimpleHeader from './SimpleHeader.js'
import InputFile from './InputFile.js'

class Main extends Component {
    render(){
        return (
            <div>
                <SimpleHeader title={this.props.title} />
                <br />
                <InputFile></InputFile>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect (mapStateToProps)(Main)

