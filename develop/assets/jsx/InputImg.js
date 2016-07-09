{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをimgタグで表示する
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

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
        }
        r.readAsDataURL(fileList[0])
    }

	render(){
        let container, button, input, img
        container = classNames('input-img')
        button = classNames('btn', 'btn--info')
        input = classNames('input-img__input')
        img = classNames('input-img__img')
        
		return (
            <div className={container}>
                <label className={button} htmlFor="upfile">{this.props.title}</label>
                <input type="file"
                        className={input}
                        name="upfile"
                        id="upfile"
                        accept="image/*"
                        capture="camera"
                        onChange={this.handleChange} />
                <img className={img} ref={x => this.img = x} width={200} />
            </div>
        )
    }
}

InputImg.propTypes = {
}

