import Image from "next/image"
import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbAlt, breadcrumbBg }) {
	const words = breadcrumbTitle?.split(" ")
	const formattedTitle = words?.length > 1 ? (
		<>
			{words[0]} <span>{words?.slice(1).join(" ")}</span>
		</>
	) : (
		breadcrumbTitle
	)

	return (
		<>
			{breadcrumbTitle &&
				<div className="tf-page-title">
					<div className="content-wrap" style={{ position: "relative", minHeight: "520px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 0 45px 0" }}>
						<div className="bg-image" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, overflow: "hidden" }}>
							<Image
								fill
								priority
								sizes="100vw"
								style={{ objectFit: "cover", objectPosition: "center 40%" }}
								src={breadcrumbBg || "/images/page-title/about-banner.jpg"}
								alt={breadcrumbTitle || "Globon Business Solutions Banner"}
							/>
						</div>
						<div 
							className="tf-overlay" 
							style={{ 
								position: "absolute", 
								top: 0, 
								left: 0, 
								width: "100%", 
								height: "100%", 
								zIndex: 2,
								background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(15, 23, 42, 0.72) 80%, rgba(15, 23, 42, 0.92) 100%)"
							}} 
						/>
						<div className="content" style={{ position: "relative", zIndex: 3 }}>
							<div className="tf-container about-page-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title">{formattedTitle}</p>
										<div className="breadcrums">
											<Link href="/">Home</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<span className="current">
												{breadcrumbTitle}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}

			{breadcrumbAlt === 1 &&
				<div className="tf-page-title style-2">
					<div className="content-wrap">
						<div className="bg-image">
							<div className="rellax" data-rellax-speed={-10}>
								<img src="/images/page-title/page-title.jpg" alt />
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<div className="breadcrums">
											<Link href="/"> Home </Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="#" className="current">
												Blog Details
											</Link>
										</div>
										<h2>
											Role of a Business Consulting Agency in <br />
											Driving Innovation Key to Business
											Success
										</h2>
										<div className="entry-meta style-2">
											<ul className="meta-list">
												<li className="entry author">
													<div className="icon">
														<i className="icon-user" />
													</div>
													<Link href="#">
														William D. Galindo
													</Link>
												</li>
												<li className="entry date">
													<div className="icon">
														<i className="icon-calendar-days" />
													</div>
													<Link href="#">
														25 September 2024
													</Link>
												</li>
												<li className="entry comment">
													<div className="icon">
														<i className="icon-comments" />
													</div>
													<Link href="#"> Comments (05) </Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			}
			{breadcrumbAlt === 2 &&
				<div className="tf-page-title">
					<div className="content-wrap">
						<div className="bg-image">
							<div className="rellax" data-rellax-speed={-10}>
								<img src="/images/page-title/page-title-2.jpg" alt />
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title mb-30">
											Marketing 
											<span className="ms-2">
												 Consulting
											</span>
										</p>
										<div className="breadcrums">
											<Link href="/">
												Home
											</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="our-service.html">
												Our Services
											</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="#" className="current">
												Marketing Consulting
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			}
		</>
	)
}
