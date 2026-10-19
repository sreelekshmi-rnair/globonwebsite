import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import BusinessPlanningCategoryView from "@/components/pages/services/BusinessPlanningCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Business Planning & Consultancy - Globon Business Solutions",
  description: "Plan Your Business, Organise Your Strategy & Move Forward With the Right Guidance. Support for project reports, investments, legal services, and abroad study consultancy.",
};

export default function BusinessPlanningPage() {
  const category = getCategoryBySlug("business-planning-consultancy");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <BusinessPlanningCategoryView category={category} />
    </Layout>
  );
}
