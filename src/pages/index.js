import React from "react"
import { Container, Row, Col } from 'reactstrap';

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import UofByYearPlot from '../components/plots/uof-by-year-plot'

const IndexPage = () => (
  <Layout>
    <SEO title="2018 OIPM Annual Report" keywords={[
				`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
				`oversight`, `data`, `analysis`, `annual report`, `2018`
			]} />

		<Container fluid>
			<Row className="text-center">
				<Col>
					<h1 className="mt-5">2018 Annual Report</h1>
					<h2>New Orleans Office of the Independent Police Monitor (OIPM)</h2>
				</Col>
			</Row>
		</Container>
  </Layout>
)

export default IndexPage
