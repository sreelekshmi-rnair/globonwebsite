'use client'
import Link from 'next/link'

export default function KsfeEmpowerBanner() {
	return (
		<section className="ksfe-empower-section">
			<div className="tf-container">
				<div className="ksfe-empower-inner text-center">
					<div className="ksfe-badge-year">
						<span className="dot"></span>
						ESTABLISHED IN 2017 • KODUNGALLUR, KERALA
					</div>

					<h2 className="ksfe-empower-title">
						EMPOWERING YOUR FINANCIAL JOURNEY
						<span className="ksfe-empower-highlight">SINCE 2017</span>
					</h2>

					<p className="ksfe-empower-desc">
						Globon Business Solutions was founded in 2017 with a simple purpose: bring loans, government subsidies, real estate, insurance, and business advisory together under one roof, backed by an extensive network of 30+ leading partner banks and NBFCs.
					</p>

					<div className="ksfe-empower-stats-row">
						<div className="ksfe-stat-bubble">
							<span className="stat-num">30+</span>
							<span className="stat-label">Partner Banks &amp; NBFCs</span>
						</div>
						<div className="ksfe-stat-bubble">
							<span className="stat-num">194+</span>
							<span className="stat-label">Touchpoints Across Kerala</span>
						</div>
						<div className="ksfe-stat-bubble">
							<span className="stat-num">₹250Cr+</span>
							<span className="stat-label">Funding Disbursed</span>
						</div>
						<div className="ksfe-stat-bubble">
							<span className="stat-num">9+</span>
							<span className="stat-label">Years of Excellence</span>
						</div>
					</div>

					<div className="ksfe-empower-cta-wrap">
						<Link href="/about-us" className="ksfe-primary-btn">
							About Globon Business Solutions
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="7" y1="17" x2="17" y2="7"></line>
								<polyline points="7 7 17 7 17 17"></polyline>
							</svg>
						</Link>
						<Link href="/contact" className="ksfe-secondary-btn">
							Find Nearest Support Center
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
