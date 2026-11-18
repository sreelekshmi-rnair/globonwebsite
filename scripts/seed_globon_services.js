// Seeds every Level 2 / Level 3 service from the Globon navigation map into MySQL,
// using the copy from "Globon Concise Website Content". Also rebuilds
// data/services.json (read by the public pages) and data/menu_hierarchy.json
// (header mega menu + Admin > Menu Hierarchy).
//
// Safe to re-run: services are upserted by slug; other services are left alone.
// Run: node scripts/seed_globon_services.js

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const DATA_DIR = path.join(__dirname, '..', 'data');

const CATEGORY_TITLES = {
  loans: 'Loans',
  'business-services': 'Business Services',
  'study-abroad': 'Study Abroad',
  insurance: 'Insurance',
  'real-estate': 'Real Estate',
  'digital-services': 'Digital Services',
};

const NOTE = 'Indicative list only; final requirements vary by profile and provider/authority.';

const GROUP_FAQS = [
  { q: 'Which service should I choose?', a: 'Share your requirement and we will help you identify the relevant category.' },
  { q: 'Can I request more than one service?', a: 'Yes, where relevant services can be coordinated together.' },
  { q: 'Are timelines and approvals guaranteed?', a: 'No. They depend on the applicable authority, provider, documentation and current requirements.' },
];

// Shared copy for each service type, as written in the content document
const TYPES = {
  loan: {
    icon: '💰',
    overview: (n) => `Globon helps you explore applicable ${n} options, prepare documents and coordinate the application process.`,
    features: [
      'Requirement-based option guidance',
      'Document checklist and preparation support',
      'Application coordination with the relevant lender',
      'Terms and approval depend on the lender and applicant',
    ],
    eligibility: 'Eligibility depends on the lender, applicant profile, income and repayment capacity, credit history, existing obligations and loan purpose. The lender confirms the final criteria.',
    fees: 'Interest rates, processing fees, loan terms and other charges vary by lender and applicant. Review the lender’s written terms before proceeding.',
    faqs: (n) => [
      { q: `Who can apply for ${n} assistance?`, a: 'It depends on the lender, income, credit profile and requested loan.' },
      { q: 'Which documents are required?', a: 'The checklist above is indicative; your lender may request more.' },
      { q: 'Does Globon guarantee loan approval?', a: 'No. The bank or financial institution makes the final decision.' },
    ],
  },
  registration: {
    icon: '📝',
    overview: (n) => `Globon helps you understand the requirements for ${n}, prepare relevant information and coordinate the process.`,
    features: [
      'Guidance on applicable registration or compliance route',
      'Document and information checklist',
      'Application and follow-up coordination',
      'Approval and requirements depend on the relevant authority and current rules',
    ],
    eligibility: 'Applicability depends on business/activity details, documents and the current rules of the relevant authority or service provider. Requirements can vary by state/UT where applicable.',
    fees: 'Service fees and statutory or third-party charges depend on the service, authority, provider and location. Requirements, fees and procedures may vary by state/UT where applicable.',
    faqs: (n) => [
      { q: `What does ${n} involve?`, a: 'The process depends on your business/activity, documents and the requirements of the relevant authority or service provider.' },
      { q: 'Which documents are required?', a: 'The indicative list above helps you prepare. The final checklist depends on your situation and current requirements.' },
      { q: 'Can the registration or service be guaranteed?', a: 'No. The outcome and timeline depend on the relevant authority, certification body, institution or provider.' },
    ],
  },
  consult: {
    icon: '🧭',
    features: [
      'Requirement and scope review',
      'Information and documentation support',
      'Coordination of relevant application or service steps',
      'Final decisions and formal advice remain with the relevant professional/institution',
    ],
    eligibility: 'Applicability depends on business/activity details, documents and the current rules of the relevant authority or service provider. Requirements can vary by state/UT where applicable.',
    fees: 'Service fees and statutory or third-party charges depend on the service, authority, provider and location. Requirements, fees and procedures may vary by state/UT where applicable.',
  },
  insurance: {
    icon: '🛡️',
    overview: (n) => `Globon helps you understand available ${n} options and coordinate the policy process with the insurer.`,
    features: [
      'Guidance on available policy options',
      'Support reviewing coverage, limits and exclusions',
      'Proposal/documentation coordination',
      'Acceptance, premium and claims depend on insurer and policy terms',
    ],
    eligibility: 'Availability, coverage and premium depend on the insurer, applicant/asset profile, requested cover, underwriting and policy terms.',
    fees: 'Premiums and charges vary by insurer, requested coverage, applicant/asset profile and policy terms. Review exclusions, limits and applicable charges before purchase.',
    faqs: (n) => [
      { q: `What does ${n} cover?`, a: 'Coverage depends on the selected policy, limits, exclusions and terms.' },
      { q: 'Which documents are required?', a: 'Requirements vary by insurer and applicant or asset profile.' },
      { q: 'Does Globon decide policy acceptance or claims?', a: 'No. The insurer decides acceptance and claims under the policy terms.' },
    ],
  },
  realestate: {
    icon: '🏠',
    overview: (n) => `Globon helps organise information and coordinate the relevant steps for ${n}.`,
    features: [
      'Requirement and document checklist',
      'Coordination of relevant process steps',
      'Practical information support for the transaction',
      'Legal, valuation and approval requirements vary by property/location',
    ],
    eligibility: 'Requirements vary by property, location, transaction, documents and applicable local rules. Seek qualified legal or technical review where required.',
    fees: 'Service fees and transaction costs depend on scope, property, location and applicable government/professional charges. Confirm charges before proceeding.',
    faqs: (n) => [
      { q: `What does ${n} include?`, a: 'Support may include requirement review, document organisation and process coordination.' },
      { q: 'Which documents should I prepare?', a: 'Requirements vary by property, location and transaction.' },
      { q: 'Does Globon guarantee property approval, value or returns?', a: 'No. Property outcomes depend on the facts and relevant parties/authorities.' },
    ],
  },
  digital: {
    icon: '💻',
    overview: (n) => `Globon helps plan and coordinate ${n} around your business goals, audience and agreed scope.`,
    features: [
      'Scope and deliverable planning',
      'Service coordination based on business goals',
      'Content/design/implementation support as agreed',
      'Traffic, rankings, leads and commercial results are not guaranteed',
    ],
    eligibility: 'The scope depends on your objectives, business profile, audience, existing assets, timeline, budget and agreed deliverables.',
    fees: 'Pricing depends on the scope, deliverables, timeline, tools and ongoing support required. Confirm the project scope and fee before work begins.',
    faqs: (n) => [
      { q: `What is included in ${n}?`, a: 'Scope and deliverables are agreed around your goals, timeline and budget.' },
      { q: 'Can I choose only one service?', a: 'Yes. Services can be selected individually or combined where relevant.' },
      { q: 'Are results guaranteed?', a: 'No. Results depend on market conditions, audience, competition and budget.' },
    ],
  },
  study: {
    icon: '🎓',
    features: [
      'Requirement and scope review',
      'Information and documentation support',
      'Coordination of relevant application or service steps',
      'Final decisions and formal advice remain with the relevant professional/institution',
    ],
    eligibility: 'Admission, course and visa requirements depend on the destination, institution, course and applicant profile. The institution and relevant authorities make final decisions.',
    fees: 'Consultancy and application-related costs vary by scope, institution and destination. Tuition, visa, travel and other external charges are separate where applicable.',
    faqs: [
      { q: 'Can I get help choosing a course or country?', a: 'We can help you organise your preferences and understand the typical application steps. Final choices should match your goals and eligibility.' },
      { q: 'Which documents are usually needed?', a: 'Academic records, passport details, course information and financial documents may be needed; exact requirements depend on the institution and destination.' },
      { q: 'Does Globon guarantee admission or a visa?', a: 'No. Institutions and immigration authorities make their own decisions.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Services, in navigation order. `children` = Level 3 items under a Level 2.
// `name` is the lowercase phrase used inside overview/FAQ sentences.
// ---------------------------------------------------------------------------
const L = '/images/services/loans/';

// "25. Licenses & Certifications": used for both Trade & Licences and IP & Certifications
const LICENSES_PAGE = {
  headline: 'Get the Right Registrations, Licenses & Certifications for Your Business',
  intro: 'Businesses may need different licenses, registrations, intellectual property protection and certifications depending on their industry, products, business activity and target market.',
  overview: 'Registration and certification assistance for brand protection, trade, food businesses and market access. Globon helps organise the next steps and documentation relevant to your requirement.',
};

// "40. Abroad Study Consultancy"
const ABROAD_STUDY_PAGE = {
  headline: 'Plan Your International Education Journey With the Right Guidance',
  intro: 'Choosing the right country, course and institution is an important decision.',
  overview: 'Globon helps you organise your study preferences, application information and the next steps for overseas education.',
  options: ['Country, course and institution planning', 'Application and academic document preparation', 'Admission and study-process coordination'],
  docs: ['Passport and academic records', 'Course/institution details', 'Language-test scores, where applicable', 'Statement of purpose, CV and financial documents as required'],
};

const TREE = {
  loans: [
    { slug: 'personal-loans', menu: 'Personal Loans', title: 'Personal Loan Assistance', type: 'loan', name: 'personal loan', img: L + 'loan-personal.jpg',
      headline: 'Financial Support for Your Personal Needs',
      intro: 'Whether you are planning an important family expense, managing an unexpected requirement, funding education, improving your home, or handling another eligible personal expense, finding the right financing option can make the process easier.',
      options: ['Family and personal expenses', 'Medical or education expenses', 'Home improvement and other eligible needs'],
      docs: ['PAN and identity/address proof', 'Recent bank statements', 'Salary slips or income proof, where applicable', 'ITR/business and financial documents, where applicable'] },
    { slug: 'education-loans', menu: 'Education Loans', title: 'Education Loan Assistance', type: 'loan', name: 'education loan', img: L + 'loan-education.jpg',
      headline: 'Support Your Higher Education Plans With the Right Financing',
      intro: 'From professional courses in India to higher education abroad, education expenses can involve tuition fees, accommodation, travel, books, equipment, and other study-related costs.',
      options: ['Tuition and course fees', 'Accommodation, books and study expenses', 'Study in India or abroad'],
      docs: ['Student and co-applicant KYC', 'Admission/offer letter and course fee details', 'Academic records', 'Income proof and bank statements'] },
    { slug: 'retailer-loans', menu: 'Retailer Loans', title: 'Retailer Loan Assistance', type: 'loan', name: 'retailer loan', img: L + 'loan-retailer.jpg',
      headline: 'Financial Support for Your Retail Business',
      intro: 'Running a retail business often requires continuous working capital for inventory purchases, shop expenses, seasonal demand, business improvements, and expansion.',
      options: ['Working capital and stock purchases', 'Shop improvements and equipment', 'Seasonal needs and business expansion'],
      docs: ['Owner KYC and business proof', 'Business bank statements', 'GST returns / ITR / financials, where applicable', 'Stock, equipment or expansion estimates'] },
    { slug: 'home-loans', menu: 'Home Loans', title: 'Home Loan Assistance', type: 'loan', name: 'home loan', img: L + 'loan-home.jpg',
      headline: 'Move Closer to Your Dream Home',
      intro: 'Buying or building a home is one of the most important financial decisions you may make.',
      options: ['Home / flat purchase', 'Home construction, extension or improvement', 'Home-loan balance transfer and seller balance transfer'],
      docs: ['Applicant KYC and income proof', 'Recent bank statements and ITR, where applicable', 'Sale agreement or property documents', 'Property valuation/legal documents if requested'] },
    { slug: 'property-loans', menu: 'Property Loans', title: 'Property Loan Assistance', type: 'loan', name: 'property loan', img: L + 'loan-property.jpg',
      headline: 'Unlock the Financial Value of Your Property',
      intro: "If you own a residential, commercial, or other eligible property, it may be possible to use the property as security for financing based on the lender's assessment and applicable conditions.",
      options: ['Loan against eligible property', 'Residential or commercial property finance', 'Property-related funding requirements'],
      docs: ['Applicant KYC and income records', 'Property ownership/title documents', 'Bank statements and ITR, where applicable', 'Property valuation/legal papers if requested'] },
    { slug: 'business-loans', menu: 'Business Loans', title: 'Business Loan Assistance', type: 'loan', name: 'business loan', img: L + 'loan-business.jpg',
      headline: 'Funding Support to Start, Strengthen and Grow Your Business',
      intro: 'Whether you are starting a new venture, expanding an existing business, purchasing equipment, increasing inventory, or managing working capital, access to the right business finance can help you plan your next step.',
      options: ['Working capital and inventory', 'Machinery, equipment and business improvements', 'Expansion and other eligible business needs'],
      docs: ['Owner/director KYC and business proof', 'Bank statements and financial statements', 'ITR and GST records, where applicable', 'Business plan, quotations or funding details'] },
    { slug: 'project-loans', menu: 'Project Loans', title: 'Project Loan Assistance', type: 'loan', name: 'project loan', img: L + 'loan-project.jpg',
      headline: 'Financial Support for Your New Business Project or Expansion',
      intro: 'Starting a new project or expanding an existing business requires careful planning, investment, and access to the right financing.',
      options: ['New projects and business expansion', 'Machinery, equipment and infrastructure', 'Project cost planning and documentation'],
      docs: ['Applicant/business KYC', 'Project report and cost estimates', 'Bank statements and financial records', 'Machinery/asset quotations and business registrations'] },
    { slug: 'pmegp-loans', menu: 'PMEGP Loans', title: 'PMEGP Loan Assistance', type: 'loan', name: 'PMEGP loan', img: L + 'loan-pmegp.jpg',
      headline: 'Start Your Business With PMEGP Financial Assistance',
      intro: 'Planning to start a new manufacturing or service enterprise?',
      options: ['PMEGP eligibility guidance', 'Project report and document preparation', 'Application coordination with relevant agencies/lenders'],
      docs: ['Applicant KYC and business details', 'Project report and estimated costs', 'Education/experience or category details if applicable', 'Bank and business documents as requested'] },
    { slug: 'stand-up-india-loans', menu: 'Stand-Up India Loans', title: 'Stand-Up India Loan Assistance', type: 'loan', name: 'Stand-Up India loan', img: L + 'loan-standup.jpg',
      headline: 'Business Finance & Guidance for Women and SC/ST Entrepreneurs',
      intro: 'The Stand-Up India Scheme was introduced to promote entrepreneurship by facilitating bank finance for eligible women and Scheduled Caste (SC) / Scheduled Tribe (ST) entrepreneurs setting up new, or “greenfield,” enterprises.',
      options: ['Scheme and eligibility guidance', 'Business/project documentation', 'Application coordination for eligible entrepreneurs'],
      docs: ['Applicant and business KYC', 'Project/business report', 'Financial projections and relevant quotations', 'Category/eligibility information as required by current scheme rules'] },
    { slug: 'vehicle-loans', menu: 'Vehicle Loans', title: 'Vehicle Loan Assistance', type: 'loan', name: 'vehicle loan', img: L + 'loan-vehicle.jpg',
      headline: 'Finance Your New, Used or Electric Vehicle With the Right Guidance',
      intro: 'Whether you are planning to buy a new car, used car, electric car, two-wheeler, or commercial vehicle, choosing the right financing option can make the purchase process easier.',
      options: ['New and used cars', 'Electric vehicles and two-wheelers', 'Commercial vehicle financing'],
      docs: ['Applicant KYC and income proof', 'Bank statements, where required', 'Vehicle quotation or vehicle/RC details', 'Existing loan/insurance details, if requested'] },
  ],

  'business-services': [
    { slug: 'business-registration', menu: 'Business Registration', title: 'Business Registration', group: true, img: '/images/section/business.jpg',
      headline: 'Start Your Business on the Right Foundation',
      intro: 'Setting up a business involves more than choosing a name.',
      overview: 'Choose support for company, LLP, partnership, startup, MSME or establishment registration. Globon helps organise the next steps and documentation relevant to your requirement.',
      children: [
        { slug: 'private-limited-company-registration', menu: 'Private Limited Company Registration', title: 'Private Limited Company Registration', type: 'registration', name: 'private limited company registration',
          headline: 'Build Your Business With a Formal Corporate Structure',
          intro: 'Starting a company is an important step for entrepreneurs who want to establish a separate legal business entity, define ownership, and create a structured foundation for future growth.',
          options: ['Company name and incorporation support', 'Director/shareholder documentation', 'MCA filing coordination'],
          docs: ['Proposed company name and business activity', 'Director/shareholder PAN and KYC', 'Registered-office address proof', 'Digital signatures and incorporation details as applicable'] },
        { slug: 'llp-registration', menu: 'LLP Registration', title: 'LLP Registration', type: 'registration', name: 'LLP registration',
          headline: 'Build Your Partnership on a Formal Business Structure',
          intro: 'A Limited Liability Partnership (LLP) can be a suitable structure for entrepreneurs, professionals, consultants, family businesses, and other ventures where two or more partners want to operate through a formal legal entity with a partnership-style management structure.',
          options: ['LLP structure and partner details', 'Designated partner and incorporation documents', 'LLP filing and agreement coordination'],
          docs: ['Partner KYC and PAN', 'Registered-office address proof', 'LLP name and business activity', 'Partner contribution and agreement details'] },
        { slug: 'partnership-deed-registration', menu: 'Partnership Deed Preparation / Registration', title: 'Partnership Deed Preparation / Registration', type: 'registration', name: 'partnership deed registration',
          headline: 'Create a Clear and Structured Partnership for Your Business',
          intro: 'Starting a business with one or more partners requires more than a shared business idea.',
          options: ['Partner roles and responsibilities', 'Capital contribution and profit-sharing terms', 'Partnership deed preparation/registration support'],
          docs: ['Partners’ identity/address details', 'Business name and address', 'Capital, profit-sharing and partner roles', 'Other details required for the applicable registration process'] },
        { slug: 'society-club-registration', menu: 'Society / Club Registration', title: 'Society / Club Registration', type: 'registration', name: 'society / club registration',
          headline: 'Register Your Society or Club With the Right Structure & Documentation',
          intro: 'A society or club can provide a formal structure for organisations established for social, charitable, educational, cultural, literary, scientific, sports or other eligible non-profit objectives, subject to the applicable law and registration requirements.',
          options: ['Society/club purpose and structure', 'Member/office-bearer details and governing documents', 'Registration and applicable compliance support'],
          docs: ['Proposed objectives and governing rules', 'Members and office-bearer details', 'Address proof and KYC', 'Additional state/UT-specific forms, where applicable'] },
      ] },
    { slug: 'trade-licences', menu: 'Trade & Licences', title: 'Trade & Licences', group: true, img: '/images/section/globon-multibank-trust-banner.jpg',
      ...LICENSES_PAGE,
      children: [
        { slug: 'export-import-licence-iec', menu: 'Export-Import Licence / IEC Assistance', title: 'Export-Import Licence / IEC Assistance', type: 'registration', name: 'export-import license / IEC assistance',
          overview: 'Globon helps you understand the requirements for export-import license / IEC, prepare relevant information and coordinate the process.',
          headline: 'Start Your Import & Export Business With the Right Trade Registration',
          intro: 'Planning to import goods into India or export products to international markets?',
          options: ['IEC application support', 'Business and bank-detail preparation', 'Import-export registration coordination'],
          docs: ['Business PAN and address proof', 'Applicant/entity details', 'Bank details and business registration records', 'IEC-related information requested on the official portal'] },
        { slug: 'apeda-registration', menu: 'APEDA Registration', title: 'APEDA Registration', type: 'registration', name: 'APEDA registration',
          headline: 'Get Your APEDA Registration Ready for Agricultural & Processed Food Exports',
          intro: 'Planning to export agricultural, processed food or other APEDA-scheduled products from India?',
          options: ['APEDA applicability guidance', 'RCMC application information preparation', 'Export-related documentation support'],
          docs: ['IEC and business details', 'PAN and bank details', 'Products/activity details', 'Supporting records required for the applicable APEDA category'] },
        { slug: 'ad-code-registration', menu: 'AD Code Registration', title: 'AD Code Registration', type: 'registration', name: 'AD Code registration',
          headline: 'Register Your Export Bank Account for Customs & International Trade',
          intro: 'For exporters, the correct bank and Authorized Dealer (AD) details are an important part of the export setup.',
          options: ['AD Code and bank certificate documentation', 'ICEGATE / port-related registration guidance', 'Application coordination and follow-up'],
          docs: ['IEC and exporter information', 'Bank certificate with AD Code', 'PAN and bank details', 'Port/ICEGATE details as applicable'] },
        { slug: 'icegate-registration', menu: 'ICEGATE Registration', title: 'ICEGATE Registration', type: 'registration', name: 'ICEGATE registration',
          headline: 'Set Up Your Customs Account for Import & Export Activities',
          intro: 'ICEGATE (Indian Customs Electronic Gateway) is the electronic platform used by Indian Customs for a wide range of customs and import-export related services.',
          options: ['ICEGATE account registration support', 'Importer/exporter and authorised-user details', 'Customs portal documentation coordination'],
          docs: ['IEC and business details', 'PAN and authorised-user information', 'Digital signature, where applicable', 'Bank/customs-related information required by ICEGATE'] },
        { slug: 'fssai-registration-licensing', menu: 'FSSAI Registration & Licensing', title: 'FSSAI Registration & Licensing', type: 'registration', name: 'FSSAI registration & licensing',
          headline: 'Get Your Food Business Registered With the Right FSSAI Approval',
          intro: 'Every food business in India is required to obtain the applicable FSSAI Registration or License before carrying on food business activities.',
          options: ['FSSAI registration or licence category guidance', 'Food business and premises information', 'Application and renewal documentation support'],
          docs: ['Business KYC and premises address', 'Food category and activity details', 'Product/production or turnover information', 'Other documents based on the applicable FSSAI category'] },
        { slug: 'gem-registration', menu: 'GeM Registration', title: 'GeM Registration', type: 'registration', name: 'GeM registration',
          headline: 'Register Your Business on Government e-Marketplace & Start Selling to Government Buyers',
          intro: "The Government e-Marketplace (GeM) is India's public procurement marketplace for government buyers and eligible sellers and service providers.",
          options: ['Seller/service-provider registration', 'Business, bank and authorised-person details', 'Product/service catalogue information support'],
          docs: ['Business registration and PAN', 'GSTIN, where applicable', 'Bank and authorised-person details', 'Product/service catalogue information'] },
      ] },
    { slug: 'ip-certifications', menu: 'IP & Certifications', title: 'IP & Certifications', group: true, img: '/images/section/service-detail.jpg',
      ...LICENSES_PAGE,
      children: [
        { slug: 'trademark-registration', menu: 'Trademark Registration', title: 'Trademark Registration', type: 'registration', name: 'trademark registration',
          headline: 'Protect Your Brand Name, Logo & Business Identity',
          intro: 'Your brand is one of your most valuable business assets.',
          options: ['Trademark search/application guidance', 'Brand name, logo or eligible mark filing support', 'Application status and response coordination'],
          docs: ['Applicant/entity KYC', 'Trademark/logo or mark representation', 'Goods/services and relevant class details', 'Proof of use or authorisation, where applicable'] },
        { slug: 'patent-registration', menu: 'Patent Registration', title: 'Patent Registration', type: 'registration', name: 'patent registration',
          headline: 'Protect Your Invention & Secure Your Intellectual Property',
          intro: 'An innovative product, technical solution or process can become a valuable business asset.',
          options: ['Invention details and patent-application support', 'Specification/drawing documentation coordination', 'Filing and application-status assistance'],
          docs: ['Inventor/applicant details', 'Invention description and technical details', 'Drawings/specification, where applicable', 'Ownership/assignment documents if relevant'] },
        { slug: 'iso-certification', menu: 'ISO Certification', title: 'ISO Certification', type: 'registration', name: 'ISO certification',
          headline: 'Build Business Credibility With the Right ISO Certification',
          intro: 'An ISO certification can help demonstrate that your organisation follows a structured management system that meets the requirements of a specified ISO standard.',
          options: ['ISO standard and certification-scope guidance', 'Process/documentation readiness', 'Certification audit coordination with the relevant provider'],
          docs: ['Organisation profile and certification scope', 'Process documents and existing procedures', 'Records relevant to the selected ISO standard', 'Additional evidence required by the certification body'] },
        { slug: 'halal-certification', menu: 'Halal Certification', title: 'Halal Certification', type: 'registration', name: 'Halal certification',
          headline: 'Build Halal-Compliant Products & Prepare Your Business for Halal Markets',
          intro: 'Halal certification can help eligible businesses demonstrate that their products, processes and facilities meet the requirements of a recognised Halal certification system.',
          options: ['Certification-scope and requirement guidance', 'Product, ingredient and process documentation', 'Application coordination with a suitable certification body'],
          docs: ['Business and facility details', 'Product/ingredient information', 'Production process and supporting records', 'Documents required by the selected certification body'] },
        { slug: 'barcode-registration', menu: 'Barcode Registration', title: 'Barcode Registration', type: 'registration', name: 'barcode registration',
          headline: 'Get Authorised GS1 Barcodes for Your Products',
          intro: 'Selling products through retail stores, e-commerce marketplaces or distribution networks often requires a reliable product identification system.',
          options: ['GS1 barcode / GTIN registration guidance', 'Business and brand details', 'Product catalogue and barcode data preparation'],
          docs: ['Business and brand details', 'Product catalogue and product descriptions', 'Applicant/authorised-person KYC', 'Details required for GS1 registration'] },
      ] },
    { slug: 'tax-accounting', menu: 'Tax & Accounting', title: 'Tax & Accounting', group: true, img: '/images/item/graph.jpg',
      headline: 'Keep Your Business Finances Organized and Your Tax Requirements on Track',
      intro: 'Managing taxes, financial records, returns, and compliance can take valuable time away from running your business.',
      overview: 'Get help organising applicable GST, income-tax return and audit requirements. Globon helps organise the next steps and documentation relevant to your requirement.',
      children: [
        { slug: 'gst-registration-filing', menu: 'GST Registration & Filing', title: 'GST Registration & Filing', type: 'registration', name: 'GST registration & filing',
          headline: 'Stay GST-Ready With the Right Registration and Filing Support',
          intro: 'GST compliance is an important part of running many businesses in India.',
          options: ['GST registration assistance', 'GST return filing support', 'Amendments, cancellation and compliance coordination where applicable'],
          docs: ['PAN and authorised signatory details', 'Business constitution and address proof', 'Bank details', 'Sales/business information and other portal requirements'] },
        { slug: 'income-tax-return-filing', menu: 'Income Tax Return (ITR) Filing', title: 'Income Tax Return (ITR) Filing', type: 'registration', name: 'income tax return (ITR) filing',
          headline: 'File Your Income Tax Return With the Right Guidance',
          intro: 'Filing an Income Tax Return involves reporting your income, applicable deductions, taxes paid, and other required financial information to the Income Tax Department.',
          options: ['ITR preparation and filing support', 'Income, deduction and tax-paid information review', 'Individual and eligible business return assistance'],
          docs: ['PAN and Aadhaar details', 'Form 16 / salary or other income records', 'Bank and tax-paid details', 'Investment/deduction proofs and prior return, where relevant'] },
        { slug: 'auditing-services', menu: 'Auditing Services', title: 'Auditing Services', type: 'registration', name: 'auditing services',
          headline: 'Accurate Records. Clear Financial Reporting. Professional Audit Support.',
          intro: 'An audit provides an independent examination of financial information and records in accordance with the applicable legal, regulatory, and professional requirements.',
          options: ['Financial-record and statement review', 'Applicable statutory/compliance audit coordination', 'Audit documentation support'],
          docs: ['Financial statements and ledgers', 'Invoices, vouchers and bank records', 'Relevant registration/compliance documents', 'Other records based on the audit scope'] },
      ] },
    { slug: 'business-planning', menu: 'Business Planning', title: 'Business Planning', type: 'consult', img: '/images/section/hero-slide3-msme-workshop.jpg',
      headline: 'Build a Clear Business Plan for Funding, Investment & Growth',
      intro: 'A well-structured project report can help present your business idea, investment requirements, operating plan and financial projections in a clear format.',
      overview: 'Globon helps you understand the requirements for project report / investment plan, prepare relevant information and coordinate the process.',
      options: ['Business/project overview', 'Investment, cost and funding plan', 'Revenue assumptions and supporting information'],
      docs: ['Promoter/business profile', 'Project cost and funding requirement', 'Supplier quotations and operating costs', 'Sales/revenue assumptions and supporting financial information'],
      faqs: [
        { q: 'What does project report / investment plan involve?', a: 'The process depends on your business/activity, documents and the requirements of the relevant authority or service provider.' },
        { q: 'Which documents are required?', a: 'The indicative list above helps you prepare. The final checklist depends on your situation and current requirements.' },
        { q: 'Can the registration or service be guaranteed?', a: 'No. The outcome and timeline depend on the relevant authority, certification body, institution or provider.' },
      ] },
    { slug: 'legal-support', menu: 'Legal Support', title: 'Legal Support', type: 'consult', img: '/images/section/globon-takeover-handshake.jpg',
      headline: 'Practical Legal Support for Businesses, Property Matters & Everyday Requirements',
      intro: 'Legal requirements can arise at every stage of a business—from contracts and agreements to employment matters, property transactions, disputes and compliance.',
      overview: 'Globon helps organise relevant legal and business documents and coordinate the next steps with the appropriate professional where required.',
      options: ['Contracts, agreements and business documentation', 'Property or transaction-related documentation', 'Coordination for relevant legal support'],
      docs: ['Identity and contact details', 'Relevant contracts, agreements or notices', 'Property/transaction or business records', 'Background and supporting correspondence'],
      eligibility: 'The applicable process and scope depend on the matter and current legal requirements. A qualified legal professional should provide formal legal advice where required.',
      faqs: [
        { q: 'What legal matters can I enquire about?', a: 'You can enquire about business, contract, property or other document-related requirements. The available scope will be confirmed for your matter.' },
        { q: 'What should I share first?', a: 'Provide a brief explanation and relevant documents. Sensitive or confidential material should be shared only through an appropriate secure channel.' },
        { q: 'Does Globon replace a lawyer or court?', a: 'No. Where professional legal advice or representation is required, it must be handled by a suitably qualified professional.' },
      ] },
  ],

  // The content document has one "40. Abroad Study Consultancy" page; it is used
  // as-is for these three menu items.
  'study-abroad': [
    { slug: 'study-planning', menu: 'Study Planning', title: 'Study Planning', type: 'study', img: '/images/services/4.png', ...ABROAD_STUDY_PAGE },
    { slug: 'applications-documents', menu: 'Applications & Documents', title: 'Applications & Documents', type: 'study', img: '/images/section/consult_crop_4_5.jpg', ...ABROAD_STUDY_PAGE },
    { slug: 'admission-support', menu: 'Admission Support', title: 'Admission Support', type: 'study', img: '/images/section/hero-bright-slide2.jpg', ...ABROAD_STUDY_PAGE },
    { slug: 'education-loan-support', menu: 'Education Loan Support', title: 'Education Loan Support', type: 'loan', name: 'education loan', img: L + 'loan-education.jpg',
      headline: 'Support Your Higher Education Plans With the Right Financing',
      intro: 'From professional courses in India to higher education abroad, education expenses can involve tuition fees, accommodation, travel, books, equipment, and other study-related costs.',
      options: ['Tuition and course fees', 'Accommodation, books and study expenses', 'Study in India or abroad'],
      docs: ['Student and co-applicant KYC', 'Admission/offer letter and course fee details', 'Academic records', 'Income proof and bank statements'] },
  ],

  insurance: [
    { slug: 'life-insurance', menu: 'Life Insurance', title: 'Life Insurance', type: 'insurance', name: 'life insurance', img: '/images/section/why-ksfe-couple.jpg',
      headline: "Protect Your Family's Financial Future With the Right Life Insurance",
      intro: "Life insurance can provide financial protection to your family or other eligible beneficiaries if the insured person dies during the policy term, subject to the policy's terms and conditions.",
      options: ['Term and other eligible life-insurance options', 'Coverage, premium and nominee details', 'Policy application and servicing support'],
      docs: ['Applicant KYC and nominee details', 'Age and proposal information', 'Medical/financial information if requested', 'Income or other supporting documents, where applicable'] },
    { slug: 'health-insurance', menu: 'Health Insurance', title: 'Health Insurance', type: 'insurance', name: 'health insurance', img: '/images/services/6.png',
      headline: 'Protect Yourself & Your Family From Unexpected Medical Expenses',
      intro: 'Medical treatment can create a significant financial burden when you are not adequately prepared.',
      options: ['Individual and family health cover options', 'Coverage, exclusions and waiting-period review', 'Policy application and servicing support'],
      docs: ['Policyholder/family KYC and age details', 'Health and medical history as requested', 'Existing policy information, if any', 'Other insurer-specific proposal details'] },
    // "48. Vehicle Insurance" is a category-style page in the content document
    { slug: 'vehicle-insurance', menu: 'Vehicle Insurance', title: 'Vehicle Insurance', categoryPage: true, img: L + 'loan-vehicle.jpg',
      headline: 'Protect Your Car, Bike & Commercial Vehicle With the Right Insurance',
      intro: 'Explore motor-insurance support for eligible vehicles. Policy cover, premium, exclusions and legal requirements depend on the selected insurer, vehicle and applicable rules.',
      overview: 'Explore vehicle insurance support for cars, bikes and eligible commercial vehicles. Globon helps organise the next steps and documentation relevant to your requirement.',
      options: ['Requirement review', 'Document and information support', 'Process coordination'] },
    { slug: 'property-insurance', menu: 'Property Insurance', title: 'Property Insurance', type: 'insurance', name: 'home insurance', img: L + 'loan-home.jpg',
      headline: 'Protect Your Home, Household Contents & Valuable Property Against Unexpected Risks',
      intro: 'Your home is one of your most valuable assets.',
      options: ['Building and structure cover', 'Household contents, where available', 'Covered risks, exclusions and policy limits review'],
      docs: ['Property ownership/address details', 'Building and estimated value information', 'Contents/asset list if covered', 'Applicant KYC and insurer-required information'] },
    { slug: 'business-insurance', menu: 'Business Insurance', title: 'Business Insurance', type: 'insurance', name: 'shop insurance', img: L + 'loan-retailer.jpg',
      headline: 'Protect Your Shop, Stock, Contents & Business Assets Against Unexpected Risks',
      intro: 'Your shop is more than a physical space.',
      options: ['Shop premises and fixtures', 'Stock, equipment and contents where eligible', 'Covered risks and business-specific protection review'],
      docs: ['Business/premises details', 'Stock, equipment and asset estimates', 'Owner/business KYC', 'Information on safety/security and prior claims, if requested'] },
    { slug: 'travel-insurance', menu: 'Travel Insurance', title: 'Travel Insurance', type: 'insurance', name: 'travel insurance', img: '/images/section/hero-bright-slide1.jpg',
      headline: 'Travel With Greater Confidence & Protection Against Unexpected Expenses',
      intro: 'A planned journey can still involve unexpected situations such as medical emergencies, travel delays, baggage problems, passport loss or trip-related disruptions.',
      options: ['Domestic and international travel', 'Medical and travel-related cover options', 'Trip dates, destination and policy-term review'],
      docs: ['Traveller KYC and age details', 'Passport and destination, if applicable', 'Travel dates and itinerary', 'Medical or other details requested by the insurer'] },
    { slug: 'group-insurance', menu: 'Group Insurance', title: 'Group Insurance', type: 'insurance', name: 'group insurance', img: '/images/section/hero-slide3-msme-workshop.jpg',
      headline: 'Protect Your Employees, Members & Eligible Groups With Suitable Insurance Support',
      intro: 'Businesses, institutions and organisations may have a responsibility to consider the financial well-being of their employees or members.',
      options: ['Employee or member group coverage', 'Group health/life options where available', 'Member data and group-policy coordination'],
      docs: ['Employer/organisation details', 'Member/employee census and age data', 'Desired cover and policy scope', 'Existing policy details, if applicable'] },
  ],

  'real-estate': [
    { slug: 'property-buying-selling', menu: 'Property Buying & Selling', title: 'Property Buying & Selling', type: 'realestate', name: 'property buying & selling', img: '/images/services/8.png',
      headline: 'Buy or Sell Property With Practical Guidance, Documentation Support & Transaction Coordination',
      intro: 'Buying or selling a property can involve many decisions—from identifying the right property and understanding the transaction to organising documents, coordinating with the other party and completing the applicable registration process.',
      options: ['Property purchase assistance', 'Property sale coordination', 'Document and transaction-process support'],
      docs: ['Buyer/seller KYC', 'Property details and title documents', 'Relevant tax/encumbrance/approval records', 'Agreement and transaction documents as applicable'] },
    { slug: 'property-advisory', menu: 'Property Advisory', title: 'Property Advisory', type: 'realestate', name: 'property consultation & investment', img: '/images/section/globon-hero-advisory.jpg',
      headline: 'Make Better-Prepared Property Decisions With Practical Guidance & Information Support',
      intro: 'Buying property for personal use and investing in real estate are important decisions that can involve substantial money, long-term commitments and multiple considerations.',
      options: ['Property requirement and budget planning', 'Property information and investment considerations', 'Due-diligence and professional support coordination'],
      docs: ['Budget and investment objectives', 'Location and property preferences', 'Property details and available records', 'Other due-diligence information relevant to the enquiry'] },
    { slug: 'property-documentation', menu: 'Property Documentation', title: 'Property Documentation', type: 'realestate', name: 'property documentation', img: L + 'loan-property.jpg',
      headline: 'Organise Your Home & Property Documents With Practical Assistance and Coordination',
      intro: 'Property transactions and ownership can involve a wide range of documents.',
      options: ['Ownership/title document organisation', 'Property tax, plan and transaction records', 'Documentation checklist and coordination'],
      docs: ['Title/ownership records', 'Property tax receipts and plans', 'Survey/encumbrance or transaction records, where applicable', 'Buyer/seller/lender document requests'] },
    { slug: 'construction-planning', menu: 'Construction & Planning', title: 'Construction & Planning', type: 'realestate', name: 'construction & planning', img: '/images/page-title/globon-empowering-building.jpg',
      headline: 'Plan Your Building Project With Clear Requirements, Building Plans & Cost Estimates',
      intro: 'A construction project starts with proper planning.',
      options: ['Project requirements and site information', 'Building plan and cost estimate coordination', 'Applicable local approval requirements'],
      docs: ['Site/location details and measurements', 'Building requirements and proposed use', 'Existing plans or site documents', 'Information required for estimates and applicable approvals'] },
    { slug: 'property-finance', menu: 'Property Finance', title: 'Property Finance', type: 'realestate', name: 'real estate finance', img: L + 'loan-home.jpg',
      headline: 'Get Practical Assistance With Property Financing, Documentation & Loan Coordination',
      intro: 'Buying a home, constructing a property or meeting other eligible property-related financial requirements can require substantial funding.',
      options: ['Home or construction finance', 'Property-backed funding options', 'Income, property document and loan-process coordination'],
      docs: ['Applicant KYC and income proof', 'Bank statements and ITR, where applicable', 'Property/title documents', 'Valuation/legal documents if required by the lender'] },
  ],

  'digital-services': [
    { slug: 'software-automation', menu: 'Software & Automation', title: 'Software & Automation', group: true, img: '/images/services/9.png',
      headline: 'Simplify Your Business Operations With the Right ERP & CRM Solutions',
      intro: 'Managing customers, sales, inventory, finance, employees, and daily business operations across multiple spreadsheets and disconnected tools can become difficult as your business grows.',
      overview: 'Explore ERP, CRM and organisation-registration support according to your needs. Globon helps organise the next steps and documentation relevant to your requirement.',
      children: [
        { slug: 'erp-software-solutions', menu: 'ERP Software Solutions', title: 'ERP Software Solutions', type: 'digital', name: 'ERP software solutions',
          headline: 'Organise Your Business Operations With the Right ERP Software',
          intro: 'As your business grows, managing finance, inventory, purchasing, sales, employees and daily operations through separate spreadsheets and disconnected systems can become difficult.',
          options: ['Business process and workflow review', 'ERP modules such as finance, inventory or sales', 'Implementation scope and user requirements'],
          docs: ['Business process and workflow details', 'User roles and team size', 'Required modules and existing tools', 'Reporting, migration and integration needs'] },
        { slug: 'crm-software-solutions', menu: 'CRM Software Solutions', title: 'CRM Software Solutions', type: 'digital', name: 'CRM software solutions',
          headline: 'Manage Your Leads, Customers & Sales With the Right CRM System',
          intro: 'As your business grows, managing leads, customer information, follow-ups and sales activities through spreadsheets, WhatsApp chats and disconnected tools can become difficult.',
          options: ['Lead and customer management', 'Sales pipeline and follow-up workflows', 'CRM selection and setup requirements'],
          docs: ['Lead sources and customer journey', 'Sales stages and follow-up process', 'User/team details', 'Existing data and integration requirements'] },
        // In the navigation map but not in the content document: no content until it is supplied.
        { slug: 'ai-automation', menu: 'AI Automation', title: 'AI Automation', noContent: true },
      ] },
    { slug: 'web-development', menu: 'Web Development', title: 'Web Development', type: 'digital', name: 'website & technology services', img: '/images/widget/card-service-3.jpg',
      headline: 'Build a Professional Website That Supports Your Business, Brand & Growth',
      intro: 'Your website is often the first digital touchpoint between your business and potential customers.',
      options: ['Business and corporate websites', 'Service pages and campaign landing pages', 'Responsive design, development and launch support'],
      docs: ['Business profile and goals', 'Service/product information and website content', 'Logo, images and brand assets, if available', 'Feature, domain and hosting requirements'] },
    { slug: 'branding-design', menu: 'Branding & Design', title: 'Branding & Design', type: 'digital', name: 'branding & creative services', img: '/images/widget/card-service-5.jpg',
      headline: 'Build a Strong, Consistent & Professional Brand Identity for Your Business',
      intro: 'Your brand is more than a logo.',
      options: ['Logo and typography', 'Brand identity and visual assets', 'Creative design aligned with audience and brand positioning'],
      docs: ['Business name and profile', 'Audience and brand positioning', 'Existing logo/assets and design references', 'Required creative formats and deliverables'] },
    { slug: 'digital-marketing', menu: 'Digital Marketing', title: 'Digital Marketing', type: 'digital', name: 'digital marketing & advertising', img: '/images/widget/card-service-7.jpg',
      headline: 'Reach the Right Audience, Build Online Visibility & Generate More Opportunities',
      intro: 'Getting your business in front of the right people requires more than simply running advertisements.',
      options: ['Digital marketing planning', 'SEO and Google Ads', 'Online advertising and lead-generation campaign support'],
      docs: ['Business goals and target audience', 'Services/offers and campaign brief', 'Website/landing page and creative assets', 'Budget, analytics and platform access as applicable'] },
    { slug: 'social-media-content', menu: 'Social Media & Content', title: 'Social Media & Content', type: 'digital', name: 'social media & content', img: '/images/widget/card-service-9.jpg',
      headline: 'Build a Consistent Social Presence, Create Better Content & Connect With Your Audience',
      intro: 'Social media gives businesses a direct way to communicate with customers, showcase products and services, build awareness and stay connected with their audience.',
      options: ['Social media marketing and management', 'Content planning and creation', 'Publishing coordination and performance review'],
      docs: ['Brand profile and social account details', 'Target audience and content goals', 'Images, videos and existing brand assets', 'Publishing schedule and platform access as applicable'] },
  ],
};

const CATEGORY_IMAGES = {
  loans: '/images/services/1.png',
  'business-services': '/images/services/2.png',
  'study-abroad': '/images/services/4.png',
  insurance: '/images/services/6.png',
  'real-estate': '/images/services/8.png',
  'digital-services': '/images/services/9.png',
};

function buildService(item, category, parentImg) {
  const heroImage = item.img || parentImg || CATEGORY_IMAGES[category];
  const base = {
    category,
    categoryTitle: CATEGORY_TITLES[category],
    title: item.title,
    slug: item.slug,
    subtitle: item.headline,
    shortDesc: item.intro,
    heroImage,
    overviewTitle: item.title,
    overviewImage: CATEGORY_IMAGES[category],
  };

  const empty = {
    overviewDesc: '',
    overviewBullets: [],
    features: [],
    optionsBadge: '',
    optionsTitle: '',
    options: [],
    documentGroups: [],
    advisoryNote: '',
    eligibilityDesc: '',
    feesDesc: '',
    faqs: [],
  };

  // No page for this service in the content document
  if (item.noContent) {
    return { ...base, subtitle: '', shortDesc: '', overviewTitle: '', ...empty };
  }

  // Category-style page (Level 2 with Level 3 children, or "48. Vehicle Insurance"):
  // overview, "Services" cards and the general FAQs
  if (item.group || item.categoryPage) {
    const options = item.group
      ? item.children.map((c) => ({ title: c.title, desc: c.headline || '', icon: (TYPES[c.type] || {}).icon || '📌' }))
      : item.options.map((o) => ({ title: o, desc: '', icon: '📌' }));
    return {
      ...base,
      ...empty,
      overviewDesc: item.overview,
      optionsBadge: item.title,
      optionsTitle: 'Services',
      options,
      faqs: GROUP_FAQS,
    };
  }

  const t = TYPES[item.type];
  const faqs = item.faqs || (typeof t.faqs === 'function' ? t.faqs(item.name) : t.faqs);
  return {
    ...base,
    overviewDesc: item.overview || t.overview(item.name),
    overviewBullets: [], // the content document's overview is a single sentence, no bullets
    features: t.features,
    optionsBadge: item.title,
    optionsTitle: 'Options / Services',
    options: item.options.map((o) => ({ title: o, desc: '', icon: t.icon })),
    documentGroups: [{ title: 'Documents Required', subtitle: '', icon: '📋', docs: item.docs }],
    advisoryNote: NOTE,
    eligibilityDesc: item.eligibility || t.eligibility,
    feesDesc: t.fees,
    faqs,
  };
}

function toDbRow(s, order) {
  return {
    ...s,
    overviewBullets: JSON.stringify(s.overviewBullets),
    features: JSON.stringify(s.features),
    options: JSON.stringify(s.options),
    documentGroups: JSON.stringify(s.documentGroups),
    faqs: JSON.stringify(s.faqs),
    order,
  };
}

// Same shape as parseDbService() in lib/servicesStore.js
function fromDbRow(r) {
  const parse = (v) => { try { return JSON.parse(v || '[]'); } catch { return []; } };
  const features = parse(r.features);
  return {
    id: String(r.id), category: r.category, categoryTitle: r.categoryTitle || '', title: r.title, slug: r.slug,
    subtitle: r.subtitle || '', shortDesc: r.shortDesc || '', heroImage: r.heroImage || '',
    overviewTitle: r.overviewTitle || '', overviewDesc: r.overviewDesc || '', overviewImage: r.overviewImage || '',
    overviewBullets: parse(r.overviewBullets), features, highlights: features,
    optionsBadge: r.optionsBadge || '', optionsTitle: r.optionsTitle || '', options: parse(r.options),
    documentGroups: parse(r.documentGroups), advisoryNote: r.advisoryNote || '', eligibilityDesc: r.eligibilityDesc || '',
    feesDesc: r.feesDesc || '', faqs: parse(r.faqs), order: r.order ?? 0,
    createdAt: new Date(r.createdAt).toISOString(), updatedAt: new Date(r.updatedAt).toISOString(),
  };
}

async function main() {
  let order = 100;
  let created = 0;
  let updated = 0;

  const upsert = async (item, category, parentImg) => {
    const row = toDbRow(buildService(item, category, parentImg), ++order);
    for (const [k, v] of Object.entries(row)) {
      if (typeof v === 'string' && v.length > 191 && ['title', 'slug', 'subtitle', 'heroImage', 'overviewTitle', 'overviewImage', 'optionsBadge', 'optionsTitle', 'category', 'categoryTitle'].includes(k)) {
        throw new Error(`${item.slug}.${k} is longer than 191 characters`);
      }
    }
    const existing = await prisma.service.findUnique({ where: { slug: item.slug } });
    if (existing) { await prisma.service.update({ where: { slug: item.slug }, data: row }); updated++; }
    else { await prisma.service.create({ data: row }); created++; }
  };

  const menuChildren = (items, category, parentId, parentImg) => items.map((item, i) => {
    const id = `menu-${item.slug}`;
    return {
      id,
      title: item.menu,
      url: `/services/${category}/${item.slug}`,
      parentId,
      order: i + 1,
      children: item.children ? menuChildren(item.children, category, id, item.img || parentImg) : [],
    };
  });

  for (const [category, items] of Object.entries(TREE)) {
    for (const item of items) {
      await upsert(item, category);
      for (const child of item.children || []) await upsert(child, category, item.img);
    }
  }

  // Rebuild the services cache the public pages read
  const rows = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  fs.writeFileSync(path.join(DATA_DIR, 'services.json'), JSON.stringify(rows.map(fromDbRow), null, 2), 'utf-8');

  // Rebuild the menu hierarchy (back up the current one first)
  const menuFile = path.join(DATA_DIR, 'menu_hierarchy.json');
  if (fs.existsSync(menuFile)) fs.copyFileSync(menuFile, path.join(DATA_DIR, 'menu_hierarchy.backup.json'));
  const menu = Object.entries(TREE).map(([category, items], i) => {
    const id = `menu-${category}`;
    return {
      id,
      title: CATEGORY_TITLES[category],
      url: `/services/${category}`,
      parentId: null,
      order: i + 1,
      children: menuChildren(items, category, id),
    };
  });
  fs.writeFileSync(menuFile, JSON.stringify(menu, null, 2), 'utf-8');

  console.log(`Services created: ${created}, updated: ${updated}. Total rows in MySQL: ${rows.length}.`);
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
