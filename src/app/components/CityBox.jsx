"use client";

const CityBox = () => {
	return (
		// Main box
		<div className="">
			{/* <!-- Weather GUI Componenet Start --> */}
			<div className="text-brand-black ">
				<div className="mt-10 w-full max-w-screen-sm p-10 rounded-xl ring-8 ring-white ring-opacity-40 bg-white/50">
					<div className="flex items-end p-6 ">
						<div className="text-2xl text-brand-black font-bold">
							<h3 className="font-semibold ">
								<a href="#">
									<span className="absolute inset-0" />
									Local Weather
								</a>
							</h3>
							<p aria-hidden="true" className="mt-1 text-sm ">
								City, State
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Component End  --> */}
			</div>
		</div>
	);
};

export default CityBox;
