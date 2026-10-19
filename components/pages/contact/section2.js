'use client'
import { useState } from 'react'

export default function Section2() {
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSubmitting(true)
		setSubmitError('')

		try {
			const res = await fetch('/api/contacts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					fullName: formData.name,
					phoneNumber: formData.phone,
					email: formData.email,
					subject: formData.subject,
					message: formData.message
				})
			})

			const data = await res.json()
			if (!res.ok) {
				throw new Error(data.error || 'Failed to submit contact message')
			}

			setFormSubmitted(true)
			setFormData({
				name: '',
				phone: '',
				email: '',
				subject: '',
				message: ''
			})

			// Automatically dismiss the thank you message after 5 seconds and restore the form
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
		<section id="contact-form" style={{ background: '#ffffff', padding: '105px 0 115px 0' }}>
			<div className="tf-container about-page-container">
				<div className="row align-items-center g-5">
					{/* Left Column: Get in touch consultation form */}
					<div className="col-lg-7">
						<div style={{
							background: '#ffffff',
							borderRadius: '24px',
							border: '1px solid #e2e8f0',
							padding: 'clamp(36px, 4vw, 54px)',
							boxShadow: '0 12px 40px rgba(0, 0, 0, 0.04)'
						}}>
							<p style={{
								color: '#0366a2',
								fontWeight: 700,
								fontSize: '13px',
								letterSpacing: '1.5px',
								textTransform: 'uppercase',
								marginBottom: '14px',
								display: 'inline-flex',
								alignItems: 'center',
								gap: '8px'
							}}>
								<i className="icon-angles-right" />
								Direct Consultation · 2-Hour Response
							</p>
							
							<h2 style={{
								fontSize: 'clamp(28px, 3.2vw, 40px)',
								fontWeight: 500,
								color: '#000000',
								textTransform: 'uppercase',
								letterSpacing: '0.4px',
								lineHeight: '1.2',
								marginBottom: '16px',
								fontFamily: "'Public Sans', 'Manrope', 'Inter', -apple-system, sans-serif"
							}}>
								Get In Touch With Us
							</h2>

							<p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.75', marginBottom: '34px', fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif" }}>
								Have questions about loans, government subsidies, or business compliance? Fill out the form below and an advisor will connect with you.
							</p>

							{formSubmitted ? (
								<div style={{
									background: '#eff6ff',
									border: '1px solid #bfdbfe',
									borderRadius: '16px',
									padding: '36px',
									textAlign: 'center'
								}}>
									<div style={{
										width: '60px',
										height: '60px',
										borderRadius: '50%',
										background: '#0366a2',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '28px',
										fontWeight: 800,
										margin: '0 auto 18px'
									}}>
										✓
									</div>
									<h4 style={{ color: '#0366a2', fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
										Thank You! Your Request Has Been Received.
									</h4>
									<p style={{ color: '#1e3a8a', margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
										Our senior financial and business advisor in Kodungallur will contact you within 2 business hours.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
									<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
										<div>
											<label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000000', marginBottom: '8px', fontFamily: "'Public Sans', sans-serif" }}>
												Full Name *
											</label>
											<input
												type="text"
												placeholder="Enter your full name"
												required
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												style={{
													width: '100%',
													height: '54px',
													padding: '0 18px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '16px',
													color: '#0f172a',
													outline: 'none',
													transition: 'border-color 0.2s ease'
												}}
											/>
										</div>
										<div>
											<label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000000', marginBottom: '8px', fontFamily: "'Public Sans', sans-serif" }}>
												Phone Number *
											</label>
											<input
												type="tel"
												placeholder="+91 Mobile number"
												required
												value={formData.phone}
												onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
												style={{
													width: '100%',
													height: '54px',
													padding: '0 18px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '16px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
									</div>

									<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
										<div>
											<label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000000', marginBottom: '8px', fontFamily: "'Public Sans', sans-serif" }}>
												Email Address *
											</label>
											<input
												type="email"
												placeholder="name@example.com"
												required
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												style={{
													width: '100%',
													height: '54px',
													padding: '0 18px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '16px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
										<div>
											<label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000000', marginBottom: '8px', fontFamily: "'Public Sans', sans-serif" }}>
												Subject *
											</label>
											<input
												type="text"
												placeholder="Enter Subject (e.g. Loan Assistance, Business Consulting)"
												required
												value={formData.subject}
												onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
												style={{
													width: '100%',
													height: '54px',
													padding: '0 18px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '16px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
									</div>

									<div>
										<label style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: '#000000', marginBottom: '8px', fontFamily: "'Public Sans', sans-serif" }}>
											How Can We Help You?
										</label>
										<textarea
											rows={4}
											placeholder="Briefly describe your requirements or loan amount needed..."
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											style={{
												width: '100%',
												padding: '16px 18px',
												borderRadius: '10px',
												border: '1px solid #dce8f5',
												background: '#ffffff',
												fontSize: '16px',
												color: '#0f172a',
												outline: 'none',
												resize: 'vertical',
												lineHeight: '1.6'
											}}
										/>
									</div>

									{submitError && (
										<div style={{
											background: '#fef2f2',
											border: '1px solid #fecaca',
											color: '#dc2626',
											borderRadius: '8px',
											padding: '12px 16px',
											fontSize: '14px'
										}}>
											{submitError}
										</div>
									)}

									<div style={{ marginTop: '8px' }}>
										<button
											type="submit"
											disabled={submitting}
											style={{
												backgroundColor: '#0366a2',
												color: '#ffffff',
												border: 'none',
												borderRadius: '8px',
												padding: '16px 42px',
												fontSize: '16px',
												fontWeight: 600,
												letterSpacing: '0.5px',
												cursor: submitting ? 'not-allowed' : 'pointer',
												opacity: submitting ? 0.75 : 1,
												display: 'inline-flex',
												alignItems: 'center',
												gap: '10px',
												boxShadow: '0 4px 16px rgba(3, 102, 162, 0.25)',
												transition: 'all 0.25s ease'
											}}
										>
											<span>{submitting ? 'Submitting...' : 'Submit Inquiry'}</span>
											<span style={{ fontSize: '18px', fontWeight: 700 }}>↗</span>
										</button>
									</div>
								</form>
							)}
						</div>
					</div>

					{/* Right Column: Office Location & Google Map */}
					<div className="col-lg-5">
						<div style={{
							background: '#f8fafc',
							borderRadius: '24px',
							border: '1px solid #e2e8f0',
							padding: 'clamp(32px, 3.5vw, 44px)',
							display: 'flex',
							flexDirection: 'column',
							gap: '24px',
							boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
						}}>
							<div>
								<span style={{
									background: '#ffffff',
									color: '#0366a2',
									fontWeight: 700,
									fontSize: '12px',
									letterSpacing: '1px',
									textTransform: 'uppercase',
									padding: '4px 14px',
									borderRadius: '20px',
									border: '1px solid #dce8f5',
									display: 'inline-block',
									marginBottom: '12px'
								}}>
									Head Office · Kodungallur
								</span>
								<h3 style={{
									fontSize: '22px',
									fontWeight: 600,
									color: '#000000',
									textTransform: 'uppercase',
									letterSpacing: '0.4px',
									marginBottom: '10px',
									fontFamily: "'Public Sans', 'Manrope', 'Inter', sans-serif"
								}}>
									Globon Business Solutions
								</h3>
								<p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
									18/520 1st floor, Dharmaraja building, Opp. Siva temple, Sringapuram, Kodungallur, Thrissur, Kerala — 680664
								</p>
							</div>

							{/* Google Maps Embed */}
							<div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', height: '290px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
								<iframe
									src="https://maps.google.com/maps?q=18/520+1st+floor,+Dharmaraja+building,+Opp.+Siva+temple,+Sringapuram,+Kodungallur,+Thrissur,+680664&t=&z=15&ie=UTF8&iwloc=&output=embed"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Globon Office Location"
								/>
							</div>

							{/* Quick WhatsApp Support Bar */}
							<div style={{
								background: '#ffffff',
								borderRadius: '16px',
								border: '1px solid #e2e8f0',
								padding: '20px 24px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
							}}>
								<div>
									<div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Direct WhatsApp Helpdesk</div>
									<div style={{ fontSize: '17px', color: '#0366a2', fontWeight: 800, marginTop: '2px' }}>+91 98460 53539</div>
								</div>
								<a
									href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20have%20an%20inquiry"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										background: '#22c55e',
										color: '#ffffff',
										padding: '12px 22px',
										borderRadius: '8px',
										fontWeight: 700,
										fontSize: '14px',
										textDecoration: 'none',
										boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)'
									}}
								>
									Chat Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
