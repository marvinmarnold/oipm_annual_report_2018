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
					<Col><h4>Amount of force (UOF) by level</h4></Col>
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
