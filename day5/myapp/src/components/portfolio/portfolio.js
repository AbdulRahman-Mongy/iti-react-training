import "./portfolio.css"
import ProtfolioCard from "./portfoliocard"
import "./portfoliocard.css"

function Portfolio() {
	var cardList = [
		{ title: "Mobile Design", bg: "black" },
		{ title: "Web Design", bg: "gray" },
		{ title: "Dev Design", bg: "lightgray" },
		{ title: "Dev Design", bg: "lightgray" },
		{ title: "Web Design", bg: "gray" },

		{ title: "Mobile Design", bg: "black" },
	]

	return (
		<>
			<div className="h1 mx-5 my-title">Portfolio</div>
			<div
				className="d-flex justify-content-center align-items-center flex-wrap"
				style={{ width: "80%", margin: "auto" }}
			>
				{cardList.map((cardData) => (
					<div
						className="my-card-outer d-flex justify-content-center align-items-center"
						style={{ width: "30%", margin: "auto" }}
					>
						<ProtfolioCard
							title={cardData.title}
							bg={cardData.bg}
							text={cardData.text}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default Portfolio
