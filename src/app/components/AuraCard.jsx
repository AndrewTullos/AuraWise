"use client";

const AuraCard = () => {
	return (
		// Main box
		<div className="">
			<div className="text-brand-black ">
				<div className="flex flex-col space-y-6 w-full max-w-screen-sm  p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 bg-white/50">
					<img
						className="w-full"
						src="https://images.pexels.com/photos/1755/purple-abstract-blur-bokeh.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="aura"
					/>
					<div className="flex justify-between items-center">
						{/* Bottom of Card */}
						<span className="font-semibold text-lg w-1/4">Fri, 22 Jan</span>
						<div className="flex items-center justify-end w-1/4 pr-10">
							<span className="font-semibold">12%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuraCard;
