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
			<section className="tp-brand-area tp-brand-background s-partner" style={{ background: "#ffffff", padding: "105px 0 115px 0", borderTop: "1px solid #e2e8f0" }}>
				<div className="tf-container about-page-container">
					{/* Header Block */}
					<div className="text-center mb-5">
						<p style={{ color: "#0366a2", fontWeight: 700, textTransform: "uppercase", fontSize: "13px", letterSpacing: "1.5px", marginBottom: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
							<i className="icon-angles-right" />
							Our Banking Network
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
							Associated Banks &amp; NBFCs
						</h2>
						<p style={{ color: "#334155", maxWidth: "760px", margin: "0 auto", fontSize: "18px", lineHeight: "1.75", fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
							We partner with India's most reputable financial institutions to negotiate the lowest interest rates, highest loan eligibility, and seamless disbursements for our clients.
						</p>
					</div>

					{/* Marquee Wrapper */}
					<div 
						style={{
							background: "#f8fafc",
							borderRadius: "24px",
							padding: "45px 36px",
							border: "1px solid #e2e8f0",
							boxShadow: "0 6px 30px rgba(0,0,0,0.03)",
							overflow: "hidden"
						}}
					>
						<div className="marquee-container" style={{ overflow: "hidden", width: "100%" }}>
							<div 
								className="marquee-content" 
								style={{ 
									display: "flex", 
									alignItems: "center", 
									gap: "40px", 
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
											padding: "16px 30px",
											borderRadius: "14px",
											border: "1px solid #e2e8f0",
											boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
											minWidth: "175px",
											height: "80px"
										}}
									>
										<img 
											src={bank.src} 
											alt={bank.name} 
											title={bank.name}
											className="bank-logo-item"
											style={{ maxHeight: "44px", maxWidth: "145px", width: "auto", height: "auto", objectFit: "contain" }}
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
											padding: "16px 30px",
											borderRadius: "14px",
											border: "1px solid #e2e8f0",
											boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
											minWidth: "175px",
											height: "80px"
										}}
									>
										<img 
											src={bank.src} 
											alt={bank.name} 
											title={bank.name}
											className="bank-logo-item"
											style={{ maxHeight: "44px", maxWidth: "145px", width: "auto", height: "auto", objectFit: "contain" }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
