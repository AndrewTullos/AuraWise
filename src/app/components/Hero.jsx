"use client";

import React, { useEffect } from "react";
import { Gradient } from "../../../public/Gradient.js";

const Hero = () => {
	useEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);

	return (
		<div className="hero mask min-h-screen text-white">
			<canvas id="gradient-canvas" data-transition-in />

			<div className="hero-content text-center ">
				<div className="max-w-md">
					<section>
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
							Discover Your Daily <span className="boujee-text">Aura</span>
						</h1>
						<div
							className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
							aria-hidden="true"
						>
							<div
								className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000] to-[#789e71] opacity-99 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
							/>
						</div>

						<p className="py-6 mt-6 mb-6 text-lg leading-8">
							Welcome to AuraWise, where celestial insights meet daily wellness.
							<br />
							Discover your zodiac sign and unique aura, personalized based on
							today&apos;s weather.
							<br />
							Embrace harmony in mind, body, and weather.
						</p>
						<a href="./getstarted" className="btn w-64 rounded-full ">
							Get Started
						</a>
						{/* <button className="btn w-64 rounded-full ">Get Started</button> */}
					</section>
				</div>
			</div>
		</div>
	);
};

export default Hero;
