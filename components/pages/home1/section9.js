'use client'
import { useState } from 'react'

export default function Section9() {
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		businessName: '',
		industry: '',
		businessAge: '',
		monthlyRevenue: '',
		serviceNeeded: ''
	})

	const [submitting, setSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSubmitting(true)
		setSubmitError('')

		try {
			const res = await fetch('/api/inquiries', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			})

			const data = await res.json()
			if (!res.ok) {
				throw new Error(data.error || 'Failed to submit request')
			}

			setFormSubmitted(true)
		} catch (err) {
			setSubmitError(err.message || 'Something went wrong. Please try again.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<>
			<section className="s-contact" id="consultation">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										Need Loans or Business Strategy?
									</p>
									<h2 className="s-title text-anime-wave-right">
										Speak to a Globon <span>Financial Expert</span>
									</h2>
									<p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: '20px 0 30px' }}>
										Whether you need 48-hour loan approval, government subsidy guidance, or complete corporate compliance, our team is ready to assist you across 194+ centers.
									</p>
									<ul className="list">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">Pan-India &amp; Kerala Network</p>
											<p className="infor">
												194+ Support &amp; Collection Centers <br />
												Direct Tie-Ups with Top Banks &amp; NBFCs
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.2s">
											<p className="cap">Contact Us Directly</p>
											<p className="infor">
												globonfinance@gmail.com <br />
												+91 98460 53539
											</p>
										</li>
									</ul>
								</div>

								<div className="content-right">
									<div style={{
										background: '#ffffff',
										borderRadius: '16px',
										padding: '36px 32px',
										boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
										border: '1px solid #e2e8f0'
									}}>
										<h3
											className="title text-center font-main-2 consultation-heading"
											style={{
												fontSize: '26px',
												fontWeight: 700,
												color: '#0f172a',
												marginBottom: '28px',
												lineHeight: '1.3'
											}}
										>
											Request Free Consultation
										</h3>

										{formSubmitted ? (
											<div style={{
												background: '#f0fdf4',
												border: '1px solid #86efac',
												borderRadius: '12px',
												padding: '32px 24px',
												textAlign: 'center'
											}}>
												<div style={{
													width: '56px',
													height: '56px',
													borderRadius: '50%',
													background: '#22c55e',
													color: '#ffffff',
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '26px',
													marginBottom: '14px'
												}}>✓</div>
												<h4 style={{ color: '#15803d', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
													Request Submitted!
												</h4>
												<p style={{ color: '#166534', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px' }}>
													Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Our Globon financial consultant will review your requirement and call you within 2 business hours.
												</p>
												<button
													type="button"
													onClick={() => {
														setFormSubmitted(false)
														setFormData({
															fullName: '',
															email: '',
															phoneNumber: '',
															businessName: '',
															industry: '',
															businessAge: '',
															monthlyRevenue: '',
															serviceNeeded: ''
														})
													}}
													className="tf-btn"
													style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '8px' }}
												>
													Submit Another Request
												</button>
											</div>
										) : (
											<form onSubmit={handleSubmit} className="form-contact style-3 consultation-form">
												{/* 1. Full Name */}
												<div className="consultation-row">
													<div className="consultation-col-full">
														<input
															type="text"
															name="fullName"
															className="consultation-form-control"
															placeholder="Full Name"
															value={formData.fullName}
															onChange={handleChange}
															required
														/>
													</div>
												</div>

												{/* 2. Email Address */}
												<div className="consultation-row">
													<div className="consultation-col-full">
														<input
															type="email"
															name="email"
															className="consultation-form-control"
															placeholder="Email Address"
															value={formData.email}
															onChange={handleChange}
															required
														/>
													</div>
												</div>

												{/* 3. Phone Number */}
												<div className="consultation-row">
													<div className="consultation-col-full">
														<input
															type="tel"
															name="phoneNumber"
															className="consultation-form-control"
															placeholder="Phone Number"
															value={formData.phoneNumber}
															onChange={handleChange}
															required
														/>
													</div>
												</div>

												{/* 4. Business Name & Industry */}
												<div className="consultation-row">
													<div className="consultation-col-half">
														<input
															type="text"
															name="businessName"
															className="consultation-form-control"
															placeholder="Business Name"
															value={formData.businessName}
															onChange={handleChange}
															required
														/>
													</div>
													<div className="consultation-col-half">
														<select
															name="industry"
															className="consultation-form-select"
															value={formData.industry}
															onChange={handleChange}
															required
														>
															<option value="" disabled>Industry</option>
															<option value="Finance">Finance</option>
															<option value="Technology">Technology</option>
															<option value="Sales and services">Sales and services</option>
															<option value="Manufacturing">Manufacturing</option>
															<option value="Other">Other</option>
														</select>
													</div>
												</div>

												{/* 5. Business Age & Monthly Revenue */}
												<div className="consultation-row">
													<div className="consultation-col-half">
														<select
															name="businessAge"
															className="consultation-form-select"
															value={formData.businessAge}
															onChange={handleChange}
															required
														>
															<option value="" disabled>Business Age</option>
															<option value="New Startup">New Startup</option>
															<option value="1-3 Years">1-3 Years</option>
															<option value="3+ Years">3+ Years</option>
														</select>
													</div>
													<div className="consultation-col-half">
														<select
															name="monthlyRevenue"
															className="consultation-form-select"
															value={formData.monthlyRevenue}
															onChange={handleChange}
															required
														>
															<option value="" disabled>Monthly Revenue</option>
															<option value="10 Lakh">10 Lakh</option>
															<option value="10-50 Lakh">10-50 Lakh</option>
															<option value="50 Lakh+">50 Lakh+</option>
														</select>
													</div>
												</div>

												{/* 6. Service Needed */}
												<div className="consultation-row">
													<div className="consultation-col-full">
														<select
															name="serviceNeeded"
															className="consultation-form-select"
															value={formData.serviceNeeded}
															onChange={handleChange}
															required
														>
															<option value="" disabled>Service Needed</option>
															<option value="Loans and advances">Loans and advances</option>
															<option value="Consulting">Consulting</option>
															<option value="ERP/CRM Automation">ERP/CRM Automation</option>
															<option value="Other">Other</option>
														</select>
													</div>
												</div>

												{submitError && (
													<div style={{
														background: '#fef2f2',
														border: '1px solid #fecaca',
														color: '#dc2626',
														borderRadius: '8px',
														padding: '10px 14px',
														fontSize: '13.5px',
														marginBottom: '14px'
													}}>
														{submitError}
													</div>
												)}

												{/* 7. Submit Button */}
												<div className="consultation-row" style={{ marginTop: '4px' }}>
													<button
														type="submit"
														disabled={submitting}
														className="tf-btn full"
														style={{
															width: '100%',
															height: '52px',
															justifyContent: 'center',
															fontSize: '16px',
															fontWeight: 700,
															borderRadius: '8px',
															background: '#1f4e7a',
															color: '#ffffff',
															cursor: submitting ? 'not-allowed' : 'pointer',
															opacity: submitting ? 0.75 : 1,
															boxShadow: '0 4px 14px rgba(31, 78, 122, 0.25)'
														}}
													>
														{submitting ? 'Submitting Your Request...' : 'Get Started Now'}
													</button>
												</div>
											</form>
										)}

										<div className="mt-20 text-center" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
											<p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
												Prefer WhatsApp?{' '}
												<a
													href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20to%20request%20a%20free%20consultation"
													target="_blank"
													rel="noopener noreferrer"
													style={{ color: '#16a34a', fontWeight: 600, textDecoration: 'none' }}
												>
													Chat Directly on WhatsApp →
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

