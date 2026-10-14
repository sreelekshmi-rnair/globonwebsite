'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmiCalculator() {
	const [loanType, setLoanType] = useState('business')
	const [amount, setAmount] = useState(2500000) // ₹25 Lakhs default
	const [interestRate, setInterestRate] = useState(10.5) // 10.5% default
	const [tenureYears, setTenureYears] = useState(5) // 5 Years default

	const handleLoanTypeSelect = (type) => {
		setLoanType(type)
		if (type === 'home') {
			setAmount(4000000)
			setInterestRate(8.35)
			setTenureYears(20)
		} else if (type === 'business') {
			setAmount(2500000)
			setInterestRate(10.5)
			setTenureYears(5)
		} else if (type === 'vehicle') {
			setAmount(1200000)
			setInterestRate(8.8)
			setTenureYears(5)
		} else if (type === 'personal') {
			setAmount(500000)
			setInterestRate(11.5)
			setTenureYears(3)
		}
	}

	const { emi, totalInterest, totalAmount } = useMemo(() => {
		const P = Number(amount)
		const r = Number(interestRate) / 12 / 100
		const n = Number(tenureYears) * 12

		if (!P || !r || !n) return { emi: 0, totalInterest: 0, totalAmount: 0 }

		const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
		const totalPayment = emiCalc * n
		const interestCalc = totalPayment - P

		return {
			emi: Math.round(emiCalc),
			totalInterest: Math.round(interestCalc),
			totalAmount: Math.round(totalPayment)
		}
	}, [amount, interestRate, tenureYears])

	const formatIndianCurrency = (num) => {
		if (isNaN(num)) return '0'
		return new Intl.NumberFormat('en-IN', {
			maximumFractionDigits: 0
		}).format(num)
	}

	return (
		<section className="s-calculator tf-spacing-1" id="emi-calculator" style={{ backgroundColor: '#edf5fd', borderTop: '1px solid #dce8f5', borderBottom: '1px solid #dce8f5', padding: '80px 0' }}>
			<div className="tf-container w-1780">
				{/* Section Header */}
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center mb-40">
						<div className="ksfe-sub-pill" style={{ marginBottom: '12px' }}>
							<span className="dot" style={{ backgroundColor: '#1f4e7a' }} />
							SMART FINANCIAL TOOLS
						</div>
						<h2 className="ksfe-main-title" style={{ fontSize: '36px', marginBottom: '12px' }}>
							Smart Financial Decisions Start Here
						</h2>
						<p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
							Use our free calculators and assessment tools to plan your loans, understand EMI structures, and make informed financial decisions. No sign-up required.
						</p>
					</div>
				</div>

				{/* Loan Category Selector Pills */}
				<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
					{[
						{ id: 'business', label: 'Business & MSME Loan', icon: '💼' },
						{ id: 'home', label: 'Home & Property Loan', icon: '🏡' },
						{ id: 'vehicle', label: 'Vehicle Loan', icon: '🚗' },
						{ id: 'personal', label: 'Personal & Retail Loan', icon: '👤' }
					].map((tab) => {
						const isSelected = loanType === tab.id
						return (
							<button
								key={tab.id}
								onClick={() => handleLoanTypeSelect(tab.id)}
								type="button"
								style={{
									padding: '10px 22px',
									borderRadius: '9999px',
									border: isSelected ? '1px solid #1f4e7a' : '1px solid #e2e8f0',
									fontSize: '14px',
									fontWeight: 700,
									cursor: 'pointer',
									transition: 'all 0.2s ease',
									backgroundColor: isSelected ? '#1f4e7a' : '#ffffff',
									color: isSelected ? '#ffffff' : '#334155',
									boxShadow: isSelected ? '0 4px 12px rgba(3, 102, 162, 0.25)' : '0 2px 4px rgba(0,0,0,0.02)'
								}}
							>
								<span style={{ marginRight: '6px' }}>{tab.icon}</span>
								{tab.label}
							</button>
						)
					})}
				</div>

				{/* 3-Column Layout: Visual Showcase Image + Interactive Sliders + Monthly Summary Card */}
				<div className="row g-4 align-items-stretch">
					{/* Column 1: Financial Expert Consultation Visual Image */}
					<div className="col-lg-4">
						<div style={{
							backgroundColor: '#ffffff',
							borderRadius: '16px',
							border: '1px solid #e2e8f0',
							overflow: 'hidden',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
						}}>
							<div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
								<Image
									src="/images/section/business.jpg"
									alt="Globon Loan Consultation and Financial Planning"
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									style={{ objectFit: 'cover' }}
								/>
								<div style={{
									position: 'absolute',
									top: '14px',
									left: '14px',
									backgroundColor: '#1f4e7a',
									color: '#ffffff',
									fontSize: '11px',
									fontWeight: 800,
									padding: '4px 10px',
									borderRadius: '4px',
									letterSpacing: '0.5px'
								}}>
									✓ 48-HR APPROVALS
								</div>
								<div style={{
									position: 'absolute',
									bottom: '14px',
									right: '14px',
									backgroundColor: '#f59e0b',
									color: '#0f172a',
									fontSize: '12px',
									fontWeight: 800,
									padding: '4px 12px',
									borderRadius: '4px'
								}}>
									30+ PARTNER BANKS
								</div>
							</div>

							<div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<div>
									<h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
										Fast-Track Loan Assistance
									</h4>
									<p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
										Globon liaises directly with 30+ partner banks across Kerala to secure maximum eligibility, minimum interest rates, and rapid sanctions.
									</p>
									<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
										<li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
											<span style={{ color: '#1f4e7a', fontWeight: 800 }}>✓</span> Zero advance consultation fees
										</li>
										<li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
											<span style={{ color: '#1f4e7a', fontWeight: 800 }}>✓</span> 194+ centers across Kerala
										</li>
										<li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
											<span style={{ color: '#1f4e7a', fontWeight: 800 }}>✓</span> Doorstep documentation support
										</li>
									</ul>
								</div>

								<div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
									<Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1f4e7a', textDecoration: 'none' }}>
										Speak with a Loan Advisor ↗
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Column 2: Interactive Sliders Box */}
					<div className="col-lg-5">
						<div style={{
							backgroundColor: '#ffffff',
							borderRadius: '16px',
							border: '1px solid #e2e8f0',
							padding: '32px 28px',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
						}}>
							{/* Loan Amount Slider */}
							<div style={{ marginBottom: '28px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<label style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
										Required Loan Amount
									</label>
									<span style={{ fontSize: '18px', fontWeight: 800, color: '#1f4e7a', backgroundColor: '#e0f2fe', padding: '3px 12px', borderRadius: '6px' }}>
										₹ {formatIndianCurrency(amount)}
									</span>
								</div>
								<input
									type="range"
									min="100000"
									max="50000000"
									step="50000"
									value={amount}
									onChange={(e) => setAmount(Number(e.target.value))}
									style={{ width: '100%', height: '8px', cursor: 'pointer', accentColor: '#1f4e7a' }}
								/>
								<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginTop: '6px' }}>
									<span>₹1 Lakh</span>
									<span>₹1 Crore</span>
									<span>₹5 Crores</span>
								</div>
							</div>

							{/* Interest Rate Slider */}
							<div style={{ marginBottom: '28px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<label style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
										Expected Interest Rate (p.a.)
									</label>
									<span style={{ fontSize: '18px', fontWeight: 800, color: '#1f4e7a', backgroundColor: '#e0f2fe', padding: '3px 12px', borderRadius: '6px' }}>
										{interestRate}%
									</span>
								</div>
								<input
									type="range"
									min="7.5"
									max="18"
									step="0.05"
									value={interestRate}
									onChange={(e) => setInterestRate(Number(e.target.value))}
									style={{ width: '100%', height: '8px', cursor: 'pointer', accentColor: '#1f4e7a' }}
								/>
								<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginTop: '6px' }}>
									<span>7.5%</span>
									<span>12.5%</span>
									<span>18%</span>
								</div>
							</div>

							{/* Tenure Slider */}
							<div>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<label style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
										Repayment Tenure
									</label>
									<span style={{ fontSize: '18px', fontWeight: 800, color: '#1f4e7a', backgroundColor: '#e0f2fe', padding: '3px 12px', borderRadius: '6px' }}>
										{tenureYears} Years ({tenureYears * 12} Mos)
									</span>
								</div>
								<input
									type="range"
									min="1"
									max="30"
									step="1"
									value={tenureYears}
									onChange={(e) => setTenureYears(Number(e.target.value))}
									style={{ width: '100%', height: '8px', cursor: 'pointer', accentColor: '#1f4e7a' }}
								/>
								<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginTop: '6px' }}>
									<span>1 Year</span>
									<span>15 Years</span>
									<span>30 Years</span>
								</div>
							</div>
						</div>
					</div>

					{/* Column 3: Monthly Breakdown & CTA */}
					<div className="col-lg-3">
						<div style={{
							backgroundColor: '#ffffff',
							borderRadius: '16px',
							border: '1px solid #bae6fd',
							padding: '30px 24px',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							boxShadow: '0 8px 24px rgba(3, 102, 162, 0.08)'
						}}>
							<div>
								<div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1f4e7a', marginBottom: '6px' }}>
									Monthly EMI Payable
								</div>
								<div style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '20px' }}>
									₹ {formatIndianCurrency(emi)}
									<span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500, display: 'block', marginTop: '2px' }}>per month</span>
								</div>

								<div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
										<span style={{ color: '#64748b' }}>Principal:</span>
										<span style={{ fontWeight: 700, color: '#0f172a' }}>₹ {formatIndianCurrency(amount)}</span>
									</div>
									<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
										<span style={{ color: '#64748b' }}>Total Interest:</span>
										<span style={{ fontWeight: 700, color: '#1f4e7a' }}>₹ {formatIndianCurrency(totalInterest)}</span>
									</div>
									<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', paddingTop: '10px', borderTop: '1px dashed #e2e8f0' }}>
										<span style={{ fontWeight: 800, color: '#0f172a' }}>Total Amount:</span>
										<span style={{ fontWeight: 800, color: '#0f172a' }}>₹ {formatIndianCurrency(totalAmount)}</span>
									</div>
								</div>
							</div>

							<div style={{ marginTop: '24px' }}>
								<Link
									href="/#consultation"
									className="tf-btn full"
									style={{
										width: '100%',
										justifyContent: 'center',
										background: '#1f4e7a',
										color: '#ffffff',
										fontSize: '14px',
										padding: '12px 16px',
										borderRadius: '8px'
									}}
								>
									Apply For This Loan (48h)
									<i className="icon-chevron-right" style={{ marginLeft: '4px' }} />
								</Link>
								<p style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center', marginTop: '10px', marginBottom: 0 }}>
									* Indicative estimate based on partner bank interest rates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
