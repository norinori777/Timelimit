{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをimgタグで表示する
*/}
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import {updateImg} from '../js/redux/actions'

export default class InputImg extends Component {
	constructor(props) {
	  super(props)

      this.handleChange = this.handleChange.bind(this)
	}

    handleChange(e){
        let r = new FileReader(), fileList
        fileList = document.getElementById("upfile").files
        r.onload = e => {
            this.img.src = e.target.result
            updateImg({dispatch:this.props.dispatch, img: e.target.result})
        }
        r.readAsDataURL(fileList[0])
    }

	render(){
        let container, button, input, img, isShowImg
        isShowImg = this.props.img === "" ? true : false
        container = classNames('input-img')
        button = classNames('input-img__label', 'btn', 'btn--warning')
        input = classNames('input-img__input')
        img = classNames('input-img__img', {'input-img__img-hidden': isShowImg})
        
		return (
            <div className={container}>
                <label className={button}
                    htmlFor="upfile">
                    {this.props.title}
                </label>
                <input type="file"
                        className={input}
                        ref="upfile"
                        name="upfile"
                        id="upfile"
                        accept="image/*"
                        capture="camera"
                        onChange={this.handleChange} />
                <img className={img} ref={x => this.img = x} src={this.props.img} width={100} />
            </div>
        )
    }
}
InputImg = {
}

