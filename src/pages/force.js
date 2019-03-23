import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import UofByYearPlot from '../components/force/uof-by-year-plot'
import ForceIntroduction from '../components/force/force-introduction'
import ForceTime from '../components/force/force-time'

const Force = () => (
  <Layout>
    <SEO title="Use of Force - 2018 OIPM Annual Report" />

		<Container fluid>
			<Row>
				<Col>
					<h1 className="my-5 text-center">Use of Force Analysis</h1>
				</Col>
			</Row>

			<Row>
				<Col className="col-3">
					<Nav vertical>
						<NavItem>
	            <NavLink href="#force-introduction">Introduction &amp; terms</NavLink>
	          </NavItem>
						<NavItem>
	            <NavLink href="#force-time">Force over time</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink href="#force-type-level">Force by type and level</NavLink>
	          </NavItem>
	        </Nav>
				</Col>

				<Col className="col-9">
					<ForceIntroduction />
					<ForceTime />
				</Col>
			</Row>

		</Container>
  </Layout>
)

export default Force
