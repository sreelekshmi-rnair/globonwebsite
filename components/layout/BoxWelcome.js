import Image from "next/image"
import Link from "next/link"
export default function BoxWelcome({ handleWelcomeBox, isWelcomeBox }) {
	return (
		<>


			<div className={`box-welcome ${isWelcomeBox ? "active" : ""}`}>
				<div className="tf-overlay" onClick={handleWelcomeBox} />
				<div className="popular-wrap">
					<div className="btn-close-welcome" onClick={handleWelcomeBox}>
						<i className="icon-xmark" />
					</div>
					<div className="mb-20 text-center">
						<Image
							src="/images/logo/logo_.webp"
							alt="Globon Business Solutions"
							width={160}
							height={65}
							style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
						/>
					</div>
					<div className="wrap">
						<p className="title">
							Globon Business Solutions
						</p>
						<p className="text">
							Founded in 2017 in Kodungallur, Thrissur, bringing loans, government subsidies, insurance, real estate, and business advisory together under one roof.
						</p>
					</div>
					<div className="wrap">
						<p className="title">
							Contact Us
						</p>
						<ul className="contact-list mb-20">
							<li>
								<p>
									Address: <Link href="https://maps.google.com" target="_blank">
										Kodungallur, Thrissur, Kerala, India
									</Link>
								</p>
							</li>
							<li>
								<p>
									Email: <Link href="mailto:globonfinance@gmail.com">
										globonfinance@gmail.com
									</Link>
								</p>
							</li>
							<li>
								<p>
									Phone: <Link href="tel:+919846053539">
										+91 98460 53539
									</Link>
								</p>
							</li>
						</ul>
						<ul className="social-list">
							<li>
								<Link href="/#">
									<i className="icon-facebook" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-twitter" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-linkedin" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-youtube" />
								</Link>
							</li>
						</ul>
					</div>
					<div className="gallery-image">
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-1.jpg" data-src="/images/widget/card-service-1.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-2.jpg" data-src="/images/widget/card-service-2.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-3.jpg" data-src="/images/widget/card-service-3.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-4.jpg" data-src="/images/widget/card-service-4.jpg" alt="" className="lazyload" />
							</Link>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
