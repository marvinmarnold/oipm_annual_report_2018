import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import ForcePerOfficerPlot from './force-per-officer-plot.js'

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

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="most-forceful-section">Most forceful officers</h2></Col>
				</Row>

				{this.renderForcePerOfficer()}

			</div>
		)
	}
}

export default MostForcefulSection
