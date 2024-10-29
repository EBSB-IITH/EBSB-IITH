'use client';

import Link from "next/link"
import { Sidebar } from "./Sidebar"
import { useState } from "react";

export default function NavBar() {

	const [drawerOpen, setDrawerOpen] = useState(false)



	return (
		< div className="absolute top-0 z-20 w-full" >

			<div className={'relative flex flex-row pt-4 px-4 lg:py-6 align-middle lg:justify-center'}>
				<Link href="/">
					<img
						src="ebsb-logo.png"
						alt="EBSB Logo"
						width={60}
						height={60}
						className={'hidden lg:block lg:mx-8'}
					/>
				</Link>

				<div className={'flex lg:bg-white flex-row lg:py-5 lg:px-12 lg:rounded-[40px] lg:*:px-6 xl:*:px-12 lg:text-lg'}>
					<Sidebar toShow={drawerOpen} setDrawerOpen={setDrawerOpen} />
					<img src="menu.svg" className="block lg:hidden" onClick={() => { setDrawerOpen(true); document.getElementById("html")!.style.setProperty("overflow", "clip") }} />

					<Link href="/about">
						<div className="hidden lg:block">About Us</div>
					</Link>

					<Link href="/events">
						<div className="hidden lg:block">Events</div>
					</Link>

					<Link href="/yuva-sangam">
						<div className="hidden lg:block">Yuva Sangam</div>
					</Link>

					<Link href="/team">
						<div className="hidden lg:block">Team</div>
					</Link>

					<Link href="/gallery">
						<div className="hidden lg:block">Gallery</div>
					</Link>

				</div>

				<Link href="/" >
					<img
						src="ebsb-logo.png"
						alt="EBSB Logo"
						width={50}
						height={50}
						className={'block absolute right-4 top-4  lg:relative lg:hidden lg:mx-8'}
					/>
				</Link>
				<Link href="https://iith.ac.in">
					<img
						src="iith-logo.png"
						alt="EBSB Logo"
						width={45}
						height={45}
						className={'hidden lg:block lg:mx-8 '}
					/>
				</Link>
			</div>
		</div >

	)
}
