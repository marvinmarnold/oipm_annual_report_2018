import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import MediationOfficerRacePlot from './mediation-officer-race-plot'
import MediationCivilianRacePlot from './mediation-civilian-race-plot'
import MediationOfficerSexPlot from './mediation-officer-sex-plot'
import MediationCivilianSexPlot from './mediation-civilian-sex-plot'

class MediationDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="mediation-demographics-section">Mediation Demographics</h2></Col>
				</Row>

				<Row>
					<Col>
						<h4>Officer race</h4>
						<MediationOfficerRacePlot />
					</Col>
					<Col>
						<h4>Civilian race</h4>
						<MediationCivilianRacePlot />
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Officer gender</h4>
						<MediationOfficerSexPlot />
					</Col>
					<Col>
						<h4>Civilian gender</h4>
						<MediationCivilianSexPlot />
					</Col>
				</Row>

			</div>
		)
	}
}

export default MediationDemographicsSection
