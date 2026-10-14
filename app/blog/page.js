import Layout from "@/components/layout/Layout";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const metadata = {
  title: "Blog & Financial Insights - Globon Business Solutions",
  description: "Read expert articles on loan tips, business growth, tax compliance, and real estate from Globon.",
};

export default async function BlogListingPage() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <Layout breadcrumbTitle="Blog &amp; Knowledge Base">
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-lg-8 mx-auto text-center">
              <span className="sub-title text-primary" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                Latest Insights
              </span>
              <h2 className="title" style={{ fontSize: "36px", fontWeight: "800", marginTop: "10px", color: "#0f172a" }}>
                Financial News &amp; Business Guides
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                Stay informed on lending regulations, bank policies, and actionable guidance for enterprises and families.
              </p>
            </div>
          </div>

          {blogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>📝</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                No Blog Articles Published Yet
              </h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                Articles written and published through the Admin Portal will appear here.
              </p>
            </div>
          ) : (
            <div className="row" style={{ rowGap: "36px" }}>
              {blogs.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ padding: "30px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                      <span
                        style={{
                          background: "#e0f2fe",
                          color: "#0284c7",
                          fontSize: "12px",
                          fontWeight: "700",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          textTransform: "uppercase",
                        }}
                      >
                        {post.category}
                      </span>
                      {post.date ? (
                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                          {post.date}
                        </span>
                      ) : null}
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: "700", lineHeight: "1.4", marginBottom: "14px", color: "#0f172a" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {post.title}
                      </Link>
                    </h3>

                    <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "16px 30px",
                      background: "#f8fafc",
                      borderTop: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        color: "#0284c7",
                        fontWeight: "700",
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      Read Article &rarr;
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
