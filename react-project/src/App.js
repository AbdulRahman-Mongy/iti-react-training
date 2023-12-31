import "./App.css"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import "./componants/css/course.css"
import "./componants/css/Nav-Bar-Styless.css"
import "./componants/css/Header-Styless.css"
import "./componants/css/Popover-Styless.css"
import "./componants/css/Catigoreis.css"
import "./single-course-page/css/Requires-Styless.css"
import "./single-course-page/css/header.css"
import "./componants/css/footer.css"
import "./single-course-page/css/sidebar.css"
import NavBar from "./componants/NavBar"
import Home from "./componants/Home"
import "./single-course-page/css/maincontent.css"
import CourseSinglePage from "./single-course-page/CourseSinglePage"
import "./single-course-page/css/Description-Styless.css"
import { useEffect, useState } from "react"
import React from "react"
import Footer from "./componants/Footer"
import axios from "axios"
import SignInSide from "./signin/Signin"
import SignUp from "./signin/Signup"
import { useDispatch } from "react-redux"
import changeCourseList from "./store/actions"

function App() {
	// TODO: Use redux instead of localStorage.

	const [loaded, setLoaded] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get("http://localhost:3000/data")
			.then((response) => {
				var homepage = response.data
				dispatch(changeCourseList(homepage))
				localStorage.setItem("homepage", JSON.stringify(homepage))
			})
			.then(() => {
				setLoaded(true)
			})

		axios
			.get("http://localhost:3000/reviews")
			.then((response) => {
				var reviews = response.data
				localStorage.setItem("reviews", JSON.stringify(reviews))
			})
			.then(() => {
				setLoaded(true)
			})
	}, [])

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />

				<Routes>
					<Route exact path="/" element={<Home loaded={loaded} />} />

					<Route exact path="/signin" element={<SignInSide />} />

					<Route exact path="/signup" element={<SignUp />} />

					<Route
						exact
						path="/course/:courseID"
						element={<CourseSinglePage />}
					/>
					<Route
						exact
						path="/search"
						element={<Home loaded={loaded} />}
					/>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
export default App
