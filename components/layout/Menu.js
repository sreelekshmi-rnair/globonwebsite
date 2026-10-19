'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const isActive = (path) => {
		if (!pathname) return ""
		if (path === "/") return pathname === "/" ? "current" : ""
		return pathname.startsWith(path) ? "current" : ""
	}

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>Home</span></Link>
			</li>
			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>About</span></Link>
			</li>
			<li className={`item ${isActive("/services")}`}>
				<Link href="/services"><span>Services</span></Link>
			</li>
			<li className={`item ${isActive("/contact")}`}>
				<Link href="/contact"><span>Contact</span></Link>
			</li>
		</ul>
	)
}
