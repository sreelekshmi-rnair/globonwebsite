import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section7 from "./section7"

export default function AboutUs() {
	return (
		<>
			{/* 1. Introduction, History & Strengths */}
			<Section1 />

			{/* 2. Vision, Mission & 5 Core Values */}
			<Section2 />

			{/* 3. The Globon Difference & Key Achievements */}
			<Section3 />

			{/* 4. Associated Banks & NBFCs Network Marquee */}
			<Section7 />
		</>
	)
}