'use client'
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "../MobileMenu"
import ServicesMegaMenu from "./ServicesMegaMenu"

function ServicesDropdownItem({ isActive }) {
	const [isOpen, setIsOpen] = useState(false)
	const timerRef = useRef(null)

	const handleMouseEnter = () => {
		if (timerRef.current) clearTimeout(timerRef.current)
		setIsOpen(true)
	}

	const handleMouseLeave = () => {
		timerRef.current = setTimeout(() => {
			setIsOpen(false)
			
		}, 200)
	}

	const handleToggle = (e) => {
		e.preventDefault()
		setIsOpen((prev) => !prev)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<li
			className={`nav-item has-dropdown has-mega-menu ${isActive ? "active" : ""} ${isOpen ? "dropdown-open" : ""}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Link
				href="/services"
				className="nav-link-dropdown"
				onClick={handleToggle}
				aria-expanded={isOpen}
			>
				<span>Services</span>
				<span className={`dropdown-chevron ${isOpen ? "is-rotated" : ""}`}>
					<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</span>
			</Link>

			{isOpen && <ServicesMegaMenu onClose={handleClose} />}
		</li>
	)
}

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()

	useEffect(() => {
		fetch('/api/menu').catch(() => {})
	}, [])

	const isActive = (path) => {
		if (!pathname) return ""
		if (path === "/") return pathname === "/" ? "active" : ""
		return pathname.startsWith(path) ? "active" : ""
	}

	const isHomePage = pathname === "/" || pathname === ""

	// Navigation items reusable
	const renderNavLinks = () => (
		<ul className="nav-items-list">
			<li className={`nav-item ${isActive("/")}`}>
				<Link href="/">Home</Link>
			</li>
			<li className={`nav-item ${isActive("/about-us")}`}>
				<Link href="/about-us">About Us</Link>
			</li>
			<ServicesDropdownItem isActive={Boolean(isActive("/services"))} />
			<li className={`nav-item ${isActive("/contact")}`}>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	)

	// Mobile Drawer reusable
	const renderMobileDrawer = () => (
		<div className={isMobileMenu ? "mobile-nav-wrap active" : "mobile-nav-wrap"}>
			<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
			<div
				className="inner-mobile-nav overflow-y-auto"
				onClick={(e) => {
					if (e.target.closest('a')) handleMobileMenu()
				}}
			>
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
						<MobileMenu isOpen={isMobileMenu} />
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
	)

	return (
		<>
			{isHomePage ? (
				<>
					{/* HOME PAGE TOP: Floating Card Header at page top */}
					<div className="globon-ksfe-header-wrapper home-floating-header">
						<div className="tf-container w-1780 navbar-container">
							<header className="globon-ksfe-navbar-card">
								{/* Left: Globon Logo */}
								<div className="navbar-logo-area">
									<Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
										<Image
											src="/images/logo/logo_.webp"
											alt="Globon Business Solutions"
											width={220}
											height={68}
											style={{ height: '48px', width: 'auto', maxHeight: '52px', objectFit: 'contain' }}
											priority
										/>
									</Link>
								</div>

								{/* Right Group: Nav Links & Mobile Hamburger */}
								<div className="navbar-right-group">
									<nav className="navbar-nav-links d-none d-xl-flex">
										{renderNavLinks()}
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
							</header>
						</div>
					</div>

					{/* HOME PAGE ON SCROLL: Clean Full-Width White Navbar (matching reference design) */}
					{Boolean(scroll) && (
						<div className="globon-ksfe-header-wrapper normal-page-header is-sticky">
							<header className="globon-ksfe-main-navbar">
								<div className="tf-container w-1780 navbar-container">
									<div className="globon-ksfe-navbar-inner">
										{/* Left: Globon Logo */}
										<div className="navbar-logo-area">
											<Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
												<Image
													src="/images/logo/logo_.webp"
													alt="Globon Business Solutions"
													width={240}
													height={72}
													style={{ height: '52px', width: 'auto', maxHeight: '54px', objectFit: 'contain' }}
													priority
												/>
											</Link>
										</div>

										{/* Right: Nav Links & Mobile Hamburger */}
										<div className="navbar-right-group">
											<nav className="navbar-nav-links d-none d-xl-flex">
												{renderNavLinks()}
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
						</div>
					)}

					{renderMobileDrawer()}
				</>
			) : (
				/* OTHER PAGES: Standard Full-Width White Navbar */
				<>
					<div className={`globon-ksfe-header-wrapper normal-page-header ${scroll ? "is-sticky" : ""}`}>
						<header className="globon-ksfe-main-navbar">
							<div className="tf-container w-1780 navbar-container">
								<div className="globon-ksfe-navbar-inner">
									{/* Left: Globon Logo */}
									<div className="navbar-logo-area">
										<Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
											<Image
												src="/images/logo/logo_.webp"
												alt="Globon Business Solutions"
												width={240}
												height={72}
												style={{ height: scroll ? '52px' : '65px', width: 'auto', maxHeight: '70px', objectFit: 'contain' }}
												priority
											/>
										</Link>
									</div>

									{/* Right: Exactly Home, About Us, Services, Contact */}
									<div className="navbar-right-group">
										<nav className="navbar-nav-links d-none d-xl-flex">
											{renderNavLinks()}
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
					</div>

					{renderMobileDrawer()}
				</>
			)}
		</>
	)
}
