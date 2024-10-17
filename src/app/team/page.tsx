'use client';

import Card from "@/components/team/Card";
import { useState } from "react";

export default function Page() {
	const [isFullTeam, setIsFullTeam] = useState(true)
	const [isPR, setIsPR] = useState(true)
	const [isEvents, setIsEvents] = useState(true)
	const [isFinance, setIsFinance] = useState(true)
	const [isDesign, setIsDesign] = useState(true)
	const [isMultimedia, setIsMultimedia] = useState(true)
	const [isWeb, setIsWeb] = useState(true)

	return (
		<div className="flex flex-col">
			<div className="flex flex-col mb-44 *:mx-auto text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
					<div className="text-lg mb-2">Meet the incredible</div>
					<div className="text-[2rem] lg:text-[3.4rem] font-extrabold text-center leading-none mb-4">TEAM EBSB<br />2024-25</div>
					<div className="text-center w-[30rem] lg:w-[36rem] py-8 leading-snug mb-48">Get to know the talented individuals who form the backbone of our organization. Each member brings a unique set of skills, experiences, and passion, contributing to the synergy that drives our success.</div>
				</div>
				<img
					src="/watermark.svg"
					className="w-fit left-0 absolute" />
				<img
					src="/watermark.svg"
					className="w-fit right-0 absolute scale-x-[-1]" />
				<div className="absolute self-center flex flex-row bottom-[-2rem] bg-white text-foreground text-xl px-6 py-6 rounded-[3rem] drop-shadow-lg *:mx-8">
					<div data-isFullTeam={isFullTeam} onClick={() => { setIsFullTeam(true); setIsPR(true); setIsFinance(true); setIsDesign(true); setIsWeb(true); setIsMultimedia(true); setIsEvents(true) }} className="data-[isFullTeam=true]:font-bold">Full Team</div>
					<div data-isPr={isPR && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(true); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isPr=true]:font-bold">PR & Networking</div>
					<div data-isEvents={isEvents && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(true) }} className="data-[isEvents=true]:font-bold">Events</div>
					<div data-isFinance={isFinance && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(true); setIsDesign(false); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isFinance=true]:font-bold">Finance & Equipment</div>
					<div data-isDesign={isDesign && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(true); setIsWeb(false); setIsMultimedia(false); setIsEvents(false) }} className="data-[isDesign=true]:font-bold">Design</div>
					<div data-isMultimedia={isMultimedia && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(false); setIsMultimedia(true); setIsEvents(false) }} className="data-[isMultimedia=true]:font-bold">Multimedia</div>
					<div data-isWeb={isWeb && !isFullTeam} onClick={() => { setIsFullTeam(false); setIsPR(false); setIsFinance(false); setIsDesign(false); setIsWeb(true); setIsMultimedia(false); setIsEvents(false) }} className="data-[isWeb=true]:font-bold">Web</div>
				</div>
			</div>


			<div data-isFullTeam={isFullTeam} className="flex data-[isFullTeam=false]:hidden flex-row w-full justify-evenly mb-16">
				<Card src="/team/santoshi.png" title="OVERALL HEAD" name="Santoshi Gaytri Mavuru" />
				<Card src="/team/tanvisree.png" title="MENTOR" name="Tanvisree Nimma" />
			</div>

			<div data-isPR={isPR} className="flex flex-col data-[isPR=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">PR & NETWORKING</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/pr/mayank.png" title="PR & NETWORKING HEAD" name="Mayank Gupta" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/pr/venkata.png" title="" name="Venkata Dheeraj Kurapati" />
						<Card src="/team/pr/sankeerth.png" title="" name="Sankeerth Kulakarni" />
						<Card src="/team/pr/swathi.png" title="" name="Swathi Deepika" />
						<Card src="/team/pr/sruthi.png" title="" name="Sruthi Sandhineni" />
						<Card src="/team/pr/manav.png" title="" name="Manav Rathi" />
					</div>
				</div>
			</div>



			<div data-isFinance={isFinance} className="flex flex-col data-[isFinance=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">FINANCE & EQUIPMENT</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/finance/naman.png" title="FINANCE & EQUIPMENT HEAD" name="Naman Preet Singh" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/finance/garvit.png" title="" name="Garvit Maheshwari" />
						<Card src="/team/finance/jeshanth.png" title="" name="Jeshanth Madda" />
						<Card src="/team/finance/neel.png" title="" name="Neel Prajapati" />
						<Card src="/team/finance/manisha.png" title="" name="Manisha Kotala" />
						<Card src="/team/finance/sai.png" title="" name="Sai Nishant Pratapani" />
					</div>
				</div>
			</div>


			<div data-isEvents={isEvents} className="flex flex-col data-[isEvents=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">EVENTS</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/events/yash.png" title="EVENTS HEAD" name="Yash Sonawane" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/events/karike.png" title="" name="Karike Purvi" />
						<Card src="/team/events/vishista.png" title="" name="Vishista Reddy" />
						<Card src="/team/events/pratyus.png" title="" name="Pratyus Kumar Panda" />
						<Card src="/team/events/sneha.png" title="" name="Sneha Das" />
						<Card src="/team/events/pitla.png" title="" name="Pitla Krishna Vardhan" />
					</div>
				</div>
			</div>


			<div data-isDesign={isDesign} className="flex flex-col data-[isDesign=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">DESIGN</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/design/manasi.png" title="DESIGN HEAD" name="Manasi Pasekar" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/design/rishi.png" title="" name="Rishi Sangade" />
						<Card src="/team/design/kishore.png" title="" name="Kishore j K" />
						<Card src="/team/design/shreevel.png" title="" name="Shreevel K J" />
					</div>
				</div>
			</div>

			<div data-isMultimedia={isMultimedia} className="flex flex-col data-[isMultimedia=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">MULTIMEDIA</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/multimedia/pritam.png" title="MULTIMEDIA HEAD" name="Pritam Kumar Mandal" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/multimedia/sasa.png" title="" name="Sasa Mardi" />
						<Card src="/team/multimedia/viraj.png" title="" name="Viraj Mohan Rajpure" />
						<Card src="/team/multimedia/vaishnav.png" title="" name="Vaishnav Dhruv" />
					</div>
				</div>
			</div>

			<div data-isWeb={isWeb} className="flex flex-col data-[isWeb=false]:hidden justify-items-center mb-24 *:mx-auto">
				<div className="text-[3rem] font-bold">WEB</div>
				<div className="text-lg mb-6">The art of crafting & sparking social buzz</div>
				<div className="flex flex-col justify-items-center *:mx-auto">
					<Card src="/team/web/anand.png" title="WEB HEAD" name="Anand Kasyup" />
					<div className="flex flex-row mt-12 *:mx-4">
						<Card src="/team/web/bolla.png" title="" name="Bolla Lokesh Reddy" />
						<Card src="/team/web/rayan.png" title="" name="Rayan Halder" />
						<Card src="/team/web/ruthwik.png" title="" name="Ruthwik Kanna" />
						<Card src="/team/web/rudranil.png" title="" name="Rudranil Basak" />
					</div>
				</div>
			</div>


		</div >
	)
}
