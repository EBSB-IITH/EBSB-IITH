'use client'
import { useEffect, useRef, useState } from "react"
import { RegisterForm } from "./RegisterForm"
import { RegTypeContext } from "./RegTypeContext"

export enum RegType {
	Single = 0,
	Team = 1
}

export function Registration() {

	const [registrationType, setRegistrationType] = useState(RegType.Single)
	const barRef = useRef(null)
	const singleRef = useRef(null)
	const teamRef = useRef(null)

	useEffect(() => {
		if (registrationType == RegType.Team) {
			if ((barRef.current! as HTMLDivElement).computedStyleMap().get("x")?.value == 0) {
				(barRef.current! as HTMLDivElement).style.translate = "100%";
				(singleRef.current! as HTMLDivElement).style.color = "var(--foreground)";
				(teamRef.current! as HTMLDivElement).style.color = "var(--background)";
			}
		} else {
			if ((barRef.current! as HTMLDivElement).computedStyleMap().get("x")?.value == 0) {
				(barRef.current! as HTMLDivElement).style.translate = "0";
				(teamRef.current! as HTMLDivElement).style.color = "var(--foreground)";
				(singleRef.current! as HTMLDivElement).style.color = "var(--background)"
			}
		}
	}, [registrationType])


	return (
		<div className="flex flex-col">
			<div className="flex flex-row relative mb-4 py-1.5 rounded-3xl border-[0.2rem] border-foreground">
				<div ref={barRef} className="transition-all duration-300 ease-in-out absolute isolate h-full z-[-1] w-1/2  top-0 rounded-3xl bg-foreground " ></div>
				<div ref={singleRef} className="transition-all duration-150 grow text-center text-background cursor-pointer" onClick={() => { setRegistrationType(RegType.Single) }}>Single</div>
				<div ref={teamRef} className="transition-all duration-150 grow text-center cursor-pointer" onClick={() => { setRegistrationType(RegType.Team) }}>Team</div>
			</div>

			<RegTypeContext.Provider value={registrationType}>
				<RegisterForm registerType={registrationType} />
			</RegTypeContext.Provider>
		</div>
	)
}
