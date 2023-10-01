import ListGroup from "react-bootstrap/ListGroup"

function FocusItem(props) {
	const { lable } = props

	return (
		<>
			<ListGroup.Item
				className="bg-dark text-white border border-0 px-2"
				style={{ textAlign: "left" }}
			>
				{lable}
			</ListGroup.Item>
		</>
	)
}

export default FocusItem
