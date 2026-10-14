import Layout from "@/components/layout/Layout"
import AboutUs from "@/components/pages/aboutUs"

export const metadata = {
	title: "About Us | Globon Business Solutions - One Roof For All Your Financial & Business Needs",
	description: "Founded in 2017 in Kodungallur, Thrissur, Globon Business Solutions provides loan assistance, insurance, real estate, and business solutions backed by 30+ partner banks and NBFCs."
}

export default function AboutPage() {
	return (
		<>
			<Layout breadcrumbTitle="About Globon Business Solutions" footerStyle={1} mainCls="padding-0">
				<AboutUs />
			</Layout>
		</>
	)
}
