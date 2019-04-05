import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsFourthByDescriptionPlot from './allegations-fourth-by-description-plot'
import AllegationsFourthByDescriptionFindingPlot from './allegations-fourth-by-description-finding-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderAllegations() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>NOPDs allegation findings</h4>

						<ul>
							<li>Search and seizure and handcuffing and restraint were the two high risk allegations the composed fourth amendment violations. Illegal search and seizure was more prevalent at 60%. There were 10 total fourth amendment violations in 2018. This is an improvement from 2017, where there were 45 total violations.</li>
							<li>The outcomes of fourth amendment violations were relatively similar for both search and seizure and handcuffing and restraint. In both instances, the number of sustained complaints matches that of those exonerated. This is a slight deviation from 2017, when exonerations were nearly twice as likely as sustentions.</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
					<ul>
						<AllegationsFourthByDescriptionPlot />
					</ul>
					</Col>
					<Col>
						<AllegationsFourthByDescriptionFindingPlot />
					</Col>
				</Row>
			</div>
		)
	}



	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-fourth-section">4th Amendment Complaints</h2></Col>
				</Row>

				{this.renderAllegations()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
