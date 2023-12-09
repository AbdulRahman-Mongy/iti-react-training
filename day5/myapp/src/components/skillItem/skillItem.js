import ProgressBar from "react-bootstrap/ProgressBar"

function SkillItem(props) {
	const { percentage, title } = props

	return (
		<>
			<div className="mb-3" style={{ width: "100%" }}>
				<ProgressBar
					style={{ height: 25 }}
					variant="secondary"
					now={percentage}
					label={title}
				/>
			</div>
		</>
	)
}

export default SkillItem
