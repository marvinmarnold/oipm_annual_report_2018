import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UofByYearPlot from '../components/plots/uof-by-year-plot'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
				`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
				`oversight`, `data`, `analysis`, `annual report`, `2018`
			]} />

		<UofByYearPlot />

  </Layout>
)

export default IndexPage
