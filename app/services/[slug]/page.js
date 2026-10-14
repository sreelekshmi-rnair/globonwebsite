import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/common/InquiryForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });
  if (!service) return { title: "Service Not Found - Globon" };
  return {
    title: `${service.title} - Globon Business Solutions`,
    description: service.shortDescription,
  };
}

export default async function SingleServicePage({ params }) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  });

  if (!service) {
    notFound();
  }

  const featuresList = service.features
    ? service.features.split("\n").filter(Boolean)
    : [];

  return (
    <Layout breadcrumbTitle={service.title}>
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ rowGap: "40px" }}>
            {/* Main Content (Left) */}
            <div className="col-lg-7">
              <div style={{ marginBottom: "32px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    fontWeight: "700",
                    fontSize: "13px",
                    marginBottom: "16px",
                  }}
                >
                  {service.category}
                </span>
                <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>
                  {service.title}
                </h1>
                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7", fontWeight: "500" }}>
                  {service.shortDescription}
                </p>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "36px",
                }}
              >
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                  Overview &amp; Scope
                </h3>
                <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.8", whiteSpace: "pre-line" }}>
                  {service.description}
                </div>
              </div>

              {featuresList.length > 0 && (
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    padding: "36px",
                    border: "1px solid #e2e8f0",
                    marginBottom: "36px",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "20px" }}>
                    Key Features &amp; Deliverables
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
                    {featuresList.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          background: "#fff",
                          padding: "16px 20px",
                          borderRadius: "10px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: "#dcfce7",
                            color: "#16a34a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: "500" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#0284c7",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  &larr; Back to All Services
                </Link>
              </div>
            </div>

            {/* Sidebar with Lead Inquiry Form (Right) */}
            <div className="col-lg-5">
              <div style={{ position: "sticky", top: "100px" }}>
                <InquiryForm
                  defaultType="Service Inquiry"
                  defaultSubject={service.title}
                  title={`Inquire about ${service.title}`}
                  subtitle="Submit your contact details and our team will get in touch today."
                />

                <div
                  style={{
                    marginTop: "24px",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>📞</div>
                  <div style={{ fontWeight: "700", color: "#166534", fontSize: "15px" }}>
                    Need Immediate Consultation?
                  </div>
                  <p style={{ fontSize: "13px", color: "#15803d", margin: "4px 0 12px" }}>
                    Speak directly with our senior financial advisors.
                  </p>
                  <a
                    href="tel:+919847123456"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#16a34a",
                      color: "#fff",
                      padding: "8px 20px",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    Call Advisor Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
