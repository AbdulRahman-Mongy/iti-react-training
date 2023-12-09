export default function changeCourseList(newList) {
	return {
		type: "SET_CourseList",
		payload: newList,
	}
}
