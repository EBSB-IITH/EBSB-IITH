'use client';

import Card from "@/components/team/Card";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
	const [isFullTeam, setIsFullTeam] = useState(true)
	const [isPR, setIsPR] = useState(true)
	const [isEvents, setIsEvents] = useState(true)
	const [isFinance, setIsFinance] = useState(true)
	const [isDesign, setIsDesign] = useState(true)
	const [isMultimedia, setIsMultimedia] = useState(true)
	const [isWeb, setIsWeb] = useState(true)


	const [dropValue, setDropValue] = useState("Full Team")
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<div className="flex flex-col">
			<div className="flex overflow-x-clip flex-col mb-16 lg:mb-44 *:mx-auto text-background bg-foreground rounded-b-[3rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
					<div className="text-lg mb-2 z-10">Meet the incredible</div>
					<div className="text-[2rem] z-10 lg:text-[3.4rem] font-extrabold text-center leading-none mb-4">TEAM EBSB<br />2024-25</div>
					<div className="text-center px-6 z-10 lg:px-auto lg:w-[36rem] py-4 lg:py-8 leading-snug mb-24 lg:mb-48">Get to know the talented individuals who form the backbone of our organization. Each member brings a unique set of skills, experiences, and passion, contributing to the synergy that drives our success.</div>
				</div>
				<img
					src="watermark.svg"
					className="w-fit z-0 left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] absolute scale-[2.5] lg:scale-[5]" />
				<img
					src="watermark.svg"
					className="w-fit z-0 right-[3rem] lg:right-[8rem] bottom-[6rem] lg:bottom-[19rem] absolute scale-[-2.5] lg:scale-[-5]" />
				<div className="absolute self-center hidden lg:flex flex-row bottom-[-2rem] bg-white text-foreground text-xl px-6 py-6 rounded-[3rem] drop-shadow-lg *:mx-8">
					<div data-isfullteam={isFullTeam} onClick={() => { setIsFullTeam(true); setIsPR(true); setIsFinance(true); setIsDesign(true); setIsWeb(true); setIsMultimedia(true); setIsEvents(true) }} className="data-[isfullteam=true]:font-bold">Full Team</div>
					<div data-ispr={isPR && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(true); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[ispr=true]:font-bold">PR & Networking</div>
					<div data-isevents={isEvents && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(true) }} className="data-[isevents=true]:font-bold">Events</div>
					<div data-isfinance={isFinance && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(true); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isfinance=true]:font-bold">Finance & Equipment</div>
					<div data-isdesign={isDesign && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(true); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isdesign=true]:font-bold">Design</div>
					<div data-ismultimedia={isMultimedia && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(true); setIsEvents(false) }} className="data-[ismultimedia=true]:font-bold">Multimedia</div>
					<div data-isweb={isWeb && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(true); setIsMultimedia(false); setIsEvents(false) }} className="data-[isweb=true]:font-bold">Web</div>
				</div>
			</div>

			<div data-dropdown={showDropdown} className="data-[dropdown=true]:bg-foreground data-[dropdown=true]:text-background data-[dropdown=true]:rounded-b-[0] relative lg:hidden flex flex-row px-6 py-2 mx-6 mb-14 border-foreground border-solid border-2 rounded-[3rem] " >
				<div className="grow text-center" onClick={() => setShowDropdown(!showDropdown)}>{dropValue}</div>
				<img src="team/dropdown.svg" onClick={() => setShowDropdown(true)} className="justify-self-center" />

				<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} data-toshow={showDropdown} className="data-[toshow=true]:block hidden bg-foreground text-background absolute top-12 left-0 *:my-1 *:py-2 w-full rounded-b-[2rem] py-6 px-8 text-center " >
					<div onClick={() => { setShowDropdown(false); setDropValue("Full Team"); setIsFullTeam(true); setIsPR(true); setIsFinance(true); setIsDesign(true); setIsWeb(true); setIsMultimedia(true); setIsEvents(true) }}>Full Team</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("PR & Networking"); setIsFullTeam(false); setIsPR(true); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }}>PR & Networking</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("Finance & Equipment"); setIsFullTeam(false); setIsPR(false); setIsFinance(true); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }}>Finance & Equipment</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("Events"); setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(true) }}>Events</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("Design"); setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(true); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }}>Design</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("Multimedia"); setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(true); setIsEvents(false) }}>Multimedia</div>
					<hr />
					<div onClick={() => { setShowDropdown(false); setDropValue("Web"); setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(true); setIsMultimedia(false); setIsEvents(false) }}>Web</div>
				</motion.div>
			</div>

			<div data-isfullteam={isFullTeam} className="flex data-[isfullteam=false]:hidden flex-row w-full justify-evenly mb-16">
				<Card src="team/santoshi.png" title="OVERALL HEAD" name="Santoshi Gaytri Mavuru" />
				<Card src="team/tanvisree.png" title="MENTOR" name="Tanvisree Nimma" />
			</div>

			<div data-ispr={isPR} className="flex flex-col data-[ispr=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">PR & NETWORKING</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/pr/mayank.png" title="PR & NETWORKING HEAD" name="Mayank Gupta" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/pr/venkata.png" title="" name="Venkata Dheeraj Kurapati" />
						<Card src="team/pr/sankeerth.png" title="" name="Sankeerth Kulakarni" />
						<Card src="team/pr/swathi.png" title="" name="Swathi Deepika" />
						<Card src="team/pr/sruthi.png" title="" name="Sruthi Sandhineni" />
						<Card src="team/pr/manav.png" title="" name="Manav Rathi" />
					</div>
				</div>
			</div>



			<div data-isfinance={isFinance} className="flex flex-col data-[isfinance=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">FINANCE & EQUIPMENT</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/finance/naman.png" title="FINANCE & EQUIPMENT HEAD" name="Naman Preet Singh" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/finance/garvit.png" title="" name="Garvit Maheshwari" />
						<Card src="team/finance/jeshanth.png" title="" name="Jeshanth Madda" />
						<Card src="team/finance/neel.png" title="" name="Neel Prajapati" />
						<Card src="team/finance/manisha.png" title="" name="Manisha Kotala" />
						<Card src="team/finance/sai.png" title="" name="Sai Nishant Pratapani" />
					</div>
				</div>
			</div>


			<div data-isevents={isEvents} className="flex flex-col data-[isevents=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">EVENTS</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/events/yash.png" title="EVENTS HEAD" name="Yash Sonawane" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/events/karike.png" title="" name="Karike Purvi" />
						<Card src="team/events/vishista.png" title="" name="Vishista Reddy" />
						<Card src="team/events/pratyus.png" title="" name="Pratyus Kumar Panda" />
						<Card src="team/events/sneha.png" title="" name="Sneha Das" />
						<Card src="team/events/pitla.png" title="" name="Pitla Krishna Vardhan" />
					</div>
				</div>
			</div>


			<div data-isdesign={isDesign} className="flex flex-col data-[isdesign=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">DESIGN</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/design/manasi.png" title="DESIGN HEAD" name="Manasi Pasekar" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/design/rishi.png" title="" name="Rishi Sangade" />
						<Card src="team/design/kishore.png" title="" name="Kishore j K" />
						<Card src="team/design/shreevel.png" title="" name="Shreevel K J" />
					</div>
				</div>
			</div>

			<div data-ismultimedia={isMultimedia} className="flex flex-col data-[ismultimedia=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">MULTIMEDIA</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/multimedia/pritam.png" title="MULTIMEDIA HEAD" name="Pritam Kumar Mandal" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/multimedia/sasa.png" title="" name="Sasa Mardi" />
						<Card src="team/multimedia/viraj.png" title="" name="Viraj Mohan Rajpure" />
						<Card src="team/multimedia/vaishnav.png" title="" name="Vaishnav Dhruv" />
					</div>
				</div>
			</div>

			<div data-isweb={isWeb} className="flex flex-col data-[isweb=false]:hidden justify-items-center mb-2 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">WEB</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/web/anand.png" title="WEB HEAD" name="Anand Kasyup" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-4">
						<Card src="team/web/bolla.png" title="" name="Bolla Lokesh Reddy" />
						<Card src="team/web/rayan.png" title="" name="Rayan Halder" />
						<Card src="team/web/ruthwik.png" title="" name="Ruthwik Kanna" />
						<Card src="team/web/rudranil.png" title="" name="Rudranil Basak" />
					</div>
				</div>
			</div>
		</div >
	)
}
