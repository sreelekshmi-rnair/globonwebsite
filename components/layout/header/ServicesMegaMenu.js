'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SHARED_VISUAL_IMAGE = "/images/mega-menu/kerala-advisor.jpg"

export const servicesMegaMenuData = [
  {
    id: "loans",
    title: "Loans",
    shortTitle: "Loans",
    slug: "loans",
    tagline: "Comprehensive personal, home, business, and vehicle financing tailored to your needs with fast-track bank approval.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 18h.01"/>
        <path d="M12 18h.01"/>
        <path d="M16 18h.01"/>
      </svg>
    )
  },
  {
    id: "business-services",
    title: "Business Services",
    shortTitle: "Business Services",
    slug: "business-services",
    tagline: "End-to-end company formation, statutory filings, bankable project reports (CMA), and modern enterprise technology.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    id: "study-abroad",
    title: "Study Abroad",
    shortTitle: "Study Abroad",
    slug: "study-abroad",
    tagline: "Global university admissions, fast-track education loans, and visa filing guidance across premier global destinations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    id: "insurance",
    title: "Insurance",
    shortTitle: "Insurance",
    slug: "insurance",
    tagline: "Protect your family, health, business assets, and journeys with tailored coverage from leading carriers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortTitle: "Real Estate",
    slug: "real-estate",
    tagline: "Buy, sell, lease, verify legal title & secure structured land financing with expert valuation across Kerala.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    id: "digital-services",
    title: "Digital Services",
    shortTitle: "Digital Services",
    slug: "digital-services",
    tagline: "Modern responsive web applications, brand identity, local SEO, social media marketing, and custom business software.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  }
];

const DEFAULT_MENU_TREE = [
  {
    id: 'menu-loans',
    title: 'Loans',
    url: '/services/loans',
    parentId: null,
    order: 1,
    children: []
  },
  {
    id: 'menu-business-services',
    title: 'Business Services',
    url: '/services/business-services',
    parentId: null,
    order: 2,
    children: []
  },
  {
    id: 'menu-study-abroad',
    title: 'Study Abroad',
    url: '/services/study-abroad',
    parentId: null,
    order: 3,
    children: [
      {
        id: 'menu-edu-loan',
        title: 'Education Loan Assistancee',
        url: '/services/study-abroad/education-loan-assistancee',
        parentId: 'menu-study-abroad',
        order: 1,
        children: []
      }
    ]
  },
  {
    id: 'menu-insurance',
    title: 'Insurance',
    url: '/services/insurance',
    parentId: null,
    order: 4,
    children: []
  },
  {
    id: 'menu-real-estate',
    title: 'Real Estate',
    url: '/services/real-estate',
    parentId: null,
    order: 5,
    children: []
  },
  {
    id: 'menu-digital-services',
    title: 'Digital Services',
    url: '/services/digital-services',
    parentId: null,
    order: 6,
    children: []
  }
];

let cachedMenuTree = null;
let cachedDynamicServices = null;

// Find the menu item that links to this category, at any depth
function findCategoryMenuItem(nodes, service) {
  for (const node of nodes) {
    if (node.url === `/services/${service.slug}` || node.id === `menu-${service.id}` || node.id === service.id) return node
    const found = findCategoryMenuItem(node.children || [], service)
    if (found) return found
  }
  return null
}

function collectMenuSlugs(nodes, slugs = new Set()) {
  for (const node of nodes) {
    slugs.add((node.url || '').split('/').filter(Boolean).pop())
    collectMenuSlugs(node.children || [], slugs)
  }
  return slugs
}

// Top-level service categories, in Admin > Menu Hierarchy order
export function getMenuCategories(menuTree, dynamicServices) {
  return menuTree.map((root) => {
    const category = servicesMegaMenuData.find((s) => root.url === `/services/${s.slug}`)
    if (category) return category
    const slug = (root.url || '').split('/').filter(Boolean).pop()
    const service = dynamicServices.find((s) => s.slug === slug)
    return {
      id: root.id,
      title: root.title,
      shortTitle: root.title,
      slug,
      href: root.url || '#',
      tagline: service?.subtitle || service?.shortDesc || '',
      icon: servicesMegaMenuData[0].icon,
    }
  })
}

// Sub-services of one category: its children in the menu tree, plus services
// added in admin for that category that aren't in the menu yet
export function getCategorySubServices(menuTree, dynamicServices, category) {
  const menuSubServices = findCategoryMenuItem(menuTree, category)?.children || []

  const adminServices = dynamicServices.filter((s) => {
    const sCat = (s.category || '').toLowerCase().trim()
    const targetId = (category.id || '').toLowerCase().trim()
    const targetSlug = (category.slug || '').toLowerCase().trim()

    if (sCat === targetId || sCat === targetSlug) return true
    if (targetId === 'loans' && (sCat === 'loans-advances' || sCat.includes('loan'))) return true
    if (targetId === 'business-services' && (sCat.includes('business') || sCat === 'business-services')) return true
    if (targetId === 'study-abroad' && (sCat === 'study-abroad' || sCat === 'study-abroad-services' || sCat === 'education-abroad')) return true
    if (targetId === 'insurance' && sCat.includes('insurance')) return true
    if (targetId === 'real-estate' && (sCat.includes('real-estate') || sCat.includes('property'))) return true
    if (targetId === 'digital-services' && (sCat.includes('digital') || sCat.includes('tech'))) return true
    return false
  })

  const listedSlugs = collectMenuSlugs(menuSubServices)
  const fallbackSubServices = adminServices.filter((s) => !listedSlugs.has(s.slug)).map((s) => ({
    id: s.id,
    title: s.title,
    url: `/services/${s.category || category.slug}/${s.slug}`,
    children: []
  }))

  return [...menuSubServices, ...fallbackSubServices]
}

// Shared loader for the menu tree and admin services (used by desktop and mobile menus)
export function useServicesMenuData() {
  const [menuTree, setMenuTree] = useState(cachedMenuTree || DEFAULT_MENU_TREE)
  const [dynamicServices, setDynamicServices] = useState(cachedDynamicServices || [])

  useEffect(() => {
    let isMounted = true

    fetch('/api/menu')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.menu && Array.isArray(data.menu)) {
          cachedMenuTree = data.menu
          setMenuTree(data.menu)
        }
      })
      .catch((err) => console.error('Failed to load menu hierarchy:', err))

    fetch('/api/services')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.services && Array.isArray(data.services)) {
          cachedDynamicServices = data.services
          setDynamicServices(data.services)
        }
      })
      .catch((err) => console.error('Failed to load services:', err))

    return () => {
      isMounted = false
    }
  }, [])

  return { menuTree, dynamicServices }
}

export default function ServicesMegaMenu({ onClose }) {
  const [activeId, setActiveId] = useState("loans")
  const { menuTree, dynamicServices } = useServicesMenuData()

  // The left column is the top level of Admin > Menu Hierarchy, in the same order.
  // Anything nested in the menu shows on the right, under its parent.
  const menuTabs = getMenuCategories(menuTree, dynamicServices)
  const orderedServices = menuTabs.length > 0 ? menuTabs : servicesMegaMenuData

  const currentService = orderedServices.find((s) => s.id === activeId) || orderedServices[0]

  const finalSubServices = getCategorySubServices(menuTree, dynamicServices, currentService)

  return (
    <div className="globon-mega-menu-panel" onClick={(e) => e.stopPropagation()}>
      <div className="globon-mega-menu-grid">
        {/* Left Column: 6 Services List */}
        <div className="mega-menu-tabs-column">
          <div className="mega-menu-tabs-list">
            {orderedServices.map((service) => {
              const isActive = service.id === currentService.id
              return (
                <Link
                  key={service.id}
                  href={service.href || `/services/${service.slug}`}
                  className={`mega-menu-tab-item ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onClick={onClose}
                >
                  <div className="tab-item-left">
                    <span className="tab-icon">{service.icon}</span>
                    <span className="tab-label">{service.shortTitle}</span>
                  </div>
                  {isActive && (
                    <span className="tab-active-arrow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Center Column: Active Service Sub-Services & Sub-Sub-Services Grid */}
        <div className="mega-menu-content-column">
          <div className="content-header">
            <h3 className="service-title">
              <Link href={currentService.href || `/services/${currentService.slug}`} onClick={onClose}>
                {currentService.title}
              </Link>
            </h3>
            <p className="service-tagline">{currentService.tagline}</p>
          </div>

          {finalSubServices.length > 0 ? (
            <div className="sub-services-grid">
              {finalSubServices.map((sub, idx) => {
                const hasLevel3 = sub.children && sub.children.length > 0
                return hasLevel3 ? (
                  /* Level 2 Sub-Service with its Level 3 Sub-sub-Services */
                  <div key={sub.id || idx} className="sub-service-group">
                    <Link
                      href={sub.url || '#'}
                      onClick={onClose}
                      className="sub-service-group-title"
                    >
                      <span>{sub.title}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>
                    <div className="sub-sub-services-list">
                      {sub.children.map((subsub, sIdx) => (
                        <Link
                          key={subsub.id || sIdx}
                          href={subsub.url || '#'}
                          onClick={onClose}
                          className="sub-sub-service-link"
                        >
                          <span style={{ color: '#0369a1', fontSize: '10px' }}>•</span>
                          <span>{subsub.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard Level 2 Sub-Service */
                  <Link
                    key={sub.id || idx}
                    href={sub.url || '#'}
                    onClick={onClose}
                    className="sub-service-link"
                  >
                    <span className="sub-text">{sub.title}</span>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="no-subservices-text">
              <Link href={currentService.href || `/services/${currentService.slug}`} onClick={onClose}>
                View {currentService.title} →
              </Link>
            </div>
          )}
        </div>

        {/* Right Column: Visual Card - Always the same image for all services */}
        <div className="mega-menu-visual-column">
          <div className="visual-card">
            <div className="visual-image-wrap">
              <Image
                src={SHARED_VISUAL_IMAGE}
                alt="Globon Services Advisor"
                fill
                sizes="290px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
