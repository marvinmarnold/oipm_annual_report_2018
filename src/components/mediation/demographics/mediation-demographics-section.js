import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import MediationOfficerRacePlot from './mediation-officer-race-plot'

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

			</div>
		)
	}
}

export default MediationDemographicsSection
