'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function useScrollFade() {
	const pathname = usePathname()

	useEffect(() => {
		let observer = null

		const initScrollFade = () => {
			if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

			// Broad universal query targeting all images, section titles, cards, design columns, metrics, and content containers
			const candidates = document.querySelectorAll(
				'section img, ' +
				'.main-content img, ' +
				'.page-title img, ' +
				'section h2, ' +
				'section h3, ' +
				'section [class*="title"], ' +
				'section [class*="heading"], ' +
				'section .row > [class*="col-"], ' +
				'section [class*="card"], ' +
				'section [class*="box"], ' +
				'section [class*="metric"], ' +
				'section [class*="banner"], ' +
				'section [class*="step"], ' +
				'section [class*="item"], ' +
				'section [style*="border-radius"], ' +
				'section [style*="borderRadius"], ' +
				'section [style*="box-shadow"], ' +
				'section [style*="boxShadow"], ' +
				'section [style*="grid"] > div, ' +
				'section [style*="gridTemplateColumns"] > div, ' +
				'footer .footer-inner > div'
			)

			const elementsToFade = []

			candidates.forEach((el) => {
				// Exclude header, navbar, hero background, mobile drawer, small utility icons
				if (
					el.closest('header') ||
					el.closest('.globon-ksfe-header-wrapper') ||
					el.closest('.mobile-nav-wrap') ||
					el.closest('.globon-ksfe-hero-wrapper') ||
					el.closest('.nri-stack-container') ||
					el.classList.contains('nri-rollover-card') ||
					el.closest('.dropdown-menu-list') ||
					el.classList.contains('globon-ksfe-slide-bg') ||
					el.id === 'mobile-logo_header' ||
					el.id === 'top' ||
					el.offsetHeight < 20
				) {
					return
				}

				// Avoid duplicate nested animations if direct parent card is already being faded
				let ancestor = el.parentElement
				let hasFadedAncestor = false
				while (ancestor && ancestor !== document.body && ancestor !== document.documentElement) {
					if (ancestor.classList && ancestor.classList.contains('globon-scroll-fade')) {
						hasFadedAncestor = true
						break
					}
					ancestor = ancestor.parentElement
				}

				if (!hasFadedAncestor) {
					elementsToFade.push(el)
				}
			})

			observer = new IntersectionObserver(
				(entries, obs) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('is-visible')
							obs.unobserve(entry.target)
						}
					})
				},
				{
					root: null,
					rootMargin: '0px 0px -40px 0px',
					threshold: 0.05
				}
			)

			elementsToFade.forEach((el, index) => {
				if (!el.classList.contains('globon-scroll-fade')) {
					el.classList.add('globon-scroll-fade')
				}

				// Check if element is already within the viewport on initial render
				const rect = el.getBoundingClientRect()
				const inViewport = rect.top < window.innerHeight - 40 && rect.bottom > 0

				if (inViewport) {
					setTimeout(() => {
						el.classList.add('is-visible')
					}, Math.min(index * 40, 350))
				} else {
					observer.observe(el)
				}
			})
		}

		// Initial run with slight delay to ensure dynamic Next.js components are mounted
		const timer = setTimeout(initScrollFade, 120)

		// Secondary scan for asynchronously loaded components / data
		const retryTimer = setTimeout(initScrollFade, 600)

		return () => {
			clearTimeout(timer)
			clearTimeout(retryTimer)
			if (observer) {
				observer.disconnect()
			}
		}
	}, [pathname])
}
