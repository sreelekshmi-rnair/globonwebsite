'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useCallback } from 'react'

const SLIDE_DURATION = 6500 // ms; drives the progress bar, which advances the slide when it fills

const heroSlides = [
	{
		id: 1,
		image: '/images/section/hero-slide1-consulting.jpg',
		tab: 'Business Strategy',
		eyebrow: 'Business Consulting',
		line1: 'Accelerate your business',
		line2: 'growth with expert strategy',
		text: 'Clear, practical advice on finance, funding and growth — from a team that has worked with businesses across Kerala.',
		cta1Text: 'Schedule Free Consultation',
		cta1Link: '/#consultation',
		cta2Text: 'View Success Stories',
		cta2Link: '/#testimonials'
	},
	{
		id: 2,
		image: '/images/section/hero-slide2-loan-handshake.jpg',
		tab: 'Business Loans',
		eyebrow: 'Business Loans',
		line1: 'Scale your business with',
		line2: 'flexible business loans',
		text: 'We compare offers from 30+ partner banks and NBFCs to find the loan structure that fits your cash flow.',
		cta1Text: 'Apply for Business Loan',
		cta1Link: '/#consultation',
		cta2Text: 'Talk to an Expert',
		cta2Link: '/#consultation'
	},
	{
		id: 3,
		image: '/images/section/hero-slide3-msme-workshop.jpg',
		tab: 'Government Schemes',
		eyebrow: 'Government Schemes',
		line1: 'Access subsidised funding',
		line2: 'through government schemes',
		text: 'Find the MSME and state schemes you qualify for, and get help with the paperwork from application to approval.',
		cta1Text: 'Explore Schemes',
		cta1Link: '/our-service',
		cta2Text: 'Check Eligibility',
		cta2Link: '/#consultation'
	}
]

const trustStats = [
	{ value: '999+', label: 'Customers served' },
	{ value: '₹250 Cr+', label: 'Disbursals' },
	{ value: '30+', label: 'Partner banks & NBFCs' }
]

const pad = (n) => String(n).padStart(2, '0')

export default function Hero1() {
	const [current, setCurrent] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const touchStartX = useRef(0)
	const touchEndX = useRef(0)

	const total = heroSlides.length
	const goTo = useCallback((idx) => setCurrent((idx + total) % total), [total])
	const nextSlide = () => goTo(current + 1)
	const prevSlide = () => goTo(current - 1)

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX
		touchEndX.current = e.touches[0].clientX
	}
	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX
	}
	const handleTouchEnd = () => {
		const diff = touchStartX.current - touchEndX.current
		if (Math.abs(diff) > 50) {
			if (diff > 0) nextSlide()
			else prevSlide()
		}
	}

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowRight') nextSlide()
		if (e.key === 'ArrowLeft') prevSlide()
	}

	return (
		<section
			className={`globon-ksfe-hero-wrapper gh-hero ${isPaused ? 'is-paused' : ''}`}
			style={{ '--gh-duration': `${SLIDE_DURATION}ms` }}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocus={() => setIsPaused(true)}
			onBlur={(e) => {
				if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false)
			}}
			onKeyDown={handleKeyDown}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			aria-roledescription="carousel"
			aria-label="Globon highlights"
		>
			{heroSlides.map((slide, idx) => {
				const isActive = idx === current
				return (
					<div
						key={slide.id}
						className={`globon-ksfe-slide gh-slide ${isActive ? 'active' : ''}`}
						role="group"
						aria-roledescription="slide"
						aria-label={`${idx + 1} of ${total}: ${slide.tab}`}
						aria-hidden={!isActive}
					>
						<Image
							src={slide.image}
							alt=""
							fill
							priority={idx === 0}
							sizes="100vw"
							className="globon-ksfe-slide-bg"
						/>
						<div className="gh-overlay" />

						<div className="tf-container w-1780 gh-content">
							<div className="gh-copy">
								<span className="gh-eyebrow gh-anim" style={{ '--d': '0.05s' }}>
									<span className="gh-eyebrow-dot" />
									{slide.eyebrow}
								</span>

								{idx === 0 ? (
									<h1 className="gh-title gh-anim" style={{ '--d': '0.15s' }}>
										<span className="gh-title-light">{slide.line1}</span>{' '}
										<span className="gh-title-strong">{slide.line2}</span>
									</h1>
								) : (
									<h2 className="gh-title gh-anim" style={{ '--d': '0.15s' }}>
										<span className="gh-title-light">{slide.line1}</span>{' '}
										<span className="gh-title-strong">{slide.line2}</span>
									</h2>
								)}

								<p className="gh-text gh-anim" style={{ '--d': '0.28s' }}>{slide.text}</p>

								<div className="gh-actions gh-anim" style={{ '--d': '0.4s' }}>
									<Link href={slide.cta1Link} className="gh-btn gh-btn-primary" tabIndex={isActive ? 0 : -1}>
										<span>{slide.cta1Text}</span>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
											<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									{slide.cta2Text && (
										<Link href={slide.cta2Link} className="gh-btn gh-btn-ghost" tabIndex={isActive ? 0 : -1}>
											<span>{slide.cta2Text}</span>
										</Link>
									)}
								</div>

								<ul className="gh-stats" aria-label="Globon at a glance">
									{trustStats.map((s) => (
										<li key={s.label} className="gh-stat">
											<strong>{s.value}</strong>
											<span>{s.label}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				)
			})}

			{/* Bottom control bar: labelled progress tabs + counter + arrows */}
			<div className="gh-controls">
				<div className="tf-container w-1780 gh-controls-inner">
					<div className="gh-tabs" role="tablist" aria-label="Choose slide">
						{heroSlides.map((slide, idx) => {
							const isActive = idx === current
							return (
								<button
									key={slide.id}
									type="button"
									role="tab"
									aria-selected={isActive}
									aria-label={`Go to slide ${idx + 1}: ${slide.tab}`}
									className={`gh-tab ${isActive ? 'active' : ''} ${idx < current ? 'done' : ''}`}
									onClick={() => goTo(idx)}
								>
									<span className="gh-tab-track">
										<span
											className="gh-tab-fill"
											onAnimationEnd={(e) => {
												if (isActive && e.animationName === 'ghFill') nextSlide()
											}}
										/>
									</span>
									<span className="gh-tab-label">
										<span className="gh-tab-num">{pad(idx + 1)}</span>
										<span className="gh-tab-name">{slide.tab}</span>
									</span>
								</button>
							)
						})}
					</div>

					<div className="gh-nav">
						<span className="gh-counter" aria-live="polite">
							<strong>{pad(current + 1)}</strong> / {pad(total)}
						</span>
						<button type="button" className="gh-arrow" onClick={prevSlide} aria-label="Previous slide">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<button type="button" className="gh-arrow" onClick={nextSlide} aria-label="Next slide">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
