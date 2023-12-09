import React, { useState } from "react"

import { Link, useNavigate } from "react-router-dom"
function NavBar() {
	const navigator = useNavigate()
	const [searchWord, setSearchWord] = useState("")
	return (
		<nav className="navbar navbar-expand-lg">
			<div>
				<Link to="/">
					<img
						className="udemy-logo-size"
						src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
						alt="Udemy-company-logo"
					/>
				</Link>
			</div>

			<div className="search-box big-screen">
				<div className="big-screen form">
					<Link to="/">
						<button
							className="magnificent-glass-logo"
							id="search-button"
							onClick={(e) => {
								e.preventDefault()
								navigator(`/search?q=${searchWord}`)
								setSearchWord("")
							}}
						>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</Link>
				</div>
				<input
					type="text"
					className="search-input"
					placeholder="Search any thing"
					value={searchWord}
					onChange={(e) => {
						setSearchWord(e.target.value)
					}}
				/>
			</div>
			<div>
				<div className="small-screen magificent-glass-small-screen">
					<Link to="/">
						<i className="fa-solid fa-magnifying-glass fa-1x"></i>
					</Link>
				</div>
				<Link to="/">
					<i className="fa-solid fa-cart-shopping fa-1x"></i>
				</Link>
			</div>
			<div className="big-screen">
				<button
					onClick={(e) => {
						e.preventDefault()
						navigator(`/signin`)
					}}
					className="login-button"
				>
					Log in
				</button>
			</div>
			<div className="big-screen">
				<button
					onClick={(e) => {
						e.preventDefault()
						navigator(`/signup`)
					}}
					className="signup-button"
				>
					Sign up
				</button>
			</div>
		</nav>
	)
}

export default NavBar
