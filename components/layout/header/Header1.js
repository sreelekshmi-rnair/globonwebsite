'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()

	const isActive = (path) => {
		if (!pathname) return ""
		if (path === "/") return pathname === "/" ? "active" : ""
		return pathname.startsWith(path) ? "active" : ""
	}

	return (
		<>
			<div className={`globon-ksfe-header-wrapper ${scroll ? "is-sticky" : ""}`}>
				{/* Top Bar: Clean light grey background with right-aligned contact details */}
				<div className="globon-ksfe-topbar">
					<div className="tf-container w-1780">
						<div className="topbar-content">
							<div className="topbar-right-links">
								<span>
									Phone : <Link href="tel:+919846053539">+91 98460 53539</Link>
								</span>
								<span className="topbar-divider" />
								<span>
									Email : <Link href="mailto:globonfinance@gmail.com">globonfinance@gmail.com</Link>
								</span>
								<span className="topbar-divider hide-mobile-topbar" />
								<span className="hide-mobile-topbar">
									Hours : Mon - Sat (9am - 6pm)
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Navbar: Home, About Us, Services, Contact */}
				<header className="globon-ksfe-main-navbar">
					<div className="tf-container w-1780">
						<div className="globon-ksfe-navbar-inner">
							{/* Left: Globon Logo */}
							<div className="navbar-logo-area">
								<Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
									<Image
										src="/images/logo/logo_.webp"
										alt="Globon Business Solutions"
										width={240}
										height={72}
										style={{ height: '65px', width: 'auto', maxHeight: '70px', objectFit: 'contain' }}
										priority
									/>
								</Link>
							</div>

							{/* Right: Exactly Home, About Us, Services, Contact */}
							<div className="navbar-right-group">
								<nav className="navbar-nav-links d-none d-xl-flex">
									<ul className="nav-items-list">
										<li className={`nav-item ${isActive("/")}`}>
											<Link href="/">Home</Link>
										</li>
										<li className={`nav-item ${isActive("/about-us")}`}>
											<Link href="/about-us">About Us</Link>
										</li>
										<li className={`nav-item has-dropdown ${isActive("/services")}`}>
											<Link href="/services" className="nav-link-dropdown">
												<span>Services</span>
												<span className="dropdown-chevron">
													<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</span>
											</Link>
											<ul className="dropdown-menu-list">
												<li><Link href="/services">All Services Overview</Link></li>
												<li><Link href="/services/loans-advances">Loans &amp; Financial Advances</Link></li>
												<li><Link href="/services/business-financial-solutions">Business &amp; Financial Solutions</Link></li>
												<li><Link href="/services/business-planning-consultancy">Business Planning &amp; Advisory</Link></li>
												<li><Link href="/services/business-registration-compliance">Company Registration &amp; Compliance</Link></li>
												<li><Link href="/services/business-technology-solutions">Business Technology Solutions</Link></li>
												<li><Link href="/services/digital-marketing-services">Digital Marketing Services</Link></li>
												<li><Link href="/services/travel-group-insurance">Travel &amp; Group Insurance</Link></li>
												<li><Link href="/services/real-estate-services">Real Estate Services</Link></li>
											</ul>
										</li>
										<li className={`nav-item ${isActive("/contact")}`}>
											<Link href="/contact">Contact</Link>
										</li>
									</ul>
								</nav>

								{/* Mobile Hamburger Button */}
								<div className="mobile-action-area d-inline-flex d-xl-none">
									<div className="union mobile-button" onClick={handleMobileMenu} aria-label="Open Mobile Menu">
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Mobile Navigation Drawer */}
				<div className={isMobileMenu ? "mobile-nav-wrap active" : "mobile-nav-wrap"}>
					<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
					<div className="inner-mobile-nav overflow-y-auto">
						<div className="top">
							<div className="logo">
								<Link href="/" rel="home" className="main-logo" style={{ display: 'inline-flex', alignItems: 'center' }}>
									<Image
										width={160}
										height={55}
										style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
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
								<p className="title">Globon Business Solutions</p>
								<ul className="contact-list mb-20">
									<li>
										<p>Support Network: 194+ Collection &amp; Support Centers across Kerala &amp; Pan-India</p>
									</li>
									<li>
										<p>Email: <Link href="mailto:globonfinance@gmail.com">globonfinance@gmail.com</Link></p>
									</li>
									<li>
										<p>Phone: <Link href="tel:+919846053539">+91 98460 53539</Link></p>
									</li>
									<li>
										<p>Hours: Mon - Sat (9am - 6pm)</p>
									</li>
								</ul>
								<div className="mb-20">
									<Link href="/#consultation" className="globon-ksfe-btn w-100 text-center justify-content-center">
										Free Consultation
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
