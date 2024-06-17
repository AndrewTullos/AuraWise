"use client";

// import { Fragment } from "react";
import Icon from "./AuraIcon";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	// Menu,
	// MenuButton,
	// MenuItem,
	// MenuItems,
	// Transition,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const user = {
// 	name: "Tom Cook",
// 	email: "tom@example.com",
// 	imageUrl:
// 		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
	{ name: "About Us", href: "./about", current: false },
	{ name: "Discover", href: "./discover", current: true },
	{ name: "Zodiac", href: "./zodiac", current: false },
	{ name: "Weather", href: "./weather", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="header" className="bg-transparent text-white">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-white lg:px-8 text-white">
						<div className="relative flex h-16 justify-between">
							<div className="relative z-10 flex px-2 lg:px-0">
								<div className="flex flex-shrink-0 items-center">
									<a href="https://andrewtullos.github.io/AuraWise/">
										<Icon />
									</a>
								</div>
							</div>
							{/* Search Bar Below */}
							<div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
								<div className="w-full sm:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search
									</label>
									<div className="relative">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<MagnifyingGlassIcon
												className="h-5 w-5 text-white"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
											placeholder="Search city weather"
											type="search"
										/>
									</div>
								</div>
							</div>
							<div className="relative z-10 flex items-center lg:hidden">
								{/* Mobile menu button */}
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
							<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
								{/* Notification Icon? */}
								{/* <button
									type="button"
									className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-white hover:text-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button> */}

								{/* User profile dropdown */}
							</div>
						</div>
						<nav
							className="hidden lg:flex lg:space-x-8 lg:py-2"
							aria-label="Global"
						>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-brand-black text-white"
											: "text-white hover:bg-brand-green hover:text-white",
										"inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</a>
							))}
						</nav>
					</div>

					<DisclosurePanel as="nav" className="lg:hidden" aria-label="Global">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-white hover:bg-gray-700 hover:text-blue",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
						<div className="border-t border-gray-700 pb-3 pt-4">
							<div className="flex items-center px-4">
								<div className="flex-shrink-0">
									{/* <img
										className="h-10 w-10 rounded-full"
										src={user.imageUrl}
										alt=""
									/> */}
								</div>
								{/* <div className="ml-3">
									<div className="text-base font-medium text-white">
										{user.name}
									</div>
									<div className="text-sm font-medium text-white">
										{user.email}
									</div>
								</div> */}
								{/* <button
									type="button"
									className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button> */}
							</div>
							<div className="mt-3 space-y-1 px-2">
								{userNavigation.map((item) => (
									<DisclosureButton
										key={item.name}
										as="a"
										href={item.href}
										className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-gray-200"
									>
										{item.name}
									</DisclosureButton>
								))}
							</div>
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
