'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessPlanningCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for Planning & Consultancy Services
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'project-report-investment-plan':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Bound Project Report Book */}
            <rect x="68" y="52" width="118" height="102" rx="6" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <rect x="78" y="60" width="98" height="86" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <text x="127" y="76" fontSize="8" fontWeight="900" textAnchor="middle" fill="#1F4E7A" letterSpacing="0.8">PROJECT REPORT / DPR</text>
            {/* CMA Financial Projections Graph */}
            <line x1="86" y1="130" x2="166" y2="130" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="86" y1="90" x2="86" y2="130" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 92 124 L 110 110 L 130 116 L 158 94" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points="158,88 164,98 152,98" fill="#10B981" />
            {/* Bar Charts */}
            <rect x="94" y="116" width="10" height="14" fill="#BAE6FD" />
            <rect x="114" y="106" width="10" height="24" fill="#38BDF8" />
            <rect x="134" y="96" width="10" height="34" fill="#0284C7" />
            {/* Bank Sanction Stamp Badge */}
            <g transform="translate(196, 56) rotate(6)">
              <rect x="0" y="0" width="82" height="54" rx="6" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
              <text x="41" y="20" fontSize="8.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.5">BANKABLE</text>
              <rect x="10" y="28" width="62" height="16" rx="3" fill="#FFFFFF" />
              <text x="41" y="40" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#065F46">CMA &amp; TEV APPROVED</text>
            </g>
            {/* Financial Ratio Metric Badge */}
            <circle cx="236" cy="132" r="16" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
            <text x="236" y="136" fontSize="8" fontWeight="900" textAnchor="middle" fill="#0F172A">DSCR</text>
          </svg>
        )

      case 'legal-services':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Scales of Justice */}
            <g transform="translate(70, 48)">
              {/* Stand / Pillar */}
              <line x1="45" y1="20" x2="45" y2="95" stroke="#0F172A" strokeWidth="3" />
              <rect x="25" y="92" width="40" height="8" rx="2" fill="#1F4E7A" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="45" cy="18" r="6" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              {/* Beam */}
              <line x1="10" y1="28" x2="80" y2="28" stroke="#0F172A" strokeWidth="3" />
              {/* Left Pan */}
              <line x1="12" y1="28" x2="2" y2="52" stroke="#64748B" strokeWidth="1.2" />
              <line x1="12" y1="28" x2="22" y2="52" stroke="#64748B" strokeWidth="1.2" />
              <path d="M 0 52 C 0 60 24 60 24 52 Z" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
              {/* Right Pan */}
              <line x1="78" y1="28" x2="68" y2="52" stroke="#64748B" strokeWidth="1.2" />
              <line x1="78" y1="28" x2="88" y2="52" stroke="#64748B" strokeWidth="1.2" />
              <path d="M 66 52 C 66 60 90 60 90 52 Z" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Legal Contract Document with Red Wax Seal */}
            <g transform="translate(180, 50)">
              <rect x="0" y="0" width="85" height="104" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="69" height="12" rx="2" fill="#1F4E7A" />
              <text x="42" y="17" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.5">LEGAL CONTRACT</text>
              <line x1="10" y1="30" x2="75" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="40" x2="68" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="50" x2="72" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="60" x2="58" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              {/* Wax Seal */}
              <circle cx="42" cy="80" r="13" fill="#DC2626" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="42" cy="80" r="9" fill="#EF4444" />
              {/* Ribbons */}
              <polygon points="38,90 32,102 42,97 52,102 46,90" fill="#DC2626" />
            </g>
          </svg>
        )

      case 'abroad-study-consultancy':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Globe Grid */}
            <circle cx="115" cy="100" r="44" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="115" cy="100" rx="22" ry="44" fill="none" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="71" y1="100" x2="159" y2="100" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="82" y1="78" x2="148" y2="78" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="82" y1="122" x2="148" y2="122" stroke="#94A3B8" strokeWidth="1.2" />
            {/* Mortarboard Graduation Cap */}
            <g transform="translate(140, 44)">
              <ellipse cx="40" cy="35" rx="24" ry="9" fill="#0F172A" />
              <polygon points="40,8 80,22 40,36 0,22" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <circle cx="40" cy="22" r="3" fill="#F59E0B" />
              <path d="M 40 22 Q 68 25 74 38" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <rect x="72" y="38" width="4" height="10" rx="1.5" fill="#FBBF24" />
            </g>
            {/* Passport & Visa Document Card */}
            <g transform="translate(185, 78) rotate(6)">
              <rect x="0" y="0" width="75" height="65" rx="6" fill="#065F46" stroke="#0F172A" strokeWidth="1.8" />
              <rect x="6" y="6" width="63" height="53" rx="3" fill="#FFFFFF" />
              <text x="37" y="20" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#065F46">VISA APPROVED</text>
              <line x1="12" y1="28" x2="62" y2="28" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="36" x2="52" y2="36" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="48" cy="46" r="8" fill="#10B981" />
              <path d="M 44 46 L 47 49 L 52 43" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Flight Airplane */}
            <g transform="translate(75, 48) rotate(-22)">
              <path d="M 0 10 L 22 7 L 34 0 L 39 1 L 29 10 L 46 11 L 51 6 L 55 7 L 51 13 L 55 19 L 51 20 L 46 15 L 29 16 L 39 25 L 34 26 L 22 19 L 0 16 Z" fill="#0284C7" stroke="#0F172A" strokeWidth="1.2" />
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
              Business Planning &amp; Consultancy
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
                  Business Planning &amp; Consultancy
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
                  Plan Your Business, Organise Your Strategy &amp; Move Forward With the Right Guidance
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  Starting, expanding or restructuring a business often requires more than a good idea. Globon helps organise projects, investments, professional legal frameworks, and higher education guidance.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Business%20Planning%20%26%20Consultancy."
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
                    src="/images/services/4.png"
                    alt="Globon Business Planning & Consultancy"
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
                      Strategy Advisory
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
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      ₹500 Cr+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Projects Formulated
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
              Plan Projects, Organise Investments &amp; Move Forward
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Plan projects, organise investments, get professional support and prepare for your next business step. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  📈
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Project Reports (DPR)
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Bankable Detailed Project Reports, CMA financial data, and techno-economic feasibility studies.
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
                  ⚖️
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
                  Corporate contracts, employment agreements, NDAs, commercial lease deeds, and legal notices.
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
                  🎓
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Abroad Study Guidance
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Admissions shortlisting, statement of purpose (SOP) drafting, student visa filing, and education loans.
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
                  💼
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Investment Strategy
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Capital requirement planning, debt-equity mix optimization, and pitch preparation for investors.
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
              PLANNING &amp; CONSULTANCY SERVICES
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

          {/* 3 Cards Grid - Left-Aligned */}
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
                    No services currently published in Business Planning &amp; Consultancy. Added services from the Admin Studio will appear here automatically.
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
              We eliminate confusion and friction by coordinating your business planning, legal structuring, and higher education requirements.
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
                  We evaluate your venture plan, project investment requirements, legal scope, or international education profile to identify the clearest strategic roadmap.
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
                  Our team provides a precise checklist, prepares comprehensive Detailed Project Reports (DPR), drafts protective legal contracts, and organizes university application portfolios.
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
                  We coordinate directly with bank credit appraisal officers, legal advocates, and university international admissions teams to ensure fast approvals and seamless execution.
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
                    alt="Frequently Asked Questions - Business Planning & Consultancy"
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
              Ready to explore business planning &amp; consultancy?
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
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20business%20planning%20%26%20consultancy.%20Please%20help%20me%20with%20the%20next%20steps."
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
