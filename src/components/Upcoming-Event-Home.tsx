import { WhiteButton } from "./Button"

export interface EventDetails {
	title: string,
	description: string,
	date: string,
	time: string,
	venue: string
}
export default function UpcomingEventHome({ title, description, date, time, venue }: EventDetails) {
	return (
		<div className="flex flex-row bg-foreground text-background mx-24 mt-16 rounded-3xl px-16 py-12 w-4/6">
			<div className="flex flex-col pr-12">
				<div className="mb-40">
					<div className="text-[3rem] font-bold">{title}</div>
					<div className="mb-12">{description}</div>
					<div className="text-sm">Date - {date}</div>
					<div className="text-sm">Time - {time}</div>
					<div className="text-sm">Venue - {venue}</div>
				</div>
				<div className="flex flex-row justify-between pr-8 ">
					<WhiteButton text="Know More" />
					<WhiteButton text="Register Now" />
				</div>

			</div>
			<div className="bg-stone-100 grow ml-12 my-4">
			</div>
		</div>
	)
}
