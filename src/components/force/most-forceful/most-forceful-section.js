import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import ForcePerOfficerPlot from './force-per-officer-plot.js'
import ForceCdfOfficersPlot from './force-cdf-officers-plot.js'

class MostForcefulSection extends React.Component {
	constructor() {
		super()
	}

	renderForcePerOfficer() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Average force per officer</h4>
						<ul>
							<li>The average UOF data from 2018 is similar to 2017 and 2016.</li>
							<li>Officers who used force at least once in 2018 are more than two times for likely to have at least one other UOF.</li>
						</ul>
					</Col>
					<Col>
						<ForcePerOfficerPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderForceCdfOfficers() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Average force per officer</h4>
						<ul>
							<li>How to read the graph: The vertical axis is percentage and horizontal axis is number of officers. The graph is cumulative, meaning that the top 10 officers includes the top 5 officers. </li>
							<li>The top 10 officers are responsible for 11.31 of all FTN in 2018, up slightly from 10.38% in 2017.</li>
							<li>The top 10 officers are responsible for 14.17% of UOF in 2018, a negligible increase from 13.34% in 2017.</li>
							<li>The top 400 officers with FTNs are responsible for 100% of force in 2018. In 2017, 500 officers were responsible for total force.</li>
						</ul>
					</Col>
					<Col>
						<ForceCdfOfficersPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="most-forceful-section">Most forceful officers</h2></Col>
				</Row>

				{this.renderForcePerOfficer()}
				{this.renderForceCdfOfficers()}

			</div>
		)
	}
}

export default MostForcefulSection
