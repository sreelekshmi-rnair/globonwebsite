'use client'
import Link from 'next/link'

export default function Section1() {
	const contactInfo = [
		{
			icon: "flaticon-marker",
			title: "Office Address",
			details: (
				<Link
					href="https://maps.google.com/?q=Globon+Business+Solutions+Kodungallur"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: '#334155', textDecoration: 'none', lineHeight: '1.6', display: 'block' }}
				>
					18/520 1st floor, Dharmaraja building, Opp. Siva temple, Sringapuram, Kodungallur, Thrissur, 680664
				</Link>
			),
			actionText: "View on Google Maps →",
			actionHref: "https://maps.google.com/?q=Globon+Business+Solutions+Kodungallur"
		},
		{
			icon: "flaticon-phone-call",
			title: "Contact Numbers",
			details: (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<div>
						<strong style={{ color: '#0f172a' }}>Phone: </strong>
						<a href="tel:+919846053539" style={{ color: '#1f4e7a', fontWeight: 700, textDecoration: 'none' }}>
							+91 98460 53539
						</a>
					</div>
					<div>
						<strong style={{ color: '#0f172a' }}>WhatsApp: </strong>
						<a href="https://wa.me/919846053539" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 700, textDecoration: 'none' }}>
							+91 98460 53539
						</a>
					</div>
				</div>
			),
			actionText: "Chat on WhatsApp →",
			actionHref: "https://wa.me/919846053539"
		},
		{
			icon: "flaticon-open-mail",
			title: "Email Address",
			details: (
				<div>
					<a
						href="mailto:globonfinance@gmail.com"
						style={{ color: '#1f4e7a', fontWeight: 700, textDecoration: 'none', wordBreak: 'break-all' }}
					>
						globonfinance@gmail.com
					</a>
					<p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '13px' }}>
						Send us your query anytime. We reply within 2 hours.
					</p>
				</div>
			),
			actionText: "Send an Email →",
			actionHref: "mailto:globonfinance@gmail.com"
		},
		{
			icon: "flaticon-clock",
			title: "Working Hours",
			details: (
				<div>
					<p style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
						9.30 AM – 6.00 PM
					</p>
					<p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '14px' }}>
						Monday to Saturday (Sunday Closed)
					</p>
				</div>
			),
			actionText: "Visit Our Office →",
			actionHref: "#contact-form"
		}
	]

	return (
		<section className="tf-spacing-1" style={{ background: '#edf5fd', padding: '80px 0 70px' }}>
			<div className="tf-container">
				<div className="text-center mb-50">
					<span style={{
						background: '#ffffff',
						color: '#1f4e7a',
						fontWeight: 800,
						fontSize: '12px',
						letterSpacing: '1px',
						textTransform: 'uppercase',
						padding: '6px 16px',
						borderRadius: '20px',
						border: '1px solid #dce8f5',
						display: 'inline-block',
						marginBottom: '12px'
					}}>
						Direct Reach
					</span>
					<h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0f172a' }}>
						Connect With <span style={{ color: '#f4b52d' }}>Globon</span>
					</h2>
					<p style={{ color: '#475569', fontSize: '16px', maxWidth: '620px', margin: '12px auto 0' }}>
						Our financial and business advisory specialists in Kodungallur are always ready to assist you.
					</p>
				</div>

				<div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
					{contactInfo.map((card, idx) => (
						<div
							key={idx}
							style={{
								background: '#ffffff',
								borderRadius: '16px',
								border: '1px solid #dce8f5',
								padding: '32px 26px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow: '0 4px 20px rgba(31, 78, 122, 0.05)',
								transition: 'transform 0.2s ease, box-shadow 0.2s ease'
							}}
						>
							<div>
								<div style={{
									width: '56px',
									height: '56px',
									borderRadius: '12px',
									background: '#edf5fd',
									color: '#1f4e7a',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '24px',
									marginBottom: '20px',
									border: '1px solid #dce8f5'
								}}>
									<i className={card.icon} />
								</div>
								<h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
									{card.title}
								</h3>
								<div style={{ fontSize: '15px', color: '#334155', marginBottom: '20px' }}>
									{card.details}
								</div>
							</div>
							<div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
								<Link
									href={card.actionHref}
									target={card.actionHref.startsWith('http') ? '_blank' : '_self'}
									rel="noopener noreferrer"
									style={{ color: '#1f4e7a', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}
								>
									{card.actionText}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
