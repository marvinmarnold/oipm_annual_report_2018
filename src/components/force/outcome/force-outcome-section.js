import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByEffectivenessPlot from './uof-by-effectiveness-plot'

class ForceOutcomeSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByEffectiveness() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by effectiveness</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>NOPD self-determines effectiveness and its guidelines remain unclear.</li>
							<li>Most UOF is determined effective by NOPD.</li>
							<li>For two years in a row, baton (non-strike), L1-other, and L2-other were deemed 100% effective.</li>
							<li>In 2018, just as in 2017, L2-taser was determined to be one of the least effective UOF types. However, baton/pr-24 (strike) was determined to be least effective overall in 2018.</li>
							<li>Exhibiting firearms and tasers had limited effectiveness. </li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByEffectivenessPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-outcome-section">Force by outcome</h2></Col>
				</Row>

				{this.renderUofByEffectiveness()}
			</div>
		)
	}
}

export default ForceOutcomeSection
