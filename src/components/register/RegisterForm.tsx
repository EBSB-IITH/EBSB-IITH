import { useContext, useEffect, useState } from "react";
import { RegType } from "./Registration";
import { SelectEvents } from "./SelectEvents";
import { RegTypeContext } from "./RegTypeContext";

export function RegisterForm({ registerType }: { registerType: RegType }) {
	const [selectedEvents, setSelectedEvents] = useState(Array<boolean>(4))

	const regType = useContext(RegTypeContext)

	return (
		<div className="flex flex-col bg-foreground text-background rounded-r-2xl px-10 py-10">
			<div className="text-2xl font-bold text-center  ">
				EVENT REGISTRATION
			</div>

			<div className="flex flex-col *:mt-6 [&_input]:px-2 [&_input]:py-0.5 [&_p]:mb-0.5 [&_p]:pl-1.5 [&_input]:w-[18rem] [&_input]:rounded-md caret-foreground [&_input]:text-foreground [&_input]:bg-background">
				{registerType == RegType.Single ?
					<div>
						<p>Name</p>
						<input type="text" required={true} />
					</div>
					:
					<div>
						<p>Name of Contact</p>
						<input />
					</div>
				}
				<div>
					<p>Roll Number</p>
					<input type="text" required={true} maxLength={14} />
				</div>

				<div>
					<p>Mobile Number</p>
					<input type="tel" required={true} autoComplete="tel-local" maxLength={10} />
				</div>

				<div>
					<p>Email ID</p>
					<input type="email" required={true} autoComplete="email" maxLength={25} />
				</div>

				<SelectEvents setSelectedEvents={(val) => { setSelectedEvents(val.flat(1)) }} />

				<button className="bg-background text-foreground rounded-lg font-bold pt-2.5 pb-1.5 text-center align-middle leading-none w-fit px-4 self-end" onClick={() => {

				}}>{regType == RegType.Single ? "SUBMIT" : "NEXT"}</button>

			</div>
		</div>
	)
}
