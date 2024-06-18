"use client";
import React, { useEffect } from "react";
import Nav from "../components/Navbar";
import CityBox from "../components/CityBox";
import OneDayBox from "../components/OneDayBox";
import FiveDayBox from "../components/FiveDayBox";
import AuraCard from "../components/AuraCard";
import { Gradient } from "../../../public/Gradient";

function GetStarted() {
	useEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);

	return (
		<>
			<canvas id="gradient-canvas" data-transition-in />
			<Nav />

			<div className="bg-transparent">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div
						aria-hidden="true"
						className="bg-gradient-to-b from-transparent to-black opacity-50"
					/>
					<div className=" grid grid-cols-2 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
						<CityBox />
						<AuraCard />
						<OneDayBox />

						<FiveDayBox />
					</div>
				</div>
			</div>
		</>
	);
}

export default GetStarted;
