// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "Product", href: "#", current: false },
	{ name: "Pricing", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="lg:bg-transparent z-10">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<p className="font-bold">Brandname</p>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-white text-gray-600"
														: "text-gray-600",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-x-5 hidden">
                                <button className="p-3 bg-transparent text-red-500 text-xs flex flex-row gap-x-2 rounded items-center">Login</button>
								<button className="p-3 bg-red-500 text-white text-xs flex flex-row gap-x-2 rounded items-center">Join Us <ArrowRightIcon className="w-4 h-4" /></button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden bg-black">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-x-5">
                            <button className="p-3 bg-transparent text-red-500 text-xs flex flex-row gap-x-2 rounded items-center">Login</button>
                            <button className="p-3 bg-red-500 text-white text-xs flex flex-row gap-x-2 rounded items-center">Join Us <ArrowRightIcon className="w-4 h-4" /></button>
                        </div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
