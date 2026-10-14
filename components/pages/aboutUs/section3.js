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
			<section className="s-team" style={{ background: "#ffffff", padding: "80px 0" }}>
				<div className="tf-container about-page-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center mb-50">
								<p className="s-sub-title mb-10" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
									<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
									The Globon Difference
								</p>
								<h2 className="s-title letter-space-0 text-anime-wave" style={{ fontSize: "36px", color: "#0f172a", fontWeight: 800 }}>
									Why Businesses Choose <span style={{ color: "#0366a2" }}>Globon</span>
								</h2>
								<p className="text mx-auto mt-16" style={{ maxWidth: "820px", fontSize: "16px", lineHeight: "1.75", color: "#475569" }}>
									Globon Business Solutions isn't just another financial services provider. We are a comprehensive 
									growth partner that combines expert consulting, flexible financing, and cutting-edge technology to help 
									businesses at every stage scale efficiently and sustainably. With <strong style={{ color: "#0f172a" }}>50+ satisfied clients</strong>, 
									<strong style={{ color: "#0f172a" }}> ₹200+ Crores in funding facilitated</strong>, and a proven 3-step strategic process, we've established 
									ourselves as the preferred choice for businesses that demand more than just capital — they demand expertise, 
									transparency, and genuine partnership.
								</p>

								{/* Stat bar */}
								<div className="mt-35" style={{
									display: "flex",
									justifyContent: "center",
									flexWrap: "wrap",
									gap: "24px",
									background: "#ffffff",
									padding: "24px",
									borderRadius: "14px",
									border: "1px solid #e2e8f0",
									boxShadow: "0 6px 25px rgba(0,0,0,0.04)",
									maxWidth: "960px",
									marginLeft: "auto",
									marginRight: "auto"
								}}>
									<div style={{ textAlign: "center", padding: "0 18px" }}>
										<div style={{ fontSize: "32px", fontWeight: 900, color: "#0366a2" }}>₹200+ Cr</div>
										<div style={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Funding Facilitated</div>
									</div>
									<div style={{ textAlign: "center", padding: "0 18px", borderLeft: "1px solid #e2e8f0" }}>
										<div style={{ fontSize: "32px", fontWeight: 900, color: "#0366a2" }}>48 Hours</div>
										<div style={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Fast Approval Turnaround</div>
									</div>
									<div style={{ textAlign: "center", padding: "0 18px", borderLeft: "1px solid #e2e8f0" }}>
										<div style={{ fontSize: "32px", fontWeight: 900, color: "#0366a2" }}>194+</div>
										<div style={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Support &amp; Collection Centers</div>
									</div>
									<div style={{ textAlign: "center", padding: "0 18px", borderLeft: "1px solid #e2e8f0" }}>
										<div style={{ fontSize: "32px", fontWeight: 900, color: "#0366a2" }}>30+</div>
										<div style={{ color: "#64748b", fontSize: "13px", fontWeight: 600 }}>Partner Banks &amp; NBFCs</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 6 Core Reasons Grid (Balanced 3x2) */}
					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
						{reasons.map((reason) => (
							<div key={reason.id} style={{
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "14px",
								padding: "30px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
								transition: "transform 0.2s ease, box-shadow 0.2s ease"
							}}>
								<div>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
										<span style={{ 
											background: "#fef9ee", 
											color: "#b45309", 
											fontWeight: 800, 
											fontSize: "13px", 
											padding: "4px 12px", 
											borderRadius: "20px", 
											border: "1px solid #fdeecb"
										}}>
											Reason #{reason.id}
										</span>
										<i className={reason.icon} style={{ fontSize: "28px", color: "#0366a2" }} />
									</div>
									<h3 style={{ fontSize: "19px", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
										{reason.title}
									</h3>
									<p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
										{reason.desc}
									</p>
								</div>
								<div>
									<div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
										{reason.tags.map((tag, idx) => (
											<div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
												<span style={{ color: "#16a34a", fontWeight: "bold" }}>✓</span>
												<span style={{ color: "#64748b", fontSize: "13px" }}>{tag}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Centered Action Button */}
					<div style={{ display: "flex", justifyContent: "center", marginTop: "45px", width: "100%" }}>
						<Link href="/contact" className="tf-btn text-anime-style-1" style={{ margin: "0 auto" }}>
							Experience The Globon Difference
							<i className="icon-chevron-right" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
