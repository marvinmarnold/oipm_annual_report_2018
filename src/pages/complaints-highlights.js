import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsHighlightsBib from '../components/complaints/complaints-highlights-bib'

import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'
import AllegationsMostCommonPlot from '../components/complaints/allegations-most-common-plot'
import AllegationsByFindingPlot from '../components/complaints/outcome/allegations-by-finding-plot'
import AllegationsSustainedMostCommonPlot from '../components/complaints/outcome/allegations-sustained-most-common-plot'
import ComplaintsByDispositionPlot from '../components/complaints/outcome/complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from '../components/complaints/outcome/complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from '../components/complaints/outcome/complaints-by-rank-disposition-plot'


class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#complaints-by-year" className="text-white">Complaints and allegations by year</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#allegations-outcomes" className="text-white">Allegation outcomes</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-outcomes" className="text-white">Complaint outcomes</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-4th" className="text-white">4th amendment complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-anonymous" className="text-white">Anonymous complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-discipline" className="text-white">Discipline</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-bib" className="text-white">Bibliography</NavLink>
				</NavItem>
			</Nav>
		)
	}

	renderOverTime() {
		return (
			<div id="complaints-by-year">
				<Row>
					<Col>
						<h4>Complaints &amp; Allegations by Year </h4>
						<p>Complaints and allegations both appeared to have a slight decrease in 2018 compared with 2017. This appears to be on trend with other United States police departments of similar size, which are experiencing stagnation in complaints or decreases <a href="#ref-1-boulder">[1]</a>. Given that complaint decreases are taking place in metropolitan police departments across the U.S., this may indicate a universal reform in policing over the past few years.</p>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<h6>Complaints by Year</h6>
						<ComplaintsByYearTypePlot />
					</Col>
					<Col md="6">
						<h6>Allegations by Year</h6>
						<AllegationsByYearTypePlot />
					</Col>
				</Row>
			</div>

		)
	}

	renderAllegationsOutcomes() {
		return (
			<div id="allegations-outcomes">
				<Row>
					<Col>
						<h4>Allegation Outcomes</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Most common allegations</h6>
						<p>
							According to NOPD data, the two most common complaint allegations in 2018, representing roughly 75% of all allegations, were: “neglect of duty,” and “professionalism”. Similar to findings analyzed of other departments, complaints tend to originate from civilian interactions <a href="#ref-2-common">[2]</a>.
						</p>
						<p>
							Complaint allegations have shifted slightly from 2017. While “neglect of duty” and “professionalism” remained the most common allegations, the third most common switched from “instructions from an authoritative source” in 2017 to “adherence to law” in 2018. While there was not a significant percentage change in “adherence to law” allegations between 2017 and 2018, “instructions from an authoritative source” allegations decreased by almost sixty (60) instances, or over 3%.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<AllegationsMostCommonPlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>NOPD Allegation Findings</h6>
						<p>The dispositions of the complaints filed in 2018 are illustrated in the figure “Individual Allegations by Outcome.”  This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most frequently marked “sustained”. This is consistent with 2017 findings.</p>
						<AllegationsByFindingPlot />

						<h6>Most Sustained Allegations</h6>
						<p>In 2018, the most common sustained allegation is “neglect of duty” at 52%, mostly unchanged since 2017.</p>

						<AllegationsSustainedMostCommonPlot />
					</Col>
				</Row>

			</div>
		)
	}

	renderComplaintsOutcomes() {
		return (
			<div id="complaints-outcomes">
				<Row>
					<Col>
						<h4>Complaint Outcomes</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>The largest grouping was of “sustained” complaints at 29.3%. This is almost the identical rate from 2017.</p>

						<p>While 14.6% of citizen complaints are sustained (15.6% in 2017), 53.7% of rank complaints are sustained (50.7% in 2017), more than three times the percentage of citizen complaints.</p>

						<p>In police departments across the US, citizen complaints often represent the majority of complaints but are the least often sustained <a href="#ref-3-sustained">[3]</a>.  There are different conclusions that can be drawn from this trend.  Rank initiated complaints may orientate from a civilian interaction or an interaction within the NOPD between officers or employees.  At this time, the data does not differentiate whether the rank initiated a complaint for a civilian interaction or an interaction within the NOPD.</p>
					</Col>
				</Row>
				<Row>
					<Col sm="6" md="4">
						<h6>All Complaints by Outcome</h6>
						<ComplaintsByDispositionPlot />
					</Col>
					<Col sm="6" md="4">
						<h6>Rank Complaints by Outcome</h6>
						<ComplaintsByRankDispositionPlot />
					</Col>
					<Col sm="6" md="4">
						<h6>Public Complaints by Outcome</h6>
						<ComplaintsByPublicDispositionPlot />
					</Col>
				</Row>

			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Complaints - 2018 OIPM Annual Report"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">Complaints &amp; Misconduct</h1>
								<h2 className="mb-5 text-center">Annual Report Narrative</h2>
							</Col>
						</Row>

						{this.renderOverTime()}
						{this.renderAllegationsOutcomes()}
						{this.renderComplaintsOutcomes()}
						<ComplaintsHighlightsBib />
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
