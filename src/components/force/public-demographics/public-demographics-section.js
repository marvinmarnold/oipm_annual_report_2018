import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByPublicSexRacePlot from './uof-by-public-sex-race-plot'
import UofByPublicFemaleRacePlot from './uof-by-public-female-race-plot'
import UofByPublicMaleRacePlot from './uof-by-public-male-race-plot'
import UofByPublicFemaleTypeRacePlot from './uof-by-public-female-type-race-plot'
import UofByPublicMaleTypeRacePlot from './uof-by-public-male-type-race-plot'

class PublicDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByTypeSexRace() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Type of force by individual sex and gender</h4>

						<ul>
							<li>Both Black women and Black men experience the highest levels of most types of UOF.</li>
							<li>While only Black females were subjected to baton/pr-24 (strikes), defense tech/take-down, L2-taser, and take-down (w/ injury), only white females had canine (no bite) UOF.</li>
							<li>While white males made up all L4-taser UOF, while Black males experienced nearly all other UOF at the highest rates.</li>
							<li>Therefore, UOF by type and race is alarmingly similar to 2017, however firearm exhibition has decreased significantly overall.</li>
						</ul>
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
						<h4>Force (UOF) by officer age and years of experience</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Black men were approximately 17 times more likely to have UOF used against them. Black females were also more likely than any other race/gender combination, except for Black males, to have force used against them.</li>
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

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-public-demographics-section">Demographics of public</h2></Col>
				</Row>

				{this.renderUofBySexRace()}
				{this.renderUofByTypeSexRace()}
			</div>
		)
	}
}

export default PublicDemographicsSection
