import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import LifeHealthCategoryView from "@/components/pages/services/LifeHealthCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Life & Health Insurance - Globon Business Solutions",
  description: "Protect Your Family, Health & Financial Future With the Right Insurance. Life insurance, term plans, and family cashless medical hospitalization coverage.",
};

export default function LifeHealthPage() {
  const category = getCategoryBySlug("life-health-insurance");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <LifeHealthCategoryView category={category} />
    </Layout>
  );
}
