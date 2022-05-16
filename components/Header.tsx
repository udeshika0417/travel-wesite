import React, { useState } from "react";
import Head from 'next/head'
import { Transition } from "@headlessui/react";//for the smooth transistion between elements
import { Link } from "react-scroll";//for smooth scroll throghput the page
import Image from "next/image";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" fixed z-20 bg-sky-900 w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<span className="text-blue-500">T</span>ravel
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Homepg"
										to="Homepg"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-white px-3 py-2 text-md"
									>
										Home
									</Link>
									<Link
										activeClass="Services"
										to="Services"
											
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-white  px-3 py-2"
									>
										Services
									</Link>
									<Link
										activeClass="Gallery"
										to="Gallery"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-white px-3 py-2"
									>
										Gallery
									</Link>

									<Link
										activeClass="Review"
										to="Review"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-white px-3 py-2"
									>
										Review
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-white px-3 py-2"
									>
										Contact
									</Link>
								</div>
							</div>

							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-semibold text-lg cursor-pointer hidden md:block">
									Log <span className="text-blue-500">in</span>
								</h1>
							</div>
						</div>
                        {/**coding for use of mobile */}
						<div className="mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/homepg"
									activeClass="homepg"
									to="homepg"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/Services"
									activeClass="Services"
									to="Services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/Gallery"
									activeClass="Gallery"
									to="Gallery"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Gallery
								</Link>
								<Link
									href="/Review"
									activeClass="Review"
									to="Review"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Review
								</Link>

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>

								<Link
									href="/hi"
									activeClass="hi"
									to="hi"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Say<span className="text-black">hi</span>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;