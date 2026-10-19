'use client'
import Link from 'next/link'

export default function KsfeKeralaPresence() {
	return (
		<section className="globon-presence-section" id="kerala-presence">
			<div className="tf-container w-1780">
				<div className="row align-items-stretch">
					{/* Left Signature Lime Card (Exact KSFE style) */}
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="globon-presence-card">
							{/* Kerala Map Silhouette in Background matching KSFE reference */}
							<div className="globon-presence-map-bg" aria-hidden="true">
								<svg viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M 12 12 C 26 20 48 44 54 64 C 58 82 74 100 88 114 C 98 124 122 138 128 158 C 132 174 146 188 142 212 C 138 232 152 254 146 278 C 143 292 136 300 130 295 C 122 288 120 260 110 240 C 102 225 90 200 80 180 C 72 165 58 145 50 125 C 42 105 32 80 22 55 C 15 38 9 22 12 12 Z"
										fill="#ffffff"
										opacity="0.14"
									/>
								</svg>
							</div>

							<div className="globon-presence-card-inner">
								<div className="card-top">
									<div className="presence-giant-number">194+</div>
									<div className="presence-card-label">Touchpoints Across Kerala</div>
								</div>

								<div className="card-bottom">
									<p className="presence-quote-text" style={{ marginBottom: 0 }}>
										Globon is always close by. Reach our dedicated financial advisors across Kerala and get the financial assistance you need.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Stacked Stats Rows with Circular Icons (Exact KSFE style) */}
					<div className="col-lg-6 d-flex flex-column justify-content-between">
						<div className="globon-presence-metrics-list">
							{/* Metric 1: Partners / Employees style */}
							<div className="presence-metric-row">
								<div className="metric-info">
									<div className="metric-number">30+</div>
									<div className="metric-label">Partner Banks &amp; NBFCs</div>
								</div>
								<div className="metric-icon-circle" aria-hidden="true">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<line x1="19" y1="8" x2="19" y2="14" />
										<line x1="22" y1="11" x2="16" y2="11" />
									</svg>
								</div>
							</div>

							<div className="presence-metric-divider" />

							{/* Metric 2: Turnover style */}
							<div className="presence-metric-row">
								<div className="metric-info">
									<div className="metric-number">₹250 Cr+</div>
									<div className="metric-label">Turnover &amp; Disbursals</div>
								</div>
								<div className="metric-icon-circle" aria-hidden="true">
									<span style={{ fontSize: '24px', fontWeight: 400, color: '#000000', lineHeight: 1 }}>₹</span>
								</div>
							</div>

							<div className="presence-metric-divider" />

							{/* Metric 3: Customers style */}
							<div className="presence-metric-row">
								<div className="metric-info">
									<div className="metric-number">15,000+</div>
									<div className="metric-label">Customers</div>
								</div>
								<div className="metric-icon-circle" aria-hidden="true">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
