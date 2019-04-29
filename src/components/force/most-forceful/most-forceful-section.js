import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import ForcePerOfficerPlot from './force-per-officer-plot'
import ForceCdfOfficersPlot from './force-cdf-officers-plot'
import MostForcefulDetails from './most-forceful-details'

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
							<li>The average UOF data from 2018 has decreased since 2017 and 2016.</li>
							<li>392 officers used force in 2018, slightly down from 402 in 2018.</li>
							<li>The average officer will use force once every 3 years. In 2017, the average officer used force once every 2 years.</li>
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
						<h4>Percentage of force by number of officers</h4>
						<ul>
							<li>How to read the graph: The vertical axis is percentage and horizontal axis is number of officers. The graph is cumulative, meaning that the top 10 officers includes the top 5 officers. </li>
							<li>The top 10 officers are responsible for 11.3% of all FTN in 2018, up slightly from 10.3% in 2017.</li>
							<li>The top 10 officers are responsible for 14.1% of UOF in 2018, a negligible increase from 13.4% in 2017.</li>
							<li>About the same number of officers used force in 2018 as in 2017.</li>
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
				<MostForcefulDetails />
			</div>
		)
	}
}

export default MostForcefulSection
