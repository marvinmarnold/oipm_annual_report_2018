import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"

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

	renderFourth() {
		return (
			<div id="complaints-fourth">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 13: FOURTH AMENDMENT COMPLAINTS</h5>
						<AllegationsFourthByDescriptionPlot />

						<h5 className="text-center">FIGURE 14: FOURTH AMENDMENT ALLEGATIONS BY OUTCOME</h5>
						<AllegationsFourthByDescriptionFindingPlot />

						<p>Search and seizure and handcuffing and restraint were the two high risk allegations that composed Fourth
Amendment allegations. According to NOPD data, illegal search and seizure was more prevalent than
handcuffing and restraints in 2018 at 85.4% of allegations. There were 29 total Fourth Amendment sustained
allegations in 2018.</p>
						<p>Furthermore, NOPD’s data does not make is easy to identify possible 4 th Amendment related allegations.
Moving forward, NOPD and OIPM will work on this issue together.</p>
						<p>The outcomes of Fourth Amendment allegations were relatively similar for both search and seizure and
handcuffing and restraint. In both instances, the number of sustained allegations matches that of those
exonerated. This is a slight deviation from 2017, when exonerations were nearly twice as likely as sustained
allegations. These findings may indicate a greater accountability mechanism in the department.</p>
					</Col>
				</Row>
			</div>

		)
	}

	render() {
		return (
			<Page
				title={"4th amendment complaints"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderFourth()}

						<Row className="text-center">
							<Col className="py-5">
								<Button size="lg" color="secondary" className="mx-3 my-2"><a href="/complaints-analysis" className="text-white">&lt; Previous: Complaints analysis</a></Button>
								<Button size="lg" color="success" className="my-2"><a href="/complaints-anonymous" className="text-white">Next: Anonymous complaints ></a></Button>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
