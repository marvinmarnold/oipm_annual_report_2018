import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByReasonPlot from './uof-by-reason-plot.js'
import FirearmUofByReasonPlot from './firearm-uof-reason-plot.js'
import UofByPrecedingPlot from './uof-by-preceding-plot.js'

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

	renderFirearmUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason firearm exhibited</h4>
						<ul>
							<li>Ironically, weapon exhibited was not the most common reason for exhibiting a firearm; it only represented 12.6% of total reasons.</li>
							<li>The top three reasons for exhibiting firearms are flight from an officer, tactical deployments, and resisting lawful arrest.</li>
							<li>Other represented 10.4% of reason for exhibiting a firearm, down from 30% in 2017.</li>
						</ul>
					</Col>
					<Col>
						<FirearmUofByReasonPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByPreceding() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Before the use of force</h4>
						<ul>
							<li>More than 75% of instances that preceded force were call for service or arresting.</li>
							<li>While traffic stops were the third most common event to precede force in 2017, it was the fifth most common in 2018 with just 4.42%.</li>
						</ul>
					</Col>
					<Col>
						<UofByPrecedingPlot />
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
				{this.renderFirearmUofByReason()}
				{this.renderUofByPreceding()}
				
			</div>
		)
	}
}

export default ForceJustificationSection
