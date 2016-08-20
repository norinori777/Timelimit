
const constants = {
	UPDATE_MENU: "UPDATE_MENU",
	UPDATE_IMG: "UPDATE_IMG",
	UPDATE_START_DATE: "UPDATE_START_DATE",
	UPDATE_END_DATE: "UPDATE_END_DATE",
	ADD_TIME_LIMIT: "ADD_TIME_LIMIT",
	GET_TIME_LIMIT: "GET_TIME_LIMIT"
};

function main(state = {},	action){
	switch(action.type) {
		case constants.UPDATE_MENU:
			return Object.assign({}, state, {
				isOpen: state.isOpen ? false : true
			})
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