// Centralized Categories and Services Database for Globon Business Solutions
// Exactly 6 Core Services: Loans, Business Services, Study Abroad, Insurance, Real Estate, Digital Services
// Subservices are managed dynamically through the Admin Studio

export const categories = [
  {
    id: "loans",
    slug: "loans",
    aliases: ["loans-advances"],
    title: "Loans",
    subtitle: "Comprehensive Financial Solutions for Personal, Property, Business & Vehicle Needs",
    badgeClass: "bg-loans",
    image: "/images/services/1.png",
    imageAlt: "Globon Loans and Financial Solutions",
    description: "Whether you need financial support for personal requirements, higher education, a new home, commercial property, working capital, or a vehicle purchase, Globon Business Solutions helps you understand available financing options and navigate the complete bank application process with fast-track approval.",
    overview: "Explore personal, education, home, property, business, project, government-subsidized schemes (PMEGP, Stand-Up India, CGTMSE) and vehicle finance assistance with doorstep documentation support.",
    services: []
  },
  {
    id: "business-services",
    slug: "business-services",
    aliases: [
      "business-financial-solutions",
      "business-registration-compliance",
      "business-planning-consultancy",
      "business-technology-solutions"
    ],
    title: "Business Services",
    subtitle: "End-to-End Company Formation, Compliance, Planning & Technology Support",
    badgeClass: "bg-fee-based",
    image: "/images/services/2.png",
    imageAlt: "Globon Business Services & Corporate Consulting",
    description: "From setting up your company structure and managing statutory filings to preparing bankable project reports, securing certifications, and implementing modern ERP/CRM systems, Globon brings essential business solutions together in one unified hub.",
    overview: "Pvt Ltd, LLP and Partnership incorporation, MSME Udyam, Startup India registration, GST/Income Tax compliance, financial project reports (CMA), business consultancy, and cloud ERP technology.",
    services: []
  },
  {
    id: "study-abroad",
    slug: "study-abroad",
    aliases: ["study-abroad-services", "education-abroad"],
    title: "Study Abroad",
    subtitle: "Global University Admissions, Education Loans, Visa Filing & Travel Assistance",
    badgeClass: "bg-growth",
    image: "/images/services/4.png",
    imageAlt: "Globon Study Abroad & Overseas Education Guidance",
    description: "Realize your global higher education aspirations across premier universities in the UK, Canada, USA, Europe, Australia, and New Zealand. Globon provides end-to-end guidance from course selection and university admissions to fast-track education loan sanction, visa filing, and pre-departure support.",
    overview: "Personalized academic counselling, 100% course fee and living expense funding assistance, scholarship guidance, certified document translation, and streamlined student visa processing.",
    services: []
  },
  {
    id: "insurance",
    slug: "insurance",
    aliases: ["life-health-insurance", "travel-group-insurance", "insurance-solutions"],
    title: "Insurance",
    subtitle: "Protect Your Family, Health, Business & Journeys With Tailored Coverage",
    badgeClass: "bg-chitty",
    image: "/images/services/6.png",
    imageAlt: "Globon Insurance Solutions",
    description: "Safeguard what matters most against medical emergencies, unexpected life risks, travel setbacks, and business liabilities. Globon partners with India's leading insurance carriers to compare policies and deliver comprehensive protection with prompt claim settlement support.",
    overview: "Term life insurance, cashless family health floater plans, critical illness cover, international student & travel insurance, and corporate employee group health policies.",
    services: []
  },
  {
    id: "real-estate",
    slug: "real-estate",
    aliases: ["real-estate-services", "property-consultancy"],
    title: "Real Estate",
    subtitle: "Buy, Sell, Lease, Verify Title & Secure Land Financing Across Kerala",
    badgeClass: "bg-deposits",
    image: "/images/services/8.png",
    imageAlt: "Globon Real Estate Services & Land Solutions",
    description: "Property decisions require rigorous legal verification, realistic market valuation, and strategic finance. Globon offers expert assistance in buying, selling, and leasing residential and commercial real estate, title deed verification, encumbrance checking, and structured property financing.",
    overview: "Verified property listings, commercial leasing, title due diligence, property valuation reports, layout planning, and integrated Loan Against Property (LAP) facilitation.",
    services: []
  },
  {
    id: "digital-services",
    slug: "digital-services",
    aliases: ["digital-marketing-services", "tech-solutions"],
    title: "Digital Services",
    subtitle: "Modern Websites, Brand Identity, Social Media Growth & Custom Software",
    badgeClass: "bg-fee-based",
    image: "/images/services/9.png",
    imageAlt: "Globon Digital & Marketing Services",
    description: "In an increasingly connected marketplace, your digital presence determines brand credibility and customer growth. Globon designs ultra-responsive modern websites, custom business software, search engine optimization (SEO), and targeted social media marketing campaigns.",
    overview: "Custom web development, logo & corporate brand identity, Google Business profile SEO, lead generation ad campaigns (Meta & Google Ads), and custom software engineering.",
    services: []
  }
];

// Helper functions for easy querying
export function getAllCategories() {
  return categories;
}

export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return categories.find((cat) => cat.slug === normalized || (cat.aliases && cat.aliases.includes(normalized))) || null;
}

export function getServiceBySlug(categorySlug, serviceSlug) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;
  return cat.services.find((s) => s.slug === serviceSlug) || null;
}

export function findServiceAcrossAll(serviceSlug) {
  for (const cat of categories) {
    const s = cat.services.find((srv) => srv.slug === serviceSlug);
    if (s) {
      return { service: s, category: cat };
    }
  }
  return null;
}
