import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsHighlightsBib from '../components/complaints/complaints-highlights-bib'

// Time
import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'

// Allegations
import AllegationsMostCommonPlot from '../components/complaints/allegations-most-common-plot'
import AllegationsByFindingPlot from '../components/complaints/outcome/allegations-by-finding-plot'
import AllegationsSustainedMostCommonPlot from '../components/complaints/outcome/allegations-sustained-most-common-plot'
import AllegationsBySourcePlot from '../components/complaints/source/allegations-by-source-plot'

// Complaints
import ComplaintsByDispositionPlot from '../components/complaints/outcome/complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from '../components/complaints/outcome/complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from '../components/complaints/outcome/complaints-by-rank-disposition-plot'
import ComplaintsBySourceDispositionPlot from '../components/complaints/source/complaints-by-source-disposition-plot'
import ComplaintsByOfficerRaceDispositionPlot from '../components/complaints/outcome/complaints-by-officer-race-disposition-plot'

// Fourth
import AllegationsFourthByDescriptionPlot from '../components/complaints/fourth/allegations-fourth-by-description-plot'
import AllegationsFourthByDescriptionFindingPlot from '../components/complaints/fourth/allegations-fourth-by-description-finding-plot'


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
					<NavLink href="#allegations-outcomes" className="text-white">Allegation analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-outcomes" className="text-white">Complaint analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-fourth" className="text-white">4th amendment complaints</NavLink>
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
						<h4>Allegation Analysis</h4>
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

						<p>This classification of each allegation is complimentary to and consistent with the Public vs Rank Initiated classification that each allegation also receives. 55.5% of allegations come from community members while 62% of allegations are Public Initiated.</p>
						<AllegationsBySourcePlot />
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
						<h4>Complaint Analysis</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>The largest grouping was of “sustained” complaints at 29.3%. This is almost the identical rate from 2017.</p>

						<p>While 14.6% of citizen complaints are sustained (15.6% in 2017), 53.7% of rank complaints are sustained (50.7% in 2017), more than three times the percentage of citizen complaints.</p>

						<p>In New Orleans, the public initiates roughly 1.5 times the number of complaints than does rank. In police departments across the US, citizen complaints often represent the majority of complaints but are the least often sustained <a href="#ref-3-sustained">[3]</a>. There are different conclusions that can be drawn from this trend.  Rank initiated complaints may orientate from a civilian interaction or an interaction within the NOPD between officers or employees.  At this time, the data does not differentiate whether the rank initiated a complaint for a civilian interaction or an interaction within the NOPD.</p>
					</Col>
				</Row>
				<Row>
					<Col sm="6" lg="4" xl="3">
						<h6>All Complaints by Outcome</h6>
						<ComplaintsByDispositionPlot />
					</Col>
					<Col sm="6" lg="4" xl="3">
						<h6>Rank Complaints by Outcome</h6>
						<ComplaintsByRankDispositionPlot />
					</Col>
					<Col sm="6" lg="4" xl="3">
						<h6>Public Complaints by Outcome</h6>
						<ComplaintsByPublicDispositionPlot />
					</Col>
					<Col sm="6" lg="4" xl="3">
						<h6>Public and Rank Complaints by Outcome</h6>
						<ComplaintsBySourceDispositionPlot />
					</Col>
				</Row>

				<Row>
					<Col>
						<h6>Complaint Outcomes by Officer Race</h6>
						<p>According to NOPD data, sustained complaints appear to be consistent with officer race demographics. However, officers classified as African American / Black have a higher rate of participation in mediation.  The, OIPM cannot draw a definitive conclusion from this data but the OIPM questions whether social dynamics are at play between the heavily African American communities that may have a higher police presence and the African American officers responsible for policing that community.  In other words, do African American / Black officers have a greater inclination to reconcile with residents, as they are more likely to come from the same or similar neighborhoods as their complainants?  The OIPM would like to answer that question in future reports.
						</p>
						<ComplaintsByOfficerRaceDispositionPlot />
					</Col>
				</Row>

			</div>
		)
	}

	renderFourth() {
		return (
			<div id="complaints-fourth">
				<Row>
					<Col>
						<h4>4th Amendment Complaints</h4>
						<p>Search and seizure and handcuffing and restraint were the two high risk allegations that composed Fourth Amendment complaints or allegations. According to NOPD data, illegal search and seizure was more prevalent this year at 60% of Fourth Amendment allegations. There were 10 total Fourth Amendment sustained complaints or allegations in 2018. This is an improvement from 2017, where there were 45 total sustained complaints or allegations. While New Orleans is improving, and doing better than some other major police departments, like Chicago who experienced an increase, ideally there should be no Fourth Amendment allegations at this phase of the Consent Decree monitoring.</p>

						<p>Furthermore, NOPD’s data does not make is easy to identify possible 4th Amendment related complaints. OIPM is not confident that this apparent decrease reflects a true change in 4th Amendment complaints.</p>

						<p>The outcomes of Fourth Amendment allegations were relatively similar for both search and seizure and handcuffing and restraint. In both instances, the number of sustained complaints matches that of those exonerated. This is a slight deviation from 2017, when exonerations were nearly twice as likely as sustentions. These findings may indicate a greater accountability mechanism in the department.</p>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<h6>Types of 4th Amendment Complaints</h6>
						<AllegationsFourthByDescriptionPlot />
					</Col>
					<Col md="6">
						<h6>Outcome of 4th Amendment Complaints</h6>
						<AllegationsFourthByDescriptionFindingPlot />
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
						{this.renderFourth()}
						<ComplaintsHighlightsBib />
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
