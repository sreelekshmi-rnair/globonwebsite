'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"

export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
		)

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					}
				})
			},
			{
				root: null,
				threshold: isSmallScreen ? 0.2 : 0.3,
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])

	return (
		<>
			<section className="s-why-choose-3" id="mission-vision" style={{ background: "#edf5fd", padding: "80px 0" }}>
				<div className="tf-container about-page-container">
					{/* Top Row: Vision, Mission & Team Visual */}
					<div className="row align-items-center" style={{ rowGap: "40px" }}>
						<div className="col-lg-6">
							<div className="wg-company">
								<div className="mb-24">
									<p className="s-sub-title mb-10" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
										<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
										What Guides Us
									</p>
									<h2 className="s-title text-anime-wave" style={{ fontSize: "36px", color: "#0f172a", fontWeight: 800 }}>
										Vision, Mission &amp; <span style={{ color: "#0366a2" }}>Strategic Purpose</span>
									</h2>
								</div>
								<ul className="list" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
									<li className="wow fadeInUp" data-wow-delay="0s" style={{ 
										background: "#ffffff", 
										padding: "24px 26px", 
										borderRadius: "14px", 
										border: "1px solid #e2e8f0", 
										boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
									}}>
										<div className="title" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
											<div className="icon" style={{ color: "#0366a2", fontSize: "26px", display: "flex" }}>
												<i className="flaticon-rocket" />
											</div>
											<span style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a" }}>
												Our Vision
											</span>
										</div>
										<p className="text" style={{ fontSize: "15px", lineHeight: "1.7", color: "#475569", margin: 0 }}>
											To grow into India's largest coordinated platform for financial, insurance, and business services — one dependable network, wherever a client needs it.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0.1s" style={{ 
										background: "#ffffff", 
										padding: "24px 26px", 
										borderRadius: "14px", 
										border: "1px solid #e2e8f0", 
										boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
									}}>
										<div className="title" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
											<div className="icon" style={{ color: "#0366a2", fontSize: "26px", display: "flex" }}>
												<i className="flaticon-market" />
											</div>
											<span style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a" }}>
												Our Mission
											</span>
										</div>
										<p className="text" style={{ fontSize: "15px", lineHeight: "1.7", color: "#475569", margin: 0 }}>
											To extend our presence across every part of India, bringing the same trusted, relationship-based service to clients nationwide.
										</p>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="image tf-hover" style={{ paddingLeft: "clamp(0px, 2.5vw, 24px)" }}>
								<div className="hover-1" style={{ width: "100%", borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
									<Image
										width={700}
										height={500}
										sizes="(max-width: 991px) 100vw, 50vw"
										style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
										src="/images/section/globon-vision-team.jpg" 
										alt="Globon Business Solutions - Strategic Vision & Core Values" 
										className="lazyload tf-animate-2" 
									/>
								</div>
							</div>
						</div>

						{/* Bottom Block: 5 Guiding Core Values */}
						<div className="col-lg-12 mt-40">
							<div
								style={{
									backgroundColor: "#ffffff",
									borderRadius: "20px",
									border: "1px solid #e2e8f0",
									boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)",
									padding: "44px 38px",
									display: "flex",
									justifyContent: "space-between",
									gap: "36px",
									flexWrap: "wrap",
								}}
							>
								<div style={{ flex: "1 1 340px", maxWidth: "400px" }}>
									<div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#edf5fd", color: "#0366a2", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid #d0e3f7" }}>
										<i className="icon-angles-right" />
										Our Principles
									</div>
									<h3 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", lineHeight: "1.25", marginBottom: "16px" }}>
										5 Guiding <span style={{ color: "#0366a2" }}>Core Values</span>
									</h3>
									<p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.75", marginBottom: "22px" }}>
										At Globon Business Solutions, our ethical compass drives how we interact with clients, banks, and partners every single day.
									</p>
									<div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "4px solid #0366a2", borderRadius: "10px", padding: "16px 18px" }}>
										<p style={{ margin: 0, color: "#334155", fontSize: "14px", fontWeight: 600, lineHeight: "1.6" }}>
											Guided by transparency, customer dedication, and sustainable value creation across every transaction.
										</p>
									</div>
								</div>

								<div style={{ flex: "1 1 460px" }}>
									<div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
										{[
											{ num: "01", title: "Integrity in Every Action", desc: "Uncompromising ethical advisory, complete transparency, and honest guidance." },
											{ num: "02", title: "Customer First", desc: "Listening intently to client goals and crafting personalized solutions that fit." },
											{ num: "03", title: "Trust Through Transparency", desc: "Zero hidden fees, clear pricing from day one, and upfront terms at every step." },
											{ num: "04", title: "Growth Through Relationship", desc: "Building enduring lifelong partnerships rather than transactional engagements." },
											{ num: "05", title: "Value for Every Rupee", desc: "Maximizing savings, optimizing subsidy access, and safeguarding capital." }
										].map((val) => (
											<div
												key={val.num}
												style={{
													display: "flex",
													alignItems: "flex-start",
													gap: "16px",
													background: "#ffffff",
													padding: "16px 20px",
													borderRadius: "12px",
													border: "1px solid #e2e8f0",
													borderLeft: "4px solid #0366a2",
													boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
													transition: "transform 0.2s ease, box-shadow 0.2s ease"
												}}
											>
												<span
													style={{
														background: "#fef9ee",
														color: "#b45309",
														fontWeight: 800,
														fontSize: "13px",
														padding: "4px 10px",
														borderRadius: "8px",
														border: "1px solid #fdeecb",
														lineHeight: "1.4"
													}}
												>
													{val.num}
												</span>
												<div>
													<p style={{ margin: 0, color: "#0f172a", fontWeight: 700, fontSize: "15px" }}>
														{val.title}
													</p>
													<p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "13px", lineHeight: "1.5" }}>
														{val.desc}
													</p>
												</div>
											</div>
										))}
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
