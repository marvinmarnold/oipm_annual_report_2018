import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsHighlightsBib from '../components/complaints/complaints-highlights-bib'

import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'

class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = {
		}
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#complaints-by-year" className="text-white">Complaints and allegations by year</NavLink>
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
						<p>Complaints and allegations both appeared to have a slight decrease in 2018 compared with 2017. This appears to be on trend with other United States police departments of similar size, which are experiencing stagnation in complaints or decreases <a href="#ref-1-boulder">[1]</a>. Given that complaint decreases are taking place in metropolitan police departments across the U.S., this may indicate a universal reform in policing over the past few years.  Some have posited that the decreased is due to political and social pressure.</p>
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
						<ComplaintsHighlightsBib />
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
