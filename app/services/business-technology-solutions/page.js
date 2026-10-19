import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import BusinessTechnologyCategoryView from "@/components/pages/services/BusinessTechnologyCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Business Technology Solutions - Globon Business Solutions",
  description: "Simplify Your Business Operations With the Right ERP & CRM Solutions. Cloud ERP systems, customer CRM workflows, and society or club registration support.",
};

export default function BusinessTechnologyPage() {
  const category = getCategoryBySlug("business-technology-solutions");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <BusinessTechnologyCategoryView category={category} />
    </Layout>
  );
}
