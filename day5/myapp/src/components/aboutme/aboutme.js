import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./aboutme.css"

function AboutMe() {
	return (
		<>
			<Container fluid className="mt-5">
				<Row>
					<Col md={3}>
						<div
							style={{
								textShadow: "1px 1px #888888",
								opacity: 0.8,
							}}
							className="h1 mx-5"
						>
							About Me
						</div>
					</Col>
					<Col md={9}>
						<p className="mx-3">
							Back in 2012, I decided to try my hand at creating
							custom Tumblr themes and tumbled head first into the
							rabbit hole of coding and web development.
							Fast-forward to today, and had the privilege of
							building software for an advertising agency, a
							start-up, a student-led design studio, and a huge
							corporation. My main focus these days is building
							products and leading projects for our clients at
							Upstatement. In my free time I've also released an
							online video course that covers everything you need
							to know to build a web app with the Spotify API.
							When not at the computer, usually rock climbing,
							hanging out with my wife and two cats, or running
							around Hyrule searching for Korok seedsKorok seeds
						</p>
						<button className="mx-3 mt-5 bg-dark text-white">
							{" "}
							More?{" "}
						</button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default AboutMe
