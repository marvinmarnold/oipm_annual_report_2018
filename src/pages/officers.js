import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import OfficersIntroductionSection from '../components/officers/officers-introduction-section'
import OfficersDemographicsSection from '../components/officers/demographics/officers-demographics-section'

const OfficersPage = () => (
  <Layout>
    <SEO title="Officers - 2018 OIPM Annual Report" />

		<Container fluid>
			<Row>
				<Col className="col-2 bg-secondary">
					<h4 className="mt-5">Jump to...</h4>
					<Nav className="mt-4" vertical>
						<NavItem>
	            <NavLink href="#officers-introduction-section" className="text-white">Introduction &amp; terms</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#officers-demographics-section" className="text-white">Officer demographics</NavLink>
	          </NavItem>
	        </Nav>
				</Col>

				<Col className="col-10">
					<Row>
						<Col>
							<h1 className="my-5 text-center">NOPD Officer Details</h1>
						</Col>
					</Row>

					<OfficersIntroductionSection />
					<OfficersDemographicsSection />

				</Col>
			</Row>

		</Container>
  </Layout>
)

export default OfficersPage
