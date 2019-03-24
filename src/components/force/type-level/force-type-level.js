import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofL1Plot from './uof-l1-plot.js'
import UofL2Plot from './uof-l2-plot.js'
import UofL3Plot from './uof-l3-plot.js'
import UofL4Plot from './uof-l4-plot.js'

class ForceTypeLevel extends React.Component {
	constructor() {
		super()
	}

	renderByLevel() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Amount of force (UOF) by level</h4>
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
						<Col><h2 id="force-type-level">Force by type and level</h2></Col>
				</Row>

				{this.renderByLevel()}
			</div>
		)
	}
}

export default ForceTypeLevel
