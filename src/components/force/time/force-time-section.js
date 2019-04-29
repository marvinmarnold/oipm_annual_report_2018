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
					<Col md="6" lg="5">
						<ul>
							<li>There were 1108 UOF in 2018, down significantly from 1574 in 2017. The number of FTN in 2018 was 438, resulting in a decrease of 166 since 2017. The trend of UOF incidents in other police departments surveyed was an increase in 2018.</li>
							<li>102 of the reduction in UOF can be attributed to the change of policy no longer requiring the 	reporting of exhibition of taser as a UOF. This represents 22% in the decline of UOF.</li>
							<li>Notably, even with the increase of UOF in other cities, the overall numbers for UOF per capita in 	New Orleans was substantially higher than other cities. For example, Indianapolis Police Department has 896 UOF and a population of 863,000, and DC PD had 323 UOF with 694,000 residents.</li>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014. However, force spiked 	between 2014 and 2015. From 2015 to 2016, UOF increased while FTN decreased. In 2017, both FTN and UOF increased. Notably, both UOF and FTN experienced sharp declines in 2018.</li>
						</ul>

						</Col>
					<Col  md="6" lg="7">
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
					<Col  md="6" lg="5" className="my-4">
						<ul>
							<li>Force in 2015 and earlier is taken from historical reports, not auditable digital records.</li>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014. However, force spiked between 2014 and 2015. From 2015 to 2016, UOF increased while FTN decreased. In 2017, both FTN and UOF increased. Notably, both UOF and FTN experienced sharp declines in 2018. </li>
						</ul>
					</Col>
					<Col  md="6" lg="7">
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
							<li>Figure 4 clarifies the relationship between the number of incidents (FTN) and amount of force (UOF).</li>
							<li>On average, there has been a negligible decrease in UOF per FTN per month from 2017 to 2018 of 2.6 to 2.5.</li>
							<li>While both UOF and FTN peaked in August of 2017, only the spike in UOF in August remained consistent in 2018.</li>
							<li>April, May, June, and August were months when the UOF was substantially higher than the median of 82. The average of UOF/FTN was approximately 2.5 in 2018, compared with roughly 2.7 in 2017. Crime rates and force is known to rise during summer months. This could explain the June and August outcomes. There is no immediate rationale for the fluctuation in April and May.</li>
						</ul>
					</Col>
					<Col lg="6" md="7">
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
							<li>In 2018, NOPD stopped counting the exhibition of firearms as a use of force. In 2017, there were 126 such incidents. In 2016 there were 118. The policy change caused the number to drop to 20 in 2018. If we assume the expected number of taser exhibitions to be the 2016/17 average (126 + 118 / 2 = 122), then this policy change can be attributed to a 102 decrease in UOF (122 expected taser exhibition - 20 recorded exhibitions).</li>
							<li>From 2017-2018, Level 1 force decreased by 266 UOF or 177% more than from 2016-2017. But 38% of that decline can be attributed to the policy change regarding taser exhibition.</li>
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
