import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found: 2018 OIPM Annual Report " />
		<Container className="text-center">
			<Row>
				<Col>
					<h1 className="mt-5">PAGE NOT FOUND</h1>
					<h5 className="mt-3">Try going back to the <Link to="/">homepage</Link>.</h5>
				</Col>
			</Row>
		</Container>
  </Layout>
)

export default NotFoundPage
