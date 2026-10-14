'use client'
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Section5() {
	const testimonials = [
		{
			quote: "We own a retail chain with 8 stores across Kerala. Working capital was tight every quarter. Globon secured us ₹1.5 crore in overdraft limits and equipment financing for our new POS systems. The 48-hour approval was a lifesaver. Their team walked us through government schemes we didn't even know existed and saved us ₹25 lakhs in subsidies.",
			name: "Sheela Menon",
			role: "CEO, Menon Retail Group",
			location: "Kochi, Kerala",
			highlight: "₹1.5 Cr Overdraft + ₹25 Lakhs Subsidy Saved"
		},
		{
			quote: "We purchased property to expand our business but needed to access that capital quickly without selling. Globon's LAP (Loan Against Property) solution was perfect. They valued our property fairly, approved ₹75 lakhs in 10 days, and the interest rate was 2% lower than what other lenders offered. Their transparency throughout was exceptional.",
			name: "Rajesh Anand",
			role: "Founder, Anand Logistics",
			location: "Thrissur, Kerala",
			highlight: "₹75 Lakhs LAP Approved in 10 Days"
		},
		{
			quote: "As a 2-year-old SaaS startup, traditional banks kept asking for collateral. Globon helped us secure ₹30 lakhs through CGTMSE collateral-free credit without any hassle. They also prepared our pitch deck for Angel investors and connected us with their network. Within 6 months, we raised seed funding from angels. Best decision we made.",
			name: "Arun Patel & Priya Nair",
			role: "Co-Founders, CloudXi Tech",
			location: "Kozhikode & Bengaluru",
			highlight: "₹30 Lakhs Collateral-Free Credit via CGTMSE"
		}
	]

	const swiperOptions = {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
		modules: [Pagination]
	}

	return (
		<>
			<section className="s-testimonial tf-spacing-7" style={{ padding: "90px 0", background: "#ffffff" }}>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center mb-60">
								<p className="s-sub-title mb-10" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase" }}>
									<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
									Client Success Stories
								</p>
								<h2 className="s-title text-anime-wave" style={{ fontSize: "38px", color: "#0f172a" }}>
									What People Talk About <span style={{ color: "#0366a2" }}>Globon</span>
								</h2>
								<p className="text mx-auto mt-20" style={{ maxWidth: "700px", fontSize: "16px", color: "#475569" }}>
									Real experiences from retail chains, growing logistics firms, and emerging startups who scaled their ventures with Globon Business Solutions.
								</p>
							</div>
						</div>
					</div>

					{/* Testimonials Cards Slider */}
					<div className="row mb-70">
						<div className="col-lg-12">
							<Swiper {...swiperOptions} className="swiper-container">
								{testimonials.map((item, index) => (
									<SwiperSlide key={index}>
										<div style={{
											background: "#ffffff",
											border: "1px solid #e2e8f0",
											borderRadius: "16px",
											padding: "36px 30px",
											height: "100%",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											position: "relative",
											boxShadow: "0 6px 25px rgba(0,0,0,0.04)"
										}}>
											<div style={{ position: "absolute", top: "24px", right: "24px", color: "#0366a2", opacity: 0.15, fontSize: "40px" }}>
												<i className="icon-quote-left-saying-speech" />
											</div>

											<div>
												<div style={{ 
													display: "inline-block", 
													background: "#fef9ee", 
													color: "#b45309", 
													fontSize: "12px", 
													fontWeight: 700, 
													padding: "4px 12px", 
													borderRadius: "20px", 
													marginBottom: "18px",
													border: "1px solid #fdeecb"
												}}>
													{item.highlight}
												</div>
												<p style={{ 
													color: "#334155", 
													fontSize: "15px", 
													lineHeight: "1.7", 
													fontStyle: "italic", 
													marginBottom: "24px" 
												}}>
													"{item.quote}"
												</p>
											</div>

											<div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "18px" }}>
												<h4 style={{ color: "#0f172a", fontSize: "18px", fontWeight: 700, margin: 0 }}>
													{item.name}
												</h4>
												<p style={{ color: "#0366a2", fontSize: "13px", fontWeight: 600, margin: "4px 0" }}>
													{item.role}
												</p>
												<span style={{ color: "#64748b", fontSize: "12px" }}>
													<i className="flaticon-marker" style={{ marginRight: "4px" }} />
													{item.location}
												</span>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					{/* Numbers / Proven Track Record */}
					<div className="row mt-40">
						<div className="col-lg-12">
							<div style={{
								background: "#f8fafc",
								borderRadius: "16px",
								padding: "40px 30px",
								border: "1px solid #e2e8f0",
								boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
							}}>
								<div className="row text-center" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
									<div>
										<div style={{ fontSize: "42px", fontWeight: 900, color: "#0366a2" }}>
											<CounterUp count={500} />+
										</div>
										<p style={{ color: "#0f172a", fontWeight: 700, fontSize: "15px", marginTop: "6px" }}>
											Projects Completed
										</p>
									</div>
									<div>
										<div style={{ fontSize: "42px", fontWeight: 900, color: "#0366a2" }}>
											<CounterUp count={2345} />+
										</div>
										<p style={{ color: "#0f172a", fontWeight: 700, fontSize: "15px", marginTop: "6px" }}>
											Satisfied Clients &amp; Borrowers
										</p>
									</div>
									<div>
										<div style={{ fontSize: "42px", fontWeight: 900, color: "#0366a2" }}>
											<CounterUp count={30} />+
										</div>
										<p style={{ color: "#0f172a", fontWeight: 700, fontSize: "15px", marginTop: "6px" }}>
											Partner Banks &amp; NBFCs
										</p>
									</div>
									<div>
										<div style={{ fontSize: "42px", fontWeight: 900, color: "#0366a2" }}>
											<CounterUp count={194} />+
										</div>
										<p style={{ color: "#0f172a", fontWeight: 700, fontSize: "15px", marginTop: "6px" }}>
											Kerala Support Centers
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
