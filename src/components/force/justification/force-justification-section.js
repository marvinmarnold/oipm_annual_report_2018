import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByReasonPlot from './uof-by-reason-plot.js'
import FirearmUofByReasonPlot from './firearm-uof-reason-plot.js'
import UofByPrecedingPlot from './uof-by-preceding-plot.js'

class ForceJustificationSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason for force</h4>
						<ul>
							<li>For the second year in a row, resisting arrest in the most common reason for force at 50%, followed by refusing verbal commands at 18.2%.</li>
							<li>The other category decreased notably from 18.9% in 2017 to 6.5% in 2018.</li>
							<li>In other Washington D.C., for example, subjects assaulted officers or were impaired by drugs or alcohol in 37% of instances <a href="#ref-12-dc-force">[12]</a>. Upon reviewing UOF statistics information from other police departments, it remains unclear as to whether “refusing verbal commands” is a justifiable reason for UOF <a href="#ref-13-co-justified">[13]</a>.</li>
							<li>Some other departments also take into consideration whether a subject is exhibiting possible signs of mental illness into account in deciding if UOF is appropriate or justified <a href="#ref-14-mental">[14]</a>.</li>
						</ul>

						<p id="ref-12-dc-force">[12] - Government of the District of Colombia, Police Complaint Board, Office of Police Complaints, <a href="https://policecomplaints.dc.gov/node/1391936">Report on Use of Force by the Washington, D.C Metropolitan Police Department 2018</a>, page 20</p>

						<p id="ref-13-co-justified">[1] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 9</a>, accessed April 9, 2019.</p>

						<p id="ref-14-mental">[14] - Government of the District of Colombia, Police Complaint Board, Office of Police Complaints, <a href="https://policecomplaints.dc.gov/node/1391936">Report on Use of Force by the Washington, D.C Metropolitan Police Department 2018</a>, page 20</p>
					</Col>
					<Col>
						<UofByReasonPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderFirearmUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason firearm exhibited</h4>
						<ul>
							<li>Weapon exhibited was not the most common reason for exhibiting a firearm; it only represented 14.9% of total reasons.</li>
							<li>The top three reasons for exhibiting firearms are flight from an officer, tactical deployments, and resisting lawful arrest.</li>
							<li>Other represented 10.4% of reason for exhibiting a firearm, down from 30% in 2017 and over 50% in 2016.</li>
						</ul>
					</Col>
					<Col>
						<FirearmUofByReasonPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByPreceding() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Before the use of force</h4>
						<ul>
							<li>More than 75% of instances that preceded force were call for service or arresting.</li>
							<li>While traffic stops were the third most common event to precede force in 2017, it was the fifth most common in 2018 with just 4.42%.</li>
							<li>In addition to what preceded force, some other police departments indicate what action followed UOF. In Boulder, for example, UOF only led to arrest 8% of the time <a href="#ref-15-co-arrest">[15]</a>.</li>
						</ul>

						<p id="ref-15-co-arrest">[1] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 8</a>, accessed April 9, 2019.</p>
					</Col>
					<Col>
						<UofByPrecedingPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-justification-section">Justification for force</h2></Col>
				</Row>

				{this.renderUofByReason()}
				{this.renderFirearmUofByReason()}
				{this.renderUofByPreceding()}

			</div>
		)
	}
}

export default ForceJustificationSection
