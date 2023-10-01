import Card from "react-bootstrap/Card"
import "./portfoliocard.css"
function ProtfolioCard(props) {
	const { title, text, bg } = props
	var style = {
		backgroundColor: bg,
	}
	return (
		<>
			<div style={style} className="my-3 my-card">
				<Card className="text-center my-card" style={style}>
					<Card.Title>{title}</Card.Title>
					<hr
						className="my-2"
						style={{ width: "60%", margin: "auto" }}
					/>
				</Card>
			</div>
		</>
	)
}

export default ProtfolioCard
