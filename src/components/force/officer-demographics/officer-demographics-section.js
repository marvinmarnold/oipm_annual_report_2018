import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByOfficerAgeExpPlot from './uof-by-officer-age-exp-plot'
import UofByOfficerSexRacePlot from './uof-by-officer-sex-race-plot'
import UofByOfficerFemaleRacePlot from './uof-by-officer-female-race-plot'
import UofByOfficerMaleRacePlot from './uof-by-officer-male-race-plot'

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

	renderUofBySexRace() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by officer sex and race</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Male officers were 10 times more likely to use force.</li>
							<li>Of male officers, white males were far more likely to use force, followed by Black males.</li>
							<li>Black female officers used slightly more force than white female officers.</li>
							<li>In 2018, white male officers account for 15 more UOF than all other officers combined, though they make up less than 50% of NOPD. These statistics are nearly identical to 2017’s data.</li>
						</ul>
					</Col>
					<Col>
						<UofByOfficerSexRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<UofByOfficerFemaleRacePlot />
					</Col>
					<Col>
						<UofByOfficerMaleRacePlot />
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
				{this.renderUofBySexRace()}
			</div>
		)
	}
}

export default OfficerDemographicsSection
