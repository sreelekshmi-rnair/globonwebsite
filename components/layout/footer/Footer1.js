'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer className="tf-footer globon-footer" style={{ background: '#1c446a', color: '#ffffff', paddingTop: '70px' }}>
				<div className="tf-container">
					<div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px 0', marginBottom: '50px' }}>
						
						{/* Column 1: Logo & Company Summary */}
						<div className="col-lg-4 col-md-6 mb-30" style={{ paddingRight: '25px' }}>
							<div style={{
								background: '#ffffff',
								borderRadius: '4px',
								padding: '12px 22px',
								display: 'inline-block',
								marginBottom: '22px'
							}}>
								<Link href="/">
									<Image
										src="/images/logo/logo_.webp"
										alt="Globon Business Solutions"
										width={160}
										height={52}
										style={{ height: '46px', width: 'auto', objectFit: 'contain', display: 'block' }}
									/>
								</Link>
							</div>
							<p className="footer-desc" style={{
								color: '#e2e8f0',
								fontSize: '15px',
								lineHeight: '1.7',
								margin: 0,
								maxWidth: '360px'
							}}>
								Globon Business Solutions offers trusted financial services, loans, insurance schemes, real estate consulting, company registrations, and modern digital/IT licensing solutions.
							</p>
						</div>

						{/* Column 2: Quick Links */}
						<div className="col-lg-2 col-md-6 col-6 mb-30">
							<h4 className="footer-col-title" style={{
								color: '#f59e0b',
								fontSize: '20px',
								fontWeight: 700,
								marginBottom: '22px'
							}}>
								Quick links
							</h4>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
								{[
									{ label: 'About', href: '/about-us' },
									{ label: 'Services', href: '/our-service' },
									{ label: 'Project Report', href: '/our-service#business' },
									{ label: 'Contact Us', href: '/contact' }
								].map((item, idx) => (
									<li key={idx} style={{ marginBottom: '14px' }}>
										<Link
											href={item.href}
											className="footer-nav-link"
											style={{
												color: '#ffffff',
												fontSize: '15px',
												textDecoration: 'none',
												display: 'inline-flex',
												alignItems: 'center',
												gap: '8px',
												transition: 'color 0.2s'
											}}
											onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
											onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
										>
											<span style={{ opacity: 0.7 }}>-</span>
											<span>{item.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Column 3: Popular Services */}
						<div className="col-lg-3 col-md-6 col-6 mb-30">
							<h4 className="footer-col-title" style={{
								color: '#f59e0b',
								fontSize: '20px',
								fontWeight: 700,
								marginBottom: '22px'
							}}>
								Popular Services
							</h4>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
								{[
									{ label: 'Loans & Advances', href: '/our-service#loans' },
									{ label: 'Insurance Solutions', href: '/our-service#insurance' },
									{ label: 'Real Estate Consulting', href: '/our-service#real-estate' }
								].map((item, idx) => (
									<li key={idx} style={{ marginBottom: '16px' }}>
										<Link
											href={item.href}
											className="footer-nav-link"
											style={{
												color: '#ffffff',
												fontSize: '15px',
												textDecoration: 'none',
												transition: 'color 0.2s',
												display: 'inline-block'
											}}
											onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
											onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Column 4: Contact Us */}
						<div className="col-lg-3 col-md-6 mb-30">
							<h4 className="footer-col-title" style={{
								color: '#f59e0b',
								fontSize: '20px',
								fontWeight: 700,
								marginBottom: '22px'
							}}>
								Contact us
							</h4>
							<div className="footer-contact-card" style={{
								border: '1px solid rgba(255, 255, 255, 0.18)',
								borderRadius: '8px',
								padding: '24px 20px',
								background: 'rgba(255, 255, 255, 0.04)',
								display: 'flex',
								flexDirection: 'column',
								gap: '18px'
							}}>
								{/* Address */}
								<div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<span className="footer-contact-text" style={{ color: '#ffffff', fontSize: '14px', lineHeight: '1.6' }}>
										18/520 1st floor, Dharmaraja building, Opp. Siva temple, Sringapuram, Kodungallur, Thrissur, 680664
									</span>
								</div>

								{/* Phone */}
								<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
									</svg>
									<a
										href="tel:+919846053539"
										className="footer-contact-link"
										style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
										onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
										onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
									>
										+91 98460 53539
									</a>
								</div>

								{/* Email */}
								<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
										<polyline points="22,6 12,13 2,6"></polyline>
									</svg>
									<a
										href="mailto:globonfinance@gmail.com"
										className="footer-contact-link"
										style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', wordBreak: 'break-all' }}
										onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
										onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
									>
										globonfinance@gmail.com
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>

				{/* Bottom Copyright Bar */}
				<div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', padding: '24px 0' }}>
					<div className="tf-container">
						<div className="row" style={{ alignItems: 'center' }}>
							<div className="col-md-6 text-center text-md-start mb-15 mb-md-0">
								<p className="footer-copyright-text" style={{ margin: 0, color: '#e2e8f0', fontSize: '14px' }}>
									© 2026 Globon Business Solutions. All Rights Reserved. | Designed by{' '}
									<a href="https://cognetz.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 600 }}>
										cognetz.com
									</a>
								</p>
							</div>
							<div className="col-md-6 text-center text-md-end">
								<div style={{ display: 'inline-flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
									<Link href="/about-us" className="footer-bottom-link" style={{ color: '#e2e8f0', fontSize: '14px', textDecoration: 'none' }}>
										About
									</Link>
									<span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
									<Link href="/our-service" className="footer-bottom-link" style={{ color: '#e2e8f0', fontSize: '14px', textDecoration: 'none' }}>
										Services
									</Link>
									<span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
									<Link href="/contact" className="footer-bottom-link" style={{ color: '#e2e8f0', fontSize: '14px', textDecoration: 'none' }}>
										Contact
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Floating WhatsApp Action Button */}
				<a
					href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20need%20assistance"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Chat on WhatsApp"
					className="globon-whatsapp-float"
					style={{
						position: 'fixed',
						bottom: '30px',
						right: '30px',
						width: '56px',
						height: '56px',
						borderRadius: '50%',
						background: '#25D366',
						color: '#ffffff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						boxShadow: '0 4px 16px rgba(37, 211, 102, 0.45)',
						zIndex: 9999,
						transition: 'transform 0.2s ease, box-shadow 0.2s ease',
						cursor: 'pointer'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'scale(1.08)'
						e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'scale(1)'
						e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.45)'
					}}
				>
					<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.767.461 3.49 1.336 5.006L2 22l5.123-1.343a9.988 9.988 0 0 0 4.908 1.282c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.337c-1.503 0-2.973-.404-4.256-1.168l-.305-.181-3.16.829.843-3.079-.199-.317a8.318 8.318 0 0 1-1.277-4.39c0-4.607 3.748-8.354 8.354-8.354 4.606 0 8.354 3.747 8.354 8.354 0 4.606-3.748 8.354-8.354 8.354zm4.582-6.242c-.251-.126-1.488-.735-1.719-.818-.231-.084-.399-.126-.567.126-.168.252-.65.818-.797.986-.147.168-.294.189-.545.063-.251-.126-1.062-.392-2.023-1.248-.748-.667-1.253-1.491-1.4-1.743-.147-.252-.016-.388.11-.513.113-.113.251-.294.377-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.365-.777-1.869-.204-.492-.412-.425-.567-.433-.147-.008-.315-.01-.483-.01s-.441.063-.672.315c-.231.252-.882.861-.882 2.1 0 1.239.903 2.436 1.029 2.604.126.168 1.777 2.713 4.305 3.805.602.26 1.072.416 1.439.532.605.192 1.155.165 1.59.1.485-.072 1.488-.609 1.698-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
					</svg>
				</a>
			</footer>
		</>
	)
}
