"use client";
import React, { useEffect } from "react";
import Nav from "../components/Navbar";
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
		</>
	);
}

export default GetStarted;
