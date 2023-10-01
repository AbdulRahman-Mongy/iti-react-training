import React from "react"
import Card from "react-bootstrap/Card"
import "./header.css"

function HeaderImage() {
	return (
		<>
			<div className="d-flex justify-content-start align-items-center my-header-container">
				<div className="d-flex flex-column text-white my-content-container text-center">
					<h3 style={{ fontWeight: 400 }}> Ahmed Alzahaby</h3>
					<h5 style={{ fontWeight: 200 }}>
						{" "}
						iti training for Mongy{" "}
					</h5>
					<button>Click</button>
				</div>
			</div>
		</>
	)
}

export default HeaderImage
