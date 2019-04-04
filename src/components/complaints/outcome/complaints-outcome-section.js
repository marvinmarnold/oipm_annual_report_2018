import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsByFindingPlot from './allegations-by-finding-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderByFinding() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>NOPDs allegation findings</h4>


					</Col>
				</Row>
				<Row>
					<Col>
					<ul>
						<li>TODO</li>
					</ul>
					</Col>
					<Col>
						<AllegationsByFindingPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-outcome-section">Outcome of complaints</h2></Col>
				</Row>

				{this.renderByFinding()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
