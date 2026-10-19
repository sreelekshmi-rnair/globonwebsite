// Centralized Categories and Services Database for Globon Business Solutions
// Exactly 9 Core Categories with Clean Base Structure

export const categories = [
  {
    id: "loans-advances",
    slug: "loans-advances",
    title: "Loans & Advances",
    subtitle: "Financial Solutions for Personal, Property, Business & Vehicle Needs",
    badgeClass: "bg-loans",
    image: "/images/services/1.png",
    imageAlt: "Globon Loans and Advances",
    description: "Whether you need financial support for a personal requirement, higher education, a new home, business expansion, a project, or a vehicle purchase, Globon Business Solutions helps you understand available financing options and navigate the relevant application process.",
    overview: "Explore personal, education, home, property, business, project, government-scheme and vehicle finance assistance. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "business-financial-solutions",
    slug: "business-financial-solutions",
    title: "Business & Financial Solutions",
    subtitle: "Everything You Need to Start, Manage and Grow Your Business",
    badgeClass: "bg-fee-based",
    image: "/images/services/2.png",
    imageAlt: "Globon Business & Financial Solutions",
    description: "From setting up your business and managing compliance to obtaining certifications, preparing project plans, and implementing business technology, Globon Business Solutions brings essential business services together in one place.",
    overview: "Business setup, tax and accounting, licences, consultancy, insurance and technology support for growing organisations. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "business-registration-compliance",
    slug: "business-registration-compliance",
    title: "Business Registration & Compliance",
    subtitle: "Start Your Business on the Right Foundation",
    badgeClass: "bg-chitty",
    image: "/images/services/3.png",
    imageAlt: "Globon Business Registration & Incorporation",
    description: "Setting up a business involves more than choosing a name. Globon helps organise company formation, LLP setup, partnership deed drafting, MSME Udyam, Startup India recognition, and local commercial registrations.",
    overview: "Choose support for company, LLP, partnership, startup, MSME or establishment registration. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "business-planning-consultancy",
    slug: "business-planning-consultancy",
    title: "Business Planning & Consultancy",
    subtitle: "Plan Your Business, Organise Your Strategy & Move Forward With the Right Guidance",
    badgeClass: "bg-growth",
    image: "/images/services/4.png",
    imageAlt: "Globon Business Planning & Consultancy",
    description: "Starting, expanding or restructuring a business often requires more than a good idea. Globon helps organise projects, investments, professional legal frameworks, and higher education guidance.",
    overview: "Plan projects, organise investments, get professional support and prepare for your next business step. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "business-technology-solutions",
    slug: "business-technology-solutions",
    title: "Business Technology Solutions",
    subtitle: "Simplify Your Business Operations With the Right ERP & CRM Solutions",
    badgeClass: "bg-loans",
    image: "/images/services/5.png",
    imageAlt: "Globon Business Technology Solutions",
    description: "Managing customers, sales, inventory, finance, employees, and daily business operations across multiple spreadsheets and disconnected tools can become difficult as your business grows.",
    overview: "Explore ERP, CRM and organisation-registration support according to your needs. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "life-health-insurance",
    slug: "life-health-insurance",
    title: "Life & Health Insurance",
    subtitle: "Protect Your Family, Health & Financial Future With the Right Insurance",
    badgeClass: "bg-chitty",
    image: "/images/services/6.png",
    imageAlt: "Globon Life & Health Insurance",
    description: "Life and health risks can create significant financial pressure for individuals and families.",
    overview: "Explore life and health policies and organise the information needed to review options. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "travel-group-insurance",
    slug: "travel-group-insurance",
    title: "Travel & Group Insurance",
    subtitle: "Protect Your Journeys, Employees & Groups With Suitable Insurance Support",
    badgeClass: "bg-deposits",
    image: "/images/services/7.png",
    imageAlt: "Globon Travel & Group Insurance",
    description: "Travel often involves unexpected risks, while organisations may need insurance protection for employees, members or other eligible groups.",
    overview: "Explore travel protection and group insurance options for individuals and organisations. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "real-estate-services",
    slug: "real-estate-services",
    title: "Real Estate Services",
    subtitle: "Buy, Sell, Plan, Document & Finance Your Property With Practical Support",
    badgeClass: "bg-growth",
    image: "/images/services/8.png",
    imageAlt: "Globon Real Estate Services",
    description: "Real estate decisions often involve significant financial commitments, documentation and coordination.",
    overview: "Support for buying, selling, investing in, documenting, planning and financing property. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  },
  {
    id: "digital-marketing-services",
    slug: "digital-marketing-services",
    title: "Digital & Marketing Services",
    subtitle: "Build Your Digital Presence, Strengthen Your Brand & Reach Your Audience",
    badgeClass: "bg-fee-based",
    image: "/images/services/9.png",
    imageAlt: "Globon Digital & Marketing Services",
    description: "A strong digital presence can help businesses build credibility, communicate their value and connect with potential customers.",
    overview: "Website, branding, digital marketing, advertising, social media and content services in one place. Globon helps organise the next steps and documentation relevant to your requirement.",
    services: []
  }
];

// Helper functions for easy querying
export function getAllCategories() {
  return categories;
}

export function getCategoryBySlug(slug) {
  return categories.find((cat) => cat.slug === slug);
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
