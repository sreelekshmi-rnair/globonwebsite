'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DigitalMarketingCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for Digital & Marketing Services
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'website-technology-services':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Desktop Browser Screen */}
            <g transform="translate(64, 42)">
              <rect x="0" y="0" width="138" height="94" rx="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              {/* Screen Content */}
              <rect x="6" y="6" width="126" height="72" rx="4" fill="#FFFFFF" />
              <rect x="6" y="6" width="126" height="14" rx="4" fill="#0366A2" />
              <circle cx="14" cy="13" r="2.5" fill="#EF4444" />
              <circle cx="22" cy="13" r="2.5" fill="#F59E0B" />
              <circle cx="30" cy="13" r="2.5" fill="#10B981" />
              <rect x="42" y="10" width="60" height="6" rx="3" fill="#FFFFFF" opacity="0.3" />
              {/* Hero Banner on Screen */}
              <rect x="12" y="26" width="68" height="24" rx="3" fill="#F1F5F9" />
              <line x1="18" y1="34" x2="60" y2="34" stroke="#0366A2" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="42" x2="48" y2="42" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              {/* Image Widget */}
              <rect x="84" y="26" width="42" height="24" rx="3" fill="#E0F2FE" />
              <circle cx="105" cy="38" r="7" fill="#38BDF8" />
              {/* Code Brackets Widget */}
              <rect x="12" y="54" width="114" height="18" rx="3" fill="#0F172A" />
              <text x="20" y="66" fontSize="7" fontWeight="bold" fill="#38BDF8">&lt;web-dev /&gt;</text>
              <text x="68" y="66" fontSize="7" fontWeight="bold" fill="#10B981">FAST LOAD 99%</text>
              {/* Stand */}
              <polygon points="56,94 82,94 88,110 50,110" fill="#475569" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="42" y="109" width="54" height="5" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Mobile Device Mockup */}
            <g transform="translate(196, 46) rotate(4)">
              <rect x="0" y="0" width="54" height="96" rx="8" fill="#0F172A" stroke="#0F172A" strokeWidth="2" />
              <rect x="4" y="6" width="46" height="84" rx="4" fill="#FFFFFF" />
              <rect x="18" y="9" width="18" height="3" rx="1.5" fill="#94A3B8" />
              <rect x="8" y="18" width="38" height="16" rx="2" fill="#0366A2" />
              <rect x="8" y="38" width="38" height="10" rx="2" fill="#F1F5F9" />
              <rect x="8" y="52" width="17" height="20" rx="2" fill="#BAE6FD" />
              <rect x="29" y="52" width="17" height="20" rx="2" fill="#BAE6FD" />
            </g>
            {/* React / Lightning Badge */}
            <g transform="translate(196, 136)">
              <rect x="0" y="0" width="88" height="22" rx="11" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
              <text x="44" y="14" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">⚡ NEXT.JS SPEED</text>
            </g>
          </svg>
        )

      case 'branding-creative-services':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Artboard / Canvas with Bezier Curves */}
            <g transform="translate(68, 44)">
              <rect x="0" y="0" width="120" height="96" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Canvas header */}
              <rect x="0" y="0" width="120" height="16" rx="6" fill="#1E293B" />
              <text x="60" y="11" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">BRAND IDENTITY KIT</text>
              {/* Bezier Vector Curves */}
              <path d="M 20 74 C 20 30 70 30 70 74 C 70 30 100 30 100 74" fill="none" stroke="#0366A2" strokeWidth="2.5" />
              {/* Vector Anchor Points */}
              <rect x="17" y="71" width="6" height="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
              <rect x="42" y="38" width="6" height="6" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.2" />
              <rect x="67" y="71" width="6" height="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
              <rect x="82" y="38" width="6" height="6" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.2" />
              <rect x="97" y="71" width="6" height="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
              {/* Pen Tool Icon */}
              <g transform="translate(42, 28) rotate(-45)">
                <polygon points="0,0 8,2 10,10 2,8" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
                <line x1="0" y1="0" x2="-6" y2="-6" stroke="#0F172A" strokeWidth="2" />
              </g>
            </g>
            {/* Color Swatches Palette Card */}
            <g transform="translate(196, 42) rotate(4)">
              <rect x="0" y="0" width="82" height="94" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <text x="41" y="18" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">PALETTE</text>
              {/* Swatch 1: Primary Blue */}
              <circle cx="24" cy="36" r="10" fill="#0366A2" stroke="#0F172A" strokeWidth="1.2" />
              <text x="44" y="39" fontSize="6.5" fontWeight="bold" fill="#0F172A">#0366A2</text>
              {/* Swatch 2: Emerald Green */}
              <circle cx="24" cy="58" r="10" fill="#10B981" stroke="#0F172A" strokeWidth="1.2" />
              <text x="44" y="61" fontSize="6.5" fontWeight="bold" fill="#0F172A">#10B981</text>
              {/* Swatch 3: Amber Gold */}
              <circle cx="24" cy="80" r="10" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.2" />
              <text x="44" y="83" fontSize="6.5" fontWeight="bold" fill="#0F172A">#F59E0B</text>
            </g>
            {/* Copyright Transfer Badge */}
            <g transform="translate(68, 142)">
              <rect x="0" y="0" width="108" height="20" rx="10" fill="#10B981" stroke="#0F172A" strokeWidth="1.2" />
              <text x="54" y="13" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">100% VECTOR &amp; COPYRIGHT</text>
            </g>
          </svg>
        )

      case 'digital-marketing-advertising':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Target Bullseye with Arrow */}
            <g transform="translate(70, 42)">
              {/* Outer Ring */}
              <circle cx="48" cy="48" r="44" fill="#F1F5F9" stroke="#0F172A" strokeWidth="2" />
              {/* Middle Ring */}
              <circle cx="48" cy="48" r="30" fill="#0366A2" stroke="#0F172A" strokeWidth="1.5" />
              {/* Inner Ring */}
              <circle cx="48" cy="48" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              {/* Bullseye Center */}
              <circle cx="48" cy="48" r="8" fill="#DC2626" />
              {/* Target Arrow */}
              <line x1="82" y1="14" x2="52" y2="44" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
              <polygon points="52,44 58,36 44,40" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
              <polygon points="82,14 88,18 84,24 74,18" fill="#DC2626" />
            </g>
            {/* Google Search Ad & Meta Ads Card */}
            <g transform="translate(182, 42) rotate(3)">
              <rect x="0" y="0" width="104" height="96" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Sponsored Pill */}
              <rect x="8" y="10" width="46" height="12" rx="3" fill="#F0FDF4" stroke="#86EFAC" />
              <text x="31" y="19" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#16A34A">Sponsored Ad</text>
              <line x1="8" y1="30" x2="96" y2="30" stroke="#0366A2" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="38" x2="84" y2="38" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              {/* Lead Conversion Bar */}
              <rect x="8" y="48" width="88" height="24" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="14" y="58" fontSize="5.5" fontWeight="bold" fill="#64748B">QUALIFIED LEADS</text>
              <text x="14" y="68" fontSize="8" fontWeight="900" fill="#10B981">+450 INQUIRIES</text>
              {/* Performance Pill */}
              <rect x="8" y="76" width="88" height="14" rx="3" fill="#10B981" />
              <text x="52" y="86" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">HIGH ROI CAMPAIGN</text>
            </g>
            {/* ROAS Metric Pill */}
            <g transform="translate(68, 142)">
              <rect x="0" y="0" width="94" height="20" rx="10" fill="#0366A2" stroke="#0F172A" strokeWidth="1.2" />
              <text x="47" y="13" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">5X ROAS TARGETING</text>
            </g>
          </svg>
        )

      case 'social-media-content':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Mobile Social Reel Mockup */}
            <g transform="translate(72, 38)">
              <rect x="0" y="0" width="72" height="114" rx="12" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              {/* Screen Area */}
              <rect x="4" y="6" width="64" height="102" rx="8" fill="#0F172A" />
              {/* Video Content Mockup */}
              <rect x="8" y="14" width="56" height="74" rx="6" fill="#0366A2" />
              {/* Play Button */}
              <circle cx="36" cy="51" r="14" fill="#FFFFFF" opacity="0.9" />
              <polygon points="32,44 44,51 32,58" fill="#0366A2" />
              {/* Engagement Heart & Comment Badges */}
              <circle cx="54" cy="74" r="6" fill="#EF4444" />
              <text x="54" y="78" fontSize="8" fill="#FFFFFF" textAnchor="middle">♥</text>
              {/* Caption lines */}
              <line x1="12" y1="94" x2="48" y2="94" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="100" x2="36" y2="100" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Content Calendar & Growth Card */}
            <g transform="translate(168, 44) rotate(-3)">
              <rect x="0" y="0" width="108" height="96" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="92" height="14" rx="2" fill="#F59E0B" />
              <text x="54" y="18" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">MONTHLY CALENDAR</text>
              {/* Grid representation */}
              <rect x="12" y="28" width="18" height="16" rx="2" fill="#F1F5F9" />
              <text x="21" y="39" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0F172A">REEL</text>
              <rect x="36" y="28" width="18" height="16" rx="2" fill="#F1F5F9" />
              <text x="45" y="39" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0F172A">POST</text>
              <rect x="60" y="28" width="18" height="16" rx="2" fill="#F1F5F9" />
              <text x="69" y="39" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0F172A">STORY</text>
              <rect x="84" y="28" width="12" height="16" rx="2" fill="#10B981" />
              <text x="90" y="39" fontSize="8" fill="#FFFFFF" textAnchor="middle">✓</text>
              {/* Community Engagement Metrics */}
              <rect x="12" y="52" width="84" height="20" rx="3" fill="#F0FDF4" stroke="#86EFAC" />
              <text x="18" y="62" fontSize="5.5" fontWeight="bold" fill="#64748B">ORGANIC FOLLOWER REACH</text>
              <text x="18" y="70" fontSize="7.5" fontWeight="900" fill="#16A34A">+120,000 VIEWS</text>
              <rect x="12" y="76" width="84" height="12" rx="2" fill="#0366A2" />
              <text x="54" y="85" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">ENGAGEMENT BOOST</text>
            </g>
          </svg>
        )

      default:
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            <rect x="100" y="60" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <circle cx="170" cy="105" r="24" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
            <text x="170" y="112" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0F172A">★</text>
          </svg>
        )
    }
  }

  // Exact 3 FAQs requested by the user
  const faqs = [
    {
      q: "Which service should I choose?",
      a: "Share your requirement and we will help you identify the relevant category."
    },
    {
      q: "Can I request more than one service?",
      a: "Yes, where relevant services can be coordinated together."
    },
    {
      q: "Are timelines and approvals guaranteed?",
      a: "No. They depend on the applicable authority, provider, documentation and current requirements."
    }
  ]

  return (
    <div className="ksfe-loans-category-page" style={{ backgroundColor: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>

      {/* Breadcrumb Navigation Bar */}
      <section style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "14px 0" }}>
        <div className="tf-container w-1780">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#64748b" }}>
            <Link href="/" style={{ color: "#0366a2", textDecoration: "none", fontWeight: 500 }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#0366a2", textDecoration: "none", fontWeight: 500 }}>
              Services
            </Link>
            <span>/</span>
            <span style={{ color: "#0f172a", fontWeight: 600 }}>
              Digital &amp; Marketing Services
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{
        padding: "70px 0 80px 0",
        background: "#ffffff",
        borderBottom: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="tf-container w-1780">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <div style={{ maxWidth: "620px" }}>

                {/* Main Heading */}
                <h1 style={{
                  fontSize: "clamp(34px, 3.8vw, 54px)",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "1.15",
                  letterSpacing: "0.2px",
                  marginBottom: "16px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Digital &amp; Marketing Services
                </h1>

                {/* Subheadline from User */}
                <h2 style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: "1.4",
                  marginBottom: "20px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Build Your Digital Presence, Strengthen Your Brand &amp; Reach Your Audience
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  A strong digital presence can help businesses build credibility, communicate their value and connect with potential customers.
                </p>

                {/* Buttons requested by user */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", marginBottom: "32px" }}>
                  <a
                    href="#services-list"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#0366a2",
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: "16px",
                      padding: "14px 32px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(3, 102, 162, 0.25)",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <span>Explore Services</span>
                    <span style={{ fontSize: "18px" }}>↓</span>
                  </a>

                  <a
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Digital%20%26%20Marketing%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#25d366",
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: "16px",
                      padding: "14px 28px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(37, 211, 102, 0.25)",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <span>Get Assistance</span>
                    <span style={{ fontSize: "18px" }}>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Graphic Photo Card on White */}
            <div className="col-lg-6">
              <div style={{ position: "relative", width: "100%", maxWidth: "560px", margin: "0 auto" }}>
                {/* Image Container with crisp white card backdrop & clean border */}
                <div style={{
                  background: "#ffffff",
                  borderRadius: "28px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
                  position: "relative",
                  height: "460px",
                  width: "100%"
                }}>
                  <Image
                    src="/images/services/9.png"
                    alt="Globon Digital & Marketing Services"
                    fill
                    sizes="(max-width: 991px) 100vw, 560px"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    priority
                  />
                </div>

                {/* Top-Right Floating Verified Badge */}
                <div
                  className="animate-float"
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "-12px",
                    background: "#ffffff",
                    borderRadius: "14px",
                    padding: "10px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    border: "1px solid #e2e8f0",
                    zIndex: 2
                  }}
                >
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#0366a2",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "800"
                  }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      VERIFIED
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>
                      Digital Growth Strategy
                    </div>
                  </div>
                </div>

                {/* Bottom-Left Floating Metric Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "-12px",
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "14px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.1)",
                    border: "1px solid #e2e8f0",
                    zIndex: 2
                  }}
                >
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    color: "#0366a2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      5x Inquiries
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Performance Marketing ROI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - White Background */}
      <section style={{ padding: "80px 0 60px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", marginBottom: "50px" }}>
            <span style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              padding: "6px 16px",
              borderRadius: "20px",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              color: "#475569",
              marginBottom: "14px"
            }}>
              OVERVIEW
            </span>
            <h2 style={{
              fontSize: "clamp(26px, 2.8vw, 36px)",
              fontWeight: 400,
              letterSpacing: "0.5px",
              color: "#000000",
              lineHeight: 1.3,
              marginBottom: "18px",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Comprehensive Web, Branding &amp; Growth Marketing Solutions
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Website, branding, digital marketing, advertising, social media and content services in one place. Globon helps organise the next steps and documentation relevant to your requirement.
            </p>
          </div>

          {/* 4 Feature Pillars Grid on Pure White */}
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px 22px",
                border: "1px solid #e2e8f0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#0366a2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  fontSize: "24px"
                }}>
                  💻
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Website &amp; Tech Solutions
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Ultra-fast, mobile-optimized modern websites and web applications built for business conversion.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px 22px",
                border: "1px solid #e2e8f0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#16a34a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  fontSize: "24px"
                }}>
                  🎨
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Creative Brand Identity
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Distinctive logo design, corporate color palettes, brochures, and complete brand asset kits.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px 22px",
                border: "1px solid #e2e8f0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  fontSize: "24px"
                }}>
                  🎯
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Performance Advertising
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Laser-targeted Google Search Ads and Meta campaigns generating qualified daily business leads.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px 22px",
                border: "1px solid #e2e8f0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#9333ea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  fontSize: "24px"
                }}>
                  📱
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Social Media &amp; Content
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Engaging monthly content calendars, Instagram reels, carousel graphic design, and organic reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-list" style={{ padding: "80px 0 100px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          {/* Header Row: Left title, Right button Explore All ↗ */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "36px"
          }}>
            <h2 style={{
              fontSize: "clamp(24px, 2.6vw, 36px)",
              fontWeight: "400",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#000000",
              margin: 0,
              fontFamily: "inherit"
            }}>
              DIGITAL &amp; MARKETING SERVICES
            </h2>

            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "6px",
                border: "1px solid #000000",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
            >
              <span>Explore All</span>
              <span style={{ fontSize: "16px", lineHeight: "1" }}>↗</span>
            </Link>
          </div>

          {/* 3 Cards per Row Grid - Left-Aligned matching UX standard */}
          <div className="row g-4">
            {category.services && category.services.length > 0 ? (
              category.services.map((service, idx) => (
                <div key={service.slug} className="col-12 col-md-6 col-lg-4">
                  <div className="loan-scheme-sig-card wow fadeInUp" data-wow-delay={`${(idx % 3) * 0.1}s`}>
                    <Link
                      href={`/services/${category.slug}/${service.slug}`}
                      className="ksfe-sig-visual-wrap"
                      aria-label={service.title}
                    >
                      {service.heroImage || service.image ? (
                        <Image
                          src={service.heroImage || service.image}
                          alt={service.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        getServiceIllustration(service.slug)
                      )}
                    </Link>

                    <div className="ksfe-sig-content">
                      <h3 className="ksfe-sig-card-title">
                        <Link
                          href={`/services/${category.slug}/${service.slug}`}
                          style={{ color: "#000000" }}
                        >
                          {service.title}
                        </Link>
                      </h3>

                      <p style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#0366a2",
                        lineHeight: "1.4",
                        marginBottom: "10px"
                      }}>
                        {service.subtitle || service.tagline}
                      </p>

                      <p className="ksfe-sig-card-desc">
                        {service.shortDesc}
                      </p>

                      <div className="ksfe-sig-divider" />

                      {service.highlights && service.highlights.length > 0 && (
                        <ul className="ksfe-sig-bullets">
                          {service.highlights.slice(0, 3).map((hl, i) => (
                            <li key={i} className="ksfe-sig-bullet-item">
                              <span className="bullet-asterisk">✻</span>
                              <Link
                                href={`/services/${category.slug}/${service.slug}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                              >
                                {hl}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '40px 20px', border: '1px dashed #cbd5e1' }}>
                  <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>
                    No services currently published in Digital &amp; Marketing Services. Added services from the Admin Studio will appear here automatically.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How We Help Section - Pure White Background */}
      <section style={{ padding: "90px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 60px auto" }}>
            <span style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              padding: "6px 16px",
              borderRadius: "20px",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              color: "#475569",
              marginBottom: "14px"
            }}>
              HOW WE HELP
            </span>
            <h2 style={{
              fontSize: "clamp(26px, 2.8vw, 36px)",
              fontWeight: 400,
              letterSpacing: "0.5px",
              color: "#000000",
              marginBottom: "16px",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Our 3-Step Guided Process
            </h2>
            <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: "1.6", color: "#4b5563" }}>
              We turn your digital goals into structured, measurable outcomes with dedicated creative support.
            </p>
          </div>

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-lg-4">
              <div
                className="help-pillar-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  position: "relative"
                }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "#0366a2",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "24px"
                }}>
                  01
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Understand your requirement and the relevant options
                </h3>
                <p style={{ fontSize: "17px", fontWeight: 400, color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                  We assess your current digital footprint, competitor landscape, target customer personas, and growth milestones to chart the optimal marketing roadmap.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-lg-4">
              <div
                className="help-pillar-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  position: "relative"
                }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "#0366a2",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "24px"
                }}>
                  02
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Help organise the information and documents
                </h3>
                <p style={{ fontSize: "17px", fontWeight: 400, color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                  Our team compiles brand vector assets, product catalogs, copywriting briefs, and advertising parameters to ensure seamless creative alignment.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-lg-4">
              <div
                className="help-pillar-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  position: "relative"
                }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "#0366a2",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "24px"
                }}>
                  03
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Coordinate the applicable process with the relevant provider or authority
                </h3>
                <p style={{ fontSize: "17px", fontWeight: 400, color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                  We coordinate website hosting deployment, Google &amp; Meta ad network setups, domain DNS verification, and scheduled publishing for continuous conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Clean Accordion with Poppins Typography */}
      <section style={{ padding: "90px 0 100px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div className="row align-items-center g-5">
            {/* Left Column: Title & Accordion */}
            <div className="col-lg-6">
              <div style={{ maxWidth: "620px" }}>
                <h2 style={{
                  fontSize: "clamp(24px, 2.6vw, 36px)",
                  fontWeight: 400,
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  lineHeight: 1.25,
                  marginBottom: "36px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  FREQUENTLY ASKED QUESTIONS
                </h2>

                <div className="globon-faq-accordion" style={{ borderTop: "1px solid #edf2f7" }}>
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx
                    return (
                      <div
                        key={idx}
                        style={{
                          borderBottom: "1px solid #edf2f7",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          style={{
                            width: "100%",
                            padding: "24px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "18px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left"
                          }}
                        >
                          <span style={{
                            fontSize: "clamp(18px, 1.4vw, 21px)",
                            fontWeight: 500,
                            color: isOpen ? "#0366a2" : "#0f172a",
                            lineHeight: 1.4,
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            {faq.q}
                          </span>
                          <span style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: isOpen ? "#0366a2" : "#f1f5f9",
                            color: isOpen ? "#ffffff" : "#475569",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            lineHeight: 1,
                            flexShrink: 0,
                            transition: "all 0.2s ease"
                          }}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div style={{ paddingBottom: "24px", paddingTop: "0" }}>
                            <p style={{
                              fontSize: "17px",
                              fontWeight: 400,
                              lineHeight: "1.7",
                              color: "#4b5563",
                              margin: 0
                            }}>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Reference Hero Graphic */}
            <div className="col-lg-6">
              <div style={{ position: "relative", maxWidth: "580px", margin: "0 auto" }}>
                {/* Dot Matrix Decoration at Top-Right */}
                <div
                  style={{
                    position: "absolute",
                    top: "-22px",
                    right: "24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 6px)",
                    gap: "10px",
                    zIndex: 1,
                    opacity: 0.8
                  }}
                >
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#f59e0b"
                      }}
                    />
                  ))}
                </div>

                {/* Floating Checkmark Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-12px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "#0284c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: "900",
                    boxShadow: "0 10px 24px rgba(2, 132, 199, 0.35)",
                    zIndex: 3
                  }}
                >
                  ✓
                </div>

                {/* The Graphic Image Frame */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/2",
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px rgba(15, 23, 42, 0.1)",
                  backgroundColor: "#f1f5f9"
                }}>
                  <Image
                    src="/images/section/faq1.png"
                    alt="Frequently Asked Questions - Digital & Marketing Services"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Full Width with Distinct Background Color */}
      <section
        id="contact-assistance"
        style={{
          padding: "90px 0 95px 0",
          background: "#edf5fd",
          borderTop: "1px solid #e0ecf8",
          borderBottom: "1px solid #e0ecf8",
          position: "relative"
        }}
      >
        <div className="tf-container w-1780">
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center"
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                padding: "6px 16px",
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #dbeafe",
                color: "#0366a2",
                marginBottom: "18px"
              }}
            >
              CONTACT US
            </span>

            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                fontWeight: 400,
                color: "#000000",
                lineHeight: "1.25",
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              Ready to explore digital &amp; marketing services?
            </h2>

            <p
              style={{
                fontSize: "17px",
                fontWeight: 400,
                color: "#4b5563",
                lineHeight: "1.6",
                marginBottom: "36px",
                maxWidth: "640px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Tell us what you need and we will help clarify the next steps.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a
                href="tel:+919846053539"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0366a2",
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(3, 102, 162, 0.25)",
                  transition: "all 0.25s ease"
                }}
              >
                <span>📞 Talk to Our Team</span>
                <span>→</span>
              </a>

              <a
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20digital%20%26%20marketing%20services.%20Please%20help%20me%20with%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#25d366",
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.25)",
                  transition: "all 0.25s ease"
                }}
              >
                <span>💬 Get Assistance</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
