'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const signatureServices = [
	{
		id: 'loans',
		title: 'Loans',
		slug: 'loans',
		badge: 'FINANCIAL SOLUTIONS',
		bgVisual: '#EEF6FA',
		desc: 'Business, Home, Personal, Project & Vehicle loans with rapid 48-hour approvals and minimal documentation.',
		bullets: [
			'48-Hour Rapid Approval Guarantee',
			'PMEGP & Stand-Up India Subsidies',
			'Lowest Interest Rates & Zero Hidden Fees'
		]
	},
	{
		id: 'business-services',
		title: 'Business Services',
		slug: 'business-services',
		badge: 'CORPORATE & COMPLIANCE',
		bgVisual: '#EAF0FF',
		desc: 'Company registrations, GST, ITR, auditing, trademark, ISO, and corporate licenses for startups and enterprises.',
		bullets: [
			'Pvt Ltd, LLP & Udyam Registration',
			'GST / ITR Filing & Statutory Compliance',
			'Bankable CMA Project Reports & Licensing'
		]
	},
	{
		id: 'study-abroad',
		title: 'Study Abroad',
		slug: 'study-abroad',
		badge: 'GLOBAL ADMISSIONS',
		bgVisual: '#FFF7ED',
		desc: 'Premier university admissions, fast-track education loans, student visas, and pre-departure assistance for global education.',
		bullets: [
			'UK, USA, Canada, Europe & Australia',
			'100% Course & Living Cost Loan Support',
			'Visa Filing, SOP & Documentation Support'
		]
	},
	{
		id: 'insurance',
		title: 'Insurance',
		slug: 'insurance',
		badge: 'TOTAL PROTECTION',
		bgVisual: '#F5F3FF',
		desc: 'Safeguard what matters most against medical emergencies, unexpected life risks, travel setbacks, and business liabilities.',
		bullets: [
			'Cashless Family Health Floater Plans',
			'Comprehensive Term Life Insurance',
			'International Student & Travel Insurance'
		]
	},
	{
		id: 'real-estate',
		title: 'Real Estate',
		slug: 'real-estate',
		badge: 'LAND & ASSETS',
		bgVisual: '#F0FDF4',
		desc: 'Expert assistance in buying, selling, leasing residential & commercial property with title verification and LAP finance.',
		bullets: [
			'Verified Residential & Commercial Deals',
			'Legal Title Due Diligence & Valuation',
			'Structured Loan Against Property (LAP)'
		]
	},
	{
		id: 'digital-services',
		title: 'Digital Services',
		slug: 'digital-services',
		badge: 'TECH & GROWTH',
		bgVisual: '#F0F9FF',
		desc: 'Ultra-responsive modern websites, custom software, SEO, and targeted lead generation campaigns across Meta and Google.',
		bullets: [
			'Modern Web Development & Custom Apps',
			'Google & Meta Ads Lead Generation',
			'Search Engine Optimization (SEO) & Branding'
		]
	}
]

function getServiceIllustration(id) {
	switch (id) {
		case 'loans':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* Upward Growth Bar Chart (Image style) */}
					<rect x="52" y="98" width="22" height="60" rx="3" fill="#59bdfc" stroke="#0F172A" strokeWidth="2" />
					<rect x="78" y="68" width="22" height="90" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
					<rect x="104" y="42" width="22" height="116" rx="3" fill="#0EA5E9" stroke="#0F172A" strokeWidth="2" />

					{/* Trend dashed line with target circle */}
					<path d="M 63 92 L 89 62 L 115 36" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
					<circle cx="115" cy="36" r="6" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
					<text x="115" y="38.5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif">₹</text>

					{/* Light Blue Piggy Bank */}
					{/* Back Legs */}
					<rect x="144" y="148" width="13" height="15" rx="4" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />
					<rect x="200" y="148" width="13" height="15" rx="4" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />

					{/* Piggy Body */}
					<path 
						d="M 228 112 C 228 82 202 62 168 62 C 130 62 120 88 120 114 C 120 142 142 158 178 158 C 214 158 228 140 228 112 Z" 
						fill="#93C5FD" 
						stroke="#0F172A" 
						strokeWidth="2.5" 
					/>

					{/* Piggy Belly Highlight */}
					<path d="M 148 142 C 160 148 185 148 198 142" stroke="#BFDBFE" strokeWidth="3" strokeLinecap="round" fill="none" />

					{/* Front Legs */}
					<rect x="132" y="148" width="13" height="15" rx="4" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
					<rect x="188" y="148" width="13" height="15" rx="4" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />

					{/* Piggy Snout */}
					<ellipse cx="120" cy="116" rx="14" ry="17" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />
					<circle cx="117" cy="112" r="2.5" fill="#0F172A" />
					<circle cx="117" cy="120" r="2.5" fill="#0F172A" />

					{/* Piggy Eye */}
					<circle cx="148" cy="98" r="4.5" fill="#0F172A" />
					<circle cx="146.5" cy="96.5" r="1.5" fill="#FFFFFF" />

					{/* Piggy Ear */}
					<path d="M 160 63 C 160 48 175 52 178 65 Z" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />
					<path d="M 164 61 C 164 53 172 55 174 63 Z" fill="#93C5FD" />

					{/* Curly Tail */}
					<path d="M 228 108 C 236 106 242 110 240 115 C 238 120 232 118 232 114" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

					{/* Coin Slot */}
					<rect x="162" y="58" width="18" height="4" rx="2" fill="#0F172A" />

					{/* Gold Coin Dropping In */}
					<g transform="translate(162, 28)">
						<ellipse cx="9" cy="9" rx="9" ry="9" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
						<ellipse cx="9" cy="9" rx="6.5" ry="6.5" fill="#FBBF24" />
						<text x="9" y="12.5" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif">₹</text>
					</g>

					{/* Stacks of Silver Coins in Foreground */}
					<g transform="translate(98, 145)">
						<ellipse cx="12" cy="12" rx="12" ry="4" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 5 C 0 9 24 9 24 5 L 24 12 C 24 16 0 16 0 12 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>

					{/* Right Coins Stack */}
					<g transform="translate(208, 138)">
						<ellipse cx="12" cy="16" rx="12" ry="4" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 10 C 0 14 24 14 24 10 L 24 16 C 24 20 0 20 0 16 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="10" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 5 C 0 9 24 9 24 5 L 24 10 C 24 14 0 14 0 10 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="5" rx="12" ry="4" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>

					{/* Gold Ingot / Bullion */}
					<g transform="translate(236, 148)">
						<polygon points="0,7 12,2 32,2 20,7" fill="#FDE047" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="0,7 20,7 20,15 0,15" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="20,7 32,2 32,10 20,15" fill="#CA8A04" stroke="#0F172A" strokeWidth="1.5" />
					</g>
				</svg>
			)

		case 'business-services':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* Transparent 3D Glass Box */}
					<polygon points="125,82 185,52 245,82 185,112" fill="rgba(224, 242, 254, 0.7)" stroke="#0F172A" strokeWidth="2" />
					<polygon points="125,82 185,112 185,160 125,130" fill="rgba(186, 230, 253, 0.55)" stroke="#0F172A" strokeWidth="2" />
					<polygon points="185,112 245,82 245,130 185,160" fill="rgba(125, 211, 252, 0.65)" stroke="#0F172A" strokeWidth="2" />

					{/* Brand Accent Corner */}
					<line x1="245" y1="82" x2="245" y2="130" stroke="#59bdfc" strokeWidth="4" strokeLinecap="round" />
					<line x1="185" y1="52" x2="245" y2="82" stroke="#59bdfc" strokeWidth="2.5" />

					{/* Coin slot on top of glass box */}
					<rect x="170" y="78" width="30" height="5" rx="2.5" fill="#0F172A" />

					{/* Coins inside the transparent box */}
					<g transform="translate(172, 126)">
						<ellipse cx="10" cy="12" rx="14" ry="5" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="10" cy="7" rx="14" ry="5" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="10" cy="2" rx="14" ry="5" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
						<text x="10" y="5" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>

					{/* Official Company Registration Document on left */}
					<g transform="translate(48, 65) rotate(-6)">
						<rect x="0" y="0" width="56" height="74" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
						<rect x="6" y="7" width="44" height="9" rx="2" fill="#59bdfc" />
						<line x1="6" y1="23" x2="50" y2="23" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
						<line x1="6" y1="30" x2="40" y2="30" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
						<line x1="6" y1="37" x2="46" y2="37" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
						
						{/* Golden Official Stamp / Wax Seal */}
						<circle cx="28" cy="54" r="10" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
						<circle cx="28" cy="54" r="7" fill="#FBBF24" />
						{/* Seal ribbons */}
						<path d="M 23 62 L 20 72 L 26 69 L 28 62" fill="#EF4444" stroke="#0F172A" strokeWidth="1" />
						<path d="M 33 62 L 36 72 L 30 69 L 28 62" fill="#DC2626" stroke="#0F172A" strokeWidth="1" />
						<path d="M 25 54 L 27 56 L 31 52" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</g>

					{/* Startup Rocket taking off upward */}
					<g transform="translate(202, 28) rotate(15)">
						{/* Exhaust flame & thrust */}
						<path d="M 12 55 Q 16 78 20 55" fill="#EF4444" />
						<path d="M 14 55 Q 16 68 18 55" fill="#FBBF24" />

						{/* Rocket Fuselage */}
						<path d="M 16 10 C 26 22 26 42 26 55 L 6 55 C 6 42 6 22 16 10 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
						{/* Nose cone */}
						<path d="M 16 10 C 21 16 23 24 23 25 L 9 25 C 9 24 11 16 16 10 Z" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.5" />
						{/* Porthole window */}
						<circle cx="16" cy="34" r="5" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.5" />
						<circle cx="14.5" cy="32.5" r="1.5" fill="#FFFFFF" />
						{/* Wings */}
						<path d="M 6 44 L 0 54 L 6 54 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 26 44 L 32 54 L 26 54 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
					</g>

					{/* Compliance Shield with Verified Checkmark */}
					<g transform="translate(254, 114)">
						<path d="M 18 2 L 32 7 C 32 20 25 28 18 33 C 11 28 4 20 4 7 Z" fill="#59bdfc" stroke="#0F172A" strokeWidth="2" />
						<path d="M 11 16 L 16 21 L 25 11" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					</g>

					{/* Stacks of Silver Coins in Foreground */}
					<g transform="translate(142, 148)">
						<path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>
				</svg>
			)

		case 'study-abroad':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* Stylized Globe in Center */}
					<g transform="translate(110, 68)">
						{/* Globe Stand Base */}
						<ellipse cx="50" cy="94" rx="28" ry="7" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
						<path d="M 50 82 L 50 94" stroke="#0F172A" strokeWidth="3" />
						<path d="M 22 50 C 22 75 35 84 50 84 C 65 84 78 75 78 50" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
						
						{/* Globe Sphere */}
						<circle cx="50" cy="46" r="38" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2.5" />
						{/* Meridians and parallels */}
						<ellipse cx="50" cy="46" rx="20" ry="38" fill="none" stroke="#59bdfc" strokeWidth="1.5" />
						<line x1="12" y1="46" x2="88" y2="46" stroke="#59bdfc" strokeWidth="1.5" />
						<path d="M 18 30 Q 50 40 82 30" fill="none" stroke="#59bdfc" strokeWidth="1.5" />
						<path d="M 18 62 Q 50 52 82 62" fill="none" stroke="#59bdfc" strokeWidth="1.5" />
						{/* Continents stylized */}
						<path d="M 38 32 C 44 28 56 30 52 42 C 48 48 36 46 38 32 Z" fill="#60A5FA" opacity="0.6" />
						<path d="M 58 50 C 66 48 70 56 64 64 C 58 66 54 58 58 50 Z" fill="#60A5FA" opacity="0.6" />
					</g>

					{/* Academic Graduation Mortarboard Cap on Left */}
					<g transform="translate(42, 60) rotate(-10)">
						{/* Skullcap */}
						<path d="M 16 38 C 16 48 44 48 44 38 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
						{/* Rhombus Diamond Top */}
						<polygon points="30,12 58,24 30,36 2,24" fill="#0F172A" stroke="#0F172A" strokeWidth="2" />
						<polygon points="30,14 55,24 30,34 5,24" fill="#59bdfc" />
						{/* Center button */}
						<circle cx="30" cy="24" r="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
						{/* Golden Tassel */}
						<path d="M 30 24 C 20 28 12 36 12 46" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
						<rect x="8" y="46" width="7" height="12" rx="2" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
					</g>

					{/* Jet Airplane Soaring Diagonally Upward on Right */}
					<g transform="translate(185, 26) rotate(-22)">
						{/* Jet Fuselage */}
						<path d="M 12 42 C 18 22 28 8 36 4 C 40 2 44 6 42 12 C 40 22 36 42 32 54 L 12 42 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
						{/* Cockpit window */}
						<path d="M 34 8 C 36 7 38 9 37 12 C 36 13 34 11 34 8 Z" fill="#59bdfc" />
						{/* Left Main Wing */}
						<polygon points="26,24 6,36 10,42 30,32" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.8" />
						{/* Right Main Wing */}
						<polygon points="36,20 62,14 60,18 38,28" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.8" />
						{/* Tail Fin */}
						<polygon points="14,48 4,56 8,60 18,52" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
					</g>

					{/* Flight Path Contrail Line */}
					<path d="M 120 120 Q 170 80 200 48" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />

					{/* Stack of Academic Books at Bottom Right */}
					<g transform="translate(216, 128)">
						{/* Book 1 (Bottom Amber) */}
						<rect x="0" y="16" width="56" height="12" rx="2" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
						<rect x="5" y="19" width="46" height="6" fill="#FEF08A" />
						{/* Book 2 (Middle Navy) */}
						<rect x="4" y="6" width="52" height="12" rx="2" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.8" />
						<rect x="9" y="9" width="42" height="6" fill="#E2E8F0" />
						{/* Book 3 (Top Cyan) */}
						<rect x="8" y="-4" width="48" height="12" rx="2" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.8" />
						<rect x="13" y="-1" width="38" height="6" fill="#BAE6FD" />
					</g>

					{/* Passport / Visa Document on Left */}
					<g transform="translate(54, 118) rotate(6)">
						<rect x="0" y="0" width="38" height="48" rx="3" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1.8" />
						<circle cx="19" cy="20" r="10" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
						<ellipse cx="19" cy="20" rx="5" ry="10" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
						<line x1="9" y1="20" x2="29" y2="20" stroke="#FBBF24" strokeWidth="1.5" />
						<rect x="8" y="34" width="22" height="4" rx="1" fill="#FDE047" />
					</g>

					{/* Silver Currency Coins for Education Loan */}
					<g transform="translate(100, 148)">
						<ellipse cx="10" cy="5" rx="10" ry="3.5" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 3.5 20 3.5 20 0 L 20 5 C 20 8.5 0 8.5 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="10" cy="0" rx="10" ry="3.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="10" y="2.5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>
				</svg>
			)

		case 'insurance':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* Large Protective Umbrella Canopy */}
					<g transform="translate(85, 32)">
						{/* Top Umbrella Tip / Ferrule */}
						<rect x="81" y="2" width="6" height="12" rx="2" fill="#0F172A" />
						<circle cx="84" cy="2" r="3" fill="#F59E0B" />

						{/* Umbrella Segments */}
						{/* Center Left Segment */}
						<path d="M 84 14 C 54 14 36 34 32 68 C 48 64 68 64 84 68 Z" fill="#59bdfc" stroke="#0F172A" strokeWidth="2.2" />
						{/* Center Right Segment */}
						<path d="M 84 14 C 114 14 132 34 136 68 C 120 64 100 64 84 68 Z" fill="#59bdfc" stroke="#0F172A" strokeWidth="2.2" />
						{/* Far Left Scallop */}
						<path d="M 84 14 C 38 14 12 38 4 68 C 14 64 24 64 32 68 Z" fill="#59bdfc" stroke="#0F172A" strokeWidth="2.2" />
						{/* Far Right Scallop */}
						<path d="M 84 14 C 130 14 156 38 164 68 C 154 64 144 64 136 68 Z" fill="#0F172A" stroke="#0F172A" strokeWidth="2.2" />

						{/* Umbrella Shaft */}
						<line x1="84" y1="68" x2="84" y2="126" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
						{/* J-Curve Handle */}
						<path d="M 84 126 C 84 136 96 136 96 128" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
					</g>

					{/* Medical Health Cross Shield on Left */}
					<g transform="translate(62, 94)">
						<path d="M 22 2 L 40 8 C 40 26 30 36 22 42 C 14 36 4 26 4 8 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
						{/* White Plus Sign */}
						<rect x="18" y="12" width="8" height="18" rx="1.5" fill="#FFFFFF" />
						<rect x="13" y="17" width="18" height="8" rx="1.5" fill="#FFFFFF" />
					</g>

					{/* Sheltered Family Home under Umbrella */}
					<g transform="translate(142, 102)">
						{/* House Wall */}
						<rect x="12" y="24" width="34" height="34" rx="2" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
						{/* Triangular Roof */}
						<polygon points="29,6 2,26 56,26" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
						{/* Door */}
						<rect x="23" y="38" width="12" height="20" rx="1" fill="#59bdfc" stroke="#0F172A" strokeWidth="1.5" />
						{/* Window */}
						<rect x="34" y="32" width="8" height="8" rx="1" fill="#59bdfc" stroke="#0F172A" strokeWidth="1" />
						{/* Heart symbol on house */}
						<path d="M 29 18 C 29 15 25 13 23 16 C 21 13 17 15 17 18 C 17 22 23 25 23 25 C 23 25 29 22 29 18 Z" fill="#EF4444" />
					</g>

					{/* Safety Padlock on Right */}
					<g transform="translate(224, 108)">
						{/* Shackle */}
						<path d="M 14 16 L 14 10 C 14 3 28 3 28 10 L 28 16" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
						{/* Lock Body */}
						<rect x="4" y="16" width="34" height="28" rx="4" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
						<circle cx="21" cy="28" r="3.5" fill="#0F172A" />
						<polygon points="19.5,28 22.5,28 23,36 19,36" fill="#0F172A" />
					</g>

					{/* ECG Pulse Heartbeat Wave */}
					<path d="M 70 82 L 86 82 L 92 70 L 98 94 L 104 76 L 110 84 L 122 84" fill="none" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

					{/* Stacks of Insurance Reserve Coins in Foreground */}
					<g transform="translate(186, 145)">
						<path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>
				</svg>
			)

		case 'real-estate':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* 3D Isometric Commercial High-Rise Building */}
					<g transform="translate(68, 55)">
						{/* Building Left Face */}
						<polygon points="0,32 32,16 32,105 0,121" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />
						{/* Building Right Face */}
						<polygon points="32,16 68,32 68,121 32,105" fill="#3B82F6" stroke="#0F172A" strokeWidth="2" />
						{/* Building Roof */}
						<polygon points="0,32 32,16 68,32 36,48" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />

						{/* Windows Left */}
						<line x1="8" y1="48" x2="24" y2="40" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="8" y1="62" x2="24" y2="54" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="8" y1="76" x2="24" y2="68" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="8" y1="90" x2="24" y2="82" stroke="#DBEAFE" strokeWidth="2" />

						{/* Windows Right */}
						<line x1="40" y1="44" x2="60" y2="52" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="40" y1="58" x2="60" y2="66" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="40" y1="72" x2="60" y2="80" stroke="#DBEAFE" strokeWidth="2" />
						<line x1="40" y1="86" x2="60" y2="94" stroke="#DBEAFE" strokeWidth="2" />
					</g>

					{/* Location Map Pin on Building */}
					<g transform="translate(126, 30)">
						<path d="M 16 0 C 7 0 0 7 0 16 C 0 28 16 42 16 42 C 16 42 32 28 32 16 C 32 7 25 0 16 0 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
						<circle cx="16" cy="15" r="7" fill="#FFFFFF" />
						<polygon points="16,10 11,14 13,14 13,19 19,19 19,14 21,14" fill="#0F172A" />
					</g>

					{/* Money Bag with Rupee symbol in Center */}
					<g transform="translate(152, 60)">
						{/* Money bag body */}
						<path 
							d="M 28 32 C 14 32 4 48 4 68 C 4 88 18 98 42 98 C 66 98 80 88 80 68 C 80 48 70 32 56 32 Z" 
							fill="#93C5FD" 
							stroke="#0F172A" 
							strokeWidth="2.5" 
						/>
						{/* Tied Ruffled Top */}
						<path d="M 28 32 C 26 22 34 16 42 16 C 50 16 58 22 56 32 Z" fill="#BFDBFE" stroke="#0F172A" strokeWidth="2" />
						{/* Tie Rope Ribbon with Bow */}
						<rect x="26" y="30" width="32" height="6" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
						<circle cx="42" cy="33" r="4.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1" />

						{/* Rupee Symbol on Bag */}
						<text x="42" y="74" fontSize="28" fontWeight="900" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif">₹</text>
					</g>

					{/* Credit Card behind Money Bag (matching reference image) */}
					<g transform="translate(206, 52) rotate(6)">
						<rect x="0" y="0" width="56" height="36" rx="4" fill="#59bdfc" stroke="#0F172A" strokeWidth="2" />
						{/* Magnetic strip */}
						<line x1="0" y1="9" x2="56" y2="9" stroke="#0F172A" strokeWidth="2.5" />
						{/* Gold EMV Chip */}
						<rect x="7" y="15" width="10" height="8" rx="1.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1" />
						{/* Dual Card Circles (Mastercard red/orange) */}
						<circle cx="42" cy="26" r="4.5" fill="#EF4444" />
						<circle cx="48" cy="26" r="4.5" fill="#F59E0B" fillOpacity="0.85" />
					</g>

					{/* Golden Real Estate Key */}
					<g transform="translate(236, 68) rotate(25)">
						<circle cx="14" cy="14" r="12" fill="none" stroke="#0F172A" strokeWidth="2" />
						<circle cx="14" cy="14" r="8" fill="#FDE047" stroke="#0F172A" strokeWidth="1.8" />
						<circle cx="14" cy="14" r="3.5" fill="#FFFFFF" />
						{/* Shaft */}
						<rect x="25" y="11" width="30" height="5" rx="1.5" fill="#FACC15" stroke="#0F172A" strokeWidth="1.8" />
						{/* Teeth */}
						<rect x="44" y="16" width="4" height="6" rx="1" fill="#EAB308" stroke="#0F172A" strokeWidth="1.2" />
						<rect x="51" y="16" width="4" height="8" rx="1" fill="#EAB308" stroke="#0F172A" strokeWidth="1.2" />
					</g>

					{/* Gold Bullion Bars stacked */}
					<g transform="translate(230, 130)">
						{/* Bottom Bar 1 */}
						<polygon points="0,10 14,3 38,3 24,10" fill="#FDE047" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="0,10 24,10 24,19 0,19" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="20,10 38,3 38,12 24,19" fill="#CA8A04" stroke="#0F172A" strokeWidth="1.5" />

						{/* Top Bar 2 */}
						<polygon points="8,3 22,-4 46,-4 32,3" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="8,3 32,3 32,12 8,12" fill="#FACC15" stroke="#0F172A" strokeWidth="1.5" />
						<polygon points="32,3 46,-4 46,5 32,12" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
					</g>

					{/* Stacks of Silver Coins in Front */}
					<g transform="translate(132, 146)">
						<path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
						<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
						<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
					</g>
				</svg>
			)

		case 'digital-services':
			return (
				<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Soft ground pedestal ellipse */}
					<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

					{/* Modern Laptop in Center */}
					<g transform="translate(82, 58)">
						{/* Laptop Screen Bezel */}
						<rect x="18" y="6" width="114" height="74" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
						{/* Screen Display */}
						<rect x="23" y="12" width="104" height="62" rx="3" fill="#0F172A" />
						
						{/* Web UI Elements inside Screen */}
						<rect x="28" y="16" width="94" height="8" rx="2" fill="#59bdfc" />
						<circle cx="33" cy="20" r="1.5" fill="#EF4444" />
						<circle cx="38" cy="20" r="1.5" fill="#F59E0B" />
						<circle cx="43" cy="20" r="1.5" fill="#22C55E" />

						{/* Code Brackets on Screen */}
						<text x="46" y="44" fontSize="18" fontWeight="900" fill="#0369a1" fontFamily="monospace">&lt; / &gt;</text>
						
						{/* Bar chart analytics on screen */}
						<rect x="80" y="50" width="7" height="18" rx="1" fill="#F59E0B" />
						<rect x="90" y="40" width="7" height="28" rx="1" fill="#59bdfc" />
						<rect x="100" y="32" width="7" height="36" rx="1" fill="#22C55E" />
						<path d="M 83 48 L 93 38 L 103 30" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />

						{/* Laptop Base / Keyboard */}
						<polygon points="6,80 144,80 156,92 -6,92" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
						{/* Trackpad */}
						<rect x="62" y="83" width="26" height="7" rx="1.5" fill="#94A3B8" />
					</g>

					{/* Floating Cloud Storage on Left */}
					<g transform="translate(38, 42)">
						<path d="M 18 36 C 8 36 2 28 6 18 C 10 8 24 8 28 14 C 32 8 46 8 50 16 C 58 16 64 24 58 36 Z" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
						<path d="M 27 22 L 33 16 L 39 22" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<line x1="33" y1="16" x2="33" y2="30" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
					</g>

					{/* Mobile Smartphone on Right */}
					<g transform="translate(222, 68) rotate(8)">
						{/* Phone Body */}
						<rect x="0" y="0" width="46" height="84" rx="7" fill="#0F172A" stroke="#0F172A" strokeWidth="2.2" />
						{/* Screen */}
						<rect x="3" y="6" width="40" height="72" rx="4" fill="#F0F9FF" />
						{/* Speaker bar */}
						<line x1="18" y1="3" x2="28" y2="3" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
						
						{/* App UI Header */}
						<rect x="7" y="10" width="32" height="12" rx="3" fill="#59bdfc" />
						{/* Notification / Social Like Heart */}
						<circle cx="23" cy="40" r="11" fill="#EF4444" />
						<path d="M 23 38 C 23 35 20 34 18 36 C 16 34 13 35 13 38 C 13 41 18 44 18 44 C 18 44 23 41 23 38 Z" fill="#FFFFFF" transform="translate(2.5, 1)" />
						{/* Progress Bar */}
						<rect x="7" y="58" width="32" height="5" rx="2.5" fill="#E2E8F0" />
						<rect x="7" y="58" width="22" height="5" rx="2.5" fill="#F59E0B" />
					</g>

					{/* Target Bullseye / SEO Rocket */}
					<g transform="translate(230, 24)">
						<circle cx="20" cy="20" r="18" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
						<circle cx="20" cy="20" r="12" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
						<circle cx="20" cy="20" r="6" fill="#FBBF24" />
						{/* Arrow in Bullseye */}
						<line x1="34" y1="6" x2="22" y2="18" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
						<polygon points="34,6 27,6 34,13" fill="#0F172A" />
					</g>

					{/* Golden Gear Cogwheel */}
					<g transform="translate(68, 126)">
						<circle cx="16" cy="16" r="12" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
						<circle cx="16" cy="16" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
						<line x1="16" y1="1" x2="16" y2="6" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
						<line x1="16" y1="26" x2="16" y2="31" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
						<line x1="1" y1="16" x2="6" y2="16" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
						<line x1="26" y1="16" x2="31" y2="16" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
					</g>
				</svg>
			)

		default:
			return null
	}
}

export default function Section1() {
	const router = useRouter()

	return (
		<section className="ksfe-sig-section" id="signature-schemes">
			<div className="tf-container w-1780">
				{/* Top Header Row */}
				<div className="ksfe-sig-header" style={{ marginBottom: '36px' }}>
					<h2 className="ksfe-sig-title" style={{
						fontSize: 'clamp(28px, 3.2vw, 38px)',
						color: '#0369a1',
						textTransform: 'uppercase',
						letterSpacing: '0.4px',
						lineHeight: 1.2,
						margin: 0,
						fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
					}}>
						<span className="heading-bold" style={{ fontWeight: 800 }}>SIGNATURE</span> <span className="heading-normal" style={{ fontWeight: 400 }}>SCHEMES</span>
					</h2>
					<Link href="/services" className="ksfe-sig-explore-btn">
						<span>Explore All</span>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</Link>
				</div>

				{/* 6 Cards in 3x2 Grid (3 on 1st row, 3 on 2nd row) */}
				<div className="ksfe-sig-grid">
					{signatureServices.map((service, index) => {
						const serviceUrl = `/services/${service.slug}`
						return (
							<div
								key={service.id}
								className="ksfe-sig-card"
								onClick={() => router.push(serviceUrl)}
								style={{
									cursor: 'pointer',
									position: 'relative',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									height: '100%'
								}}
							>
								{/* Vector Illustration media banner matching reference image */}
								<Link
									href={serviceUrl}
									className="ksfe-sig-visual-wrap"
									aria-label={service.title}
									onClick={(e) => {
										e.stopPropagation()
									}}
									style={{
										backgroundColor: '#f0f4f9',
										position: 'relative',
										height: '240px',
										minHeight: '240px',
										borderRadius: '14px',
										overflow: 'hidden',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										padding: '10px',
										boxSizing: 'border-box'
									}}
								>
									{getServiceIllustration(service.id)}
								</Link>

								{/* Card Content */}
								<div className="ksfe-sig-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, paddingTop: '16px' }}>
									<h3 className="ksfe-sig-card-title" style={{
										fontSize: 'clamp(20px, 1.8vw, 24px)',
										fontWeight: 600,
										color: '#0369a1',
										textTransform: 'uppercase',
										letterSpacing: '0.4px',
										lineHeight: 1.25,
										margin: '0 0 10px 0',
										fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
									}}>
										<Link
											href={serviceUrl}
											onClick={(e) => e.stopPropagation()}
											style={{ color: '#0369a1', textDecoration: 'none' }}
										>
											{service.title}
										</Link>
									</h3>

									<p className="ksfe-sig-card-desc" style={{
										fontSize: '14px',
										fontWeight: 400,
										lineHeight: 1.5,
										color: '#475569',
										margin: '0 0 16px 0',
										minHeight: '42px'
									}}>
										{service.desc}
									</p>

									<div className="ksfe-sig-divider" style={{
										height: '1px',
										backgroundColor: '#f1f5f9',
										marginBottom: '14px',
										width: '100%'
									}} />

									<ul className="ksfe-sig-bullets" style={{ margin: '0 0 18px 0', padding: 0, listStyle: 'none' }}>
										{service.bullets.map((bullet, bIdx) => (
											<li key={bIdx} className="ksfe-sig-bullet-item" style={{
												display: 'flex',
												alignItems: 'center',
												gap: '8px',
												fontSize: '13.5px',
												color: '#1e293b',
												marginBottom: '8px'
											}}>
												<span className="bullet-asterisk" style={{ color: '#f59e0b', fontWeight: 700 }}>✻</span>
												<Link
													href={serviceUrl}
													onClick={(e) => e.stopPropagation()}
													style={{ color: 'inherit', textDecoration: 'none' }}
												>
													{bullet}
												</Link>
											</li>
										))}
									</ul>

									{/* Action Link at Bottom */}
									<div style={{ marginTop: 'auto', paddingTop: '10px' }}>
										<Link
											href={serviceUrl}
											onClick={(e) => e.stopPropagation()}
											style={{
												display: 'inline-flex',
												alignItems: 'center',
												gap: '6px',
												fontSize: '13.5px',
												fontWeight: 600,
												color: '#0369a1',
												textDecoration: 'none',
												transition: 'gap 0.2s ease'
											}}
										>
											<span>Explore {service.title}</span>
											<span style={{ fontSize: '15px' }}>↗</span>
										</Link>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
