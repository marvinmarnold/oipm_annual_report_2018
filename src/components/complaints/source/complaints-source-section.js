import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsBySourcePlot from './allegations-by-source-plot'
import ComplaintsBySourceDispositionPlot from './complaints-by-source-disposition-plot'

class ComplaintsSourceSection extends React.Component {
	constructor() {
		super()
	}

	renderBySource() {
		return (
			<div className="my-3">
				<Row>
					<Col>


					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>The public initiates roughly 1.5 times the number of complaints than does rank, however rank complaints are sustained more frequently.</li>
							<li>Citizen and rank complaint numbers both decrease slightly from 2017 to 2018. </li>
						</ul>
					</Col>
					<Col>
						<h4>Allegations by source</h4>
						<AllegationsBySourcePlot />
					</Col>
					<Col>
						<h4>Disposition by source</h4>
						<ComplaintsBySourceDispositionPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-source-section">Who complains</h2></Col>
				</Row>

				{this.renderBySource()}
			</div>
		)
	}
}

export default ComplaintsSourceSection
