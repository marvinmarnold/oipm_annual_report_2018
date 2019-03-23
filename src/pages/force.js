import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import UofByYearPlot from '../components/force/uof-by-year-plot'
import ForceIntroduction from '../components/force/force-introduction'
import ForceTime from '../components/force/force-time'

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
	            <NavLink href="#force-introduction" className="text-white">Introduction &amp; terms</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#force-time" className="text-white">Force over time</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink href="#force-type-level" className="text-white">Force by type and level</NavLink>
	          </NavItem>
	        </Nav>
				</Col>

				<Col className="col-10">
					<Row>
						<Col>
							<h1 className="my-5 text-center">Use of Force Analysis</h1>
						</Col>
					</Row>

					<ForceIntroduction />
					<ForceTime />
				</Col>
			</Row>

		</Container>
  </Layout>
)

export default Force
