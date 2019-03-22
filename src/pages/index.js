import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Plot from 'react-plotly.js';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
				`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
				`oversight`, `data`, `analysis`, `annual report`, `2018`
			]} />

			<Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
