{/*
    ・インプットファイルを読み込む
    ・読み込んだファイルをStoreに保存する。
*/}
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class InputFile extends Component {
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
		return (
			<form method="post"
                    encType="multipart/form-data"
                    action="/test/upload">
				<input type="file"
                        name="upfile"
                        id="upfile"
                        accept="image/*"
                        capture="camera"
                        onChange={this.handleChange} />
                <input type="submit" />
                <img ref={x => this.img = x} width={200} />
			</form>
		)
	}
}

InputFile.propTypes = {
}
