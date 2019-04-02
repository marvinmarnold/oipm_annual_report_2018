import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByOfficerAgeExpPlot from './uof-by-officer-age-exp-plot'

class OfficerDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByOfficerAgeExp() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by officer age and years of experience</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>TODO</li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByOfficerAgeExpPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-officer-demographics-section">Force by officer demographics</h2></Col>
				</Row>

				{this.renderUofByOfficerAgeExp()}
			</div>
		)
	}
}

export default OfficerDemographicsSection
