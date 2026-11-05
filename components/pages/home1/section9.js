'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Section9() {
	const [selectedScheme, setSelectedScheme] = useState('Loans')
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
			name: 'Loans',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Blue Calendar / Pouch with Rupee Coin */}
					<rect x="4" y="8" width="30" height="28" rx="6" fill="#59bdfc" />
					<rect x="10" y="4" width="4" height="7" rx="2" fill="#025283" />
					<rect x="24" y="4" width="4" height="7" rx="2" fill="#025283" />
					<rect x="4" y="14" width="30" height="4" fill="#59bdfc" />
					<path d="M 12 24 L 17 29 L 26 19" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					<circle cx="32" cy="30" r="9" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
					<circle cx="32" cy="30" r="6.5" fill="#fbbf24" />
					<text x="32" y="33" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#78350f">₹</text>
				</svg>
			)
		},
		{
			id: 'business',
			name: 'Business Services',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Shield with checkmark & star */}
					<path d="M 22 4 L 38 10 C 38 25 30 35 22 40 C 14 35 6 25 6 10 Z" fill="#59bdfc" />
					<path d="M 22 7 L 35 12 C 35 23 28 32 22 36 C 16 32 9 23 9 12 Z" fill="#59bdfc" />
					<path d="M 15 21 L 20 26 L 29 16" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
					<circle cx="33" cy="31" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
					<text x="33" y="34" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#78350f">✓</text>
				</svg>
			)
		},
		{
			id: 'study-abroad',
			name: 'Study Abroad',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Graduation Mortarboard & Globe */}
					<circle cx="22" cy="24" r="14" fill="#59bdfc" />
					<ellipse cx="22" cy="24" rx="7" ry="14" fill="none" stroke="#ffffff" strokeWidth="1.2" />
					<line x1="8" y1="24" x2="36" y2="24" stroke="#ffffff" strokeWidth="1.2" />
					<polygon points="22,6 39,13 22,20 5,13" fill="#59bdfc" stroke="#025283" strokeWidth="1.5" />
					<path d="M 12 17 L 12 24 C 12 28 32 28 32 24 L 32 17" fill="#025283" />
					<line x1="22" y1="13" x2="38" y2="19" stroke="#f59e0b" strokeWidth="1.5" />
					<circle cx="38" cy="20" r="2.5" fill="#f59e0b" />
				</svg>
			)
		},
		{
			id: 'insurance',
			name: 'Insurance',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Protective Umbrella / Health Shield */}
					<path d="M 6 22 C 6 12 13 6 22 6 C 31 6 38 12 38 22 Z" fill="#59bdfc" />
					<path d="M 6 22 C 10 20 14 20 18 22 C 22 20 26 20 30 22 C 34 20 38 20 38 22" fill="#59bdfc" />
					<line x1="22" y1="6" x2="22" y2="34" stroke="#025283" strokeWidth="2.5" strokeLinecap="round" />
					<path d="M 22 34 C 22 38 18 38 18 35" fill="none" stroke="#025283" strokeWidth="2.5" strokeLinecap="round" />
					<circle cx="32" cy="28" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
					<rect x="30" y="23" width="4" height="10" rx="1" fill="#ffffff" />
					<rect x="27" y="26" width="10" height="4" rx="1" fill="#ffffff" />
				</svg>
			)
		},
		{
			id: 'real-estate',
			name: 'Real Estate',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Modern Property / LAP with Key */}
					<polygon points="22,5 39,18 5,18" fill="#59bdfc" />
					<rect x="9" y="18" width="26" height="20" rx="3" fill="#59bdfc" />
					<rect x="18" y="25" width="8" height="13" rx="2" fill="#59bdfc" />
					<rect x="12" y="21" width="5" height="5" rx="1" fill="#ffffff" />
					<rect x="27" y="21" width="5" height="5" rx="1" fill="#ffffff" />
					<circle cx="34" cy="30" r="7.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
					<circle cx="32" cy="30" r="2.5" fill="#78350f" />
					<rect x="34" y="29" width="4" height="2" fill="#78350f" />
				</svg>
			)
		},
		{
			id: 'digital-services',
			name: 'Digital Services',
			icon: (
				<svg width="42" height="42" viewBox="0 0 44 44" fill="none">
					{/* Modern Laptop with Code & Growth Spark */}
					<rect x="7" y="10" width="30" height="20" rx="3" fill="#59bdfc" />
					<rect x="9" y="12" width="26" height="16" rx="2" fill="#0f172a" />
					<path d="M 16 17 L 13 20 L 16 23" fill="none" stroke="#59bdfc" strokeWidth="1.8" strokeLinecap="round" />
					<path d="M 20 17 L 23 20 L 20 23" fill="none" stroke="#59bdfc" strokeWidth="1.8" strokeLinecap="round" />
					<path d="M 4 30 L 40 30 L 37 34 L 7 34 Z" fill="#94a3b8" />
					<circle cx="34" cy="12" r="6.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
					<polygon points="34,7 35.5,10.5 39,12 35.5,13.5 34,17 32.5,13.5 29,12 32.5,10.5" fill="#ffffff" />
				</svg>
			)
		}
	]

	const handleSchemeSelect = (schemeName) => {
		setSelectedScheme(schemeName)
		setFormData((prev) => ({ ...prev, serviceNeeded: schemeName }))
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
						borderBottom: isOpen ? '1.5px solid #59bdfc' : '1.5px solid #e2e8f0',
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
					type: 'Call Back Request - ' + (formData.serviceNeeded || selectedScheme || 'Loans')
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
								color: '#0369a1',
								letterSpacing: '0.3px',
								lineHeight: 1.2
							}}>
								<span className="heading-bold" style={{ fontWeight: 800 }}>WE ARE HAPPY TO</span><br />
								<span className="heading-normal" style={{ fontWeight: 400 }}>HELP YOU</span>
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
								<Link href="/services" className="ksfe-explore-outline-btn">
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
												'Loans',
												'Business Services',
												'Study Abroad',
												'Insurance',
												'Real Estate',
												'Digital Services',
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
