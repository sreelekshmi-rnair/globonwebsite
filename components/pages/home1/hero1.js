'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const heroSlides = [
	{
		id: 1,
		image: '/images/page-title/globon-empowering-building.jpg',
		line1: 'ACCELERATE YOUR BUSINESS',
		line2: 'GROWTH WITH EXPERT STRATEGY',
		cta1Text: 'Schedule Free Consultation',
		cta1Link: '/#consultation',
		cta2Text: 'View Success Stories',
		cta2Link: '/#testimonials'
	},
	{
		id: 2,
		image: '/images/section/globon-multibank-trust-banner.jpg',
		line1: 'SCALE YOUR BUSINESS WITH',
		line2: 'FLEXIBLE BUSINESS LOANS',
		cta1Text: 'Apply for Business Loan',
		cta1Link: '/#consultation',
		cta2Text: 'Talk to Expert',
		cta2Link: '/#consultation'
	},
	{
		id: 3,
		image: '/images/section/globon-hero-advisory.jpg',
		line1: 'ACCESS SUBSIDIZED FUNDING',
		line2: 'THROUGH GOVERNMENT SCHEMES',
		cta1Text: 'Explore Schemes',
		cta1Link: '/our-service',
		cta2Text: 'Check Eligibility',
		cta2Link: '/#consultation'
	}
]

export default function Hero1() {
	const [current, setCurrent] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const touchStartX = useRef(0)
	const touchEndX = useRef(0)

	useEffect(() => {
		if (isPaused) return
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % heroSlides.length)
		}, 5500)
		return () => clearInterval(interval)
	}, [isPaused])

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % heroSlides.length)
	}

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
	}

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX
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

	return (
		<section
			className="globon-ksfe-hero-wrapper"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			aria-label="Globon Hero Slider"
		>
			{heroSlides.map((slide, idx) => {
				const isActive = idx === current
				return (
					<div
						key={slide.id}
						className={`globon-ksfe-slide ${isActive ? 'active' : ''}`}
						aria-hidden={!isActive}
					>
						<Image
							src={slide.image}
							alt={slide.line1 + ' ' + slide.line2}
							fill
							priority={idx === 0}
							sizes="100vw"
							className="globon-ksfe-slide-bg"
						/>
						<div className="globon-ksfe-overlay" />

						<div className="tf-container w-1780 globon-ksfe-content-container">
							<div className="row">
								<div className="col-xl-10 col-lg-11 col-md-12">
									<h1 className="globon-ksfe-heading">
										<span>{slide.line1}</span>
										<br />
										<span>{slide.line2}</span>
									</h1>

									<div className="globon-ksfe-btn-group">
										<Link href={slide.cta1Link} className="globon-ksfe-btn">
											<span>{slide.cta1Text}</span>
											<span className="arrow-icon">↗</span>
										</Link>
										{slide.cta2Text && (
											<Link href={slide.cta2Link} className="globon-ksfe-btn-secondary">
												<span>{slide.cta2Text}</span>
												<span className="arrow-icon">↗</span>
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}

			{/* Left & Right Circular Navigation Arrows */}
			<button
				type="button"
				className="globon-ksfe-arrow prev"
				onClick={prevSlide}
				aria-label="Previous slide"
			>
				‹
			</button>
			<button
				type="button"
				className="globon-ksfe-arrow next"
				onClick={nextSlide}
				aria-label="Next slide"
			>
				›
			</button>

			{/* Bottom Dots Indicator */}
			<div className="globon-ksfe-dots" role="tablist">
				{heroSlides.map((_, idx) => (
					<button
						key={idx}
						type="button"
						className={`globon-ksfe-dot ${idx === current ? 'active' : ''}`}
						onClick={() => setCurrent(idx)}
						aria-label={`Go to slide ${idx + 1}`}
						role="tab"
						aria-selected={idx === current}
					/>
				))}
			</div>
		</section>
	)
}
