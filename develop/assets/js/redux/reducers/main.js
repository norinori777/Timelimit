import getDate from '../../util/GetDate.js'

const constants = {
	UPDATE_MENU: "UPDATE_MENU",
	UPDATE_MOD_MENU: "UPDATE_MOD_MENU",
	UPDATE_IMG: "UPDATE_IMG",
	UPDATE_START_DATE: "UPDATE_START_DATE",
	UPDATE_END_DATE: "UPDATE_END_DATE",
	ADD_TIME_LIMIT: "ADD_TIME_LIMIT",
	GET_TIME_LIMIT: "GET_TIME_LIMIT"
};

function main(state = {},	action){
	switch(action.type) {
		case constants.UPDATE_MENU:
		    let date
			date = getDate()
			return Object.assign({}, state, {
				isOpen: state.isOpen ? false : true,
				isModOpen: false,
				img: '',
				startDate: date,
				endDate: date
			})
		case constants.UPDATE_MOD_MENU:
			let i, data
			if(state.isModOpen == true){
				data = {
					item_id: '',
					isModOpen: state.isModOpen ? false : true,
					isOpen: false,
					startDate: '',
					endDate: '',
					img: ''
				}								
			} else {
				if(Array.isArray(state.timeLimit)){
					for(i = 0; i < state.timeLimit.length; i++){
						if(state.timeLimit[i]._id == action.id){
							data = {
								item_id: action.id,
								isModOpen: state.isModOpen ? false : true,
								isOpen: false,
								startDate: state.timeLimit[i].startDate,
								endDate: state.timeLimit[i].endDate,
								img: state.timeLimit[i].img							
							}
							break
						}
					}
				}
			}
			return Object.assign({}, state, data)
		case constants.UPDATE_IMG:
			return Object.assign({}, state, {
				img: action.img
			})
		case constants.UPDATE_START_DATE:
			return Object.assign({}, state, {
				startDate: action.date
			})
		case constants.UPDATE_END_DATE:
			return Object.assign({}, state, {
				endDate: action.date
			})
		case constants.ADD_TIME_LIMIT:
			return Object.assign({}, state, {
				timeLimit: action.data,
				startDate: '',
				endDate: '',
				img: ''
			})
		case constants.GET_TIME_LIMIT:
			return Object.assign({}, state, {
				timeLimit: action.data
			})
		default:
			return state
	}
}

export default main