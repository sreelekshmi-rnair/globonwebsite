'use client'

import Image from 'next/image'
import Link from 'next/link'

const coreServices = [
	{ title: 'Loans', slug: 'loans' },
	{ title: 'Business Services', slug: 'business-services' },
	{ title: 'Study Abroad', slug: 'study-abroad' },
	{ title: 'Insurance', slug: 'insurance' },
	{ title: 'Real Estate', slug: 'real-estate' },
	{ title: 'Digital Services', slug: 'digital-services' }
]

export default function Section3() {
	return (
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

					{/* Right Column: KSFE Style Typography & Globon 6 Small Service Cards */}
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						<div style={{ paddingLeft: '14px' }}>
							<h2 style={{
								fontSize: 'clamp(28px, 3.2vw, 42px)',
								color: '#0369a1',
								textTransform: 'uppercase',
								lineHeight: '1.2',
								letterSpacing: '0.5px',
								marginBottom: '20px',
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								<span className="heading-bold" style={{ fontWeight: 800 }}>EXPLORE OUR PRODUCTS</span><br />
								<span className="heading-normal" style={{ fontWeight: 400 }}>&amp; SERVICES</span>
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

							{/* 6 Services in Small Cards (matching the size of Know More button) */}
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
									gap: '14px',
									maxWidth: '520px'
								}}
							>
								{coreServices.map((service) => (
									<Link
										key={service.slug}
										href={`/services/${service.slug}`}
										className="globon-service-pill-btn"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											backgroundColor: '#59bdfc',
											color: '#0f172a',
											fontWeight: 600,
											fontSize: '15px',
											padding: '13px 22px',
											borderRadius: '6px',
											textDecoration: 'none',
											transition: 'all 0.25s ease',
											boxShadow: '0 4px 14px rgba(89, 189, 252, 0.25)'
										}}
									>
										<span style={{ whiteSpace: 'nowrap' }}>{service.title}</span>
										<span style={{ fontSize: '17px', fontWeight: 700, marginLeft: '8px' }}>↗</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
