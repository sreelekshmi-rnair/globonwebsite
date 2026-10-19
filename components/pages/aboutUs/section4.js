import Link from 'next/link'

export default function Section4() {
	const verticals = [
		{
			num: "01",
			title: "Loans & Advances",
			desc: "Comprehensive credit facilities from 30+ leading partner banks & NBFCs with 48-hour approvals.",
			items: ["Personal & Education Loans", "Home & Property Loans (LAP)", "Business & Project Loans", "PMEGP & Stand-Up India Schemes", "Vehicle Loans & KSFE Chitty Support"],
			link: "/our-service#loans"
		},
		{
			num: "02",
			title: "Business & Compliance",
			desc: "End-to-end statutory registrations, tax compliance, licensing, and corporate advisory.",
			items: ["Pvt Ltd, LLP & Partnership Registration", "GST & ITR Filing, Auditing Services", "Trademark, Patent & ISO Certification", "Project Reports & CMA Data", "ERP & CRM Business Software"],
			link: "/our-service#business"
		},
		{
			num: "03",
			title: "Insurance Solutions",
			desc: "Comprehensive protection tailored to safeguard your family, assets, workforce, and enterprise.",
			items: ["Life & Comprehensive Health Insurance", "Motor & Commercial Vehicle Insurance", "Home & Commercial Shop Insurance", "Travel & Group Employee Insurance"],
			link: "/our-service#insurance"
		},
		{
			num: "04",
			title: "Real Estate Consulting",
			desc: "Transparent real estate acquisition, title verification, architectural planning, and documentation.",
			items: ["Property Buying & Selling Assistance", "Property Investment Advisory", "Title Deeds & Legal Documentation", "Building Plan Approval & Estimates", "Real Estate Mortgage Finance"],
			link: "/our-service#real-estate"
		},
		{
			num: "05",
			title: "Digital & Marketing",
			desc: "Modern digital technology solutions to establish your brand presence and drive customer acquisition.",
			items: ["Custom Website Design & Development", "Brand Identity & Logo Creation", "SEO & Performance Google Ads", "Social Media Marketing & Management"],
			link: "/our-service#digital"
		},
		{
			num: "06",
			title: "Govt Schemes & Subsidies",
			desc: "Liaison & documentation advisory for central and Kerala state entrepreneurship subsidy schemes.",
			items: ["PMEGP Scheme Subsidy Support", "Stand-Up India & Mudra Finance", "MSME Capital Subsidy Liaising", "Subsidized Machinery & Agri Projects"],
			link: "/our-service#subsidies"
		}
	]

	return (
		<>
			<section className="s-solution" style={{ padding: "105px 0 115px 0", background: "#f8fafc" }}>
				<div className="tf-container about-page-container">
					{/* Top Header Block */}
					<div className="row align-items-center g-5 mb-5">
						<div className="col-lg-8">
							<p style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1.5px", marginBottom: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
								<i className="icon-angles-right" />
								Essential Services Under One Roof
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
								Helping You Move Forward With The Right Financial Solution
							</h2>
							<p style={{ fontSize: "18px", lineHeight: "1.75", color: "#334155", margin: 0, fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
								<strong style={{ color: "#000000" }}>Globon Business Solutions</strong> specializes in <strong>loan assistance and financial solutions</strong>, 
								helping individuals, entrepreneurs, startups, and businesses navigate funding with complete clarity and speed.
							</p>
						</div>

						{/* Right Triad Box */}
						<div className="col-lg-4 text-lg-end">
							<div style={{
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderLeft: "4px solid #0366a2",
								padding: "30px 28px",
								borderRadius: "18px",
								display: "inline-block",
								textAlign: "left",
								boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
								width: "100%",
								maxWidth: "380px"
							}}>
								<p style={{ color: "#0366a2", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "10px" }}>
									Our Core Triad
								</p>
								<div style={{ fontSize: "18px", fontWeight: 700, color: "#000000", lineHeight: "1.6", fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
									• Loan Assistance <br />
									• Financial Solutions <br />
									• Business Support
								</div>
								<div className="mt-3">
									<Link
										href="/our-service"
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "8px",
											backgroundColor: "#edf5fd",
											color: "#0366a2",
											fontWeight: 700,
											fontSize: "14px",
											padding: "10px 20px",
											borderRadius: "6px",
											textDecoration: "none",
											border: "1px solid #d0e3f7"
										}}
									>
										<span>Explore All Services</span>
										<span>↗</span>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* 6 Vertical Cards Grid */}
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "28px"
					}}>
						{verticals.map((vert) => (
							<div key={vert.num} style={{
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "18px",
								padding: "36px 32px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
								transition: "transform 0.25s ease, box-shadow 0.25s ease"
							}}>
								<div>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
										<span style={{ fontSize: "28px", fontWeight: 800, color: "#0366a2", lineHeight: 1 }}>{vert.num}</span>
										<div style={{ width: "42px", height: "42px", background: "#edf5fd", color: "#0366a2", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
											<i className="flaticon-target" style={{ fontSize: "18px" }} />
										</div>
									</div>
									<h3 style={{
										fontSize: "20px",
										fontWeight: 600,
										color: "#000000",
										textTransform: "uppercase",
										letterSpacing: "0.3px",
										marginBottom: "12px",
										fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
									}}>
										<Link href={vert.link} style={{ color: "#000000", textDecoration: "none" }}>
											{vert.title}
										</Link>
									</h3>
									<p style={{ fontSize: "15.5px", color: "#475569", marginBottom: "20px", lineHeight: "1.65" }}>
										{vert.desc}
									</p>
									<div style={{ height: "1px", background: "#f1f5f9", marginBottom: "20px" }} />
									<ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
										{vert.items.map((item, idx) => (
											<li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
												<span style={{ color: "#16a34a", fontSize: "14px", fontWeight: 700 }}>✓</span>
												<span style={{ fontSize: "14.5px", color: "#334155", fontWeight: 500 }}>
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-4 pt-2">
									<Link
										href={vert.link}
										style={{
											color: "#0366a2",
											fontSize: "15px",
											fontWeight: 700,
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
											textDecoration: "none"
										}}
									>
										<span>Learn More</span>
										<span>→</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
