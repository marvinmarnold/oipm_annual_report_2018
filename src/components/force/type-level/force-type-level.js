import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"


class ForceTypeLevel extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-type-level">Force by type and level</h2></Col>
				</Row>

			</div>
		)
	}
}

export default ForceTypeLevel
