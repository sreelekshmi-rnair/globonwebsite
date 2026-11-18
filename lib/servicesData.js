// Centralized Categories and Services Database for Globon Business Solutions
// Exactly 6 Core Services: Loans, Business Services, Study Abroad, Insurance, Real Estate, Digital Services
// Subservices are managed dynamically through the Admin Studio

export const categories = [
  {
    id: "loans",
    slug: "loans",
    aliases: ["loans-advances"],
    title: "Loans",
    subtitle: "Financial Solutions for Personal, Property, Business & Vehicle Needs",
    badgeClass: "bg-loans",
    image: "/images/services/1.png",
    imageAlt: "Globon Loans and Financial Solutions",
    description: "Whether you need financial support for a personal requirement, higher education, a new home, business expansion, a project, or a vehicle purchase, Globon Business Solutions helps you understand available financing options and navigate the relevant application process.",
    overview: "Explore personal, education, home, property, business, project, government-scheme and vehicle finance assistance. Globon helps organise the next steps and documentation relevant to your requirement.",
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
    subtitle: "Everything You Need to Start, Manage and Grow Your Business",
    badgeClass: "bg-fee-based",
    image: "/images/services/2.png",
    imageAlt: "Globon Business Services & Corporate Consulting",
    description: "From setting up your business and managing compliance to obtaining certifications and preparing project plans, Globon Business Solutions brings essential business services together in one place.",
    overview: "Business setup, tax and accounting, licences, certifications, consultancy and legal support for growing organisations. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "study-abroad",
    slug: "study-abroad",
    aliases: ["study-abroad-services", "education-abroad"],
    title: "Study Abroad",
    subtitle: "Plan Your International Education Journey With the Right Guidance",
    badgeClass: "bg-growth",
    image: "/images/services/4.png",
    imageAlt: "Globon Study Abroad & Overseas Education Guidance",
    description: "Choosing the right country, course and institution is an important decision. Globon helps you organise your study preferences, application information and the next steps for overseas education.",
    overview: "Globon helps you organise your study preferences, application information and the next steps for overseas education.",
    services: []
  },
  {
    id: "insurance",
    slug: "insurance",
    aliases: ["life-health-insurance", "travel-group-insurance", "insurance-solutions"],
    title: "Insurance",
    subtitle: "",
    badgeClass: "bg-chitty",
    image: "/images/services/6.png",
    imageAlt: "Globon Insurance",
    description: "Life and health risks can create significant financial pressure for individuals and families. Your home, shop, premises, equipment, stock and other physical assets can represent a significant financial investment. Travel often involves unexpected risks, while organisations may need insurance protection for employees, members or other eligible groups.",
    overview: "Explore life and health policies, vehicle insurance support, protection options for residential property, shops and business assets, and travel protection and group insurance options. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "real-estate",
    slug: "real-estate",
    aliases: ["real-estate-services", "property-consultancy"],
    title: "Real Estate",
    subtitle: "Buy, Sell, Plan, Document & Finance Your Property With Practical Support",
    badgeClass: "bg-deposits",
    image: "/images/services/8.png",
    imageAlt: "Globon Real Estate Services & Land Solutions",
    description: "Real estate decisions often involve significant financial commitments, documentation and coordination.",
    overview: "Support for buying, selling, investing in, documenting, planning and financing property. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "digital-services",
    slug: "digital-services",
    aliases: ["digital-marketing-services", "tech-solutions"],
    title: "Digital Services",
    subtitle: "Build Your Digital Presence, Strengthen Your Brand & Reach Your Audience",
    badgeClass: "bg-fee-based",
    image: "/images/services/9.png",
    imageAlt: "Globon Digital & Marketing Services",
    description: "A strong digital presence can help businesses build credibility, communicate their value and connect with potential customers.",
    overview: "ERP, CRM, website, branding, digital marketing, advertising, social media and content services in one place. Globon helps organise the next steps and documentation relevant to your requirement.",
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
