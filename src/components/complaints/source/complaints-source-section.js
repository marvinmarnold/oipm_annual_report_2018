import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsBySourcePlot from './allegations-by-source-plot'
import ComplaintsBySourceDispositionPlot from './complaints-by-source-disposition-plot'
import ComplaintsByAnonymousPlot from './complaints-by-anonymous-plot'

class ComplaintsSourceSection extends React.Component {
	constructor() {
		super()
	}

	renderBySource() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<ul>
							<li>The public initiates roughly 1.5 times the number of complaints than does rank, however rank complaints are sustained more frequently.</li>
							<li>Citizen and rank complaint numbers both decrease slightly from 2017 to 2018. </li>
						</ul>
					</Col>
					<Col>
						<h4>Allegations by source</h4>
						<AllegationsBySourcePlot />
					</Col>
					<Col>
						<h4>Disposition by source</h4>
						<ComplaintsBySourceDispositionPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderByAnonymous() {
		return (
			<div className="my-3">

				<Row>
					<Col>
						<h4>Anonymous complaints</h4>
						<ul>
							<li>Of the three anonymous complaints in 2018, two remain pending; the third was found to have “no formal investigation merited.” These findings are similar to those from 2017, where only 1 of 10 anonymous complaints was sustained.</li>
						</ul>
					</Col>
					<Col>
						<ComplaintsBySourceDispositionPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-source-section">Who complains</h2></Col>
				</Row>

				{this.renderBySource()}
				{this.renderByAnonymous()}
			</div>
		)
	}
}

export default ComplaintsSourceSection
