'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TravelGroupCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for Travel & Group Insurance
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'travel-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* World Globe with Lat/Long lines */}
            <g transform="translate(62, 42)">
              <circle cx="50" cy="50" r="44" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2" />
              <ellipse cx="50" cy="50" rx="22" ry="44" fill="none" stroke="#94A3B8" strokeWidth="1.2" />
              <line x1="6" y1="50" x2="94" y2="50" stroke="#94A3B8" strokeWidth="1.2" />
              <line x1="17" y1="28" x2="83" y2="28" stroke="#94A3B8" strokeWidth="1.2" />
              <line x1="17" y1="72" x2="83" y2="72" stroke="#94A3B8" strokeWidth="1.2" />
              {/* Airplane in Flight */}
              <g transform="translate(48, 12) rotate(-28)">
                <path d="M 0 10 L 22 7 L 34 0 L 39 1 L 29 10 L 46 11 L 51 6 L 55 7 L 51 13 L 55 19 L 51 20 L 46 15 L 29 16 L 39 25 L 34 26 L 22 19 L 0 16 Z" fill="#0366A2" stroke="#0F172A" strokeWidth="1.2" />
              </g>
            </g>
            {/* Passport & Boarding Ticket Card */}
            <g transform="translate(182, 42) rotate(4)">
              {/* Passport */}
              <rect x="0" y="0" width="76" height="104" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              <circle cx="38" cy="42" r="14" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="38" y="24" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">PASSPORT</text>
              <text x="38" y="46" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#F59E0B">★</text>
              <rect x="12" y="72" width="52" height="18" rx="3" fill="#10B981" />
              <text x="38" y="84" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">VISA READY</text>
            </g>
            {/* Suitcase / Baggage Protection Pill */}
            <g transform="translate(196, 134)">
              <rect x="0" y="0" width="88" height="22" rx="11" fill="#0366A2" stroke="#0F172A" strokeWidth="1.5" />
              <text x="44" y="14" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">150+ COUNTRIES</text>
            </g>
          </svg>
        )

      case 'group-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Enterprise Team / Group Workforce Nodes */}
            <g transform="translate(64, 44)">
              {/* Corporate Tower / Organization Symbol */}
              <rect x="36" y="8" width="56" height="88" rx="4" fill="#0366A2" stroke="#0F172A" strokeWidth="2" />
              {/* Windows Grid */}
              <rect x="44" y="16" width="10" height="12" rx="1" fill="#BAE6FD" />
              <rect x="62" y="16" width="10" height="12" rx="1" fill="#BAE6FD" />
              <rect x="44" y="34" width="10" height="12" rx="1" fill="#BAE6FD" />
              <rect x="62" y="34" width="10" height="12" rx="1" fill="#BAE6FD" />
              <rect x="44" y="52" width="10" height="12" rx="1" fill="#BAE6FD" />
              <rect x="62" y="52" width="10" height="12" rx="1" fill="#BAE6FD" />
              {/* Group Employee Avatars */}
              <g transform="translate(0, 48)">
                {/* Person 1 */}
                <circle cx="16" cy="16" r="8" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
                <path d="M 4 44 C 4 30 28 30 28 44 Z" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
              </g>
              <g transform="translate(86, 48)">
                {/* Person 2 */}
                <circle cx="16" cy="16" r="8" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
                <path d="M 4 44 C 4 30 28 30 28 44 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              </g>
            </g>
            {/* Corporate Health E-Card */}
            <g transform="translate(182, 46) rotate(-3)">
              <rect x="0" y="0" width="104" height="66" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="88" height="14" rx="2" fill="#0284C7" />
              <text x="52" y="18" fontSize="6.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">GROUP MEDICLAIM</text>
              <circle cx="22" cy="40" r="10" fill="#F1F5F9" />
              <text x="22" y="44" fontSize="10" textAnchor="middle" fill="#0366A2">👥</text>
              <line x1="38" y1="34" x2="88" y2="34" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="38" y1="44" x2="78" y2="44" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="8" y="52" width="88" height="8" rx="2" fill="#F0FDF4" />
              <text x="52" y="58" fontSize="5.5" fontWeight="bold" textAnchor="middle" fill="#16A34A">DAY-1 PRE-EXISTING COVER</text>
            </g>
            {/* Zero Waiting Period Badge */}
            <g transform="translate(196, 126)">
              <rect x="0" y="0" width="94" height="22" rx="11" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
              <text x="47" y="14" fontSize="7.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF">0-DAY WAITING PERIOD</text>
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
              Travel &amp; Group Insurance
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
                  Travel &amp; Group Insurance
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
                  Protect Your Journeys, Employees &amp; Groups With Suitable Insurance Support
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  Travel often involves unexpected risks, while organisations may need insurance protection for employees, members or other eligible groups.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Travel%20%26%20Group%20Insurance."
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
                    src="/images/services/7.png"
                    alt="Globon Travel & Group Insurance"
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
                      Global &amp; Corporate Cover
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
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      150+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Countries Covered
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
              Worldwide Travel Protection &amp; Organisation Group Plans
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Explore travel protection and group insurance options for individuals and organisations. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  ✈️
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Overseas Travel Cover
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Emergency medical hospitalization, flight delay compensation, and Schengen/US visa compliance.
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
                  👥
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Group Mediclaim
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Comprehensive health coverage for employees and families with zero waiting periods.
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
                  🛡️
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Accident &amp; Disability
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Group personal accident (GPA) and workmen compensation safety nets for staff and member groups.
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
                  Corporate Tax Savings
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Group insurance premiums qualify as 100% tax-deductible operational business expenses.
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
              TRAVEL &amp; GROUP INSURANCE SERVICES
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

          {/* 2 Cards Centered Grid matching Loans & Advances design */}
          <div className="row g-4 justify-content-center">
            {category.services && category.services.length > 0 ? (
              category.services.map((service, idx) => (
                <div key={service.slug} className="col-12 col-md-6 col-lg-5">
                  <div className="loan-scheme-sig-card wow fadeInUp" data-wow-delay={`${(idx % 2) * 0.1}s`}>
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
                    No services currently published in Travel &amp; Group Insurance. Added services from the Admin Studio will appear here automatically.
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
              We eliminate friction and paperwork complexities with dedicated insurance coordination at every stage.
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
                  We evaluate your travel destinations, Schengen or student visa mandates, or company employee demographics to identify the most suitable coverage options and limits.
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
                  Our team compiles passport numbers, itinerary schedules, employee census spreadsheets, and member KYC portfolios to ensure smooth and transparent underwriting.
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
                  We coordinate directly with accredited insurance underwriters and global assistance providers for instant visa-compliant certificates and seamless group cashless onboarding.
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
                    alt="Frequently Asked Questions - Travel & Group Insurance"
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

      {/* Contact Us Section - Full Width with Deep Navy Luxury Gradient */}
      <section
        id="contact-assistance"
        className="globon-navy-cta-section"
        style={{
          padding: "95px 0 100px 0",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(3, 102, 162, 0.45) 0%, rgba(6, 25, 46, 0) 100%), linear-gradient(135deg, #06192e 0%, #0a2540 50%, #032d4e 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="tf-container w-1780" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center"
            }}
          >
            <span
              className="globon-cta-badge"
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                padding: "7px 18px",
                borderRadius: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                backdropFilter: "blur(8px)",
                marginBottom: "20px"
              }}
            >
              CONTACT US
            </span>

            <h2
              className="globon-cta-heading"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: "1.25",
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.5px"
              }}
            >
              Ready to explore travel &amp; group insurance?
            </h2>

            <p
              className="globon-cta-desc"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                color: "#cbd5e1",
                lineHeight: "1.65",
                marginBottom: "38px",
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
                  backgroundColor: "#0284c7",
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.35)",
                  transition: "all 0.25s ease"
                }}
              >
                <span>📞 Talk to Our Team</span>
                <span>→</span>
              </a>

              <a
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20travel%20%26%20group%20insurance.%20Please%20help%20me%20with%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(34, 197, 94, 0.35)",
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
