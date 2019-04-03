import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import ComplaintsByYearTypePlot from './complaints-by-year-type-plot'
import AllegationsByYearTypePlot from './allegations-by-year-type-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderByYear() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Number of active NOPD officers</h4>

						<ul>
							<li>Complaints and allegations both appeared to have a slight decrease in 2018 compared with 2017.</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<ComplaintsByYearTypePlot />
					</Col>
					<Col>
						<AllegationsByYearTypePlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-time-section">Complaints over time</h2></Col>
				</Row>

				{this.renderByYear()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
