import Section1 from "./section1"
import KsfeKeralaPresence from "./KsfeKeralaPresence"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section7 from "./section7"
import Section7b from "./section7b"
import Section7c from "./section7c"
import Section8 from "./section8"
import Section9 from "./section9"
import Section10 from "./section10"
import Section11 from "./section11"
import Section12 from "./section12"

export default function Home1() {
	return (
		<>
			{/* 1. Feature Highlight Cards: Loans, Business Solutions, Strategy */}
			<Section1 />

			{/* Kerala Presence & Impact Stats (KSFE Style) */}
			<KsfeKeralaPresence />

			{/* 2. About Globon: Moving Forward With the Right Financial Solution (Commented out) */}
			{/* <Section2 /> */}

			{/* 3. Comprehensive Services: Loans, Business, Insurance, Real Estate, Digital */}
			<Section3 />

			{/* 4. Methodology: Proven 3-Step Strategic Process */}
			<Section4 />

			{/* 7. Why Globon (Why Choose Us) */}
			<Section7 />

			{/* 7b. Loan Takeover & Refinancing (KSFE Substitution Style) */}
			<Section7b />

			{/* 7c. Online Financial Solutions For Non-Resident Keralites (Looping Cards) */}
			<Section7c />

			{/* 8. Client Testimonials & Success Stories */}
			<Section8 />

			{/* 9. Direct Consultation & Contact Booking */}
			<Section9 />

			{/* 10. News & Insights / Blog (Commented out) */}
			{/* <Section10 /> */}

			{/* 11. Partner Banks & Financial Network (Removed) */}
			{/* <Section11 /> */}

			{/* 12. Bottom Partner Marquee (Removed) */}
			{/* <Section12 /> */}
		</>
	)
}