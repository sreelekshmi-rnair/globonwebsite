import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import RealEstateCategoryView from "@/components/pages/services/RealEstateCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Real Estate Services - Globon Business Solutions",
  description: "Buy, Sell, Plan, Document & Finance Your Property With Practical Support. Transparent property matchmaking, legal title verification, construction planning, and project finance.",
};

export default function RealEstatePage() {
  const category = getCategoryBySlug("real-estate-services");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <RealEstateCategoryView category={category} />
    </Layout>
  );
}
