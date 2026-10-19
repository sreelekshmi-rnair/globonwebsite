import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import { getServiceBySlug, getCategoryBySlug, findServiceAcrossAll } from "@/lib/servicesStore";
import UniversalServiceDetailView from "@/components/pages/services/UniversalServiceDetailView";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  let service = getServiceBySlug("loans-advances", params.service);
  if (!service) {
    const found = findServiceAcrossAll(params.service);
    service = found?.service;
  }
  if (!service) return { title: "Loans & Advances - Globon Business Solutions" };
  return {
    title: `${service.title} - Globon Business Solutions`,
    description: service.shortDesc || service.subtitle,
  };
}

export default function LoanServiceDetailPage({ params }) {
  let category = getCategoryBySlug("loans-advances");
  let service = getServiceBySlug("loans-advances", params.service);

  if (!service) {
    const found = findServiceAcrossAll(params.service);
    if (found) {
      service = found.service;
    }
  }

  if (!service) {
    notFound();
  }

  return (
    <Layout mainCls="padding-0">
      <UniversalServiceDetailView service={service} category={category} />
    </Layout>
  );
}
