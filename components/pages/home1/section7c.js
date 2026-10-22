'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Section7c() {
	const sectionRef = useRef(null)
	const [progress, setProgress] = useState(0)
	const [manualStep, setManualStep] = useState(null)

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (!sectionRef.current) return

			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (!sectionRef.current) {
						ticking = false
						return
					}
					const rect = sectionRef.current.getBoundingClientRect()
					const windowHeight = window.innerHeight

					// Begin movement when the section enters viewport
					const start = windowHeight * 0.82
					const end = windowHeight * 0.08
					const totalRange = start - end

					if (totalRange > 0) {
						const current = start - rect.top
						const p = Math.max(0, Math.min(1, current / totalRange))
						setProgress(p)
						setManualStep(null)
					}
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		window.addEventListener('resize', handleScroll, { passive: true })
		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}
	}, [])

	const cards = [
		{
			id: 0,
			titleLine1: 'Subsidies &',
			titleLine2: 'Grants Facilitated',
			number: '₹100 Cr+',
			badge: 'Central & State Govt Schemes',
			bg: '#f59e0b',
			textColor: '#ffffff',
			topOffset: 0,
			zIndex: 1,
			shadowColor: 'rgba(245, 158, 11, 0.28)'
		},
		{
			id: 1,
			titleLine1: 'MSME & PMEGP',
			titleLine2: 'Units Sanctioned',
			number: '1,200+',
			badge: 'Subsidized Enterprise Loans',
			bg: '#0284c7',
			textColor: '#ffffff',
			topOffset: 125,
			zIndex: 2,
			shadowColor: 'rgba(2, 132, 199, 0.32)'
		},
		{
			id: 2,
			titleLine1: 'Collateral-Free',
			titleLine2: 'CGTMSE Guidance',
			number: '100%',
			badge: 'Zero Collateral Required',
			bg: '#0a3778',
			textColor: '#ffffff',
			topOffset: 250,
			zIndex: 3,
			shadowColor: 'rgba(10, 55, 120, 0.42)'
		}
	]

	// Continuous scroll calculation:
	// Card 0: in place from the start
	// Card 1: moves up proportionally between progress 0.20 and 0.55
	// Card 2: moves up proportionally between progress 0.58 and 0.92
	let card1P = 0
	if (progress <= 0.20) {
		card1P = 0
	} else if (progress >= 0.55) {
		card1P = 1
	} else {
		card1P = (progress - 0.20) / 0.35
	}

	let card2P = 0
	if (progress <= 0.58) {
		card2P = 0
	} else if (progress >= 0.92) {
		card2P = 1
	} else {
		card2P = (progress - 0.58) / 0.34
	}

	// Manual click override if user tapped an indicator pill
	if (manualStep === 0) {
		card1P = 0
		card2P = 0
	} else if (manualStep === 1) {
		card1P = 1
		card2P = 0
	} else if (manualStep === 2) {
		card1P = 1
		card2P = 1
	}

	const activeStep = manualStep !== null ? manualStep : (card2P >= 0.5 ? 2 : (card1P >= 0.5 ? 1 : 0))

	return (
		<section
			ref={sectionRef}
			className="globon-nri-section"
			id="govt-schemes"
			style={{
				backgroundColor: '#ffffff',
				padding: '105px 0 115px',
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			<style jsx>{`
				.nri-main-title,
				.nri-main-title * {
					color: #0f172a !important;
				}
				.nri-rollover-card {
					transition: transform 0.16s cubic-bezier(0.2, 0.9, 0.4, 1),
						opacity 0.16s ease-out,
						box-shadow 0.3s ease;
					will-change: transform, opacity;
				}
				.nri-rollover-card:hover {
					box-shadow: 0 28px 60px rgba(0, 0, 0, 0.24) !important;
				}
				.ksfe-hover-btn:hover {
					background-color: #025283 !important;
					transform: translateY(-2px);
				}
				@media (max-width: 991px) {
					.nri-stack-container {
						height: 430px !important;
						margin-top: 25px;
					}
					.nri-rollover-card {
						height: 195px !important;
						padding: 22px 26px !important;
					}
					.nri-stat-number {
						font-size: 46px !important;
					}
					.nri-stat-title {
						font-size: 19px !important;
					}
				}
				@media (max-width: 576px) {
					.nri-main-title {
						font-size: 18px !important;
						line-height: 1.35 !important;
						margin-bottom: 20px !important;
					}
					.nri-stack-container {
						height: 360px !important;
					}
					.nri-rollover-card {
						padding: 16px 20px !important;
						height: 160px !important;
						border-radius: 20px !important;
					}
					.nri-stat-number {
						font-size: 34px !important;
					}
					.nri-stat-title {
						font-size: 15px !important;
					}
				}
			`}</style>

			<div className="tf-container w-1780">
				<div className="row align-items-center g-5">
					
					{/* Left Column: Branding, Heading & Action */}
					<div className="col-lg-6 col-xl-6">
						<div style={{ maxWidth: '560px' }}>
							
							{/* Distinct Dual-Pill Badge */}
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'stretch',
									borderRadius: '8px',
									overflow: 'hidden',
									boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
									marginBottom: '26px',
									backgroundColor: '#ffffff'
								}}
							>
								{/* Orange Tag */}
								<div
									style={{
										backgroundColor: '#f59e0b',
										padding: '9px 18px',
										display: 'flex',
										alignItems: 'center',
										fontWeight: 900,
										fontSize: '15px',
										color: '#ffffff',
										letterSpacing: '1px'
									}}
								>
									GLOBON
								</div>
								{/* Brand Blue Tag */}
								<div
									style={{
										backgroundColor: '#0366a2',
										padding: '9px 20px',
										display: 'flex',
										alignItems: 'center',
										gap: '8px',
										color: '#ffffff',
										fontWeight: 700,
										fontSize: '15px',
										letterSpacing: '0.5px'
									}}
								>
									<span>GOVT SUBSIDY &amp; MSME DESK</span>
								</div>
							</div>

							{/* Section Heading with 3 clean lines */}
							<h2
								className="nri-main-title"
								style={{
									fontFamily: "'Public Sans', 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
									fontSize: 'clamp(20px, 1.85vw, 26px)',
									color: '#000000',
									lineHeight: 1.35,
									letterSpacing: '0.2px',
									textTransform: 'uppercase',
									marginBottom: '30px'
								}}
							>
								<span style={{ display: 'block', fontWeight: 800 }}>GOVERNMENT SUBSIDY &amp;</span>
								<span style={{ display: 'block', fontWeight: 800 }}>COLLATERAL-FREE LOANS</span>
								<span style={{ display: 'block', fontWeight: 400 }}>FOR ENTERPRISES</span>
							</h2>

							{/* Action Button */}
							<div>
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
									<span>Check Subsidy Eligibility</span>
									<span style={{ fontSize: '17px' }}>↗</span>
								</Link>
							</div>

						</div>
					</div>

					{/* Right Column: Scroll-Driven Stacking Cards */}
					<div className="col-lg-6 col-xl-6">
						<div
							style={{
								position: 'relative',
								width: '100%',
								maxWidth: '640px',
								margin: '0 auto'
							}}
						>
							<div
								className="nri-stack-container"
								style={{
									position: 'relative',
									width: '100%',
									height: '480px',
									overflow: 'hidden',
									borderRadius: '26px'
								}}
							>
								{cards.map((card) => {
									let cardY = 0
									let cardOpacity = 1
									let cardScale = 1

									if (card.id === 0) {
										cardY = 0
										cardOpacity = 1
										cardScale = card2P > 0.1 ? 0.97 : (card1P > 0.1 ? 0.985 : 1)
									} else if (card.id === 1) {
										// Moves up from below strictly proportional to scroll
										cardY = (1 - card1P) * 380
										cardOpacity = Math.min(1, card1P * 3.5 + 0.1)
										cardScale = card2P > 0.1 ? 0.985 : 1
									} else if (card.id === 2) {
										// Moves up from below strictly proportional to scroll
										cardY = (1 - card2P) * 380
										cardOpacity = Math.min(1, card2P * 3.5 + 0.1)
										cardScale = 1
									}

									return (
										<div
											key={card.id}
											className="nri-rollover-card"
											onClick={() => setManualStep(card.id)}
											style={{
												position: 'absolute',
												top: `${card.topOffset}px`,
												left: 0,
												right: 0,
												height: '225px',
												backgroundColor: card.bg,
												color: card.textColor,
												borderRadius: '26px',
												padding: '26px 36px 22px',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'space-between',
												boxShadow: `0 18px 42px ${card.shadowColor}`,
												zIndex: card.zIndex,
												transform: `translateY(${cardY}px) scale(${cardScale})`,
												transformOrigin: 'top center',
												opacity: cardOpacity,
												pointerEvents: cardOpacity > 0.4 ? 'auto' : 'none',
												cursor: 'pointer'
											}}
										>
											{/* Top Row: Title on Left, Big Stat on Right */}
											<div
												style={{
													display: 'flex',
													alignItems: 'flex-start',
													justifyContent: 'space-between',
													gap: '20px',
													width: '100%'
												}}
											>
												{/* Left: 2-Line Title */}
												<div
													className="nri-stat-title"
													style={{
														fontSize: '22px',
														fontWeight: 600,
														lineHeight: 1.25,
														color: card.textColor,
														maxWidth: '280px'
													}}
												>
													<div>{card.titleLine1}</div>
													<div>{card.titleLine2}</div>
												</div>

												{/* Right: Clean Numeric Stat */}
												<div
													className="nri-stat-number"
													style={{
														fontSize: '56px',
														fontWeight: 800,
														letterSpacing: '-1.5px',
														lineHeight: 1,
														color: card.textColor,
														whiteSpace: 'nowrap'
													}}
												>
													{card.number}
												</div>
											</div>

											{/* Bottom Row: Subtle Badge Tag */}
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													gap: '8px',
													marginTop: 'auto'
												}}
											>
												<span
													style={{
														display: 'inline-flex',
														alignItems: 'center',
														gap: '8px',
														backgroundColor: 'rgba(255, 255, 255, 0.22)',
														border: '1px solid rgba(255, 255, 255, 0.38)',
														borderRadius: '22px',
														padding: '5px 16px',
														fontSize: '13px',
														fontWeight: 600,
														color: '#ffffff',
														letterSpacing: '0.2px'
													}}
												>
													<span>✓</span>
													<span>{card.badge}</span>
												</span>
											</div>
										</div>
									)
								})}
							</div>

							{/* Step Indicator Pills reflecting scroll progression & clickable */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
									gap: '8px',
									marginTop: '18px',
									paddingRight: '12px'
								}}
							>
								{cards.map((c) => {
									const isCurrent = activeStep === c.id
									return (
										<button
											key={c.id}
											type="button"
											onClick={() => setManualStep(c.id)}
											style={{
												width: isCurrent ? '34px' : '10px',
												height: '10px',
												borderRadius: '5px',
												backgroundColor: isCurrent ? '#0366a2' : '#cbd5e1',
												border: 'none',
												padding: 0,
												cursor: 'pointer',
												transition: 'all 0.3s ease'
											}}
											aria-label={`Show card ${c.id + 1}`}
										/>
									)
								})}
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
