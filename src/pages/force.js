import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ForceIntroductionSection from '../components/force/force-introduction-section'
import ForceTimeSection from '../components/force/time/force-time-section'
import ForceTypeLevelSection from '../components/force/type-level/force-type-level-section'
import ForceOutcomeSection from '../components/force/outcome/force-outcome-section'

import './force.css'

const Force = () => (
  <Layout>
    <SEO title="Use of Force - 2018 OIPM Annual Report" />

		<Container fluid>
			<Row>
				<Col className="col-2 bg-secondary">
					<h4 className="mt-5">Jump to...</h4>
					<Nav className="mt-4" vertical>
						<NavItem>
	            <NavLink href="#force-introduction-section" className="text-white">Introduction &amp; terms</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#force-time-section" className="text-white">Force over time</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#force-type-level-section" className="text-white">Force by type and level</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#force-outcome-section" className="text-white">Force by outcome</NavLink>
	          </NavItem>
	        </Nav>
				</Col>

				<Col className="col-10">
					<Row>
						<Col>
							<h1 className="my-5 text-center">Use of Force Analysis</h1>
						</Col>
					</Row>

					<ForceIntroductionSection />
					<ForceTimeSection />
					<ForceTypeLevelSection />
					<ForceOutcomeSection />
				</Col>
			</Row>

		</Container>
  </Layout>
)

export default Force
