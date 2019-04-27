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
							<li>Use of force varies greatly by age group. Officers ages 26-35 account for more UOF that all other groups combined. Within the 26-30 and 31-35 groups, officers with less than 5 years experience are most likely to perpetrate UOF.</li>
							<li>The oldest (51&lt;) and youngest (25&gt;) NOPD officers are least likely to use UOF. However, trends within the oldest group differed greatly from those in the aforementioned groups. In the 51+ category, most UOF is performed by officers with 16+ years of experience.</li>
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
							<li>Male officers were 10 times more likely to use force.</li>
							<li>Of male officers, white males were far more likely to use force, followed by Black males. On trend with other departments, white male officers are more likely to engage in UOF, particularly regarding Black male subjects <a href="#ref-17-white">[17]</a>.</li>
							<li>Black female officers used slightly more force than white female officers.</li>
							<li>In 2018, white male officers account for 15 more UOF than all other officers combined, though they make up less than 50% of NOPD. These statistics are nearly identical to 2017’s data.</li>
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

						<ul>
							<li>Both female and male officers were most likely to have their firearm exhibited or hands/escort tech. Usage appears proportional to female officer race, but not male.</li>
							<li>Since 2017, firearm exhibited and hands/escort tech are most popular UOF. However, taser exhibition has decreased significantly to just 17 UOF total in 2018.</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Female officers</h6>
						<UofByOfficerMaleTypeRacePlot />
					</Col>
					<Col>
						<h6>Male officers</h6>
						<UofByOfficerFemaleTypeRacePlot />
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
