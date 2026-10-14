'use client'
import Link from 'next/link'

export default function KsfeKeralaPresence() {
	return (
		<section className="ksfe-location-section tf-spacing-1" id="kerala-presence">
			<div className="tf-container w-1780">
				<div className="row align-items-center">
					{/* Left Signature Lime/Gold Card (Iconic KSFE element) */}
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="ksfe-presence-card">
							<div className="ksfe-map-bg-pattern">
								{/* Kerala State Map SVG outline silhouette */}
								<svg viewBox="0 0 120 220" className="kerala-map-svg">
									<path d="M45,10 Q65,25 70,50 Q75,80 60,110 Q50,135 65,160 Q75,185 55,210 Q35,190 40,165 Q45,140 30,115 Q20,85 30,55 Z" fill="rgba(15, 23, 42, 0.08)" />
								</svg>
							</div>

							<div className="ksfe-presence-card-content">
								<div className="ksfe-presence-pill">
									PAN-KERALA REACH
								</div>
								
								<div className="ksfe-presence-big-stat">
									194+
								</div>
								<div className="ksfe-presence-stat-label">
									Centers &amp; Touchpoints Across Kerala
								</div>

								<p className="ksfe-presence-card-text">
									Globon Business Solutions is always close by. Reach our dedicated financial advisors across Thrissur, Ernakulam, Malappuram, Kozhikode, and all 14 districts for swift doorstep loan assistance.
								</p>

								<div className="ksfe-presence-btn-wrap">
									<Link href="/contact" className="ksfe-dark-btn">
										Locate Nearest Support Center
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<line x1="7" y1="17" x2="17" y2="7"></line>
											<polyline points="7 7 17 7 17 17"></polyline>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Right 3 Stacked Stat Rows (Iconic KSFE element) */}
					<div className="col-lg-6">
						<div className="ksfe-stacked-stats">
							{/* Stat Row 1 */}
							<div className="ksfe-stat-row">
								<div className="stat-left">
									<div className="stat-giant-num">30+</div>
									<div className="stat-giant-label">Partner Banks &amp; NBFCs</div>
									<div className="stat-giant-sub">State Bank of India, Federal Bank, HDFC Bank, Canara Bank, Axis Bank &amp; leading NBFCs</div>
								</div>
								<div className="stat-right-icon">
									<div className="stat-circle-icon">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
											<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
											<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
										</svg>
									</div>
								</div>
							</div>

							{/* Stat Row 2 */}
							<div className="ksfe-stat-row">
								<div className="stat-left">
									<div className="stat-giant-num">₹250 Cr+</div>
									<div className="stat-giant-label">Total Loan &amp; Business Turnover</div>
									<div className="stat-giant-sub">Facilitated across MSME funding, home loans, project finance &amp; subsidies</div>
								</div>
								<div className="stat-right-icon">
									<div className="stat-circle-icon">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
											<line x1="12" y1="1" x2="12" y2="23"/>
											<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
										</svg>
									</div>
								</div>
							</div>

							{/* Stat Row 3 */}
							<div className="ksfe-stat-row">
								<div className="stat-left">
									<div className="stat-giant-num">15,000+</div>
									<div className="stat-giant-label">Satisfied Borrowers &amp; Clients</div>
									<div className="stat-giant-sub">Entrepreneurs, home owners, retailers and salaried professionals across South India</div>
								</div>
								<div className="stat-right-icon">
									<div className="stat-circle-icon">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
											<circle cx="9" cy="7" r="4"/>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
