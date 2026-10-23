'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessFinancialCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Tailored Vector Illustrations for All 9 Business & Financial Solutions
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'business-registration-compliance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Certificate of Incorporation */}
            <rect x="75" y="48" width="130" height="106" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="85" y="58" width="110" height="12" rx="2" fill="#0284C7" />
            <text x="140" y="67" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="1">INCORPORATION</text>
            <line x1="88" y1="80" x2="192" y2="80" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="88" y1="90" x2="175" y2="90" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="88" y1="100" x2="185" y2="100" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            {/* Gold Seal & Ribbon */}
            <circle cx="175" cy="122" r="14" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
            <circle cx="175" cy="122" r="10" fill="#FDE047" />
            <polygon points="171,133 166,148 175,142 184,148 179,133" fill="#EF4444" stroke="#0F172A" strokeWidth="1.2" />
            {/* Government Stamp Badge */}
            <g transform="translate(210, 68) rotate(8)">
              <rect x="0" y="0" width="76" height="52" rx="6" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <text x="38" y="22" fontSize="9" fontWeight="900" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">ROC / MCA</text>
              <rect x="12" y="30" width="52" height="14" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1" />
              <text x="38" y="40" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">VERIFIED</text>
            </g>
            {/* Handshake Icon Badge */}
            <circle cx="95" cy="126" r="16" fill="#22C55E" stroke="#0F172A" strokeWidth="2" />
            <path d="M 88 126 L 93 131 L 102 121" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )

      case 'tax-accounting-services':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Ledger & Tax Document */}
            <rect x="70" y="52" width="118" height="102" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="80" y="62" width="98" height="12" rx="2" fill="#1F4E7A" />
            <text x="129" y="71" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">TAX &amp; ITR</text>
            {/* Bar Charts inside Document */}
            <rect x="84" y="112" width="14" height="28" rx="2" fill="#0284C7" stroke="#0F172A" strokeWidth="1.2" />
            <rect x="103" y="98" width="14" height="42" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.2" />
            <rect x="122" y="86" width="14" height="54" rx="2" fill="#22C55E" stroke="#0F172A" strokeWidth="1.2" />
            <line x1="80" y1="142" x2="178" y2="142" stroke="#0F172A" strokeWidth="1.5" />
            {/* Calculator Device */}
            <g transform="translate(198, 62)">
              <rect x="0" y="0" width="70" height="92" rx="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              <rect x="8" y="8" width="54" height="20" rx="3" fill="#A7F3D0" stroke="#0F172A" strokeWidth="1.5" />
              <text x="56" y="23" fontSize="11" fontWeight="900" textAnchor="end" fill="#065F46">₹ 0.00</text>
              {/* Buttons grid */}
              <circle cx="16" cy="40" r="5" fill="#475569" />
              <circle cx="35" cy="40" r="5" fill="#475569" />
              <circle cx="54" cy="40" r="5" fill="#F59E0B" />
              <circle cx="16" cy="56" r="5" fill="#475569" />
              <circle cx="35" cy="56" r="5" fill="#475569" />
              <circle cx="54" cy="56" r="5" fill="#0284C7" />
              <circle cx="16" cy="72" r="5" fill="#475569" />
              <circle cx="35" cy="72" r="5" fill="#475569" />
              <circle cx="54" cy="72" r="5" fill="#22C55E" />
            </g>
            {/* GST Seal */}
            <circle cx="162" cy="132" r="15" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
            <text x="162" y="136" fontSize="8" fontWeight="900" textAnchor="middle" fill="#0F172A">GST</text>
          </svg>
        )

      case 'licenses-certifications':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Official License Plaque */}
            <rect x="70" y="60" width="124" height="92" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="82" y="70" width="100" height="12" rx="2" fill="#0D9488" />
            <text x="132" y="79" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="0.8">FSSAI / TRADE</text>
            <line x1="84" y1="92" x2="180" y2="92" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="102" x2="160" y2="102" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="112" x2="175" y2="112" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            {/* ISO Quality Rosette Ribbon */}
            <g transform="translate(195, 48)">
              <circle cx="38" cy="38" r="28" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
              <circle cx="38" cy="38" r="22" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
              <text x="38" y="35" fontSize="10" fontWeight="900" textAnchor="middle" fill="#0F172A">ISO</text>
              <text x="38" y="47" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">9001</text>
              <polygon points="26,62 18,92 34,84 42,92 36,62" fill="#0284C7" stroke="#0F172A" strokeWidth="1.5" />
              <polygon points="48,62 42,92 50,84 66,92 58,62" fill="#0369A1" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Trademark Symbol Badge */}
            <circle cx="100" cy="130" r="14" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.8" />
            <text x="100" y="134" fontSize="11" fontWeight="900" textAnchor="middle" fill="#FFFFFF">™</text>
          </svg>
        )

      case 'business-planning-consultancy':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Detailed Project Report DPR Book */}
            <rect x="68" y="58" width="112" height="96" rx="5" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <rect x="78" y="66" width="92" height="80" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <text x="124" y="80" fontSize="8.5" fontWeight="900" textAnchor="middle" fill="#1F4E7A" letterSpacing="0.8">PROJECT DPR</text>
            <line x1="86" y1="92" x2="162" y2="92" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="86" y1="102" x2="150" y2="102" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="86" y1="112" x2="158" y2="112" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="86" y1="122" x2="140" y2="122" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            {/* Ascending Strategy Growth Arrow */}
            <g transform="translate(188, 52)">
              <circle cx="48" cy="48" r="38" fill="#ECFDF5" stroke="#0F172A" strokeWidth="2" />
              <path d="M 24 64 L 42 46 L 52 54 L 72 32" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="72,26 74,38 62,34" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Strategy Gear Badge */}
            <circle cx="166" cy="136" r="14" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
            <text x="166" y="141" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#0F172A">⚙</text>
          </svg>
        )

      case 'business-technology-solutions':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Modern Laptop with ERP CRM Dashboard */}
            <rect x="75" y="60" width="150" height="90" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="83" y="68" width="134" height="74" rx="3" fill="#0F172A" />
            {/* Laptop Base */}
            <polygon points="60,150 240,150 225,160 75,160" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />
            {/* Screen UI: Dashboard charts & bars */}
            <rect x="90" y="74" width="40" height="28" rx="2" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1" />
            <rect x="136" y="74" width="74" height="28" rx="2" fill="#064E3B" stroke="#34D399" strokeWidth="1" />
            <rect x="90" y="108" width="70" height="26" rx="2" fill="#312E81" stroke="#818CF8" strokeWidth="1" />
            <circle cx="188" cy="121" r="10" fill="#F59E0B" />
            {/* Cloud Sync Icon */}
            <g transform="translate(225, 46)">
              <ellipse cx="24" cy="24" rx="24" ry="16" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="16" cy="18" r="12" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="30" cy="14" r="14" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.8" />
              <ellipse cx="24" cy="24" rx="23" ry="14" fill="#BAE6FD" />
              <circle cx="16" cy="18" r="10" fill="#BAE6FD" />
              <circle cx="30" cy="14" r="12" fill="#BAE6FD" />
              <path d="M 18 24 L 24 18 L 30 24" fill="none" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        )

      case 'life-health-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Medical Cross Health Shield */}
            <path d="M 135 48 C 175 42 195 42 235 48 C 235 96 210 132 185 146 C 160 132 135 96 135 48 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M 143 56 C 175 51 195 51 227 56 C 227 96 205 125 185 137 C 165 125 143 96 143 56 Z" fill="#F0FDF4" />
            {/* Medical Red Cross */}
            <rect x="178" y="72" width="14" height="42" rx="3" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="164" y="86" width="42" height="14" rx="3" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
            {/* Family Protection Figures */}
            <g transform="translate(68, 80)">
              <circle cx="20" cy="20" r="12" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.8" />
              <path d="M 6 52 C 6 38 12 34 20 34 C 28 34 34 38 34 52" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="44" cy="24" r="10" fill="#EC4899" stroke="#0F172A" strokeWidth="1.8" />
              <path d="M 32 52 C 32 40 38 38 44 38 C 50 38 56 40 56 52" fill="#BE185D" stroke="#0F172A" strokeWidth="1.8" />
            </g>
            {/* Guarantee Heart Pulse Badge */}
            <circle cx="240" cy="120" r="18" fill="#FDE047" stroke="#0F172A" strokeWidth="2" />
            <path d="M 228 120 L 234 120 L 237 113 L 243 127 L 246 120 L 252 120" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )

      case 'vehicle-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Modern Streamlined Car Silhouette */}
            <g transform="translate(65, 78)">
              {/* Car Body */}
              <path d="M 12 45 C 22 28 45 15 80 15 C 115 15 138 28 155 35 L 182 38 C 192 40 198 48 198 56 L 198 64 L 6 64 C 6 56 8 48 12 45 Z" fill="#0284C7" stroke="#0F172A" strokeWidth="2.2" />
              {/* Windows */}
              <path d="M 46 22 L 78 22 L 78 38 L 28 38 C 34 30 38 25 46 22 Z" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 86 22 L 126 22 C 136 26 142 32 148 38 L 86 38 Z" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
              {/* Headlights */}
              <polygon points="190,44 198,46 198,54 188,52" fill="#FDE047" />
              {/* Wheels */}
              <circle cx="48" cy="64" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              <circle cx="48" cy="64" r="7" fill="#CBD5E1" />
              <circle cx="156" cy="64" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              <circle cx="156" cy="64" r="7" fill="#CBD5E1" />
            </g>
            {/* Floating Insurance Shield Badge */}
            <g transform="translate(225, 42)">
              <path d="M 0 6 C 18 0 28 0 46 6 C 46 32 30 48 23 54 C 16 48 0 32 0 6 Z" fill="#22C55E" stroke="#0F172A" strokeWidth="2" />
              <path d="M 13 25 L 20 32 L 34 16" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        )

      case 'property-business-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Commercial Storefront / Warehouse Building */}
            <rect x="75" y="70" width="135" height="80" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <polygon points="68,70 142,32 217,70" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.2" />
            {/* Shop Awning */}
            <polygon points="70,70 215,70 208,86 77,86" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
            <polygon points="90,70 108,70 103,86 85,86" fill="#FFFFFF" />
            <polygon points="126,70 144,70 139,86 121,86" fill="#FFFFFF" />
            <polygon points="162,70 180,70 175,86 157,86" fill="#FFFFFF" />
            {/* Glass Doors and Windows */}
            <rect x="85" y="96" width="40" height="42" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="145" y="96" width="50" height="54" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="170" y1="96" x2="170" y2="150" stroke="#0F172A" strokeWidth="1.5" />
            {/* Umbrella / Protection Shield */}
            <g transform="translate(196, 44)">
              <circle cx="36" cy="36" r="26" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
              {/* Umbrella canopy */}
              <path d="M 18 36 C 18 24 54 24 54 36 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1.8" />
              <line x1="36" y1="24" x2="36" y2="46" stroke="#0F172A" strokeWidth="2" />
              <path d="M 36 46 C 36 50 30 50 30 46" fill="none" stroke="#0F172A" strokeWidth="2" />
            </g>
          </svg>
        )

      case 'travel-group-insurance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Globe Grid */}
            <circle cx="120" cy="100" r="48" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="120" cy="100" rx="24" ry="48" fill="none" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="72" y1="100" x2="168" y2="100" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="84" y1="76" x2="156" y2="76" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="84" y1="124" x2="156" y2="124" stroke="#94A3B8" strokeWidth="1.2" />
            {/* Flight Airplane */}
            <g transform="translate(145, 54) rotate(-18)">
              <path d="M 0 16 L 36 12 L 56 0 L 64 2 L 48 16 L 76 17 L 84 10 L 90 11 L 84 21 L 90 31 L 84 32 L 76 25 L 48 26 L 64 40 L 56 42 L 36 30 L 0 26 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <polygon points="12,18 20,18 22,24 14,24" fill="#0284C7" />
            </g>
            {/* Group People Shield */}
            <g transform="translate(198, 92)">
              <rect x="0" y="0" width="76" height="52" rx="8" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
              <circle cx="24" cy="20" r="8" fill="#FDE047" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M 12 40 C 12 30 18 28 24 28 C 30 28 36 30 36 40" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.2" />
              <circle cx="48" cy="20" r="8" fill="#FDE047" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M 36 40 C 36 30 42 28 48 28 C 54 28 60 30 60 40" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.2" />
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
              Business &amp; Financial Solutions
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
                  Business &amp; Financial Solutions
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
                  Everything You Need to Start, Manage and Grow Your Business
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  From setting up your business and managing compliance to obtaining certifications, preparing project plans, and implementing business technology, Globon Business Solutions brings essential business services together in one place.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Business%20%26%20Financial%20Solutions."
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
                    src="/images/services/2.png"
                    alt="Globon Business & Financial Solutions"
                    fill
                    sizes="(max-width: 991px) 100vw, 560px"
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
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
                      Business Advisory
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
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      500+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Businesses Supported
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
              Everything You Need Under One Roof
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Business setup, tax and accounting, licences, consultancy, insurance and technology support for growing organisations. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  🏢
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Setup &amp; Compliance
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Pvt Ltd, LLP, Partnership incorporation, Udyam MSME, and local commercial licensing.
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
                  📊
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Tax &amp; Accounting
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Error-free GST returns, annual ITR filings, statutory audits, and professional bookkeeping.
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
                  Strategy &amp; Tech
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Detailed Project Reports (DPR), corporate legal contracts, and modern cloud ERP &amp; CRM.
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
                  Insurance Solutions
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Comprehensive life, medical, commercial vehicle, property, and group employee protection.
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
              BUSINESS &amp; FINANCIAL SERVICES
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

          {/* 9 Cards Grid matching Loans & Advances design */}
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
                    No services currently published in Business &amp; Financial Solutions. Added services from the Admin Studio will appear here automatically.
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
              We eliminate confusion and friction by coordinating your business and financial requirements from initial inquiry to execution.
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
                  We assess your exact business needs, review your profile and operational stage, and map out the most suitable statutory frameworks, registration types, and solution providers.
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
                  Our team provides a precise checklist, assists with document structuring, prepares bankable financial reports (CMA/DPR), and arranges statutory filings to ensure compliance.
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
                  We coordinate directly with government portals (MCA, GST, FSSAI, DGFT), authorized registrars, insurers, and technical teams to ensure seamless execution and timely delivery.
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
                    alt="Frequently Asked Questions - Business & Financial Solutions"
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
              Ready to explore business &amp; financial solutions?
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
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20business%20%26%20financial%20solutions.%20Please%20help%20me%20with%20the%20next%20steps."
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
