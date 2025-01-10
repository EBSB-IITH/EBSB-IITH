import { useEffect, useState } from "react";

export function CheckEvent({ eventName, valueUpdate }: { eventName: string, valueUpdate: (state: boolean) => void }) {

	const [checked, setChecked] = useState(false)
	useEffect(() => {
		valueUpdate(checked)
	}, [checked])

	return (
		<div>
			<div className="flex flex-row *:self-center">
				<div className="align-middle text-lg flex-grow ">
					{eventName}
				</div>
				<div className="w-[1rem] h-[1rem] rounded-xl border-foreground border-solid border-2 flex flex-col justify-center py-0 *:mx-auto my-0 cursor-pointer" onClick={() => { setChecked(!checked); }}>
					<div className="w-[0.60rem] h-[0.60rem] rounded-xl bg-foreground" hidden={!checked} >
					</div>
				</div>
			</div>

		</div>
	)
}
