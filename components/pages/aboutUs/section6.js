'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Section6() {
	const [activeFaq, setActiveFaq] = useState(0)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		businessName: '',
		industry: '',
		businessAge: '',
		monthlyRevenue: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleFormSubmit = async (e) => {
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
			setTimeout(() => {
				setFormSubmitted(false)
			}, 5000)
		} catch (err) {
			setSubmitError(err.message || 'Something went wrong. Please try again.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<>
			<section className="s-contact tf-spacing-3" style={{ padding: "90px 0" }}>
				<div className="tf-container">
					<div className="row">
						{/* Left: FAQ Section */}
						<div className="col-lg-6 mb-50 mb-lg-0">
							<div className="content-left">
								<p className="s-sub-title mb-10">
									<i className="icon-angles-right moveLeftToRight" />
									Ask Anything
								</p>
								<h2 className="s-title text-anime-wave mb-20" style={{ fontSize: "36px" }}>
									You Can Contact Us For <br />
									<span>Any Question</span>
								</h2>
								<p className="text mb-40" style={{ fontSize: "16px", lineHeight: "1.7", color: "#666" }}>
									Whether it's a loan, an insurance policy, or getting your business registered, 
									our team is a call or WhatsApp message away. Reach out any time and we'll walk you through the process.
								</p>

								{/* FAQ Accordion */}
								<div className="tf-accordion style-4 style-2 accordion" id="faqAccordion">
									{faqs.map((faq, index) => {
										const isOpen = activeFaq === index
										return (
											<div key={index} className="accordion-item" style={{
												marginBottom: "16px",
												border: "1px solid #e5e7eb",
												borderRadius: "10px",
												overflow: "hidden"
											}}>
												<h3 className="accordion-header" onClick={() => setActiveFaq(isOpen ? null : index)} style={{ margin: 0 }}>
													<button 
														className={`accordion-button ${isOpen ? "" : "collapsed"}`} 
														type="button"
														style={{
															fontWeight: 700,
															fontSize: "16px",
															padding: "18px 20px",
															background: isOpen ? "#fbfbfe" : "#fff",
															color: isOpen ? "#FFB800" : "#111"
														}}
													>
														{faq.q}
													</button>
												</h3>
												{isOpen && (
													<div className="accordion-collapse collapse show">
														<div className="accordion-body" style={{
															padding: "0 20px 20px 20px",
															fontSize: "15px",
															lineHeight: "1.6",
															color: "#555"
														}}>
															{faq.a}
														</div>
													</div>
												)}
											</div>
										)
									})}
								</div>

								{/* Direct Contact Summary */}
								<div className="mt-40" style={{
									background: "#f8f9fa",
									padding: "24px",
									borderRadius: "12px",
									borderLeft: "4px solid #FFB800"
								}}>
									<h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "14px" }}>
										Direct Contact Information
									</h4>
									<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
										<div style={{ display: "flex", gap: "12px" }}>
											<i className="flaticon-marker" style={{ color: "#FFB800", fontSize: "18px", marginTop: "3px" }} />
											<span style={{ fontSize: "14px", color: "#444" }}>
												18/520 1st floor, Dharmaraja building, Opp. Siva temple, Sringapuram, Kodungallur, Thrissur, Kerala - 680664
											</span>
										</div>
										<div style={{ display: "flex", gap: "12px" }}>
											<i className="flaticon-phone-call" style={{ color: "#FFB800", fontSize: "18px" }} />
											<a href="tel:+919846053539" style={{ fontSize: "15px", fontWeight: 700, color: "#111" }}>
												+91 98460 53539
											</a>
										</div>
										<div style={{ display: "flex", gap: "12px" }}>
											<i className="flaticon-open-mail" style={{ color: "#FFB800", fontSize: "18px" }} />
											<a href="mailto:globonfinance@gmail.com" style={{ fontSize: "15px", color: "#111" }}>
												globonfinance@gmail.com
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right: Quick Consultation Form */}
						<div className="col-lg-6">
							<div className="content-right" style={{
								background: "#fff",
								borderRadius: "16px",
								padding: "40px",
								boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
								border: "1px solid #eaeaea"
							}}>
								<span style={{ 
									background: "rgba(255, 184, 0, 0.15)", 
									color: "#b37400", 
									fontWeight: 700, 
									fontSize: "12px", 
									padding: "4px 12px", 
									borderRadius: "20px", 
									textTransform: "uppercase" 
								}}>
									Free Assessment
								</span>
								<h3 className="title mb-10 mt-10 font-main-2" style={{ fontSize: "28px", fontWeight: 800 }}>
									Have a loan, insurance, or business need? Let's talk.
								</h3>
								<p style={{ color: "#666", fontSize: "15px", marginBottom: "30px" }}>
									Fill in the form below and our dedicated loan &amp; business specialist in Kodungallur will contact you within 2 business hours.
								</p>

								{formSubmitted ? (
									<div style={{
										background: "#e8f5e9",
										border: "1px solid #4caf50",
										padding: "24px",
										borderRadius: "10px",
										textAlign: "center"
									}}>
										<i className="icon-check-2" style={{ fontSize: "36px", color: "#2e7d32" }} />
										<h4 style={{ color: "#2e7d32", margin: "12px 0 6px" }}>Thank You!</h4>
										<p style={{ color: "#333", margin: 0 }}>
											Your consultation request has been submitted. Our team will contact you at the earliest.
										</p>
									</div>
								) : (
									<form onSubmit={handleFormSubmit} className="form-contact style-3 consultation-form">
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

								<div className="mt-30 text-center" style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
									<p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
										Prefer WhatsApp? <a href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: 700 }}>
											Chat with Us Directly on WhatsApp →
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
