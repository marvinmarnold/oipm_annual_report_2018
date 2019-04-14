import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"


import UofByLevelTypePlot from './uof-by-level-type-plot.js'
import UofByLevelDistrictPlot from './uof-by-level-district-plot.js'

import UofPieL1Type from './type-level-pies/uof-pie-l1-type'
import UofPieL2Type from './type-level-pies/uof-pie-l2-type'
import UofPieL3Type from './type-level-pies/uof-pie-l3-type'
import UofPieL4Type from './type-level-pies/uof-pie-l4-type'

class ForceTypeLevelSection extends React.Component {
	constructor() {
		super()
	}



	renderUofByLevelType() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by level and type overview</h4>

					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<p>
							Use of force is overwhelmingly level 1, followed by level 2.
							Exhibiting firearms accounts for slightly more UOF than all other types combined, similar to 2017 statistics.
						</p>
					</Col>
					<Col className="col-7">
						<UofByLevelTypePlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByLevelDistrict() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by level and district</h4>
					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>The districts with the highest UOF are the 3rd, 8th, 7th, and Special Operations, respectively. These districts are the top four for a second year in a row.</li>
							<li>The 7th district has the highest level 4 UOF and the 8th district has the highest level 3 UOF.</li>
						</ul>
					</Col>
					<Col className="col-7">
						<UofByLevelDistrictPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderUofPiesByLevelType() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force (UOF) by type breakdown</h4>
						<strong>Level 1</strong>
						<ul>
							<li>The highest percentage of level 1 UOF is firearm exhibited. </li>
							<li>Hands/escort tech is the second most common low level UOF, followed by takedown (no injury), representing more than 90% of all level 1 force. </li>
							<li>Exhibiting firearms is the overwhelming reason for using force.</li>
							<li>Level 1 force is more common that all other levels of force. </li>
						</ul>

						<strong>Level 2</strong>
						<ul>
							<li>Defense tech/takedown represents almost half of all level 2 force in 2018 with 45.1%. That percentage is down from 77.4% in 2017.</li>
							<li>L2-taser is the second most common UOF, representing just over a quarter of the catergory.</li>
						</ul>

						<strong>Level 3</strong>
						<ul>
							<li>Head strike (no wep) is overwhlemingly the level 3 UOF utilized for a second year in a row. At 74.1%, head strikes (no wep) were down 14.3% from 2017. </li>
						</ul>

						<strong>Level 4</strong>
						<ul>
							<li>Level 4 UOF is least common, with only 9 instances total.</li>
							<li>Head strikes while handcuffed are the most frequent UOF, followed by L-4 taser.</li>
							<li>There are inconsistencies in departments across the US as to which methods of UOF are utilized. Yet, physical force and takedown methods appear to be used most consistently and most frequently <a href="#ref-11-lvls">[11]</a>.</li>
						</ul>

						<p id="ref-11-lvls">[11] - Chicago Police Department, Chicago Police Department <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual Report 2017, p. 100-102</a>, accessed April 9, 2019.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<UofPieL1Type />
					</Col>
					<Col>
						<UofPieL2Type />
					</Col>
					<Col>
						<UofPieL3Type />
					</Col>
					<Col>
						<UofPieL4Type />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-type-level-section">Force by type and level</h2></Col>
				</Row>

				{this.renderUofByLevelType()}
				{this.renderUofByLevelDistrict()}
				{this.renderUofPiesByLevelType()}

			</div>
		)
	}
}

export default ForceTypeLevelSection
