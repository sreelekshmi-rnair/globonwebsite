import Image from "next/image"

export default function Preloader() {
	return (
		<>

			<div id="loading">
				<div id="loading-center">
					<div className="loader-container">
						<div className="wrap-loader">
							<div className="loader">
							</div>
							<div className="icon">
								<Image
									width={80}
									height={80}
									style={{ width: "80px", height: "auto", objectFit: "contain" }}
									src="/images/logo/logo_.webp" alt="Globon Business Solutions" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
