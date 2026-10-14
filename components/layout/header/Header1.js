import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>Loan Assistance • Financial Solutions • Business Support</p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto:globonfinance@gmail.com">
												globonfinance@gmail.com
											</Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<Link href="tel:+919846053539">
												+91 98460 53539
											</Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-clock" />
											</div>
											<a>
												Hours : Mon - Sat (9am - 6pm)
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/* /.Topbar */}
			{/* Header */}
			<header className="tf-header">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
											<Image
												src="/images/logo/logo_.webp"
												alt="Globon Business Solutions"
												width={200}
												height={130}
												style={{ height: '64px', width: 'auto', maxHeight: '68px', objectFit: 'contain' }}
												priority
											/>
										</Link>
									</div>
								</div>
								<div className="header-center d-none d-xl-flex">
									<nav className="main-nav d-none d-xl-block">
										<Menu />
									</nav>
								</div>
								<div className="header-right">
									<Link href="/#consultation" className="tf-btn small header-consult-btn">
										<span>Free Consultation</span>
										<i className="icon-chevron-right" />
									</Link>
									<div className="union mobile-button d-inline-flex d-xl-none" onClick={handleMobileMenu} aria-label="Open Mobile Menu">
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									<div className="union btn-open-welcome d-none d-xl-flex" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div>
							</div>
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "	mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
										<div className="logo">
											<Link href="/" rel="home" className="main-logo" style={{ display: 'inline-flex', alignItems: 'center' }}>
												<Image
													width={160}
													height={65}
													style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
													id="mobile-logo_header" 
													alt="Globon Business Solutions" 
													src="/images/logo/logo_.webp" />
											</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												Globon Business Solutions
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														Support Network: 194+ Collection &amp; Support Centers across Kerala &amp; Pan-India
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
