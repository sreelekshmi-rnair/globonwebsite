'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useMemo, useEffect } from "react"
import { useServicesMenuData, getMenuCategories, getCategorySubServices } from "./header/ServicesMegaMenu"

// Turn a menu-tree node (from Admin > Menu Hierarchy) into a mobile menu node
const toNode = (n, parentKey) => {
	const key = `${parentKey}/${String(n.id || n.url || n.title).replace(/\//g, "_")}`
	return { key, title: n.title, url: n.url || "#", children: (n.children || []).map((c) => toNode(c, key)) }
}

function ChevronRight() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function ChevronLeft() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

/**
 * KSFE-style drill-down menu: each level replaces the list.
 * Rows with children open the next level; the level's title (underlined) links to its page.
 */
export default function MobileMenu({ isOpen = true }) {
	const pathname = usePathname() || "/"
	const { menuTree, dynamicServices } = useServicesMenuData()

	const root = useMemo(() => {
		const servicesKey = "/services"
		const categories = getMenuCategories(menuTree, dynamicServices).map((cat) => {
			const key = `${servicesKey}/${cat.id}`
			return {
				key,
				title: cat.title,
				url: cat.href || `/services/${cat.slug}`,
				children: getCategorySubServices(menuTree, dynamicServices, cat).map((s) => toNode(s, key))
			}
		})
		return [
			{ key: "/", title: "Home", url: "/", children: [] },
			{ key: "/about-us", title: "About Us", url: "/about-us", children: [] },
			{ key: servicesKey, title: "Services", url: "/services", children: categories },
			{ key: "/contact", title: "Contact Us", url: "/contact", children: [] }
		]
	}, [menuTree, dynamicServices])

	// Stack of opened nodes; empty = top level
	const [stack, setStack] = useState([])
	const [direction, setDirection] = useState("forward")

	// Start from the top level every time the drawer is closed
	useEffect(() => {
		if (!isOpen) setStack([])
	}, [isOpen])

	// Re-resolve opened nodes against fresh data (menu loads asynchronously)
	const resolvedStack = useMemo(() => {
		const out = []
		let level = root
		for (const key of stack) {
			const node = level.find((n) => n.key === key)
			if (!node || !node.children.length) break
			out.push(node)
			level = node.children
		}
		return out
	}, [stack, root])

	const current = resolvedStack[resolvedStack.length - 1]
	const items = current ? current.children : root

	const openNode = (node) => {
		setDirection("forward")
		setStack(resolvedStack.map((n) => n.key).concat(node.key))
	}
	const goBack = () => {
		setDirection("back")
		setStack(resolvedStack.slice(0, -1).map((n) => n.key))
	}

	const isActive = (node) =>
		pathname === node.url || (node.url !== "/" && node.url !== "#" && pathname.startsWith(node.url + "/"))

	return (
		<div className="gm-drill">
			<div key={current ? current.key : "root"} className={`gm-panel gm-panel-${direction}`}>
				{current && (
					<div className="gm-panel-head">
						<button type="button" className="gm-back" onClick={goBack}>
							<ChevronLeft />
							<span>{resolvedStack.length > 1 ? resolvedStack[resolvedStack.length - 2].title : "Main menu"}</span>
						</button>
						<Link href={current.url} className="gm-panel-title">
							{current.title}
						</Link>
					</div>
				)}

				<ul id="menu-mobile-menu" className="menu gm-list">
					{items.map((node) =>
						node.children.length ? (
							<li key={node.key}>
								<button
									type="button"
									className={`gm-row ${isActive(node) ? "is-active" : ""}`}
									onClick={() => openNode(node)}
									aria-label={`${node.title}, open submenu`}
								>
									<span>{node.title}</span>
									<ChevronRight />
								</button>
							</li>
						) : (
							<li key={node.key}>
								<Link
									href={node.url}
									className={`gm-row ${isActive(node) ? "is-active" : ""}`}
									aria-current={pathname === node.url ? "page" : undefined}
								>
									<span>{node.title}</span>
								</Link>
							</li>
						)
					)}
				</ul>
			</div>
		</div>
	)
}
