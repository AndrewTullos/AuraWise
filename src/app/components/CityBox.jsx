"use client";

import { useEffect, useState } from "react";

const CityBox = () => {
	const cityName = "Austin";
	const WeatherAPIKey = process.env.NEXT_PUBLIC_API_KEY;
	const [cityInfo, setCityInfo] = useState(null);
	const [error, setError] = useState(null);

	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WeatherAPIKey}`;

	useEffect(() => {
		const fetchCity = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setCityInfo(data.city);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchCity();
	}, [url]);

	return (
		// Main box
		<div className="">
			{/* Weather GUI Component Start */}
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
								{cityInfo
									? `${cityInfo.name}, ${cityInfo.country}`
									: "Loading..."}
							</p>
							{error && <p className="text-red-500">{error}</p>}
						</div>
					</div>
				</div>
				{/* Component End */}
			</div>
		</div>
	);
};

export default CityBox;
