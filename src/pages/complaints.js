import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComplaintsIntroductionSection from '../components/complaints/complaints-introduction-section'
import ComplaintsTimeSection from '../components/complaints/time/complaints-time-section'

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

				</Col>
			</Row>

		</Container>
  </Layout>
)

export default ComplaintsPage
