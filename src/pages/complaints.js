import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComplaintsIntroductionSection from '../components/complaints/complaints-introduction-section'
import ComplaintsTimeSection from '../components/complaints/time/complaints-time-section'
import ComplaintsOutcomeSection from '../components/complaints/outcome/complaints-outcome-section'
import ComplaintsSourceSection from '../components/complaints/source/complaints-source-section'
import ComplaintsFourthSection from '../components/complaints/fourth/complaints-fourth-section'

const ComplaintsPage = () => (
  <Layout>
    <SEO title="Complaints - 2018 OIPM Annual Report" />

		<Container fluid>
			<Row>
				<Col className="col-2 bg-secondary">
					<h4 className="mt-5">Jump to...</h4>
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
	        </Nav>
				</Col>

				<Col className="col-10">
					<Row>
						<Col>
							<h1 className="my-5 text-center">Complaints &amp; Misconduct</h1>
						</Col>
					</Row>

					<ComplaintsIntroductionSection />
					<ComplaintsTimeSection />
					<ComplaintsOutcomeSection />
					<ComplaintsSourceSection />
					<ComplaintsFourthSection />
				</Col>
			</Row>

		</Container>
  </Layout>
)

export default ComplaintsPage
