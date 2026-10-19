import Link from 'next/link'

export default function Section1() {
	return (
		<section className="ksfe-sig-section" id="signature-schemes">
			<div className="tf-container w-1780">
				{/* Top Header Row matching Image 2 */}
				<div className="ksfe-sig-header">
					<h2 className="ksfe-sig-title" style={{
						fontSize: 'clamp(28px, 3.2vw, 38px)',
						fontWeight: 500,
						color: '#000000',
						textTransform: 'uppercase',
						letterSpacing: '0.4px',
						lineHeight: 1.2,
						margin: 0,
						fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
					}}>
						SIGNATURE SCHEMES
					</h2>
					<Link href="/our-service" className="ksfe-sig-explore-btn">
						<span>Explore All</span>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</Link>
				</div>

				{/* Cards Grid matching Image 2 */}
				<div className="ksfe-sig-grid">
					{/* Card 1: Loans & Advances */}
					<div className="ksfe-sig-card wow fadeInUp" data-wow-delay="0s">
						<Link href="/services/loans-advances" className="ksfe-sig-visual-wrap" aria-label="Loans & Advances">
							<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
								{/* Soft ground pedestal ellipse */}
								<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

								{/* Upward Growth Bar Chart (Image 2 style) */}
								<rect x="52" y="98" width="22" height="60" rx="3" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
								<rect x="78" y="68" width="22" height="90" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
								<rect x="104" y="42" width="22" height="116" rx="3" fill="#0EA5E9" stroke="#0F172A" strokeWidth="2" />

								{/* Trend dashed line with target circle */}
								<path d="M 63 92 L 89 62 L 115 36" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
								<circle cx="115" cy="36" r="4.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />

								{/* Light Blue Piggy Bank (exact parallel to Image 2) */}
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
								<path 
									d="M 136 120 C 136 142 150 152 178 152 C 206 152 216 138 216 120" 
									fill="none" 
									stroke="#BFDBFE" 
									strokeWidth="4" 
									strokeLinecap="round" 
								/>

								{/* Front Legs */}
								<rect x="136" y="152" width="14" height="15" rx="4" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
								<rect x="190" y="152" width="14" height="15" rx="4" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />

								{/* Ear */}
								<path d="M 148 68 C 142 46 158 44 166 64 Z" fill="#BFDBFE" stroke="#0F172A" strokeWidth="2" />

								{/* Snout */}
								<ellipse cx="118" cy="116" rx="12" ry="17" fill="#60A5FA" stroke="#0F172A" strokeWidth="2.5" />
								<circle cx="115" cy="112" r="2.2" fill="#0F172A" />
								<circle cx="115" cy="120" r="2.2" fill="#0F172A" />

								{/* Friendly Eye */}
								<ellipse cx="144" cy="98" rx="3.5" ry="4" fill="#0F172A" />
								<circle cx="142.5" cy="96.5" r="1.3" fill="#FFFFFF" />
								<path d="M 139 91 Q 145 87 151 92" fill="none" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" />

								{/* Tail Curl */}
								<path d="M 228 112 C 238 108 244 100 236 94 C 230 92 228 98 233 100" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

								{/* Coin Slot */}
								<ellipse cx="176" cy="62" rx="13" ry="3.5" fill="#0F172A" />

								{/* Gold Coin dropping in */}
								<g transform="translate(176, 42)">
									<ellipse cx="0" cy="0" rx="11" ry="8" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
									<ellipse cx="0" cy="0" rx="8" ry="5.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" strokeDasharray="2 1" />
									<text x="0" y="3" fontSize="8.5" fontWeight="900" textAnchor="middle" fill="#0F172A">₹</text>
								</g>

								{/* Stacks of Silver Coins in Foreground (Image 2 style) */}
								{/* Stack 1 (Right) */}
								<g transform="translate(232, 138)">
									{/* Coin base 1 */}
									<path d="M 0 10 C 0 14 26 14 26 10 L 26 18 C 26 22 0 22 0 18 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="13" cy="10" rx="13" ry="4.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
									
									{/* Coin base 2 */}
									<path d="M 0 4 C 0 8 26 8 26 4 L 26 10 C 26 14 0 14 0 10 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="13" cy="4" rx="13" ry="4.5" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />

									{/* Coin base 3 */}
									<path d="M 0 -2 C 0 2 26 2 26 -2 L 26 4 C 26 8 0 8 0 4 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="13" cy="-2" rx="13" ry="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
									<text x="13" y="1" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
								</g>

								{/* Stack 2 (Center Left) */}
								<g transform="translate(98, 148)">
									<path d="M 0 4 C 0 8 22 8 22 4 L 22 10 C 22 14 0 14 0 10 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="11" cy="4" rx="11" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
									<path d="M 0 -1 C 0 3 22 3 22 -1 L 22 4 C 22 8 0 8 0 4 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="11" cy="-1" rx="11" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
									<text x="11" y="2" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
								</g>

								{/* Gold Bar (Ingot) on right */}
								<g transform="translate(262, 142)">
									<polygon points="0,8 14,0 36,0 22,8" fill="#FDE047" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="0,8 22,8 22,17 0,17" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="22,8 36,0 36,9 22,17" fill="#CA8A04" stroke="#0F172A" strokeWidth="1.5" />
								</g>
							</svg>
						</Link>
						<div className="ksfe-sig-content">
							<h3 className="ksfe-sig-card-title" style={{
								fontSize: 'clamp(19px, 1.8vw, 22px)',
								fontWeight: 500,
								color: '#000000',
								textTransform: 'uppercase',
								letterSpacing: '0.4px',
								lineHeight: 1.25,
								margin: '0 0 12px 0',
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								<Link href="/services/loans-advances">Loans &amp; Advances</Link>
							</h3>
							<p className="ksfe-sig-card-desc">
								Business, Home, Personal, Project &amp; Vehicle loans with rapid 48-hour approvals and minimal documentation.
							</p>
							<div className="ksfe-sig-divider" />
							<ul className="ksfe-sig-bullets">
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/loans-advances">48-Hour Rapid Approval Guarantee</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/loans-advances">PMEGP &amp; Stand-Up India Subsidies</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/loans-advances">Lowest Rates &amp; Zero Hidden Fees</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Card 2: Business & Compliance */}
					<div className="ksfe-sig-card wow fadeInUp" data-wow-delay="0.1s">
						<Link href="/services/business-financial-solutions" className="ksfe-sig-visual-wrap" aria-label="Business & Compliance">
							<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
								{/* Soft ground pedestal ellipse */}
								<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

								{/* Transparent 3D Glass Box (exact match to Card 2 in Image 2!) */}
								<polygon points="125,82 185,52 245,82 185,112" fill="rgba(224, 242, 254, 0.7)" stroke="#0F172A" strokeWidth="2" />
								<polygon points="125,82 185,112 185,160 125,130" fill="rgba(186, 230, 253, 0.55)" stroke="#0F172A" strokeWidth="2" />
								<polygon points="185,112 245,82 245,130 185,160" fill="rgba(125, 211, 252, 0.65)" stroke="#0F172A" strokeWidth="2" />

								{/* Brand Accent Corner */}
								<line x1="245" y1="82" x2="245" y2="130" stroke="#0366A2" strokeWidth="4" strokeLinecap="round" />
								<line x1="185" y1="52" x2="245" y2="82" stroke="#0366A2" strokeWidth="2.5" />

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
									<rect x="6" y="7" width="44" height="9" rx="2" fill="#1F4E7A" />
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
									<path d="M 16 10 C 21 16 23 24 23 25 L 9 25 C 9 24 11 16 16 10 Z" fill="#1F4E7A" stroke="#0F172A" strokeWidth="1.5" />
									{/* Porthole window */}
									<circle cx="16" cy="34" r="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
									<circle cx="14.5" cy="32.5" r="1.5" fill="#FFFFFF" />
									{/* Wings */}
									<path d="M 6 44 L 0 54 L 6 54 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
									<path d="M 26 44 L 32 54 L 26 54 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
								</g>

								{/* Compliance Shield with Verified Checkmark */}
								<g transform="translate(244, 114)">
									<path d="M 18 2 L 32 7 C 32 20 25 28 18 33 C 11 28 4 20 4 7 Z" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
									<path d="M 11 16 L 16 21 L 25 11" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
								</g>

								{/* Stacks of Silver Coins in Foreground */}
								<g transform="translate(108, 145)">
									<path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
									<path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
									<ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
									<text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
								</g>
							</svg>
						</Link>
						<div className="ksfe-sig-content">
							<h3 className="ksfe-sig-card-title" style={{
								fontSize: 'clamp(19px, 1.8vw, 22px)',
								fontWeight: 500,
								color: '#000000',
								textTransform: 'uppercase',
								letterSpacing: '0.4px',
								lineHeight: 1.25,
								margin: '0 0 12px 0',
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								<Link href="/services/business-financial-solutions">Business &amp; Compliance</Link>
							</h3>
							<p className="ksfe-sig-card-desc">
								Company registrations, GST, ITR, auditing, trademark, ISO, and corporate licenses for startups and established enterprises.
							</p>
							<div className="ksfe-sig-divider" />
							<ul className="ksfe-sig-bullets">
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/business-financial-solutions">Pvt Ltd, LLP &amp; Udyam Registration</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/business-financial-solutions">GST / ITR Filing &amp; Auditing</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/services/business-financial-solutions">Trademark, ISO &amp; Export-Import (IEC)</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Card 3: Strategy, Real Estate & Tech */}
					<div className="ksfe-sig-card wow fadeInUp" data-wow-delay="0.2s">
						<Link href="/services/real-estate-solutions" className="ksfe-sig-visual-wrap" aria-label="Strategy, Real Estate & Tech">
							<svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
								{/* Soft ground pedestal ellipse */}
								<ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />

								{/* Modern 3D Isometric Commercial Building / High-Rise (Real Estate) */}
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

								{/* Soft Blue Money Bag with ₹ Rupee Symbol (exact match to Card 3 in Image 2!) */}
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

									{/* Deep Navy ₹ Rupee Symbol on Bag */}
									<text x="42" y="74" fontSize="28" fontWeight="900" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif">₹</text>
								</g>

								{/* Gold Bullion Bars stacked (exact match to Card 3 in Image 2!) */}
								<g transform="translate(230, 130)">
									{/* Bottom Bar 1 */}
									<polygon points="0,10 14,3 38,3 24,10" fill="#FDE047" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="0,10 24,10 24,19 0,19" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="24,10 38,3 38,12 24,19" fill="#CA8A04" stroke="#0F172A" strokeWidth="1.5" />

									{/* Top Bar 2 */}
									<polygon points="8,3 22,-4 46,-4 32,3" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="8,3 32,3 32,12 8,12" fill="#FACC15" stroke="#0F172A" strokeWidth="1.5" />
									<polygon points="32,3 46,-4 46,5 32,12" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
								</g>

								{/* Modern Payment & Tech Credit Cards (exact match to Card 4 in Image 2!) */}
								<g transform="translate(216, 68) rotate(8)">
									{/* Card 1 (Back Dark Blue) */}
									<rect x="0" y="0" width="60" height="38" rx="4" fill="#1F4E7A" stroke="#0F172A" strokeWidth="1.8" />
									<rect x="0" y="8" width="60" height="6" fill="#0F172A" />

									{/* Card 2 (Front Teal/Blue with Chip) */}
									<g transform="translate(8, 12)">
										<rect x="0" y="0" width="60" height="38" rx="4" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
										{/* Chip */}
										<rect x="8" y="10" width="10" height="8" rx="1.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1" />
										{/* Card Lines */}
										<line x1="8" y1="26" x2="36" y2="26" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
										<circle cx="48" cy="26" r="4.5" fill="#EF4444" opacity="0.8" />
										<circle cx="53" cy="26" r="4.5" fill="#F59E0B" opacity="0.8" />
									</g>
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
						</Link>
						<div className="ksfe-sig-content">
							<h3 className="ksfe-sig-card-title" style={{
								fontSize: 'clamp(19px, 1.8vw, 22px)',
								fontWeight: 500,
								color: '#000000',
								textTransform: 'uppercase',
								letterSpacing: '0.4px',
								lineHeight: 1.25,
								margin: '0 0 12px 0',
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								<Link href="/services/real-estate-solutions">Strategy, Real Estate &amp; Tech</Link>
							</h3>
							<p className="ksfe-sig-card-desc">
								Financial optimization, real estate finance, property documentation, and digital marketing &amp; ERP/CRM solutions.
							</p>
							<div className="ksfe-sig-divider" />
							<ul className="ksfe-sig-bullets">
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/our-service">Project Reports &amp; Pitch Decks</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/our-service">Property Valuation &amp; LAP Assistance</Link>
								</li>
								<li className="ksfe-sig-bullet-item">
									<span className="bullet-asterisk">✻</span>
									<Link href="/our-service">ERP/CRM &amp; Digital Marketing</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
