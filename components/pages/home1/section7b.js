'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Section7b() {
	return (
		<section className="ksfe-takeover-section" id="loan-takeover" style={{
			backgroundColor: '#f0f7fc',
			padding: '110px 0 100px',
			position: 'relative',
			overflow: 'hidden'
		}}>
			<div className="tf-container w-1780">
				<div className="row align-items-center g-5">
					
					{/* Left Column: Visual Collage matching KSFE exact layout */}
					<div className="col-lg-6 col-xl-6">
						<div style={{
							position: 'relative',
							width: '100%',
							maxWidth: '560px',
							margin: '0 auto',
							minHeight: '430px'
						}}>
							{/* Top Row: Handshake Image + Woman Thumbs Up Image */}
							<div style={{
								display: 'flex',
								alignItems: 'flex-start',
								gap: '22px',
								marginBottom: '22px'
							}}>
								{/* 1. Top-Left Handshake Image */}
								<div style={{
									flex: '1.4',
									position: 'relative',
									height: '190px',
									borderRadius: '20px',
									overflow: 'hidden',
									boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
									background: '#ffffff'
								}}>
									<Image
										src="/images/section/globon-takeover-handshake.jpg"
										alt="Trust and Partnership Handshake"
										fill
										sizes="(max-width: 768px) 50vw, 300px"
										style={{ objectFit: 'cover', objectPosition: 'center' }}
									/>
								</div>

								{/* 2. Top-Right Woman Advisor Image */}
								<div style={{
									flex: '1',
									position: 'relative',
									height: '220px',
									borderRadius: '20px',
									overflow: 'hidden',
									boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
									background: '#ffffff'
								}}>
									<Image
										src="/images/section/globon-takeover-woman.jpg"
										alt="Professional Financial Advisor"
										fill
										sizes="(max-width: 768px) 50vw, 220px"
										style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
									/>
								</div>
							</div>

							{/* Bottom Row: Green Handshake Icon Badge + Financial Advisor with Tablet + Dot Grid */}
							<div style={{
								display: 'flex',
								alignItems: 'center',
								gap: '20px'
							}}>
								{/* 3. Blue Icon Badge */}
								<div style={{
									width: '76px',
									height: '76px',
									borderRadius: '20px',
									backgroundColor: '#e0f2fe',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexShrink: 0,
									boxShadow: '0 8px 20px rgba(3, 102, 162, 0.15)'
								}}>
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
										<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
										<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
										<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
									</svg>
								</div>

								{/* 4. Bottom-Center Financial Advisor with Tablet */}
								<div style={{
									flex: '1.3',
									position: 'relative',
									height: '210px',
									borderRadius: '20px',
									overflow: 'hidden',
									boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
									background: '#ffffff'
								}}>
									<Image
										src="/images/section/globon-takeover-tablet.jpg"
										alt="Financial consultant presenting loan options on tablet"
										fill
										sizes="(max-width: 768px) 70vw, 340px"
										style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
									/>
								</div>

								{/* 5. Decorative Dot Grid Pattern */}
								<div style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(5, 8px)',
									gap: '14px',
									flexShrink: 0,
									padding: '6px'
								}}>
									{Array.from({ length: 25 }).map((_, i) => (
										<span
											key={i}
											style={{
												width: '6px',
												height: '6px',
												borderRadius: '50%',
												backgroundColor: '#a3bad6',
												opacity: 0.9,
												display: 'inline-block'
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Heading, Description & Green CTA Button */}
					<div className="col-lg-6 col-xl-6">
						<div style={{ paddingLeft: '15px', maxWidth: '580px' }}>
							
							<h2 className="takeover-heading" style={{
								fontFamily: "'Public Sans', 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
								fontSize: 'clamp(40px, 4.2vw, 52px)',
								fontWeight: 400,
								color: '#000000',
								textTransform: 'uppercase',
								lineHeight: '1.2',
								letterSpacing: '0.3px',
								marginBottom: '22px'
							}}>
								LOAN TAKEOVER &amp;<br />REFINANCING
							</h2>

							<p style={{
								fontSize: '18px',
								fontWeight: 500,
								color: '#1e293b',
								lineHeight: '1.6',
								marginBottom: '16px'
							}}>
								Globon offers a hassle-free way to take over high-interest loans through balance transfer and refinancing at significantly lower rates.
							</p>

							<p style={{
								fontSize: '15px',
								color: '#475569',
								lineHeight: '1.7',
								marginBottom: '32px'
							}}>
								Reduce your monthly EMIs, consolidate scattered liabilities into a structured credit facility, and unlock additional top-up capital up to ₹5 Crores for your business growth with zero documentation hassle.
							</p>

							<Link
								href="/#consultation"
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px',
									backgroundColor: '#0366a2',
									color: '#ffffff',
									fontWeight: 700,
									fontSize: '15px',
									padding: '14px 34px',
									borderRadius: '4px',
									textDecoration: 'none',
									transition: 'all 0.25s ease',
									boxShadow: '0 4px 14px rgba(3, 102, 162, 0.25)'
								}}
								className="ksfe-hover-btn"
							>
								<span>Know More</span>
								<span style={{ fontSize: '17px' }}>↗</span>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
