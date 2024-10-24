import { WhiteButton } from "../../components/Button"


export interface EventDetails {
	title: string,
	description: string,
	date: string,
	time: string,
	venue: string
}

export default function UpcomingEventHome({ title, description, date, time, venue }: EventDetails) {
	return (
		<div className="flex flex-row ml-40 mt-10 py-8">
			<div className="flex flex-col">
				<div className="mb-10">
					<div className="text-[3rem] font-bold mb-10">{title}</div>
					<div className="mb-8">{description}</div>
					<div className="text-sm">Date - {date}</div>
					<div className="text-sm">Time - {time}</div>
					<div className="text-sm">Venue - {venue}</div>
				</div>
				<div className="flex flex-row justify-between gap-4 pr-8 pb-10">
					<WhiteButton text="REGISTER NOW" />
				</div>

			</div>
		</div>
	)
}
