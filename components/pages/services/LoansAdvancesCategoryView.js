'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoansAdvancesCategoryView({ category }) {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx))
  }

  // Image 2 Style Tailored Vector Illustrations for All 10 Loan Schemes
  const getServiceIllustration = (slug) => {
    switch (slug) {
      case 'personal-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Person Silhouette Badge */}
            <circle cx="100" cy="96" r="38" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2" />
            <path d="M 76 130 C 76 114 86 110 100 110 C 114 110 124 114 124 130" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <polygon points="96,110 104,110 100,120" fill="#F59E0B" />
            <circle cx="100" cy="88" r="14" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
            <path d="M 96 91 Q 100 94 104 91" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
            {/* Wallet with Cash Notes */}
            <rect x="142" y="86" width="105" height="66" rx="8" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <g transform="translate(150, 52) rotate(-6)">
              <rect x="0" y="0" width="68" height="36" rx="4" fill="#34D399" stroke="#0F172A" strokeWidth="1.8" />
              <ellipse cx="34" cy="18" rx="10" ry="7" fill="#A7F3D0" stroke="#0F172A" strokeWidth="1" />
              <text x="34" y="22" fontSize="10" fontWeight="900" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
            <g transform="translate(170, 48) rotate(5)">
              <rect x="0" y="0" width="68" height="36" rx="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.8" />
              <ellipse cx="34" cy="18" rx="10" ry="7" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1" />
              <text x="34" y="22" fontSize="10" fontWeight="900" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
            <path d="M 142 112 Q 182 125 222 108 L 247 115 L 247 152 L 142 152 Z" fill="#2563EB" stroke="#0F172A" strokeWidth="2" />
            <rect x="225" y="108" width="18" height="15" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="234" cy="115" r="2.5" fill="#0F172A" />
            {/* Instant Approval Star Badge */}
            <circle cx="264" cy="46" r="15" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
            <path d="M 258 46 L 263 51 L 271 41" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Silver Coin Stack */}
            <g transform="translate(90, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'education-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Books Stack */}
            <rect x="75" y="126" width="135" height="24" rx="4" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <rect x="82" y="130" width="122" height="16" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="85" y="104" width="120" height="22" rx="4" fill="#3B82F6" stroke="#0F172A" strokeWidth="2" />
            <rect x="92" y="108" width="107" height="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 195 108 L 204 136 L 199 132 L 194 136 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1" />
            {/* Mortarboard Graduation Cap */}
            <ellipse cx="145" cy="90" rx="36" ry="14" fill="#0F172A" />
            <polygon points="145,50 205,68 145,86 85,68" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="145" cy="68" rx="4.5" ry="2.5" fill="#F59E0B" />
            <path d="M 145 68 Q 185 72 195 92" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="192" y="92" width="6" height="14" rx="2" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
            {/* Rolled Diploma Scroll */}
            <g transform="translate(225, 65) rotate(25)">
              <rect x="0" y="0" width="65" height="24" rx="6" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2" />
              <rect x="25" y="-2" width="12" height="28" rx="2" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="31" cy="12" r="7" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Idea Lightbulb */}
            <g transform="translate(255, 30)">
              <circle cx="15" cy="15" r="12" fill="#FDE047" stroke="#0F172A" strokeWidth="1.8" />
              <rect x="10" y="24" width="10" height="6" rx="2" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.2" />
            </g>
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'retailer-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Retail Storefront */}
            <rect x="65" y="72" width="115" height="80" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="80" y="52" width="85" height="20" rx="3" fill="#1F4E7A" stroke="#0F172A" strokeWidth="1.8" />
            <text x="122" y="66" fontSize="9.5" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" letterSpacing="1">RETAIL</text>
            <polygon points="58,72 188,72 182,90 64,90" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
            <polygon points="76,72 96,72 91,90 71,90" fill="#FFFFFF" />
            <polygon points="116,72 136,72 131,90 111,90" fill="#FFFFFF" />
            <polygon points="156,72 176,72 171,90 151,90" fill="#FFFFFF" />
            <rect x="75" y="98" width="55" height="42" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="138" y="98" width="32" height="54" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="144" cy="125" r="2.2" fill="#0F172A" />
            {/* POS Card Machine */}
            <polygon points="195,105 240,95 255,145 210,155" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <polygon points="201,110 235,102 241,126 207,134" fill="#0EA5E9" stroke="#0F172A" strokeWidth="1.5" />
            <text x="221" y="122" fontSize="9" fontWeight="900" fill="#FFFFFF">₹</text>
            <rect x="210" y="80" width="34" height="20" rx="2" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.2" />
            {/* Shopping Bag */}
            <polygon points="256,112 288,112 295,152 249,152" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
            <path d="M 266 112 C 266 100 278 100 278 112" fill="none" stroke="#0F172A" strokeWidth="2" />
            <circle cx="272" cy="132" r="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
            <text x="272" y="135" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            {/* Coin Stack */}
            <g transform="translate(100, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'home-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Home House */}
            <rect x="85" y="86" width="130" height="66" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
            <polygon points="75,88 150,38 225,88" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="180" y="44" width="18" height="26" fill="#EF4444" stroke="#0F172A" strokeWidth="1.8" />
            <rect x="177" y="42" width="24" height="5" rx="1.5" fill="#0F172A" />
            <circle cx="150" cy="66" r="9" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="150" y1="57" x2="150" y2="75" stroke="#0F172A" strokeWidth="1.2" />
            <line x1="141" y1="66" x2="159" y2="66" stroke="#0F172A" strokeWidth="1.2" />
            <rect x="135" y="108" width="30" height="44" rx="3" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
            <circle cx="140" cy="130" r="2.5" fill="#F59E0B" />
            <rect x="94" y="102" width="28" height="26" rx="3" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="176" y="102" width="30" height="26" rx="3" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <ellipse cx="76" cy="148" rx="14" ry="9" fill="#22C55E" stroke="#0F172A" strokeWidth="1.5" />
            {/* House Keys */}
            <circle cx="248" cy="75" r="14" fill="none" stroke="#F59E0B" strokeWidth="3.5" />
            <rect x="248" y="85" width="8" height="42" rx="2" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="256" y="112" width="8" height="5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
            <rect x="256" y="122" width="6" height="5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
            {/* Approved Badge */}
            <circle cx="264" cy="132" r="17" fill="#22C55E" stroke="#0F172A" strokeWidth="2" />
            <path d="M 257 132 L 262 137 L 271 126" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'property-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* 3D Commercial High-Rise Building */}
            <polygon points="75,55 115,35 115,150 75,170" fill="#60A5FA" stroke="#0F172A" strokeWidth="2" />
            <polygon points="115,35 165,55 165,170 115,150" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <polygon points="75,55 115,35 165,55 125,75" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
            <line x1="83" y1="70" x2="107" y2="58" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="83" y1="88" x2="107" y2="76" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="83" y1="106" x2="107" y2="94" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="83" y1="124" x2="107" y2="112" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="83" y1="142" x2="107" y2="130" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="123" y1="58" x2="157" y2="75" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="123" y1="76" x2="157" y2="93" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="123" y1="94" x2="157" y2="111" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="123" y1="112" x2="157" y2="129" stroke="#DBEAFE" strokeWidth="2" />
            <line x1="123" y1="130" x2="157" y2="147" stroke="#DBEAFE" strokeWidth="2" />
            {/* Property Deed Document */}
            <g transform="translate(182, 60) rotate(5)">
              <rect x="0" y="0" width="70" height="92" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <rect x="6" y="8" width="58" height="10" rx="2" fill="#0284C7" />
              <line x1="6" y1="26" x2="64" y2="26" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="34" x2="52" y2="34" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="42" x2="58" y2="42" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="35" cy="68" r="12" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="35" cy="68" r="8" fill="#FBBF24" />
              <text x="35" y="71" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
            {/* Property Tag */}
            <polygon points="265,45 295,45 308,62 295,80 265,80" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
            <text x="282" y="66" fontSize="10" fontWeight="900" textAnchor="middle" fill="#0F172A">LAP</text>
            {/* Coin Stack */}
            <g transform="translate(115, 148)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'business-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Executive Briefcase */}
            <rect x="75" y="90" width="125" height="70" rx="8" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.2" />
            <path d="M 122 90 C 122 74 153 74 153 90" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <rect x="105" y="104" width="14" height="16" rx="2" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
            <rect x="156" y="104" width="14" height="16" rx="2" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.2" />
            <line x1="75" y1="120" x2="200" y2="120" stroke="#0F172A" strokeWidth="1.5" />
            {/* Upward Growth Bar Chart */}
            <rect x="210" y="102" width="22" height="52" rx="3" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <rect x="238" y="74" width="22" height="80" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            <rect x="266" y="44" width="22" height="110" rx="3" fill="#0EA5E9" stroke="#0F172A" strokeWidth="2" />
            <path d="M 221 96 L 249 68 L 277 38" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
            <circle cx="277" cy="38" r="4.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            {/* Seedling Plant */}
            <polygon points="48,136 70,136 66,154 52,154" fill="#EA580C" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 59 136 Q 59 116 50 112" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="59" cy="104" r="9" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            <text x="59" y="107" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            {/* Coin Stack */}
            <g transform="translate(98, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'project-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Blueprint Scroll */}
            <rect x="65" y="74" width="135" height="82" rx="5" fill="#0284C7" stroke="#0F172A" strokeWidth="2.2" />
            <path d="M 65 74 C 54 74 54 156 65 156 Z" fill="#0369A1" stroke="#0F172A" strokeWidth="2" />
            <line x1="82" y1="94" x2="186" y2="94" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="4 2" />
            <rect x="85" y="104" width="38" height="38" fill="none" stroke="#BAE6FD" strokeWidth="1.5" />
            <rect x="130" y="104" width="55" height="38" fill="none" stroke="#BAE6FD" strokeWidth="1.5" />
            <circle cx="104" cy="123" r="6" fill="none" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="2 2" />
            {/* Drafting Triangle Ruler */}
            <polygon points="175,108 238,108 238,45" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
            <polygon points="194,101 228,101 228,67" fill="#F0F4F9" stroke="#0F172A" strokeWidth="1.5" />
            {/* Project Cogwheel */}
            <circle cx="255" cy="74" r="28" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="255" cy="74" r="10" fill="#F0F4F9" stroke="#0F172A" strokeWidth="2" />
            {/* Gold Bullion Ingot */}
            <g transform="translate(245, 138)">
              <polygon points="0,8 14,0 36,0 22,8" fill="#FDE047" stroke="#0F172A" strokeWidth="1.5" />
              <polygon points="0,8 22,8 22,17 0,17" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
              <polygon points="22,8 36,0 36,9 22,17" fill="#CA8A04" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'pmegp-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Artisan Pottery Wheel and Terracotta Urn */}
            <ellipse cx="100" cy="150" rx="42" ry="12" fill="#78350F" stroke="#0F172A" strokeWidth="2" />
            <path d="M 100 85 C 80 102 78 132 100 144 C 122 132 120 102 100 85 Z" fill="#EA580C" stroke="#0F172A" strokeWidth="2.2" />
            <ellipse cx="100" cy="85" rx="16" ry="5" fill="#F97316" stroke="#0F172A" strokeWidth="1.5" />
            {/* Manufacturing Gear */}
            <circle cx="205" cy="78" r="32" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="205" cy="78" r="12" fill="#F0F4F9" stroke="#0F172A" strokeWidth="2" />
            {/* Government Capital Subsidy Badge */}
            <rect x="180" y="112" width="112" height="34" rx="6" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            <text x="236" y="133" fontSize="10.5" fontWeight="900" textAnchor="middle" fill="#0F172A">GOVT SUBSIDY</text>
            <polygon points="180,146 168,164 188,157" fill="#16A34A" stroke="#0F172A" strokeWidth="1" />
            <polygon points="292,146 304,164 284,157" fill="#EA580C" stroke="#0F172A" strokeWidth="1" />
            {/* Falling Coins */}
            <circle cx="215" cy="38" r="9" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            <text x="215" y="41" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            <circle cx="245" cy="48" r="8" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            <text x="245" y="51" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'stand-up-india-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Bank Vault Safe */}
            <rect x="70" y="65" width="90" height="92" rx="8" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2.2" />
            <circle cx="115" cy="111" r="32" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
            <circle cx="115" cy="111" r="15" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.8" />
            <text x="115" y="117" fontSize="16" fontWeight="900" textAnchor="middle" fill="#0F172A">₹</text>
            {/* Startup Rocket */}
            <g transform="translate(195, 35) rotate(15)">
              <path d="M 12 55 Q 16 75 20 55" fill="#F59E0B" />
              <path d="M 16 10 C 26 22 26 42 26 55 L 6 55 C 6 42 6 22 16 10 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <path d="M 16 10 C 21 16 23 24 23 25 L 9 25 C 9 24 11 16 16 10 Z" fill="#EC4899" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="16" cy="34" r="5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 6 44 L 0 54 L 6 54 Z" fill="#EC4899" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 26 44 L 32 54 L 26 54 Z" fill="#EC4899" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {/* Entrepreneurship Medal Badge */}
            <circle cx="260" cy="118" r="16" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
            <text x="260" y="123" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#0F172A">★</text>
            <path d="M 252 132 L 246 150 L 256 145 Z" fill="#EC4899" stroke="#0F172A" strokeWidth="1" />
            <path d="M 268 132 L 274 150 L 264 145 Z" fill="#0366A2" stroke="#0F172A" strokeWidth="1" />
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      case 'vehicle-loan-assistance':
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            {/* Modern Automobile */}
            <path d="M 60 128 C 60 116 75 114 90 114 L 235 114 C 255 114 265 124 265 136 C 265 144 255 148 240 148 L 78 148 C 65 148 60 140 60 128 Z" fill="#0284C7" stroke="#0F172A" strokeWidth="2.2" />
            <path d="M 100 114 L 130 78 L 195 78 L 225 114 Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
            <polygon points="192,82 218,110 172,110 172,82" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="135,82 108,110 162,110 162,82" fill="#BAE6FD" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="260,124 285,118 285,136 260,130" fill="#FEF08A" opacity="0.85" />
            <ellipse cx="260" cy="127" rx="5" ry="4" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="62" y="124" width="6" height="8" rx="2" fill="#EF4444" stroke="#0F172A" strokeWidth="1" />
            <circle cx="102" cy="146" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="102" cy="146" r="8" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="218" cy="146" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="218" cy="146" r="8" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
            {/* Key Fob with Remote Signals */}
            <rect x="236" y="42" width="26" height="40" rx="9" fill="#0F172A" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="249" cy="54" r="3.5" fill="#38BDF8" />
            <rect x="244" y="62" width="10" height="4" rx="1.5" fill="#F59E0B" />
            <rect x="244" y="70" width="10" height="4" rx="1.5" fill="#CBD5E1" />
            <circle cx="249" cy="38" r="5" fill="none" stroke="#FBBF24" strokeWidth="2" />
            <path d="M 268 48 C 274 54 274 66 268 72" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
            {/* Coin Stack */}
            <g transform="translate(95, 146)">
              <path d="M 0 5 C 0 9 24 9 24 5 L 24 11 C 24 15 0 15 0 11 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="5" rx="12" ry="4" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M 0 0 C 0 4 24 4 24 0 L 24 5 C 24 9 0 9 0 5 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="12" cy="0" rx="12" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="12" y="3" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )

      default:
        return (
          <svg className="ksfe-sig-visual-svg" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="165" rx="130" ry="22" fill="#DCE8F6" />
            <rect x="52" y="98" width="22" height="60" rx="3" fill="#1F4E7A" stroke="#0F172A" strokeWidth="2" />
            <rect x="78" y="68" width="22" height="90" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            <rect x="104" y="42" width="22" height="116" rx="3" fill="#0EA5E9" stroke="#0F172A" strokeWidth="2" />
            <path d="M 228 112 C 228 82 202 62 168 62 C 130 62 120 88 120 114 C 120 142 142 158 178 158 C 214 158 228 140 228 112 Z" fill="#93C5FD" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="118" cy="116" rx="12" ry="17" fill="#60A5FA" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="144" cy="98" rx="3.5" ry="4" fill="#0F172A" />
            <g transform="translate(176, 42)">
              <ellipse cx="0" cy="0" rx="11" ry="8" fill="#FBBF24" stroke="#0F172A" strokeWidth="1.8" />
              <text x="0" y="3" fontSize="8.5" fontWeight="900" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
            <g transform="translate(232, 138)">
              <path d="M 0 10 C 0 14 26 14 26 10 L 26 18 C 26 22 0 22 0 18 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="13" cy="10" rx="13" ry="4.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="13" cy="-2" rx="13" ry="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <text x="13" y="1" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#0F172A">₹</text>
            </g>
          </svg>
        )
    }
  }

  // FAQs as requested by user
  const faqs = [
    {
      question: "Which service should I choose?",
      answer: "Share your requirement and we will help you identify the relevant category."
    },
    {
      question: "Can I request more than one service?",
      answer: "Yes, where relevant services can be coordinated together."
    },
    {
      question: "Are timelines and approvals guaranteed?",
      answer: "No. They depend on the applicable authority, provider, documentation and current requirements."
    }
  ]

  return (
    <div className="globon-loans-advances-page" style={{ backgroundColor: "#ffffff" }}>
      {/* Dynamic Keyframes and Clean White-Themed Styling */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulseDot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
        .animate-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .globon-loans-advances-page {
          background-color: #ffffff !important;
        }
        .loan-service-card {
          background: #ffffff !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .loan-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(3, 102, 162, 0.12) !important;
          border-color: #0366a2 !important;
        }
        .loan-service-card:hover .service-icon-box {
          background-color: #0366a2 !important;
          color: #ffffff !important;
          transform: scale(1.08);
        }
        .service-icon-box {
          transition: all 0.3s ease;
        }
        .help-pillar-card {
          background: #ffffff !important;
          transition: all 0.3s ease;
        }
        .help-pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border-color: #0366a2;
        }
      `}</style>

      {/* Breadcrumb Bar */}
      <section className="ksfe-services-breadcrumb">
        <div className="tf-container w-1780">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/services">Services</Link>
            <span className="separator">/</span>
            <span className="current">Loans &amp; Advances</span>
          </div>
        </div>
      </section>

      {/* Hero Section - Pure White Background */}
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
                  Loans &amp; Advances
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
                  Financial Solutions for Personal, Property, Business &amp; Vehicle Needs
                </h2>

                {/* Lead Narrative from User */}
                <p style={{
                  fontSize: "17px",
                  color: "#475569",
                  lineHeight: "1.7",
                  marginBottom: "32px"
                }}>
                  Whether you need financial support for a personal requirement, higher education, a new home, business expansion, a project, or a vehicle purchase, Globon Business Solutions helps you understand available financing options and navigate the relevant application process.
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
                    href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20would%20like%20assistance%20with%20Loans%20%26%20Advances."
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
                    src="/images/services/1.png"
                    alt="Globon Loans & Advances"
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
                      Financial Partner
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
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>
                      ₹250 Cr+
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      Loans &amp; Funding Facilitated
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
              Comprehensive Financing Assistance Under One Roof
            </h2>
            <p style={{
              fontSize: "17px",
              color: "#4b5563",
              lineHeight: "1.6",
              fontWeight: 400,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Explore personal, education, home, property, business, project, government-scheme and vehicle finance assistance. Globon helps organise the next steps and documentation relevant to your requirement.
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
                  👤
                </div>
                <h3 style={{
                  fontSize: "19px",
                  fontWeight: 500,
                  color: "#000000",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Personal &amp; Study
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Personal, education, and retailer credit options tailored for your lifestyle needs.
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
                  Home &amp; Property
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Affordable home loans and high-limit loans against residential or commercial property.
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
                  color: "#d97706",
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
                  Business &amp; Project
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Working capital, machinery loans, and multi-crore infrastructure project finance.
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
                  Govt Subsidies &amp; Auto
                </h3>
                <p style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Government capital subsidies, Stand-Up India, and commercial vehicle loans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Pure White Background */}
      <section id="services-list" style={{ padding: "80px 0 100px 0", background: "#ffffff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="tf-container w-1780">
          {/* Header Row: Left title OTHER LOAN SCHEMES, Right button Explore All ↗ */}
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
              OTHER LOAN SCHEMES
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
                      href={`/services/loans-advances/${service.slug}`}
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
                        <Link href={`/services/loans-advances/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h3>

                      <p className="ksfe-sig-card-desc">
                        {service.shortDesc}
                      </p>

                      <div className="ksfe-sig-divider" />

                      {service.highlights && service.highlights.length > 0 && (
                        <ul className="ksfe-sig-bullets">
                          {service.highlights.slice(0, 3).map((hl, i) => (
                            <li key={i} className="ksfe-sig-bullet-item">
                              <span className="bullet-asterisk">✻</span>
                              <Link href={`/services/loans-advances/${service.slug}`}>
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
                    No services currently published in Loans &amp; Advances. Added services from the Admin Studio will appear here automatically.
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
              We eliminate confusion and friction by coordinating your file from initial inquiry to final sanction.
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
                  We assess your exact financial needs, review your profile and credit history, and map out the most suitable loan schemes across 30+ partner banks with the lowest interest rates.
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
                  Our team provides a precise checklist, assists with doorstep verification in Kerala, prepares bankable financial reports (CMA/DPR), and structures paperwork to avoid file rejections.
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
                  We follow up directly with credit managers, government portal officials (such as KVIC for PMEGP), and legal valuers to accelerate sanction and ensure smooth disbursement to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Redesigned to match user reference image */}
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
                            color: "#000000",
                            lineHeight: 1.4,
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            {faq.question}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                            <span style={{
                              color: "#0284c7",
                              fontSize: "24px",
                              fontWeight: 600,
                              lineHeight: 1,
                              width: "20px",
                              textAlign: "center"
                            }}>
                              {isOpen ? "−" : "+"}
                            </span>
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" opacity="0.4">
                              <path d="M6 2L10 6H2L6 2Z" fill="#64748B" />
                              <path d="M6 14L2 10H10L6 14Z" fill="#64748B" />
                            </svg>
                          </div>
                        </button>

                        {isOpen && (
                          <div style={{
                            padding: "0 0 24px 0",
                            fontSize: "17px",
                            fontWeight: 400,
                            color: "#4b5563",
                            lineHeight: 1.65,
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            <p style={{ margin: 0 }}>
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with KSFE Badges & Dot Matrix */}
            <div className="col-lg-6">
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "26px 14px 20px 14px"
              }}>
                {/* Decorative Dots Matrix above image */}
                <div style={{
                  position: "absolute",
                  top: "4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1
                }}>
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
                <div style={{
                  position: "absolute",
                  top: "4px",
                  right: "2px",
                  zIndex: 4,
                  background: "#ffffff",
                  padding: "8px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)"
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#0284c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 18px rgba(2, 132, 199, 0.4)"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>

                {/* Main Image Box */}
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
                    alt="Frequently Asked Questions - Loans & Advances"
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
              Ready to explore loans &amp; advances?
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
                href="https://wa.me/919846053539?text=Hello%20Globon,%20I%20am%20ready%20to%20explore%20loans%20%26%20advances.%20Please%20help%20me%20with%20the%20next%20steps."
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
