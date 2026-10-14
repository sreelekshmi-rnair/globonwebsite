'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function KsfeSignatureSchemes() {
	const [activeCategory, setActiveCategory] = useState("all")

	const categories = [
		{ id: "all", label: "All Solutions" },
		{ id: "loans", label: "Loans & Advances" },
		{ id: "subsidies", label: "Govt Subsidies (PMEGP)" },
		{ id: "reports", label: "Project Reports & CMA" },
		{ id: "compliance", label: "Registrations & Tax" },
		{ id: "insurance", label: "Insurance & Real Estate" },
	]

	const schemes = [
		{
			id: "msme",
			category: "loans",
			title: "Business & MSME Loans",
			tag: "48-Hr Fast Sanction",
			highlight: "Up to ₹10 Crore",
			desc: "Fuel your enterprise growth, procure modern machinery, or expand working capital with fast-tracked bank approvals across 30+ lenders.",
			image: "/images/widget/card-service-1.jpg",
			features: ["Mudra & CGTMSE collateral-free", "Competitive bank interest rates", "Zero hidden consultation fees"],
			link: "/our-service#loans"
		},
		{
			id: "reports",
			category: "reports",
			title: "Bank Project Reports & CMA",
			tag: "Bank-Approved Formats",
			highlight: "DPR & Financial Models",
			desc: "Professional Detailed Project Reports (DPR), CMA data, and financial projections crafted by experts for instant loan clearance.",
			image: "/images/widget/card-service-2.jpg",
			features: ["Chartered Accountant verified", "Accepted by all national banks", "Fast 3-day delivery"],
			link: "/our-service#business"
		},
		{
			id: "home",
			category: "loans",
			title: "Home & Property Loans",
			tag: "From 8.35% p.a.",
			highlight: "Up to 30 Yrs Tenure",
			desc: "Purchase, construct, or renovate your dream house. Balance transfer with high top-up facility across leading banks.",
			image: "/images/widget/card-service-3.jpg",
			features: ["Maximum loan eligibility", "Doorstep documentation in Kerala", "Fast legal clearance"],
			link: "/our-service#loans"
		},
		{
			id: "pmegp",
			category: "subsidies",
			title: "PMEGP & Govt Subsidies",
			tag: "Up to 35% Capital Grant",
			highlight: "Full Liaison Support",
			desc: "Comprehensive subsidy advisory for PMEGP, Stand-Up India, and state entrepreneurial schemes with end-to-end processing.",
			image: "/images/widget/card-service-5.jpg",
			features: ["Complete online portal filing", "Direct bank manager liaison", "Maximum subsidy sanction"],
			link: "/our-service#business"
		},
		{
			id: "compliance",
			category: "compliance",
			title: "GST, Tax & Registrations",
			tag: "Complete Compliance",
			highlight: "Under One Roof",
			desc: "GST registration & monthly filings, Income Tax returns (ITR), MSME/Udyam certificates, and company incorporation.",
			image: "/images/widget/card-service-4.jpg",
			features: ["Zero penalty compliance", "Dedicated tax consultant", "Complete accounting support"],
			link: "/our-service#business"
		},
		{
			id: "insurance",
			category: "insurance",
			title: "Insurance & Real Estate",
			tag: "Complete Protection",
			highlight: "Trusted Local Guidance",
			desc: "Health, life, and commercial asset insurance combined with property valuation and verified real estate guidance in Kerala.",
			image: "/images/widget/card-service-6.jpg",
			features: ["Top insurance policy options", "Property legal scrutiny", "Transparent deal execution"],
			link: "/our-service#insurance"
		}
	]

	const filteredSchemes = activeCategory === "all" 
		? schemes 
		: schemes.filter(s => s.category === activeCategory)

	return (
		<section className="ksfe-signature-section tf-spacing-1" id="signature-schemes">
			<div className="tf-container w-1780">
				{/* Top Header */}
				<div className="ksfe-section-header">
					<div>
						<div className="ksfe-sub-pill">
							<span className="dot"></span>
							GLOBON BUSINESS SOLUTIONS • ONE ROOF FOR ALL NEEDS
						</div>
						<h2 className="ksfe-main-title">
							SIGNATURE FINANCIAL SCHEMES
						</h2>
					</div>
					<div className="ksfe-header-action">
						<Link href="/our-service" className="ksfe-outline-btn">
							Explore All Solutions
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="7" y1="17" x2="17" y2="7"></line>
								<polyline points="7 7 17 7 17 17"></polyline>
							</svg>
						</Link>
					</div>
				</div>

				{/* Filter Pills */}
				<div className="ksfe-filter-pills">
					{categories.map((cat) => (
						<button
							key={cat.id}
							className={`ksfe-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
							onClick={() => setActiveCategory(cat.id)}
						>
							{cat.label}
						</button>
					))}
				</div>

				{/* Schemes Grid */}
				<div className="ksfe-schemes-grid">
					{filteredSchemes.map((item) => (
						<div className="ksfe-scheme-card" key={item.id}>
							<div className="ksfe-card-image-wrap">
								<Image
									src={item.image}
									alt={item.title}
									width={400}
									height={230}
									className="ksfe-card-img"
								/>
								<div className="ksfe-card-tag">{item.tag}</div>
								<div className="ksfe-card-badge">{item.highlight}</div>
							</div>
							<div className="ksfe-card-body">
								<h3 className="ksfe-card-title">{item.title}</h3>
								<p className="ksfe-card-desc">{item.desc}</p>
								
								<div className="ksfe-card-features">
									{item.features.map((feat, idx) => (
										<div className="ksfe-feat-item" key={idx}>
											<span className="ksfe-check-icon">✓</span>
											<span>{feat}</span>
										</div>
									))}
								</div>

								<div className="ksfe-card-footer">
									<Link href={item.link} className="ksfe-card-link">
										Apply / Inquire
										<span className="arrow">→</span>
									</Link>
									<Link href="/#emi-calculator" className="ksfe-card-calc-link">
										Calculate EMI
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
