import React from "react"
import { Row, Col } from 'reactstrap'
import Plot from 'react-plotly.js'
import _ from 'underscore'

import survey from "../../data/mediation-survey-sanitized.json";

class MediationSurveySection extends React.Component {
	constructor() {
		super()
		this.state = {
			loaded: false
		}
	}

	genSurveys(typeFilter) {
		const filteredSurvey = _.filter(survey, question => question.Type === typeFilter)

		return filteredSurvey.map(question => {
			var trace1 = {
				x: [question.Agree],
				y: [''],
				name: 'Agree',
				orientation: 'h',
				marker: {
					color: 'rgba(32,86,127,0.6)',
					width: 1
				},
				type: 'bar'
			};

			var trace2 = {
				x: [question["No.opinion"]],
				y: [''],
				name: 'No opinion',
				orientation: 'h',
				type: 'bar',
				marker: {
					color: 'rgba(255,153,51,0.6)',
					width: 1
				}
			};

			var trace3 = {
				x: [question.Disagree],
				y: [''],
				name: 'Disagree',
				orientation: 'h',
				type: 'bar',
				marker: {
					color: 'rgba(246,64,65,0.6)',
					width: 1
				}
			};

			var data = [trace1, trace2, trace3];
			const config = {responsive: true}

			var layout = {
				title: false,
				barmode: 'stack',
				showlegend: false,
				yaxis: {title: false},
				margin: {t: 0}
			};

			const numAgree = question.Agree
			const pctAgree = question["Percent.Agree"]
			const numTotal = numAgree + question["No.opinion"] + question.Disagree
			return (
					<Row key={ Math.random().toString(36).substring(7)}>
						<Col md="3"><Plot	data={data}
															layout={layout}
															config={config}
															useResizeHandler={true}
															style={{height: 150, width: "100%"}} /></Col>
						<Col md="9"><h4><strong>{numAgree} of {numTotal} ({pctAgree})&nbsp;</strong><span className="text-muted">{question.Text}</span></h4></Col>
					</Row>
			)
		})
	}

	componentDidMount() {
		const newState = {
			loaded: true,
		}

		this.setState(newState)
	}

	render() {
		if (!this.state.loaded) return null
		return (
			<div>
				<Row>
					<Col><h2 id="mediation-survey-section">Survey Results</h2></Col>
				</Row>
				<h3>Community Responses</h3>
				{this.genSurveys("Community")}

				<h3>Officer Responses</h3>
				{this.genSurveys("Officer")}

				<h3>Mediator Responses</h3>
				{this.genSurveys("Mediator")}
			</div>
		)
	}
}

export default MediationSurveySection
