import Layout from "@/components/layout/Layout";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const metadata = {
  title: "Loan Products & Assistance - Globon Business Solutions",
  description: "Explore business loans, home loans, LAP, personal loans, and KSFE empower assistance with lowest interest rates.",
};

export default async function LoansListingPage() {
  const loans = await prisma.loan.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <Layout breadcrumbTitle="Loan Products &amp; Financing">
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-lg-8 mx-auto text-center">
              <span className="sub-title text-primary" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                Flexible Financing
              </span>
              <h2 className="title" style={{ fontSize: "36px", fontWeight: "800", marginTop: "10px", color: "#0f172a" }}>
                Loan Solutions for Every Ambition
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                Competitive interest rates, minimal paperwork, and quick sanctions from leading private &amp; PSU banks.
              </p>
            </div>
          </div>

          {loans.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>💰</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                No Loan Products Listed Yet
              </h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                Loan offerings added through the Admin Portal will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="row" style={{ rowGap: "30px" }}>
              {loans.map((loan) => (
              <div key={loan.id} className="col-lg-4 col-md-6">
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
                    position: "relative",
                  }}
                >
                  <div>
                    {loan.isPopular && (
                      <span
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          background: "#dcfce7",
                          color: "#15803d",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                        }}
                      >
                        Popular Choice
                      </span>
                    )}

                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "#0284c7",
                        marginBottom: "10px",
                      }}
                    >
                      {loan.category}
                    </span>

                    <h3 style={{ fontSize: "21px", fontWeight: "800", marginBottom: "14px", color: "#0f172a" }}>
                      <Link href={`/loans/${loan.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {loan.title}
                      </Link>
                    </h3>

                    <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                      {loan.shortDescription}
                    </p>

                    {/* Loan Meta Box */}
                    <div
                      style={{
                        background: "#f8fafc",
                        borderRadius: "12px",
                        padding: "16px",
                        border: "1px solid #e2e8f0",
                        marginBottom: "24px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontSize: "13px", color: "#64748b" }}>Interest Rate:</span>
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#16a34a" }}>
                          {loan.interestRate}
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontSize: "13px", color: "#64748b" }}>Loan Limit:</span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>
                          {loan.maxAmount}
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "13px", color: "#64748b" }}>Tenure:</span>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#475569" }}>
                          {loan.tenure}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/loans/${loan.slug}`}
                      style={{
                        display: "block",
                        textAlign: "center",
                        backgroundColor: "#0284c7",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: "700",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "background-color 0.2s",
                      }}
                    >
                      View Details &amp; Apply Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
