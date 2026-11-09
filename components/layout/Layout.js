
'use client'
import DataBg from "@/utils/DataBg"
import animateBoxVideo from "@/utils/animateBoxVideo"
import animateImgItem from "@/utils/animateImgItem"
import animateText from "@/utils/animateText"
import { useCircularTextEffect } from "@/utils/applyCircularText "
import useScrollFade from "@/utils/useScrollFade"
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import Hero1 from "../pages/home1/hero1"
import Hero2 from "../pages/home2/hero2"
import Hero3 from "../pages/home3/hero3"
import Hero4 from "../pages/home4/hero4"
import BoxWelcome from "./BoxWelcome"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
// import { hoverTextAnimate } from "@/utils/hoverTextAnimate"
// import { hoverTextAnimate } from "@/utils/hoverTextAnimate"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, breadcrumbBg, children, mainCls, breadcrumbAlt, hero }) {
	const [scroll, setScroll] = useState(false)
	// MobilleMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}
	// WelcomeBox
	const [isWelcomeBox, setWelcomeBox] = useState(false)
	const handleWelcomeBox = () => {
		setWelcomeBox(!isWelcomeBox)
		!isWelcomeBox ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	// Coming from another page to a link like /#consultation: go to that section.
	// Repeated because images above it keep changing the page height while loading.
	useEffect(() => {
		const id = window.location.hash.slice(1)
		if (!id) return
		const goToSection = () => document.getElementById(id)?.scrollIntoView({ behavior: "auto" })
		const timers = [100, 700, 1500].map((ms) => setTimeout(goToSection, ms))
		const stop = () => timers.forEach(clearTimeout)
		window.addEventListener("wheel", stop, { once: true })
		window.addEventListener("touchstart", stop, { once: true })
		return () => {
			stop()
			window.removeEventListener("wheel", stop)
			window.removeEventListener("touchstart", stop)
		}
	}, [])
	// Same page, link like /#consultation (e.g. "Free Consultation" in the mobile menu):
	// the browser scrolls there, but images and fade-in animations above the target
	// keep changing the page height during the scroll, so it can stop short.
	// Re-check the position a few times and correct it only if it is off.
	useEffect(() => {
		const onClick = (e) => {
			const link = e.target.closest?.('a[href*="#"]')
			if (!link) return
			const url = new URL(link.href, window.location.href)
			if (url.pathname !== window.location.pathname || !url.hash) return
			const id = decodeURIComponent(url.hash.slice(1))
			const align = () => {
				const el = document.getElementById(id)
				if (!el) return
				const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
				const off = el.getBoundingClientRect().top - offset
				if (Math.abs(off) > 8) window.scrollBy({ top: off, behavior: "auto" })
			}
			const timers = [900, 1600].map((ms) => setTimeout(align, ms))
			const stop = () => timers.forEach(clearTimeout)
			window.addEventListener("wheel", stop, { once: true })
			window.addEventListener("touchstart", stop, { once: true })
		}
		document.addEventListener("click", onClick)
		return () => document.removeEventListener("click", onClick)
	}, [])

	animateImgItem()
	animateBoxVideo()
	animateText()
	DataBg()
	// hoverTextAnimate()
	useCircularTextEffect()
	useScrollFade()
	return (
		<><div id="top" />
			<AddClassBody />
			<div id="wrapper">
				{!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />}
				{headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				<BoxWelcome isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />
				{hero == 1 && <Hero1 />}
				{hero == 2 && <Hero2 />}
				{hero == 3 && <Hero3 />}
				{hero == 4 && <Hero4 />}
				<Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbAlt={breadcrumbAlt} breadcrumbBg={breadcrumbBg} />
				<div className={`main-content ${mainCls ? mainCls : ""}`}>

					{children}
				</div>

				<Footer1 />

				<BackToTop target="#top" />
			</div>
		</>
	)
}
