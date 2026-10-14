'use client'
import Link from 'next/link'

export default function Section7() {
	const bankLogos = [
		{ name: "State Bank of India", src: "/assets/img/brand/sbi.svg" },
		{ name: "HDFC Bank", src: "/assets/img/brand/hdfc.svg" },
		{ name: "ICICI Bank", src: "/assets/img/brand/icici.svg" },
		{ name: "Axis Bank", src: "/assets/img/brand/axis.svg" },
		{ name: "Kotak Mahindra Bank", src: "/assets/img/brand/kotak.svg" },
		{ name: "Federal Bank", src: "/assets/img/brand/federal.svg" },
		{ name: "Bank of Baroda", src: "/assets/img/brand/bob.svg" },
		{ name: "Yes Bank", src: "/assets/img/brand/yes.svg" },
		{ name: "Canara Bank", src: "/assets/img/brand/canara.svg" },
		{ name: "South Indian Bank", src: "/assets/img/brand/sib.svg" }
	]

	return (
		<>
			<section className="tp-brand-area tp-brand-background s-partner" style={{ background: "#ffffff", padding: "80px 0 100px", borderTop: "1px solid #e2e8f0" }}>
				<div className="tf-container about-page-container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="tp-section-title-wrapper text-center mb-50">
								<p className="tp-section-title-pre s-sub-title mb-10" style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
									<i className="icon-angles-right moveLeftToRight" style={{ marginRight: "6px" }} />
									Our Network
								</p>
								<h2 className="tp-section-title s-title text-anime-wave" style={{ fontSize: "36px", color: "#0f172a", fontWeight: 800 }}>
									Associated Banks &amp; <span style={{ color: "#0366a2" }}>NBFCs</span>
								</h2>
								<p style={{ color: "#475569", maxWidth: "680px", margin: "14px auto 0", fontSize: "15px", lineHeight: "1.7" }}>
									We partner with India's most reputable financial institutions to negotiate the lowest interest rates, highest loan eligibility, and seamless disbursements for our clients.
								</p>
							</div>
						</div>
					</div>

					{/* Marquee Wrapper */}
					<div 
						className="tp-brand-wrapper p-relative wow fadeInUp" 
						data-wow-duration="1s" 
						data-wow-delay=".3s"
						style={{
							background: "#f8fafc",
							borderRadius: "20px",
							padding: "45px 30px",
							border: "1px solid #e2e8f0",
							boxShadow: "0 4px 25px rgba(0,0,0,0.03)",
							overflow: "hidden"
						}}
					>
						<div className="marquee-container" style={{ overflow: "hidden", width: "100%" }}>
							<div 
								className="marquee-content" 
								style={{ 
									display: "flex", 
									alignItems: "center", 
									gap: "60px", 
									animation: "marquee 22s linear infinite", 
									width: "max-content" 
								}}
							>
								{/* First set of logos */}
								{bankLogos.map((bank, index) => (
									<div 
										key={`bank-1-${index}`}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											background: "#ffffff",
											padding: "16px 28px",
											borderRadius: "12px",
											border: "1px solid #e2e8f0",
											boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
											minWidth: "160px",
											height: "75px"
										}}
									>
										<img 
											src={bank.src} 
											alt={bank.name} 
											title={bank.name}
											className="bank-logo-item"
											style={{ maxHeight: "42px", maxWidth: "140px", width: "auto", height: "auto", objectFit: "contain" }}
										/>
									</div>
								))}

								{/* Duplicated set for seamless infinite scroll */}
								{bankLogos.map((bank, index) => (
									<div 
										key={`bank-2-${index}`}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											background: "#ffffff",
											padding: "16px 28px",
											borderRadius: "12px",
											border: "1px solid #e2e8f0",
											boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
											minWidth: "160px",
											height: "75px"
										}}
									>
										<img 
											src={bank.src} 
											alt={bank.name} 
											title={bank.name}
											className="bank-logo-item"
											style={{ maxHeight: "42px", maxWidth: "140px", width: "auto", height: "auto", objectFit: "contain" }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Bottom Call to Action */}
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
						<p style={{ fontSize: "15px", color: "#64748b", marginBottom: "14px" }}>
							Looking for the best loan rates from these partner banks?
						</p>
						<Link href="/contact" className="tf-btn style-3 small">
							Compare Rates with Our Advisors
							<i className="icon-chevron-right" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
