'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Section2() {
	const values = [
		{ num: "01", title: "Integrity in Every Action", desc: "Uncompromising ethical advisory, complete transparency, and honest guidance in every client interaction." },
		{ num: "02", title: "Customer First Dedication", desc: "Listening intently to individual and business aspirations, tailoring financial solutions that truly fit." },
		{ num: "03", title: "Trust Through Transparency", desc: "Zero hidden charges, clear terms from day one, and complete upfront clarity across all partner banks." },
		{ num: "04", title: "Growth Through Relationships", desc: "Building enduring lifelong partnerships rather than short-term, transactional engagements." },
		{ num: "05", title: "Value for Every Rupee", desc: "Maximizing interest rate savings, streamlining government subsidies, and safeguarding your capital." }
	]

	return (
		<>
			<section className="s-why-choose-3" id="mission-vision" style={{ background: "#f8fafc", padding: "105px 0 115px 0" }}>
				<div className="tf-container about-page-container">
					{/* Top Row: Vision, Mission & Team Visual */}
					<div className="row align-items-center g-5 mb-5">
						<div className="col-lg-6">
							<div>
								<p style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1.5px", marginBottom: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
									<i className="icon-angles-right" />
									What Guides Us
								</p>
								<h2 style={{
									fontSize: "clamp(30px, 3.4vw, 42px)",
									fontWeight: 500,
									color: "#000000",
									textTransform: "uppercase",
									letterSpacing: "0.4px",
									lineHeight: "1.2",
									marginBottom: "28px",
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									Vision, Mission &amp; Strategic Purpose
								</h2>

								<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
									{/* Vision Card */}
									<div style={{ 
										background: "#ffffff", 
										padding: "32px 30px", 
										borderRadius: "18px", 
										border: "1px solid #e2e8f0", 
										boxShadow: "0 6px 24px rgba(0,0,0,0.04)"
									}}>
										<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
											<div style={{
												width: "44px",
												height: "44px",
												borderRadius: "12px",
												background: "#edf5fd",
												color: "#0366a2",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "22px"
											}}>
												<i className="flaticon-rocket" />
											</div>
											<h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", textTransform: "uppercase", letterSpacing: "0.4px", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
												Our Vision
											</h3>
										</div>
										<p style={{ fontSize: "17px", lineHeight: "1.75", color: "#334155", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
											To grow into India's largest coordinated platform for financial, insurance, and business services — one dependable, transparent network wherever a client needs it.
										</p>
									</div>

									{/* Mission Card */}
									<div style={{ 
										background: "#ffffff", 
										padding: "32px 30px", 
										borderRadius: "18px", 
										border: "1px solid #e2e8f0", 
										boxShadow: "0 6px 24px rgba(0,0,0,0.04)"
									}}>
										<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
											<div style={{
												width: "44px",
												height: "44px",
												borderRadius: "12px",
												background: "#fef9ee",
												color: "#b45309",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "22px"
											}}>
												<i className="flaticon-market" />
											</div>
											<h3 style={{ fontSize: "20px", fontWeight: 600, color: "#000000", textTransform: "uppercase", letterSpacing: "0.4px", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
												Our Mission
											</h3>
										</div>
										<p style={{ fontSize: "17px", lineHeight: "1.75", color: "#334155", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
											To extend our presence across every part of India, bringing the same trusted, relationship-first advisory and rapid financial turnaround to clients nationwide.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Visual Team Image */}
						<div className="col-lg-6">
							<div style={{
								width: "100%",
								borderRadius: "24px",
								overflow: "hidden",
								boxShadow: "0 20px 48px rgba(0,0,0,0.08)",
								border: "1px solid #e2e8f0",
								position: "relative",
								aspectRatio: "4/3"
							}}>
								<Image
									fill
									sizes="(max-width: 991px) 100vw, 50vw"
									style={{ objectFit: "cover", objectPosition: "center" }}
									src="/images/section/globon-vision-natural.jpg" 
									alt="Globon Business Solutions - Vision, Mission & Strategic Purpose" 
									priority
								/>
							</div>
						</div>
					</div>

					{/* Bottom Block: 5 Guiding Core Values */}
					<div className="mt-5" style={{
						backgroundColor: "#ffffff",
						borderRadius: "24px",
						border: "1px solid #e2e8f0",
						boxShadow: "0 12px 40px rgba(0, 0, 0, 0.04)",
						padding: "clamp(32px, 4vw, 56px)"
					}}>
						<div className="row align-items-center mb-5">
							<div className="col-lg-7">
								<p style={{ color: "#0366a2", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
									<i className="icon-angles-right" />
									Our Principles
								</p>
								<h3 style={{
									fontSize: "clamp(26px, 2.8vw, 36px)",
									fontWeight: 500,
									color: "#000000",
									textTransform: "uppercase",
									letterSpacing: "0.4px",
									lineHeight: "1.25",
									margin: 0,
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									Five Guiding Core Values
								</h3>
							</div>
							<div className="col-lg-5 mt-3 mt-lg-0">
								<p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.7", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
									Our ethical compass drives how we interact with borrowers, entrepreneurs, partner banks, and communities every single day.
								</p>
							</div>
						</div>

						{/* Values Grid */}
						<div style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
							gap: "24px"
						}}>
							{values.map((val) => (
								<div
									key={val.num}
									style={{
										background: "#f8fafc",
										padding: "26px 24px",
										borderRadius: "16px",
										border: "1px solid #e2e8f0",
										borderLeft: "4px solid #0366a2",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										transition: "all 0.25s ease"
									}}
								>
									<div>
										<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
											<span style={{
												background: "#ffffff",
												color: "#0366a2",
												fontWeight: 800,
												fontSize: "14px",
												padding: "4px 12px",
												borderRadius: "8px",
												border: "1px solid #d0e3f7"
											}}>
												{val.num}
											</span>
											<span style={{ color: "#16a34a", fontSize: "18px", fontWeight: 700 }}>✓</span>
										</div>
										<h4 style={{
											margin: "0 0 10px 0",
											color: "#000000",
											fontWeight: 600,
											fontSize: "18px",
											fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
										}}>
											{val.title}
										</h4>
										<p style={{ margin: 0, color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
											{val.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
