import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import OfficersByYearPlot from './officers-by-year-plot'
import OfficersByRacePlot from './officers-by-race-plot'
import OfficersBySexPlot from './officers-by-sex-plot'

class OfficersDemographicsSection extends React.Component {
	constructor() {
		super()
	}


	renderByYear() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Number of active NOPD officers</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<p>TODO</p>
					</Col>
					<Col>
						<OfficersByYearPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderByRaceSex() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Officers by race and sex</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<h4>Officers by sex</h4>
						<OfficersBySexPlot />
					</Col>
					<Col>
						<h4>Officers by race</h4>
						<OfficersByRacePlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="officers-demographics-section">Demographics of active NOPD officers</h2></Col>
				</Row>

				{this.renderByYear()}
				{this.renderByRaceSex()}
			</div>
		)
	}
}

export default OfficersDemographicsSection
