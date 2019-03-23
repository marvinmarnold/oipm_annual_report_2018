import React from "react"
import { Container, Row, Col } from 'reactstrap';

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import UofByYearPlot from '../components/plots/uof-by-year-plot'

const Force = () => (
  <Layout>
    <SEO title="Use of Force - 2018 OIPM Annual Report" />

		<Container fluid>
			<Row>
				<Col>
					<h2>Use of Force</h2>
				</Col>
			</Row>
				<Row>
					<Col><UofByYearPlot /></Col>
					<Col><UofByYearPlot /></Col>
				</Row>
			</Container>
  </Layout>
)

export default Force
