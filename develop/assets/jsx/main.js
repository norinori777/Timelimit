import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import SimpleHeader from './SimpleHeader.js'
import TileLayout from './TileLayout.js'
import DrawerMenu from './DrawerMenu.js'
import {getTimeLimit} from '../js/redux/actions'

class Main extends Component {
    componentDidMount(){
        getTimeLimit(this.props.dispatch)
    }
    render(){
        return (
            <div className={'page'}>
                <SimpleHeader path={'/icon/menu-1.png'}
                    title={this.props.title}
                    dispatch={this.props.dispatch} />
                <TileLayout timeLimit={this.props.timeLimit} />
                <DrawerMenu {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect (mapStateToProps)(Main)
