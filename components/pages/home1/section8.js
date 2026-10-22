'use client'
import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
	{
		id: 1,
		name: "Sheela Menon",
		role: "CEO, Menon Retail Group",
		location: "Kochi, Kerala",
		tag: "₹1.5 Cr Retail OD & Term Loan",
		initials: "SM",
		quote: "We operate an 8-store retail supermarket chain across Kerala. Working capital was tight every festive season. Globon arranged ₹1.5 crore in overdraft limits and equipment financing with 48-hour approval. Their team also identified government subsidy schemes that saved us ₹25 lakhs.",
		rating: 5,
	},
	{
		id: 2,
		name: "Rajesh Anand",
		role: "Managing Director, Anand Logistics",
		location: "Thrissur, Kerala",
		tag: "₹75 Lakh LAP (Loan Against Property)",
		initials: "RA",
		quote: "We needed to leverage our commercial property to expand our fleet quickly without selling assets. Globon structured a Loan Against Property (LAP) sanctioned in 10 days at 2% lower interest than competing NBFCs. Their transparent guidance was exceptional.",
		rating: 5,
	},
	{
		id: 3,
		name: "Arun Patel & Priya Nair",
		role: "Co-Founders, CloudXi Tech",
		location: "Kozhikode, Kerala",
		tag: "₹30 Lakh CGTMSE Collateral-Free",
		initials: "AP",
		quote: "As an early-stage SaaS startup, traditional banks asked for collateral we didn't have. Globon guided us through CGTMSE collateral-free funding and helped refine our financials. With this capital, we scaled our product and went on to raise seed funding.",
		rating: 5,
	},
	{
		id: 4,
		name: "Kavitha Nambiar",
		role: "Director, Highland Eco Resorts",
		location: "Wayanad, Kerala",
		tag: "₹2 Cr Tourism Expansion Loan",
		initials: "KN",
		quote: "Expanding our eco-resort required tailored hospitality financing with flexible moratoriums. Globon coordinated directly with institutional lenders and banks to secure ₹2 crore with ideal repayment terms. Truly a dependable, results-driven financial partner.",
		rating: 5,
	},
]

export default function Section8() {
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	return (
		<section className="s-our-testimonial tf-spacing-1" id="testimonials" style={{ background: '#f8fafc', padding: '90px 0 100px' }}>
			<div className="tf-container">
				{/* Section Header */}
				<div className="row align-items-end mb-50">
					<div className="col-lg-8">
						<div className="heading">
							<p className="s-sub-title mb-15">
								<i className="icon-angles-right moveLeftToRight" />
								Client Success Stories &amp; Reviews
							</p>
							<h2 className="s-title mb-15 testimonials-main-title" style={{
								fontFamily: "'Public Sans', 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
								fontSize: 'clamp(40px, 4.2vw, 52px)',
								color: '#000000',
								letterSpacing: '0.2px',
								lineHeight: 1.2
							}}>
								<span style={{ fontWeight: 800 }}>What Our Clients Say</span> <span style={{ fontWeight: 400 }}>About Globon</span>
							</h2>
							<p className="text font-main-2" style={{ maxWidth: '640px', fontSize: '16px', lineHeight: '1.6', color: '#64748b' }}>
								Real experiences from entrepreneurs, retailers, and growing enterprises across Kerala who achieved fast funding and strategic support with Globon.
							</p>
						</div>
					</div>
					<div className="col-lg-4 text-lg-end d-none d-lg-block">
						<div style={{ display: 'inline-flex', gap: '12px' }}>
							<button
								ref={prevRef}
								type="button"
								aria-label="Previous Testimonial"
								className="testimonial-nav-btn prev-btn"
								style={{
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #cbd5e1',
									background: '#ffffff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									color: '#0f172a',
								}}
							>
								<i className="icon-arrow-left" style={{ fontSize: '18px' }} />
							</button>
							<button
								ref={nextRef}
								type="button"
								aria-label="Next Testimonial"
								className="testimonial-nav-btn next-btn"
								style={{
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #cbd5e1',
									background: '#ffffff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									color: '#0f172a',
								}}
							>
								<i className="icon-arrow-right" style={{ fontSize: '18px' }} />
							</button>
						</div>
					</div>
				</div>

				{/* Pure Text Testimonial Slider (No Images) */}
				<div className="testimonial-slider-wrapper">
					<Swiper
						modules={[Autoplay, Navigation, Pagination]}
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						pagination={{ clickable: true, el: '.testimonial-custom-pagination' }}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current
							swiper.params.navigation.nextEl = nextRef.current
						}}
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 25,
							},
							1200: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						style={{ paddingBottom: '30px' }}
					>
						{testimonials.map((item) => (
							<SwiperSlide key={item.id} style={{ height: 'auto' }}>
								<div
									className="globon-testimonial-card"
									style={{
										background: '#ffffff',
										borderRadius: '20px',
										padding: '36px 32px',
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										border: '1px solid #e2e8f0',
										boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
										transition: 'all 0.3s ease',
									}}
								>
									<div>
										{/* Top Row: Stars Rating + Solution Badge */}
										<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', flexWrap: 'wrap', gap: '10px' }}>
											<div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '2px' }}>
												{'★'.repeat(item.rating)}
											</div>
											<span
												style={{
													fontSize: '12px',
													fontWeight: '700',
													color: '#1f4e7a',
													background: '#f0f7ff',
													border: '1px solid #d0e4f7',
													padding: '4px 12px',
													borderRadius: '20px',
												}}
											>
												{item.tag}
											</span>
										</div>

										{/* Quote Text */}
										<p
											style={{
												fontSize: '15.5px',
												lineHeight: '1.75',
												color: '#334155',
												marginBottom: '28px',
												fontStyle: 'normal',
											}}
										>
											"{item.quote}"
										</p>
									</div>

									{/* Author Info (Pure Text & Initials Badge, No Client Image) */}
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '16px',
											borderTop: '1px solid #f1f5f9',
											paddingTop: '20px',
										}}
									>
										<div
											style={{
												width: '48px',
												height: '48px',
												borderRadius: '50%',
												background: 'linear-gradient(135deg, #1f4e7a 0%, #0366a2 100%)',
												color: '#ffffff',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												fontSize: '16px',
												fontWeight: '700',
												flexShrink: 0,
												boxShadow: '0 4px 12px rgba(31, 78, 122, 0.2)',
											}}
										>
											{item.initials}
										</div>
										<div style={{ flexGrow: 1 }}>
											<h4 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' }}>
												{item.name}
											</h4>
											<p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 3px 0', fontWeight: '500' }}>
												{item.role}
											</p>
											<span style={{ fontSize: '12px', color: '#0366a2', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
												<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
												</svg>
												{item.location} • Verified Client
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="testimonial-custom-pagination text-center mt-20" />
				</div>

				{/* Bottom Trust Metrics Bar */}
				<div
					style={{
						marginTop: '50px',
						background: '#ffffff',
						borderRadius: '16px',
						padding: '24px 36px',
						border: '1px solid #e2e8f0',
						boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
						gap: '24px',
						textAlign: 'center',
					}}
				>
					<div>
						<div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>4.9 / 5.0</div>
						<div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>Client Satisfaction Rating</div>
					</div>
					<div>
						<div style={{ fontSize: '28px', fontWeight: '800', color: '#f4b52d' }}>₹250Cr+</div>
						<div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>Capital Facilitated</div>
					</div>
					<div>
						<div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>194+</div>
						<div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>Touchpoints Across Kerala</div>
					</div>
					<div>
						<div style={{ fontSize: '28px', fontWeight: '800', color: '#1f4e7a' }}>48 Hours</div>
						<div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>Rapid Sanction Guidance</div>
					</div>
				</div>
			</div>
		</section>
	)
}
