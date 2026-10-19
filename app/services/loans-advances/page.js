import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import LoansAdvancesCategoryView from "@/components/pages/services/LoansAdvancesCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Loans & Advances - Globon Business Solutions",
  description: "Financial Solutions for Personal, Property, Business & Vehicle Needs. Explore personal, education, home, property, business, project, government-scheme and vehicle finance assistance.",
};

export default function LoansAdvancesPage() {
  const category = getCategoryBySlug("loans-advances");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <LoansAdvancesCategoryView category={category} />
    </Layout>
  );
}
