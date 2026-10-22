import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>

			{/* Header */}
			<div className={`header-wrap-2 header header-style-absolute ${scroll ? "header-bg scrollHeader top-0 left-0 right-0" : ""}`}>
				<header className="tf-header style-4">
					<div className="tf-container">
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
									<div className="header-center">
										<nav className="main-nav">
											<Menu />
										</nav>
									</div>
									<div className="header-right">
										<Link href="/contact" className="tf-btn style-10 small type-2">
											Get In Touch
											<i className="icon-chevron-right" />
										</Link>
										<div className="union mobile-button" onClick={handleMobileMenu}>
											<span className="dot" />
											<span className="dot" />
											<span className="dot" />
										</div>
										<div className="union btn-open-welcome" onClick={handleWelcomeBox}>
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
													Contact Us
												</p>
												<ul className="contact-list mb-20">
													<li>
														<p>
															Address: <Link href="https://www.google.com/maps?q=55East10thStreet,NewYork,NY10003,UnitedStates" target="_blank">
																55 East 10th Street, New York, NY 10003, United States
															</Link>
														</p>
													</li>
													<li>
														<p>
															Email: <Link href="mailto:themesflat@gmail.com">
																themesflat@gmail.com
															</Link>
														</p>
													</li>
													<li>
														<p>
															Call: <Link href="/tel:+00012345688">
																+000 (123) 456 88
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
			</div>
		</>
	)
}
