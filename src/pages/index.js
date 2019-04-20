import React from "react"
import {
	Container, Row, Col, Nav, NavItem, NavLink, Button,
	ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import BlackDisparitiesByMonthPlot from '../components/force/public-demographics/black-disparities-by-month-plot'
import BlackDisparitiesByDistrictPlot from '../components/force/public-demographics/black-disparities-by-district-plot'

class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	normalizePath(path) {
	  return path.replace(/\/+/g, `/`)
	}

	withPrefix(path) {
	  return this.normalizePath(`${__PATH_PREFIX__}/${path}`)
	}

	renderTitle() {
			return (
				<div>
					<SEO title="2018 OIPM Annual Report" keywords={[
							`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
							`oversight`, `data`, `analysis`, `annual report`, `2018`
						]} />

					<div className="bg-primary">
						<Container>
								<Row className="text-center">
									<Col className="mt-4">
										<h2 className="my-3 text-white">New Orleans</h2>
										<h2 className="my-3 text-white">Office of the Independent Police Monitor</h2>
										<h1 className="my-5">2018 Annual Report</h1>

										<div className="my-5">
											<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
												<DropdownToggle caret size="lg" className="mx-2">
													Jump to section
												</DropdownToggle>
												<DropdownMenu>
													<a href="#report-intro"><DropdownItem>Overview</DropdownItem></a>
													<a href={this.withPrefix("/force")}><DropdownItem>Use of Force</DropdownItem></a>
													<a href={this.withPrefix("/complaints")}><DropdownItem>Complaints &amp; Misconduct</DropdownItem></a>
													<a href={this.withPrefix("/officers")}><DropdownItem>Officer Demographics</DropdownItem></a>
												</DropdownMenu>
											</ButtonDropdown>

											<Button size="lg" disabled>Download full report</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
			)
	}

	renderIntroduction() {
		return (
			<Container id="report-intro">
				<Row className="mt-5">
					<Col>
						<h4>ANNUAL REPORT SUMMARY</h4>
						<p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
					</Col>
				</Row>
			</Container>
		)
	}

	renderForceBlack() {
		return (
			<Container>

				<Row className="mt-5">
					<Col><h4>DISPROPORTIONATE FORCE USED ON BLACK RESIDENTS</h4></Col>
				</Row>

				<Row className="mt-3">

					<Col><BlackDisparitiesByMonthPlot /></Col>
					<Col><BlackDisparitiesByDistrictPlot /></Col>
				</Row>
				<Row className="mt-5">
					<Col>
						<p>Marvin's todo list</p>
						<ul>
							<li>Highlight select results on homepage</li>
							<li>Add 2015 data</li>
							<li>Officers w/ most force divisions and departments</li>
							<li>Officers by zip map</li>
							<li>https://policecomplaints.dc.gov/sites/default/files/dc/sites/office%20of%20police%20complaints/publication/attachments/UOF%20Report%202018_Final_1.pdf comparison</li>
						</ul>
					</Col>
				</Row>
		</Container>
		)
	}

	renderCityComparison() {
		return (
			<Container>

				<Row className="mt-5">
					<Col><h4>COMPARISON TO OTHER CITIES</h4></Col>
				</Row>

				<Row className="mt-3">

					<Col><BlackDisparitiesByMonthPlot /></Col>
					<Col><BlackDisparitiesByDistrictPlot /></Col>
				</Row>
				<Row className="mt-5">
					<Col>
						<p>Marvin's todo list</p>
						<ul>
							<li>Highlight select results on homepage</li>
							<li>Add 2015 data</li>
							<li>Officers w/ most force divisions and departments</li>
							<li>Officers by zip map</li>
							<li>https://policecomplaints.dc.gov/sites/default/files/dc/sites/office%20of%20police%20complaints/publication/attachments/UOF%20Report%202018_Final_1.pdf comparison</li>
						</ul>
					</Col>
				</Row>
		</Container>
		)
	}


	render() {
		return (
		  <Layout>

					{this.renderTitle()}
					{this.renderIntroduction()}
					{this.renderForceBlack()}
		  </Layout>
		)
	}
}


export default IndexPage
