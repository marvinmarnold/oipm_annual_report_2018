import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByYearPlot from './uof-by-year-plot'
import FtnByYearPlot from './ftn-by-year-plot'
import ForceByMonthPlot from './force-by-month-plot'

class ForceTime extends React.Component {
	constructor() {
		super()
	}

	renderUofByYear() {
		return (
			<div id="uof-year">
				<Row>
					<h4>Amount of force used by year (UOF)</h4>
				</Row>
				<Row>
					<Col className="col-4">
						<ul>
							<li>There were 1108 UOF in 2018, down significantly from 1574 in 2017. The number of FTN in 2018 was 438, resulting in a decrease of 166 since 2017.</li>
							<li>Data and NOPD data for FTN and UOF are not consistent for 2018. Both sets of data were consonant in 2017, however there were slight discrepancies between the sets in the 2016 analysis. Retroactive data shown in the chart for years prior to 2016 is supplied using.</li>
						</ul>
					</Col>
					<Col className="col-8">
						<UofByYearPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderFtnByYear() {
		return (
			<div id="ftn-year">
				<Row>
					<h4>Incidents involving force by year (FTN)</h4>
				</Row>
				<Row>
					<Col className="my-4">
						<ul>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014. However, force spiked between 2014 and 2015. From 2015 to 2016, UOF increased while FTN decreased. In 2017, both FTN and UOF increased. Notably, both UOF and FTN experienced sharp declines in 2018. </li>
						</ul>
					</Col>
					<Col className="col-8">
						<FtnByYearPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderForceByMonth() {
		return (
			<div id="force-month">
				<Row>
					<h4>Force by month</h4>
				</Row>
				<Row>
					<Col className="my-4">
						<ul>
							<li>Figure 2 clarifies the relationship between FTN and UOF. On average, there has been a marginal decrease in UOF per FTN per month from 2017 to 2018.</li>

							<li>While both UOF and FTN peaked in August of 2017, only the spike in UOF in August remained consistent in 2018. April, May, June, and August were months when the UOF was substantially higher than the median of 82. The average of UOF/FTN was approximately 2.5 in 2018, compared with roughly 2.7 in 2017.</li>
						</ul>
					</Col>
					<Col className="col-8">
						<ForceByMonthPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<h2 id="force-time">Force over time</h2>
				</Row>

				{this.renderUofByYear()}
				{this.renderFtnByYear()}
				{this.renderForceByMonth()}
			</div>
		)
	}
}

export default ForceTime
