import ControlData from '../../util/ControlData.js'

const constants = {
    UPDATE_MENU: "UPDATE_MENU",
    UPDATE_IMG: "UPDATE_IMG",
    UPDATE_START_DATE: "UPDATE_START_DATE",
    UPDATE_END_DATE: "UPDATE_END_DATE",
    ADD_TIME_LIMIT: "ADD_TIME_LIMIT",
    GET_TIME_LIMIT: "GET_TIME_LIMIT"
}

let updateMenuFlg = (dispatch) => {
    dispatch({type:constants.UPDATE_MENU})
}

let updateImg = (data) => {
    data.dispatch({type:constants.UPDATE_IMG, img: data.img})
}

let updateDate = (data) => {
    if(data.category === 'startDate'){
        data.dispatch({type:constants.UPDATE_START_DATE, date: data.date})
    } else {
        data.dispatch({type:constants.UPDATE_END_DATE, date: data.date})
    }
}

let addTimeLimit = (data) => {
	ControlData('POST',
		'/timelimit/add/',
		false,
		data,
		(inLineData) => {
			let response = JSON.parse(inLineData.response)
			data.dispatch({ type:constants.ADD_TIME_LIMIT, data: response})
		}
	)
}

let getTimeLimit = (dispatch) => {
    ControlData('GET',
        '/timelimit/',
        false,
        null,
        (inlineData) => {
            let response = JSON.parse(inlineData.response)
            dispatch({type:constants.GET_TIME_LIMIT, data: response})
        }
    )
}

export {
    updateMenuFlg,
    updateImg,
    updateDate,
    addTimeLimit,
    getTimeLimit
}