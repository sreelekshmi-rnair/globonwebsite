import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import BusinessRegistrationCategoryView from "@/components/pages/services/BusinessRegistrationCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Business Registration & Compliance - Globon Business Solutions",
  description: "Start Your Business on the Right Foundation. Setting up a business involves more than choosing a name. Support for company, LLP, partnership, startup, MSME or establishment registration.",
};

export default function BusinessRegistrationPage() {
  const category = getCategoryBySlug("business-registration-compliance");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <BusinessRegistrationCategoryView category={category} />
    </Layout>
  );
}
