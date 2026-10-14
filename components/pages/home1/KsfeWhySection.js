'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function KsfeWhySection() {
	const [activeIdx, setActiveIdx] = useState(0)

	const faqs = [
		{
			title: "Trusted & Transparent Financial Partner",
			content: "Founded in 2017 in Kodungallur, Thrissur, Globon operates with 100% transparent fee structures, direct bank tie-ups, and ethical advisory practices that put customer welfare first."
		},
		{
			title: "Wide Array of Products Under One Roof",
			content: "From retail personal & home loans to ₹10Cr+ industrial project funding, bank project reports, business registrations, insurance, and GST compliance—you never need to visit multiple agents."
		},
		{
			title: "Leader in Government Subsidies & Bankable Reports",
			content: "We specialize in PMEGP, Mudra, and Stand-Up India subsidies (up to 35% capital grant), preparing CMA data and Detailed Project Reports that banks approve with high confidence."
		},
		{
			title: "Extensive Network of 194+ Centers in Kerala",
			content: "Our vast support & collection network across Thrissur, Ernakulam, Malappuram, and all 14 districts gives you doorstep documentation support backed by institutional scale."
		},
		{
			title: "Rapid 48-Hour Loan Approval Guarantee",
			content: "Through established liaisons with 30+ leading partner banks and NBFCs, we eliminate endless red tape and accelerate your file through credit appraisal in record time."
		},
		{
			title: "End-to-End Execution & Personalized Support",
			content: "We do not just hand you bank forms. Our dedicated loan specialists assist you from initial eligibility assessment all the way to cheque disbursement and post-sanction support."
		}
	]

	return (
		<section className="ksfe-why-section tf-spacing-1" id="why-globon">
			<div className="tf-container w-1780">
				<div className="row align-items-center">
					{/* Left Image with Badges */}
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="ksfe-why-img-wrap">
							<div className="ksfe-main-img-box">
								<Image
									src="/images/section/why-choose.jpg"
									alt="Why Globon Business Solutions"
									width={600}
									height={520}
									className="ksfe-why-photo"
								/>
							</div>

							{/* Verified Badge (top-right, like KSFE) */}
							<div className="ksfe-verified-badge">
								<div className="verified-icon">✓</div>
								<div className="verified-text">
									<span className="bold">VERIFIED</span>
									<span className="sub">Financial Partner</span>
								</div>
							</div>

							{/* Floating Capital Badge (bottom-left, like KSFE) */}
							<div className="ksfe-capital-badge">
								<div className="badge-icon-box">
									<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
									</svg>
								</div>
								<div className="badge-info">
									<div className="badge-value">₹250 Cr+</div>
									<div className="badge-label">Loans &amp; Funding Sanctioned</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Accordion */}
					<div className="col-lg-6">
						<div className="ksfe-why-content">
							<div className="ksfe-sub-pill">
								<span className="dot"></span>
								PROVEN TRACK RECORD
							</div>
							<h2 className="ksfe-main-title mb-4">
								WHY GLOBON?
							</h2>

							<div className="ksfe-accordion-list">
								{faqs.map((faq, idx) => {
									const isOpen = activeIdx === idx
									return (
										<div 
											className={`ksfe-acc-item ${isOpen ? 'open' : ''}`}
											key={idx}
										>
											<button 
												className="ksfe-acc-header"
												onClick={() => setActiveIdx(isOpen ? null : idx)}
											>
												<span className="acc-num">0{idx + 1}</span>
												<span className="acc-title">{faq.title}</span>
												<span className="acc-chevron">{isOpen ? '−' : '+'}</span>
											</button>
											{isOpen && (
												<div className="ksfe-acc-body">
													<p>{faq.content}</p>
												</div>
											)}
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
