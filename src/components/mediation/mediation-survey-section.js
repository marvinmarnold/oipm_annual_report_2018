import React from "react"
import { Row, Col } from 'reactstrap'
import Plot from 'react-plotly.js'
import _ from 'underscore'

import survey from "../../data/mediation-survey-sanitized.json";

class MediationSurveySection extends React.Component {
	constructor() {
		super()
	}

	renderSurvey(typeFilter) {

		const filteredSurvey = _.filter(survey, question => question.Type === typeFilter)
		const allQuestions = _.map(filteredSurvey, question => question.Text)
		const agree = _.map(filteredSurvey, question => question.Agree)
		const noOpinion = _.map(filteredSurvey, question => question["No.opinion"])
		const disagree = _.map(filteredSurvey, question => question.Disagree)

		const agreeTrace = {
		  x: agree,
		  y: allQuestions,
		  name: "Agree",
		  orientation: 'h',
		  marker: {
		    color: 'rgba(32,86,127,0.6)',
		    width: 1
		  },
		  type: 'bar'
		}

		const noOpinionTrace = {
		  x: noOpinion,
		  y: allQuestions,
		  name: "No opinion",
		  orientation: 'h',
		  marker: {
		    color: 'rgba(204,184,102,0.6)',
		    width: 1
		  },
		  type: 'bar'
		}

		const disagreeTrace = {
		  x: disagree,
		  y: allQuestions,
		  name: "Disagree",
		  orientation: 'h',
		  marker: {
		    color: 'rgba(246,64,65,0.6)',
		    width: 1
		  },
		  type: 'bar'
		}

		var data = [agreeTrace, noOpinionTrace, disagreeTrace];

		console.log("made data")
		console.log(data)

		var layout = {
		  title: typeFilter + ' survey results',
		  barmode: 'stack',
			margin: {l: 500}
		};

		const config = {responsive: true}

		return <Plot 	data={data}
									layout={layout}
									config={config}
									useResizeHandler={true}
									style={{width: "100%"}} />
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="mediation-survey-section">Survey Results</h2></Col>
				</Row>
				<Row>
					<Col>
						{this.renderSurvey("Community")}
						{this.renderSurvey("Officer")}
						{this.renderSurvey("Mediator")}
					</Col>
				</Row>
			</div>
		)
	}
}

export default MediationSurveySection
