'use client'

import { useState, useEffect } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'

export default function Section3() {
	const [services, setServices] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/api/services')
			.then(res => res.json())
			.then(data => {
				if (Array.isArray(data)) {
					setServices(data)
				}
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			<section className="s-service tf-spacing-1" id="loans-section" style={{ paddingTop: '90px', paddingBottom: '90px', background: '#ffffff' }}>
				<div className="tf-container w-1780">
					<div className="row align-items-center g-5">
						
						{/* Left Column: KSFE Style Graphic Hero Card with Floating Badges */}
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
								{/* Light sky-blue rounded card */}
								<div style={{
									background: '#dceefb',
									borderRadius: '28px',
									overflow: 'hidden',
									boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
									position: 'relative',
									aspectRatio: '4/3',
									width: '100%'
								}}>
									<Image
										src="/images/section/ksfe-services-hero.jpg"
										alt="Globon Comprehensive Financial & Business Services"
										fill
										sizes="(max-width: 768px) 100vw, 580px"
										style={{ objectFit: 'cover', objectPosition: 'center' }}
										priority
									/>
								</div>

								{/* Floating white badge overlapping bottom */}
								<div className="ksfe-products-badge">
									<div style={{
										width: '42px',
										height: '42px',
										borderRadius: '50%',
										background: '#1d4ed8',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '20px',
										fontWeight: 800,
										flexShrink: 0
									}}>
										✓
									</div>
									<div>
										<div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', lineHeight: 1.3 }}>
											Your home loan
										</div>
										<div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600, lineHeight: 1.3 }}>
											is approved
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: KSFE Style Typography & Globon Content */}
						<div className="col-lg-6 d-flex flex-column justify-content-center">
							<div style={{ paddingLeft: '14px' }}>
								<h2 style={{
									fontSize: 'clamp(28px, 3.2vw, 42px)',
									color: '#000000',
									textTransform: 'uppercase',
									lineHeight: '1.2',
									letterSpacing: '0.5px',
									marginBottom: '20px',
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									<span style={{ fontWeight: 800 }}>EXPLORE OUR PRODUCTS</span><br />
									<span style={{ fontWeight: 400 }}>&amp; SERVICES</span>
								</h2>

								<p style={{
									fontSize: '18px',
									fontWeight: 400,
									color: '#1e293b',
									lineHeight: '1.6',
									marginBottom: '28px',
									maxWidth: '560px',
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									Our innovative products &amp; services provide you with the flexibility and convenience you need to manage your finances.
								</p>

								{/* CTA Button matching user reference */}
								<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '28px' }}>
									<Link
										href="/our-service"
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: '10px',
											backgroundColor: '#0366a2',
											color: '#ffffff',
											fontWeight: 600,
											fontSize: '17px',
											padding: '14px 34px',
											borderRadius: '6px',
											textDecoration: 'none',
											transition: 'all 0.25s ease',
											boxShadow: '0 4px 16px rgba(3, 102, 162, 0.3)'
										}}
									>
										<span>Know More</span>
										<span style={{ fontSize: '18px', fontWeight: 700 }}>↗</span>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Optional: Render Dynamic Services if added from admin portal */}
					{services && services.length > 0 && (
						<div className="row g-4 mt-5">
							{services.map((service, index) => (
								<div key={service.id} className="col-lg-4 col-md-6">
									<div className="service-premium-card" style={{ height: '100%' }}>
										<div className="service-icon-box">
											<i className={service.icon || 'flaticon-return-of-investment'} />
										</div>
										<div className="service-card-body">
											<div className="service-card-header">
												<Link href={`/services/${service.slug}`} className="title">
													{index + 1}. {service.title}
												</Link>
												<span className="service-step-pill">
													{String(index + 1).padStart(2, '0')} • {service.category?.toUpperCase() || 'SERVICE'}
												</span>
											</div>
											<p className="text">
												{service.shortDescription}
											</p>
											<Link href={`/services/${service.slug}`} className="service-action-link">
												Explore {service.title}
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	)
}
