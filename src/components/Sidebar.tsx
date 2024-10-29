/* eslint @typescript-eslint/no-explicit-any: "off" */
'use client';

import Link from "next/link";

export function Sidebar({ toShow, setDrawerOpen }: { toShow: boolean, setDrawerOpen: any }) {
	return (
		<div data-toshow={toShow} className={'data-[toshow=false]:hidden data-[toshow=true]:absolute flex flex-col z-40 bg-foreground text-background h-[110vh] w-[100vw] left-0 top-0 py-20 px-12'} >
			<img src="close.svg" className="w-[2rem] absolute top-4 left-4" onClick={() => { setDrawerOpen(false); document.getElementById("html")!.style.setProperty("overflow", "auto") }} />
			<div className="text-3xl font-semibold mb-14">Explore EBSB</div>
			<Link href="/"><SideBarElement title="Home" imgSrc="home-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
			<Link href="/about">		<SideBarElement title="About Us" imgSrc="about-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
			<Link href="/events">	<SideBarElement title="Events" imgSrc="events-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
			<Link href="/yuva-sangam"><SideBarElement title="Yuva Sangam" imgSrc="yuva-sangam-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
			<Link href="/team"><SideBarElement title="Team" imgSrc="team-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
			<Link href="/gallery"><SideBarElement title="Gallery" imgSrc="gallery-icon.svg" setDrawerOpen={setDrawerOpen} /></Link>
		</div>
	)
}


function SideBarElement({ title, imgSrc, setDrawerOpen }: { title: string, imgSrc: string, setDrawerOpen: any }) {
	return (
		<div className="flex flex-row text-2xl my-4 py-2 ml-2" onClick={() => { setDrawerOpen(false); document.getElementById("html")!.style.setProperty("overflow", "auto") }}>
			<div className="w-[4rem] flex justify-center px-2 mr-4">
				<img className="h-[2rem] self-center" src={imgSrc} />
			</div>
			<div className="">{title}</div>
		</div>
	)

}
