'use client'
import { useState } from 'react'

export default function Section2() {
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		service: '',
		message: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		setFormSubmitted(true)
	}

	return (
		<section className="tf-spacing-1" id="contact-form" style={{ background: '#ffffff', padding: '90px 0' }}>
			<div className="tf-container">
				<div className="row align-items-center g-5">
					{/* Left Column: Get in touch form */}
					<div className="col-lg-7">
						<div style={{
							background: '#ffffff',
							borderRadius: '20px',
							border: '1px solid #e2e8f0',
							padding: '45px 40px',
							boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)'
						}}>
							<span style={{
								background: '#edf5fd',
								color: '#0366a2',
								fontWeight: 800,
								fontSize: '12px',
								letterSpacing: '1px',
								textTransform: 'uppercase',
								padding: '6px 14px',
								borderRadius: '20px',
								border: '1px solid #dce8f5',
								display: 'inline-block',
								marginBottom: '14px'
							}}>
								Direct Consultation
							</span>
							<h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
								Get in touch
							</h2>
							<p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
								Have questions about loans, insurance, or business support services? Reach out to us and we'll help you get started.
							</p>

							{formSubmitted ? (
								<div style={{
									background: '#f0fdf4',
									border: '1px solid #bbf7d0',
									borderRadius: '12px',
									padding: '28px',
									textAlign: 'center'
								}}>
									<div style={{
										width: '56px',
										height: '56px',
										borderRadius: '50%',
										background: '#22c55e',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '24px',
										margin: '0 auto 16px'
									}}>
										✓
									</div>
									<h4 style={{ color: '#15803d', fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
										Thank You! Your Request Has Been Received.
									</h4>
									<p style={{ color: '#166534', margin: 0, fontSize: '15px' }}>
										Our financial and business advisor will contact you within 2 business hours.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
									<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
										<div>
											<label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
												Full Name *
											</label>
											<input
												type="text"
												placeholder="Enter your name"
												required
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												style={{
													width: '100%',
													height: '52px',
													padding: '0 16px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '15px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
										<div>
											<label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
												Phone Number *
											</label>
											<input
												type="tel"
												placeholder="+91 Phone number"
												required
												value={formData.phone}
												onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
												style={{
													width: '100%',
													height: '52px',
													padding: '0 16px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '15px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
									</div>

									<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
										<div>
											<label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
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
													height: '52px',
													padding: '0 16px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '15px',
													color: '#0f172a',
													outline: 'none'
												}}
											/>
										</div>
										<div>
											<label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
												Service Needed
											</label>
											<select
												value={formData.service}
												onChange={(e) => setFormData({ ...formData, service: e.target.value })}
												style={{
													width: '100%',
													height: '52px',
													padding: '0 16px',
													borderRadius: '10px',
													border: '1px solid #dce8f5',
													background: '#ffffff',
													fontSize: '15px',
													color: '#0f172a',
													outline: 'none'
												}}
											>
												<option value="">Select Service</option>
												<option value="Loans & Advances">1. Loans & Advances</option>
												<option value="Business & Financial Solutions">2. Business & Financial Solutions</option>
												<option value="Insurance Solutions">3. Insurance</option>
												<option value="Real Estate Services">4. Real Estate</option>
												<option value="Digital & Marketing">5. Digital & Marketing</option>
												<option value="Other Assistance">Other Assistance</option>
											</select>
										</div>
									</div>

									<div>
										<label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
											How Can We Help You?
										</label>
										<textarea
											rows={4}
											placeholder="Briefly describe your requirements..."
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											style={{
												width: '100%',
												padding: '14px 16px',
												borderRadius: '10px',
												border: '1px solid #dce8f5',
												background: '#ffffff',
												fontSize: '15px',
												color: '#0f172a',
												outline: 'none',
												resize: 'vertical'
											}}
										/>
									</div>

									<div style={{ marginTop: '8px' }}>
										<button
											type="submit"
											style={{
												background: '#0366a2',
												color: '#ffffff',
												border: 'none',
												borderRadius: '10px',
												padding: '16px 36px',
												fontSize: '16px',
												fontWeight: 800,
												letterSpacing: '1px',
												cursor: 'pointer',
												display: 'inline-flex',
												alignItems: 'center',
												gap: '10px',
												boxShadow: '0 6px 20px rgba(3, 102, 162, 0.25)',
												transition: 'transform 0.2s ease, background 0.2s ease'
											}}
											onMouseEnter={(e) => (e.currentTarget.style.background = '#025283')}
											onMouseLeave={(e) => (e.currentTarget.style.background = '#0366a2')}
										>
											SUBMIT
											<i className="icon-chevron-right" style={{ fontSize: '13px' }} />
										</button>
									</div>
								</form>
							)}
						</div>
					</div>

					{/* Right Column: Office Location & Map */}
					<div className="col-lg-5">
						<div style={{
							background: '#edf5fd',
							borderRadius: '20px',
							border: '1px solid #dce8f5',
							padding: '36px',
							display: 'flex',
							flexDirection: 'column',
							gap: '24px'
						}}>
							<div>
								<span style={{
									background: '#ffffff',
									color: '#0366a2',
									fontWeight: 800,
									fontSize: '11px',
									letterSpacing: '1px',
									textTransform: 'uppercase',
									padding: '4px 12px',
									borderRadius: '20px',
									border: '1px solid #dce8f5',
									display: 'inline-block',
									marginBottom: '10px'
								}}>
									Head Office
								</span>
								<h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
									Globon Business Solutions
								</h3>
								<p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
									18/520 1st floor, Dharmaraja building, Opp. Siva temple, Sringapuram, Kodungallur, Thrissur, 680664
								</p>
							</div>

							{/* Google Maps Embed */}
							<div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #dce8f5', height: '260px' }}>
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

							<div style={{
								background: '#ffffff',
								borderRadius: '12px',
								border: '1px solid #dce8f5',
								padding: '18px 20px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
								<div>
									<div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Quick WhatsApp Support</div>
									<div style={{ fontSize: '15px', color: '#16a34a', fontWeight: 800 }}>+91 98460 53539</div>
								</div>
								<a
									href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20have%20an%20inquiry"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										background: '#22c55e',
										color: '#ffffff',
										padding: '10px 18px',
										borderRadius: '8px',
										fontWeight: 700,
										fontSize: '13px',
										textDecoration: 'none'
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
