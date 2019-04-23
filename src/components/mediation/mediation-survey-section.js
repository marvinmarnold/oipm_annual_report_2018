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

	renderQuestion(question) {
		console.log(question)

		return <h1 key={Math.random()}>{question.Text}</h1>
		// return (
		// 	<Row key={Math.random()}>
		// 		<Col><h1>{question.Text}</h1></Col>
		// 	</Row>
		// )
	}

	genSurveys(typeFilter) {
		const filteredSurvey = _.filter(survey, question => question.Type === typeFilter)

		return survey.map(question => {
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
					<Row key={Math.random()}>
						<Col md="3"><Plot 	data={data}
													layout={layout}
													config={config}
													useResizeHandler={true}
													style={{height: 150, width: "100%"}} /></Col>
						<Col md="9"><h4><strong>{numAgree} of {numTotal} ({pctAgree})&nbsp;</strong><span className="text-muted">{question.Text}</span></h4></Col>
					</Row>
			)
		})
	}
	render() {

		return (
			<div>
				<Row>
					<Col><h2 id="mediation-survey-section">Survey Results</h2></Col>
				</Row>
				<h1>Community Responses</h1>
				{this.genSurveys("Community")}

				<h1>Officer Responses</h1>
				{this.genSurveys("Officer")}

				<h1>Mediator Responses</h1>
				{this.genSurveys("Mediator")}
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
