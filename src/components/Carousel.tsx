/* eslint @typescript-eslint/no-explicit-any: "off" */
'use client';

import { ReactNode, Ref, useEffect, useRef, useState } from "react";
import { Onam24 } from "./pastEvents/Onam";
import { Dusshera23 } from "./pastEvents/Dusshera";
import { EthnicNight23 } from "./pastEvents/Ethnic-Night";
import { Holi23 } from "./pastEvents/Holi";

const totalElements = 4
const buttons: Array<ReactNode> = []


for (let i = 1; i <= totalElements; i++) {
	buttons.push(<button key={i} className="bg-gray-800 w-[0.75rem] h-3 rounded-lg transition-all"> </ button>)
}

export default function Carousel() {

	const [currentIdx, setCurrentIdx] = useState(0)
	const buttonDivRef: Ref<HTMLDivElement> = useRef(null)
	const evRef: Ref<HTMLDivElement> = useRef(null)
	const isScroll = useRef(1)

	const touchLastPos = useRef(0)

	useEffect(() => {
		const padding = (document.getElementById("html")!.clientWidth - evRef.current!.children[0].clientWidth) / 2

		evRef.current!.style.paddingLeft = padding.toString() + "px";
		evRef.current!.style.paddingRight = padding.toString() + "px";

		for (let i = 0; i < totalElements; i++) {
			(buttonDivRef.current!.children[i] as HTMLDivElement).onclick = () => {
				setCurrentIdx(i)
			}
		}


	}, [])

	useEffect(() => {
		for (let i = 0; i < totalElements; i++) {
			const elem = evRef.current!.children[3] as HTMLDivElement

			const boxsize = elem.offsetWidth + (elem.computedStyleMap().get("margin-right")! as any).value;

			console.log(boxsize);
			(evRef.current!.children[i] as HTMLDivElement).style.transform = "translate(-" + (boxsize * currentIdx) + "px,0px)"
		}
		(buttonDivRef.current!.children[currentIdx] as HTMLDivElement).style.width = "2rem";
		evRef.current!.ontouchstart = (ev) => {
			touchLastPos.current = ev.touches.item(0)!.clientX
		}

		evRef.current!.ontouchend = (ev) => {
			if ((ev.changedTouches.item(0)!.clientX - touchLastPos.current) / window.innerWidth > 0.3) {

				setCurrentIdx(currentIdx == 0 ? totalElements - 1 : currentIdx - 1)
			}
			else if ((ev.changedTouches.item(0)!.clientX - touchLastPos.current) / window.innerWidth < 0.3) {

				setCurrentIdx(currentIdx == totalElements - 1 ? 0 : currentIdx + 1)
			}
			if (isScroll.current == 1) {
				isScroll.current = 0
				setTimeout(() => {
					isScroll.current = 1
				}, 400)
			}
			touchLastPos.current = 0
		}
		evRef.current!.onwheel = (ev) => {
			ev.stopImmediatePropagation()
			if (ev.deltaX > 10 && isScroll.current) {
				setCurrentIdx(currentIdx == totalElements - 1 ? 0 : currentIdx + 1)
			}
			else if (ev.deltaX < -10 && isScroll.current) {
				setCurrentIdx(currentIdx == 0 ? totalElements - 1 : currentIdx - 1)
			}
			if (isScroll.current == 1) {
				isScroll.current = 0
				setTimeout(() => {
					isScroll.current = 1
				}, 400)
			}

		}
		return () => {
			try {
				(buttonDivRef.current!.children[currentIdx] as HTMLDivElement).style.width = "0.75rem";
			}
			catch (e) {
				console.log(e)
			}
		}
	}, [currentIdx])

	return (
		<div className="relative flex flex-col">
			<div ref={evRef} className="flex flex-row pt-12 *:mr-6 overflow-clip transition ">
				<Onam24 />
				<Dusshera23 />
				<EthnicNight23 />
				<Holi23 />
			</div>

			<div ref={buttonDivRef} className={"*:mx-1 flex mx-auto mt-6 flex-row"}>
				{buttons}
			</div>

			<div className="absolute left-0 h-full hidden lg:flex flex-col *:my-auto overflow-clip px-4 rounded-r-lg hover:bg-[rgba(0,0,0,0.1)]" onClick={() => setCurrentIdx(currentIdx == 0 ? totalElements - 1 : currentIdx - 1)}>
				<img src="/arrow-left.svg" className="scale-[4] " />
			</div>
			<div className="absolute right-0 h-full hidden lg:flex flex-col *:my-auto overflow-clip px-4 rounded-l-lg hover:bg-[rgba(0,0,0,0.1)]" onClick={() => setCurrentIdx(currentIdx == totalElements - 1 ? 0 : currentIdx + 1)}>
				<img src="/arrow-right.svg" className="scale-[4]" />
			</div>

		</div >
	)
}
