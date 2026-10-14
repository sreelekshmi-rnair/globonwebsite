
export default function Section12() {
	return (
		<>

			<section className="s-slider-saylo tf-spacing-5">
				<div className="tf-marquee slider-saylo style-2">
					<div className="wrap-marquee">
						{['GLOBON BUSINESS SOLUTIONS', 'LOAN ASSISTANCE', 'FINANCIAL STRATEGY', 'GOVERNMENT SCHEMES', '48-HR APPROVALS', 'COMPLIANCE & REGISTRATIONS'].map((text, idx) => (
							<div className="marquee-item" key={idx}>
								<p className="font-main-2 text" style={{ letterSpacing: '1px' }}>
									★ {text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

		</>
	)
}
