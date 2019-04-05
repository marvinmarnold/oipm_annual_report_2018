import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import DisciplineByActionTakenPlot from './discipline-by-action-taken-plot'
import DisciplineByAllegationPlot from './discipline-by-allegation-plot'
import DisciplineByPublicSexPlot from './discipline-by-public-sex-plot'
import DisciplineByOfficerSexPlot from './discipline-by-officer-sex-plot'
import DisciplineByPublicRacePlot from './discipline-by-public-race-plot'
import DisciplineByOfficerRacePlot from './discipline-by-officer-race-plot'

class ComplaintsDisciplineSection extends React.Component {
	constructor() {
		super()
	}

	renderActionsTaken() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Types of discipline</h4>

						<ul>
							<li>There were roughly 20 types of disciplinary infractions alleged of NOPD officers in 2018. The top three were “neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in keeping with trends from 2017.</li>
							<li>In 2018, the most common forms of discipline were “letter of reprimand” and “suspension.” However, in 2017 the most common forms of discipline were “suspension” and “DI-2.” </li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<DisciplineByActionTakenPlot />
					</Col>
					<Col>
						<DisciplineByAllegationPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderBySex() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Discipline by sex</h4>

						<ul>
							<li>There were roughly 20 types of disciplinary infractions alleged of NOPD officers in 2018. The top three were “neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in keeping with trends from 2017.</li>
							<li>In 2018, the most common forms of discipline were “letter of reprimand” and “suspension.” However, in 2017 the most common forms of discipline were “suspension” and “DI-2.” </li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<DisciplineByPublicSexPlot />
					</Col>
					<Col>
						<DisciplineByOfficerSexPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderByRace() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Discipline by race</h4>

						<ul>
							<li>TODO</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<DisciplineByPublicRacePlot />
					</Col>
					<Col>
						<DisciplineByOfficerRacePlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-discipline-section">Discipline</h2></Col>
				</Row>

				{this.renderActionsTaken()}
				{this.renderBySex()}
				{this.renderByRace()}
			</div>
		)
	}
}

export default ComplaintsDisciplineSection
