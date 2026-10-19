'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function RealEstateCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for Real Estate Services
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'property-buying-selling':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Modern Residential Villa */}
            <g transform="translate(68, 44)">
              {/* Ground lawn */}
              <rect x="0" y="86" width="130" height="12" rx="3" fill="#10B981" />
              {/* Main Building House */}
              <rect x="18" y="32" width="76" height="56" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Roof */}
              <polygon points="56,6 100,32 12,32" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
              {/* Front Door */}
              <rect x="46" y="54" width="20" height="34" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="61" cy="72" r="2" fill="#F59E0B" />
              {/* Windows */}
              <rect x="25" y="44" width="16" height="18" rx="2" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.2" />
              <line x1="33" y1="44" x2="33" y2="62" stroke="#0F172A" strokeWidth="1" />
              <line x1="25" y1="53" x2="41" y2="53" stroke="#0F172A" strokeWidth="1" />
              <rect x="71" y="44" width="16" height="18" rx="2" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.2" />
              <line x1="79" y1="44" x2="79" y2="62" stroke="#0F172A" strokeWidth="1" />
              <line x1="71" y1="53" x2="87" y2="53" stroke="#0F172A" strokeWidth="1" />
              {/* Side Garage / Annex */}
              <rect x="94" y="46" width="30" height="42" rx="2" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.8" />
              <polygon points="109,28 126,46 92,46" fill="#0284C7" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="98" y1="56" x2="120" y2="56" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="98" y1="64" x2="120" y2="64" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="98" y1="72" x2="120" y2="72" stroke="#94A3B8" strokeWidth="1.5" />
            </g>
            {/* For Sale / Verified Signboard */}
            <g transform="translate(196, 42) rotate(4)">
              <rect x="0" y="0" width="84" height="60" rx="6" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
              <rect x="6" y="6" width="72" height="48" rx="3" fill="#FFFFFF" />
              <text x="42" y="22" fontSize="8" fontWeight="900" textAnchor="middle" fill="#0366A2">VERIFIED</text>
              <rect x="12" y="28" width="60" height="18" rx="2" fill="#10B981" />
              <text x="42" y="40" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">100% CLEAR TITLE</text>
              {/* Signboard Post */}
              <line x1="42" y1="60" x2="42" y2="108" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </g>
            {/* Key Handover Pill */}
            <g transform="translate(202, 134)">
              <rect x="0" y="0" width="84" height="22" rx="11" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              <text x="42" y="14" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#0F172A">KEY HANDOVER</text>
            </g>
          </svg>
        )

      case 'property-consultation-investment':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Real Estate Growth Analytics Graph */}
            <g transform="translate(68, 44)">
              {/* Frame */}
              <rect x="0" y="0" width="124" height="96" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Header */}
              <rect x="0" y="0" width="124" height="18" rx="6" fill="#1E293B" />
              <text x="62" y="12" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">PROPERTY ROI GROWTH</text>
              {/* Grid Lines */}
              <line x1="14" y1="84" x2="114" y2="84" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="14" y1="30" x2="14" y2="84" stroke="#0F172A" strokeWidth="1.5" />
              {/* Bar Charts */}
              <rect x="22" y="66" width="12" height="18" rx="1" fill="#BAE6FD" />
              <rect x="42" y="54" width="12" height="30" rx="1" fill="#60A5FA" />
              <rect x="62" y="44" width="12" height="40" rx="1" fill="#3B82F6" />
              <rect x="82" y="32" width="12" height="52" rx="1" fill="#0284C7" />
              {/* Ascending Trend Line */}
              <path d="M 28 62 L 48 50 L 68 40 L 98 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="98,18 104,27 92,27" fill="#10B981" />
            </g>
            {/* Commercial High-Rise Tower Card */}
            <g transform="translate(200, 38) rotate(4)">
              <rect x="0" y="0" width="76" height="106" rx="6" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
              {/* Windows Matrix */}
              <rect x="12" y="14" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="34" y="14" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="52" y="14" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="12" y="32" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="34" y="32" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="52" y="32" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="12" y="50" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="34" y="50" width="14" height="12" rx="1" fill="#BAE6FD" />
              <rect x="52" y="50" width="14" height="12" rx="1" fill="#BAE6FD" />
              {/* High Yield Badge */}
              <rect x="6" y="74" width="64" height="22" rx="4" fill="#10B981" />
              <text x="38" y="88" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">HIGH YIELD ROI</text>
            </g>
            {/* NRI Advisory Pill */}
            <g transform="translate(68, 142)">
              <rect x="0" y="0" width="94" height="20" rx="10" fill="#F1F5F9" stroke="#E2E8F0" />
              <text x="47" y="13" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0366A2">NRI INVESTMENT ADVISORY</text>
            </g>
          </svg>
        )

      case 'property-documentation':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Sale Deed Legal Document */}
            <g transform="translate(68, 42)">
              <rect x="0" y="0" width="108" height="106" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="92" height="14" rx="2" fill="#1E293B" />
              <text x="54" y="18" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.6">REGISTERED SALE DEED</text>
              {/* Document Text Lines */}
              <line x1="12" y1="32" x2="96" y2="32" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="40" x2="88" y2="40" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="48" x2="92" y2="48" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="56" x2="76" y2="56" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              {/* Official Red Wax Seal with Ribbon */}
              <circle cx="54" cy="78" r="14" fill="#DC2626" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="54" cy="78" r="10" fill="#EF4444" />
              <polygon points="50,90 44,104 54,99 64,104 58,90" fill="#DC2626" />
            </g>
            {/* 30-Year Encumbrance (EC) Search Certificate */}
            <g transform="translate(186, 44) rotate(-3)">
              <rect x="0" y="0" width="88" height="88" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="72" height="14" rx="2" fill="#0366A2" />
              <text x="44" y="18" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">30-YEAR EC</text>
              {/* Encumbrance Nil Badge */}
              <rect x="10" y="32" width="68" height="24" rx="4" fill="#F0FDF4" stroke="#86EFAC" />
              <text x="44" y="44" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#16A34A">NIL ENCUMBRANCE</text>
              <text x="44" y="52" fontSize="5.5" fontWeight="bold" textAnchor="middle" fill="#64748B">Title Scrutiny Passed</text>
              <rect x="10" y="64" width="68" height="14" rx="3" fill="#10B981" />
              <text x="44" y="74" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">POKKUVARAVU READY</text>
            </g>
            {/* Approved Stamp */}
            <g transform="translate(148, 120) rotate(-10)">
              <rect x="0" y="0" width="78" height="24" rx="4" fill="#10B981" stroke="#0F172A" strokeWidth="1.8" />
              <text x="39" y="16" fontSize="8" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">SUB-REGISTRAR</text>
            </g>
          </svg>
        )

      case 'construction-planning':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Architectural Blueprint Paper */}
            <g transform="translate(68, 44)">
              <rect x="0" y="0" width="118" height="96" rx="6" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
              {/* Grid Lines on Blueprint */}
              <line x1="0" y1="24" x2="118" y2="24" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              <line x1="0" y1="48" x2="118" y2="48" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              <line x1="0" y1="72" x2="118" y2="72" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              <line x1="30" y1="0" x2="30" y2="96" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              <line x1="60" y1="0" x2="60" y2="96" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              <line x1="90" y1="0" x2="90" y2="96" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
              {/* Floor Plan Drawing */}
              <rect x="18" y="28" width="82" height="52" fill="none" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="58" y1="28" x2="58" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="18" y1="54" x2="58" y2="54" stroke="#FFFFFF" strokeWidth="1.5" />
              <rect x="22" y="32" width="14" height="16" fill="#BAE6FD" opacity="0.5" />
              <text x="29" y="42" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">BED 1</text>
              <rect x="62" y="32" width="34" height="42" fill="#BAE6FD" opacity="0.5" />
              <text x="79" y="55" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">LIVING</text>
            </g>
            {/* Engineer Hardhat & Permit Card */}
            <g transform="translate(196, 42) rotate(4)">
              <rect x="0" y="0" width="82" height="88" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Hardhat */}
              <ellipse cx="41" cy="32" rx="22" ry="14" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 16 32 C 16 20 66 20 66 32 Z" fill="#FBBF24" />
              <rect x="14" y="30" width="54" height="4" rx="2" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.2" />
              <rect x="8" y="50" width="66" height="14" rx="2" fill="#1E293B" />
              <text x="41" y="60" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">PERMIT APPROVED</text>
              <rect x="8" y="68" width="66" height="12" rx="2" fill="#10B981" />
              <text x="41" y="77" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">MUNICIPAL SANCTION</text>
            </g>
            {/* 3D Elevation Pill */}
            <g transform="translate(202, 136)">
              <rect x="0" y="0" width="82" height="22" rx="11" fill="#0366A2" stroke="#0F172A" strokeWidth="1.5" />
              <text x="41" y="14" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">3D ELEVATION</text>
            </g>
          </svg>
        )

      case 'real-estate-finance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Bank Finance Building */}
            <g transform="translate(68, 44)">
              {/* Pediment / Roof */}
              <polygon points="56,8 112,30 0,30" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
              {/* Pillars */}
              <rect x="8" y="30" width="96" height="58" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.8" />
              <line x1="20" y1="30" x2="20" y2="88" stroke="#0366A2" strokeWidth="5" />
              <line x1="44" y1="30" x2="44" y2="88" stroke="#0366A2" strokeWidth="5" />
              <line x1="68" y1="30" x2="68" y2="88" stroke="#0366A2" strokeWidth="5" />
              <line x1="92" y1="30" x2="92" y2="88" stroke="#0366A2" strokeWidth="5" />
              {/* Steps */}
              <rect x="0" y="88" width="112" height="8" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Loan Sanction Certificate Card */}
            <g transform="translate(188, 42) rotate(4)">
              <rect x="0" y="0" width="88" height="96" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="72" height="14" rx="2" fill="#10B981" />
              <text x="44" y="18" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">LOAN SANCTION</text>
              <line x1="12" y1="32" x2="76" y2="32" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="40" x2="68" y2="40" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="8" y="52" width="72" height="20" rx="3" fill="#F0FDF4" stroke="#86EFAC" />
              <text x="44" y="64" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#16A34A">MORTGAGE APPROVED</text>
              <rect x="8" y="76" width="72" height="12" rx="2" fill="#0366A2" />
              <text x="44" y="85" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">PROJECT FUNDING</text>
            </g>
            {/* Rapid Sanctions Pill */}
            <g transform="translate(196, 142)">
              <rect x="0" y="0" width="92" height="20" rx="10" fill="#10B981" stroke="#0F172A" strokeWidth="1.2" />
              <text x="46" y="13" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">FAST-TRACK SYNDICATION</text>
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
              Real Estate Services
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
                  Real Estate Services
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
                  Buy, Sell, Plan, Document &amp; Finance Your Property With Practical Support
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  Real estate decisions often involve significant financial commitments, documentation and coordination.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Real%20Estate%20Services."
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
                    src="/images/services/8.png"
                    alt="Globon Real Estate Services"
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
                      Clear Title Properties
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
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      ₹250 Cr+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Property Value Coordinated
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
              End-to-End Real Estate, Documentation &amp; Construction Support
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Support for buying, selling, investing in, documenting, planning and financing property. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  🏡
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Verified Buying &amp; Selling
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Transparent matchmaking for residential plots, commercial properties, and luxury villas with zero dispute.
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
                  📜
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Legal Documentation
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  30-year title deed search, encumbrance verification, sale deed drafting, and village mutation assistance.
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
                  📐
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Construction &amp; Planning
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Sanctioned municipal building permits, modern structural blueprints, and bank-compliant cost estimations.
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
                  🏦
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Real Estate Finance
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Builder finance, project loan syndication, and high-ticket mortgage tie-ups through leading banks.
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
              REAL ESTATE SERVICES
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

          {/* 5 Cards Responsive Grid - Left-Aligned matching UX standard */}
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
                    No services currently published in Real Estate Services. Added services from the Admin Studio will appear here automatically.
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
              We eliminate uncertainty and legal friction with hands-on coordination at every step.
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
                  We assess your property goals, whether you are buying, selling, developing a plot, seeking legal title verification, or financing a construction venture.
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
                  Our team helps assemble prior title deeds, encumbrance certificates (EC), building sketches, revenue tax receipts, and bank loan documentation portfolios.
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
                  We coordinate directly with Sub-Registrar offices, licensed advocates, village mutation officers, municipal engineers, and bank lending officers for smooth execution.
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
                    alt="Frequently Asked Questions - Real Estate Services"
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
              Ready to explore real estate services?
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
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20real%20estate%20services.%20Please%20help%20me%20with%20the%20next%20steps."
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
