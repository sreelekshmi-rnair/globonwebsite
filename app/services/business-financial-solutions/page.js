import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import BusinessFinancialCategoryView from "@/components/pages/services/BusinessFinancialCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Business & Financial Solutions - Globon Business Solutions",
  description: "Everything You Need to Start, Manage and Grow Your Business. Business setup, tax and accounting, licences, consultancy, insurance and technology support.",
};

export default function BusinessFinancialPage() {
  const category = getCategoryBySlug("business-financial-solutions");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <BusinessFinancialCategoryView category={category} />
    </Layout>
  );
}
