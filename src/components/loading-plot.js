import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js'

import { MoonLoader } from 'react-spinners';

class LoadingPlot extends React.Component {

  constructor() {
    super()
    this.state = { }
  }

	genResponsiveConfig(config) {
		let responsiveConfig = config
		responsiveConfig.responsive = true
		return responsiveConfig
	}

	genResponsiveLayout(layout) {
		let responsiveLayout = layout
		// let responsiveLayout = {}
		// responsiveLayout.height = null
		// responsiveLayout.width = null
		delete responsiveLayout.margin

		responsiveLayout.legend = {
			x: 0,
			y:-0.35
		}
		console.log(responsiveLayout)
		return responsiveLayout
	}

	renderLoading() {
		return (
			<div className="d-flex justify-content-center">
				<MoonLoader loading={true} size={6} sizeUnit={"rem"} />
			</div>
		)
	}
  render() {
    if (!this.props.data) {
			return this.renderLoading()
		} else {
			return (
				<Plot
				    data={this.props.data}
						layout={this.genResponsiveLayout(this.props.layout)}
				    config={this.genResponsiveConfig(this.props.config)}
				    onInitialized={(figure) => this.setState(figure)}
				    onUpdate={(figure) => this.setState(figure)}
				/>
			)
  	}
  }
}

export default LoadingPlot
