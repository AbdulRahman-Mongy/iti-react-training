let INITIAL_STATE = {
	courseList: [],
}

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "SET_CourseList":
			return { ...state, courseList: action.payload }
		default:
			return state
	}
}
