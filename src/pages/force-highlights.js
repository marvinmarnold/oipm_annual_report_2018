import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ForceIntroductionSection from '../components/force/force-introduction-section'
import ForceTimeSection from '../components/force/time/force-time-section'
import ForceTypeLevelSection from '../components/force/type-level/force-type-level-section'
import ForceOutcomeSection from '../components/force/outcome/force-outcome-section'
import ForceJustificationSection from '../components/force/justification/force-justification-section'
import MostForcefulSection from '../components/force/most-forceful/most-forceful-section'
import OfficerDemographicsSection from '../components/force/officer-demographics/officer-demographics-section'
import PublicDemographicsSection from '../components/force/public-demographics/public-demographics-section'

const ForceHighlightsPage = () => (
	<Page
		title={"Use of Force"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#force-introduction-section" className="text-white">Introduction &amp; terms</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-time-section" className="text-white">Force over time</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-type-level-section" className="text-white">Force by type and level</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-outcome-section" className="text-white">Force by outcome</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-justification-section" className="text-white">Justification for force</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#most-forceful-section" className="text-white">Most forceful officers</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-officer-demographics-section" className="text-white">By officer demographics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#force-public-demographics-section" className="text-white">By individual demographics</NavLink>
				</NavItem>
			</Nav>
		}
		body={
			<div>
				<Row>
					<Col>
						<h1 className="mt-5 text-center">Use of Force</h1>
						<h2 className="mb-5 text-center">Annual Report Narrative</h2>
					</Col>
				</Row>

				<ForceIntroductionSection />
				<ForceTimeSection />
				<ForceTypeLevelSection />
				<ForceOutcomeSection />
				<ForceJustificationSection />
				<MostForcefulSection />
				<OfficerDemographicsSection />
				<PublicDemographicsSection />

			</div>
		}
	/>
)

export default ForceHighlightsPage
