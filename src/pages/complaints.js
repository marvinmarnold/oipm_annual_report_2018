import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsIntroductionSection from '../components/complaints/complaints-introduction-section'
import ComplaintsTimeSection from '../components/complaints/time/complaints-time-section'
import ComplaintsOutcomeSection from '../components/complaints/outcome/complaints-outcome-section'
import ComplaintsSourceSection from '../components/complaints/source/complaints-source-section'
import ComplaintsFourthSection from '../components/complaints/fourth/complaints-fourth-section'
import ComplaintsDisciplineSection from '../components/complaints/discipline/complaints-discipline-section'

const ComplaintsPage = () => (
	<Page
		title={"Complaints Raw Analysis - 2018 OIPM Annual Report"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#complaints-introduction-section" className="text-white">Introduction &amp; terms</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-time-section" className="text-white">Complaints over time</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-outcome-section" className="text-white">Outcome of complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-source-section" className="text-white">Who complains</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-fourth-section" className="text-white">4th amendment violations</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-discipline-section" className="text-white">Discipline</NavLink>
				</NavItem>
			</Nav>
		}
		body={
			<div>
				<Row>
					<Col>
						<h1 className="mt-5 text-center">Complaints &amp; Misconduct</h1>
						<h2 className="mb-5 text-center">Raw Data Analysis</h2>
					</Col>
				</Row>

				<ComplaintsIntroductionSection />
				<ComplaintsTimeSection />
				<ComplaintsOutcomeSection />
				<ComplaintsSourceSection />
				<ComplaintsFourthSection />
				<ComplaintsDisciplineSection />

			</div>
		}
	/>
)

export default ComplaintsPage
