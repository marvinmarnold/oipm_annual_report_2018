import React from "react"
import { Row, Col } from 'reactstrap'

import ForceByCityPlot from './force-by-city-plot'

const ForceIntroductionSection = () => (
	<div>
		<Row>
			<Col><h2 id="force-introduction-section">Introduction &amp; terms</h2></Col>
		</Row>
		<Row>
			<Col>
				<p>
					There is still uncertainty about the accuracy of 2015 numbers in IAPro.
					Therefore what is shown below is taken from historic reporting for 2015 and earlier.
					Data beginning in 2016 is pulled from IAPro.
				</p>
				<ul>
					<li>Difference between FTN &amp; UOF. Using "Amount of force" to describe UOF and "Force incidents" for FTN.</li>
				</ul>
			</Col>
		</Row>
		<Row>
			<Col>
				<p>
					New Orleans uses the second most amount of force compared to other cities in 2 out of 3 categories. Least relative force when looked at from a per-officer basis.
				</p>
				<p>New Orleans is the smallest city on the list.</p>
				<strong>City populations</strong>
				<ul>
					<li>Austin: 950,715</li>
					<li>D.C.: 702,455</li>
					<li>Indianapolis: 863,002</li>
					<li>New Orleans: 393,292</li>
				</ul>
			</Col>
			<Col>
				<ForceByCityPlot />
			</Col>
		</Row>
	</div>
)

export default ForceIntroductionSection
