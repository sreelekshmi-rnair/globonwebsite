'use client'
import Link from 'next/link'

export default function KsfeTicker() {
	const tickerItems = [
		{ text: "GLOBON BUSINESS SOLUTIONS", link: "/about-us" },
		{ text: "RAPID 48-HOUR LOAN SANCTION GUARANTEE", link: "/#consultation" },
		{ text: "194+ TOUCHPOINTS & SUPPORT CENTERS ACROSS KERALA", link: "/contact" },
		{ text: "PMEGP & STAND-UP INDIA 35% GOVT CAPITAL SUBSIDY ASSISTANCE", link: "/our-service" },
		{ text: "BANKABLE DETAILED PROJECT REPORTS (DPR) & CMA DATA PREPARATION", link: "/our-service" },
		{ text: "30+ LEADING PARTNER BANKS & NBFC NETWORK", link: "/#kerala-presence" },
		{ text: "HOME & PROPERTY LOANS STARTING FROM 8.35% P.A.", link: "/#loans-section" },
		{ text: "OVER ₹250 CRORES FUNDING FACILITATED SINCE 2017", link: "/about-us" },
		{ text: "ZERO ADVANCE CONSULTATION FEES • COMPLETE DOCUMENTATION SUPPORT", link: "/#consultation" },
		{ text: "15,000+ SATISFIED BORROWERS & BUSINESS CLIENTS", link: "/#why-globon" },
		{ text: "HEADQUARTERS: KODUNGALLUR, THRISSUR • CALL: +91 98460 53539", link: "tel:+919846053539" }
	]

	return (
		<div className="ksfe-ticker-bar" aria-label="Globon Announcements Ticker">
			<div className="ksfe-ticker-inner">
				<div className="ksfe-ticker-lead">
					<span className="ksfe-ticker-pipe">|</span>
				</div>
				<div className="ksfe-ticker-track-wrap">
					<div className="ksfe-ticker-track">
						{[...tickerItems, ...tickerItems].map((item, idx) => (
							<span className="ksfe-ticker-entry" key={idx}>
								<Link href={item.link} className="ksfe-ticker-link">
									{item.text}
								</Link>
								<span className="ksfe-ticker-slash">/</span>
							</span>
						))}
					</div>
				</div>
				<div className="ksfe-ticker-tail">
					<span className="ksfe-ticker-pipe">|</span>
				</div>
			</div>
		</div>
	)
}
