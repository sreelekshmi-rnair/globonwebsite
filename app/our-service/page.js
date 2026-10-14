import Layout from "@/components/layout/Layout";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const metadata = {
  title: "Our Services - Globon Business Solutions",
  description: "Comprehensive financial, loan, and business consulting services.",
};

export default async function OurServicePage() {
  const services = await prisma.service.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <Layout breadcrumbTitle="Our Services &amp; Solutions">
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-lg-8 mx-auto text-center">
              <span className="sub-title text-primary" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                What We Offer
              </span>
              <h2 className="title" style={{ fontSize: "36px", fontWeight: "800", marginTop: "10px", color: "#0f172a" }}>
                Tailored Financial &amp; Business Services
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                Explore all our specialized services below. Click any service to view full details and apply online.
              </p>
            </div>
          </div>

          <div className="row" style={{ rowGap: "30px" }}>
            {services.map((service, index) => {
              const featuresList = service.features
                ? service.features.split("\n").filter(Boolean).slice(0, 3)
                : [];

              return (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "36px 30px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "12px",
                          background: "#e0f2fe",
                          color: "#0284c7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          marginBottom: "20px",
                        }}
                      >
                        💼
                      </div>

                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "12px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#0284c7",
                          marginBottom: "8px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {service.category}
                      </span>

                      <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#0f172a" }}>
                        <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {service.title}
                        </Link>
                      </h3>

                      <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                        {service.shortDescription}
                      </p>

                      {featuresList.length > 0 && (
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", fontSize: "13px", color: "#334155" }}>
                          {featuresList.map((f, idx) => (
                            <li key={idx} style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ color: "#16a34a", fontWeight: "bold" }}>✓</span> {f}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div>
                      <Link
                        href={`/services/${service.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#0284c7",
                          fontWeight: "700",
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                      >
                        Explore Service &amp; Apply &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}