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
					<div className="text-[2rem] z-10 lg:text-[3.4rem] font-extrabold text-center leading-none mb-4">TEAM EBSB<br />2025-26</div>
					<div className="text-center px-6 z-10 lg:px-auto lg:w-[36rem] py-4 lg:py-8 leading-snug mb-24 lg:mb-48">Get to know the talented individuals who form the backbone of our organization. Each member brings a unique set of skills, experiences, and passion, contributing to the synergy that drives our success.</div>
				</div>
				<img
					src="watermark.svg"
					className="w-fit pointer-events-none z-0 left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] absolute scale-[2.5] lg:scale-[5]" />
				<img
					src="watermark.svg"
					className="w-fit pointer-events-none z-0 right-[3rem] lg:right-[8rem] bottom-[6rem] lg:bottom-[19rem] absolute scale-[-2.5] lg:scale-[-5]" />
				<div className="absolute self-center hidden lg:flex flex-row bottom-[-2rem] bg-white text-foreground text-xl px-6 py-6 rounded-[3rem] drop-shadow-lg *:mx-8">
					<div data-isfullteam={isFullTeam} onClick={() => { setIsFullTeam(true); setIsPR(true); setIsFinance(true); setIsDesign(true); setIsWeb(true); setIsMultimedia(true); setIsEvents(true) }} className="data-[isfullteam=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Full Team</div>
					<div data-ispr={isPR && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(true); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[ispr=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">PR & Networking</div>
					<div data-isevents={isEvents && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(true) }} className="data-[isevents=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Events</div>
					<div data-isfinance={isFinance && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(true); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isfinance=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Finance & Equipment</div>
					<div data-isdesign={isDesign && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(true); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isdesign=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Design</div>
					<div data-ismultimedia={isMultimedia && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(true); setIsEvents(false) }} className="data-[ismultimedia=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Multimedia</div>
					<div data-isweb={isWeb && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(true); setIsMultimedia(false); setIsEvents(false) }} className="data-[isweb=true]:font-bold md:hover:font-bold md:hover:cursor-pointer lg:hover:text-xl transform duration-500 ">Web</div>
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
				<Card src="team/naman.png" title="OVERALL HEAD" name="Naman Preet Singh" />
				<Card src="team/mayank.png" title="MENTOR" name="Mayank Gupta" />
			</div>

			<div data-ispr={isPR} className="flex flex-col data-[ispr=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">PR & NETWORKING</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/pr/medhansh.jpg" title="PR & NETWORKING HEAD" name="Medhansh" />
					{/*<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/pr/venkata.png" title="" name="Venkata Dheeraj Kurapati" />
						<Card src="team/pr/sankeerth.png" title="" name="Sankeerth Kulakarni" />
						<Card src="team/pr/swathi.png" title="" name="Swathi Deepika" />
						<Card src="team/pr/sruthi.png" title="" name="Sruthi Sandhineni" />
						<Card src="team/pr/manav.png" title="" name="Manav Rathi" />
					</div>*/}
				</div>
			</div>



			<div data-isfinance={isFinance} className="flex flex-col data-[isfinance=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">FINANCE & EQUIPMENT</div>
				<div className="text-lg mb-6">Where Numbers meet Cultures
				</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/finance/garvit.png" title="FINANCE & EQUIPMENT HEAD" name="Garvit Maheshwari" />
					{/*<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
						<Card src="team/finance/garvit.png" title="" name="Garvit Maheshwari" />
						<Card src="team/finance/jeshanth.png" title="" name="Jeshanth Madda" />
						<Card src="team/finance/neel.png" title="" name="Neel Prajapati" />
						<Card src="team/finance/manisha.png" title="" name="Manisha Kotala" />
						<Card src="team/finance/sai.png" title="" name="Sai Nishant Pratapani" />
					</div>*/}
				</div>
			</div>


			<div data-isevents={isEvents} className="flex flex-col data-[isevents=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">EVENTS</div>
				<div className="text-lg mb-6">The heart of EBSB
				</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<div className="flex flex-row flex-wrap justify-center *:mb-3 lg:*:mb-auto *:mx-3 lg:*:mx-4">
					<Card src="team/events/pratyus.png" title="EVENTS HEAD" name="Pratyus Kumar Panda" />
					<Card src="team/events/Pranay.png" title="EVENTS HEAD" name="Pranay Reddy Ragi" />
					</div>
				</div>
			</div>


			<div data-isdesign={isDesign} className="flex flex-col data-[isdesign=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">DESIGN</div>
				<div className="text-lg mb-6">We take care of what EBSB looks like!</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/design/swastika.jpg" title="DESIGN HEAD" name="Swastika Gururaj Kanade" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
				
					</div>
				</div>
			</div>

			<div data-ismultimedia={isMultimedia} className="flex flex-col data-[ismultimedia=false]:hidden justify-items-center mb-16 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">MULTIMEDIA</div>
				<div className="text-lg mb-6">Har Tasveer Mein Bharat Ki Jhalk </div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/multimedia/suryateja.jpg" title="MULTIMEDIA HEAD" name="Surya Teja Uppala" />
					{/*<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-2 lg:*:mx-4">
	
					</div>*/}
				</div>
			</div>

			<div data-isweb={isWeb} className="flex flex-col data-[isweb=false]:hidden justify-items-center mb-2 lg:mb-24 *:mx-auto">
				<div className="text-[2rem] lg:text-[3rem] font-bold">WEB</div>
				<div className="text-lg mb-6 text-center w-3/4 mx-auto md:w-auto">The Digital Pulse of EBSB:
					Connecting Cultures, Celebrating Diversity</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="team/web/ruthwik.JPG" title="WEB HEAD" name="Ruthwik Kanna" />
					<div className="flex flex-row flex-wrap justify-center mt-12 *:mb-2 lg:*:mb-auto *:mx-4">
	
					</div>
				</div>
			</div>
		</div >
	)
}
