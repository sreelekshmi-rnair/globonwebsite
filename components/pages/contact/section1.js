'use client'
import Link from 'next/link'

export default function Section1() {
	const contactCards = [
		{
			badge: "Head Office",
			title: "Office Address",
			icon: (
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			),
			details: (
				<p style={{ margin: 0, fontSize: '16.5px', lineHeight: '1.7', color: '#334155' }}>
					18/520 1st Floor, Dharmaraja Building, Opp. Siva Temple, Sringapuram, Kodungallur, Thrissur, Kerala — 680664
				</p>
			),
			actionText: "View on Google Maps",
			actionHref: "https://maps.google.com/?q=Globon+Business+Solutions+Kodungallur"
		},
		{
			badge: "Direct Support",
			title: "Phone & WhatsApp",
			icon: (
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			),
			details: (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
					<div>
						<span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '2px' }}>Call Advisory Team:</span>
						<a href="tel:+919846053539" style={{ fontSize: '18px', fontWeight: 700, color: '#0366a2', textDecoration: 'none' }}>
							+91 98460 53539
						</a>
					</div>
					<div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
						<span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '2px' }}>Instant WhatsApp:</span>
						<a href="https://wa.me/919846053539" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: 700, color: '#16a34a', textDecoration: 'none' }}>
							+91 98460 53539
						</a>
					</div>
				</div>
			),
			actionText: "Chat on WhatsApp",
			actionHref: "https://wa.me/919846053539"
		},
		{
			badge: "Quick Response",
			title: "Email Inquiries",
			icon: (
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
					<polyline points="22,6 12,13 2,6"></polyline>
				</svg>
			),
			details: (
				<div>
					<a
						href="mailto:globonfinance@gmail.com"
						style={{ fontSize: '18px', fontWeight: 700, color: '#0366a2', textDecoration: 'none', display: 'inline-block', marginBottom: '4px' }}
					>
						globonfinance@gmail.com
					</a>
					<p style={{ margin: 0, fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
						Send us your loan or business inquiry. Our advisors review and reply within 2 hours.
					</p>
				</div>
			),
			actionText: "Compose Email",
			actionHref: "mailto:globonfinance@gmail.com"
		},
		{
			badge: "Office Timing",
			title: "Working Hours",
			icon: (
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
			),
			details: (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
					<div>
						<span style={{ fontSize: '18px', fontWeight: 700, color: '#000000', display: 'block' }}>
							9:30 AM – 6:00 PM
						</span>
						<span style={{ fontSize: '14.5px', color: '#64748b' }}>
							Monday to Saturday
						</span>
					</div>
					<div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
						<span style={{ fontSize: '16px', fontWeight: 700, color: '#dc2626', display: 'block' }}>
							Closed
						</span>
						<span style={{ fontSize: '14.5px', color: '#64748b' }}>
							Sunday &amp; Public Holidays
						</span>
					</div>
				</div>
			),
			actionText: "Schedule an Appointment",
			actionHref: "#contact-form"
		}
	]

	return (
		<section style={{ background: '#f8fafc', padding: '105px 0 115px 0' }}>
			<div className="tf-container about-page-container">
				{/* Section Header */}
				<div className="text-center mb-5">
					<p style={{
						color: '#0366a2',
						fontWeight: 700,
						fontSize: '13px',
						letterSpacing: '1.5px',
						textTransform: 'uppercase',
						marginBottom: '14px',
						display: 'inline-flex',
						alignItems: 'center',
						gap: '8px'
					}}>
						<i className="icon-angles-right" />
						Direct Channels &amp; Branch Reach
					</p>
					<h2 style={{
						fontSize: 'clamp(30px, 3.4vw, 42px)',
						fontWeight: 500,
						color: '#000000',
						textTransform: 'uppercase',
						letterSpacing: '0.4px',
						lineHeight: '1.2',
						marginBottom: '18px',
						fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
					}}>
						Connect With Globon
					</h2>
					<p style={{
						color: '#475569',
						fontSize: '18px',
						maxWidth: '780px',
						margin: '0 auto',
						lineHeight: '1.75',
						fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
					}}>
						Our loan specialists, subsidy advisors, and corporate compliance team in Kodungallur are always within your reach.
					</p>
				</div>

				{/* 2-Column Spacious Contact Cards Grid */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
					gap: '28px'
				}}>
					{contactCards.map((card, idx) => (
						<div
							key={idx}
							style={{
								background: '#ffffff',
								borderRadius: '22px',
								border: '1px solid #e2e8f0',
								padding: '36px 36px',
								display: 'flex',
								gap: '24px',
								alignItems: 'flex-start',
								boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
								transition: 'transform 0.25s ease, box-shadow 0.25s ease'
							}}
						>
							{/* Left Icon Box */}
							<div style={{
								width: '64px',
								height: '64px',
								borderRadius: '16px',
								background: '#edf5fd',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexShrink: 0,
								border: '1px solid #d0e3f7'
							}}>
								{card.icon}
							</div>

							{/* Right Content */}
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
									<h3 style={{
										fontSize: '20px',
										fontWeight: 600,
										color: '#000000',
										textTransform: 'uppercase',
										letterSpacing: '0.4px',
										margin: 0,
										fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
									}}>
										{card.title}
									</h3>
									<span style={{
										background: '#f8fafc',
										color: '#0366a2',
										fontWeight: 700,
										fontSize: '12px',
										letterSpacing: '0.5px',
										textTransform: 'uppercase',
										padding: '4px 12px',
										borderRadius: '12px',
										border: '1px solid #e2e8f0'
									}}>
										{card.badge}
									</span>
								</div>

								<div style={{ margin: '14px 0 20px 0' }}>
									{card.details}
								</div>

								<div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
									<Link
										href={card.actionHref}
										target={card.actionHref.startsWith('http') ? '_blank' : '_self'}
										rel="noopener noreferrer"
										style={{
											color: '#0366a2',
											fontSize: '15px',
											fontWeight: 700,
											textDecoration: 'none',
											display: 'inline-flex',
											alignItems: 'center',
											gap: '8px',
											transition: 'gap 0.2s ease'
										}}
									>
										<span>{card.actionText}</span>
										<span style={{ fontSize: '16px' }}>→</span>
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
