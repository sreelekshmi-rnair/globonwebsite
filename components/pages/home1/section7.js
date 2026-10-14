'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Section7() {
	const [openIdx, setOpenIdx] = useState(0)

	const whyItems = [
		{
			title: "Trusted and Reliable Financial Institution",
			desc: "Founded with a mission to empower entrepreneurs, MSMEs, and individuals, Globon operates with verified bank partnerships, ethical advisory standards, and transparent fee structures across Kerala and India."
		},
		{
			title: "Wide Array of Financial Products and Services",
			desc: "From retail personal, home, and vehicle loans to ₹10Cr+ corporate project financing, PMEGP/Mudra subsidies, bank project reports, and GST/tax compliance—all delivered under one roof."
		},
		{
			title: "Leader in Loan Assistance & Bank Liaison",
			desc: "We coordinate directly with 30+ leading partner banks and NBFCs, streamlining paperwork, maximizing borrower eligibility, and securing competitive interest rates without bureaucratic hurdles."
		},
		{
			title: "Extensive Network of Branches across Kerala",
			desc: "With 194+ collection and client support centers throughout Thrissur, Ernakulam, Malappuram, and all 14 districts, local doorstep documentation assistance is always within your reach."
		},
		{
			title: "Industry-Leading 48-Hour Loan Approvals",
			desc: "Our pre-qualification framework and direct credit liaison ensure rapid file processing, delivering sanction approvals in as fast as 48 hours with minimal hassle."
		},
		{
			title: "Complete Transparency & Zero Hidden Charges",
			desc: "We believe in honest, long-term partnerships. Every fee, interest schedule, and loan term is communicated with complete clarity from day one—zero surprises, zero hidden clauses."
		}
	]

	return (
		<section className="tf-spacing-1" id="why-choose-us" style={{ backgroundColor: '#edf5fd', padding: '95px 0' }}>
			<div className="tf-container">
				<div className="row align-items-center g-5">
					{/* Left Column: Heading and Accordion List */}
					<div className="col-lg-6">
						<div style={{ paddingRight: '20px' }}>
							<h2 style={{
								fontSize: '44px',
								fontWeight: 800,
								color: '#0f172a',
								letterSpacing: '-0.5px',
								textTransform: 'uppercase',
								marginBottom: '32px',
								lineHeight: 1.15
							}}>
								WHY GLOBON?
							</h2>

							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{whyItems.map((item, idx) => {
									const isOpen = openIdx === idx
									return (
										<div
											key={idx}
											style={{
												borderBottom: '1px solid #eef2f6',
												padding: '22px 0',
												transition: 'all 0.2s ease'
											}}
										>
											<button
												onClick={() => setOpenIdx(isOpen ? null : idx)}
												type="button"
												aria-expanded={isOpen}
												style={{
													width: '100%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
													background: 'transparent',
													border: 'none',
													padding: 0,
													cursor: 'pointer',
													textAlign: 'left'
												}}
											>
												<span style={{
													fontSize: '19px',
													fontWeight: 500,
													color: isOpen ? '#0f172a' : '#1e293b',
													letterSpacing: '-0.2px',
													lineHeight: 1.35,
													paddingRight: '16px'
												}}>
													{item.title}
												</span>
												<span style={{
													fontSize: '26px',
													fontWeight: 400,
													color: '#0366a2',
													lineHeight: 1,
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: '32px',
													height: '32px',
													flexShrink: 0,
													transition: 'transform 0.2s ease',
													userSelect: 'none'
												}}>
													{isOpen ? '−' : '+'}
												</span>
											</button>
											{isOpen && (
												<div style={{
													marginTop: '14px',
													paddingRight: '36px',
													color: '#64748b',
													fontSize: '15px',
													lineHeight: 1.65,
													animation: 'fadeIn 0.25s ease'
												}}>
													{item.desc}
												</div>
											)}
										</div>
									)
								})}
							</div>
						</div>
					</div>

					{/* Right Column: Hero Visual with Dot Grid & Floating Shield Badge */}
					<div className="col-lg-6">
						<div style={{ position: 'relative', width: '100%', maxWidth: '560px', margin: '0 auto' }}>
							{/* Dot matrix pattern accent above image */}
							<div style={{
								position: 'absolute',
								top: '-24px',
								left: '40px',
								zIndex: 1,
								pointerEvents: 'none'
							}}>
								<svg width="120" height="24" viewBox="0 0 120 24" fill="none">
									{[...Array(6)].map((_, c) => (
										[...Array(2)].map((_, r) => (
											<circle key={`${c}-${r}`} cx={10 + c * 20} cy={6 + r * 12} r="2.5" fill="#fbb411" opacity="0.75" />
										))
									))}
								</svg>
							</div>

							{/* Main Image Frame */}
							<div style={{
								borderRadius: '20px',
								overflow: 'hidden',
								position: 'relative',
								boxShadow: '0 16px 45px rgba(0, 0, 0, 0.08)',
								backgroundColor: '#f8fafc'
							}}>
								<Image
									src="/images/section/why-globon.jpg"
									alt="Why Globon Business Solutions - Loan Assistance & Financial Strategy"
									width={700}
									height={560}
									style={{
										width: '100%',
										height: 'auto',
										display: 'block',
										objectFit: 'cover'
									}}
									priority
								/>
							</div>

							{/* Floating Verified Trust Shield Badge */}
							<div style={{
								position: 'absolute',
								top: '-20px',
								right: '-16px',
								width: '74px',
								height: '74px',
								backgroundColor: '#ffffff',
								borderRadius: '18px',
								boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
								border: '1px solid #f1f5f9',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								zIndex: 10
							}}>
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none">
									<path d="M12 2L4 5.5V11.7C4 16.75 7.41 21.46 12 22.6C16.59 21.46 20 16.75 20 11.7V5.5L12 2Z" fill="#0366a2" />
									<path d="M10 15.5L6.5 12L7.9 10.6L10 12.7L15.6 7.1L17 8.5L10 15.5Z" fill="#ffffff" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
