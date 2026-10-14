import Link from 'next/link'

export default function Section4() {
	const verticals = [
		{
			num: "01",
			title: "Loans & Advances",
			desc: "Comprehensive credit facilities from 30+ leading partner banks & NBFCs with 48-hour approvals.",
			items: ["Personal & Education Loans", "Home & Property Loans (LAP)", "Business & Project Loans", "PMEGP & Stand-Up India Schemes", "Vehicle Loans & KSFE Chitty"],
			link: "/our-service#loans"
		},
		{
			num: "02",
			title: "Business & Financial Solutions",
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
			title: "Government Schemes & Subsidies",
			desc: "Liaison & documentation advisory for central and Kerala state entrepreneurship subsidy schemes.",
			items: ["PMEGP Scheme Subsidy Support", "Stand-Up India & Mudra Finance", "MSME Capital Subsidy Liaising", "Subsidized Machinery & Agri Projects"],
			link: "/our-service#subsidies"
		}
	]

	return (
		<>
			<section className="s-solution" style={{ padding: "80px 0", background: "#edf5fd" }}>
				<div className="mb-50">
					<div className="tf-container about-page-container">
						<div className="row align-items-center" style={{ rowGap: "30px" }}>
							<div className="col-lg-8">
								<div className="content">
									<p className="s-sub-title mb-10" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
										<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
										Essential Services Under One Roof
									</p>
									<h2 className="s-title text-anime-wave" style={{ fontSize: "36px", color: "#0f172a", fontWeight: 800 }}>
										Helping You Move Forward With the <br />
										<span style={{ color: "#0366a2" }}>Right Financial Solution</span>
									</h2>
									<p className="text mt-16" style={{ fontSize: "16px", lineHeight: "1.75", color: "#475569" }}>
										<strong style={{ color: "#0f172a" }}>Globon Business Solutions</strong> specializes in <strong>loan assistance and financial solutions</strong>, 
										helping individuals, entrepreneurs, startups, and businesses understand their funding requirements 
										and navigate the process with greater clarity. Alongside loan assistance, we provide business consulting, 
										registrations &amp; compliance, project reports, insurance, real estate, and digital business solutions — 
										bringing essential services together under one roof.
									</p>
									<p className="text mt-10" style={{ fontSize: "15px", fontWeight: 700, color: "#0366a2" }}>
										Our goal is simple: Understand your requirement, guide you toward suitable solutions, and support you through the process.
									</p>
								</div>
							</div>
							<div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
								<div style={{
									background: "#ffffff",
									border: "1px solid #e2e8f0",
									borderLeft: "4px solid #0366a2",
									padding: "28px 24px",
									borderRadius: "14px",
									display: "inline-block",
									textAlign: "left",
									boxShadow: "0 6px 25px rgba(0,0,0,0.04)"
								}}>
									<p style={{ color: "#0366a2", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
										Our Core Triad
									</p>
									<div style={{ fontSize: "19px", fontWeight: 800, color: "#0f172a", lineHeight: "1.5" }}>
										• Loan Assistance <br />
										• Financial Solutions <br />
										• Business Support
									</div>
									<div className="mt-20">
										<Link href="/our-service" className="tf-btn style-3 small">
											Explore All Services
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="tf-container about-page-container">
					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
						{verticals.map((vert) => (
							<div key={vert.num} className="wg-feature-item tf-hover-icon" style={{
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "14px",
								padding: "32px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
							}}>
								<div>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
										<span style={{ fontSize: "28px", fontWeight: 900, color: "#0366a2" }}>{vert.num}</span>
										<div className="icon-item hover-icon" style={{ margin: 0, width: "42px", height: "42px", background: "#edf5fd", color: "#0366a2", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
											<i className="flaticon-target" style={{ fontSize: "18px" }} />
										</div>
									</div>
									<h3 className="title font-main-2 fw-7" style={{ fontSize: "20px", marginBottom: "10px" }}>
										<Link href={vert.link} style={{ color: "#0f172a" }}>
											{vert.title}
										</Link>
									</h3>
									<p className="text" style={{ fontSize: "14px", color: "#64748b", marginBottom: "18px", lineHeight: "1.6" }}>
										{vert.desc}
									</p>
									<span className="line mb-18" style={{ display: "block", height: "1px", background: "#f1f5f9" }} />
									<ul className="benefit-list style-3">
										{vert.items.map((item, idx) => (
											<li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
												<div className="icon" style={{ minWidth: "16px", color: "#fbb411", marginTop: "3px" }}>
													<i className="icon-star-of-life" style={{ fontSize: "10px" }} />
												</div>
												<p style={{ margin: 0, fontSize: "13px", color: "#334155" }}>
													{item}
												</p>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-26">
									<Link href={vert.link} style={{ color: "#0366a2", fontSize: "14px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
										Learn More <i className="icon-chevron-right" style={{ fontSize: "12px" }} />
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
