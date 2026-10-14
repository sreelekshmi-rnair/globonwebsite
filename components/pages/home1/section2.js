
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-about-company tf-spacing-2" id="about-globon">
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-section">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										About Globon Business Solutions
									</p>
									<h2 className="s-title mb-30 text-anime-wave-right">
										Helping You Move Forward With the <span>Right Financial Solution</span>
									</h2>
									<p style={{ fontSize: '16px', color: '#1f4e7a', fontWeight: '700', marginBottom: '16px', letterSpacing: '0.5px' }}>
										Loan Assistance • Financial Solutions • Business Support
									</p>
									<p className="text mb-25" style={{ fontSize: '16px', lineHeight: '1.7' }}>
										Globon Business Solutions specializes in <strong>loan assistance and financial solutions</strong>, helping individuals, startups, and growing enterprises access funding and navigate the entire process with clarity and confidence.
									</p>
									<ul className="list mb-35">
										<li style={{ marginBottom: '14px' }}>
											<p className="font-main-2 fw-7 mb-1" style={{ color: '#111' }}>
												Our Goal
											</p>
											<p className="text" style={{ fontSize: '15px', lineHeight: '1.5' }}>
												Understand your requirements and guide you toward suitable solutions with end-to-end execution.
											</p>
										</li>
										<li>
											<p className="font-main-2 fw-7 mb-1" style={{ color: '#111' }}>
												Our Integrated Reach
											</p>
											<p className="text" style={{ fontSize: '15px', lineHeight: '1.5' }}>
												Backed by 194+ centers across Kerala and nationwide banking tie-ups, offering trusted local support.
											</p>
										</li>
									</ul>
									<div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
										<Link href="/about-us" className="tf-btn">
											Learn More About Globon
											<i className="icon-chevron-right" />
										</Link>
										<Link href="/#why-choose-us" className="tf-btn style-3">
											Why Choose Us
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1 about-right-col">
								<div className="image-wrap about-image-wrap">
									<div className="image about-image-container">
										<Image
											fill
											sizes="(max-width: 991px) 100vw, 550px"
											style={{ objectFit: "cover", objectPosition: "center center" }}
											src="/images/section/about-loan-consultation.jpg"
											data-src="/images/section/about-loan-consultation.jpg"
											alt="About Globon Business Solutions - Loan Assistance"
											className="lazyload tf-animate-2"
										/>
									</div>
									<span className="half-circle item-1 wow rollInRight" />
									<span className="half-circle item-2 wow rollInRight" data-wow-delay="0.5s" />
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>

		</>
	)
}
