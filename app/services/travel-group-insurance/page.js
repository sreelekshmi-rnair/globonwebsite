import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import TravelGroupCategoryView from "@/components/pages/services/TravelGroupCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Travel & Group Insurance - Globon Business Solutions",
  description: "Protect Your Journeys, Employees & Groups With Suitable Insurance Support. Comprehensive overseas travel insurance and corporate group employee protection.",
};

export default function TravelGroupPage() {
  const category = getCategoryBySlug("travel-group-insurance");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <TravelGroupCategoryView category={category} />
    </Layout>
  );
}
