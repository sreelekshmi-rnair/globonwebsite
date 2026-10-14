import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<section className="s-about" style={{ background: "#ffffff", padding: "80px 0" }}>
				<div className="tf-container about-page-container">
					<div className="row align-items-center" style={{ rowGap: "40px" }}>
						{/* Left Column: Introduction & Visual Story */}
						<div className="col-lg-6">
							<div className="heading">
								<p className="s-sub-title mb-16" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontSize: "13px" }}>
									<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
									Company Introduction · Est. 2017
								</p>
								<h1 className="s-title mb-24 text-anime-wave" style={{ fontSize: "38px", lineHeight: "1.25", color: "#0f172a", fontWeight: 800 }}>
									One Roof for All Your <br />
									<span style={{ color: "#0366a2" }}>Financial &amp; Business Needs</span>
								</h1>
								
								<div className="mb-30" style={{
									background: "linear-gradient(135deg, #fef9ee 0%, #fffdf7 100%)",
									borderLeft: "4px solid #fbb411",
									padding: "18px 22px",
									borderRadius: "0 12px 12px 0",
									border: "1px solid #fdeecb",
									borderLeftWidth: "4px"
								}}>
									<p style={{ color: "#b45309", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
										Our Tagline
									</p>
									<p style={{ color: "#0f172a", fontSize: "18px", fontWeight: 800, margin: 0, lineHeight: "1.4" }}>
										"Make It" — Turning Your Financial &amp; Business Goals Into Reality
									</p>
								</div>

								<div className="image" style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.08)", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
									<Image
										width={740}
										height={460}
										sizes="(max-width: 991px) 100vw, 50vw"
										style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
										src="/images/section/globon-about-consultation.jpg" 
										alt="Globon Business Solutions Kodungallur - Financial & Loan Consultation" 
										priority
									/>
								</div>
							</div>
						</div>
						
						{/* Right Column: Experience, Narrative & Strengths */}
						<div className="col-lg-6">
							<div className="content-right" style={{ paddingLeft: "clamp(0px, 3.5vw, 36px)" }}>
								<div style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "18px",
									background: "#edf5fd",
									padding: "16px 24px",
									borderRadius: "14px",
									border: "1px solid #d0e3f7",
									marginBottom: "24px"
								}}>
									<div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
										<div className="odometer" style={{ color: "#0366a2", fontSize: "50px", fontWeight: 900, lineHeight: 1 }}>
											<CounterUp count={9} />
										</div>
										<span style={{ color: "#fbb411", fontSize: "36px", fontWeight: 900, lineHeight: 1 }}>+</span>
									</div>
									<div>
										<div style={{ color: "#0f172a", fontWeight: 800, fontSize: "16px", lineHeight: "1.3" }}>
											Years of Trusted Experience
										</div>
										<div style={{ color: "#64748b", fontSize: "13px", fontWeight: 500, marginTop: "2px" }}>
											Founded in 2017, Kodungallur, Kerala
										</div>
									</div>
								</div>

								<p className="text mb-24" style={{ fontSize: "16px", lineHeight: "1.75", color: "#475569" }}>
									Globon Business Solutions was founded in 2017 in Kodungallur, Thrissur, with a simple purpose: 
									bring loans, insurance, real estate, and business support services together under one roof, backed 
									by a network of over 30 partner banks and NBFCs. True to our tagline, <strong style={{ color: "#0f172a" }}>"Make It,"</strong> we exist 
									to turn a client's financial or business need into something done — handled with a relationship-first, 
									locally-rooted approach.
								</p>

								<ul className="list mb-35" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
									{[
										"Multiple financial & business services under one roof",
										"Strong relationship-based client advisory approach",
										"Dedicated entrepreneur & MSME funding initiatives",
										"Deep local market expertise & 30+ leading bank network"
									].map((item, idx) => (
										<li key={idx} style={{ 
											display: "flex", 
											alignItems: "center", 
											gap: "12px", 
											background: "#f8fafc", 
											padding: "12px 18px", 
											borderRadius: "10px", 
											border: "1px solid #e2e8f0" 
										}}>
											<div style={{ color: "#16a34a", minWidth: "20px", display: "flex" }}>
												<i className="icon-check-2" style={{ fontSize: "16px" }} />
											</div>
											<p style={{ margin: 0, color: "#1e293b", fontWeight: 600, fontSize: "14px" }}>
												{item}
											</p>
										</li>
									))}
								</ul>

								<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
									<Link href="/our-service" className="tf-btn text-anime-style-1">
										Our Services
										<i className="icon-chevron-right" />
									</Link>
									<Link href="/contact" className="tf-btn style-3 text-anime-style-1">
										Talk to an Expert
										<i className="icon-chevron-right" />
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
