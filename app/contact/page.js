
import Layout from "@/components/layout/Layout"
import Contact from "@/components/pages/contact"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Contact Us" breadcrumbBg="/images/page-title/contact-hero-natural.jpg" mainCls="padding-0">
				<Contact />
			</Layout>
		</>
	)
}