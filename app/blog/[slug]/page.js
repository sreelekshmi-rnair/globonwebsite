import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/common/InquiryForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });
  if (!blog) return { title: "Article Not Found - Globon" };
  return {
    title: `${blog.title} - Globon Business Solutions`,
    description: blog.excerpt,
  };
}

export default async function SingleBlogPage({ params }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) {
    notFound();
  }

  // Fetch 3 other recent blogs for sidebar
  const otherBlogs = await prisma.blog.findMany({
    where: { slug: { not: blog.slug }, published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <Layout breadcrumbTitle={blog.title}>
      <section className="tf-spacing-10" style={{ padding: "80px 0" }}>
        <div className="tf-container">
          <div className="row" style={{ rowGap: "40px" }}>
            {/* Article Content (Left) */}
            <div className="col-lg-8">
              <article
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "40px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span
                    style={{
                      background: "#e0f2fe",
                      color: "#0284c7",
                      fontSize: "12px",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                    }}
                  >
                    {blog.category}
                  </span>
                  {blog.date ? (
                    <span style={{ fontSize: "13px", color: "#64748b" }}>
                      Published on {blog.date}
                    </span>
                  ) : null}
                  <span style={{ fontSize: "13px", color: "#64748b" }}>
                    • By <strong>{blog.author}</strong>
                  </span>
                </div>

                <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", marginBottom: "24px" }}>
                  {blog.title}
                </h1>

                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#475569",
                    padding: "16px 20px",
                    borderLeft: "4px solid #0284c7",
                    background: "#f8fafc",
                    borderRadius: "0 8px 8px 0",
                    marginBottom: "32px",
                    lineHeight: "1.6",
                  }}
                >
                  {blog.excerpt}
                </div>

                {/* Article Body */}
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#334155",
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
                  <Link
                    href="/blog"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#0284c7",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    &larr; Back to All Articles
                  </Link>
                </div>
              </article>
            </div>

            {/* Sidebar (Right) */}
            <div className="col-lg-4">
              <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "30px" }}>
                {/* Related Recent Posts */}
                {otherBlogs.length > 0 && (
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "28px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "18px", color: "#0f172a" }}>
                      More Articles
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {otherBlogs.map((item) => (
                        <div key={item.id} style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "14px" }}>
                          <span style={{ fontSize: "11px", color: "#0284c7", fontWeight: "700", textTransform: "uppercase" }}>
                            {item.category}
                          </span>
                          <h4 style={{ fontSize: "14px", fontWeight: "700", margin: "4px 0 0", lineHeight: "1.4" }}>
                            <Link href={`/blog/${item.slug}`} style={{ color: "#0f172a", textDecoration: "none" }}>
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Consultation Form */}
                <InquiryForm
                  defaultType="General Inquiry"
                  defaultSubject="Consultation from Blog"
                  title="Need Financial Advisory?"
                  subtitle="Submit your inquiry to speak with a Globon expert."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
