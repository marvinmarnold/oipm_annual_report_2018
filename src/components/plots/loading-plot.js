import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js'

class LoadingPlot extends React.Component {

  constructor() {
    super()
    this.state = { }
  }

  render() {
    if (!this.props.data) {
			return <h1>Loading plot</h1>
		} else {

			let responsiveConfig = this.props.config
			responsiveConfig.responsive = true

			let responsiveLayout = this.props.layout
			// responsiveLayout.height = null
			// responsiveLayout.width = null

			return (
				<Plot
				    data={this.props.data}
				    layout={responsiveLayout}
				    config={responsiveConfig}
				    onInitialized={(figure) => this.setState(figure)}
				    onUpdate={(figure) => this.setState(figure)}
				/>
			)
  		}
  }
}

export default LoadingPlot
