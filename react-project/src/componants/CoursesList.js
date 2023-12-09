import React, { useState } from "react"
import CoursesSection from "./CoursesSection"
import { useSelector } from "react-redux"

function CoursesList({ searchWord }) {
	let [clicked, setClick] = useState("python")
	let [select, setSelect] = useState(["clicked", "", "", "", "", "", ""])
	let values = []
	let [prev, setPrev] = useState(0)
	// TODO: use data to label sections
	let courseList = useSelector((state) => state.courseList)

	let courseElements = []
	var index = 0
	for (const element in courseList) {
		courseElements.push(
			<li
				id={"li-" + (index + 1)}
				onClick={() => {
					setClick(element)
					values[prev] = ""
					values[index] = "clicked"
					setPrev(index)
					setSelect(values)
				}}
				className={select[index] + " list-element"}
			>
				{element.toUpperCase()}
			</li>
		)
		index++
	}

	return (
		<div className="section">
			<div className="course-list">
				<h3 className="list-contents list-title">
					A Broad selection of courses
				</h3>
				<p className="list-contents list-discription">
					Choose from 185,000 online video cources with new additions
					published every month
				</p>

				<ul className="ul-list">{courseElements}</ul>
			</div>
			<CoursesSection
				course={clicked}
				searchWord={searchWord}
			></CoursesSection>
		</div>
	)
}
export default CoursesList
