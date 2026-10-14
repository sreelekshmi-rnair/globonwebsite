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
			<section className="s-service tf-spacing-1" id="loans-section" style={{ paddingTop: '70px', paddingBottom: '80px' }}>
				<div className="tf-container">
					<div className="row">
						{/* Left Column: Heading, Image, Overview, Trust Badges & Free Assessment CTA */}
						<div className="col-lg-6 mb-40 mb-lg-0">
							<div className="content service-left-sticky service-left-panel">
								<p className="s-sub-title" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px' }}>
									<i className="icon-angles-right moveLeftToRight" />
									Our Comprehensive Services
								</p>
								<h2 className="s-title text-anime-wave-right" style={{ fontSize: '32px', lineHeight: '1.25', marginBottom: '22px', color: '#0f172a' }}>
									Everything You Need to Scale &amp; Secure Funding <span style={{ color: '#f59e0b' }}>Under One Roof</span>
								</h2>

								{/* Image with comfortable breathing room */}
								<div className="image tf-hover" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)', marginBottom: '22px' }}>
									<div className="hover-1 hover-14" style={{ width: "100%", height: "290px" }}>
										<Image
											width={600}
											height={400}
											sizes="(max-width: 768px) 100vw, 550px"
											style={{ width: "100%", height: "290px", objectFit: "cover", objectPosition: "center 25%", display: "block" }}
											src="/images/section/s-service.jpg"
											alt="Globon Comprehensive Financial Services"
											className="lazyload tf-animate-2"
										/>
									</div>
								</div>

								{/* Descriptive overview text */}
								<p className="text" style={{ fontSize: '14.5px', lineHeight: '1.65', color: '#475569', marginBottom: '18px' }}>
									Globon combines business consulting with rapid funding and digital automation. Whether you need a home loan or ₹10+ Crores in enterprise project finance and tax compliance, we guide and execute every step.
								</p>

								{/* Key Trust Highlights */}
								<div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '13.5px', color: '#1e293b', fontWeight: 600 }}>
										<span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, flexShrink: 0 }}>✓</span>
										<span>48-Hour Rapid Loan Sanctions via 30+ Partner Banks</span>
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '13.5px', color: '#1e293b', fontWeight: 600 }}>
										<span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, flexShrink: 0 }}>✓</span>
										<span>End-to-End Compliance, GST, Auditing &amp; Company Setup</span>
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 0, fontSize: '13.5px', color: '#1e293b', fontWeight: 600 }}>
										<span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, flexShrink: 0 }}>✓</span>
										<span>100% Transparent Process with Zero Hidden Charges</span>
									</div>
								</div>

								{/* CTA Button and Live Counter Stats */}
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
									<Link href="/#consultation" className="tf-btn" style={{ padding: '12px 28px' }}>
										Get Free Assessment
										<i className="icon-chevron-right" />
									</Link>
									<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
										<div className="counter-wrap" style={{ textAlign: 'center' }}>
											<div style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
												<span className="odometer"><CounterUp count={50} /></span>+
											</div>
											<span style={{ fontSize: '11.5px', color: '#64748b' }}>Clients Scaled</span>
										</div>
										<div style={{ width: '1px', height: '22px', background: '#cbd5e1' }} />
										<div className="counter-wrap" style={{ textAlign: 'center' }}>
											<div style={{ fontSize: '17px', fontWeight: 800, color: '#f59e0b', lineHeight: 1.1 }}>
												₹<span className="odometer"><CounterUp count={200} /></span>Cr+
											</div>
											<span style={{ fontSize: '11.5px', color: '#64748b' }}>Funding Facilitated</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Dynamic Services directly from Database */}
						<div className="col-lg-6" style={{ paddingLeft: '8px' }}>
							{loading ? (
								<div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>
									Loading services...
								</div>
							) : services.length === 0 ? (
								<div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', color: '#64748b' }}>
									No services added yet. Add services in the Admin Portal to display them here.
								</div>
							) : (
								services.map((service, index) => (
									<div key={service.id} className="service-premium-card wow fadeInUp" data-wow-delay={`${index * 0.08}s`}>
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
								))
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
