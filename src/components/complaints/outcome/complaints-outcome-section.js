import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsByFindingPlot from './allegations-by-finding-plot'
import ComplaintsByDispositionPlot from './complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from './complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from './complaints-by-rank-disposition-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderAllegationsByFinding() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>NOPDs allegation findings</h4>


					</Col>
				</Row>
				<Row>
					<Col>
					<ul>
						<li>TODO</li>
					</ul>
					</Col>
					<Col>
						<AllegationsByFindingPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderComplaintsByDisposition() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Complaint dispositions</h4>
						<p>
							TODO: Explain how a complaint has many allegations. Each of which gets an independent finding.
							All of those findings are combined to give a single disposition.
						</p>
						<Col>
						<ul>
							<li>The dispositions of the complaints filed in 2018 are illustrated in the figure “Individual Allegations by Outcome.” This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most frequently marked “sustained”. This is consistent with 2017 findings.</li>
							<li>The largest number of complaints had an “illegitimate outcome”, meaning that there was conflicting information within the complaint, therefore yielding the outcome illegitimate. The next largest grouping was of “sustained” complaints at 18.7%. This represents a significant shift from 2017, as only 2.45% of complaints had an “illegitimate outcome” in 2017, as compared with 26% in 2018. Further, “sustained” complaints dropped from 29.2% in 2017 to 18.7% in 2018.</li>
							<li>While only 8.47% of citizen complaints are sustained, 35.7% of rank complaints are sustained, more than four times the percentage of citizen complaints.</li>
							<li>In 2018, the most common sustained allegation is “neglect of duty” at 71%, up roughly 6% from 2017.</li>
						</ul>
						</Col>
					</Col>
				</Row>
				<Row>

					<Col>
						<h4>All complaints by outcome</h4>
						<ComplaintsByDispositionPlot />
					</Col>
					<Col>
						<h4>Rank complaints by outcome</h4>
						<ComplaintsByRankDispositionPlot />
					</Col>
					<Col>
						<h4>Public complaints by outcome</h4>
						<ComplaintsByPublicDispositionPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-outcome-section">Outcome of complaints</h2></Col>
				</Row>

				{this.renderAllegationsByFinding()}
				{this.renderComplaintsByDisposition()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
