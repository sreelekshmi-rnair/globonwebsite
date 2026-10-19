'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Section7c() {
	// 3-step roll-over card stacking animation:
	// Step 0: Card 1 (Yellow 150K+) alone
	// Step 1: Card 2 (Blue 4350+) rolls up and stacks over Card 1
	// Step 2: Card 3 (Dark Blue 267K+) rolls up and stacks over Card 2
	const [activeStep, setActiveStep] = useState(0)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		if (isPaused) return

		// Step 0: 2.5s -> Step 1: 2.5s -> Step 2: 3.5s -> repeat
		const stepDurations = [2500, 2500, 3500]
		const currentDuration = stepDurations[activeStep] || 2500

		const timer = setTimeout(() => {
			setActiveStep((prev) => (prev + 1) % 3)
		}, currentDuration)

		return () => clearTimeout(timer)
	}, [activeStep, isPaused])

	const cards = [
		{
			id: 0,
			titleLine1: 'Subsidies &',
			titleLine2: 'Grants Facilitated',
			number: '₹100 Cr+',
			bg: '#f59e0b',
			textColor: '#ffffff',
			topOffset: 0,
			zIndex: 1
		},
		{
			id: 1,
			titleLine1: 'MSME & PMEGP',
			titleLine2: 'Units Sanctioned',
			number: '1,200+',
			bg: '#0284c7',
			textColor: '#ffffff',
			topOffset: 95,
			zIndex: 2
		},
		{
			id: 2,
			titleLine1: 'Collateral-Free',
			titleLine2: 'CGTMSE Guidance',
			number: '100%',
			bg: '#0a3778',
			textColor: '#ffffff',
			topOffset: 190,
			zIndex: 3
		}
	]

	return (
		<section
			className="globon-nri-section"
			id="govt-schemes"
			style={{
				backgroundColor: '#ffffff',
				padding: '90px 0 95px',
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
					transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
						opacity 0.5s ease,
						box-shadow 0.3s ease;
					will-change: transform, opacity;
				}
				.nri-rollover-card:hover {
					box-shadow: 0 24px 50px rgba(0, 0, 0, 0.22) !important;
				}
				.ksfe-hover-btn:hover {
					background-color: #025283 !important;
					transform: translateY(-2px);
				}
				@media (max-width: 991px) {
					.nri-stack-container {
						height: 440px !important;
						margin-top: 25px;
					}
					.nri-stat-number {
						font-size: 52px !important;
					}
					.nri-stat-title {
						font-size: 19px !important;
					}
				}
				@media (max-width: 576px) {
					.nri-main-title {
						font-size: 19px !important;
						line-height: 1.35 !important;
					}
					.nri-stack-container {
						height: 400px !important;
					}
					.nri-rollover-card {
						padding: 22px 20px !important;
						height: 180px !important;
					}
					.nri-stat-number {
						font-size: 40px !important;
					}
					.nri-stat-title {
						font-size: 16px !important;
					}
				}
			`}</style>

			<div className="tf-container w-1780">
				<div className="row align-items-center g-5">
					
					{/* Left Column: Branding, Heading & Action */}
					<div className="col-lg-6 col-xl-6">
						<div style={{ maxWidth: '580px' }}>
							
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
									fontSize: 'clamp(20px, 2.1vw, 29px)',
									fontWeight: 400,
									color: '#000000',
									lineHeight: 1.35,
									letterSpacing: '0.3px',
									textTransform: 'uppercase',
									marginBottom: '32px'
								}}
							>
								<span style={{ display: 'block', whiteSpace: 'nowrap' }}>GOVERNMENT SUBSIDY &amp;</span>
								<span style={{ display: 'block', whiteSpace: 'nowrap' }}>COLLATERAL-FREE LOANS</span>
								<span style={{ display: 'block', whiteSpace: 'nowrap' }}>FOR ENTERPRISES</span>
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

					{/* Right Column: Roll-Over Stacking Cards matching exact font sizes from Image 2 */}
					<div className="col-lg-6 col-xl-6">
						<div
							className="nri-stack-container"
							style={{
								position: 'relative',
								width: '100%',
								maxWidth: '640px',
								height: '430px',
								margin: '0 auto'
							}}
							onMouseEnter={() => setIsPaused(true)}
							onMouseLeave={() => setIsPaused(false)}
						>
							{cards.map((card) => {
								// Check visibility and translation for roll-over effect:
								// Card 0 (Yellow): Always active at top: 0px
								// Card 1 (Cyan): Slides up when activeStep >= 1
								// Card 2 (Dark Blue): Slides up when activeStep >= 2
								const isVisible = activeStep >= card.id
								
								// Slide in from 300px below when inactive
								const translateY = isVisible ? '0px' : '300px'
								const opacity = isVisible ? 1 : 0

								return (
									<div
										key={card.id}
										className="nri-rollover-card"
										onClick={() => setActiveStep(card.id)}
										style={{
											position: 'absolute',
											top: `${card.topOffset}px`,
											left: 0,
											right: 0,
											height: '225px',
											backgroundColor: card.bg,
											color: card.textColor,
											borderRadius: '24px',
											padding: '32px 42px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											boxShadow: '0 16px 38px rgba(0, 0, 0, 0.16)',
											zIndex: card.zIndex,
											transform: `translateY(${translateY})`,
											opacity: opacity,
											pointerEvents: isVisible ? 'auto' : 'none',
											cursor: 'pointer'
										}}
									>
										{/* Left: 2-Line Title matching exact font size from image 2 */}
										<div
											className="nri-stat-title"
											style={{
												fontSize: '22px',
												fontWeight: 500,
												lineHeight: 1.25,
												color: card.textColor,
												maxWidth: '200px'
											}}
										>
											<div>{card.titleLine1}</div>
											<div>{card.titleLine2}</div>
										</div>

										{/* Right: Clean Numeric Stat matching exact font size from image 2 */}
										<div
											className="nri-stat-number"
											style={{
												fontSize: '70px',
												fontWeight: 700,
												letterSpacing: '-1.5px',
												lineHeight: 1,
												color: card.textColor
											}}
										>
											{card.number}
										</div>
									</div>
								)
							})}

							{/* Interactive Step Indicator Pills */}
							<div
								style={{
									position: 'absolute',
									bottom: '-28px',
									right: '20px',
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									zIndex: 10
								}}
							>
								{cards.map((c) => (
									<button
										key={c.id}
										onClick={() => setActiveStep(c.id)}
										style={{
											width: activeStep === c.id ? '28px' : '10px',
											height: '10px',
											borderRadius: '5px',
											backgroundColor: activeStep === c.id ? '#0366a2' : '#cbd5e1',
											border: 'none',
											padding: 0,
											cursor: 'pointer',
											transition: 'all 0.3s ease'
										}}
										aria-label={`Go to card ${c.id + 1}`}
									/>
								))}
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
