import "./global.css";

export const metadata = {
	title: "AuraWise",
	description: "Know your mood, know your morning",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div id="root">
					<canvas id="gradient-canvas" data-transition-in />
					{children}
				</div>
			</body>
		</html>
	);
}
