import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<section className="s-about" style={{ background: "#ffffff", padding: "100px 0 110px 0" }}>
				<div className="tf-container about-page-container">
					<div className="row align-items-center g-5">
						{/* Left Column: Hero Showcase Visual with Floating Badges */}
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div style={{ position: "relative", width: "100%", maxWidth: "640px", margin: "0 auto" }}>
								{/* Main Photo Card */}
								<div style={{
									borderRadius: "24px",
									overflow: "hidden",
									boxShadow: "0 20px 48px rgba(0, 0, 0, 0.08)",
									border: "1px solid #e2e8f0",
									backgroundColor: "#f8fafc",
									position: "relative",
									aspectRatio: "4/3",
									width: "100%"
								}}>
									<Image
										fill
										sizes="(max-width: 991px) 100vw, 50vw"
										style={{ objectFit: "cover", objectPosition: "center" }}
										src="/images/section/globon-about-natural.jpg" 
										alt="Globon Business Solutions Kodungallur - Financial & Loan Consultation" 
										priority
									/>
								</div>

								{/* Floating Experience Badge */}
								<div style={{
									position: "absolute",
									bottom: "-24px",
									right: "24px",
									background: "#ffffff",
									borderRadius: "18px",
									padding: "16px 26px",
									boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
									border: "1px solid #f1f5f9",
									display: "flex",
									alignItems: "center",
									gap: "16px",
									zIndex: 10
								}}>
									<div style={{
										width: "48px",
										height: "48px",
										borderRadius: "50%",
										background: "#0366a2",
										color: "#ffffff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "22px",
										fontWeight: 800,
										flexShrink: 0
									}}>
										✓
									</div>
									<div>
										<div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
											<span style={{ fontSize: "28px", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>9+</span>
											<span style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginLeft: "4px" }}>Years Experience</span>
										</div>
										<div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500, marginTop: "3px" }}>
											Founded 2017 · Kodungallur, Kerala
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* Right Column: Narrative, Tagline & Strengths */}
						<div className="col-lg-6">
							<div style={{ paddingLeft: "clamp(0px, 2.5vw, 28px)" }}>
								<p style={{
									color: "#0366a2",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "1.5px",
									fontSize: "13px",
									marginBottom: "14px",
									display: "inline-flex",
									alignItems: "center",
									gap: "8px"
								}}>
									<i className="icon-angles-right" />
									Company Introduction · Est. 2017
								</p>
								
								<h1 style={{
									fontSize: "clamp(30px, 3.4vw, 44px)",
									fontWeight: 500,
									color: "#000000",
									textTransform: "uppercase",
									lineHeight: "1.2",
									letterSpacing: "0.4px",
									marginBottom: "24px",
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									One Roof for All Your <br />
									Financial &amp; Business Needs
								</h1>
								
								{/* Tagline Box */}
								<div style={{
									background: "#f8fafc",
									borderLeft: "4px solid #0366a2",
									padding: "18px 24px",
									borderRadius: "0 14px 14px 0",
									border: "1px solid #e2e8f0",
									borderLeftWidth: "4px",
									marginBottom: "28px"
								}}>
									<p style={{ color: "#0366a2", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "4px" }}>
										Our Tagline
									</p>
									<p style={{ color: "#0f172a", fontSize: "18px", fontWeight: 700, margin: 0, lineHeight: "1.4" }}>
										"Make It" — Turning Your Financial &amp; Business Goals Into Reality
									</p>
								</div>

								<p style={{
									fontSize: "18px",
									lineHeight: "1.75",
									color: "#334155",
									marginBottom: "30px",
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									Globon Business Solutions was founded in 2017 in Kodungallur, Thrissur, with a simple purpose: 
									bring loans, insurance, real estate, and business support services together under one roof, backed 
									by a network of over 30 partner banks and NBFCs. True to our tagline, <strong style={{ color: "#000000" }}>"Make It,"</strong> we exist 
									to turn a client's financial or business need into something done — handled with a relationship-first, 
									locally-rooted approach.
								</p>

								{/* 4 Key Strengths in 2-Column Grid */}
								<div style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
									gap: "14px",
									marginBottom: "36px"
								}}>
									{[
										"All financial & business services under one roof",
										"Relationship-based personal client advisory",
										"Dedicated entrepreneur & MSME funding initiatives",
										"Deep local market expertise & 30+ leading bank network"
									].map((item, idx) => (
										<div key={idx} style={{ 
											display: "flex", 
											alignItems: "center", 
											gap: "12px", 
											background: "#f8fafc", 
											padding: "14px 18px", 
											borderRadius: "12px", 
											border: "1px solid #e2e8f0" 
										}}>
											<div style={{
												width: "24px",
												height: "24px",
												borderRadius: "50%",
												background: "#edf5fd",
												color: "#0366a2",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "13px",
												fontWeight: 800,
												flexShrink: 0
											}}>
												✓
											</div>
											<p style={{ margin: 0, color: "#1e293b", fontWeight: 600, fontSize: "15px", lineHeight: "1.4" }}>
												{item}
											</p>
										</div>
									))}
								</div>

								<div style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center" }}>
									<Link
										href="/our-service"
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "10px",
											backgroundColor: "#0366a2",
											color: "#ffffff",
											fontWeight: 600,
											fontSize: "16px",
											padding: "14px 32px",
											borderRadius: "6px",
											textDecoration: "none",
											transition: "all 0.25s ease",
											boxShadow: "0 4px 16px rgba(3, 102, 162, 0.25)"
										}}
									>
										<span>Our Services</span>
										<span style={{ fontSize: "18px", fontWeight: 700 }}>↗</span>
									</Link>
									<Link
										href="/contact"
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "10px",
											backgroundColor: "#ffffff",
											color: "#0f172a",
											fontWeight: 600,
											fontSize: "16px",
											padding: "14px 32px",
											borderRadius: "6px",
											textDecoration: "none",
											border: "1px solid #cbd5e1",
											transition: "all 0.25s ease"
										}}
									>
										<span>Talk to an Expert</span>
										<span style={{ fontSize: "18px", fontWeight: 700 }}>›</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
