'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessRegistrationCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for All 6 Business Registration & Compliance Services
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'private-limited-company':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Certificate of Incorporation */}
            <rect x="70" y="48" width="135" height="106" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="80" y="58" width="115" height="12" rx="2" fill="#1F4E7A" />
            <text x="137" y="67" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">CERTIFICATE OF INCORPORATION</text>
            <line x1="84" y1="80" x2="190" y2="80" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="90" x2="175" y2="90" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="100" x2="185" y2="100" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            {/* Ministry Emblem / Seal */}
            <circle cx="172" cy="122" r="14" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
            <circle cx="172" cy="122" r="10" fill="#FEF08A" />
            <polygon points="168,133 163,148 172,142 181,148 176,133" fill="#EF4444" stroke="#0F172A" strokeWidth="1.2" />
            {/* Corporate Shield Badge with CIN */}
            <g transform="translate(210, 64) rotate(6)">
              <rect x="0" y="0" width="76" height="56" rx="6" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
              <text x="38" y="20" fontSize="8" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.5">MCA SPICe+</text>
              <rect x="10" y="28" width="56" height="16" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
              <text x="38" y="40" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">CIN &amp; DIN</text>
            </g>
            {/* Verified Digital Signature Token */}
            <g transform="translate(86, 116)">
              <rect x="0" y="0" width="30" height="18" rx="4" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="6" y="4" width="8" height="10" rx="2" fill="#FFFFFF" />
              <circle cx="22" cy="9" r="3" fill="#FEF08A" />
            </g>
          </svg>
        )

      case 'llp-registration':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Protective Legal Shield */}
            <path d="M 140 48 C 175 42 195 42 230 48 C 230 96 205 132 185 146 C 165 132 140 96 140 48 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M 148 56 C 175 51 195 51 222 56 C 222 96 200 125 185 137 C 170 125 148 96 148 56 Z" fill="#E0F2FE" />
            <text x="185" y="86" fontSize="12" fontWeight="900" textAnchor="middle" fill="#0369A1" letterSpacing="1">LLP</text>
            <text x="185" y="102" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">AGREEMENT</text>
            {/* Two Partner Figures */}
            <g transform="translate(68, 76)">
              <circle cx="20" cy="20" r="14" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
              <path d="M 4 56 C 4 40 10 36 20 36 C 30 36 36 40 36 56" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <polygon points="18,36 22,36 20,44" fill="#F59E0B" />
              <circle cx="52" cy="22" r="14" fill="#34D399" stroke="#0F172A" strokeWidth="2" />
              <path d="M 36 56 C 36 42 42 38 52 38 C 62 38 68 42 68 56" fill="#065F46" stroke="#0F172A" strokeWidth="2" />
              <polygon points="50,38 54,38 52,46" fill="#F59E0B" />
            </g>
            {/* Handshake Verified Badge */}
            <circle cx="238" cy="116" r="16" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            <path d="M 230 116 L 235 121 L 246 110" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )

      case 'partnership-deed-registration':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Stamp Paper Parchment */}
            <rect x="75" y="46" width="130" height="110" rx="5" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2" />
            {/* Government Stamp Paper Header */}
            <rect x="85" y="54" width="110" height="18" rx="3" fill="#D97706" />
            <text x="140" y="66" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">INDIA NON JUDICIAL</text>
            <line x1="88" y1="84" x2="192" y2="84" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            <line x1="88" y1="94" x2="180" y2="94" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            <line x1="88" y1="104" x2="188" y2="104" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            {/* Signature Lines & Pen */}
            <line x1="88" y1="126" x2="128" y2="126" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="148" y1="126" x2="188" y2="126" stroke="#0F172A" strokeWidth="1.5" />
            <text x="108" y="136" fontSize="6.5" fontStyle="italic" textAnchor="middle" fill="#64748B">Partner 1</text>
            <text x="168" y="136" fontSize="6.5" fontStyle="italic" textAnchor="middle" fill="#64748B">Partner 2</text>
            {/* Red Wax Seal */}
            <circle cx="140" cy="116" r="13" fill="#DC2626" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="140" cy="116" r="9" fill="#EF4444" />
            {/* Registrar of Firms Stamp */}
            <g transform="translate(210, 68) rotate(12)">
              <rect x="0" y="0" width="70" height="50" rx="6" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <text x="35" y="20" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">ROF</text>
              <rect x="8" y="26" width="54" height="15" rx="3" fill="#38BDF8" />
              <text x="35" y="37" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">REGISTERED</text>
            </g>
          </svg>
        )

      case 'startup-india-dpiit-recognition':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Upward Launch Rocket */}
            <g transform="translate(100, 40)">
              {/* Rocket Body */}
              <path d="M 40 10 C 65 30 70 70 70 95 L 10 95 C 10 70 15 30 40 10 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <polygon points="40,10 50,32 30,32" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
              {/* Round Window */}
              <circle cx="40" cy="50" r="14" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
              <circle cx="40" cy="50" r="9" fill="#BAE6FD" />
              {/* Wings */}
              <polygon points="10,80 -8,105 10,100" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
              <polygon points="70,80 88,105 70,100" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
              {/* Fire Flame */}
              <polygon points="25,95 40,125 55,95" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              <polygon points="32,95 40,115 48,95" fill="#FEF08A" />
            </g>
            {/* DPIIT Recognition Certificate Plaque */}
            <g transform="translate(185, 52)">
              <rect x="0" y="0" width="85" height="95" rx="6" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <rect x="6" y="6" width="73" height="83" rx="4" fill="#FFFFFF" />
              <text x="42" y="24" fontSize="8" fontWeight="900" textAnchor="middle" fill="#D97706" letterSpacing="0.5">DPIIT</text>
              <line x1="14" y1="34" x2="70" y2="34" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="44" x2="64" y2="44" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="54" x2="68" y2="54" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              {/* 80-IAC Tax Exemption Badge */}
              <rect x="12" y="64" width="60" height="18" rx="4" fill="#10B981" />
              <text x="42" y="76" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">80-IAC TAX FREE</text>
            </g>
          </svg>
        )

      case 'udyam-registration':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* MSME Official Certificate Card */}
            <rect x="70" y="52" width="125" height="100" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="80" y="62" width="105" height="14" rx="3" fill="#0D9488" />
            <text x="132" y="72" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">UDYAM MSME</text>
            <line x1="84" y1="88" x2="180" y2="88" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="84" y1="98" x2="165" y2="98" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="84" y1="108" x2="175" y2="108" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            {/* Government Emblem Symbol */}
            <circle cx="170" cy="128" r="14" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
            <text x="170" y="132" fontSize="10" fontWeight="900" textAnchor="middle" fill="#0F172A">🇮🇳</text>
            {/* Micro/Small/Medium Tag Stack */}
            <g transform="translate(205, 54)">
              <rect x="0" y="0" width="70" height="26" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
              <text x="35" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#38BDF8">MICRO</text>
              <rect x="0" y="32" width="70" height="26" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
              <text x="35" y="48" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#34D399">SMALL</text>
              <rect x="0" y="64" width="70" height="26" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
              <text x="35" y="80" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FBBF24">MEDIUM</text>
            </g>
          </svg>
        )

      case 'shops-establishments-registration':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Kerala Storefront / Commercial Establishment */}
            <rect x="75" y="70" width="130" height="80" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <polygon points="68,70 140,34 212,70" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.2" />
            <rect x="135" y="48" width="10" height="12" fill="#FEF08A" />
            {/* Awning */}
            <polygon points="70,70 210,70 204,86 76,86" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
            <polygon points="88,70 104,70 100,86 84,86" fill="#FFFFFF" />
            <polygon points="120,70 136,70 132,86 116,86" fill="#FFFFFF" />
            <polygon points="152,70 168,70 164,86 148,86" fill="#FFFFFF" />
            <polygon points="184,70 200,70 196,86 180,86" fill="#FFFFFF" />
            {/* Storefront Door & Windows */}
            <rect x="85" y="96" width="40" height="42" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="145" y="96" width="48" height="54" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="168" y1="96" x2="168" y2="150" stroke="#0F172A" strokeWidth="1.5" />
            {/* Official Municipal / Panchayat License Seal */}
            <g transform="translate(202, 54)">
              <circle cx="34" cy="34" r="28" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
              <circle cx="34" cy="34" r="22" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.2" />
              <text x="34" y="32" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#0F172A">TRADE</text>
              <text x="34" y="42" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">PERMIT</text>
              <polygon points="26,56 20,80 32,74 38,80 34,56" fill="#EF4444" stroke="#0F172A" strokeWidth="1.2" />
              <polygon points="42,56 36,80 44,74 56,80 50,56" fill="#DC2626" stroke="#0F172A" strokeWidth="1.2" />
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
              Business Registration &amp; Compliance
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
                  Business Registration &amp; Compliance
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
                  Start Your Business on the Right Foundation
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  Setting up a business involves more than choosing a name. Globon helps organise company formation, LLP setup, partnership deed drafting, MSME Udyam, Startup India recognition, and local commercial registrations.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Business%20Registration%20%26%20Compliance."
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
                    src="/images/services/3.png"
                    alt="Globon Business Registration"
                    fill
                    sizes="(max-width: 991px) 100vw, 560px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
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
                      Incorporation Partner
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      1,000+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Businesses Registered
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
              Start Your Business on the Right Foundation
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Choose support for company, LLP, partnership, startup, MSME or establishment registration. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  🏛️
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Corporate Structures
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Private Limited and One Person Company incorporation with MCA, SPICe+, and PAN/TAN.
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
                  🤝
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  LLP &amp; Partnerships
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Limited Liability Partnerships and formal deed notarization with Registrar of Firms (ROF).
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
                  🚀
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Startup &amp; MSME
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  DPIIT Startup India tax exemptions and official Udyam MSME certification with CGTMSE access.
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
                  Local Body Permits
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Kerala Shops &amp; Commercial Establishments Act registration and municipal trade licensing.
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
              REGISTRATION &amp; COMPLIANCE SERVICES
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

          {/* 6 Cards Grid matching Loans & Advances design */}
          <div className="row g-4">
            {category.services && category.services.length > 0 ? (
              category.services.map((service, idx) => (
                <div key={service.slug} className="col-12 col-sm-6 col-lg-4 col-xl-4">
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
                    No services currently published in Business Registration &amp; Compliance. Added services from the Admin Studio will appear here automatically.
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
              We eliminate confusion and friction by coordinating your business registration from initial inquiry to final certificate delivery.
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
                  We assess your exact business model, promoter structure, and commercial goals to identify the most suitable legal entity (Pvt Ltd, LLP, Partnership) and statutory registrations.
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
                  Our team provides a precise documentation checklist, drafts customized MoA/AoA, partnership deeds, and structures digital signature certificates (DSC) and DIN records.
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
                  We coordinate directly with government portals (MCA, Registrar of Firms, MSME, DPIIT, and local body labor departments) to ensure rapid approvals and delivery of your Certificate of Incorporation.
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
                              color: "#475569",
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
                    alt="Frequently Asked Questions - Business Registration & Compliance"
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
              Ready to explore business registration &amp; compliance?
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
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20business%20registration%20%26%20compliance.%20Please%20help%20me%20with%20the%20next%20steps."
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
