import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import OfficersIntroductionSection from '../components/officers/officers-introduction-section'
import OfficersDemographicsSection from '../components/officers/demographics/officers-demographics-section'

const OfficersPage = () => (
	<Page
		title={"Officers - 2018 OIPM Annual Report"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#officers-introduction-section" className="text-white">Introduction &amp; terms</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#officers-demographics-section" className="text-white">Officer demographics</NavLink>
				</NavItem>
			</Nav>
		}
		body={
			<div>
				<Row>
					<Col>
						<h1 className="my-5 text-center">NOPD Officer Details</h1>
					</Col>
				</Row>

				<OfficersIntroductionSection />
				<OfficersDemographicsSection />

			</div>
		}
		/>
)

export default OfficersPage
