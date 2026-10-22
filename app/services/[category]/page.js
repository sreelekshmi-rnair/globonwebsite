import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategoryBySlug, findServiceAcrossAll, getAllCategories } from "@/lib/servicesStore";
import UniversalServiceDetailView from "@/components/pages/services/UniversalServiceDetailView";
import LoansAdvancesCategoryView from "@/components/pages/services/LoansAdvancesCategoryView";
import BusinessFinancialCategoryView from "@/components/pages/services/BusinessFinancialCategoryView";
import BusinessRegistrationCategoryView from "@/components/pages/services/BusinessRegistrationCategoryView";
import BusinessPlanningCategoryView from "@/components/pages/services/BusinessPlanningCategoryView";
import BusinessTechnologyCategoryView from "@/components/pages/services/BusinessTechnologyCategoryView";
import LifeHealthCategoryView from "@/components/pages/services/LifeHealthCategoryView";
import TravelGroupCategoryView from "@/components/pages/services/TravelGroupCategoryView";
import RealEstateCategoryView from "@/components/pages/services/RealEstateCategoryView";
import DigitalMarketingCategoryView from "@/components/pages/services/DigitalMarketingCategoryView";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const cat = getCategoryBySlug(params.category);
  if (cat) {
    return {
      title: `${cat.title} - Globon Business Solutions`,
      description: cat.subtitle || cat.description,
    };
  }

  // Fallback check if it was a direct service slug
  const found = findServiceAcrossAll(params.category);
  if (found) {
    return {
      title: `${found.service.title} - Globon Business Solutions`,
      description: found.service.shortDesc,
    };
  }

  return { title: "Services - Globon Business Solutions" };
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.category);

  // If not a category, check if it's a direct service slug
  if (!category) {
    const directService = findServiceAcrossAll(params.category);
    if (!directService) {
      notFound();
    }
    // Redirect / render direct service fallback
    const { service, category: parentCat } = directService;
    return renderServiceView(service, parentCat);
  }

  // Dedicated Rich Custom View for Loans & Advances
  if (category.slug === "loans-advances") {
    return (
      <Layout mainCls="padding-0">
        <LoansAdvancesCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Business & Financial Solutions
  if (category.slug === "business-financial-solutions") {
    return (
      <Layout mainCls="padding-0">
        <BusinessFinancialCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Business Registration & Compliance
  if (category.slug === "business-registration-compliance") {
    return (
      <Layout mainCls="padding-0">
        <BusinessRegistrationCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Business Planning & Consultancy
  if (category.slug === "business-planning-consultancy") {
    return (
      <Layout mainCls="padding-0">
        <BusinessPlanningCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Business Technology Solutions
  if (category.slug === "business-technology-solutions") {
    return (
      <Layout mainCls="padding-0">
        <BusinessTechnologyCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Life & Health Insurance
  if (category.slug === "life-health-insurance") {
    return (
      <Layout mainCls="padding-0">
        <LifeHealthCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Travel & Group Insurance
  if (category.slug === "travel-group-insurance") {
    return (
      <Layout mainCls="padding-0">
        <TravelGroupCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Real Estate Services
  if (category.slug === "real-estate-services") {
    return (
      <Layout mainCls="padding-0">
        <RealEstateCategoryView category={category} />
      </Layout>
    );
  }

  // Dedicated Rich Custom View for Digital & Marketing Services
  if (category.slug === "digital-marketing-services") {
    return (
      <Layout mainCls="padding-0">
        <DigitalMarketingCategoryView category={category} />
      </Layout>
    );
  }

  return (
    <Layout mainCls="padding-0">
      <div className="ksfe-services-page">
        {/* Breadcrumb Bar */}
        <section className="ksfe-services-breadcrumb">
          <div className="tf-container w-1780">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <Link href="/services">Services</Link>
              <span className="separator">/</span>
              <span className="current">{category.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Banner (Globon Brand Blue Gradient) */}
        <section className="ksfe-services-hero-banner">
          <div className="tf-container w-1780">
            <div className="banner-grid">
              <div className="banner-text">
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    padding: "5px 14px",
                    borderRadius: "20px",
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    color: "#fbbf24",
                    border: "1px solid rgba(245, 158, 11, 0.45)",
                    marginBottom: "14px",
                  }}
                >
                  Category Overview
                </span>
                <h1 className="banner-title">{category.title}</h1>
                <p className="banner-subtitle">{category.subtitle || category.description}</p>
              </div>

              <div className="banner-visual">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  width={460}
                  height={280}
                  style={{
                    width: "100%",
                    maxWidth: "460px",
                    height: "260px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lead narrative */}
        <section className="ksfe-services-intro-section">
          <div className="tf-container w-1780">
            <div className="ksfe-services-intro-text">
              <p>{category.description}</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ padding: "10px 0 100px 0" }}>
          <div className="tf-container w-1780">
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#0f172a",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Available Services in {category.title}
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", marginTop: "6px" }}>
                Select any service below to view detailed requirements, eligibility, documents, and application steps.
              </p>
            </div>

            <div className="row g-4">
              {category.services.map((service, idx) => (
                <div key={service.slug} className="col-lg-6 col-xl-4">
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      padding: "36px 30px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    }}
                    className="service-subcard-hover"
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "800",
                            color: "#0366a2",
                            background: "#e0f2fe",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          SERVICE #{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                          Globon Verified
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "21px",
                          fontWeight: "700",
                          color: "#0f172a",
                          lineHeight: "1.35",
                          marginBottom: "12px",
                        }}
                      >
                        <Link
                          href={`/services/${category.slug}/${service.slug}`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {service.title}
                        </Link>
                      </h3>

                      <p
                        style={{
                          fontSize: "15px",
                          color: "#475569",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                        }}
                      >
                        {service.shortDesc}
                      </p>

                      {service.highlights && service.highlights.length > 0 && (
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 24px 0",
                            fontSize: "14px",
                            color: "#334155",
                          }}
                        >
                          {service.highlights.slice(0, 3).map((h, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "8px",
                              }}
                            >
                              <span style={{ color: "#16a34a", fontWeight: "bold" }}>✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div style={{ paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                      <Link
                        href={`/services/${category.slug}/${service.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "10px 18px",
                          borderRadius: "8px",
                          backgroundColor: "#f8fafc",
                          color: "#0f172a",
                          fontSize: "14px",
                          fontWeight: "600",
                          textDecoration: "none",
                          border: "1px solid #e2e8f0",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span>View Details &amp; Apply</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to All Categories link */}
            <div style={{ marginTop: "60px", textAlign: "center" }}>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#0366a2",
                  fontWeight: "700",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                &larr; Back to All {categories.length} Categories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Fallback renderer when a service is accessed directly at /services/[serviceSlug]
function renderServiceView(service, category) {
  return (
    <Layout mainCls="padding-0">
      <UniversalServiceDetailView service={service} category={category} />
    </Layout>
  );
}
