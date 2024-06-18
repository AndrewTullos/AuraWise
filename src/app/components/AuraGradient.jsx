import React from "react";
import "./App.css"; // Assuming your CSS file is named App.css

const Aura = () => {
	// Define dynamic colors or variables here
	const color1 = "rgb(238, 174, 202)";
	const color2 = "rgb(148, 187, 233)";

	// Inline style object for the background
	const containerStyle = {
		background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
		width: "100vw",
		height: "100vh",
		// Add other styles as needed
	};

	return <div className="container">{/* Your content goes here */}</div>;
};

export default Aura;
