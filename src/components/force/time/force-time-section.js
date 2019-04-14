import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByYearPlot from './uof-by-year-plot'
import FtnByYearPlot from './ftn-by-year-plot'
import ForceByMonthPlot from './force-by-month-plot'

import UofL1Plot from './type-level-year/uof-l1-plot.js'
import UofL2Plot from './type-level-year/uof-l2-plot.js'
import UofL3Plot from './type-level-year/uof-l3-plot.js'
import UofL4Plot from './type-level-year/uof-l4-plot.js'

class ForceTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByYear() {
		return (
			<div id="uof-year" className="my-3">
				<Row>
					<Col><h4>Amount of force used by year (UOF)</h4></Col>
				</Row>
				<Row>
					<Col className="col-4">
						<ul>
							<li>There were 1108 UOF in 2018, down significantly from 1574 in 2017. The number of FTN in 2018 was 438, resulting in a decrease of 166 since 2017. The trend of UOF incidents in other police departments surveyed was an increase in 2018 <a href="#ref-8-force-increase">[8]</a>.</li>
							<li>Notably, even with the increase of UOF in other cities, the overall numbers for UOF per capita in New Orleans was substantially higher than other cities. For example, Indianapolis Police Department has 896 UOF and a population of 863,000, and DC PD had 323 UOF with 694,000 residents <a href="#ref-9-force-indiana">[8]</a>.</li>
							<li>Data and NOPD data for FTN and UOF are not consistent for 2018. Both sets of data were consonant in 2017, however there were slight discrepancies between the sets in the 2016 analysis. Retroactive data shown in the chart for years prior to 2016 is supplied using.</li>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014. However, force spiked between 2014 and 2015. From 2015 to 2016, UOF increased while FTN decreased. In 2017, both FTN and UOF increased. Notably, both UOF and FTN experienced sharp declines in 2018.</li>
						</ul>

						<p id="ref-8-force-increase">[8] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 6</a>, accessed April 9, 2019.</p>

					<p id="ref-9-force-indiana">[9] - Government of the District of Colombia, Police Complaint Board, Office of Police Complaints, <a href="https://policecomplaints.dc.gov/node/1391936">Report on Use of Force by the Washington, D.C Metropolitan Police Department 2018</a>, page 31</p>
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
			<div id="ftn-year" className="my-3">
				<Row>
					<Col><h4>Incidents involving force by year (FTN)</h4></Col>
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
			<div id="force-month" className="my-3">
				<Row>
					<Col><h4>Force by month</h4></Col>
				</Row>
				<Row>
					<Col className="my-4">
						<ul>
							<li>Figure 2 clarifies the relationship between FTN and UOF. On average, there has been a marginal decrease in UOF per FTN per month from 2017 to 2018.</li>

							<li>While both UOF and FTN peaked in August of 2017, only the spike in UOF in August remained consistent in 2018. April, May, June, and August were months when the UOF was substantially higher than the median of 82. The average of UOF/FTN was approximately 2.5 in 2018, compared with roughly 2.7 in 2017. The increase in UOF during these months is, perhaps, due to “festival season” <a href="#ref-10-festival">[10]</a>. Otherwise, there is no immediate rationale for the fluctuation. </li>
						</ul>

						<p id="ref-10-festival">[10] - Government of the District of Colombia, Police Complaint Board, Office of Police Complaints, <a href="https://policecomplaints.dc.gov/node/1391936">Report on Use of Force by the Washington, D.C Metropolitan Police Department 2018</a>, page 29</p>

					</Col>
					<Col className="col-8">
						<ForceByMonthPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderByLevelTypeYear() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Amount of force (UOF) by level breakdown</h4>
						<strong>Level 1</strong>
						<ul>
							<li>Level 1 force decreased for the third year in a row.</li>
							<li>From 2017-2018, Level 1 force decreased by 266 UOF or 177% more than from 2016-2017. </li>
							<li>Both taser and firearm exhibition has decreased significantly since 2017. </li>
						</ul>

						<strong>Level 2</strong>
						<ul>
							<li>Level 2 UOF decreased substantially in 2018, dropping from 382 in 2017 to 182 in 2018. This is the lowest Level 2 has been since 2015. </li>
							<li>Defense tech/take down decreased by approximately 360%.</li>
							<li>Taser use has averaged about 57 UOF from 2016 to 2018 and remained consistent.</li>
							<li>Canine (no bite) has experienced little changed from 2017 to 2018, hovering near 20 UOF. </li>
						</ul>

						<strong>Level 3</strong>
						<ul>
							<li>Level 3 force has doubled for the second year in a row.  </li>
							<li>Since 2015, head strike (no weapon) has been steadily increasing up to 10 in 2018. </li>
						</ul>

						<strong>Level 4</strong>
						<ul>
							<li>Level 4 force has decreased yearly since 2015. </li>
							<li>There was no firearm discharged UOF in 2018. </li>
							<li>While level 4 UOF has decreased overall, head strikes while handcuffed increased from 1 in 2017 to 6 in 2018. </li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<UofL1Plot />
					</Col>
					<Col>
						<UofL2Plot />
					</Col>
					<Col>
						<UofL3Plot />
					</Col>
					<Col>
						<UofL4Plot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-time-section">Force over time</h2></Col>
				</Row>

				{this.renderFtnByYear()}
				{this.renderUofByYear()}
				{this.renderForceByMonth()}
				{this.renderByLevelTypeYear()}
			</div>
		)
	}
}

export default ForceTimeSection
