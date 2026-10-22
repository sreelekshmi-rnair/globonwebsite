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
		{ title: "About Us", path: "/about-us" },
		{
			title: "Services",
			path: "/services",
			subMenu: [
				{ title: "All Services Overview", path: "/services" },
				{ title: "Loans & Advances", path: "/services/loans-advances" },
				{ title: "Business & Financial Solutions", path: "/services/business-financial-solutions" },
				{ title: "Business Registration & Compliance", path: "/services/business-registration-compliance" },
				{ title: "Business Planning & Consultancy", path: "/services/business-planning-consultancy" },
				{ title: "Business Technology Solutions", path: "/services/business-technology-solutions" },
				{ title: "Life & Health Insurance", path: "/services/life-health-insurance" },
				{ title: "Travel & Group Insurance", path: "/services/travel-group-insurance" },
				{ title: "Real Estate Services", path: "/services/real-estate-services" },
				{ title: "Digital & Marketing Services", path: "/services/digital-marketing-services" }
			]
		},
		{ title: "Schemes & Offers", path: "/#signature-schemes" },
		{ title: "Contact Us", path: "/contact" }
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
