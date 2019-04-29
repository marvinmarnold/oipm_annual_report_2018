import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByPublicSexRacePlot from './uof-by-public-sex-race-plot'
import UofByPublicFemaleRacePlot from './uof-by-public-female-race-plot'
import UofByPublicMaleRacePlot from './uof-by-public-male-race-plot'
import UofByPublicFemaleTypeRacePlot from './uof-by-public-female-type-race-plot'
import UofByPublicMaleTypeRacePlot from './uof-by-public-male-type-race-plot'
import BlackDisparitiesByMonthPlot from './black-disparities-by-month-plot'
import BlackDisparitiesByDistrictPlot from './black-disparities-by-district-plot'

class PublicDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByTypeSexRace() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Type of force by individual race and gender</h4>

						<ul>
							<li>Both Black women and Black men experience the highest levels of most types of UOF. The Journal of Ethics recently reported that Black women are perceived to experience pain at a lesser rate than White women. Is it then possible that Black women are experiencing more UOF than White women because officers believe that Black women will not experience as much pain?</li>
							<li>While only Black females were subjected to baton/pr-24 (strikes), defense tech/take-down, L2-taser, and take-down (w/ injury), only white females had canine (no bite) UOF.</li>
							<li>While white males made up all L4-taser UOF, while Black males experienced nearly all other UOF at the highest rates.</li>
							<li>Therefore, UOF by type and race is alarmingly similar to 2017, however firearm exhibition has decreased significantly overall.</li>
							<li>This is consistent with findings in other police departments—that Black men disproportionately experience UOF <a href="#ref-16-uof-black">[16]</a>. Moreover, 2017 studies from the American Psychological Association showed that Black men are perceived as more threatening than White men of similar size. The disparities in policing in gender and race could be due to the implicit bias of officers, ensuring that Black men are most negatively impacted.</li>
						</ul>

							<p id="ref-16-uof-black">[16] - Chicago Police Department, <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual, p. 104</a>, accessed April 9, 2019.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<UofByPublicFemaleTypeRacePlot />
					</Col>
					<Col>
						<UofByPublicMaleTypeRacePlot />
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
						<h4>Force (UOF) by gender and race of community member</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Black men were approximately 6 times more likely to have UOF used against them than all other males.</li>
							 <li>Black females were 4 times more likely to have force useg against them than all other women.</li>
							<li>For the second year in a row, white females were more likely to experience UOF than white males.</li>
						</ul>
					</Col>
					<Col>
						<UofByPublicSexRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<UofByPublicFemaleRacePlot />
					</Col>
					<Col>
						<UofByPublicMaleRacePlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderBlackDisparities() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Disparities in the policing of black people</h4>
						<p>Stops & searches, as well as UOF, disproportionately negatively impact Black people. Other departments analyzed, such as the Metropolitan Police Department (Washington DC) and Chicago Police Department, suggest that increased community policing and increased and improved officer training could begin to remedy disparities in the policing of Black people <a href="#ref-18-black">[18]</a>. Further, implicit bias and anti-oppression trainings are two concrete steps toward addressing the over-policing of Black people in New Orleans. </p>

					<p id="ref-18-black">[4] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 2</a>, accessed April 9, 2019.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Race disparities by month</h6>
						<BlackDisparitiesByMonthPlot />
					</Col>
					<Col>
						<h6>Race disparities by district</h6>
						<p>Note: Currently missing OPSO data required to show arrests.</p>
						<BlackDisparitiesByDistrictPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-public-demographics-section">Demographics of public</h2></Col>
				</Row>

				{this.renderUofBySexRace()}
				{this.renderUofByTypeSexRace()}
				{this.renderBlackDisparities()}
			</div>
		)
	}
}

export default PublicDemographicsSection
