import Layout from "@/components/layout/Layout";
import { getServiceBySlug, getCategoryBySlug } from "@/lib/servicesStore";
import UniversalServiceDetailView from "@/components/pages/services/UniversalServiceDetailView";
import PersonalLoanServiceView from "@/components/pages/services/PersonalLoanServiceView";

export const revalidate = 0;

export const metadata = {
  title: "Personal Loan Assistance - Globon Business Solutions",
  description: "Financial Support for Your Personal Needs. Whether you are planning an important family expense, managing an unexpected requirement, funding education, or improving your home.",
};

export default function PersonalLoanPage() {
  const category = getCategoryBySlug("loans-advances");
  const service = getServiceBySlug("loans-advances", "personal-loan-assistance");

  console.log("PersonalLoanPage rendered, found service:", !!service, service ? { title: service.title, features: service.features } : null);

  if (!service) {
    return (
      <Layout mainCls="padding-0">
        <UniversalServiceDetailView
          category={category || { id: "loans-advances", slug: "loans-advances", title: "Loans & Advances" }}
          service={{
            id: "personal-loan-assistance",
            slug: "personal-loan-assistance",
            title: "Personal Loan Assistance",
            category: "loans-advances",
          }}
        />
      </Layout>
    );
  }

  return (
    <Layout mainCls="padding-0">
      <UniversalServiceDetailView service={service} category={category} />
    </Layout>
  );
}
