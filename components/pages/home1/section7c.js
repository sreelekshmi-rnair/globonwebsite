'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Section7c() {
	const sectionRef = useRef(null)
	const [pinState, setPinState] = useState('unpinned') // 'unpinned' | 'pinned' | 'bottom'
	const [scrollProgress, setScrollProgress] = useState(0)
	const [viewportWidth, setViewportWidth] = useState(1280)
	const pinnedRef = useRef(null)
	const [pinnedHeight, setPinnedHeight] = useState(0)

	// Measure the pinned block: on phones the text stacks above the cards, so it is much taller than the card deck
	useEffect(() => {
		if (!pinnedRef.current || typeof ResizeObserver === 'undefined') return
		const ro = new ResizeObserver(([entry]) => setPinnedHeight(Math.ceil(entry.contentRect.height)))
		ro.observe(pinnedRef.current)
		return () => ro.disconnect()
	}, [])

	const scrollDistance = 900 // Total scroll distance (px) for smooth card stacking animation

	useEffect(() => {
		const updateWidth = () => {
			setViewportWidth(window.innerWidth)
		}
		updateWidth()
		window.addEventListener('resize', updateWidth)

		let ticking = false
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (!sectionRef.current) {
						ticking = false
						return
					}
					const rect = sectionRef.current.getBoundingClientRect()
					const targetTop = 90 // Top offset below sticky header

					const scrolled = targetTop - rect.top

					if (scrolled <= 0) {
						setPinState('unpinned')
						setScrollProgress(0)
					} else if (scrolled >= scrollDistance) {
						setPinState('bottom')
						setScrollProgress(1)
					} else {
						setPinState('pinned')
						setScrollProgress(scrolled / scrollDistance)
					}
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		handleScroll()
		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', updateWidth)
		}
	}, [])

	const isMobile = viewportWidth < 768
	const isTablet = viewportWidth >= 768 && viewportWidth < 992

	// Responsive Card Metrics (sleeker, reduced height)
	const cardHeight = isMobile ? 210 : isTablet ? 250 : 280
	const compactOffset = isMobile ? 54 : isTablet ? 64 : 76
	const sidePad = isMobile ? 20 : isTablet ? 28 : 36

	// Initial typography and positioning
	const initialNumSize = isMobile ? 48 : isTablet ? 64 : 76
	const compactNumSize = isMobile ? 30 : isTablet ? 40 : 46

	const initialLabelSize = isMobile ? 16 : isTablet ? 20 : 24
	const compactLabelSize = isMobile ? 13 : isTablet ? 15 : 17

	const initialNumTop = isMobile ? 16 : isTablet ? 20 : 24
	const compactNumTop = isMobile ? 13 : isTablet ? 16 : 18

	const initialLabelTop = isMobile ? 142 : isTablet ? 172 : 194
	const compactLabelTop = isMobile ? 13 : isTablet ? 16 : 18

	// Phase 1: Card 0 text moves up + shrinks, Card 1 glides up (scrollProgress 0.12 to 0.52)
	const t0 = Math.min(1, Math.max(0, (scrollProgress - 0.12) / 0.40))

	// Phase 2: Card 1 text moves up + shrinks, Card 2 glides up (scrollProgress 0.58 to 0.98)
	const t1 = Math.min(1, Math.max(0, (scrollProgress - 0.58) / 0.40))

	// Card 0 dynamic values
	const c0NumSize = initialNumSize - t0 * (initialNumSize - compactNumSize)
	const c0NumTop = initialNumTop - t0 * (initialNumTop - compactNumTop)
	const c0LabelSize = initialLabelSize - t0 * (initialLabelSize - compactLabelSize)
	const c0LabelTop = initialLabelTop - t0 * (initialLabelTop - compactLabelTop)

	// Card 1 dynamic values (completely hidden when t0 === 0, fades in and glides up smoothly as user scrolls)
	const initialCard1Y = cardHeight + 60
	const card1Y = initialCard1Y - t0 * (initialCard1Y - compactOffset)
	const c1Opacity = Math.min(1, Math.max(0, t0 * 2.5))

	const c1NumSize = initialNumSize - t1 * (initialNumSize - compactNumSize)
	const c1NumTop = initialNumTop - t1 * (initialNumTop - compactNumTop)
	const c1LabelSize = initialLabelSize - t1 * (initialLabelSize - compactLabelSize)
	const c1LabelTop = initialLabelTop - t1 * (initialLabelTop - compactLabelTop)

	// Card 2 dynamic values (completely hidden when t1 === 0, fades in and glides up smoothly as user scrolls)
	const initialCard2Y = cardHeight + 130
	const card2Y = initialCard2Y - t1 * (initialCard2Y - compactOffset * 2)
	const c2Opacity = Math.min(1, Math.max(0, t1 * 2.5))

	return (
		<section
			ref={sectionRef}
			className="globon-ksfe-stat-section"
			id="govt-schemes"
			style={{
				backgroundColor: '#ffffff',
				paddingTop: '60px',
				height: `${Math.max(cardHeight + compactOffset * 2 + 60, pinnedHeight) + scrollDistance + 60}px`,
				position: 'relative',
				scrollMarginTop: '90px',
				boxSizing: 'border-box'
			}}
		>
			<style jsx>{`
				.ksfe-globon-title,
				.ksfe-globon-title * {
					font-family: 'Public Sans', 'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
					color: #000000 !important;
					text-transform: uppercase;
					letter-spacing: 0.3px;
					line-height: 1.22;
				}

				.ksfe-cards-deck {
					position: relative;
					width: 100%;
					max-width: 640px;
					height: ${cardHeight + compactOffset * 2}px;
					margin: 0 auto;
				}

				.ksfe-stack-card {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					height: ${cardHeight}px;
					border-radius: ${isMobile ? '20px' : '26px'};
					box-sizing: border-box;
					border-top: 1.5px solid rgba(255, 255, 255, 0.45);
					box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.08), 0 16px 36px rgba(0, 0, 0, 0.16);
					will-change: transform, opacity;
					overflow: hidden;
				}

				.ksfe-action-btn:hover {
					background-color: #0ea5e9 !important;
					transform: translateY(-2px);
					box-shadow: 0 6px 20px rgba(89, 189, 252, 0.35) !important;
				}

				@media (max-width: 576px) {
					.ksfe-globon-title,
					.ksfe-globon-title * {
						font-size: 24px !important;
						line-height: 1.28 !important;
					}
				}
			`}</style>

			{/* Pinned Viewport Container using fixed positioning (100% shake-free) */}
			<div
				ref={pinnedRef}
				style={{
					position: pinState === 'pinned' ? 'fixed' : pinState === 'bottom' ? 'absolute' : 'relative',
					top: pinState === 'pinned' ? '90px' : pinState === 'bottom' ? `${scrollDistance}px` : '0px',
					left: 0,
					right: 0,
					width: '100%',
					zIndex: 10
				}}
			>
				<div className="tf-container w-1780">
					<div className="row align-items-start g-5">
						
						{/* Left Column: Authentic KSFE-Style Ribbon Badge, Heading, and CTA */}
						<div className="col-lg-6 col-xl-6">
							<div style={{ maxWidth: '580px' }}>
								
								{/* Distinct Dual-Pill Badge matching Picture 1 */}
								<div
									style={{
										display: 'inline-flex',
										alignItems: 'stretch',
										borderRadius: '8px',
										overflow: 'hidden',
										boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
										marginBottom: '28px'
									}}
								>
									{/* Orange Tag: GLOBON */}
									<div
										style={{
											backgroundColor: '#f59e0b',
											padding: '8px 18px',
											display: 'flex',
											alignItems: 'center',
											fontWeight: 800,
											fontSize: '14px',
											color: '#ffffff',
											letterSpacing: '0.8px'
										}}
									>
										GLOBON
									</div>
									{/* Brand Blue Tag: GOVT SUBSIDY & MSME DESK */}
									<div
										style={{
											backgroundColor: '#59bdfc',
											padding: '8px 20px',
											display: 'flex',
											alignItems: 'center',
											color: '#0f172a',
											fontWeight: 700,
											fontSize: '14px',
											letterSpacing: '0.5px'
										}}
									>
										GOVT SUBSIDY &amp; MSME DESK
									</div>
								</div>

								{/* Main Heading: 5 Lines matching Picture 1 */}
								<h2
									className="ksfe-globon-title"
									style={{
										fontSize: 'clamp(32px, 3.6vw, 46px)',
										margin: '0 0 32px 0',
										lineHeight: 1.15
									}}
								>
									<span className="heading-bold" style={{ display: 'block', fontWeight: 800 }}>GOVERNMENT</span>
									<span className="heading-bold" style={{ display: 'block', fontWeight: 800 }}>SUBSIDY &amp;</span>
									<span className="heading-bold" style={{ display: 'block', fontWeight: 800 }}>COLLATERAL-FREE</span>
									<span className="heading-bold" style={{ display: 'block', fontWeight: 800 }}>LOANS</span>
									<span className="heading-normal" style={{ display: 'block', fontWeight: 400, marginTop: '4px' }}>FOR ENTERPRISES</span>
								</h2>

								{/* Call-to-Action Button */}
								<div>
									<Link
										href="/#consultation"
										className="ksfe-action-btn"
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: '10px',
											backgroundColor: '#59bdfc',
											color: '#0f172a',
											fontWeight: 700,
											fontSize: '15px',
											padding: '13px 26px',
											borderRadius: '4px',
											textDecoration: 'none',
											transition: 'all 0.25s ease',
											boxShadow: '0 4px 14px rgba(89, 189, 252, 0.25)'
										}}
									>
										<span>globon.in/subsidies</span>
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="7" y1="17" x2="17" y2="7" />
											<polyline points="7 7 17 7 17 17" />
										</svg>
									</Link>
								</div>

							</div>
						</div>

						{/* Right Column: Dynamic KSFE-Style Cards with Moving Bottom-to-Top Text and Sizing */}
						<div className="col-lg-6 col-xl-6">
							<div className="ksfe-cards-deck">
								
								{/* Card 0 (Amber): "Subsidies & Grants Facilitated ₹100 Cr+" */}
								<div
									className="ksfe-stack-card"
									style={{
										backgroundColor: '#f59e0b',
										color: '#000000',
										zIndex: 1,
										transform: 'translate3d(0, 0px, 0)'
									}}
								>
									{/* Top-Right Number: shrinks on scroll */}
									<div
										style={{
											position: 'absolute',
											top: `${c0NumTop}px`,
											right: `${sidePad}px`,
											fontSize: `${c0NumSize}px`,
											fontWeight: 800,
											letterSpacing: '-2px',
											lineHeight: 1,
											whiteSpace: 'nowrap',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										₹100 Cr+
									</div>

									{/* Label: moves from bottom-left up to top-left and shrinks */}
									<div
										style={{
											position: 'absolute',
											top: `${c0LabelTop}px`,
											left: `${sidePad}px`,
											fontSize: `${c0LabelSize}px`,
											fontWeight: 700,
											lineHeight: 1.22,
											maxWidth: t0 > 0.6 ? '250px' : '320px',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										<div>Subsidies &amp;</div>
										<div>Grants Facilitated</div>
									</div>
								</div>

								{/* Card 1 (Cyan): "MSME & PMEGP Units Sanctioned 1,200+" */}
								<div
									className="ksfe-stack-card"
									style={{
										backgroundColor: '#0088cc',
										color: '#ffffff',
										zIndex: 2,
										opacity: c1Opacity,
										transform: `translate3d(0, ${card1Y}px, 0)`,
										pointerEvents: c1Opacity > 0.5 ? 'auto' : 'none'
									}}
								>
									{/* Top-Right Number: shrinks when Card 2 stacks over it */}
									<div
										style={{
											position: 'absolute',
											top: `${c1NumTop}px`,
											right: `${sidePad}px`,
											fontSize: `${c1NumSize}px`,
											fontWeight: 800,
											letterSpacing: '-2px',
											lineHeight: 1,
											whiteSpace: 'nowrap',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										1,200+
									</div>

									{/* Label: moves from bottom-left to top-left and shrinks when Card 2 stacks */}
									<div
										style={{
											position: 'absolute',
											top: `${c1LabelTop}px`,
											left: `${sidePad}px`,
											fontSize: `${c1LabelSize}px`,
											fontWeight: 700,
											lineHeight: 1.22,
											maxWidth: t1 > 0.6 ? '250px' : '320px',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										<div>MSME &amp; PMEGP</div>
										<div>Units Sanctioned</div>
									</div>
								</div>

								{/* Card 2 (Navy): "Collateral-Free CGTMSE Guidance 100%" */}
								<div
									className="ksfe-stack-card"
									style={{
										backgroundColor: '#003366',
										color: '#ffffff',
										zIndex: 3,
										opacity: c2Opacity,
										transform: `translate3d(0, ${card2Y}px, 0)`,
										pointerEvents: c2Opacity > 0.5 ? 'auto' : 'none'
									}}
								>
									{/* Top-Right Number: Full Initial Size */}
									<div
										style={{
											position: 'absolute',
											top: `${initialNumTop}px`,
											right: `${sidePad}px`,
											fontSize: `${initialNumSize}px`,
											fontWeight: 800,
											letterSpacing: '-2px',
											lineHeight: 1,
											whiteSpace: 'nowrap',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										100%
									</div>

									{/* Bottom-Left Label: Full Initial Size at Bottom */}
									<div
										style={{
											position: 'absolute',
											top: `${initialLabelTop}px`,
											left: `${sidePad}px`,
											fontSize: `${initialLabelSize}px`,
											fontWeight: 700,
											lineHeight: 1.22,
											maxWidth: '320px',
											fontFamily: "'Public Sans', 'Manrope', -apple-system, sans-serif"
										}}
									>
										<div>Collateral-Free</div>
										<div>CGTMSE Guidance</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
