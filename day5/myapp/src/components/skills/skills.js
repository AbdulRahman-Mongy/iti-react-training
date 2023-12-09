import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SkillItem from "../skillItem/skillItem"
import FocusItem from "../focusItem/focusItem"
import ListGroup from "react-bootstrap/ListGroup"

function Skills() {
	var skills = [
		{ title: "HTML", percentage: 80 },
		{ title: "CSS", percentage: 60 },
		{ title: "Python", percentage: 100 },
		{ title: "HTML", percentage: 80 },
		{ title: "Python", percentage: 100 },
		{ title: "Python", percentage: 100 },
		{ title: "HTML", percentage: 80 },
		{ title: "Python", percentage: 100 },
	]

	var focus = [
		{ lable: "OOP" },
		{ lable: "DS" },
		{ lable: "ALGO" },
		{ lable: "ALGO" },
	]

	return (
		<>
			<div className="my-5 bg-dark text-white d-flex align-items-center justify-content-center">
				<div className="text-center mt-5" style={{ width: 800 }}>
					<p className="h1 text-center"> Skills </p>

					<p className="text-center">
						{" "}
						Back in 2012, I decided to try my hand at creating
						custom Tumblr themes and tumbled head first into the
						rabbit hole of coding and web development. Fast-forward
						to today, and had the privilege of building software for
						an advertising agency, a start-up, a student-led design
						studio, and a huge corporation.{" "}
					</p>
					<div
						className="d-flex align-items-center justify-content-center"
						style={{ margin: "4rem auto" }}
					>
						<div className="d-flex flex-grow-1 justify-content-center">
							<div>
								<h3 class="px-5">My Focus</h3>
								<hr />
								<ListGroup className="mx-3">
									{focus.map((focusItme) => (
										<FocusItem lable={focusItme.lable} />
									))}
								</ListGroup>
							</div>
						</div>

						<div className="d-flex flex-column flex-grow-1">
							{skills.map((skill) => (
								<SkillItem
									title={skill.title}
									percentage={skill.percentage}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
