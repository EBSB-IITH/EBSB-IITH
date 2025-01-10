import { useEffect, useState } from "react";
import { CheckEvent } from "./CheckEvent";

export enum RegisterableEvents {
	KhoKho = 0,
	KiteFlying = 1,
	Rangoli = 2,
	TugOfWar = 3
}
export const NUMBER_OF_EVENTS = 4

let selectedEvents = new Array<boolean>(NUMBER_OF_EVENTS)
for (let i = 0; i < NUMBER_OF_EVENTS; i++) {
	selectedEvents[i] = false
}

export function SelectEvents({ setSelectedEvents }: { setSelectedEvents: (selectedEvents: Array<boolean>) => void }) {

	const [valueUpdate, setValueUpdate] = useState([-1, false])

	useEffect(() => {
		if (valueUpdate[0] != -1) {
			selectedEvents[valueUpdate[0] as number] = valueUpdate[1] as boolean
		}
		setSelectedEvents(selectedEvents)
	}, [valueUpdate])

	return (
		<div>
			<p>Select Events</p>
			<div className="flex flex-col bg-background text-foreground rounded-lg *:my-1 py-3 px-6">
				<CheckEvent eventName="Kho Kho" valueUpdate={(val) => setValueUpdate([RegisterableEvents.KhoKho, val])} />
				<CheckEvent eventName="Kite Flying" valueUpdate={(val) => setValueUpdate([RegisterableEvents.KiteFlying, val])} />
				<CheckEvent eventName="Rangoli" valueUpdate={(val) => setValueUpdate([RegisterableEvents.Rangoli, val])} />
				<CheckEvent eventName="Tug of War" valueUpdate={(val) => setValueUpdate([RegisterableEvents.TugOfWar, val])} />
			</div>
		</div >
	)
}
