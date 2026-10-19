import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import { getServiceBySlug, getCategoryBySlug, findServiceAcrossAll } from "@/lib/servicesStore";
import UniversalServiceDetailView from "@/components/pages/services/UniversalServiceDetailView";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  let service = getServiceBySlug(params.category, params.service);
  if (!service) {
    const found = findServiceAcrossAll(params.service);
    service = found?.service;
  }
  if (!service) return { title: "Service Details - Globon Business Solutions" };
  return {
    title: `${service.title} - Globon Business Solutions`,
    description: service.shortDesc || service.subtitle,
  };
}

export default function SingleServiceDetailPage({ params }) {
  let category = getCategoryBySlug(params.category);
  let service = getServiceBySlug(params.category, params.service);

  if (!service) {
    const found = findServiceAcrossAll(params.service);
    if (found) {
      service = found.service;
      category = category || found.category;
    }
  }

  if (!service) {
    notFound();
  }

  if (!category) {
    category = {
      id: service.category,
      slug: service.category,
      title: service.categoryTitle || 'Services',
    };
  }

  return (
    <Layout mainCls="padding-0">
      <UniversalServiceDetailView service={service} category={category} />
    </Layout>
  );
}
