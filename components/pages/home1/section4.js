'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Section4() {
	const [activeStep, setActiveStep] = useState(1)

	const steps = [
		{
			id: 1,
			step: "STEP 01",
			title: "Comprehensive Consultation & Assessment",
			desc: "We analyze your financial health, credit score, and business capital requirements. Our advisors evaluate your profile across 30+ partner banks and 100+ government subsidy schemes to determine optimal funding options.",
			benefits: [
				"Financial Health & Credit Profile Evaluation",
				"PMEGP & Govt Subsidy Eligibility Matching"
			],
			image: "/images/methodology/step1.png"
		},
		{
			id: 2,
			step: "STEP 02",
			title: "Strategic Documentation & DPR Preparation",
			desc: "Our financial specialists prepare airtight Detailed Project Reports (DPR), CMA data, balance sheet analysis, and compliance verification to ensure maximum sanction limits at the lowest interest rates.",
			benefits: [
				"Detailed Project Report (DPR) & CMA Data Preparation",
				"Legal Title, Valuation & Document Optimization"
			],
			image: "/images/methodology/step2.png"
		},
		{
			id: 3,
			step: "STEP 03",
			title: "Bank Liaison & 48-Hour Rapid Sanction",
			desc: "We manage end-to-end banking coordination directly with senior loan underwriters. With our established network across Kerala and nationwide, we ensure transparent, rapid 48-hour approval tracking.",
			benefits: [
				"Direct Banking Underwriter Coordination",
				"Rapid 48-Hour Approval Turnaround"
			],
			image: "/images/methodology/step3.png"
		},
		{
			id: 4,
			step: "STEP 04",
			title: "Disbursement & Continuous Business Support",
			desc: "Seamless fund disbursement followed by ongoing guidance including government subsidy claim recoveries, GST/tax filing, working capital management, and enterprise scaling.",
			benefits: [
				"Zero Hidden Charges & Transparent Fund Disbursement",
				"Post-Sanction Advisory & Government Subsidy Recovery"
			],
			image: "/images/methodology/step4.png"
		}
	]

	return (
		<>
			<section className="s-working" style={{ padding: '90px 0 80px', background: '#ffffff' }}>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center mb-50">
								<h2 style={{
									fontSize: 'clamp(28px, 3.2vw, 42px)',
									color: '#000000',
									textTransform: 'uppercase',
									lineHeight: '1.2',
									letterSpacing: '0.5px',
									margin: '0 auto',
									maxWidth: '850px',
									fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
								}}>
									<span style={{ fontWeight: 800 }}>FROM STRATEGY TO DISBURSEMENT</span><br />
									<span style={{ fontWeight: 400 }}>OUR FINANCIAL PROCESS</span>
								</h2>
							</div>

							{/* Process Accordion Cards */}
							<div style={{ maxWidth: '1160px', margin: '0 auto' }}>
								{steps.map((item) => {
									const isOpen = activeStep === item.id

									if (isOpen) {
										// Expanded Card Style (Matches user requested style)
										return (
											<div
												key={item.id}
												className="methodology-card methodology-expanded-card"
												style={{
													borderRadius: '20px',
													border: '1px solid #e5e7eb',
													background: '#f7f7f8',
													marginBottom: '20px',
													padding: 'clamp(20px, 3.5vw, 38px)',
													display: 'flex',
													flexWrap: 'wrap',
													alignItems: 'stretch',
													gap: '24px',
													transition: 'all 0.3s ease'
												}}
											>
												{/* Left Column (Globon Content) */}
												<div style={{
													flex: '1 1 450px',
													minWidth: '280px',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'center'
												}}>
													{/* Step Pill Badge */}
													<div style={{ marginBottom: '24px' }}>
														<span style={{
															background: '#FFB800',
															border: '1px solid #111111',
															borderRadius: '6px',
															padding: '6px 14px',
															fontSize: '13px',
															fontWeight: 800,
															letterSpacing: '2.5px',
															textTransform: 'uppercase',
															color: '#111111',
															display: 'inline-block'
														}}>
															{item.step}
														</span>
													</div>

													{/* Title */}
													<h3 style={{
														fontSize: 'clamp(21px, 2vw, 25px)',
														fontWeight: 500,
														color: '#000000',
														textTransform: 'uppercase',
														letterSpacing: '0.4px',
														marginBottom: '16px',
														lineHeight: '1.25',
														fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
													}}>
														{item.title}
													</h3>

													{/* Description */}
													<p style={{
														fontSize: '17.5px',
														lineHeight: '1.7',
														color: '#334155',
														marginBottom: '26px'
													}}>
														{item.desc}
													</p>

													{/* Benefits Checklist */}
													<ul style={{
														listStyle: 'none',
														padding: 0,
														margin: 0,
														display: 'flex',
														flexDirection: 'column',
														gap: '14px'
													}}>
														{item.benefits.map((b, bIdx) => (
															<li
																key={bIdx}
																style={{
																	display: 'flex',
																	alignItems: 'center',
																	gap: '12px'
																}}
															>
																<svg
																	width="20"
																	height="20"
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="#0f172a"
																	strokeWidth="2.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	style={{ flexShrink: 0 }}
																>
																	<polyline points="20 6 9 17 4 12" />
																</svg>
																<span style={{
																	fontSize: '17px',
																	fontWeight: 600,
																	color: '#0f172a'
																}}>
																	{b}
																</span>
															</li>
														))}
													</ul>
												</div>

												{/* Right Column (Tailored Image) */}
												<div style={{
													flex: '1 1 450px',
													minWidth: '280px',
													borderRadius: '16px',
													overflow: 'hidden',
													boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
												}}>
													<Image
														src={item.image}
														alt={item.title}
														width={700}
														height={440}
														style={{
															width: '100%',
															height: '100%',
															minHeight: '320px',
															maxHeight: '380px',
															objectFit: 'cover',
															display: 'block',
															borderRadius: '16px'
														}}
														priority={item.id === 1}
													/>
												</div>
											</div>
										)
									}

									// Collapsed Step Bar Style - Fully Responsive Auto-Height
									return (
										<div
											key={item.id}
											onClick={() => setActiveStep(item.id)}
											className="methodology-card methodology-collapsed-card"
											style={{
												borderRadius: '16px',
												border: '1px solid #e5e7eb',
												background: '#ffffff',
												marginBottom: '16px',
												minHeight: '68px',
												height: 'auto',
												padding: '16px 20px',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												gap: '12px',
												cursor: 'pointer',
												userSelect: 'none',
												transition: 'all 0.2s ease'
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = '#cbd5e1'
												e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)'
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor = '#e5e7eb'
												e.currentTarget.style.boxShadow = 'none'
											}}
										>
											<div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
												<span style={{
													background: '#f3f4f6',
													border: '1px solid #e5e7eb',
													borderRadius: '6px',
													padding: '5px 12px',
													fontSize: '12px',
													fontWeight: 800,
													letterSpacing: '1.5px',
													textTransform: 'uppercase',
													color: '#1f2937',
													flexShrink: 0,
													whiteSpace: 'nowrap'
												}}>
													{item.step}
												</span>
												<span style={{
													fontSize: 'clamp(15px, 1.6vw, 19px)',
													fontWeight: 500,
													color: '#000000',
													textTransform: 'uppercase',
													letterSpacing: '0.4px',
													lineHeight: '1.35',
													wordBreak: 'break-word',
													fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
												}}>
													{item.title}
												</span>
											</div>

											<div style={{
												color: '#0f172a',
												fontSize: '22px',
												fontWeight: 700,
												flexShrink: 0,
												marginLeft: '6px'
											}}>
												›
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
