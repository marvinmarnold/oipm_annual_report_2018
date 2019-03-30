import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByReasonPlot from './uof-by-reason-plot.js'

class ForceJustificationSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason for force</h4>
						<ul>
							<li>For the second year in a row, resisting arrest in the most common reason for force at 32.3%, followed by refusing verbal commands at 18.2%.</li>
							<li>The other category decreased notably from 18.9% in 2017 to 6.5% in 2018. </li>
						</ul>
					</Col>
					<Col>
						<UofByReasonPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-justification-section">Justification for force</h2></Col>
				</Row>

				{this.renderUofByReason()}

			</div>
		)
	}
}

export default ForceJustificationSection
