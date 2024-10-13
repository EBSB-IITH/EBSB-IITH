'use client';

import { ReactNode, useEffect, useRef, useState } from "react";
import { Onam24 } from "./pastEvents/Onam";

const totalElements = 6
const buttons: Array<ReactNode> = []


for (let i = 1; i <= totalElements; i++) {
	buttons.push(<button key={i} className="bg-gray-800 w-[0.75rem] h-3 rounded-lg transition-all"> </ button>)
}

export default function Carousel() {

	const [currentIdx, setCurrentIdx] = useState(0)
	const buttonRef = useRef(null)

	useEffect(() => {
		for (let i = 0; i < totalElements; i++) {
			console.log(i)
			buttonRef.current.children[i].onclick = () => {
				setCurrentIdx(i)
			}
		}
	}, [])
	useEffect(() => {
		buttonRef.current.children[currentIdx].style.width = "2rem";
		return () => {
			try {
				buttonRef.current.children[currentIdx].style.width = "0.75rem";
			}
			catch (e) {
				console.error(e)
			}
		}
	}, [currentIdx])

	return (
		<div className="flex flex-col">
			<div className="flex flex-row pt-12 px-[18.5rem] *:mr-5 overflow-clip " >
				<Onam24 style="" />
				<Onam24 style="" />
				<Onam24 style="" />
				<Onam24 style="" />
			</div>

			<div ref={buttonRef} className={"*:mx-1 flex mx-auto mt-6 flex-row justify-between"}>
				{buttons}
			</div>
		</div >
	)
}
