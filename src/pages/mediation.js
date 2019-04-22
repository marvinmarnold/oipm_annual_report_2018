import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"

import MediationDemographicsSection from '../components/mediation/demographics/mediation-demographics-section'

const MediationPage = () => (
	<Page
		title={"Mediation - 2018 OIPM Annual Report"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#mediation-demographics-section" className="text-white">Participant demographics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#mediation-survey-section" className="text-white">Survey results</NavLink>
				</NavItem>
			</Nav>
		}
		body={
			<div>
				<Row>
					<Col>
						<h1 className="my-5 text-center">Mediation Program</h1>
					</Col>
				</Row>

				<MediationDemographicsSection />

			</div>
		}
		/>
)

export default MediationPage
