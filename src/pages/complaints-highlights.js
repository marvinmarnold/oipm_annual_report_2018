import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ComplaintsHighlightsBib from '../components/complaints/complaints-highlights-bib'

// Time
import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'

// Allegations
import AllegationsMostCommonPlot from '../components/complaints/allegations-most-common-plot'
import AllegationsByFindingPlot from '../components/complaints/outcome/allegations-by-finding-plot'
import AllegationsSustainedMostCommonPlot from '../components/complaints/outcome/allegations-sustained-most-common-plot'
import AllegationsBySourcePlot from '../components/complaints/source/allegations-by-source-plot'

// Complaints
import ComplaintsByDispositionPlot from '../components/complaints/outcome/complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from '../components/complaints/outcome/complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from '../components/complaints/outcome/complaints-by-rank-disposition-plot'
import ComplaintsBySourceDispositionPlot from '../components/complaints/source/complaints-by-source-disposition-plot'
import ComplaintsByOfficerRaceDispositionPlot from '../components/complaints/outcome/complaints-by-officer-race-disposition-plot'

// Fourth
import AllegationsFourthByDescriptionPlot from '../components/complaints/fourth/allegations-fourth-by-description-plot'
import AllegationsFourthByDescriptionFindingPlot from '../components/complaints/fourth/allegations-fourth-by-description-finding-plot'

// Anonymous
import ComplaintsByAnonymousPlot from '../components/complaints/source/complaints-by-anonymous-plot'

// Discipline
import DisciplineByActionTakenPlot from '../components/complaints/discipline/discipline-by-action-taken-plot'
import DisciplineByActionTakenAllPlot from '../components/complaints/discipline/discipline-by-action-taken-all-plot'
import DisciplineByAllegationPlot from '../components/complaints/discipline/discipline-by-allegation-plot'
import DisciplineByPublicSexPlot from '../components/complaints/discipline/discipline-by-public-sex-plot'
import DisciplineByOfficerSexPlot from '../components/complaints/discipline/discipline-by-officer-sex-plot'
import DisciplineByPublicRacePlot from '../components/complaints/discipline/discipline-by-public-race-plot'
import DisciplineByOfficerRacePlot from '../components/complaints/discipline/discipline-by-officer-race-plot'

class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="#complaints-by-year" className="text-white">Complaints and allegations by year</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#allegations-outcomes" className="text-white">Allegation analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-outcomes" className="text-white">Complaint analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-fourth" className="text-white">4th amendment complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-anonymous" className="text-white">Anonymous complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-discipline" className="text-white">Discipline</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#complaints-bib" className="text-white">Bibliography</NavLink>
				</NavItem>
			</Nav>
		)
	}

	renderOverTime() {
		return (
			<div id="complaints-by-year">
				<Row>
					<Col>
						<h4>Complaints &amp; Allegations by Year</h4>
						<p>Complaints appear to have slight decrease in 2018 and 2017 compared with 2016. This appears to be on
trend with other United States police departments of similar size, which are experiencing stagnation in
complaints or decreases. Given that complaint decreases are taking place in metropolitan police departments
across the U.S., this may indicate a universal reform in policing over the past few years.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 2: COMPLAINTS BY YEAR</h5>

						<ComplaintsByYearTypePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 3: ALLEGATIONS BY YEAR</h5>
						<AllegationsByYearTypePlot />

					</Col>

				</Row>
			</div>
		)
	}

	renderAllegationsOutcomes() {
		return (
			<div id="allegations-outcomes">
				<Row>
					<Col>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 4: MOST COMMON ALLEGATIONS</h5>
						<AllegationsMostCommonPlot />
						<h4>Allegation Analysis</h4>
						<p>Allegations are different from complaints. Within one complaint may be multiple allegations of misconduct.
According to NOPD data, the two most common complaint allegations in 2018, representing roughly 75% of
all allegations, were: “neglect of duty,” and “professionalism”. Similar to findings analyzed of other
departments, complaints tend to originate from civilian interactions.</p>
						<p>The dispositions of the complaints filed in 2018 are illustrated in the figure 4: “Most Common Allegations.”
This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most
frequently marked “sustained”. This is consistent with 2017 findings.</p>
						<p>Complaint allegations have shifted slightly from 2017. While “neglect of duty” and “professionalism”
remained the most common allegations, the third most common switched from “instructions from an
authoritative source” in 2017 to “adherence to law” in 2018. While there was not a significant percentage
change in “adherence to law” allegations between 2017 and 2018, “instructions from an authoritative source”
allegations decreased by almost sixty (60) allegations, or over 3%.</p>
						<p>There was a disciplinary matrix change implemented in March of 2018, as a result, there was a policy shift to
more accurately determine the appropriate charge between neglect of duty and instructions from an
authoritative source. This resulted in a change in PIB practice resulting in more charges of neglect of duty in
2018.</p>
					</Col>
				</Row>

				<Row>
					<Col>
						<h5 className="text-center">FIGURE 5: NOPD ALLEGATION FINDINGS</h5>
						<AllegationsByFindingPlot />
						<p>In 2018, the most common sustained allegation is “neglect of duty” at 52%, mostly unchanged since 2017.</p>

						<h5 className="text-center">FIGURE 6: MOST SUSTAINED ALLEGATIONS</h5>
						<AllegationsSustainedMostCommonPlot />
						<p>These totals are based on sustained allegations only.</p>

						<h5 className="text-center">FIGURE 7: ALLEGATIONS BY SOURCE</h5>
						<AllegationsBySourcePlot />
						<p>This classification of each allegation is complimentary to and consistent with the Public vs Rank Initiated
classification that each allegation also receives. In 2018, 62% of allegations are classified as the public
initiated. Of the 62% of allegations made by the public, approximately 55.5% of those allegations were
classified as initiated by a civilian, which means a member of the public was the source of the complaint and
a member of the public submitted a complaint in person to a NOPD employee. Moving forward, the OIPM
and the NOPD is going to examine this public initiated category (type) to better identify the source of the
complaint. The goal is to better differentiate the data from website complaints, OIPM referrals, and civilian
complaints to confidently determine in the data what is coming from a public source.</p>
					</Col>
				</Row>

			</div>
		)
	}

	renderComplaintsOutcomes() {
		return (
			<div id="complaints-outcomes">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 8: COMPLAINT DISPOSITION BY SOURCE</h5>

						<ComplaintsBySourceDispositionPlot />

						<h4>Complaint Analysis</h4>
						<p>The largest grouping was of “sustained” complaints at 29.3%. This is almost the identical rate from 2017
(29.2%).</p>
						<p>While 14.6% of public complaints are sustained (15.6% in 2017), 53.7% of rank complaints are sustained
(50.7% in 2017), this is more than three times the rate of public complaints. In New Orleans, the public initiates roughly 1.7 times the number of complaints than does rank. In police departments across the US,
public complaints often represent the majority of complaints but are the least often sustained.</p>
						<p>There are different conclusions that can be drawn from this trend. A rank-initiated complaint may and often
does originate from misconduct observed by a supervisor during a public interaction. At this time, the data
does not capture when a rank-initiated complaint originates from an observed act of misconduct during an
interaction with a member of the public.</p>
						<p>There is an argument that the number of sustained rank-initiated complaints is growing because there is an
increase of supervisor-based accountability. This means that rank is required under the Federal Consent
Decree to review officer action within the community, identify misconduct in those interactions, and then
initiate discipline against officers. When rank-initiates a complaint, limited investigation is required because
a supervisor observed the misconduct as it occurred or during his or her review the officer’s Body Worn
Camera.</p>
						<h5 className="text-center">FIGURE 9: ALL COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByDispositionPlot />

						<h5 className="text-center">FIGURE 10: RANK COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByRankDispositionPlot />

						<h5 className="text-center">FIGURE 11: PUBLIC COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByPublicDispositionPlot />

						<h5 className="text-center">FIGURE 12: COMPLAINT OUTCOMES BY OFFICER RACE</h5>
						<ComplaintsByOfficerRaceDispositionPlot />
						<p>According to NOPD data (please refer to annual-report-2018.nola.ipm.gov), sustained complaints appear to
be consistent with officer race demographics. Officers classified as African American / Black have a higher
rate of participation in mediation. The OIPM cannot draw a definitive conclusion from this data but the
OIPM and NOPD would like to explore this trend in future reports.</p>
					</Col>
				</Row>
			</div>
		)
	}

	renderFourth() {
		return (
			<div id="complaints-fourth">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 13: FOURTH AMENDMENT COMPLAINTS</h5>
						<AllegationsFourthByDescriptionPlot />

						<h5 className="text-center">FIGURE 14: FOURTH AMENDMENT ALLEGATIONS BY OUTCOME</h5>
						<AllegationsFourthByDescriptionFindingPlot />

						<p>Search and seizure and handcuffing and restraint were the two high risk allegations that composed Fourth
Amendment allegations. According to NOPD data, illegal search and seizure was more prevalent than
handcuffing and restraints in 2018 at 85.4% of allegations. There were 29 total Fourth Amendment sustained
allegations in 2018.</p>
						<p>Furthermore, NOPD’s data does not make is easy to identify possible 4 th Amendment related allegations.
Moving forward, NOPD and OIPM will work on this issue together.</p>
						<p>The outcomes of Fourth Amendment allegations were relatively similar for both search and seizure and
handcuffing and restraint. In both instances, the number of sustained allegations matches that of those
exonerated. This is a slight deviation from 2017, when exonerations were nearly twice as likely as sustained
allegations. These findings may indicate a greater accountability mechanism in the department.</p>
					</Col>
				</Row>
			</div>

		)
	}

	renderAnonymous() {
		return (
			<div id="complaints-anonymous">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 15: ANONYMOUS COMPLAINTS</h5>
						<ComplaintsByAnonymousPlot />
						<p>This chart of anonymous complaints captures when the complainant chooses not to give his or her name. Of
the three anonymous complaints in 2018, two remain pending; the third was found to have No Formal
Investigation Merited (NFIM). These findings are similar to those from 2017, where only 1 of 10
anonymous complaints was sustained.</p>
						<p>Similar to 4 th Amendment complaints, there is no clear way to use NOPD’s data to identify anonymous
complaints from nameless complainants in the data. The results may not reflect the actual number of
anonymous complaints.</p>
					</Col>
				</Row>
			</div>
		)
	}

	renderDiscipline() {
		return (
			<div id="complaints-anonymous">
				<Row>
					<Col>
						<h4>Discipline Data</h4>
						<p>In 2018, there were roughly 20 types of allegations alleged against NOPD employees. The top three were
“neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in step
with trends from 2017. In 2018, the most common outcomes were letter of reprimand and suspension. In
2017 the most common outcomes were DI-2 and suspensions.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 16: ACTION TAKEN</h5>
						<DisciplineByActionTakenAllPlot />
						<p>In chart above (Figure 16) are all the outcomes of allegations brought against NOPD employees. Some of
these outcomes are disciplinary and others, like mediation and Resigned / Retired Under Investigation (RUI),
are not disciplinary actions. “No basis for discipline” encompasses allegations that are found to be
unfounded, exonerated, and not sustained. This means the NOPD conducted an investigation and determined
these allegations were not eligible for disciplinary actions.</p>

						<h5 className="text-center">FIGURE 17: OUTCOMES</h5>
						<DisciplineByAllegationPlot />
						<p>This chart (Figure 17) captures the outcomes of disciplinary investigations. Some outcomes are disciplinary
actions and some are not disciplinary actions, like mediation and Resigned / Retired Under Investigation
(RUI). This chart differs from Figure 16 because Figure 16 includes all outcomes, even those that had no
basis for disciplinary action.</p>

						<h5 className="text-center">FIGURE 18: DISCIPLINE BY COMPLAINANT GENDER</h5>
						<DisciplineByPublicSexPlot />
						<p>Males, females, and people of unknown gender were proportionally represented as sources of complaints.
Their disciplinary outcomes are similar except for DI-2, letter of reprimand, and suspension which are
disproportionately from complainants of unknown gender. Most likely, this is because those outcomes are
the result of rank-initiated complaints and if rank-initiated, the NOPD database does not capture the rank’s
gender.</p>

						<h5 className="text-center">FIGURE 19: OUTCOMES BY OFFICER GENDER</h5>
						<DisciplineByOfficerSexPlot />
						<p>Outcomes appear to be proportional to the gender breakdown of the NOPD. Males make up 76% of the
police department and are proportionally represented in most types of discipline and similarly, female
employees are also proportionally represented. There is a negligible number of complaints concerning an
officer with an unknown gender.</p>
						<p>According to the disciplinary matrix, many first offenses are initially resolved with letter reprimand or short
suspensions.</p>

						<h5 className="text-center">FIGURE 20: OUTCOME BY COMPLAINANT RACE</h5>
						<DisciplineByPublicRacePlot />
						<p>50.1% of complainants are categorized as Black / African American. This number is low relative to the
Black / African American population of New Orleans and the higher rates of involvement Black / African
American people experience with law enforcement. Hispanic and Asian complainants are least represented.
There are 19 Hispanic complainants (1.9% of all complaints) categorizations but Hispanic people are 5% of
the population. 2.9% of people in New Orleans are Asian but there were no complaints categorized as from
an Asian complainant. One reason for this pattern is that people of unknown race account for 59% of all
complaints.</p>
						<p>That said, disciplinary actions appear to be applied proportionally, regardless of the race of the complainant.
Further analysis is needed to determine if any more nuanced race base trends exist in subcategories of the
data.</p>

						<h5 className="text-center">FIGURE 21: DISCIPLINE BY OFFICER RACE</h5>
						<DisciplineByOfficerRacePlot />
						<p>Like other police departments analyzed, employee race generally corresponds with department
demographics. However, all officers receiving a demotion as a form of discipline were Black / African
American officers. Black / African American officers or employees are also disproportionately likely to be
dismissed. At this time, it is difficult to determine the cause of this pattern or if there is a pattern within the
NOPD data. OIPM would also like to continue to examine this trend with the NOPD in the coming year.</p>
					</Col>

				</Row>

			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Complaints - 2018 OIPM Annual Report"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints,
Commendations &amp;
Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderOverTime()}
						{this.renderAllegationsOutcomes()}
						{this.renderComplaintsOutcomes()}
						{this.renderFourth()}
						{this.renderAnonymous()}
						{this.renderDiscipline()}
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
