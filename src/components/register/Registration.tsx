'use client'
import { useState } from "react"
import { RegisterForm } from "./RegisterForm"

export enum RegType {
	Single,
	Team
}

export function Registration() {
	const [registrationType, setRegistrationType] = useState(RegType.Single)
	return (
		<div className="flex flex-col">
			<div className="flex flex-row">
				<div onClick={() => { setRegistrationType(RegType.Single) }}>Single</div>
				<div onClick={() => { setRegistrationType(RegType.Team) }}>Team</div>
			</div>

			<RegisterForm registerType={registrationType} />
		</div>
	)
}
