'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Section7() {
	const [openIdx, setOpenIdx] = useState(null)

	const whyItems = [
		{
			title: "Trusted and Reliable Financial Institution",
			desc: "Founded with a mission to empower entrepreneurs, MSMEs, and individuals, Globon operates with verified bank partnerships, ethical advisory standards, and transparent fee structures across Kerala and India."
		},
		{
			title: "Wide Array of Financial Products and Services",
			desc: "From retail personal, home, and vehicle loans to ₹10Cr+ corporate project financing, PMEGP/Mudra subsidies, bank project reports, and GST/tax compliance—all delivered under one roof."
		},
		{
			title: "Leader in Loan Assistance & Bank Liaison",
			desc: "We coordinate directly with 30+ leading partner banks and NBFCs, streamlining paperwork, maximizing borrower eligibility, and securing competitive interest rates without bureaucratic hurdles."
		},
		{
			title: "Extensive Network of Branches across Kerala",
			desc: "With 194+ collection and client support centers throughout Thrissur, Ernakulam, Malappuram, and all 14 districts, local doorstep documentation assistance is always within your reach."
		}
	]

	return (
		<section className="ksfe-why-exact-section" id="why-choose-us" style={{ backgroundColor: '#ffffff', padding: '95px 0 100px 0' }}>
			<div className="tf-container w-1780">
				<div className="row align-items-center g-5">
					{/* Left Column: Heading and Accordion List */}
					<div className="col-lg-6">
						<div style={{ paddingRight: '28px' }}>
							<h2 className="why-globon-heading" style={{
								fontSize: 'clamp(28px, 3.2vw, 38px)',
								color: '#000000',
								letterSpacing: '0.4px',
								textTransform: 'uppercase',
								marginBottom: '30px',
								lineHeight: 1.2,
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								<span style={{ fontWeight: 800 }}>WHY</span> <span style={{ fontWeight: 400 }}>GLOBON?</span>
							</h2>

							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{whyItems.map((item, idx) => {
									const isOpen = openIdx === idx
									return (
										<div
											key={idx}
											className="why-globon-item"
											style={{
												borderBottom: '1px solid #e5e7eb',
												padding: '26px 0',
												transition: 'all 0.2s ease'
											}}
										>
											<button
												onClick={() => setOpenIdx(isOpen ? null : idx)}
												type="button"
												aria-expanded={isOpen}
												style={{
													width: '100%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
													background: 'transparent',
													border: 'none',
													padding: 0,
													cursor: 'pointer',
													textAlign: 'left'
												}}
											>
												<span className="why-globon-question" style={{
													fontSize: 'clamp(22px, 2.2vw, 30px)',
													fontWeight: 500,
													color: '#000000',
													letterSpacing: '-0.2px',
													lineHeight: 1.35,
													paddingRight: '16px',
													fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
												}}>
													{item.title}
												</span>
												<span className="why-globon-toggle-btn" style={{
													fontSize: '34px',
													fontWeight: 300,
													color: '#16a34a',
													lineHeight: 1,
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: '38px',
													height: '38px',
													flexShrink: 0,
													transition: 'transform 0.2s ease',
													userSelect: 'none'
												}}>
													{isOpen ? '−' : '+'}
												</span>
											</button>
											{isOpen && (
												<div className="why-globon-answer" style={{
													marginTop: '16px',
													paddingRight: '32px',
													color: '#374151',
													fontSize: '19px',
													lineHeight: 1.65,
													fontWeight: 400,
													fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif",
													animation: 'fadeIn 0.25s ease'
												}}>
													{item.desc}
												</div>
											)}
										</div>
									)
								})}
							</div>
						</div>
					</div>

					{/* Right Column: Hero Visual with Green Dots & Floating Badges matching Image 2 */}
					<div className="col-lg-6">
						<div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
							
							{/* Top Accent: Green Dot Matrix Pattern (Image 2 style) */}
							<div style={{
								position: 'absolute',
								top: '-26px',
								left: '60px',
								zIndex: 1,
								pointerEvents: 'none'
							}}>
								<svg width="140" height="26" viewBox="0 0 140 26" fill="none">
									{[...Array(6)].map((_, c) => (
										[...Array(2)].map((_, r) => (
											<circle key={`top-${c}-${r}`} cx={12 + c * 22} cy={6 + r * 13} r="2.8" fill="#fbb411" />
										))
									))}
								</svg>
							</div>

							{/* Main Image Frame (Couple looking at laptop matching Image 2) */}
							<div style={{
								borderRadius: '20px',
								overflow: 'hidden',
								position: 'relative',
								boxShadow: '0 16px 45px rgba(0, 0, 0, 0.08)',
								backgroundColor: '#f8fafc'
							}}>
								<Image
									src="/images/section/why-ksfe-couple.jpg"
									alt="Why Globon Business Solutions - Trusted Financial Partner"
									width={700}
									height={530}
									style={{
										width: '100%',
										height: 'auto',
										display: 'block',
										objectFit: 'cover'
									}}
									priority
								/>
							</div>

							{/* Top-Right Floating Shield Badge (Image 2 style) */}
							<div style={{
								position: 'absolute',
								top: '-24px',
								right: '-16px',
								width: '76px',
								height: '76px',
								backgroundColor: '#ffffff',
								borderRadius: '18px',
								boxShadow: '0 14px 34px rgba(0, 0, 0, 0.12)',
								border: '1px solid #f1f5f9',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								zIndex: 10
							}}>
								<div style={{
									width: '46px',
									height: '46px',
									borderRadius: '13px',
									backgroundColor: '#0284c7',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
								}}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
							</div>

							{/* Bottom-Left Floating Capital Badge (Image 2 signature card!) */}
							<div style={{
								position: 'absolute',
								bottom: '18px',
								left: '-24px',
								backgroundColor: '#ffffff',
								borderRadius: '16px',
								boxShadow: '0 16px 38px rgba(15, 23, 42, 0.13)',
								border: '1px solid #f1f5f9',
								padding: '16px 24px',
								display: 'flex',
								alignItems: 'center',
								gap: '16px',
								zIndex: 10
							}}>
								{/* Blue & Orange Split Pie Chart Icon */}
								<svg width="38" height="38" viewBox="0 0 38 38">
									{/* Blue 3/4 wedge */}
									<path d="M 19 19 L 19 3 A 16 16 0 1 0 35 19 Z" fill="#0366a2" />
									{/* Orange 1/4 wedge */}
									<path d="M 21 17 L 35 17 A 16 16 0 0 0 21 3 Z" fill="#f59e0b" />
								</svg>
								<div>
									<div style={{
										fontSize: '17px',
										fontWeight: 800,
										color: '#0f172a',
										lineHeight: 1.2
									}}>
										₹250Cr Authorized
									</div>
									<div style={{
										fontSize: '17px',
										fontWeight: 800,
										color: '#0f172a',
										lineHeight: 1.2
									}}>
										Capital
									</div>
								</div>
							</div>

							{/* Bottom-Right Accent: Green Dot Matrix Pattern (Image 2 style) */}
							<div style={{
								position: 'absolute',
								bottom: '-28px',
								right: '20px',
								zIndex: 1,
								pointerEvents: 'none'
							}}>
								<svg width="140" height="26" viewBox="0 0 140 26" fill="none">
									{[...Array(6)].map((_, c) => (
										[...Array(2)].map((_, r) => (
											<circle key={`bottom-${c}-${r}`} cx={12 + c * 22} cy={6 + r * 13} r="2.8" fill="#fbb411" />
										))
									))}
								</svg>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
