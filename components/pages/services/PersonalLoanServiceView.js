'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PersonalLoanServiceView() {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  const faqs = [
    {
      q: "Who can apply for personal loan assistance?",
      a: "It depends on the lender, income, credit profile and requested loan."
    },
    {
      q: "Which documents are required?",
      a: "The checklist above is indicative; your lender may request more."
    },
    {
      q: "Does Globon guarantee loan approval?",
      a: "No. The bank or financial institution makes the final decision."
    }
  ]

  return (
    <div className="personal-loan-detail-page" style={{ background: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
      {/* 1. Breadcrumb Bar */}
      <section className="ksfe-services-breadcrumb">
        <div className="tf-container w-1780">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#64748b" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#64748b", textDecoration: "none" }}>Services</Link>
            <span>/</span>
            <Link href="/services/loans-advances" style={{ color: "#64748b", textDecoration: "none" }}>Loans &amp; Advances</Link>
            <span>/</span>
            <span style={{ color: "#000000", fontWeight: "600" }}>Personal Loan Assistance</span>
          </div>
        </div>
      </section>

      {/* 2. Hero Banner (Matches User Image KSFE Cutout Style) */}
      <section style={{ padding: "40px 0 30px 0", background: "#ffffff" }}>
        <div className="tf-container w-1780">
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              minHeight: "440px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >
            {/* Background Family Photography on Right */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                overflow: "hidden",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(340px, 58%, 850px)",
                  height: "100%",
                  minHeight: "440px"
                }}
              >
                <Image
                  src="/images/services/deposit-schemes.png"
                  alt="Personal Loan Assistance - Happy Family"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                />
                {/* Soft Gradient Overlay for text contrast */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.9) 52%, rgba(255, 255, 255, 0.25) 72%, transparent 100%)"
                  }}
                />
              </div>
            </div>

            {/* Overlaid White Box with Cutout on Left (Matching Image 1) */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "#ffffff",
                padding: "clamp(32px, 3.8vw, 48px) clamp(28px, 3.8vw, 52px)",
                borderRadius: "24px 70px 24px 24px",
                maxWidth: "620px",
                margin: "clamp(20px, 3vw, 40px)",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.8)"
              }}
            >
              {/* Category Tag with Logo Blue Square */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#0366a2",
                    display: "inline-block",
                    borderRadius: "3px"
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#1e293b"
                  }}
                >
                  LOANS &amp; ADVANCES
                </span>
              </div>

              {/* Main Service Title */}
              <h1
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#000000",
                  lineHeight: "1.15",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2px"
                }}
              >
                PERSONAL LOAN ASSISTANCE
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#0366a2",
                  marginBottom: "12px",
                  lineHeight: "1.4"
                }}
              >
                Financial Support for Your Personal Needs
              </p>

              {/* Lead Paragraph */}
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: "1.65",
                  marginBottom: "28px"
                }}
              >
                Whether you are planning an important family expense, managing an unexpected requirement, funding education, improving your home, or handling another eligible personal expense, finding the right financing option can make the process easier.
              </p>

              {/* Logo Blue Button: Get Assistance ↗ */}
              <a
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Personal%20Loan%20Assistance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0366a2",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "14px 34px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(3, 102, 162, 0.3)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#004d7c"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0366a2"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <span>Get Assistance</span>
                <span style={{ fontSize: "18px", lineHeight: "1" }}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* 4. Section: Overview (Matches Bottom Half of User Image: Photo on Left + Green Checkmarks on Right) */}
      <section id="overview" style={{ padding: "70px 0 60px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div className="row g-5 align-items-center">
            {/* Left Portrait Photo with Rounded Corners (Matches Image 2) */}
            <div className="col-lg-5">
              <div
                style={{
                  position: "relative",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.08)",
                  minHeight: "440px",
                  height: "100%",
                  background: "#f1f5f9"
                }}
              >
                <Image
                  src="/images/services/loans-advances.png"
                  alt="Personal Loan Consultation"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%"
                  }}
                />
              </div>
            </div>

            {/* Right Side Content with Checkmark Bullets (Matches Image 2) */}
            <div className="col-lg-7">
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#0366a2",
                  marginBottom: "8px",
                  display: "inline-block"
                }}
              >
                OVERVIEW
              </span>

              <h2
                style={{
                  fontSize: "clamp(26px, 2.8vw, 36px)",
                  fontWeight: 600,
                  color: "#000000",
                  textTransform: "uppercase",
                  lineHeight: "1.25",
                  marginBottom: "18px"
                }}
              >
                PERSONAL LOAN ASSISTANCE
              </h2>

              <p
                style={{
                  fontSize: "17.5px",
                  fontWeight: 400,
                  color: "#334155",
                  lineHeight: "1.7",
                  marginBottom: "28px"
                }}
              >
                Globon helps you explore applicable personal loan options, prepare documents and coordinate the application process.
              </p>

              {/* Feature Checkmark List matching Globon logo blue ticks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Personalized guidance matching your unique financing requirement",
                  "Structured checklist for quick, hassle-free document preparation",
                  "Active coordination with leading financial institutions and banks",
                  "Clear, transparent communication at every step of your application"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span
                      style={{
                        color: "#0366a2",
                        fontSize: "20px",
                        fontWeight: "900",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "2px"
                      }}
                    >
                      ✔
                    </span>
                    <span style={{ fontSize: "16px", color: "#1e293b", lineHeight: "1.55", fontWeight: "400" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Options / Services */}
      <section id="options" style={{ padding: "70px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#0366a2",
                display: "inline-block",
                marginBottom: "6px"
              }}
            >
              ELIGIBLE PURPOSES
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 2.5vw, 34px)",
                fontWeight: 600,
                color: "#000000",
                textTransform: "uppercase",
                margin: 0
              }}
            >
              OPTIONS / SERVICES
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Family and Personal Expenses",
                desc: "Financial assistance for family milestones, weddings, emergency needs, and lifestyle requirements.",
                icon: "👨‍👩‍👧",
                bg: "#eff6ff",
                border: "#bfdbfe",
                iconBg: "#dbeafe",
                accent: "#0366a2",
                hoverShadow: "0 16px 36px rgba(3, 102, 162, 0.12)"
              },
              {
                title: "Medical or Education Expenses",
                desc: "Timely funding for higher studies, coaching admissions, medical treatments, or health emergencies.",
                icon: "🎓",
                bg: "#f0fdf4",
                border: "#bbf7d0",
                iconBg: "#dcfce7",
                accent: "#16a34a",
                hoverShadow: "0 16px 36px rgba(22, 163, 74, 0.12)"
              },
              {
                title: "Home Improvement & Eligible Needs",
                desc: "Financing for home renovation, interior upgrades, appliance purchases, and other eligible personal purposes.",
                icon: "🏡",
                bg: "#fffbeb",
                border: "#fde68a",
                iconBg: "#fef3c7",
                accent: "#d97706",
                hoverShadow: "0 16px 36px rgba(217, 119, 6, 0.12)"
              }
            ].map((option, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div
                  style={{
                    backgroundColor: option.bg,
                    borderRadius: "20px",
                    padding: "36px 30px",
                    border: `1px solid ${option.border}`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)"
                    e.currentTarget.style.boxShadow = option.hoverShadow
                    e.currentTarget.style.borderColor = option.accent
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.02)"
                    e.currentTarget.style.borderColor = option.border
                  }}
                >
                  {/* Decorative Icon Circle */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      backgroundColor: option.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      marginBottom: "20px",
                      border: `1px solid ${option.border}`
                    }}
                  >
                    {option.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#000000",
                      marginBottom: "12px",
                      lineHeight: "1.3"
                    }}
                  >
                    {option.title}
                  </h3>

                  <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.65", margin: 0, flexGrow: 1 }}>
                    {option.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: Features (Dark Navy Hero Card Matching User Image) */}
      <section id="features" style={{ padding: "70px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div
            className="personal-loan-features-card"
            style={{
              backgroundColor: "#0d1b2e",
              borderRadius: "32px",
              padding: "clamp(36px, 4.5vw, 56px) clamp(28px, 4.5vw, 60px)",
              boxShadow: "0 20px 48px rgba(13, 27, 46, 0.14)"
            }}
          >
            {/* Header: Title + Subtitle */}
            <div style={{ marginBottom: "26px" }}>
              <h2
                className="features-title"
                style={{
                  fontSize: "clamp(32px, 3.4vw, 44px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: "1.15",
                  marginBottom: "8px",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Features
              </h2>
              <span
                className="features-badge"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#38bdf8",
                  textTransform: "capitalize",
                  display: "inline-block"
                }}
              >
                Highlights
              </span>
            </div>

            {/* Subtle Divider Line */}
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                marginBottom: "38px"
              }}
            />

            {/* 4 Feature Items with Logo Blue Checkmark Icon on Top and Text Below */}
            <div className="row g-4">
              {[
                "Requirement-based option guidance",
                "Document checklist and preparation support",
                "Application coordination with the relevant lender",
                "Terms and approval depend on the lender and applicant"
              ].map((feature, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div
                      className="features-icon-circle"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#0366a2",
                        boxShadow: "0 4px 14px rgba(3, 102, 162, 0.45)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "18px",
                        flexShrink: 0
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p
                      className="features-item-text"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: "1.55",
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif"
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: Eligibility Criteria & Fees & Charges (2 Boxes Left & Right) */}
      <section style={{ padding: "70px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div className="row g-4 align-items-stretch">
            {/* Left Box: Eligibility Criteria */}
            <div className="col-12 col-lg-6" id="eligibility" style={{ scrollMarginTop: "120px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#0366a2",
                    display: "inline-block",
                    marginBottom: "6px"
                  }}
                >
                  CRITERIA
                </span>
                <h2
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 600,
                    color: "#000000",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  ELIGIBILITY CRITERIA
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  height: "calc(100% - 68px)",
                  minHeight: "140px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#eff6ff",
                    color: "#0366a2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0366a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="3" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#334155",
                      lineHeight: "1.75",
                      margin: 0
                    }}
                  >
                    Eligibility depends on the lender, applicant profile, income and repayment capacity, credit history, existing obligations and loan purpose. The lender confirms the final criteria.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Box: Fees & Charges */}
            <div className="col-12 col-lg-6" id="fees" style={{ scrollMarginTop: "120px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#0366a2",
                    display: "inline-block",
                    marginBottom: "6px"
                  }}
                >
                  TRANSPARENCY
                </span>
                <h2
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 600,
                    color: "#000000",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  FEES &amp; CHARGES
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  height: "calc(100% - 68px)",
                  minHeight: "140px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#fef3c7",
                    color: "#d97706",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#334155",
                      lineHeight: "1.75",
                      margin: 0
                    }}
                  >
                    Interest rates, processing fees, loan terms and other charges vary by lender and applicant. Review the lender’s written terms before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section: Documents Required */}
      <section id="documents" style={{ padding: "70px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div style={{ marginBottom: "32px", maxWidth: "860px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#0366a2",
                display: "inline-block",
                marginBottom: "6px"
              }}
            >
              CHECKLIST
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 2.5vw, 34px)",
                fontWeight: 600,
                color: "#000000",
                textTransform: "uppercase",
                marginBottom: "12px"
              }}
            >
              DOCUMENTS REQUIRED
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: "1.65",
                margin: 0
              }}
            >
              The documents required may vary depending on whether you are salaried, self-employed, or a business owner, as well as the requirements of the respective lender.
            </p>
          </div>

          {/* 2-Column Responsive Layout: Salaried vs. Self-Employed / Business */}
          <div className="row g-4" style={{ marginBottom: "28px" }}>
            {/* Salaried Applicants */}
            <div className="col-12 col-lg-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#f0fdf4",
                      color: "#16a34a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px"
                    }}
                  >
                    💼
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#000000",
                        margin: 0,
                        lineHeight: "1.25"
                      }}
                    >
                      Salaried Applicants
                    </h3>
                    <span style={{ fontSize: "13.5px", color: "#64748b" }}>Standard documentation for employed professionals</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                  {[
                    "PAN Card",
                    "Identity Proof",
                    "Address Proof",
                    "Recent salary slips",
                    "Bank account statements",
                    "Employment-related documents",
                    "Income tax documents, where applicable",
                    "Passport-size photograph"
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #f1f5f9"
                      }}
                    >
                      <span
                        style={{
                          color: "#0366a2",
                          fontSize: "17px",
                          fontWeight: "bold",
                          lineHeight: 1,
                          marginTop: "2px",
                          flexShrink: 0
                        }}
                      >
                        ✔
                      </span>
                      <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: "500", lineHeight: "1.4" }}>
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Self-Employed / Business Applicants */}
            <div className="col-12 col-lg-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#eff6ff",
                      color: "#0366a2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px"
                    }}
                  >
                    🏢
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#000000",
                        margin: 0,
                        lineHeight: "1.25"
                      }}
                    >
                      Self-Employed / Business Applicants
                    </h3>
                    <span style={{ fontSize: "13.5px", color: "#64748b" }}>Documentation for entrepreneurs, traders & proprietors</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                  {[
                    "PAN Card",
                    "Identity and address proof",
                    "Business registration documents",
                    "Bank statements",
                    "Income tax returns",
                    "Financial statements, where applicable",
                    "GST-related documents, where applicable",
                    "Business proof"
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #f1f5f9"
                      }}
                    >
                      <span
                        style={{
                          color: "#0366a2",
                          fontSize: "17px",
                          fontWeight: "bold",
                          lineHeight: 1,
                          marginTop: "2px",
                          flexShrink: 0
                        }}
                      >
                        ✔
                      </span>
                      <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: "500", lineHeight: "1.4" }}>
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Document Notices & Advisories in a Single Row */}
          <div className="row g-3" style={{ marginTop: "24px" }}>
            {/* Box 1: Additional Documents */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0
                    }}
                  >
                    📋
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#000000",
                      margin: 0,
                      lineHeight: "1.3"
                    }}
                  >
                    Additional Documents
                  </h4>
                </div>
                <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.55", margin: 0 }}>
                  Depending on your profile and loan requirement, the lender may request additional documents for verification.
                </p>
              </div>
            </div>

            {/* Box 2: Important Advisory */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fef3c7",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#92400e", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    IMPORTANT
                  </span>
                </div>
                <p style={{ fontSize: "13.5px", color: "#92400e", margin: 0, lineHeight: "1.55", fontWeight: "500" }}>
                  This is an indicative checklist. The final list depends on applicant profile, service scope and lender requirements.
                </p>
              </div>
            </div>

            {/* Box 3: Verification Note */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>ℹ️</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#334155" }}>
                    Verification Note
                  </span>
                </div>
                <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0, lineHeight: "1.55" }}>
                  The lender’s checklist differs by employment profile and loan product. Not every applicant needs every item.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section: Frequently Asked Questions (2-Column Layout Matching Reference Image) */}
      <section id="faqs" style={{ padding: "80px 0 90px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          <div className="row g-5 align-items-center">
            {/* Left Column: Heading + Accordion List */}
            <div className="col-lg-6">
              <div style={{ paddingRight: "clamp(0px, 3vw, 30px)" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#0366a2",
                    display: "inline-block",
                    marginBottom: "8px"
                  }}
                >
                  COMMON QUERIES
                </span>

                <h2
                  style={{
                    fontSize: "clamp(26px, 2.8vw, 38px)",
                    fontWeight: 600,
                    color: "#0f172a",
                    textTransform: "uppercase",
                    lineHeight: "1.2",
                    marginBottom: "32px",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx
                    return (
                      <div
                        key={idx}
                        style={{
                          borderBottom: "1px solid #e2e8f0",
                          padding: "20px 0",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          style={{
                            width: "100%",
                            padding: "6px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            gap: "16px"
                          }}
                        >
                          <span
                            style={{
                              fontSize: "17.5px",
                              fontWeight: 500,
                              color: isOpen ? "#0366a2" : "#0f172a",
                              lineHeight: "1.4",
                              fontFamily: "'Poppins', sans-serif",
                              transition: "color 0.2s ease"
                            }}
                          >
                            {faq.q}
                          </span>
                          <span
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              backgroundColor: isOpen ? "#0366a2" : "#edf5fd",
                              color: isOpen ? "#ffffff" : "#0366a2",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "20px",
                              fontWeight: "600",
                              flexShrink: 0,
                              transition: "all 0.25s ease"
                            }}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: "12px 0 6px 0",
                              fontSize: "16px",
                              color: "#475569",
                              lineHeight: "1.7"
                            }}
                          >
                            <p style={{ margin: 0 }}>
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

            {/* Right Column: Image with Floating Checkmark Badge and Orange Dots (Matches Image Exactly) */}
            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  padding: "26px 14px 20px 14px"
                }}
              >
                {/* Decorative Dots Matrix above image */}
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1
                  }}
                >
                  <svg width="110" height="24" viewBox="0 0 110 24" fill="none">
                    <circle cx="10" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="28" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="46" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="64" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="82" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="100" cy="5" r="2.8" fill="#F59E0B" />
                    <circle cx="10" cy="19" r="2.8" fill="#F59E0B" />
                    <circle cx="28" cy="19" r="2.8" fill="#F59E0B" />
                    <circle cx="46" cy="19" r="2.8" fill="#F59E0B" />
                    <circle cx="64" cy="19" r="2.8" fill="#F59E0B" />
                    <circle cx="82" cy="19" r="2.8" fill="#F59E0B" />
                    <circle cx="100" cy="19" r="2.8" fill="#F59E0B" />
                  </svg>
                </div>

                {/* Top-Right Floating Checkmark Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "2px",
                    zIndex: 4,
                    background: "#ffffff",
                    padding: "8px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)"
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "#0284c7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(2, 132, 199, 0.4)"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>

                {/* Main Image Box */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3/2",
                    borderRadius: "28px",
                    overflow: "hidden",
                    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.1)",
                    backgroundColor: "#f1f5f9"
                  }}
                >
                  <Image
                    src="/images/section/faq1.png"
                    alt="Frequently Asked Questions - Personal Loan Assistance"
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


      {/* 11. Contact Us Section - Full Width with Deep Navy Luxury Gradient */}
      <section
        id="contact"
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
              READY TO EXPLORE?
            </span>

            <h2
              className="globon-cta-heading"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                fontWeight: 600,
                color: "#ffffff",
                textTransform: "uppercase",
                lineHeight: "1.25",
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.5px"
              }}
            >
              CONTACT US
            </h2>

            <p
              className="globon-cta-desc"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                color: "#cbd5e1",
                lineHeight: "1.65",
                marginBottom: "38px",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Share your financing requirement and basic profile so we can help you understand the next steps. Loan approval and terms are decided by the lender.
            </p>

            {/* Buttons: Get Assistance | Talk to Our Team */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Personal%20Loan%20Assistance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(34, 197, 94, 0.35)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#16a34a"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#22c55e"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <span>💬 Get Assistance</span>
                <span>↗</span>
              </a>

              <a
                href="tel:+919846053539"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0284c7",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.35)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0369a1"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0284c7"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <span>📞 Talk to Our Team</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
