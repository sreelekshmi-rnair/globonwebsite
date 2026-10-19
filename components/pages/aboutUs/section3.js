import Link from 'next/link'

export default function Section3() {
	const reasons = [
		{
			id: "01",
			title: "Stage-Specific Growth Advisory",
			desc: "Whether you're an ambitious startup with an idea or an established business expanding, we provide tailored credit & compliance strategies for your exact growth stage.",
			tags: ["Feasibility studies for startups", "Debt restructuring for enterprises"],
			icon: "flaticon-rocket"
		},
		{
			id: "02",
			title: "Integrated Solutions & Fintech Edge",
			desc: "Unlike traditional lenders, we combine consulting and funding with smart AI eligibility tools, digital assessments, and business automation all under one roof.",
			tags: ["30+ bank loan networks", "Instant eligibility & EMI tools"],
			icon: "flaticon-technology"
		},
		{
			id: "03",
			title: "Proven 3-Step Execution Model",
			desc: "Comprehensive Consultation → Strategic Guidelines → Bank Liaison & Execution. A transparent, structured roadmap that delivers dependable approvals.",
			tags: ["Clear visibility at every milestone", "Zero unexpected surprises or delays"],
			icon: "flaticon-opportunity"
		},
		{
			id: "04",
			title: "Industry-Leading 48-Hour Approvals",
			desc: "While competitors take weeks, our streamlined paperwork, direct banking channels, and local branch networks ensure fast approvals without compromise.",
			tags: ["48-hour approval turnaround", "Minimal paperwork required"],
			icon: "flaticon-clock"
		},
		{
			id: "05",
			title: "Extensive Network & Pan-India Reach",
			desc: "With 194+ collection centers across Kerala and tie-ups with 30+ major banks and NBFCs nationwide, we provide local warmth with institutional scale.",
			tags: ["Pan-Kerala & Pan-India presence", "Dedicated relationship manager"],
			icon: "flaticon-market"
		},
		{
			id: "06",
			title: "100% Transparency & Zero Hidden Fees",
			desc: "Every fee is upfront. Every term is clear. We believe in honest, relationship-first dealings—no fine print, no unexpected charges, and no pressure tactics.",
			tags: ["Zero hidden charges guarantee", "Transparent terms from day one"],
			icon: "flaticon-tag"
		}
	]

	return (
		<>
			<section className="s-team" style={{ background: "#ffffff", padding: "105px 0 115px 0" }}>
				<div className="tf-container about-page-container">
					{/* Header Block */}
					<div className="text-center mb-5">
						<p style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1.5px", marginBottom: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
							<i className="icon-angles-right" />
							The Globon Difference
						</p>
						<h2 style={{
							fontSize: "clamp(30px, 3.4vw, 42px)",
							fontWeight: 500,
							color: "#000000",
							textTransform: "uppercase",
							letterSpacing: "0.4px",
							lineHeight: "1.2",
							marginBottom: "20px",
							fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
						}}>
							Why Businesses Choose Globon
						</h2>
						<p style={{ maxWidth: "880px", margin: "0 auto", fontSize: "18px", lineHeight: "1.75", color: "#334155", fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
							Globon Business Solutions isn't just another financial services provider. We are a comprehensive 
							growth partner combining expert advisory, flexible credit options, and direct banking access.
						</p>

						{/* Spacious Stat Bar */}
						<div className="mt-5" style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
							gap: "20px",
							background: "#f8fafc",
							padding: "36px 32px",
							borderRadius: "20px",
							border: "1px solid #e2e8f0",
							boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
							maxWidth: "1200px",
							marginLeft: "auto",
							marginRight: "auto"
						}}>
							<div style={{ textAlign: "center", padding: "10px" }}>
								<div style={{ fontSize: "clamp(32px, 3vw, 42px)", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>₹200+ Cr</div>
								<div style={{ color: "#64748b", fontSize: "15px", fontWeight: 600, marginTop: "8px" }}>Funding Facilitated</div>
							</div>
							<div style={{ textAlign: "center", padding: "10px", borderLeft: "1px solid #e2e8f0" }}>
								<div style={{ fontSize: "clamp(32px, 3vw, 42px)", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>48 Hours</div>
								<div style={{ color: "#64748b", fontSize: "15px", fontWeight: 600, marginTop: "8px" }}>Fast Approval Turnaround</div>
							</div>
							<div style={{ textAlign: "center", padding: "10px", borderLeft: "1px solid #e2e8f0" }}>
								<div style={{ fontSize: "clamp(32px, 3vw, 42px)", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>194+</div>
								<div style={{ color: "#64748b", fontSize: "15px", fontWeight: 600, marginTop: "8px" }}>Support &amp; Collection Centers</div>
							</div>
							<div style={{ textAlign: "center", padding: "10px", borderLeft: "1px solid #e2e8f0" }}>
								<div style={{ fontSize: "clamp(32px, 3vw, 42px)", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>30+</div>
								<div style={{ color: "#64748b", fontSize: "15px", fontWeight: 600, marginTop: "8px" }}>Partner Banks &amp; NBFCs</div>
							</div>
						</div>
					</div>

					{/* 6 Core Reasons Grid */}
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "28px"
					}}>
						{reasons.map((reason) => (
							<div key={reason.id} style={{
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "18px",
								padding: "36px 32px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
								transition: "transform 0.25s ease, box-shadow 0.25s ease"
							}}>
								<div>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
										<span style={{ 
											background: "#fef9ee", 
											color: "#b45309", 
											fontWeight: 800, 
											fontSize: "13px", 
											padding: "5px 14px", 
											borderRadius: "20px", 
											border: "1px solid #fdeecb"
										}}>
											Reason #{reason.id}
										</span>
										<div style={{
											width: "44px",
											height: "44px",
											borderRadius: "12px",
											background: "#edf5fd",
											color: "#0366a2",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "20px"
										}}>
											<i className={reason.icon} />
										</div>
									</div>
									<h3 style={{
										fontSize: "19px",
										fontWeight: 600,
										color: "#000000",
										textTransform: "uppercase",
										letterSpacing: "0.3px",
										marginBottom: "14px",
										fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
									}}>
										{reason.title}
									</h3>
									<p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
										{reason.desc}
									</p>
								</div>
								<div>
									<div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "18px" }}>
										{reason.tags.map((tag, idx) => (
											<div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
												<span style={{ color: "#16a34a", fontWeight: "bold", fontSize: "16px" }}>✓</span>
												<span style={{ color: "#334155", fontSize: "14.5px", fontWeight: 500 }}>{tag}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Centered Action Button */}
					<div style={{ display: "flex", justifyContent: "center", marginTop: "55px", width: "100%" }}>
						<Link
							href="/contact"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								backgroundColor: "#0366a2",
								color: "#ffffff",
								fontWeight: 600,
								fontSize: "16px",
								padding: "15px 36px",
								borderRadius: "6px",
								textDecoration: "none",
								transition: "all 0.25s ease",
								boxShadow: "0 4px 16px rgba(3, 102, 162, 0.25)"
							}}
						>
							<span>Experience The Globon Difference</span>
							<span style={{ fontSize: "18px", fontWeight: 700 }}>↗</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
