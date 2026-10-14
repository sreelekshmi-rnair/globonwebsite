'use client'
import Link from 'next/link'

export default function KsfeQuickPortal() {
	return (
		<section className="ksfe-quick-pay-section">
			<div className="tf-container w-1780">
				<div className="ksfe-quick-pay-box">
					<div className="row align-items-center">
						{/* Left Column: Quick Pay Content */}
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div className="ksfe-quick-content">
								<div className="ksfe-quick-pill">
									FAST-TRACK ADVISORY &amp; PROCESSING
								</div>
								<h2 className="ksfe-quick-title">
									QUICK LOAN &amp; ONLINE PORTAL
								</h2>
								<p className="ksfe-quick-text">
									Get instant eligibility assessment, calculate your exact monthly EMI, or submit your loan dossier online. No need to stand in long queues or deal with endless paperwork. Our digital advisors get back to you within 2 business hours.
								</p>

								<div className="ksfe-quick-actions">
									<Link href="/#consultation" className="ksfe-primary-btn">
										Apply For Quick Pre-Approval
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<line x1="7" y1="17" x2="17" y2="7"></line>
											<polyline points="7 7 17 7 17 17"></polyline>
										</svg>
									</Link>
									<Link href="/#emi-calculator" className="ksfe-secondary-btn">
										Instant EMI Calculator
									</Link>
								</div>

								{/* Payment / Banking Partners Logos Row (just like KSFE) */}
								<div className="ksfe-payment-methods">
									<div className="payment-label">Integrated Banking &amp; UPI Support:</div>
									<div className="payment-icons-row">
										<span className="pay-badge">Google Pay</span>
										<span className="pay-badge">PhonePe</span>
										<span className="pay-badge">Paytm</span>
										<span className="pay-badge">BHIM UPI</span>
										<span className="pay-badge">Net Banking</span>
										<span className="pay-badge">IMPS / NEFT</span>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Visual Floating Status Card (just like KSFE) */}
						<div className="col-lg-6">
							<div className="ksfe-quick-visual-wrap">
								<div className="ksfe-app-card">
									<div className="app-card-top">
										<div className="status-indicator">
											<span className="pulse-dot"></span>
											Instant Verification Active
										</div>
										<div className="lock-icon">🔒 256-Bit SSL Encrypted</div>
									</div>

									<div className="app-card-middle">
										<div className="success-circle">✓</div>
										<h4 className="card-headline">Priority File Processing</h4>
										<p className="card-subtext">Direct liaison with State Bank of India, Federal Bank, HDFC Bank, Canara Bank &amp; leading NBFCs across Kerala.</p>
									</div>

									<div className="app-card-metrics">
										<div className="metric-box">
											<span className="val">48 Hrs</span>
											<span className="lbl">Approval Turnaround</span>
										</div>
										<div className="metric-box">
											<span className="val">₹0</span>
											<span className="lbl">Upfront Hidden Fees</span>
										</div>
										<div className="metric-box">
											<span className="val">30+</span>
											<span className="lbl">Lending Partners</span>
										</div>
									</div>

									<div className="app-card-floating-badge">
										<span className="badge-check">✓</span>
										<div className="badge-text">
											<strong>100% Free Consultation</strong>
											<span>Zero advance charges guaranteed</span>
										</div>
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
