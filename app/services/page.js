import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "@/lib/servicesStore";

export const revalidate = 0;

export const metadata = {
  title: "Service Categories - Globon Business Solutions",
  description: "Browse all service categories from Globon Business Solutions including Loans & Advances, Business Registration, Tax & Accounting, Licenses, and Digital Services.",
};

export default function ServicesCategoriesPage() {
  const categories = getAllCategories();
  return (
    <Layout mainCls="padding-0">
      <div className="ksfe-services-page">
        {/* Subtle Breadcrumb Bar */}
        <section className="ksfe-services-breadcrumb">
          <div className="tf-container w-1780">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <span className="current">Services</span>
            </div>
          </div>
        </section>

        {/* Hero Banner (#CDF260 Chartreuse Lime) */}
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
                  Globon Portfolio
                </span>
                <h1 className="banner-title">SERVICES</h1>
                <p className="banner-subtitle">
                  Explore our comprehensive spectrum of specialized business, financial, 
                  loan, compliance, and growth services designed to power enterprises and individuals.
                </p>
              </div>

              <div className="banner-visual">
                <Image
                  src="/images/services/service.png"
                  alt="Globon Products and Services Banner"
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

        {/* Introductory Overview */}
        <section className="ksfe-services-intro-section">
          <div className="tf-container w-1780">
            <div className="ksfe-services-intro-text">
              <p>
                Globon Business Solutions offers tailored, end-to-end expertise across{" "}
                <strong>{categories.length} core business categories</strong>.{" "}
                <span style={{ color: "#475569" }}>
                  Select any category below to browse specific services, review eligibility criteria, 
                  and submit your application directly online.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Categories List Cards */}
        <section className="ksfe-services-cards-container">
          <div className="tf-container w-1780">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                id={cat.slug}
                className={`ksfe-service-card-item ${cat.badgeClass || 'bg-loans'} card-${cat.slug}`}
              >
                {/* Left Column: Full-height Image */}
                <div className="card-media">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes="(max-width: 991px) 100vw, 45vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                    priority={index < 2}
                  />
                </div>

                {/* Right Column: Category Content */}
                <div className="card-body-content">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                        color: "#0f172a",
                      }}
                    >
                      Category {index + 1} of {categories.length}
                    </span>
                    <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>
                      ({cat.services.length} Specialized Services)
                    </span>
                  </div>

                  <h2 className="card-main-title">
                    <Link
                      href={`/services/${cat.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {cat.title}
                    </Link>
                  </h2>

                  <p className="card-main-desc">{cat.description}</p>

                  {/* Sub-links List of Services */}
                  {cat.services && cat.services.length > 0 && (
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: "#475569",
                          marginBottom: "12px",
                        }}
                      >
                        Services in this Category:
                      </div>
                      <ul className="card-sublinks-list two-col">
                        {cat.services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${cat.slug}/${service.slug}`}
                              className="ksfe-service-link-anchor"
                            >
                              <span>{service.title}</span>
                              <span className="arrow-icon">
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 1024 1024"
                                  style={{
                                    display: "inline-block",
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                  }}
                                >
                                  <path
                                    d="M275.692 945.231l393.846-443.306-393.846-423.155"
                                    fill="none"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                    strokeMiterlimit="4"
                                    strokeWidth="157.53846153846155"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Explore Category CTA */}
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                    <Link
                      href={`/services/${cat.slug}`}
                      className="ksfe-card-btn-action"
                    >
                      <span>Explore All {cat.services.length} Services</span>
                      <span className="diagonal-arrow">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 1024 1024"
                          style={{
                            display: "inline-block",
                            stroke: "currentColor",
                            fill: "currentColor",
                          }}
                        >
                          <path d="M282.349 247.217l97.767 97.767 232.597 0.001-398.647 398.649 68.215 68.215 397.245-397.245v229.789l97.253 97.258v-494.434h-494.43z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
