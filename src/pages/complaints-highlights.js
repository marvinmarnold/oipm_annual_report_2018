import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsHighlightsBib from '../components/complaints/complaints-highlights-bib'

// Time
import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'

class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="/complaints-highlights" className="text-white">Complaints and allegations by year</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/allegations-analysis" className="text-white">Allegation analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-analysis" className="text-white">Complaint analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-fourth" className="text-white">4th amendment complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-anonymous" className="text-white">Anonymous complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-discipline" className="text-white">Discipline</NavLink>
				</NavItem>
			</Nav>
		)
	}

	renderOverTime() {
		return (
			<div id="complaints-by-year">
				<Row>
					<Col>
						<h4>Complaints &amp; Allegations by Year</h4>
						<p>Complaints appear to have slight decrease in 2018 and 2017 compared with 2016. This appears to be on
trend with other United States police departments of similar size, which are experiencing stagnation in
complaints or decreases. Given that complaint decreases are taking place in metropolitan police departments
across the U.S., this may indicate a universal reform in policing over the past few years.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 2: COMPLAINTS BY YEAR</h5>

						<ComplaintsByYearTypePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 3: ALLEGATIONS BY YEAR</h5>
						<AllegationsByYearTypePlot />

					</Col>

				</Row>
			</div>
		)
	}
	render() {
		return (
			<Page
				title={"Complaints and allegations by year"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderOverTime()}

						<Row className="text-center">
							<Col className="py-5">
								<Button size="lg" color="success" className="my-2"><a href="/allegations-analysis" className="text-white">Next: Allegations analysis ></a></Button>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
