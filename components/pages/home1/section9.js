'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Section9() {
	const [selectedScheme, setSelectedScheme] = useState('Loans & Advances')
	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		businessName: '',
		industry: '',
		businessAge: '',
		monthlyRevenue: '',
		serviceNeeded: ''
	})

	const [submitting, setSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const [activeDropdown, setActiveDropdown] = useState(null)

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest('.ksfe-custom-dropdown')) {
				setActiveDropdown(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const schemes = [
		{
			id: 'loans',
			name: 'Loans & Advances',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Blue Calendar / Pouch */}
					<rect x="4" y="8" width="30" height="28" rx="6" fill="#0366a2" />
					<rect x="10" y="4" width="4" height="7" rx="2" fill="#025283" />
					<rect x="24" y="4" width="4" height="7" rx="2" fill="#025283" />
					<rect x="4" y="14" width="30" height="4" fill="#0284c7" />
					<path d="M 12 24 L 17 29 L 26 19" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					<circle cx="32" cy="30" r="9" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
					<circle cx="32" cy="30" r="6.5" fill="#fbbf24" />
					<text x="32" y="33" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#78350f">₹</text>
				</svg>
			)
		},
		{
			id: 'personal',
			name: 'Personal Loan',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					<path d="M 12 16 C 8 16 4 22 4 30 C 4 38 10 40 22 40 C 34 40 40 38 40 30 C 40 22 36 16 32 16 Z" fill="#0366a2" />
					<path d="M 15 16 C 14 10 18 6 22 6 C 26 6 30 10 29 16 Z" fill="#38bdf8" />
					<rect x="14" y="14" width="16" height="4" rx="2" fill="#025283" />
					<circle cx="16" cy="34" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
					<circle cx="16" cy="34" r="5.5" fill="#fbbf24" />
					<circle cx="28" cy="34" r="8" fill="#eab308" stroke="#ffffff" strokeWidth="1.5" />
					<circle cx="28" cy="34" r="5.5" fill="#fde047" />
				</svg>
			)
		},
		{
			id: 'gold',
			name: 'Gold Loan',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					<circle cx="18" cy="22" r="13" fill="#f59e0b" />
					<circle cx="18" cy="22" r="10.5" fill="#fbbf24" />
					<text x="18" y="26.5" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#78350f">₹</text>
					<polygon points="20,26 28,21 42,21 34,26" fill="#fde047" stroke="#b45309" strokeWidth="1" />
					<polygon points="20,26 34,26 34,34 20,34" fill="#eab308" stroke="#b45309" strokeWidth="1" />
					<polygon points="34,26 42,21 42,29 34,34" fill="#ca8a04" stroke="#b45309" strokeWidth="1" />
				</svg>
			)
		},
		{
			id: 'business',
			name: 'Business & Compliance',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					<path d="M 22 4 L 38 10 C 38 25 30 35 22 40 C 14 35 6 25 6 10 Z" fill="#0366a2" />
					<path d="M 22 7 L 35 12 C 35 23 28 32 22 36 C 16 32 9 23 9 12 Z" fill="#0284c7" />
					<path d="M 15 21 L 20 26 L 29 16" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			)
		}
	]

	const handleSchemeSelect = (schemeName) => {
		setSelectedScheme(schemeName)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const renderDropdown = (id, name, placeholder, options, required = false) => {
		const isOpen = activeDropdown === id
		const val = formData[name]

		return (
			<div className="ksfe-custom-dropdown" style={{ position: 'relative', width: '100%', marginBottom: '22px' }}>
				{/* Underline trigger without box */}
				<div
					role="button"
					tabIndex={0}
					onClick={() => setActiveDropdown(isOpen ? null : id)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault()
							setActiveDropdown(isOpen ? null : id)
						}
					}}
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '48px',
						boxSizing: 'border-box',
						borderBottom: isOpen ? '1.5px solid #0366a2' : '1.5px solid #e2e8f0',
						cursor: 'pointer',
						userSelect: 'none',
						padding: '10px 0',
						transition: 'border-color 0.2s ease',
						background: 'transparent',
					}}
				>
					<span style={{
						fontSize: '16px',
						color: val ? '#111827' : '#64748b',
						fontWeight: val ? 500 : 400,
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}>
						{val || placeholder}
					</span>

					{/* Upward chevron when open, downward chevron when closed matching screenshot */}
					<svg
						width="15"
						height="15"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#111827"
						strokeWidth="2.4"
						strokeLinecap="round"
						strokeLinejoin="round"
						style={{
							transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
							transition: 'transform 0.2s ease',
							flexShrink: 0,
							marginLeft: '8px',
						}}
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>

				{/* Hidden input for HTML validation if required */}
				<input
					type="text"
					name={name}
					value={val}
					required={required}
					onChange={() => {}}
					style={{
						opacity: 0,
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						pointerEvents: 'none',
						zIndex: -1
					}}
					tabIndex={-1}
				/>

				{/* Floating Menu Popup matching KSFE image */}
				{isOpen && (
					<div
						style={{
							position: 'absolute',
							top: 'calc(100% + 4px)',
							left: 0,
							right: 0,
							background: '#ffffff',
							border: '1px solid #e2e8f0',
							borderRadius: '6px',
							boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
							zIndex: 100,
							overflow: 'hidden',
						}}
					>
						{options.map((opt) => {
							const isSelected = val === opt
							return (
								<div
									key={opt}
									onClick={() => {
										setFormData((prev) => ({ ...prev, [name]: opt }))
										setActiveDropdown(null)
									}}
									style={{
										padding: '12px 18px',
										fontSize: '15px',
										color: isSelected ? '#1e40af' : '#111827',
										fontWeight: isSelected ? 600 : 400,
										cursor: 'pointer',
										background: isSelected ? '#e0edff' : '#ffffff',
										transition: 'background-color 0.15s ease',
										userSelect: 'none',
									}}
									onMouseEnter={(e) => {
										if (!isSelected) e.currentTarget.style.backgroundColor = '#f1f5f9'
									}}
									onMouseLeave={(e) => {
										if (!isSelected) e.currentTarget.style.backgroundColor = '#ffffff'
									}}
								>
									{opt}
								</div>
							)
						})}
					</div>
				)}
			</div>
		)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSubmitting(true)
		setSubmitError('')
		setSuccessMessage('')

		try {
			const res = await fetch('/api/inquiries', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					fullName: formData.fullName,
					phoneNumber: formData.phoneNumber,
					email: formData.email,
					businessName: formData.businessName,
					industry: formData.industry,
					businessAge: formData.businessAge,
					monthlyRevenue: formData.monthlyRevenue,
					serviceNeeded: formData.serviceNeeded,
					type: 'Call Back Request - ' + (formData.serviceNeeded || selectedScheme || 'Loans & Advances')
				})
			})

			const data = await res.json()
			if (!res.ok) {
				throw new Error(data.error || 'Failed to submit request')
			}

			// Clear input fields
			setFormData({
				fullName: '',
				phoneNumber: '',
				email: '',
				businessName: '',
				industry: '',
				businessAge: '',
				monthlyRevenue: '',
				serviceNeeded: ''
			})

			// Show message
			setSuccessMessage('Thank you! Your call back request has been submitted successfully. Our team will contact you shortly.')

			// Automatically disappears after 5 seconds
			setTimeout(() => {
				setSuccessMessage('')
			}, 5000)
		} catch (err) {
			setSubmitError(err.message || 'Something went wrong. Please try again.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<section className="ksfe-help-section" id="consultation">
			<div className="tf-container w-1780">
				<div className="row align-items-center g-5">
					
					{/* Left Column matching KSFE Image style exactly */}
					<div className="col-lg-6">
						<div style={{ paddingRight: '20px' }}>
							<h2 className="ksfe-help-title" style={{
								fontFamily: "'Public Sans', 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
								fontSize: 'clamp(40px, 4.2vw, 52px)',
								color: '#000000',
								letterSpacing: '0.3px',
								lineHeight: 1.2
							}}>
								<span style={{ fontWeight: 800 }}>WE ARE HAPPY TO</span><br />
								<span style={{ fontWeight: 400 }}>HELP YOU</span>
							</h2>

							<p className="ksfe-help-subtitle">
								Choose your scheme
							</p>

							{/* 2x2 Scheme Grid */}
							<div className="ksfe-schemes-2x2">
								{schemes.map((scheme) => {
									const isSelected = selectedScheme === scheme.name
									return (
										<div
											key={scheme.id}
											className={`ksfe-scheme-tile ${isSelected ? 'active' : ''}`}
											onClick={() => handleSchemeSelect(scheme.name)}
											role="button"
											tabIndex={0}
										>
											<div style={{ flexShrink: 0 }}>
												{scheme.icon}
											</div>
											<h4 className="ksfe-scheme-tile-title">
												{scheme.name}
											</h4>
										</div>
									)
								})}
							</div>

							{/* Explore All Button */}
							<div style={{ marginTop: '28px' }}>
								<Link href="/our-service" className="ksfe-explore-outline-btn">
									<span>Explore All</span>
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<line x1="7" y1="17" x2="17" y2="7"></line>
										<polyline points="7 7 17 7 17 17"></polyline>
									</svg>
								</Link>
							</div>
						</div>
					</div>

					{/* Right Column: Request a Call Back Form with Underline Inputs matching KSFE style */}
					<div className="col-lg-6">
						<div style={{ maxWidth: '520px', marginLeft: 'auto' }}>
							<div className="ksfe-callback-card">
								<h3 className="ksfe-callback-heading">
									Request a Call Back
								</h3>

								{/* Success Notification that automatically disappears */}
								{successMessage && (
									<div style={{
										background: '#ecfdf5',
										border: '1px solid #6ee7b7',
										borderRadius: '10px',
										padding: '14px 18px',
										marginBottom: '20px',
										display: 'flex',
										alignItems: 'center',
										gap: '12px',
										color: '#065f46',
										fontSize: '14px',
										fontWeight: '500',
										boxShadow: '0 4px 14px rgba(16, 185, 129, 0.12)',
										transition: 'all 0.4s ease',
									}}>
										<span style={{
											background: '#10b981',
											color: '#ffffff',
											borderRadius: '50%',
											width: '24px',
											height: '24px',
											display: 'inline-flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '14px',
											fontWeight: 'bold',
											flexShrink: 0,
										}}>✓</span>
										<span>{successMessage}</span>
									</div>
								)}

								<form onSubmit={handleSubmit}>
									{/* Full Name* */}
									<div>
										<input
											type="text"
											name="fullName"
											className="ksfe-callback-input"
											placeholder="Full Name*"
											value={formData.fullName}
											onChange={handleChange}
											required
										/>
									</div>

										{/* Phone* */}
										<div>
											<input
												type="tel"
												name="phoneNumber"
												className="ksfe-callback-input"
												placeholder="Phone*"
												value={formData.phoneNumber}
												onChange={handleChange}
												required
											/>
										</div>

										{/* Email Address */}
										<div>
											<input
												type="email"
												name="email"
												className="ksfe-callback-input"
												placeholder="Email Address"
												value={formData.email}
												onChange={handleChange}
											/>
										</div>

										{/* Business Name & Industry (2 cols) */}
										<div style={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'flex-start' }}>
											<div style={{ flex: 1, minWidth: 0, margin: 0, padding: 0 }}>
												<input
													type="text"
													name="businessName"
													className="ksfe-callback-input"
													placeholder="Business Name"
													value={formData.businessName}
													onChange={handleChange}
												/>
											</div>
											<div style={{ flex: 1, minWidth: 0, margin: 0, padding: 0 }}>
												{renderDropdown('industry', 'industry', 'Industry', [
													'Finance',
													'Technology',
													'Sales and services',
													'Manufacturing',
													'Other'
												])}
											</div>
										</div>

										{/* Business Age & Monthly Revenue (2 cols) */}
										<div style={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'flex-start' }}>
											<div style={{ flex: 1, minWidth: 0, margin: 0, padding: 0 }}>
												{renderDropdown('businessAge', 'businessAge', 'Business Age', [
													'New Startup',
													'1-3 Years',
													'3+ Years'
												])}
											</div>
											<div style={{ flex: 1, minWidth: 0, margin: 0, padding: 0 }}>
												{renderDropdown('monthlyRevenue', 'monthlyRevenue', 'Monthly Revenue', [
													'10 Lakh',
													'10-50 Lakh',
													'50 Lakh+'
												])}
											</div>
										</div>

										{/* Service Needed */}
										<div>
											{renderDropdown('serviceNeeded', 'serviceNeeded', 'Service Needed', [
												'Loans and advances',
												'Consulting',
												'ERP/CRM Automation',
												'Other'
											], true)}
										</div>

										{submitError && (
											<div style={{
												background: '#fef2f2',
												border: '1px solid #fecaca',
												color: '#dc2626',
												borderRadius: '8px',
												padding: '10px 14px',
												fontSize: '13.5px',
												marginBottom: '16px'
											}}>
												{submitError}
											</div>
										)}

										{/* Vibrant Green Submit Button with up-right arrow */}
										<button
											type="submit"
											disabled={submitting}
											className="ksfe-callback-submit-btn"
											style={{ marginTop: '8px' }}
										>
											<span>{submitting ? 'Submitting...' : 'Submit'}</span>
											<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
												<line x1="7" y1="17" x2="17" y2="7"></line>
												<polyline points="7 7 17 7 17 17"></polyline>
											</svg>
										</button>
									</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
