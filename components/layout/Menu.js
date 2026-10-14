'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const isActive = (path) => pathname === path ? "current" : ""
	const isParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current" : ""

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>Home</span></Link>
			</li>
			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>About / Why Globon</span></Link>
			</li>
			<li className={`item has-child ${isParentActive(["/services", "/our-service", "/service-details"])}`}>
				<Link href="/services"><span>Services</span></Link>
				<ul className="sub-nav">
					<li><Link href="/services"><span>All Dynamic Services</span></Link></li>
					<li><Link href="/services/loans-advances"><span>1. Loans &amp; Advances</span></Link></li>
					<li><Link href="/services/business-financial-solutions"><span>2. Business &amp; Financial</span></Link></li>
					<li><Link href="/services/insurance-advisory"><span>3. Insurance Advisory</span></Link></li>
					<li><Link href="/services/real-estate-solutions"><span>4. Real Estate</span></Link></li>
					<li><Link href="/services/digital-marketing"><span>5. Digital Marketing</span></Link></li>
				</ul>
			</li>
			<li className={`item ${isActive("/loans")}`}>
				<Link href="/loans"><span>Loans</span></Link>
			</li>
			<li className={`item has-child ${isParentActive(["/blog", "/blog-standard", "/blog-details", "/faqs", "/case-study-01"])}`}>
				<Link href="/blog"><span>Resources</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/blog")}><Link href="/blog"><span>Blog &amp; Insights</span></Link></li>
					<li><Link href="/blog"><span>Knowledge Base</span></Link></li>
					<li className={isActive("/faqs")}><Link href="/faqs"><span>FAQs</span></Link></li>
					<li className={isActive("/case-study-01")}><Link href="/case-study-01"><span>Case Studies</span></Link></li>
				</ul>
			</li>
			<li className={`item ${isActive("/contact")}`}>
				<Link href="/contact"><span>Contact</span></Link>
			</li>
			<li className={`item has-child`}>
				<Link href="#"><span>More</span></Link>
				<ul className="sub-nav">
					<li><Link href="/#emi-calculator"><span>EMI Calculator &amp; Tools</span></Link></li>
					<li><Link href="/#govt-schemes"><span>Government Schemes</span></Link></li>
					<li className={isActive("/career")}><Link href="/career"><span>Career</span></Link></li>
					<li className={isActive("/awards")}><Link href="/awards"><span>Awards</span></Link></li>
				</ul>
			</li>
		</ul>
	)
}
