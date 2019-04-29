import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByOfficerAgeExpPlot from './uof-by-officer-age-exp-plot'
import UofByOfficerSexRacePlot from './uof-by-officer-sex-race-plot'
import UofByOfficerFemaleRacePlot from './uof-by-officer-female-race-plot'
import UofByOfficerMaleRacePlot from './uof-by-officer-male-race-plot'
import UofByOfficerFemaleTypeRacePlot from './uof-by-officer-female-type-race-plot'
import UofByOfficerMaleTypeRacePlot from './uof-by-officer-male-type-race-plot'

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
							<li>Use of force varies greatly by age group. Officers ages 26-35 account for more UOF that all other groups combined but are only 24% of officers. Within the 26-30 and 31-35 groups, officers with less than 5 years experience are most likely to perpetrate UOF.</li>
							<li>The oldest (51&lt;) NOPD officers are least likely to use UOF. They account for over 30% of officers but are the second least forceful group.</li>
							<li>Although the youngest officers have a low number of force incidents in absolute terms, they only comprise 4% of officers. Relative to the number of officers, the youngest officers do use a disproportionate amount of force.</li>
							<li>Starting around age 30, many officers with more than 5 years of experience use force at non-negligible rates.</li>
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
						<h4>Force (UOF) by officer gender and race</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>There are 3.5X more male officers than females. But male officers account for 9.5X the amount of force as female officers.</li>
							<li>There is about the same number of black male and white male officer. White males use 1.5X the force as black males. On trend with other departments, white male officers are more likely to engage in UOF, particularly regarding Black male subjects <a href="#ref-17-white">[17]</a>.</li>
							<li>In 2018, white male officers account for 15 more UOF than all other officers combined, though they make up less than 50% of NOPD. These statistics are nearly identical to 2017’s data.</li>
							<li>Black female officers used slightly more force than white female officers. But there are substantially more black female officers than white female officers so their use of force is proportional.</li>
						</ul>

						<p id="ref-17-white">[16] - Chicago Police Department, <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual, p. 104</a>, accessed April 9, 2019.</p>
					</Col>
					<Col>
						<UofByOfficerSexRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Female officers</h6>
						<UofByOfficerFemaleRacePlot />
					</Col>
					<Col>
						<h6>Male officers</h6>
						<UofByOfficerMaleRacePlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByTypeSexRace() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Type of force by officer race and gender</h4>
						<p>Already mentioned trends are apparent here</p>
						<ul>
							<li>Males use more force than females.</li>
							<li>White males use force disproportionately compared to black males.</li>
							<li>Black females use more force than white females but do so proportionally.</li>
							<li>Firearm exhibition is popular among both genders.</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Female officers</h6>
						<UofByOfficerFemaleTypeRacePlot />
					</Col>
					<Col>
						<h6>Male officers</h6>
						<UofByOfficerMaleTypeRacePlot />
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
				{this.renderUofByTypeSexRace()}
			</div>
		)
	}
}

export default OfficerDemographicsSection
