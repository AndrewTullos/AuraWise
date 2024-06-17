// import React, { useEffect } from "react";
// import "./App.css";
import { Gradient } from "../../public/Gradient.js";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<canvas id="gradient-canvas" data-transition-in />
			{/* <Nav /> */}
			<Hero />
		</>
	);
}

export default App;
