import Layout from "@/components/layout/Layout";
import { getCategoryBySlug } from "@/lib/servicesStore";
import DigitalMarketingCategoryView from "@/components/pages/services/DigitalMarketingCategoryView";
import { notFound } from "next/navigation";

export const revalidate = 0;

export const metadata = {
  title: "Digital & Marketing Services - Globon Business Solutions",
  description: "Build Your Digital Presence, Strengthen Your Brand & Reach Your Audience. Website, branding, digital marketing, advertising, social media and content services in one place.",
};

export default function DigitalMarketingPage() {
  const category = getCategoryBySlug("digital-marketing-services");

  if (!category) {
    notFound();
  }

  return (
    <Layout>
      <DigitalMarketingCategoryView category={category} />
    </Layout>
  );
}
