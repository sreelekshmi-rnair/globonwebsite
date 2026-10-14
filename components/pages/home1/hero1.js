'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
import { useCircularTextEffect } from "@/utils/applyCircularText "

export default function Hero1() {
	const [isOpen, setOpen] = useState(false)
	useCircularTextEffect()
	return (
		<>
			<div className="page-title-home-1">
				<div className="mb-50">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-6">
								<div className="content">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										Loan Assistance • Financial Solutions • Business Support
									</p>
									<h1 className="s-title mb-70 text-fs-70" style={{ lineHeight: '1.15' }}>
										Accelerate Your Business <br />
										Growth With
										<span className="animationtext clip d-block mt-2">
											<TypeAnimation
												sequence={[
													' Expert Strategy',
													1500,
													' MSME & Business Loans',
													1500,
													' 48-Hour Approvals',
													1500,
													' Govt Scheme Subsidies',
													1500,
												]}
												wrapper="span"
												speed={50}
												style={{ display: 'inline-block', marginLeft: "15px", color: '#f4b52d' }}
												repeat={Infinity}
												className="cd-words-wrapper ms-2">
											</TypeAnimation>
										</span>
									</h1>
									<span className="line mb-75" />
									<p className="text font-main-2 fw-5 mb-40">
										From market analysis to financial optimization, our consultants deliver actionable insights that drive measurable results. Scale smarter. Grow faster.
									</p>
									<div className="bot">
										<Link href="/our-service" className="tf-btn">
											Explore Services
											<i className="icon-chevron-right" />
										</Link>
										 {/* <div className="video-wrap">
											<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7" style={{ cursor: "pointer" }}>
												<span className="icon style-circle">
													<span className="bg" />
													<span className="wave-3" />
													<i className="icon-play fs-12" />
												</span>
												Watch Video
											</a>
										</div>  */}
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-wrap">
									<div className="image">
										<Image
											width={1200}
											height={896}
											priority
											sizes="(max-width: 991px) 100vw, 50vw"
											style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
											src="/images/section/globon-vision-team.jpg"
											alt="Globon Business Solutions - Financial Advisory and Loan Consultation"
										/>
									</div>
									<div className="wg-curve-text tf-animate__box animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
