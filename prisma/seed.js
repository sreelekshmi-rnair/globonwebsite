const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Admin User
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: 'admin' }
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        name: 'Globon Admin',
      }
    });
    console.log('Created default admin: admin / admin123');
  }

  // 2. Initial Services
  const services = [
    {
      title: 'Loans & Advances',
      slug: 'loans-advances',
      category: 'Financial Solutions',
      icon: 'flaticon-business',
      shortDescription: 'Comprehensive loan advisory and facilitation across top private and nationalized banks.',
      description: 'Globon Business Solutions partners with India’s leading banks and NBFCs to provide customized loan solutions. Whether you require business expansion capital, machinery loans, personal credit, or property-backed financing, our expert loan consultants manage the entire lifecycle from documentation to disbursement.',
      features: 'Quick disbursement timelines\nCompetitive interest rates from 8.4%\nTransparent terms with zero hidden charges\nDedicated loan manager assisting door-step documentation\nSpecialized schemes for MSMEs, startups, and women entrepreneurs',
      image: '/assets/images/service/service-01.jpg',
      isFeatured: true,
      order: 1
    },
    {
      title: 'Business & Financial Solutions',
      slug: 'business-financial-solutions',
      category: 'Corporate Advisory',
      icon: 'flaticon-investment',
      shortDescription: 'Project reports, CMA data preparation, GST, taxation, accounting, and compliance.',
      description: 'Navigate complex business financials with expert guidance. We help entrepreneurs and enterprises prepare bankable project reports, audited CMA data, tax structuring, internal audits, and government subsidy filings.',
      features: 'Bank-compliant Detailed Project Reports (DPR)\nAccurate Credit Monitoring Arrangement (CMA) data\nEnd-to-end GST, Income Tax & statutory compliance\nFinancial restructuring and working capital advisory\nSubsidy assistance under state & central government programs',
      image: '/assets/images/service/service-02.jpg',
      isFeatured: true,
      order: 2
    },
    {
      title: 'Insurance Advisory',
      slug: 'insurance-advisory',
      category: 'Risk Management',
      icon: 'flaticon-shield',
      shortDescription: 'Protecting your business assets, employees, family, and investments against unforeseen risks.',
      description: 'Comprehensive risk management through customized life, health, marine, fire, and commercial liability insurance portfolios from top-rated insurers.',
      features: 'Corporate group health & accident policies\nFactory, warehouse, and machinery transit insurance\nDirectors and Officers (D&O) liability cover\nDedicated claim settlement assistance desk',
      image: '/assets/images/service/service-03.jpg',
      isFeatured: true,
      order: 3
    },
    {
      title: 'Real Estate & Property Solutions',
      slug: 'real-estate-solutions',
      category: 'Asset Advisory',
      icon: 'flaticon-real-estate',
      shortDescription: 'Strategic property acquisition, commercial leasing, legal valuation, and title diligence.',
      description: 'Expert property advisory for residential, industrial, and commercial properties. We carry out legal due diligence, title search, market valuation, and documentation for smooth transactions.',
      features: 'Commercial space leasing & sales\nCertified legal title verification\nApproved property valuation reports for bank collaterals\nIndustrial plot acquisition and zoning guidance',
      image: '/assets/images/service/service-04.jpg',
      isFeatured: false,
      order: 4
    },
    {
      title: 'Digital & Growth Marketing',
      slug: 'digital-marketing',
      category: 'Digital Solutions',
      icon: 'flaticon-market',
      shortDescription: 'High-impact digital marketing, corporate branding, web presence, and lead generation.',
      description: 'Elevate your brand presence in the digital ecosystem with targeted campaigns, website development, corporate identity branding, and performance lead generation.',
      features: 'Modern responsive web development\nPerformance marketing on Google & Social Media\nSEO and local search ranking optimization\nCorporate branding, brochure & collateral design',
      image: '/assets/images/service/service-05.jpg',
      isFeatured: false,
      order: 5
    }
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s
    });
  }
  console.log('Seeded services');

  // 3. Initial Loans
  const loans = [
    {
      title: 'Business & MSME Loan',
      slug: 'business-loan',
      category: 'Commercial',
      interestRate: '9.25% p.a.',
      maxAmount: 'Up to ₹2 Crores',
      tenure: '12 to 84 Months',
      processingFee: '0.75% to 1.5%',
      shortDescription: 'Fuel your enterprise growth with collateral-free and secured business financing.',
      description: 'Ideal for small and medium enterprises needing working capital, machinery upgrades, inventory purchase, or facility expansion. We work with leading banks to ensure swift approvals with minimal paperwork.',
      eligibility: 'Business vintage of minimum 2 years\nAnnual turnover exceeding ₹25 Lakhs\nGood CIBIL score (680+)\nGST registered business entity',
      documentsRequired: 'Last 2 years ITR with Audit Report & Balance Sheet\nLast 12 months Bank Statement\nGST Returns (last 12 months)\nKYC of Promoters/Directors\nBusiness Registration Certificate (Udyam/Incorporation)',
      benefits: 'Collateral-free options up to ₹50 Lakhs\nDisbursement within 48 to 72 hours\nFlexible repayment schedules\nAttractive interest rates tailored to business profile',
      isPopular: true,
      order: 1
    },
    {
      title: 'Home Loan & Construction Loan',
      slug: 'home-loan',
      category: 'Residential',
      interestRate: '8.40% p.a.',
      maxAmount: 'Up to ₹5 Crores',
      tenure: 'Up to 30 Years',
      processingFee: '0.25% to 0.50%',
      shortDescription: 'Turn your dream home into reality with low interest rates and extended repayment tenure.',
      description: 'Whether purchasing a ready apartment, buying a plot, constructing a villa, or doing major renovations, Globon provides transparent home loan assistance with zero hidden terms.',
      eligibility: 'Salaried individuals (min ₹25,000 monthly income) or Self-Employed\nAge between 21 and 65 years\nCIBIL score 700 and above',
      documentsRequired: 'PAN, Aadhaar & Passport Photo\nLast 3 months salary slips / 2 years ITR\nLast 6 months bank statement\nProperty title deed, approved plan & prior deeds\nAgreement of sale / Cost estimate',
      benefits: 'Lowest industry interest rates\nZero prepayment penalties on floating rates\nBalance transfer facility with Top-up loan\nTax deductions up to ₹3.5 Lakhs under Sec 80C & 24(b)',
      isPopular: true,
      order: 2
    },
    {
      title: 'Loan Against Property (LAP)',
      slug: 'loan-against-property',
      category: 'Secured Loan',
      interestRate: '8.95% p.a.',
      maxAmount: 'Up to ₹10 Crores',
      tenure: 'Up to 15 Years',
      processingFee: '0.50%',
      shortDescription: 'Unlock the high equity locked in your residential or commercial property.',
      description: 'A cost-effective secured borrowing option giving you access to large liquidity for business scale-up, debt consolidation, or major capital expenditures while retaining property ownership.',
      eligibility: 'Ownership of marketable residential or commercial property\nRegular verifiable income stream\nClear property title without encumbrance',
      documentsRequired: 'Complete chain of property documents & EC (Encumbrance Certificate)\nLatest land tax / property tax receipts\nIncome proofs (ITR / Form 16 / Audited P&L)\nKYC documents of all co-owners',
      benefits: 'Substantially lower interest rates compared to unsecured loans\nLonger tenure reducing monthly EMI burden\nHigh loan-to-value (LTV) up to 70% of market value\nUse funds for any legitimate purpose',
      isPopular: false,
      order: 3
    },
    {
      title: 'Personal Loan',
      slug: 'personal-loan',
      category: 'Unsecured',
      interestRate: '10.50% p.a.',
      maxAmount: 'Up to ₹25 Lakhs',
      tenure: '12 to 60 Months',
      processingFee: '1.0% to 2.0%',
      shortDescription: 'Instant unsecured funds for medical emergencies, weddings, travel, or home improvement.',
      description: 'Get immediate personal funding credited directly to your bank account with complete confidentiality, minimal documentation, and 24-hour approval.',
      eligibility: 'Salaried professional with at least 1 year work experience\nMinimum take-home salary ₹20,000/month\nGood credit repayment history',
      documentsRequired: 'Aadhaar Card & PAN Card\nLast 3 months salary slips\nLast 6 months salary bank statement\nCurrent residential address proof',
      benefits: '100% paperless digital processing available\nNo collateral or guarantor required\nQuick disbursement in 24 hours\nFixed EMI throughout the tenure',
      isPopular: false,
      order: 4
    },
    {
      title: 'Chit Finance & KSFE Empower Assistance',
      slug: 'ksfe-empower-loan',
      category: 'Special Financial Schemes',
      interestRate: '7.90% p.a.',
      maxAmount: 'Up to ₹1 Crore',
      tenure: '1 to 5 Years',
      processingFee: 'Minimal',
      shortDescription: 'Tailored assistance for chit auction finance, gold security, and state-backed empowerment schemes.',
      description: 'Assisting individuals and business owners in leveraging trusted chit finance schemes and special institutional empowerment programs for timely capital requirements.',
      eligibility: 'Resident individuals and registered businesses\nAdequate security (Property/Gold/Salary certificate)\nEligibility under applicable scheme parameters',
      documentsRequired: 'Scheme application form\nIdentity and Address verification\nSecurity documents / Guarantor documents\nBank account verification',
      benefits: 'Trusted and secure financing channel\nHighly attractive competitive interest structure\nConvenient repayment modes',
      isPopular: true,
      order: 5
    }
  ];

  for (const l of loans) {
    await prisma.loan.upsert({
      where: { slug: l.slug },
      update: l,
      create: l
    });
  }
  console.log('Seeded loans');

  // 4. Initial Blogs
  const blogs = [
    {
      title: 'How to Choose the Right Business Loan for Your Enterprise in 2026',
      slug: 'how-to-choose-business-loan-2026',
      category: 'Business Financing',
      author: 'Globon Financial Advisory',
      excerpt: 'Understand working capital loans, term loans, and government-backed credit schemes to fund your business expansion effectively.',
      content: `<p>Selecting the ideal business financing structure can be the difference between sustainable growth and cash-flow bottlenecks. In 2026, financial institutions and NBFCs provide numerous tailored lending products.</p>
      <h3>1. Assess Your Capital Needs</h3>
      <p>Before applying, pinpoint whether you need short-term working capital (for payroll, raw materials, inventory) or long-term capital expenditure (for machinery, property, technology upgrades).</p>
      <h3>2. Collateral-Free vs. Secured Facilities</h3>
      <p>Unsecured business loans are fast and do not risk existing assets, but they carry slightly higher interest rates. Secured loans against commercial property or equipment unlock significantly higher ticket sizes with lower EMIs.</p>
      <h3>3. Preparing Your CMA & Financials</h3>
      <p>Banks look closely at Debt Service Coverage Ratio (DSCR), Current Ratio, and historical turnover. Having a professional Credit Monitoring Arrangement (CMA) report prepared by advisors dramatically improves sanction odds.</p>`,
      image: '/assets/images/blog/blog-01.jpg',
      published: true
    },
    {
      title: 'Top 5 Checklist Items for Fast Home Loan Approval with Lowest Interest',
      slug: 'top-5-checklist-home-loan-approval',
      category: 'Home Loans',
      author: 'Credit Specialist Team',
      excerpt: 'Essential tips to secure the best home loan interest rates, maximize eligible loan amount, and avoid property legal rejection.',
      content: `<p>Buying a home is often the largest financial commitment of a lifetime. Follow this 5-point checklist before applying to ensure smooth sanction and the lowest interest rate:</p>
      <ul>
        <li><strong>Maintain a 750+ CIBIL Score:</strong> Borrowers with high credit scores receive preferential interest rates up to 50 bps lower.</li>
        <li><strong>Verify Encumbrance & Title Deeds:</strong> Banks mandate a 13-to-30 year chain of title verification to ensure clean ownership.</li>
        <li><strong>Clear High-Interest Personal Debts:</strong> Reducing existing EMIs increases your Fixed Obligation to Income Ratio (FOIR), boosting your maximum sanctioned loan amount.</li>
        <li><strong>Include a Working Co-Applicant:</strong> Adding a spouse or parent as co-borrower combines incomes and provides dual tax deductions under Section 80C and Section 24(b).</li>
      </ul>`,
      image: '/assets/images/blog/blog-02.jpg',
      published: true
    },
    {
      title: 'The Vital Role of CMA Reports in Commercial Bank Funding',
      slug: 'role-of-cma-reports-in-bank-funding',
      category: 'Financial Documentation',
      author: 'Globon Compliance Desk',
      excerpt: 'Why every commercial credit application requires an audited Credit Monitoring Arrangement (CMA) data sheet.',
      content: `<p>When an enterprise approaches a bank for working capital (Cash Credit/Overdraft) or term funding exceeding ₹25 Lakhs, the Credit Monitoring Arrangement (CMA) report is the principal analytical document inspected by credit underwriters.</p>
      <p>A standard CMA report includes:</p>
      <ol>
        <li>Operating Statement reflecting past 2 years and projected 3-5 years profit & loss.</li>
        <li>Analysis of Balance Sheet and fund flows.</li>
        <li>Working Capital Assessment based on Nayak Committee and Tandon Committee norms.</li>
        <li>Financial Ratios highlighting liquidity, solvency, and operational efficiency.</li>
      </ol>
      <p>At Globon Business Solutions, our financial analysts formulate audited, realistic CMA models that comply fully with RBI and banking underwriting guidelines.</p>`,
      image: '/assets/images/blog/blog-03.jpg',
      published: true
    }
  ];

  for (const b of blogs) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: b,
      create: b
    });
  }
  console.log('Seeded blogs');

  // 5. Initial Inquiries (Form submissions)
  const existingInquiries = await prisma.inquiry.count();
  if (existingInquiries === 0) {
    await prisma.inquiry.createMany({
      data: [
        {
          name: 'Rajesh Kumar',
          email: 'rajesh.k@gmail.com',
          phone: '+91 98471 23456',
          type: 'Loan Application',
          subject: 'Business & MSME Loan',
          loanAmount: '₹25,00,000',
          message: 'Looking to expand our retail store inventory for the festive season. Need working capital with fast approval.',
          status: 'NEW'
        },
        {
          name: 'Ananya Sreedharan',
          email: 'ananya.s@outlook.com',
          phone: '+91 94460 78901',
          type: 'Loan Application',
          subject: 'Home Loan & Construction Loan',
          loanAmount: '₹60,00,000',
          message: 'Purchasing an apartment in Kochi. Looking for the lowest interest rate and maximum tenure.',
          status: 'CONTACTED',
          notes: 'Called customer on 9th Oct. Requested 3 months salary slips.'
        },
        {
          name: 'Mathews Thomas',
          email: 'm.thomas@enterprises.in',
          phone: '+91 97455 33221',
          type: 'Service Inquiry',
          subject: 'Business & Financial Solutions',
          loanAmount: 'N/A',
          message: 'Require preparation of detailed CMA data and project report for a manufacturing unit bank submission.',
          status: 'IN_REVIEW',
          notes: 'Financial documents received. Assigned to analyst.'
        }
      ]
    });
    console.log('Seeded sample inquiries');
  }

  console.log('Database seeding successfully finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
