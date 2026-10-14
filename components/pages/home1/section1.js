
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-feature tf-spacing-3">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon wow fadeInUp" data-wow-delay="0s">
								<div className="icon-item hover-icon">
									<i className="flaticon-target" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/services/loans-advances">
										Loans &amp; Advances
									</Link>
								</p>
								<p className="text">
									Business, Home, Personal, Project &amp; Vehicle loans with rapid 48-hour approvals and minimal documentation.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/loans-advances">
												48-Hour Rapid Approval Guarantee
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/loans-advances">
												PMEGP &amp; Stand-Up India Subsidies
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/loans-advances">
												Lowest Rates &amp; Zero Hidden Fees
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon-item hover-icon">
									<i className="flaticon-rocket" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/services/business-financial-solutions">
										Business &amp; Compliance
									</Link>
								</p>
								<p className="text">
									Company registrations, GST, ITR, auditing, trademark, ISO, and corporate licenses for startups and established enterprises.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/business-financial-solutions">
												Pvt Ltd, LLP &amp; Udyam Registration
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/business-financial-solutions">
												GST / ITR Filing &amp; Auditing
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/services/business-financial-solutions">
												Trademark, ISO &amp; Export-Import (IEC)
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon-item hover-icon">
									<i className="flaticon-megaphone" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/services/real-estate-solutions" className="text-white hover-text-main-yellow">
										Strategy, Real Estate &amp; Tech
									</Link>
								</p>
								<p className="text">
									Financial optimization, real estate finance, property documentation, and digital marketing &amp; ERP/CRM solutions.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/our-service" className="text-white hover-text-main-yellow">
												Project Reports &amp; Pitch Decks
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/our-service" className="text-white hover-text-main-yellow">
												Property Valuation &amp; LAP Assistance
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/our-service" className="text-white hover-text-main-yellow">
												ERP/CRM &amp; Digital Marketing
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
