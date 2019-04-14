import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByEffectivenessPlot from './uof-by-effectiveness-plot'
import UofByDispositionPlot from './uof-by-disposition-plot'
import UofByOfficerInjuryPlot from './uof-by-officer-injury-plot'
import UofByPublicInjuryPlot from './uof-by-public-injury-plot'

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

	renderUofByOfficerInjury() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Officer injuries</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>Officers were only injured by UOF 15% of the time.</li>
							<li>Officer injures increased by 1.5% since 2017.</li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByOfficerInjuryPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByPublicInjury() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Members of public injuries</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>Non-officers were injured by UOF 18.7% of the time.</li>
							<li>Individual injures were down 3.6% from 2017.</li>
							<li>The percentage of individual injuries related to UOF appears lower than in some other municipalities, for instance DCPD with 55%. This may indicate that when force is used by NOPD, officers use techniques that do not harm civilians or that the department may be underreporting injuries.</li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByPublicInjuryPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByDisposition() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by disposition</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>NOPD added new categories. May want to verify the cases of "No force used"</li>
							<li>Since NOPD categories have changed, determining factors in UOF remains unclear.</li>
							<li>NOPD indicated that force is overwhelmingly justified. Given the number of complaints against NOPD officers, this data remains questionable.</li>
							<li>Further, NOPD claims that force is “not justified” just 1.5% of the time.  </li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByDispositionPlot />
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
				{this.renderUofByDisposition()}
				{this.renderUofByOfficerInjury()}
				{this.renderUofByPublicInjury()}
			</div>
		)
	}
}

export default ForceOutcomeSection
