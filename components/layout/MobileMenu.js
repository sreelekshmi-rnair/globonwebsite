'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [
		{ title: "Home", path: "/" },
		{ title: "About / Why Globon", path: "/about-us" },
		{
			title: "Services",
			subMenu: [
				{ title: "1. Loans & Advances", path: "/our-service#loans" },
				{ title: "2. Business & Financial Solutions", path: "/our-service#business" },
				{ title: "3. Insurance", path: "/our-service#insurance" },
				{ title: "4. Real Estate", path: "/our-service#real-estate" },
				{ title: "5. Digital & Marketing", path: "/our-service#digital" }
			]
		},
		{ title: "Loans", path: "/#loans-section" },
		{
			title: "Resources",
			subMenu: [
				{ title: "Blog", path: "/blog-standard" },
				{ title: "Knowledge Base", path: "/blog-standard" },
				{ title: "FAQs", path: "/faqs" },
				{ title: "Case Studies", path: "/case-study-01" },
				{ title: "Guides", path: "/#guides" }
			]
		},
		{ title: "Contact", path: "/contact" },
		{
			title: "More",
			subMenu: [
				{ title: "EMI Calculator & Tools", path: "/#emi-calculator" },
				{ title: "Government Schemes", path: "/#govt-schemes" },
				{ title: "Career", path: "/career" },
				{ title: "Awards", path: "/awards" }
			]
		}
	]

	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item menu-item-has-children-mobile ${item.subMenu ? "has-child" : ""} ${parentActiveClass}`}>
						{item.subMenu ? (
							<div
								className={`item-menu-mobile ${isActive(item.path)}`}
								onClick={() => toggleAccordion(index)}
								style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
							>
								<span>{item.title}</span>
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} style={{ transition: "transform 0.2s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} />
							</div>
						) : (
							<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"}>
								{item.title}
							</Link>
						)}
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
