import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/common/InquiryForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const loan = await prisma.loan.findUnique({
    where: { slug: params.slug },
  });
  if (!loan) return { title: "Loan Not Found - Globon" };
  return {
    title: `${loan.title} - Apply Online at Globon`,
    description: loan.shortDescription,
  };
}

export default async function SingleLoanPage({ params }) {
  const loan = await prisma.loan.findUnique({
    where: { slug: params.slug },
  });

  if (!loan) {
    notFound();
  }

  const eligibilityList = loan.eligibility
    ? loan.eligibility.split("\n").filter(Boolean)
    : [];

  const docsList = loan.documentsRequired
    ? loan.documentsRequired.split("\n").filter(Boolean)
    : [];

  const benefitsList = loan.benefits
    ? loan.benefits.split("\n").filter(Boolean)
    : [];

  return (
    <Layout breadcrumbTitle={loan.title}>
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ rowGap: "40px" }}>
            {/* Main Content (Left) */}
            <div className="col-lg-7">
              <div style={{ marginBottom: "28px" }}>
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
                  {loan.category}
                </span>
                <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>
                  {loan.title}
                </h1>
                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7" }}>
                  {loan.shortDescription}
                </p>
              </div>

              {/* Key Highlights Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "16px",
                  marginBottom: "36px",
                }}
              >
                <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "20px", borderRadius: "12px" }}>
                  <div style={{ fontSize: "12px", color: "#1e3a8a", fontWeight: "700", textTransform: "uppercase" }}>Interest Rate</div>
                  <div style={{ fontSize: "22px", fontWeight: "800", color: "#0366a2", marginTop: "4px" }}>{loan.interestRate}</div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "12px" }}>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>Loan Amount</div>
                  <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginTop: "4px" }}>{loan.maxAmount}</div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "12px" }}>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>Tenure</div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#334155", marginTop: "4px" }}>{loan.tenure}</div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "12px" }}>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>Processing Fee</div>
                  <div style={{ fontSize: "16px", fontWeight: "700", color: "#475569", marginTop: "4px" }}>{loan.processingFee || "Minimal"}</div>
                </div>
              </div>

              {/* Detailed Description */}
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
                  Product Details &amp; Overview
                </h3>
                <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.8", whiteSpace: "pre-line" }}>
                  {loan.description}
                </div>
              </div>

              {/* Eligibility Criteria */}
              {eligibilityList.length > 0 && (
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid #e2e8f0",
                    marginBottom: "32px",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "18px" }}>
                    Eligibility Criteria
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {eligibilityList.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#1e293b" }}>
                        <span style={{ color: "#0284c7", fontWeight: "bold" }}>●</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Documents Required */}
              {docsList.length > 0 && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid #e2e8f0",
                    marginBottom: "32px",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "18px" }}>
                    Required Documents Checklist
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                    {docsList.map((doc, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "#f8fafc",
                          padding: "12px 18px",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                          fontSize: "14px",
                          color: "#334155",
                        }}
                      >
                        <span style={{ color: "#0366a2", fontWeight: "bold" }}>✓</span> {doc}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {benefitsList.length > 0 && (
                <div
                  style={{
                    background: "#f0fdf4",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid #bbf7d0",
                    marginBottom: "36px",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#166534", marginBottom: "18px" }}>
                    Key Advantages
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {benefitsList.map((b, idx) => (
                      <li key={idx} style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#14532d" }}>
                        <span>✨</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <Link
                  href="/loans"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#0284c7",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  &larr; Back to All Loan Products
                </Link>
              </div>
            </div>

            {/* Application Form Sidebar (Right) */}
            <div className="col-lg-5">
              <div style={{ position: "sticky", top: "100px" }}>
                <InquiryForm
                  defaultType="Loan Application"
                  defaultSubject={loan.title}
                  showAmountField={true}
                  title={`Apply for ${loan.title}`}
                  subtitle="Submit this quick form to verify eligibility and initiate instant processing."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
